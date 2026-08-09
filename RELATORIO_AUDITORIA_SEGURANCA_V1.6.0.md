# Relatório de auditoria de segurança — Versa Concursos v1.6.0

Data: **09/08/2026**  
Status: **APROVADO**

## Mudança auditada

A versão 1.6.0 adiciona 184 questões históricas DATAPREV, textos-base, figuras locais e dois modos de simulado. O conteúdo é carregado por um script estático local e não introduz conta, servidor, API, formulário de envio, analytics ou banco remoto.

## Controles preservados

- política CSP com scripts locais e imagens externas restritas às thumbnails autorizadas do YouTube;
- nenhum iframe ou reprodução incorporada;
- caminhos das figuras validados antes da renderização;
- texto das questões escapado antes de ser inserido na interface;
- limites e normalização do progresso no armazenamento local;
- itens em branco não geram registros artificiais no caderno de erros;
- ausência de credenciais ou segredos estáticos detectáveis;
- links externos com HTTPS, `noopener`, `noreferrer` e política `no-referrer`.

## Resultado

Foram executados o teste integral do projeto, o teste DOM, a auditoria estática e dinâmica de segurança e a auditoria de dependências. O resultado estruturado atualizado está em `AUDITORIA_SEGURANCA_V1.6.0.json`.

## Risco residual

O progresso continua no `localStorage`, sem criptografia; o aluno deve usar apenas apelido e não inserir dados pessoais ou segredos. Os PDFs de provas são materiais fornecidos para estudo: antes de republicá-los, o responsável pelo repositório deve confirmar as condições de redistribuição. Os controles seguem referências de ISO/IEC 27001, 27002, 27701 e 27017, LGPD, OWASP e NIST SSDF, mas não constituem certificação formal nem garantia de risco zero.
