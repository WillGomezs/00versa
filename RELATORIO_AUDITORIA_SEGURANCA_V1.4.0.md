# Relatório de auditoria de segurança — Versa Concursos v1.4.0

Data: **09/08/2026**  
Status: **APROVADO**

## Mudança auditada

A versão 1.4.0 passou a carregar thumbnails dos vídeos diretos a partir de `https://i.ytimg.com`. A mudança foi autorizada para melhorar a identificação visual e a navegação até o vídeo correto.

O carregamento de uma thumbnail cria conexão com a infraestrutura do YouTube e pode transmitir dados técnicos normais, como endereço IP, agente do navegador e horário. Essa consequência está descrita na política de privacidade e na própria interface.

## Controles preservados

- nenhuma reprodução ou incorporação por iframe;
- nenhum script, API, cookie, analytics ou anúncio do YouTube inserido no Versa;
- CSP permite imagens externas somente em `https://i.ytimg.com`;
- `referrerpolicy="no-referrer"` em todas as thumbnails;
- links externos com `noopener`, `noreferrer` e `no-referrer`;
- ID do YouTube validado antes da construção da URL da thumbnail;
- fallback local quando a imagem não carrega;
- capas de playlist, coleção e busca geradas localmente em CSS;
- `connect-src 'none'`, `frame-src 'none'`, `media-src 'none'` e `object-src 'none'` preservados.

## Resultado automatizado

A auditoria executa **42 verificações específicas de segurança**, cobrindo CSP, URLs, referenciadores, XSS, armazenamento, segredos estáticos e conexões externas permitidas. O teste foi aprovado com:

- zero execução de carga XSS;
- zero erro de JavaScript;
- zero host externo autorizado além de `i.ytimg.com` para imagens;
- zero iframe ou vídeo incorporado;
- preservação da exclusão limitada às chaves `versa-`.

A auditoria de interface também confirma que a thumbnail está dentro de um link para o mesmo ID do vídeo e que as três capas especiais são exibidas.

## Risco residual

O proprietário da infraestrutura de thumbnails pode registrar dados técnicos da conexão e alterar ou retirar as imagens. A restrição de host e o `no-referrer` reduzem a exposição, mas não tornam a solicitação anônima. Caso seja necessário voltar ao modo de máxima privacidade, as thumbnails devem ser armazenadas localmente ou substituídas pelas capas CSS.
