# Relatório de auditoria de segurança — Versa Concursos v1.5.0

Data: **09/08/2026**  
Status: **APROVADO**

## Mudança auditada

A versão 1.5.0 adiciona histórico de tentativas, estados de domínio, agenda adaptativa das lições e ciclo de resolução do caderno de erros. Esses dados permanecem exclusivamente no armazenamento local do navegador.

## Controles verificados

- nenhuma conta, API, banco remoto, formulário de envio ou analytics;
- migração defensiva do progresso anterior;
- normalização e limites para estruturas persistidas;
- dados não confiáveis inseridos como texto, sem execução de HTML;
- CSP com scripts locais e imagens externas restritas a `i.ytimg.com`;
- nenhum iframe ou vídeo incorporado;
- links e thumbnails com política `no-referrer`;
- exclusão limitada às chaves iniciadas por `versa-`;
- ausência de segredos estáticos detectáveis no pacote.

## Resultado automatizado

A auditoria executou **42 verificações específicas de segurança** e foi aprovada com:

- zero carga XSS executada;
- zero erro de JavaScript;
- zero conexão automática de terceiros além das thumbnails autorizadas;
- zero iframe ou mídia incorporada;
- migração adaptativa validada sem perda do progresso anterior.

O resultado estruturado está em `AUDITORIA_SEGURANCA_V1.5.0.json`.

## Limites e risco residual

O `localStorage` não é criptografado; por isso, o aluno deve usar apenas apelido e não registrar dados pessoais. As thumbnails do YouTube criam conexão técnica com `i.ytimg.com`, conforme descrito em `PRIVACIDADE.md`. GitHub Pages não permite ao projeto controlar todos os cabeçalhos HTTP; os controles de publicação e as responsabilidades remanescentes estão no guia de publicação segura.

Este trabalho segue boas práticas inspiradas em ISO/IEC 27001, 27002 e 27701, LGPD, OWASP e NIST SSDF. Isso não constitui certificação formal nem garantia de risco zero.

