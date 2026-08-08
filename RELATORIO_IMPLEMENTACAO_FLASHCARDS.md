# Implementação de flashcards — Versa Concursos v1.1.0

Data: 08/08/2026

Status: **IMPLEMENTADO**

## Escopo entregue

O sistema de flashcards foi incorporado às quatro trilhas sem alterar o conteúdo ou apagar o progresso anterior.

| Curso | Flashcards |
|---|---:|
| DATAPREV | 133 |
| ASON | 80 |
| IBGE | 98 |
| CFAQ-MOC Nacional | 30 |
| **Total** | **341** |

Cada microlição possui um cartão-base com:

- pergunta de recuperação ativa na frente;
- síntese conceitual na resposta;
- pontos essenciais;
- exemplo aplicado, quando disponível;
- vínculo com curso, disciplina, módulo e lição;
- identificador estável para preservar o histórico.

## Experiência do aluno

A nova opção **Flashcards** foi adicionada ao menu de cada curso. A tela permite:

- revisar cartões vencidos;
- aprender até dez cartões novos por sessão;
- revisar pontos fracos identificados pelo caderno de erros;
- filtrar por disciplina e módulo;
- iniciar sessões por baralho temático;
- revelar a resposta antes de se autoavaliar;
- usar os atalhos de teclado Espaço e 1–4;
- acompanhar cartões novos, estudados, vencidos e maduros.

## Repetição espaçada

O agendador local utiliza quatro classificações:

- **Errei:** reapresentação após dez minutos e uma repetição adicional no final da sessão;
- **Difícil:** intervalo inicial de um dia;
- **Bom:** intervalo inicial de três dias;
- **Fácil:** intervalo inicial de sete dias.

Os intervalos posteriores crescem conforme repetição e facilidade. O cartão registra vencimento, intervalo, fator de facilidade, repetições, lapsos, última classificação e quantidade de revisões.

## Compatibilidade e dados

- O progresso continua salvo em `versa-progress-<curso>`.
- Dados antigos são normalizados automaticamente com o novo campo `flashcards`.
- Lições, notas, XP, revisões, erros, diagnósticos e simulados antigos são preservados.
- Cada cartão concede no máximo um XP por dia.
- O sistema funciona sem login, backend, banco remoto ou compilação.
- Os scripts são clássicos e compatíveis com abertura direta e GitHub Pages.

## CFAQ-MOC Nacional

Os 30 cartões CFAQ-MOC cobrem exclusivamente o núcleo comum de Português e Matemática. A interface alerta que inscrição, etapas, duração e critérios locais devem ser confirmados no edital da Capitania, Delegacia ou Agência responsável.

## Arquivos principais

- `flashcards-data.js`: constrói o catálogo a partir das microlições;
- `flashcards-engine.js`: normaliza estados e calcula os intervalos;
- `index.html`: interface, sessões, filtros, integração com erros e progresso;
- `tools/validate-flashcards.js`: valida catálogo, referências, migração e agendador;
- `tools/smoke-test-dom.js`: valida o fluxo completo no DOM.
