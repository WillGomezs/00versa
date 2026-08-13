# RELATÓRIO DE AUDITORIA DE SEGURANÇA — v1.7.0

**Data da revisão:** 13/08/2026  
**Escopo:** inclusão da trilha TRANSPETRO — Análise de Sistemas — Segurança Cibernética e da Informação e regressão das proteções da versão 1.6.0.

## Resultado

**APROVADO NA AUDITORIA ESTÁTICA E NAS VALIDAÇÕES DE RUNTIME SEM DOM.**

A nova trilha foi incorporada sem alterar o modelo arquitetural do Versa: aplicação estática, sem backend, com estado acadêmico armazenado localmente no navegador.

## Verificações executadas

- `index.html` mantém Content Security Policy restritiva:
  - `default-src 'self'`;
  - `script-src 'self'`;
  - `object-src 'none'`;
  - `base-uri 'none'`;
  - `connect-src 'none'`;
  - `frame-src 'none'`;
  - `form-action 'none'`.
- Política de referenciador permanece `no-referrer`.
- A trilha TRANSPETRO é carregada por arquivo JavaScript local (`transpetro-cyber-data.js`), sem dependência de script remoto.
- Não foram encontrados usos executáveis de `eval()`, `new Function()` ou `document.write()` nos arquivos da aplicação.
- Não há permissões de rede adicionadas à CSP para viabilizar a nova trilha.
- Os assets continuam versionados por query string local (`?v=12`).
- Todos os arquivos JavaScript da raiz e de `tools/` passaram em `node --check`.
- As validações estruturais e de runtime sem DOM da trilha, flashcards, vídeos e motor adaptativo foram aprovadas.

## Validações relacionadas

- TRANSPETRO Cyber: **1.107 verificações aprovadas**.
- Flashcards: **2.792 verificações aprovadas**.
- Catálogo audiovisual: **1.683 verificações aprovadas**.
- Motor adaptativo: **30 verificações aprovadas**.
- CFAQ-MOC: **2.083 verificações aprovadas**.
- Banco histórico DATAPREV: **447 verificações aprovadas**.

## Limitação do ambiente desta auditoria

O teste de fluxo DOM e o script automatizado `tools/security-audit.js` foram atualizados para a v1.7.0, porém não foram reexecutados neste ambiente porque a dependência de desenvolvimento `jsdom` não pôde ser instalada de forma utilizável no container. Isso **não é tratado como aprovação desses dois testes dinâmicos**.

Antes da publicação, em uma máquina com Node.js e acesso ao registro npm, recomenda-se executar:

```bash
npm ci
npm test
```

A publicação do site em si não depende de npm; a dependência existe apenas para testes de desenvolvimento.

## Conclusão

Não foi identificada regressão estática de segurança introduzida pela quinta trilha. A v1.7.0 preserva a política de execução local e o isolamento de rede das versões anteriores. A liberação final pode ser complementada pelo smoke test DOM em ambiente com `jsdom`.
