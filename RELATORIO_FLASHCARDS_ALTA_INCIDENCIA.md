# Flashcards estratégicos de alta incidência — Versa Concursos v1.2.0

Data: 08/08/2026

Status: **IMPLEMENTADO E VALIDADO**

## Resultado

Foram adicionados 80 novos flashcards estratégicos, 20 em cada trilha. Os 341 cartões-base anteriores foram preservados, elevando o catálogo total a 421 cartões.

| Curso | Base anterior | Estratégicos | Total atual | Critério principal |
|---|---:|---:|---:|---|
| DATAPREV | 133 | 20 | 153 | Prova FGV 2024 + edital retificado 2026 |
| ASON | 80 | 20 | 100 | Prova e programa oficiais ASON 2026 |
| IBGE | 98 | 20 | 118 | Peso oficial 15/10/35 do edital 2026 |
| CFAQ-MOC | 30 | 20 | 50 | Incidência nas 406 questões ativas da base histórica |
| **Total** | **341** | **80** | **421** | — |

## Como a incidência foi tratada

“Alta incidência” não é usada como promessa de que uma questão cairá. Cada trilha recebeu um nível de evidência compatível com os documentos disponíveis.

### DATAPREV

Foi analisado o bloco de 30 questões específicas da prova oficial FGV/DATAPREV de 2024 para o Perfil 5. A distribuição observada foi de aproximadamente 6 questões de redes, 12 de segurança e privacidade, 3 de governança/projetos e 9 de computação em nuvem. Os temas selecionados também foram conferidos no edital retificado de 2026.

Exemplos priorizados: OSI/HTTP, IEEE 802.11, SNMP/RMON, IPv6, IPsec/IKE, IDS/IPS, BAS, STRIDE, resposta a incidentes, anonimização, LGPD, Scrum, ITIL, IaC e responsabilidade compartilhada.

### ASON

A prova oficial ASON 2026 possui 40 questões distribuídas igualmente: 10 de Português, 10 de Inglês, 10 de Matemática e 10 de Física. Por isso, o baralho estratégico também foi equilibrado, com cinco cartões por disciplina.

Não foi criado um ranking estatístico artificial entre tópicos da mesma matéria. Foram escolhidos fundamentos de maior poder de resolução dentro do Anexo II: interpretação e sintaxe; leitura e gramática inglesa; cálculo, álgebra linear e métodos numéricos; mecânica, fluidos, termodinâmica e circuitos.

### IBGE

A prova de 2026 prevê 15 questões de Português, 10 de Raciocínio Lógico Quantitativo e 35 de Conhecimentos Específicos. Os 20 cartões foram distribuídos aproximadamente segundo esse peso: 5, 3 e 12.

Como a banca atual não é a mesma da prova histórica de 2019 disponível na plataforma, o sistema informa que a prioridade decorre do peso e da abrangência do edital, sem atribuir uma frequência histórica falsa à banca atual.

### CFAQ-MOC

O ranking foi calculado diretamente sobre as 406 questões ativas, organizadas em 11 conjuntos históricos de 2023 a 2026. Os temas mais frequentes da amostra foram:

1. Geometria plana — 34 questões.
2. Termos da oração e períodos — 27 questões.
3. Verbos, tempos e vozes — 23 questões.
4. Volumes, escalas e conversão de unidades — 20 questões.
5. Substantivos, artigos e adjetivos — 19 questões.
6. Porcentagem e matemática financeira — 18 questões.
7. Conectores e relações lógicas — 17 questões.
8. Estratégias de leitura — 17 questões.
9. Divisibilidade, MMC e MDC — 16 questões.
10. Ângulos, retas e proporcionalidade geométrica — 15 questões.

Esse ranking representa a amostra reunida na plataforma e não garante a distribuição de uma Capitania, Delegacia ou Agência específica.

## Experiência implementada

- novo botão **🔥 Alta incidência** na tela de flashcards;
- sessões de até 20 cartões, priorizando vencidos e ainda não estudados;
- marcador visual **Alta incidência** no cartão;
- explicação “Por que priorizar” após a resposta;
- metodologia e fontes exibidas antes do estudo;
- filtros por disciplina e módulo mantidos;
- repetição espaçada e progresso independente por curso preservados;
- compatibilidade com progresso gravado na versão 1.1.0.

## Fontes oficiais usadas

- [Prova oficial FGV/DATAPREV 2024 — Perfil 5](https://conhecimento.fgv.br/sites/default/files/concursos/ati-seguranca-cibernetica-e-protecao-de-dados-cns005-tipo-01.pdf)
- [Edital retificado DATAPREV 2026](https://conhecimento.fgv.br/sites/default/files/concursos/edital-retificado-dataprev.pdf)
- [Processo seletivo ASON 2026 — CIAGA](https://www.marinha.mil.br/ciaga/node/2475)
- [Prova oficial ASON 2026](https://assets.marinha.mil.br/ciaga/sites/www.marinha.mil.br.ciaga/files/Processos%20Seletivos/PROVA%20BRANCA_0.pdf)
- [Conteúdo programático IBGE 2026](https://ftp.ibge.gov.br/edital/PSS_Censo_Agro/2026_02/Edital_2_2026_AC_ACQ_Conteudos_Programaticos.pdf)
- [Provas e gabaritos CFAQ-MOC 2026 — CPES](https://www.marinha.mil.br/cpes/node/472)

## Validação

- 2.321 verificações especializadas de flashcards aprovadas;
- 2.083 verificações estruturais CFAQ-MOC preservadas;
- 421 IDs únicos;
- 80 cartões estratégicos com vínculo válido a curso, módulo e microlição;
- teste do baralho estratégico, marcador, resposta, classificação, migração e troca de cursos aprovado;
- zero erro JavaScript capturado no fluxo DOM.
