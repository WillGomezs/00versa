# Publicação segura no GitHub Pages

Este guia considera o pacote Versa Concursos v1.6.0.

## Antes de enviar

1. Extraia o ZIP em uma pasta nova.
2. Confirme que não existe `fontes/Rota_Naval_original.html` nem outro arquivo-fonte privado.
3. Compare o SHA-256 do ZIP com o valor informado na entrega.
4. Não inclua `.env`, credenciais, chaves privadas, tokens, listas de alunos ou documentos pessoais.
5. Se usar Git, confira `git status` e o conteúdo do commit antes de publicar.

## Proteja a conta e o repositório

1. Ative autenticação de dois fatores ou passkey na conta GitHub.
2. Dê permissão de escrita apenas a quem realmente mantém o site.
3. Proteja a branch de publicação com revisão antes de merge quando houver mais de um colaborador.
4. Em **Settings > Security**, habilite os recursos disponíveis de secret scanning, Dependabot alerts e security updates.
5. Não reutilize token pessoal em computador compartilhado.

## Publique o site

1. Envie o conteúdo da pasta do projeto para a raiz da branch `main`.
2. Abra **Settings > Pages**.
3. Em **Build and deployment**, escolha **Deploy from a branch**, `main` e `/(root)`.
4. Depois que o certificado estiver disponível, marque **Enforce HTTPS**. O GitHub informa que essa opção redireciona acessos HTTP para HTTPS e impede interceptação ou alteração do tráfego em trânsito.
5. Abra o endereço publicado em janela anônima e confirme trilhas, plano diário, mapa de domínio, flashcards, imagens e exclusão dos dados locais.

Documentação oficial: [GitHub — proteger um site Pages com HTTPS](https://docs.github.com/en/pages/getting-started-with-github-pages/securing-your-github-pages-site-with-https), [segurança da conta](https://docs.github.com/en/code-security/tutorials/implement-supply-chain-best-practices/securing-accounts) e [prevenção de vazamento de dados](https://docs.github.com/en/enterprise-cloud@latest/code-security/tutorials/secure-your-organization/prevent-data-leaks).

## Domínio próprio

Se usar domínio próprio, verifique o domínio no GitHub para reduzir risco de sequestro e mantenha os registros DNS somente enquanto o site estiver ativo. Consulte [verificação de domínio personalizado](https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site/verifying-your-custom-domain-for-github-pages).

## Limitação importante do GitHub Pages

O pacote aplica CSP e Referrer Policy no HTML, mas um site estático no GitHub Pages não oferece ao projeto controle completo sobre todos os cabeçalhos HTTP de resposta. Controles como `frame-ancestors`, HSTS personalizado, `X-Content-Type-Options`, `Permissions-Policy` e isolamento COOP/COEP precisam ser configurados pelo provedor de hospedagem.

Se esses cabeçalhos forem obrigatórios para sua política organizacional, publique em uma plataforma que permita defini-los e use, no mínimo:

```text
Content-Security-Policy: default-src 'self'; base-uri 'none'; object-src 'none'; script-src 'self'; style-src 'self'; img-src 'self' data: https://i.ytimg.com; connect-src 'none'; frame-src 'none'; frame-ancestors 'none'; form-action 'none'
Referrer-Policy: no-referrer
X-Content-Type-Options: nosniff
Permissions-Policy: camera=(), microphone=(), geolocation=(), payment=(), usb=()
Cross-Origin-Opener-Policy: same-origin
Strict-Transport-Security: max-age=31536000; includeSubDomains
```

Teste os cabeçalhos no ambiente final antes de declará-los implantados. Não copie `includeSubDomains` sem verificar todos os subdomínios.

## Rotina de atualização

- publique apenas pacotes íntegros e revisados;
- examine alertas do GitHub e atualize dependências com teste prévio;
- faça nova auditoria ao adicionar backend, login, formulário, analytics, pagamento ou conteúdo de terceiros;
- guarde cópia recuperável da versão anterior para reversão.
