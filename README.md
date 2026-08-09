# Versa Concursos

Plataforma gratuita de estudos por trilhas, inspirada em sistemas de aprendizagem progressiva, criada para organizar a preparação para concursos e processos seletivos em microlições, exercícios, revisões e simulados.

A versão atual reúne quatro trilhas independentes:

- **DATAPREV 2026 — Analista de Tecnologia da Informação, Perfil 5: Segurança Cibernética e Proteção de Dados**;
- **ASON 2027 — Curso de Adaptação a Segundo Oficial de Náutica da Marinha Mercante**, usando o edital e o Anexo II de 2026 como referência provisória até a publicação do processo seletivo oficial de 2027;
- **IBGE 2026 — Analista Censitário, área de Ciências Sociais/Antropologia**, conforme o PSS nº 02/2026;
- **CFAQ-MOC Nacional — Curso de Formação de Aquaviários — Moço de Convés**, com núcleo comum de Português e Matemática e banco histórico de processos locais.

> **Aviso:** este é um projeto educacional independente. Não possui vínculo oficial com a DATAPREV, a Fundação Getulio Vargas, a Marinha do Brasil, o CIAGA, a DPC, o IBGE, o Instituto Avalia, cursos preparatórios ou canais do YouTube indicados na plataforma.

---

## Visão geral

O Versa Concursos transforma conteúdos extensos de editais em uma sequência de estudo organizada. Em vez de apresentar apenas uma lista de assuntos, a plataforma divide cada matéria em módulos e microlições com objetivos claros, exemplos, recuperação ativa e questões comentadas.

O aluno pode:

- realizar um diagnóstico inicial;
- seguir uma rota progressiva de estudos;
- estudar por disciplina e módulo;
- praticar flashcards com repetição espaçada;
- assistir a videoaulas complementares;
- responder questões de múltipla escolha;
- receber correção comentada;
- revisar conteúdos em intervalos programados;
- registrar erros automaticamente;
- acompanhar desempenho por área;
- realizar simulados parciais e completos;
- manter progresso separado em cada trilha.

Todo o projeto funciona como um site estático e pode ser publicado gratuitamente no **GitHub Pages**.

---

## Estado atual do conteúdo

| Trilha | Módulos | Microlições | Flashcards | Questões | Vídeos e coleções | Diagnóstico |
|---|---:|---:|---:|---:|---:|---:|
| DATAPREV | 23 | 133 | 153 | 258 | 50 | 40 questões |
| ASON | 20 | 80 | 100 | 160 | 50 | 28 questões |
| IBGE | 19 | 98 | 118 | 327 | 80 | 39 questões |
| CFAQ-MOC | 10 | 30 | 50 | 406 | 17 | 30 questões |
| **Total** | **72** | **341** | **421** | **1.151** | **197** | — |

Os números representam o conteúdo disponível na versão multitrilhas com a inclusão do IBGE. O banco poderá crescer com novas questões, provas anteriores comentadas, revisões editoriais e atualizações de legislação e atualidades.

---

## Como funciona a aprendizagem

A estrutura pedagógica de cada lição segue, em geral, este fluxo:

```text
Objetivo da microlição
        ↓
Explicação resumida
        ↓
Pontos essenciais
        ↓
Exemplo aplicado
        ↓
Videoaula complementar
        ↓
Recuperação ativa
        ↓
Questões comentadas
        ↓
Revisão programada
```

### Microlições

Cada microlição procura trabalhar um recorte pequeno do conteúdo. Ela pode conter:

- objetivo de aprendizagem;
- resumo conceitual;
- lista dos pontos mais importantes;
- exemplo prático;
- pergunta de recuperação ativa;
- nível de dificuldade;
- pré-requisitos;
- etiquetas por assunto;
- questões relacionadas;
- uma ou mais indicações de vídeo.

### Questões comentadas

As questões apresentam quatro ou cinco alternativas, conforme a estrutura preservada da fonte, e uma explicação do gabarito. Ao errar, o item pode ser enviado ao **caderno de erros**, permitindo que o conteúdo volte para revisão.

As questões autorais foram criadas para fixação e aproximação ao estilo dos processos seletivos. Elas não devem ser tratadas como questões oficiais das bancas.

### Revisão espaçada

A plataforma mantém uma fila de conteúdos para revisão. A partir da versão 1.5.0, o intervalo das lições varia conforme o resultado e o histórico: baixo desempenho retorna mais cedo; resultados confirmados ampliam progressivamente o intervalo.

### Plano inteligente e mapa de domínio

O plano diário combina quatro sinais mantidos apenas no navegador: revisões vencidas, erros ativos, domínio estimado e próxima etapa elegível da trilha. A meta de 20 a 90 minutos é dividida entre revisão, ponto fraco, conteúdo novo e flashcards.

Cada microlição pode aparecer como **Não estudada**, **Em aprendizagem**, **Em consolidação** ou **Dominada**. Domínio não depende de uma única nota: exige bom desempenho e confirmação em momentos diferentes. O cálculo considera questões, resultado da lição, flashcards, erros ativos e prática espaçada.

O diagnóstico deixou de salvar apenas uma porcentagem geral. Ele agora registra o resultado por disciplina, módulo e microlição, alimentando o plano diário e o caderno de erros.

### Flashcards adaptativos

Cada microlição possui um flashcard-base, totalizando 341 cartões-base. A versão 1.2.0 acrescenta 80 cartões estratégicos de alta incidência — 20 por curso — e eleva o catálogo a 421 cartões. A frente usa recuperação ativa; a resposta reúne a síntese, os pontos essenciais e, nos cartões estratégicos, a razão objetiva da prioridade.

O aluno pode:

- revisar cartões vencidos;
- iniciar o baralho **Alta incidência**, com até 20 cartões estratégicos;
- aprender até dez cartões novos por sessão;
- filtrar por disciplina e módulo;
- estudar um baralho temático;
- revisar cartões ligados às lições registradas no caderno de erros;
- classificar a lembrança como **Errei**, **Difícil**, **Bom** ou **Fácil**.

O intervalo é calculado localmente. “Errei” reapresenta o cartão após dez minutos; as demais classificações ampliam o intervalo conforme o histórico. Cada cartão concede no máximo um ponto de experiência por dia, evitando repetição artificial para acumular XP.

A prioridade não é apresentada como previsão. No DATAPREV ela cruza a prova FGV de 2024 com o edital de 2026; no ASON usa a distribuição oficial da prova de 2026; no IBGE segue o peso 15/10/35 do edital atual; e no CFAQ-MOC usa a incidência observada nas 406 questões ativas da amostra histórica interna. A metodologia e as fontes aparecem na própria tela.

### Caderno de erros

Os erros ficam registrados por trilha e podem ser revisitados posteriormente. Um erro permanece **ativo** até o aluno acertar novamente em dois dias diferentes; depois passa para a seção **Superados**. Tentativas de lições, diagnóstico e simulados participam desse ciclo.

### Diagnóstico

Cada curso possui seu próprio diagnóstico:

- **DATAPREV:** 40 questões distribuídas entre as áreas da trilha;
- **ASON:** 28 questões de Português, Inglês, Matemática e Física;
- **IBGE:** 39 questões distribuídas entre Português, Raciocínio Lógico Quantitativo e Conhecimentos Específicos;
- **CFAQ-MOC:** 30 questões, uma por microlição, distribuídas entre Português e Matemática.

O diagnóstico identifica a base inicial do aluno, mas não bloqueia módulos.

---

# Trilha DATAPREV 2026

## Público-alvo

A trilha é direcionada ao cargo de **Analista de Tecnologia da Informação — Perfil 5: Segurança Cibernética e Proteção de Dados**, tomando como base o conteúdo programático do concurso DATAPREV 2026.

## Estrutura da prova representada no sistema

A prova objetiva possui 70 questões e duração prevista de quatro horas:

| Bloco | Distribuição | Peso |
|---|---:|---:|
| Língua Portuguesa | 12 questões | 1 |
| Língua Inglesa | 12 questões | 1 |
| Raciocínio Lógico | 5 questões | 1 |
| Atualidades e Inteligência Artificial | 6 questões | 1 |
| Legislação de Segurança e Proteção de Dados | 5 questões | 1 |
| Conhecimentos Específicos | 30 questões | 2,5 |

A pontuação máxima simulada é de **115 pontos**.

O edital não estabelece a quantidade de questões de cada subárea dentro das 30 questões específicas. Por isso, o Versa Concursos utiliza uma **distribuição pedagógica interna**, identificada claramente como não oficial.

## Áreas estudadas

### Conhecimentos Gerais

- Língua Portuguesa;
- Língua Inglesa;
- Raciocínio Lógico;
- Atualidades e Inteligência Artificial;
- legislação de Segurança da Informação e Proteção de Dados.

### Redes de Computadores

- conceitos, classificações, topologias e meios de transmissão;
- dispositivos de interconexão;
- VLAN e cabeamento estruturado;
- modelo OSI;
- arquitetura TCP/IP;
- IPv4, IPv6, roteamento, TCP e UDP;
- protocolos de aplicação;
- redes sem fio;
- SNMP e RMON.

### Segurança da Informação

- fundamentos, políticas e SGSI;
- ISO/IEC 27001 e ISO/IEC 27002;
- gestão de riscos e continuidade;
- ISO 27005, ISO 31000, BIA, RTO e RPO;
- criptografia, certificados, assinatura e funções hash;
- vulnerabilidades, malware, hardening e gestão de patches;
- IDS, IPS, SIEM, EDR, XDR, DLP, CASB, WAF, SOAR, UEBA e BAS;
- resposta a incidentes e preservação de evidências;
- threat intelligence, threat hunting e MITRE ATT&CK;
- desenvolvimento seguro, OWASP, SAST, DAST e IAST;
- testes de penetração e STRIDE;
- IAM, MFA, SSO, PAM e menor privilégio;
- LGPD, GDPR, anonimização e pseudonimização;
- containers, IoT, blockchain e Microsoft 365 E5;
- NIST Cybersecurity Framework 1.1;
- esteganografia;
- TLS, IPsec e perfect forward secrecy;
- Direito Digital;
- programação e automação aplicadas à segurança;
- tecnologias e frameworks citados no edital;
- proxies e VPNs.

### Gestão e Governança de TI

- gerenciamento ágil de projetos;
- processos, riscos e indicadores;
- ITIL 4;
- COBIT 2019.

### Computação em Nuvem

- IaaS, PaaS e SaaS;
- nuvem pública, privada e híbrida;
- regiões e zonas de disponibilidade;
- escalabilidade, elasticidade e alta disponibilidade;
- responsabilidade compartilhada;
- IAM e segurança em nuvem;
- Infrastructure as Code e automação;
- conceitos e serviços centrais de AWS, Azure e Google Cloud.

## Simulados DATAPREV

A plataforma oferece:

- Conhecimentos Gerais — 40 questões;
- Conhecimentos Específicos — 30 questões;
- prova completa — 70 questões;
- simulado de Redes;
- simulado de Segurança da Informação.

O modo completo inclui:

- cronômetro de quatro horas;
- pesos 1 e 2,5;
- pontuação máxima de 115 pontos;
- questões e alternativas embaralhadas;
- navegação livre;
- marcação para revisão;
- possibilidade de deixar questões em branco;
- desempenho por disciplina;
- envio dos erros ao caderno de erros.

---

# Trilha ASON 2027

## Público-alvo

A trilha é destinada à preparação para o **Processo Seletivo ao Curso de Adaptação a Segundo Oficial de Náutica da Marinha Mercante**.

Como o edital oficial de 2027 ainda não integra esta versão, a trilha utiliza o programa do PS ASON 2026 como referência provisória. Datas, vagas, etapas, índices ou exigências do processo de 2026 não devem ser interpretados automaticamente como regras oficiais de 2027.

## Estrutura acadêmica representada

| Área | Disciplina | Questões de referência |
|---|---|---:|
| Humanas | Português | 10 |
| Humanas | Inglês | 10 |
| Exatas | Matemática | 10 |
| Exatas | Física | 10 |
| **Total** | **4 disciplinas** | **40** |

A duração de referência do exame é de quatro horas.

## Língua Portuguesa

- compreensão e interpretação;
- tipos e gêneros textuais;
- coesão, coerência e intertextualidade;
- variação linguística;
- ortografia, fonologia e acentuação;
- classes e locuções;
- sintaxe da oração;
- concordância e regência;
- colocação pronominal;
- crase e pontuação.

## Língua Inglesa

- leitura e interpretação;
- vocabulário e falsos cognatos;
- verbos regulares e irregulares;
- auxiliares, modais e tempos verbais;
- imperativo;
- infinitivo e gerúndio;
- causative `have/get`;
- condicionais;
- reported speech;
- voz ativa e passiva;
- phrasal verbs;
- classes gramaticais e conectivos;
- `So`, `Neither` e `Nor` com auxiliares;
- avisos, placas e vocabulário marítimo.

## Matemática

- funções, limites e continuidade;
- derivadas e aplicações;
- integrais e técnicas de integração;
- coordenadas polares e equações paramétricas;
- funções vetoriais;
- cálculo de várias variáveis;
- sequências e séries;
- séries de Taylor e Fourier;
- equações diferenciais;
- matrizes e determinantes;
- espaços vetoriais;
- transformações lineares;
- autovalores e autovetores;
- sistemas lineares;
- erros numéricos;
- zeros de funções;
- métodos numéricos para sistemas;
- interpolação;
- integração numérica.

## Física

- Leis de Newton e energia;
- estática, forças e torques;
- oscilações harmônicas, amortecimento e ressonância;
- ondas, interferência, som e efeito Doppler;
- propriedades dos fluidos;
- Pascal, Arquimedes, continuidade e Bernoulli;
- calor e Termodinâmica;
- gases ideais;
- capacidades térmicas, `Cp`, `Cv` e relação de Mayer;
- transformações adiabáticas;
- máquinas térmicas e refrigeradores;
- eletrostática;
- capacitores;
- circuitos DC e RC;
- campo magnético, Biot–Savart e Ampère;
- Faraday–Lenz;
- motores, geradores e indutância;
- circuitos AC, potência, filtros e transformadores.

## Simulados ASON

A plataforma oferece:

- Humanas — Português e Inglês;
- Exatas — Matemática e Física;
- ASON completo — 40 questões e cronômetro de quatro horas.

O simulado permite navegar entre questões, marcar itens para revisão, deixar respostas em branco e consultar o resultado por disciplina.

---

# Trilha IBGE 2026

## Público-alvo

A trilha é destinada à função de **Analista Censitário — Ciências Sociais/Antropologia**, do Processo Seletivo Simplificado nº 02/2026 do IBGE. O requisito informado no Anexo II é graduação completa em Ciências Sociais, Sociologia ou Antropologia.

## Estrutura da prova

| Disciplina | Questões |
|---|---:|
| Língua Portuguesa | 15 |
| Raciocínio Lógico Quantitativo | 10 |
| Conhecimentos Específicos | 35 |
| **Total** | **60** |

A duração prevista é de quatro horas. Para Analista, o edital estabelece mínimo de 40% do total da prova e pelo menos um acerto em cada disciplina.

## Conteúdo da trilha

A rota possui 19 módulos e 98 microlições, cobrindo:

- interpretação, gramática, sintaxe e comunicação operacional;
- lógica proposicional, argumentação, aritmética, álgebra e geometria;
- significação das palavras: sinonímia, antonímia, homonímia e paronímia;
- cultura popular, nacional e de massa;
- estratificação, mobilidade, trabalho e inserção produtiva;
- Estado, Federação, políticas públicas, representação e movimentos sociais;
- direitos humanos, cidadania e diversidades;
- Sociologia como autoconsciência da sociedade e imaginação sociológica;
- teorias antropológicas contemporâneas;
- etnografia, observação participante, entrevistas, ética e pesquisa de campo;
- formação da antropologia brasileira, estudos afro-brasileiros e etnologia indígena;
- etnicidade, contato interétnico, desigualdades raciais, tutela e associativismo;
- territorialização indígena e quilombola, patrimonialização e PCTs;
- pobreza, exclusão e grupos sociodemográficos;
- fecundidade, mortalidade, migração, urbanização e estrutura etária;
- média, mediana, quartis, variância, desvio padrão, coeficiente de variação e histogramas;
- população, amostra, representatividade, viés de cobertura e não resposta;
- números-índices e medidas de concentração;
- Constituição Federal, Convenções OIT 107 e 169, Decreto nº 4.887/2003, Estatuto do Índio e Estatuto da Igualdade Racial;
- ocupações de terra, urbano/rural, rural/agrário e contexto operacional do IBGE.

## Materiais e prova histórica

O pacote inclui o edital de abertura, os Anexos II e IV, o material de conhecimentos básicos do 12º Censo Agropecuário e a prova de Ciências Sociais de 2019 com gabaritos e pareceres. O Anexo III — Conteúdos Programáticos permanece vinculado à cópia oficial no servidor do IBGE, e sua matriz completa foi transcrita pedagogicamente no arquivo `MATRIZ_CURRICULAR_IBGE.md` e na própria trilha. A prova de 2019 é usada como referência histórica, pois a banca de 2026 é o Instituto Avalia. Nesta versão, 32 questões textuais oficiais foram integradas ao banco com o gabarito definitivo retificado; as questões 23 e 24 não foram integradas por dependerem de figuras, e a questão 41 foi anulada.

## Simulados IBGE

A plataforma oferece:

- Português — 15 questões;
- Raciocínio Lógico Quantitativo — 10 questões;
- Conhecimentos Específicos — 35 questões;
- prova completa — 60 questões e cronômetro de quatro horas;
- bloco histórico IBGE 2019 — 32 questões oficiais textuais e cronômetro de duas horas.

Questões e alternativas são embaralhadas, com navegação livre, marcação para revisão, respostas em branco e relatório por disciplina.

---

## Expansão pedagógica IBGE v2

A versão v2 prioriza retenção e variedade de prática:

- todas as 97 microlições anteriores receberam uma terceira questão de consolidação;
- foi criada a microlição **População, amostra e representatividade**, com quatro questões próprias;
- 32 questões oficiais textuais da prova de 2019 foram incorporadas;
- o banco IBGE passou de 194 para 327 questões;
- todas as alternativas incorretas possuem feedback individual;
- dois pré-requisitos invertidos foram corrigidos;
- foram adicionadas 12 videoaulas diretas sobre demografia, pobreza, estatística, movimentos sociais, PCTs, povos indígenas, patrimônio e legislação.

---

# Trilha CFAQ-MOC Nacional

## Público-alvo e escopo

A trilha é destinada exclusivamente à preparação para processos seletivos do **Curso de Formação de Aquaviários — Moço de Convés (CFAQ-MOC)**. Conteúdos ASON, CFAQ-MOM e o conjunto “CPRJ Fundamental 2025” da fonte original não foram incorporados.

A expressão “todas as Capitanias” representa abrangência nacional. Como os processos são publicados por diferentes Capitanias, Delegacias e Agências, datas, vagas, duração, etapas, requisitos e critérios devem ser confirmados no edital do Órgão de Execução responsável.

## Estrutura pedagógica

| Disciplina | Módulos | Microlições |
|---|---:|---:|
| Português | 5 | 15 |
| Matemática | 5 | 15 |
| **Total** | **10** | **30** |

O banco ativo contém **406 questões** distribuídas tematicamente entre as 30 microlições. Cada lição exibe cinco questões comentadas para preservar uma sessão curta; as demais continuam disponíveis nos simulados e treinos por disciplina. Cada microlição possui objetivo, resumo, pontos essenciais, exemplo, recuperação ativa, pré-requisitos e, quando aplicável, videoaula complementar.

## Importação e auditoria

O arquivo-fonte possuía 430 questões identificadas como CFAQ. A importação:

- omitiu 18 duplicatas exatas do banco ativo;
- omitiu seis questões anuladas ou sem gabarito válido;
- resolveu 17 textos-base sem pendências;
- extraiu 21 imagens únicas para arquivos externos;
- preservou questões com quatro ou cinco alternativas;
- manteve 11 rótulos históricos de prova, dos anos de 2023 a 2026;
- não converteu as letras A/B/C/D/R/I/M em nomes de Capitanias sem comprovação documental.

## Simulados CFAQ-MOC

A plataforma oferece:

- Português — 20 questões;
- Matemática — 20 questões;
- CFAQ-MOC completo — 40 questões, sendo 20 de cada disciplina;
- revisão nacional ampliada — 80 questões;
- reprodução de cada conjunto histórico disponível.

O cronômetro dos modos CFAQ-MOC é uma referência de treino. O edital local prevalece sobre qualquer duração ou distribuição exibida na plataforma.

## Arquitetura da nova trilha

Os dados CFAQ-MOC ficam em `cfaq-data.js`, carregados por script clássico antes da aplicação principal. Imagens ficam em `assets/cfaq/`. Essa separação preserva abertura local por `file://`, não utiliza `fetch()` e evita incorporar vários megabytes de imagens ao `index.html`.

O progresso usa a chave `versa-progress-cfaq`, isolada das outras três trilhas.

---

## Videoaulas

As videoaulas são materiais complementares. Elas não substituem a explicação, os exercícios ou a leitura de fontes oficiais.

Cada recurso pode registrar:

- título;
- canal;
- nível;
- duração, quando disponível;
- assuntos relacionados;
- justificativa da curadoria;
- link direto para o YouTube.

Alguns tópicos muito específicos não possuem uma aula individual gratuita, estável e em português que tenha sido validada. Nesses casos, a plataforma apresenta uma **coleção de busca direcionada**, identificada como tal. Na trilha IBGE, o catálogo atual contém 22 vídeos com reprodução direta, 12 canais ou coleções institucionais e 46 buscas temáticas direcionadas; estas últimas exigem seleção crítica do aluno e não são apresentadas como aulas individualmente validadas.

Em 09/08/2026, os 197 recursos audiovisuais das quatro trilhas foram revisados. Links retirados, vídeos sem confirmação e endereços de canal desatualizados foram substituídos. O comando `npm run validate:videos` confere a estrutura dos catálogos e impede a reintrodução das referências aposentadas conhecidas.

A disponibilidade dos vídeos depende do YouTube e dos respectivos canais. Um vídeo pode ser removido, tornar-se privado ou mudar de endereço.

A versão 1.4.0 exibe thumbnails oficiais dos vídeos diretos, carregadas de `i.ytimg.com`. A imagem inteira é um link para o vídeo correto. Playlists, coleções e buscas recebem capas próprias com identificação visual. O site continua sem incorporar ou reproduzir vídeos: somente a thumbnail é carregada antes do clique.

O carregamento da thumbnail estabelece uma conexão com a infraestrutura do YouTube e pode expor ao serviço dados técnicos normais da conexão, como endereço IP e agente do navegador. A política `no-referrer` evita o envio do endereço da página do Versa, e a CSP limita imagens externas exclusivamente ao host autorizado.

---

## Biblioteca e fontes

A biblioteca reúne referências, documentos oficiais, bibliografias e materiais de apoio relacionados às trilhas.

O projeto utiliza sínteses educacionais e referências. Textos integrais de normas técnicas protegidas, livros ou materiais comerciais não são reproduzidos.

As leis, editais, frameworks e normas devem ser conferidos em suas fontes oficiais, especialmente antes da prova.

---

## Arquitetura técnica

O Versa Concursos é uma aplicação web estática e autossuficiente.

### Tecnologias

- HTML5;
- CSS3;
- JavaScript puro;
- `localStorage` do navegador;
- GitHub Pages.

Não são utilizados:

- frameworks JavaScript;
- servidor de aplicação;
- banco de dados remoto;
- sistema de login;
- processo de compilação;
- gerenciador de pacotes;
- serviços pagos obrigatórios.

O documento `index.html` contém apenas a estrutura de carregamento. Interface e estilos ficam em `app.js` e `styles.css`; os dados CFAQ-MOC, o catálogo-base, os cartões estratégicos e o motor de repetição ficam em scripts clássicos separados. Essa separação permite uma política CSP mais rígida para scripts e preserva compatibilidade com abertura local e GitHub Pages.

---

## Estrutura de arquivos

```text
versa-concursos-multitrilhas/
├── index.html              # Estrutura segura de carregamento e CSP
├── app.js                  # Interface, lógica e conteúdo das trilhas-base
├── styles.css              # Estilos locais
├── security-bootstrap.js   # Tratamento defensivo de inicialização
├── cfaq-data.js            # Dados modulares CFAQ-MOC
├── flashcards-priority-data.js # 80 cartões e metodologia de alta incidência
├── flashcards-data.js      # Geração e integração do catálogo de 421 cartões
├── flashcards-engine.js    # Agendamento e repetição espaçada
├── adaptive-engine.js      # Domínio, plano diário e revisão de lições
├── logo.svg                # Identidade visual usada pelo site
├── README.md               # Documentação do projeto
├── MATRIZ_CURRICULAR_IBGE.md
├── MAPEAMENTO_EDITAL_IBGE.md
├── CURADORIA_DE_MATERIAIS_IBGE.md
├── RELATORIO_VALIDACAO_IBGE.md
├── RELATORIO_IMPLEMENTACAO_FLASHCARDS.md
├── RELATORIO_FLASHCARDS_ALTA_INCIDENCIA.md
├── RELATORIO_VALIDACAO_FLASHCARDS.md
├── RELATORIO_AUDITORIA_VIDEOAULAS_V1.3.1.md
├── AUDITORIA_VIDEOAULAS_V1.3.1.json
├── RELATORIO_AUDITORIA_SEGURANCA_V1.3.0.md
├── RELATORIO_AUDITORIA_SEGURANCA_V1.4.0.md
├── RELATORIO_AUDITORIA_SEGURANCA_V1.5.0.md
├── AUDITORIA_SEGURANCA_V1.5.0.json
├── RELATORIO_IMPLEMENTACAO_ADAPTATIVA_V1.5.0.md
├── PENDENCIAS_EDITORIAIS_FUTURAS.md
├── PRIVACIDADE.md
├── SECURITY.md
├── GUIA_PUBLICACAO_SEGURA_GITHUB_PAGES.md
├── tools/                  # Geração e validações opcionais
├── documentos/ibge/ # Editais, anexos, prova e materiais de referência
└── .nojekyll     # Impede processamento desnecessário pelo Jekyll
```

---

## Como executar no computador

### Opção 1 — Abrir diretamente

Abra o arquivo `index.html` em um navegador moderno.

Alguns navegadores podem aplicar restrições a conteúdo externo quando uma página é aberta pelo protocolo `file://`. Nessa situação, os vídeos poderão ser abertos em uma nova guia em vez de reproduzidos dentro da página.

### Opção 2 — Servidor local

Com Python instalado, abra o terminal na pasta do projeto e execute:

```bash
python3 -m http.server 8000
```

Depois acesse:

```text
http://localhost:8000
```

Essa opção reproduz de forma mais próxima o comportamento do GitHub Pages.

---

## Publicação no GitHub Pages

1. Crie um repositório no GitHub.
2. Envie **todo o conteúdo extraído do ZIP** para a raiz da branch `main`, mantendo as pastas e os arquivos `.js`.
3. Abra **Settings** no repositório.
4. Entre em **Pages**.
5. Em **Build and deployment**, selecione **Deploy from a branch**.
6. Escolha a branch `main` e a pasta `/(root)`.
7. Salve e aguarde a publicação.
8. Assim que disponível, marque **Enforce HTTPS**.

Não é necessário executar `npm install`, compilar o projeto ou configurar variáveis de ambiente.

Antes de publicar, siga o checklist em `GUIA_PUBLICACAO_SEGURA_GITHUB_PAGES.md`. Nunca envie o arquivo-fonte bruto usado na importação CFAQ-MOC, backups privados, credenciais ou dados pessoais.

---

## Armazenamento e privacidade

O progresso é salvo no `localStorage` do navegador.

Isso significa que:

- os dados permanecem no dispositivo e no perfil de navegador utilizado;
- o histórico de flashcards permanece separado em cada curso;
- não existe conta online ou sincronização automática;
- abrir o site em outro navegador não recupera o progresso;
- limpar os dados do navegador pode apagar perfil, respostas e progresso;
- o projeto não envia o histórico de estudos para um servidor próprio.

Os dados locais não são criptografados. Use somente um apelido e não grave informações pessoais, senhas ou tokens nos campos do site. Links externos usam HTTPS, `noopener`, `noreferrer` e são abertos somente após clique.

Quando o navegador bloqueia o `localStorage`, a aplicação tenta usar um armazenamento temporário em memória. Nesse modo, os dados são perdidos ao fechar ou recarregar a página.

Consulte `PRIVACIDADE.md` para a descrição completa.

---

## Segurança da publicação

A versão 1.3.0 adicionou CSP, política `no-referrer`, validação de URLs e imagens, limites de armazenamento e testes contra XSS. Na versão 1.4.0, a CSP foi ajustada para permitir somente thumbnails em `i.ytimg.com`; iframes, reprodução incorporada e outros hosts continuam bloqueados. A versão 1.5.0 normaliza e limita também o histórico adaptativo. Os relatórios técnicos mais recentes são `RELATORIO_AUDITORIA_SEGURANCA_V1.4.0.md` e `RELATORIO_AUDITORIA_SEGURANCA_V1.5.0.md`.

Esses controles foram orientados por ISO/IEC 27001, 27002, 27701 e 27017, LGPD, OWASP e NIST SSDF, mas **não constituem certificação ISO nem garantia de risco zero**. A conta GitHub, o HTTPS, o domínio e futuras alterações continuam sob responsabilidade de quem publica.

---

## Administração local

A área de administração é um painel editorial simples, salvo no navegador. Ela apresenta:

- número de cursos;
- quantidade de lições, questões e flashcards;
- situação do curso selecionado;
- criação de rascunhos locais.

Ela não é um CMS completo e não altera automaticamente o arquivo `index.html`. Para publicar novos conteúdos, ainda é necessário editar o código-fonte e enviar a nova versão ao GitHub.

---

## Limitações conhecidas

### Atualidades

O GitHub Pages não executa backend nem atualiza notícias sozinho. Por isso, Atualidades necessita de revisão manual periódica. A versão atual inclui fundamentos estáveis, método de estudo e critérios de avaliação de fontes, mas fatos temporais podem envelhecer.

### Processo ASON 2027

A trilha ASON 2027 está baseada no edital de 2026. Ela deve ser revisada quando o edital oficial de 2027 for publicado.

### Provas históricas ASON

As provas de anos anteriores ainda não foram integralmente transformadas em banco adaptativo comentado. Nem todos os anos possuem gabaritos oficiais separados disponíveis no material atual.

### Normas técnicas

A plataforma não reproduz integralmente normas ISO, ABNT ou materiais protegidos. O conteúdo é uma síntese educacional e deve ser complementado por fontes legítimas.

### Links externos

Vídeos e páginas externas podem ser removidos ou alterados pelos responsáveis. A data de revisão da curadoria disponível na versão atual é **09/08/2026**. A validação estrutural reduz regressões, mas uma nova remoção feita pelo proprietário do vídeo ainda exige revisão periódica.

### Ausência de backend

Ainda não existem:

- sincronização entre dispositivos;
- autenticação de usuários;
- recuperação de senha;
- painel administrativo remoto;
- atualização automática do conteúdo;
- banco de dados centralizado;
- estatísticas agregadas de vários alunos.

---

## Manutenção recomendada

Para manter o projeto confiável:

1. revisar legislação e referências oficiais;
2. atualizar Atualidades e Inteligência Artificial;
3. conferir links das videoaulas;
4. verificar mudanças em frameworks, normas e documentos técnicos;
5. revisar o conteúdo após retificações dos editais;
6. ampliar o banco de questões sem repetir padrões previsíveis;
7. validar novos gabaritos e comentários antes da publicação;
8. manter a identificação entre conteúdo oficial, síntese autoral e material complementar.

---

## Próximos passos sugeridos

- catalogar e comentar provas históricas da ASON;
- aumentar o banco de questões no estilo das bancas;
- adicionar mapas mentais e resumos de revisão quando houver uma linguagem visual definida;
- criar exportação e importação do progresso;
- adicionar uma camada opcional de autenticação e sincronização;
- transformar os dados dos cursos em arquivos modulares;
- implementar um painel editorial real;
- executar periodicamente a validação e a revisão editorial dos links externos;
- acompanhar a publicação do edital ASON 2027;
- atribuir cada conjunto histórico CFAQ-MOC à Capitania, Delegacia ou Agência somente após conferência documental;
- ampliar progressivamente o catálogo CFAQ-MOC com editais, provas e gabaritos oficiais de outros Órgãos de Execução;
- atualizar periodicamente Atualidades, legislação, NIST, MITRE ATT&CK e outros referenciais sujeitos a mudança.

---

## Validação da versão multitrilhas com CFAQ-MOC

A versão foi estruturada para manter independência entre as quatro trilhas. As validações realizadas no projeto incluem:

- existência das lições referenciadas pelas questões;
- existência das questões referenciadas pelas lições;
- quatro ou cinco alternativas válidas em cada questão CFAQ-MOC;
- índices de gabarito válidos;
- referências de vídeo cadastradas;
- 197 vídeos e coleções auditados, com URL HTTPS, IDs coerentes e referências aposentadas bloqueadas;
- armazenamento separado por curso;
- carregamento sem dependências externas obrigatórias;
- funcionamento do diagnóstico e dos simulados;
- prova DATAPREV com distribuição e pesos configurados;
- prova ASON com dez questões por disciplina no modo completo;
- prova IBGE com 15 questões de Português, 10 de Lógica e 35 específicas;
- 98 lições, 327 questões e 80 recursos audiovisuais ou coleções na trilha IBGE;
- 32 questões oficiais de 2019 integradas ao banco;
- todas as alternativas incorretas da trilha IBGE com comentário;
- ausência de pré-requisitos apontando para lições posteriores.
- carregamento do arquivo modular `cfaq-data.js` antes da aplicação principal;
- 10 módulos, 30 microlições, 406 questões, 30 itens diagnósticos e 17 videoaulas na trilha CFAQ-MOC;
- 21 imagens e 17 textos-base referenciados por arquivos e IDs válidos;
- filtros para 11 conjuntos históricos, de 2023 a 2026;
- ausência de questões ASON ou CFAQ-MOM no banco ativo CFAQ-MOC;
- 2.083 verificações estruturais automatizadas aprovadas;
- teste de fluxo em DOM com quatro cursos, trilha, lição e simulado CFAQ-MOC de 40 questões aprovado sem erros de JavaScript.

---

## Uso responsável

O Versa Concursos é uma ferramenta de apoio. Aprovação depende de estudo consistente, resolução de questões, consulta a fontes oficiais e acompanhamento das comunicações das instituições responsáveis.

O conteúdo pode conter simplificações, erros ou desatualizações. Antes de tomar decisões sobre inscrições, requisitos, datas, documentação, saúde, teste físico ou regras de prova, consulte sempre o edital oficial e os canais da instituição organizadora.

---

## Licença

Nenhuma licença de software foi definida nesta versão. A ausência de um arquivo de licença não significa autorização automática para redistribuição, modificação ou uso comercial. Defina uma licença adequada antes de abrir o projeto para contribuições públicas ou reutilização por terceiros.
