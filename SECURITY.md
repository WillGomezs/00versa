# Política de segurança

## Versão suportada

A versão mantida é a **1.4.x**. Versões anteriores não contêm todas as proteções descritas na auditoria atual.

## Como relatar uma vulnerabilidade

Comunique o responsável pelo repositório por um canal privado. Não publique credenciais, dados pessoais, prova de conceito explorável ou detalhes que permitam ataque em uma issue pública. Inclua, quando possível:

- versão e endereço afetados;
- descrição do comportamento;
- passos mínimos para reprodução sem dados reais;
- impacto esperado;
- sugestão de correção.

Se um segredo já tiver sido publicado, removê-lo do arquivo não é suficiente: revogue ou rotacione a credencial imediatamente e depois limpe o histórico conforme o procedimento do provedor.

## Regras de manutenção

- executar `npm test` e `npm audit --package-lock-only` antes de cada publicação;
- revisar mudanças em `index.html`, `app.js`, `security-bootstrap.js` e na política CSP;
- não adicionar analytics, formulários, login, API, iframe ou script externo sem nova avaliação de risco e privacidade;
- manter imagens externas restritas a `i.ytimg.com` e aplicar `no-referrer` às thumbnails;
- nunca armazenar segredos no repositório;
- habilitar 2FA, HTTPS obrigatório, alertas do Dependabot e varredura de segredos no GitHub;
- verificar o SHA-256 do pacote recebido antes da publicação.
