# Relatório de implementação adaptativa — Versa Concursos v1.5.0

Data: **09/08/2026**  
Status: **IMPLEMENTADO E VALIDADO**

## Resultado

A versão 1.5.0 transforma o progresso bruto em orientação prática. O aluno passa a receber uma prioridade de estudo, um plano diário compatível com sua meta de tempo e um mapa de domínio por microlição. Toda a lógica funciona localmente no navegador e preserva o progresso das versões anteriores.

## Plano inteligente diário

O plano combina, conforme a situação do aluno:

- revisão de lição vencida;
- retomada de ponto fraco;
- próxima microlição com pré-requisitos cumpridos;
- flashcards para recuperação ativa.

Os blocos somam exatamente a meta diária configurada. A prioridade é explicável: o sistema apresenta o motivo de cada indicação e não utiliza inteligência artificial externa nem envia respostas para servidores.

## Mapa de domínio

Cada microlição recebe um dos quatro estados abaixo.

| Estado | Interpretação |
|---|---|
| Não estudado | Ainda não há evidência de aprendizagem. |
| Em aprendizagem | Há atividade, mas o desempenho ainda é insuficiente ou instável. |
| Em consolidação | O desempenho é adequado, porém ainda falta confirmação espaçada. |
| Dominado | Há bom desempenho, evidência em dias diferentes e nenhum erro ativo. |

O cálculo considera nota da lição, tentativas de questões, classificações de flashcards e erros ativos. Lições não iniciadas não entram como nota zero no aproveitamento do aluno.

## Diagnóstico detalhado

O diagnóstico agora registra cada resposta e exibe resultados por disciplina. Também identifica lições fracas, sugere a primeira retomada e passa a alimentar o mesmo histórico usado pelo plano diário e pelo caderno de erros.

## Caderno de erros resolvível

Os erros ficam separados em **ativos** e **superados**. Um item é considerado superado depois de dois acertos em dias diferentes. Esse critério evita que um único acerto imediato apague uma dificuldade que ainda não foi consolidada.

## Revisão espaçada de lições

O intervalo de revisão varia conforme o resultado:

- desempenho abaixo de 60%: retorno em um dia;
- de 60% a 79%: retorno inicial em dois dias;
- de 80% a 89%: retorno inicial em quatro dias;
- a partir de 90%: retorno inicial em sete dias.

Resultados posteriores podem ampliar o intervalo. O agendamento antigo é migrado e preservado.

## Feedback por alternativa

Quando o banco possui comentário específico para a alternativa escolhida, a interface apresenta primeiro essa justificativa e mantém a explicação geral em uma área expansível. Questões que ainda não possuem comentários individuais continuam funcionando com a explicação geral, sem conteúdo inventado.

## Compatibilidade e privacidade

- progresso, pontuações, flashcards, XP e revisões existentes são preservados;
- dados adaptativos ficam no `localStorage` do próprio navegador;
- não foi adicionado backend, conta, API, analytics ou rastreamento;
- estruturas recebidas do armazenamento são normalizadas e limitadas;
- o usuário pode apagar todos os dados do Versa pela interface.

## Validação

A versão inclui teste especializado do motor adaptativo, teste de migração, verificação do plano em todas as quatro trilhas, teste completo da interface em DOM e auditoria de segurança. Os resultados finais também estão registrados nos relatórios e arquivos JSON do pacote.

