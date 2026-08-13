# Relatório de Implementação — Versa Mastery Engine v1.8.0

Data: 13/08/2026

## Objetivo

Evoluir as cinco trilhas do Versa para uma experiência mais interativa e orientada à aprendizagem de longo prazo, sem remover conteúdo, sem zerar progresso legado e sem transformar velocidade ou gamificação em objetivo pedagógico.

A implementação foi feita como uma camada **aditiva e retrocompatível** sobre os fluxos existentes. Dados antigos continuam válidos; os novos sinais são opcionais e normalizados quando ausentes.

## Melhorias implementadas

### 1. Maestria adaptativa

O `adaptive-engine.js` foi evoluído para o **Mastery Engine v2.0.0**. Cada microlição mantém as chaves internas legadas para compatibilidade, mas passa a exibir quatro estados pedagógicos:

- Desconhecido;
- Familiar;
- Recuperável;
- Consolidado.

O índice da microlição combina evidências disponíveis, com pesos normalizados:

- desempenho da própria lição: 35%;
- precisão em questões: 30%;
- flashcards: 15%;
- calibração da confiança: 10%;
- retenção espaçada: 7%;
- eficiência temporal: 3%.

Erros ativos aplicam penalidade e **erros convictos** recebem peso adicional. Uma lição só entra em `Consolidado` quando há pontuação alta, evidência em momentos diferentes, retenção suficiente e ausência de erro ativo.

O tempo tem peso pequeno (3%) para evitar premiar pressa.

### 2. Confiança e metacognição

Nas questões de microlição e no diagnóstico, o estudante informa antes da correção:

- Chutei;
- Pouco certo;
- Certo;
- Muito certo.

Uma resposta errada com alta confiança passa a ser registrada como **erro convicto**, recebendo prioridade máxima na revisão adaptativa.

### 3. Pré-teste por microlição

No primeiro acesso a uma microlição, o aluno recebe um pré-teste curto antes da explicação.

Características de segurança pedagógica:

- pode ser pulado;
- a decisão de pular é lembrada;
- erro no pré-teste não reduz domínio;
- erro no pré-teste não entra no caderno de erros;
- o resultado pode ser comparado posteriormente ao desempenho pós-estudo.

### 4. Recuperação ativa sem alternativas

Cada microlição agora possui um campo de recuperação aberta antes dos exercícios objetivos. O aluno escreve com as próprias palavras, revela os pontos-chave e se autoavalia como:

- não lembrei;
- lembrei parcialmente;
- lembrei bem.

O texto digitado fica apenas na memória da sessão para permitir comparação visual após revelar os pontos-chave. **Ele não é gravado em `localStorage`**. Somente a autoavaliação pode ser persistida.

### 5. Caderno de Erros 2.0

Os erros podem ser classificados por causa pedagógica:

- conteúdo;
- confusão conceitual;
- interpretação;
- desatenção;
- chute;
- procedimento.

O marcador `erro-convicto` é preservado como categoria primária quando aplicável. A causa indicada pelo estudante é armazenada separadamente.

A regra legada de superação foi preservada: o erro exige confirmações corretas em dias diferentes para deixar de ser ativo.

### 6. Comentário alternativa por alternativa

Após a correção de uma questão de microlição, o estudante pode abrir a análise de todas as alternativas. Quando o banco possui feedback individualizado, ele é usado; quando a fonte não traz justificativa específica para um distrator, o Versa utiliza um fallback pedagógico sem inventar informação atribuída à fonte.

### 7. Interleaving

Foi adicionado um modo de **Prática intercalada** com assuntos já estudados. O objetivo é reduzir a dependência de blocos previsíveis por matéria e exigir que o estudante identifique qual conceito precisa ser aplicado.

### 8. Transferência

Foi adicionado um modo de **Questões de transferência**. O sistema prioriza questões ainda não respondidas ligadas a conceitos de lições já estudadas. Assim, a transferência é feita com conteúdo já existente e rastreável, sem gerar questões novas automaticamente.

### 9. Revisão inteligente

O plano diário passa a priorizar, nesta ordem pedagógica de oportunidade:

- erro convicto;
- revisão vencida/risco de esquecimento;
- ponto fraco;
- conteúdo novo disponível;
- prática intercalada;
- flashcards.

Sessões curtas recebem menos blocos para reduzir sobrecarga.

### 10. Estudar agora

O painel ganhou o fluxo **Estudar agora**, com sessões guiadas de:

- 20 minutos;
- 30 minutos;
- 45 minutos;
- 60 minutos.

O aluno recebe uma sequência de passos, justificativa de cada prioridade e progresso da sessão, mas continua livre para navegar pelo site. A funcionalidade não bloqueia o estudo manual.

### 11. Versa Pace

O sistema registra o tempo de resposta quando disponível e apresenta:

- média por questão;
- média por disciplina;
- projeção de duração de prova.

O recurso é informativo e tem influência mínima no índice de maestria.

### 12. Ganho de aprendizagem

Quando existem evidências comparáveis, o painel mostra a diferença entre pré-teste e desempenho posterior. Pré-testes pulados são ignorados nessa comparação.

## Compatibilidade e preservação

Nenhum conteúdo acadêmico foi removido. Permanecem:

- 5 trilhas;
- 87 módulos;
- 405 microlições;
- 505 flashcards;
- 1.533 questões;
- 237 recursos audiovisuais.

O formato de progresso anterior é aceito pelo normalizador. Os novos campos (`pretests`, `recall`, metadados de confiança/tempo e estrutura adaptativa v2) são adicionados somente quando necessários.

## Resultado pedagógico esperado

A interface deixa de medir somente exposição e conclusão e passa a distinguir contato, recuperação, retenção e consolidação. O estudante continua encontrando uma experiência simples — estudar, responder, revisar — enquanto o motor usa mais evidências em segundo plano para decidir o que merece prioridade.
