# Relatório de Auditoria de Segurança — Versa Concursos v1.8.1

Data: 13/08/2026

A v1.8.1 preserva a arquitetura estática e local da v1.8.0 e adiciona demonstrativos visuais DATAPREV sem backend, conta, API, analytics ou coleta adicional.

## Mudança avaliada

- novo arquivo local `dataprev-visuals.js`;
- renderer de demonstrativos em `app.js`;
- estilos e interações locais em `styles.css`;
- nenhuma nova origem externa na Content Security Policy;
- nenhuma nova chave de armazenamento;
- nenhum dado digitado pelo aluno é inserido no catálogo visual.

Os textos do catálogo são passados pela função de escape da aplicação. Os passos visuais alteram apenas classes e texto local do DOM, sem persistência.

## Resultado

`npm run test:static`: aprovado. Auditoria estática de segurança: **24/24 verificações aprovadas**, incluindo CSP, ausência de JavaScript inline, ausência de iframe, ausência de execução dinâmica perigosa, sanitização existente de URLs/caminhos, proteção de dados locais e ordem de carregamento dos arquivos da aplicação.
