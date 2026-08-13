# Relatório de Auditoria de Segurança — Versa Concursos v1.8.0

Data: 13/08/2026

## Resumo

A v1.8.0 preserva a arquitetura estática da v1.7.1 e adiciona o Mastery Engine sem backend, conta, API, analytics ou envio de progresso para servidor próprio.

A auditoria estática foi aprovada com **22 verificações**.

## Alterações avaliadas

Foram revisados especialmente:

- `index.html` e Content Security Policy;
- `security-bootstrap.js`;
- `app.js`;
- `adaptive-engine.js`;
- persistência em `localStorage`;
- novos dados de confiança, tempo, pré-teste e recuperação;
- links externos e thumbnails;
- compatibilidade com progresso legado.

## Privacidade dos novos recursos

Podem ser armazenados localmente:

- nível de confiança por tentativa;
- tempo de resposta estimado;
- resultado de pré-teste;
- autoavaliação da recuperação aberta;
- classificação pedagógica do erro;
- histórico necessário ao cálculo de retenção e maestria.

O texto digitado na recuperação aberta **não é persistido**. Ele existe apenas no estado de memória da sessão para que o estudante possa compará-lo com os pontos-chave e desaparece ao sair/recarregar.

## Superfície externa

Não foram adicionados:

- scripts externos;
- iframes;
- APIs de IA;
- formulários de envio;
- login;
- telemetria;
- analytics.

As regras existentes para conteúdo externo permanecem. Thumbnails diretas do YouTube continuam limitadas a `i.ytimg.com`, com política de não envio de referrer, e a abertura dos recursos ocorre após ação consciente do usuário.

## Persistência e compatibilidade

Os novos campos são opcionais e normalizados. A migração não apaga o progresso da v1.7.1. O botão de exclusão continua restrito às chaves do Versa.

## Validações

- auditoria estática: 22/22 verificações aprovadas;
- sintaxe dos principais scripts: aprovada;
- suíte estática completa: 12.506 verificações aprovadas;
- renderização de templates das cinco trilhas: 57 verificações aprovadas.

O smoke test DOM completo não foi executado porque `jsdom` não está disponível neste ambiente. A tentativa de instalação offline falhou por ausência de dependências no cache. O relatório não apresenta essa etapa como aprovada.

## Conclusão

Não foi identificada, nas verificações executadas, regressão estrutural de segurança decorrente do Mastery Engine. A versão continua adequada ao modelo de publicação estática previsto pelo projeto, observadas as recomendações de `SECURITY.md` e a execução de `npm test` em ambiente com as dependências de desenvolvimento instaladas antes da publicação definitiva.
