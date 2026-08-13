# v1.8.1 — Visual Learning DATAPREV

- Adiciona 77 demonstrativos visuais, um para cada microlição DATAPREV (Redes + Segurança da Informação).
- Introduz fluxos, pilhas, comparações, topologias, mapeamentos, endereçamento, tabelas, ciclos e linhas do tempo em HTML/CSS.
- Adiciona exploração guiada em 3 etapas com destaque visual e texto de orientação.
- Mantém conteúdo, questões, Mastery Engine e progresso anterior sem migração destrutiva.
- Visuais locais e responsivos: sem novas dependências externas e sem coleta de dados.

# Changelog

## Mastery Engine e aprendizagem interativa v1.8.0 — 13/08/2026

- Mantida compatibilidade com todo o progresso da v1.7.1; novos campos são opcionais e normalizados localmente.
- Evoluído o motor adaptativo para **Mastery Engine v2.0.0**, com quatro estados: Desconhecido, Familiar, Recuperável e Consolidado.
- Adicionado pré-teste de uma questão no primeiro acesso de cada microlição, com opção persistente de pular; erros de pré-teste não entram no caderno de erros.
- Adicionada recuperação aberta sem alternativas; o rascunho não é persistido e a autocorreção usa os pontos-chave da própria microlição.
- Adicionada confiança antes da correção (Chutei, Pouco certo, Certo, Muito certo).
- Criado marcador **erro convicto** para respostas erradas com alta confiança e priorização máxima no plano adaptativo.
- Criado Caderno de Erros 2.0 com causas: conteúdo, confusão conceitual, interpretação, desatenção, chute e procedimento.
- Todas as questões de microlição passam a oferecer revisão alternativa por alternativa depois da correção.
- Adicionados treinos de prática intercalada e transferência com questões ainda não vistas sempre que disponíveis.
- Adicionado **Versa Pace** com tempo médio por questão, ritmo por disciplina e projeção para o quantitativo oficial da prova.
- Adicionado comparativo pré-teste × pós-estudo no painel quando houver evidências comparáveis.
- Criado **Estudar agora**, com sessões guiadas de 20, 30, 45 ou 60 minutos.
- O plano diário passa a combinar erro convicto, risco de esquecimento, ponto fraco, conteúdo novo, interleaving e flashcards.
- Criado `tools/validate-mastery-ui.js` para validar os novos mecanismos sem depender de backend.
- Criado `tools/validate-render-templates.js` para renderizar os nove templates centrais nas cinco trilhas sem depender de `jsdom`; 57 verificações aprovadas.
- O rascunho da recuperação aberta permanece visível apenas na memória da sessão após revelar os pontos-chave e nunca é persistido no navegador.
- Preservadas as cinco trilhas, 405 microlições, 505 flashcards, 1.533 questões e 237 recursos audiovisuais da v1.7.1.

## Fechamento editorial TRANSPETRO Cyber v1.7.1 — 13/08/2026

- Corrigidos metadados e documentação geral para cinco trilhas e versão v1.7.1.
- Corrigido o carregamento da quinta trilha no `index.html`, incluindo `transpetro-cyber-data.js` antes da geração de flashcards.
- Banco autoral TRANSPETRO ampliado de 75 para 128 questões; cada uma das 64 microlições passou a ter ao menos duas questões autorais.
- Banco total da trilha ampliado para 198 questões, mantendo intactas as 70 questões e os gabaritos históricos da Prova 5 de 2023.2.
- Adicionados feedbacks individualizados para as cinco alternativas de todas as 198 questões, totalizando 990 comentários de alternativa.
- Removidos os feedbacks genéricos legados da trilha TRANSPETRO.
- Curadoria audiovisual refeita com 40 videoaulas diretas e mapeadas às microlições; páginas de busca deixaram de ser tratadas como aula.
- Catálogo global ampliado para 237 recursos; banco global passou a 1.533 questões, mantendo 505 flashcards.
- Validadores atualizados para conferir quantidade, integridade histórica, profundidade do banco autoral, feedback por alternativa e curadoria direta.
- Preparados novos relatórios de validação, curadoria, fechamento e auditoria para v1.7.1.

## Banco histórico oficial DATAPREV v1.6.0 — 09/08/2026

- Incorporadas 69 questões válidas da prova FGV DATAPREV 2024, com a questão 13 anulada omitida.
- Incorporados 115 itens válidos da prova Cebraspe DATAPREV 2023, Cargo 19, com cinco itens anulados omitidos.
- Usados gabaritos definitivos das bancas; o gabarito preliminar recebido foi mantido apenas para rastreabilidade.
- Mapeadas as 184 questões às microlições correspondentes, com limite de duas questões históricas visíveis por aula.
- Criados simulados históricos que preservam a ordem e as alternativas originais.
- Implementada a pontuação líquida Cebraspe: +1 por acerto, −1 por erro e 0 em branco.
- Adicionados oito textos-base e três figuras vetoriais necessárias às questões.
- Incluída validação automatizada com 447 verificações específicas do novo banco.
- Mantida a arquitetura estática, sem conta, API, telemetria ou nova coleta de dados.

## Plano inteligente e domínio adaptativo v1.5.0 — 09/08/2026

- Criado motor adaptativo local, transparente e compatível com o progresso anterior.
- Implementado plano diário por meta de tempo, combinando revisão, ponto fraco, conteúdo novo e flashcards.
- Adicionados estados Não estudado, Em aprendizagem, Em consolidação e Dominado por microlição.
- Diagnóstico ampliado com resultados por disciplina, módulo e lição.
- Tentativas do diagnóstico passaram a alimentar domínio e caderno de erros.
- Caderno de erros dividido entre itens ativos e superados; resolução exige dois acertos em dias diferentes.
- Simulados e questões das lições passaram a atualizar o mesmo histórico adaptativo.
- Revisões das lições agora usam intervalos progressivos conforme desempenho e repetição.
- Feedback incorreto passa a mostrar a justificativa específica da alternativa quando disponível, preservando a explicação geral.
- Corrigido o cálculo de domínio para não tratar lições ainda não estudadas como nota zero.
- Adicionados teste especializado do motor, migração e plano diário, além de expansão do fluxo DOM.

## Thumbnails e capas audiovisuais v1.4.0 — 09/08/2026

- Adicionadas thumbnails oficiais aos vídeos diretos das quatro trilhas.
- Transformada toda a área da imagem em link para o endereço correto do vídeo.
- Criadas capas próprias para **Playlist de videoaulas**, **Coleção temática** e **Buscar aulas sobre este assunto**.
- Adicionados rótulo de abertura, botão de reprodução e animações de foco e passagem do mouse.
- Implementado fallback visual quando uma thumbnail não puder ser carregada.
- Mantidos vídeos sem iframe ou reprodução incorporada.
- Limitado o carregamento externo de imagens a `https://i.ytimg.com` por CSP e aplicado `no-referrer` a cada thumbnail.
- Atualizados testes de interface, segurança, privacidade e documentação de publicação.

## Auditoria geral de videoaulas v1.3.1 — 09/08/2026

- Revisados os 197 vídeos e coleções das trilhas DATAPREV, ASON, IBGE e CFAQ-MOC.
- Substituídas sete referências diretas removidas, sem confirmação ou instáveis por aulas, playlist ou buscas temáticas válidas.
- Corrigido o título de uma aula de criptografia cujo conteúdo não correspondia ao nome exibido.
- Atualizados dois endereços de busca do canal English in Brazil para o identificador atual de Carina Fragozo.
- Preservadas as contagens de 50 recursos DATAPREV, 50 ASON, 80 IBGE e 17 CFAQ-MOC.
- Adicionada validação automática de URLs HTTPS, IDs do YouTube, referências das lições, contagens e bloqueio de oito referências aposentadas.
- Aprovadas 1.538 verificações específicas dos catálogos audiovisuais.

## Endurecimento de segurança e privacidade v1.3.0 — 08/08/2026

- Removido da distribuição pública o arquivo-fonte bruto executável usado na importação CFAQ-MOC.
- Separados JavaScript e CSS do `index.html` para aplicar CSP com `script-src 'self'`.
- Eliminados iframes e miniaturas externas; nenhuma conexão de terceiros ocorre antes de clique.
- Adicionadas validações de URL HTTPS e de caminhos de imagens locais.
- Corrigido o tratamento de erro para não inserir mensagens não confiáveis como HTML.
- Limitadas entradas e estruturas persistidas no navegador.
- Restrita a exclusão às chaves `versa-`, preservando dados de outras aplicações na mesma origem.
- Adicionados `noopener`, `noreferrer` e `no-referrer` aos links externos.
- Criados política de privacidade, política de segurança, guia de GitHub Pages e relatório de auditoria.
- Aprovadas 38 verificações específicas de segurança, com zero XSS executado e zero conexão automática a terceiros.
- Auditoria de dependências concluída sem vulnerabilidades conhecidas.

## Flashcards estratégicos de alta incidência v1.2.0 — 08/08/2026

- Adicionados 80 cartões estratégicos, sendo 20 em cada curso.
- Catálogo ampliado de 341 para 421 flashcards.
- Criado o baralho **Alta incidência**, com sessões de até 20 cartões.
- Incluída em cada cartão estratégico a justificativa “Por que priorizar”.
- Exibida na interface a metodologia específica de cada trilha e links das fontes oficiais.
- DATAPREV: prioridade cruzada entre a prova FGV de 2024 e o edital retificado de 2026.
- ASON: equilíbrio conforme a prova oficial de 2026, com 10 questões por disciplina.
- IBGE: distribuição proporcional aos pesos oficiais de 15/10/35 questões.
- CFAQ-MOC: ranking calculado sobre as 406 questões ativas da amostra histórica de 2023 a 2026.
- Preservados os 341 cartões-base e todos os identificadores e progressos da versão anterior.
- Adicionado teste automatizado do botão, da sessão e do marcador de alta incidência.
- Aprovadas 2.321 verificações especializadas de flashcards e o teste de fluxo DOM sem erros JavaScript.

## Flashcards adaptativos v1.1.0 — 08/08/2026

- Adicionado o sistema de flashcards aos quatro cursos.
- Criados 341 cartões-base: 133 DATAPREV, 80 ASON, 98 IBGE e 30 CFAQ-MOC.
- Adicionadas sessões de revisão, dez cartões novos, baralhos por módulo e pontos fracos.
- Criados filtros por disciplina e módulo.
- Implementadas as classificações Errei, Difícil, Bom e Fácil com repetição espaçada local.
- Cartões classificados como Errei reaparecem uma vez no final da sessão.
- Integrado o caderno de erros para priorizar cartões das lições com falhas registradas.
- Adicionados atalhos de teclado para revelar e classificar cartões.
- Adicionadas métricas de cartões vencidos, novos, estudados e maduros.
- Implementada migração automática, preservando progressos antigos.
- Mantido o armazenamento independente em cada curso.
- Adicionados testes do catálogo, agendador, migração e fluxo DOM.
- Atualizada a documentação e a publicação no GitHub Pages.

## Inclusão da trilha CFAQ-MOC Nacional — 07/08/2026

- Adicionada a quarta trilha: **CFAQ-MOC Nacional — Moço de Convés — todas as Capitanias**.
- Criados 10 módulos, 30 microlições e diagnóstico com 30 questões.
- Importadas 430 questões CFAQ da fonte Rota Naval; 406 permaneceram ativas após auditoria.
- Omitidas 18 duplicatas exatas e seis questões anuladas ou sem gabarito válido.
- Incorporados 17 textos-base e 21 imagens únicas.
- Adicionadas 17 videoaulas complementares em Português e Matemática.
- Criados simulados de Português, Matemática, prova completa, revisão nacional ampliada e prova histórica específica.
- Adicionado filtro para 11 conjuntos históricos, de 2023 a 2026.
- Mantida a origem institucional como pendente quando o arquivo-fonte não comprova a Capitania responsável.
- Separados dados e imagens CFAQ em arquivos externos compatíveis com abertura local e GitHub Pages.
- Preservadas as trilhas DATAPREV, ASON e IBGE e o armazenamento independente por curso.
- Aprovadas 2.083 verificações estruturais e o teste de fluxo DOM da nova trilha.

## Expansão pedagógica IBGE v2 — 06/08/2026

- Trilha IBGE ampliada para 19 módulos, 98 microlições e 327 questões.
- Todas as microlições anteriores passaram a possuir ao menos três questões.
- Adicionada a aula “População, amostra e representatividade”.
- Integradas 32 questões oficiais textuais da prova IBGE 2019 com gabarito definitivo retificado.
- Adicionado simulado histórico de 32 questões e duas horas.
- Adicionadas 12 videoaulas diretas, elevando o catálogo para 80 recursos.
- Preenchidos os comentários de todas as alternativas incorretas.
- Corrigidos dois pré-requisitos que apontavam para lições posteriores.
- Diagnóstico ampliado para 39 questões.
- Atualizada a documentação e a identificação editorial para conteúdo v2.

## Inclusão da trilha IBGE — 06/08/2026

- Adicionada a terceira trilha: **IBGE 2026 — Analista Censitário — Ciências Sociais/Antropologia**.
- Criados inicialmente 19 módulos, 97 microlições e 194 questões autorais.
- Criado diagnóstico inicial com 38 questões.
- Criados simulados de Português, Raciocínio Lógico Quantitativo, Conhecimentos Específicos e prova oficial de 60 questões.
- Adicionado cronômetro de quatro horas ao simulado oficial.
- Adicionados inicialmente 68 recursos audiovisuais ou coleções temáticas.
- Incorporados documentos oficiais e materiais históricos enviados pelo usuário.
- Preservadas as trilhas DATAPREV e ASON e o armazenamento independente por curso.
