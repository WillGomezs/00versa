#!/usr/bin/env node
'use strict';

const fs = require('fs');
const path = require('path');
const http = require('http');
const { JSDOM, VirtualConsole, ResourceLoader } = require('jsdom');

const root = path.resolve(__dirname, '..');
const read = (file) => fs.readFileSync(path.join(root, file), 'utf8');
const html = read('index.html');
const app = read('app.js');
const bootstrap = read('security-bootstrap.js');
const runtime = [html, app, bootstrap, read('dataprev-history-data.js'), read('transpetro-cyber-data.js'), read('flashcards-engine.js'), read('adaptive-engine.js')].join('\n');
const checks = [];
const failures = [];
const assert = (condition, label) => {
  checks.push(label);
  if (!condition) failures.push(label);
};

assert(/Content-Security-Policy/i.test(html), 'CSP definida no documento');
for (const directive of ["default-src 'self'", "script-src 'self'", "connect-src 'none'", "frame-src 'none'", "object-src 'none'", "base-uri 'none'", "form-action 'none'"]) {
  assert(html.includes(directive), `CSP contém ${directive}`);
}
assert(/<meta name="referrer" content="no-referrer">/i.test(html), 'Política de referenciador definida');
assert(html.includes("img-src 'self' data: https://i.ytimg.com"), 'CSP permite thumbnails somente no host oficial autorizado');
assert(!/<script(?![^>]*\bsrc=)[^>]*>[\s\S]*?<\/script>/i.test(html), 'Sem JavaScript inline');
assert(!/<style\b[^>]*>/i.test(html), 'Sem folha de estilo inline');
assert(!/<iframe\b/i.test(runtime), 'Sem iframe de terceiros');
assert(!/youtube-nocookie\.com|img\.youtube\.com/i.test(runtime), 'Sem iframe ou hosts alternativos de mídia do YouTube');
assert(/https:\/\/i\.ytimg\.com\/vi\/\$\{esc\(v\.youtubeId\)\}\/hqdefault\.jpg/.test(app), 'Thumbnail construída no host oficial a partir de ID validado');
assert(!/\blocalStorage\.clear\s*\(/.test(runtime), 'Sem limpeza global do armazenamento da origem');
assert(!/\beval\s*\(|\bnew\s+Function\s*\(|document\.write\s*\(/.test(runtime), 'Sem execução dinâmica perigosa');
assert(/safeExternalUrl/.test(app) && /safeAssetPath/.test(app), 'URLs externas e caminhos locais validados');
assert(/clearVersa/.test(app), 'Exclusão limitada às chaves Versa');
assert(!/willgomezs/i.test(runtime), 'Identificador pessoal removido do pacote público');
assert(!fs.existsSync(path.join(root, 'fontes', 'Rota_Naval_original.html')), 'Fonte bruta não publicada');

const blankTags = app.match(/<a\b[^>]*target=["']_blank["'][^>]*>/gi) || [];
assert(blankTags.length > 0, 'Links externos encontrados para validação');
assert(blankTags.every((tag) => /rel=["'][^"']*noopener[^"']*noreferrer[^"']*["']/i.test(tag)), 'Todo target=_blank usa noopener e noreferrer');
assert(blankTags.every((tag) => /referrerpolicy=["']no-referrer["']/i.test(tag)), 'Todo target=_blank suprime referenciador');

const assignmentSecret = /(?:api[_-]?key|client[_-]?secret|access[_-]?token|private[_-]?key|password)\s*[:=]\s*["'][^"']{8,}["']/i;
assert(!assignmentSecret.test(runtime), 'Sem segredo estático aparente no código de execução');

const mime = { '.html':'text/html; charset=utf-8', '.js':'text/javascript; charset=utf-8', '.css':'text/css; charset=utf-8', '.png':'image/png', '.jpg':'image/jpeg', '.svg':'image/svg+xml' };
const server = http.createServer((request, response) => {
  const pathname = decodeURIComponent(new URL(request.url, 'http://127.0.0.1').pathname);
  const requested = pathname === '/' ? 'index.html' : pathname.replace(/^\/+/, '');
  const filePath = path.resolve(root, requested);
  if (!filePath.startsWith(root + path.sep) || !fs.existsSync(filePath) || !fs.statSync(filePath).isFile()) return response.writeHead(404).end();
  response.writeHead(200, { 'Content-Type': mime[path.extname(filePath).toLowerCase()] || 'application/octet-stream' });
  fs.createReadStream(filePath).pipe(response);
});

(async () => {
  await new Promise((resolve) => server.listen(0, '127.0.0.1', resolve));
  const origin = `http://127.0.0.1:${server.address().port}`;
  const external = [];
  const errors = [];
  const virtualConsole = new VirtualConsole();
  virtualConsole.on('jsdomError', (error) => errors.push(error.message));
  virtualConsole.on('error', (message) => errors.push(String(message)));
  const attack = '<img id="pwn" src=x onerror="window.__pwned=1">';
  const dom = await JSDOM.fromURL(origin + '/', {
    resources: new (class extends ResourceLoader {
      fetch(url, options) {
        if (!url.startsWith(origin)) {
          external.push(url);
          return Promise.resolve(Buffer.alloc(0));
        }
        return super.fetch(url, options);
      }
    })(),
    runScripts: 'dangerously',
    pretendToBeVisual: true,
    virtualConsole,
    beforeParse(window) {
      window.scrollTo = () => {};
      window.confirm = () => true;
      window.localStorage.setItem('unrelated-application-key', 'preservar');
      window.localStorage.setItem('versa-profile-v2', JSON.stringify({ name:attack, dailyMinutes:999, onboarded:true, theme:'invalid' }));
      window.localStorage.setItem('versa-active-course', JSON.stringify('cfaq'));
      window.localStorage.setItem('versa-drafts-v2', JSON.stringify([{ title:attack, course:'cfaq' }]));
    },
  });
  await new Promise((resolve) => dom.window.addEventListener('load', () => setTimeout(resolve, 150)));
  const { document } = dom.window;

  assert(!document.querySelector('#pwn'), 'Carga maliciosa de perfil não cria elemento HTML');
  assert(dom.window.__pwned !== 1, 'Carga maliciosa não executa evento');
  document.querySelector('[data-view="admin"]').click();
  assert(!document.querySelector('#pwn'), 'Carga maliciosa de rascunho permanece como texto');
  assert(document.body.textContent.includes('<img id="pwn"'), 'Texto malicioso é exibido sem interpretação');
  document.querySelector('[data-view="library"]').click();
  assert(document.querySelectorAll('iframe').length === 0, 'Biblioteca não incorpora conteúdo externo');
  const remoteImages = [...document.querySelectorAll('img')].filter((img) => /^https?:/i.test(img.getAttribute('src') || ''));
  const isAuthorizedThumbnail = (url) => /^https:\/\/i\.ytimg\.com\/vi\/[A-Za-z0-9_-]{11}\/hqdefault\.jpg$/.test(url);
  assert(remoteImages.length > 0, 'Thumbnails externas renderizadas na biblioteca');
  assert(remoteImages.every((img) => isAuthorizedThumbnail(img.src)), 'Somente thumbnails oficiais do YouTube são renderizadas externamente');
  assert(remoteImages.every((img) => img.getAttribute('referrerpolicy') === 'no-referrer'), 'Thumbnails não enviam o endereço da página de origem');
  assert(external.every(isAuthorizedThumbnail), 'Nenhuma conexão automática além das thumbnails autorizadas');

  const security = dom.window.__VERSA_SECURITY;
  assert(security.safeExternalUrl('javascript:alert(1)') === '#', 'Esquema javascript bloqueado');
  assert(security.safeExternalUrl('http://example.com') === '#', 'HTTP externo bloqueado');
  assert(/^https:\/\/example\.com\/?$/.test(security.safeExternalUrl('https://example.com')), 'HTTPS externo permitido');
  assert(security.safeAssetPath('../segredo.png') === '', 'Travessia de diretório bloqueada');
  assert(security.safeAssetPath('assets/cfaq/figura.png') === 'assets/cfaq/figura.png', 'Imagem local permitida');
  security.clearVersaData();
  assert(dom.window.localStorage.getItem('unrelated-application-key') === 'preservar', 'Exclusão preserva dados de outras aplicações da mesma origem');
  assert([...Array(dom.window.localStorage.length)].map((_, i) => dom.window.localStorage.key(i)).every((key) => !key.startsWith('versa-')), 'Exclusão remove somente os dados Versa');
  assert(errors.length === 0, 'Sem erros de JavaScript durante a auditoria dinâmica');

  dom.window.close();
  server.close();
  const payload = {
    status: failures.length ? 'failed' : 'passed',
    checks: checks.length,
    failures,
    summary: {
      configuredExternalThumbnails: remoteImages.length,
      observedThumbnailRequestsInJsdom: external.length,
      otherAutomaticThirdPartyRequests: external.filter((url) => !/^https:\/\/i\.ytimg\.com\//.test(url)).length,
      runtimeErrors: errors.length,
      xssPayloadsExecuted: 0,
    },
  };
  if (!failures.length) {
    fs.writeFileSync(
      path.join(root, 'AUDITORIA_SEGURANCA_V1.8.1.json'),
      JSON.stringify(payload, null, 2) + '\n',
    );
  }
  console.log(JSON.stringify(payload, null, 2));
  if (failures.length) process.exit(1);
})().catch((error) => {
  server.close();
  console.error(error);
  process.exit(1);
});
