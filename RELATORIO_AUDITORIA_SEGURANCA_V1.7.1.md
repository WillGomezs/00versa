# Auditoria de segurança — Versa v1.7.1

**Data:** 13/08/2026  
**Status estático:** **APROVADO**

## Resultado

A auditoria estática específica da v1.7.1 aprovou **22 verificações**, incluindo CSP, política `no-referrer`, ausência de JavaScript inline, ausência de iframe, bloqueio de execução dinâmica perigosa, validação de URLs externas e caminhos locais, preservação do isolamento de `localStorage`, proteção de links `target=_blank` e carregamento explícito da trilha TRANSPETRO antes dos dados derivados.

Também foram aprovados os validadores de conteúdo da TRANSPETRO, flashcards, catálogo audiovisual, motor adaptativo, CFAQ-MOC e banco histórico DATAPREV.

## Teste dinâmico DOM

O projeto mantém `tools/smoke-test-dom.js` e `tools/security-audit.js` para execução dinâmica com **jsdom 26.1.0**. Nesta sessão isolada de construção, a dependência não estava instalada e não pôde ser obtida pelo gerenciador de pacotes: a tentativa offline retornou `ENOTCACHED` e a tentativa de rede não concluiu dentro do ambiente. Por esse motivo, não foi registrado um falso resultado de aprovação dinâmica.

Durante a revisão, os dois testes jsdom também foram atualizados para usar a API suportada `ResourceLoader`, em vez do interceptador legado, deixando a suíte pronta para execução em um ambiente de desenvolvimento com `npm ci` disponível.

## Como reproduzir

```bash
npm ci
npm test
```

Sem jsdom, a parte estrutural pode ser reproduzida com:

```bash
npm run test:static
```

A indisponibilidade de jsdom nesta sessão é uma limitação do ambiente de validação e não um erro funcional identificado no site.
