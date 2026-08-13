/* Versa Concursos — trilha TRANSPETRO Segurança Cibernética v1.7.1. */
(() => {
  "use strict";
  const TRANSPETRO_CYBER_DATA = {
  "id": "transpetro-cyber",
  "shortName": "TRANSPETRO CYBER",
  "name": "TRANSPETRO 2026.4 · Ênfase 7",
  "subtitle": "Análise de Sistemas — Segurança Cibernética e da Informação",
  "status": "Edital 2026.4 · prova 29/11/2026",
  "icon": "⛨",
  "accent": "#0b7285",
  "description": "Trilha completa para a Ênfase 7 da Transpetro, alinhada ao edital 2026.4 e reforçada pela prova oficial CESGRANRIO de 2023.2, com 64 microlições, banco autoral ampliado, comentários por alternativa, videoaulas curadas, flashcards, diagnóstico, simulados, caderno de erros e motor adaptativo.",
  "exam": {
    "board": "Fundação Cesgranrio",
    "questions": 70,
    "duration": "4h30",
    "note": "50 específicas + 10 Português + 10 Inglês · mínimos de 50% por fase"
  },
  "units": [
    {
      "id": "trc-pt",
      "title": "Língua Portuguesa — Texto e Norma",
      "description": "Conteúdo básico do Anexo IV: compreensão, coesão, semântica e norma-padrão.",
      "color": "blue",
      "discipline": "Português"
    },
    {
      "id": "trc-en",
      "title": "Língua Inglesa — Compreensão",
      "description": "Leitura de textos em inglês e gramática relevante para a construção de sentido.",
      "color": "teal",
      "discipline": "Inglês"
    },
    {
      "id": "trc-off-base",
      "title": "Segurança Ofensiva — Fundamentos e Ciclo de Ataque",
      "description": "Ameaças, vulnerabilidades, ataques passivos e ativos e fases de um ataque.",
      "color": "rose",
      "discipline": "Segurança Ofensiva"
    },
    {
      "id": "trc-off-net",
      "title": "Segurança Ofensiva — Protocolos, Wi-Fi e MITM",
      "description": "Ataques conceituais em protocolos, redes sem fio e cenários man-in-the-middle.",
      "color": "amber",
      "discipline": "Segurança Ofensiva"
    },
    {
      "id": "trc-off-mal",
      "title": "Segurança Ofensiva — Engenharia Social e Malware",
      "description": "Ciclo de engenharia social e classificação das principais famílias de código malicioso.",
      "color": "violet",
      "discipline": "Segurança Ofensiva"
    },
    {
      "id": "trc-off-ttp",
      "title": "Segurança Ofensiva — ATT&CK, CAPEC e Ferramentas",
      "description": "Táticas, técnicas, padrões de ataque e reconhecimento das ferramentas citadas no edital.",
      "color": "rose",
      "discipline": "Segurança Ofensiva"
    },
    {
      "id": "trc-def-depth",
      "title": "Segurança Defensiva — Defesa em Profundidade e NAC",
      "description": "Firewalls, IDS/IPS, VPN, IEEE 802.1X, EAP, RADIUS e propriedades de segurança.",
      "color": "green",
      "discipline": "Segurança Defensiva"
    },
    {
      "id": "trc-def-app",
      "title": "Segurança Defensiva — Segurança de Aplicações",
      "description": "OWASP Top 10, OWASP SAMM, CVE e CWE com foco em prova.",
      "color": "blue",
      "discipline": "Segurança Defensiva"
    },
    {
      "id": "trc-def-crypto",
      "title": "Segurança Defensiva — Criptografia, PKI e Comunicação Segura",
      "description": "Hashes, cifragem, assinatura, certificados, ICP-Brasil, MFA, TLS/SSL e IPsec.",
      "color": "violet",
      "discipline": "Segurança Defensiva"
    },
    {
      "id": "trc-def-end",
      "title": "Segurança Defensiva — Endpoint, Sistemas e Resiliência",
      "description": "Antimalware, firewall pessoal, CIS Benchmarks, Linux, Windows e tolerância a falhas.",
      "color": "green",
      "discipline": "Segurança Defensiva"
    },
    {
      "id": "trc-def-ot",
      "title": "Segurança Defensiva — OT/ICS",
      "description": "Segurança de sistemas industriais, ISA/IEC 62443 e NIST SP 800-82.",
      "color": "amber",
      "discipline": "Segurança Defensiva"
    },
    {
      "id": "trc-def-for",
      "title": "Segurança Defensiva — Forense Digital e OSINT",
      "description": "Evidência digital, processo forense e fontes abertas aplicadas à investigação.",
      "color": "teal",
      "discipline": "Segurança Defensiva"
    },
    {
      "id": "trc-comp-iso",
      "title": "Compliance — SGSI, Riscos, Incidentes e Continuidade",
      "description": "Família ISO/IEC 27000, gestão de incidentes e continuidade de negócios.",
      "color": "blue",
      "discipline": "Compliance e Privacidade"
    },
    {
      "id": "trc-comp-priv",
      "title": "Compliance — Privacidade e Proteção de Dados",
      "description": "ISO/IEC 29100, 29134 e 27701 com foco em princípios e avaliação de impacto.",
      "color": "violet",
      "discipline": "Compliance e Privacidade"
    },
    {
      "id": "trc-comp-fw",
      "title": "Compliance — NIST, CIS e Legislação",
      "description": "NIST CSF 2.0, CIS Controls 8.1, Marco Civil, LGPD e regulamentação Anatel.",
      "color": "amber",
      "discipline": "Compliance e Privacidade"
    }
  ],
  "lessons": [
    {
      "id": "trc-l001",
      "unitId": "trc-pt",
      "order": 1,
      "title": "Compreensão, tema e inferência",
      "objective": "Ler textos da Cesgranrio distinguindo informação explícita, inferência e finalidade.",
      "summary": "Compreensão exige localizar evidências no texto; inferência válida decorre de pistas textuais e não de opinião externa. Tema é o recorte central e finalidade é o efeito comunicativo predominante.",
      "points": [
        "Comece pelo comando da questão.",
        "Separe fato textual de conclusão inferida.",
        "Alternativas absolutas pedem conferência rigorosa."
      ],
      "example": "Se um texto relata aumento de incidentes e recomenda controles, pode-se inferir preocupação com risco; não se pode concluir, sem evidência, que todos os incidentes tiveram a mesma causa.",
      "recall": "O que torna uma inferência textual válida?",
      "tags": [
        "compreensão",
        "inferência",
        "tema"
      ],
      "duration": 11,
      "difficulty": "Básico",
      "prerequisites": [],
      "questionIds": [
        "trc-q001",
        "trc-q001b",
        "trc-h2023-01",
        "trc-h2023-03",
        "trc-h2023-04"
      ],
      "videoIds": [
        "trc-v-pt-cesg-int",
        "trc-v-pt-cesg-quest"
      ],
      "discipline": "Português"
    },
    {
      "id": "trc-l002",
      "unitId": "trc-pt",
      "order": 2,
      "title": "Coesão textual e referenciação",
      "objective": "Reconhecer mecanismos que conectam partes do texto e recuperam referentes.",
      "summary": "Coesão reúne recursos gramaticais e lexicais que articulam o texto: pronomes, elipses, conectores, repetição controlada, substituição e relações semânticas.",
      "points": [
        "Identifique o referente de pronomes e expressões.",
        "Observe o valor lógico dos conectores.",
        "Coesão não garante, sozinha, coerência."
      ],
      "example": "Em “o incidente foi contido; por isso, o serviço voltou”, “por isso” introduz consequência.",
      "recall": "Qual é a diferença entre coesão e coerência?",
      "tags": [
        "coesão",
        "referenciação",
        "conectores"
      ],
      "duration": 11,
      "difficulty": "Básico",
      "prerequisites": [
        "trc-l001"
      ],
      "questionIds": [
        "trc-q002",
        "trc-q002b",
        "trc-h2023-06"
      ],
      "videoIds": [
        "trc-v-pt-cesg-int"
      ],
      "discipline": "Português"
    },
    {
      "id": "trc-l003",
      "unitId": "trc-pt",
      "order": 3,
      "title": "Ortografia e significação das palavras",
      "objective": "Aplicar grafia oficial e interpretar palavras no contexto.",
      "summary": "A Cesgranrio costuma explorar sentido contextual, sinonímia possível, polissemia e efeitos gerados por escolhas lexicais, além da ortografia oficial.",
      "points": [
        "Priorize o sentido no contexto.",
        "Diferencie denotação e conotação quando relevante.",
        "Grafia oficial não depende da pronúncia individual."
      ],
      "example": "“Vulnerabilidade crítica” usa “crítica” como qualificador de gravidade; o sentido deve ser lido na construção, não isoladamente.",
      "recall": "Por que um sinônimo de dicionário pode não substituir uma palavra em todo contexto?",
      "tags": [
        "ortografia",
        "semântica",
        "vocabulário"
      ],
      "duration": 11,
      "difficulty": "Básico",
      "prerequisites": [
        "trc-l002"
      ],
      "questionIds": [
        "trc-q003",
        "trc-q003b",
        "trc-h2023-02",
        "trc-h2023-10"
      ],
      "videoIds": [
        "trc-v-pt-cesg-quest"
      ],
      "discipline": "Português"
    },
    {
      "id": "trc-l004",
      "unitId": "trc-pt",
      "order": 4,
      "title": "Tempos, modos e classes de palavras",
      "objective": "Relacionar forma verbal e classe gramatical ao sentido produzido.",
      "summary": "Tempos e modos verbais expressam localização temporal, hipótese, certeza, ordem ou possibilidade; as classes de palavras exercem funções morfológicas e colaboram para a construção do sentido.",
      "points": [
        "Indicativo tende a apresentar fatos ou certezas.",
        "Subjuntivo aparece com hipótese, desejo ou possibilidade.",
        "A classe pode ser reconhecida pelo emprego no contexto."
      ],
      "example": "Em “se a política fosse atualizada, reduziria o risco”, as formas verbais constroem uma situação hipotética.",
      "recall": "Que diferença de sentido costuma existir entre indicativo e subjuntivo?",
      "tags": [
        "verbos",
        "classes de palavras",
        "modo verbal"
      ],
      "duration": 12,
      "difficulty": "Intermediário",
      "prerequisites": [
        "trc-l003"
      ],
      "questionIds": [
        "trc-q004",
        "trc-q004b",
        "trc-h2023-08"
      ],
      "videoIds": [
        "trc-v-pt-cesg-quest"
      ],
      "discipline": "Português"
    },
    {
      "id": "trc-l005",
      "unitId": "trc-pt",
      "order": 5,
      "title": "Coordenação, subordinação e pontuação",
      "objective": "Identificar relações sintáticas e pontuar de acordo com a estrutura.",
      "summary": "Orações coordenadas mantêm autonomia sintática relativa; subordinadas exercem função em relação a outra oração. Pontuação depende da estrutura e do efeito sintático, não de pausas subjetivas.",
      "points": [
        "Vírgula não separa sujeito de verbo sem motivo estrutural.",
        "Orações adverbiais podem indicar causa, condição, concessão e outras relações.",
        "Conjunções ajudam a identificar a relação lógico-sintática."
      ],
      "example": "Em “Embora o alerta tenha sido emitido, a equipe manteve o serviço”, a oração inicial exprime concessão.",
      "recall": "Que relação a conjunção “embora” costuma introduzir?",
      "tags": [
        "sintaxe",
        "pontuação",
        "subordinação"
      ],
      "duration": 12,
      "difficulty": "Intermediário",
      "prerequisites": [
        "trc-l004"
      ],
      "questionIds": [
        "trc-q005",
        "trc-q005b",
        "trc-h2023-07",
        "trc-h2023-09"
      ],
      "videoIds": [
        "trc-v-pt-cesg-quest"
      ],
      "discipline": "Português"
    },
    {
      "id": "trc-l006",
      "unitId": "trc-pt",
      "order": 6,
      "title": "Concordância, regência, crase e colocação pronominal",
      "objective": "Revisar os principais pontos de norma-padrão do edital.",
      "summary": "Concordância trata da relação de número e pessoa; regência, das preposições exigidas por nomes e verbos; crase marca, em contextos próprios, a fusão de “a” + “a”; colocação pronominal depende de fatores sintáticos e de atração.",
      "points": [
        "Localize o núcleo do sujeito antes de concordar.",
        "Verifique a regência antes de decidir sobre crase.",
        "Palavras atrativas podem favorecer próclise."
      ],
      "example": "Em “referiu-se à política”, a crase decorre da regência de “referir-se a” e do artigo feminino que acompanha “política”.",
      "recall": "Qual verificação deve vir antes da decisão sobre o uso de crase?",
      "tags": [
        "concordância",
        "regência",
        "crase",
        "pronomes"
      ],
      "duration": 13,
      "difficulty": "Intermediário",
      "prerequisites": [
        "trc-l005"
      ],
      "questionIds": [
        "trc-q006",
        "trc-q006b",
        "trc-h2023-05"
      ],
      "videoIds": [
        "trc-v-pt-cesg-quest"
      ],
      "discipline": "Português"
    },
    {
      "id": "trc-l007",
      "unitId": "trc-en",
      "order": 7,
      "title": "Reading: main idea and purpose",
      "objective": "Identificar ideia central, objetivo e organização global de um texto em inglês.",
      "summary": "A prova privilegia compreensão. O candidato deve reconhecer tese, propósito, relação entre parágrafos e informação central sem depender da tradução palavra por palavra.",
      "points": [
        "Leia título e primeira frase de cada parágrafo.",
        "Procure palavras repetidas e campos semânticos.",
        "Volte ao texto para validar cada alternativa."
      ],
      "example": "Em um texto que apresenta um incidente, explica seu impacto e recomenda controles, o propósito pode ser informar e orientar, mesmo sem traduzir cada termo.",
      "recall": "How do you identify the main idea without translating every word?",
      "tags": [
        "English",
        "reading",
        "main idea"
      ],
      "duration": 11,
      "difficulty": "Básico",
      "prerequisites": [],
      "questionIds": [
        "trc-q007",
        "trc-q007b",
        "trc-h2023-11",
        "trc-h2023-14",
        "trc-h2023-20"
      ],
      "videoIds": [
        "trc-v-en-inst",
        "trc-v-en-reading"
      ],
      "discipline": "Inglês"
    },
    {
      "id": "trc-l008",
      "unitId": "trc-en",
      "order": 8,
      "title": "Reference words and cohesion",
      "objective": "Resolver referências de pronouns, demonstratives e conectores.",
      "summary": "Reference words such as it, they, this, these and which depend on context. Connectors indicate contrast, cause, consequence, addition or concession.",
      "points": [
        "Procure antecedente compatível em número e sentido.",
        "Leia a frase anterior e a posterior.",
        "Diferencie however, therefore, although e because."
      ],
      "example": "In “The servers were patched. This reduced the exposure”, “This” refers to the patching action/result, not merely to the closest noun.",
      "recall": "What should guide the interpretation of “this” or “they”?",
      "tags": [
        "English",
        "cohesion",
        "reference"
      ],
      "duration": 11,
      "difficulty": "Básico",
      "prerequisites": [
        "trc-l007"
      ],
      "questionIds": [
        "trc-q008",
        "trc-q008b",
        "trc-h2023-16"
      ],
      "videoIds": [
        "trc-v-en-reading"
      ],
      "discipline": "Inglês"
    },
    {
      "id": "trc-l009",
      "unitId": "trc-en",
      "order": 9,
      "title": "Vocabulary, cognates and context clues",
      "objective": "Inferir vocabulário técnico e geral pelo contexto, evitando falsos cognatos.",
      "summary": "Context, morphology, cognates and surrounding explanations help infer meaning. False cognates require attention because visual similarity does not guarantee equivalence in Portuguese.",
      "points": [
        "Use prefixos e sufixos como pistas.",
        "Confirme cognatos pelo contexto.",
        "Não confunda “actually” com “atualmente”."
      ],
      "example": "In a security text, “breach” may be inferred from mentions of unauthorized access and exposed data.",
      "recall": "Which clues help infer an unknown word?",
      "tags": [
        "English",
        "vocabulary",
        "context"
      ],
      "duration": 11,
      "difficulty": "Intermediário",
      "prerequisites": [
        "trc-l008"
      ],
      "questionIds": [
        "trc-q009",
        "trc-q009b",
        "trc-h2023-12",
        "trc-h2023-15",
        "trc-h2023-18"
      ],
      "videoIds": [
        "trc-v-en-inst",
        "trc-v-en-reading"
      ],
      "discipline": "Inglês"
    },
    {
      "id": "trc-l010",
      "unitId": "trc-en",
      "order": 10,
      "title": "Grammar for meaning: tense, modal and voice",
      "objective": "Interpretar estruturas gramaticais que mudam tempo, modalidade e foco.",
      "summary": "Verb tenses locate events; modal verbs express possibility, obligation, recommendation or ability; passive voice shifts focus from agent to action/result.",
      "points": [
        "Distinga must, may, should e can.",
        "Observe have + past participle no present perfect.",
        "Na voz passiva, identifique o objeto lógico da ação."
      ],
      "example": "“The vulnerability must be fixed” expresses obligation and uses passive voice, focusing on the vulnerability rather than the actor.",
      "recall": "What meaning does “must” usually add in technical instructions?",
      "tags": [
        "English",
        "grammar",
        "modals",
        "passive voice"
      ],
      "duration": 12,
      "difficulty": "Intermediário",
      "prerequisites": [
        "trc-l009"
      ],
      "questionIds": [
        "trc-q010",
        "trc-q010b"
      ],
      "videoIds": [
        "trc-v-en-inst"
      ],
      "discipline": "Inglês"
    },
    {
      "id": "trc-l011",
      "unitId": "trc-en",
      "order": 11,
      "title": "Cybersecurity texts: semantic precision",
      "objective": "Aplicar leitura e gramática a textos técnicos de cibersegurança.",
      "summary": "Termos como threat, vulnerability, exploit, breach, mitigation, resilience e incident possuem relações específicas. A questão pode testar o sentido técnico ou a inferência a partir de contexto especializado.",
      "points": [
        "Threat é fonte/evento potencial de dano.",
        "Vulnerability é fraqueza explorável.",
        "Mitigation reduz probabilidade ou impacto, sem significar risco zero."
      ],
      "example": "If a report says “the flaw was exploited”, it indicates that a weakness was used to produce an unwanted effect, not merely discovered.",
      "recall": "What is the difference between a threat and a vulnerability?",
      "tags": [
        "English",
        "cybersecurity vocabulary",
        "technical reading"
      ],
      "duration": 12,
      "difficulty": "Intermediário",
      "prerequisites": [
        "trc-l010"
      ],
      "questionIds": [
        "trc-q011",
        "trc-q011b",
        "trc-h2023-13",
        "trc-h2023-17",
        "trc-h2023-19"
      ],
      "videoIds": [
        "trc-v-en-reading"
      ],
      "discipline": "Inglês"
    },
    {
      "id": "trc-l012",
      "unitId": "trc-off-base",
      "order": 12,
      "title": "Vulnerabilidade, ameaça e ataque",
      "objective": "Distinguir os conceitos básicos cobrados em Segurança Ofensiva.",
      "summary": "Vulnerabilidade é uma fraqueza; ameaça é uma circunstância, evento ou agente capaz de causar dano; ataque é a ação intencional que tenta explorar condições do alvo para produzir efeito adverso.",
      "points": [
        "Risco combina incerteza, probabilidade e impacto em um contexto.",
        "Exploit é um meio de explorar uma vulnerabilidade.",
        "Incidente é um evento que compromete ou ameaça comprometer a segurança."
      ],
      "example": "Uma falha de software é vulnerabilidade; um agente interessado em explorá-la representa ameaça; a tentativa deliberada de exploração é um ataque.",
      "recall": "Como diferenciar vulnerabilidade, ameaça e ataque?",
      "tags": [
        "ameaça",
        "vulnerabilidade",
        "ataque"
      ],
      "duration": 12,
      "difficulty": "Intermediário",
      "prerequisites": [],
      "questionIds": [
        "trc-q012",
        "trc-h2023-49",
        "trc-q012b"
      ],
      "videoIds": [
        "trc-v-mitre-tutorial"
      ],
      "discipline": "Segurança Ofensiva"
    },
    {
      "id": "trc-l013",
      "unitId": "trc-off-base",
      "order": 13,
      "title": "Ataques passivos: escuta e inferência",
      "objective": "Reconhecer ataques passivos e o tipo de informação que podem revelar.",
      "summary": "Ataques passivos buscam observar informação ou padrões sem alterar diretamente o fluxo. Escuta passiva e inferência/análise de tráfego são exemplos clássicos.",
      "points": [
        "O alvo pode não perceber alteração no serviço.",
        "Confidencialidade é a propriedade mais diretamente ameaçada.",
        "Análise de tráfego pode inferir padrões mesmo com conteúdo protegido."
      ],
      "example": "Observar volume e horários de comunicação para deduzir atividade, sem modificar pacotes, caracteriza comportamento passivo.",
      "recall": "Qual propriedade tende a ser mais afetada por uma escuta passiva?",
      "tags": [
        "passive attack",
        "eavesdropping",
        "traffic analysis"
      ],
      "duration": 12,
      "difficulty": "Intermediário",
      "prerequisites": [
        "trc-l012"
      ],
      "questionIds": [
        "trc-q013",
        "trc-h2023-35",
        "trc-q013b"
      ],
      "videoIds": [
        "trc-v-mitre-tutorial"
      ],
      "discipline": "Segurança Ofensiva"
    },
    {
      "id": "trc-l014",
      "unitId": "trc-off-base",
      "order": 14,
      "title": "Ataques ativos: disfarce, repetição e DoS",
      "objective": "Distinguir formas de ataque que alteram, injetam ou interrompem comunicações.",
      "summary": "Ataques ativos interferem no sistema ou fluxo: podem envolver disfarce/masquerade, replay, modificação, injeção e negação de serviço.",
      "points": [
        "Replay reapresenta dados válidos capturados anteriormente.",
        "Masquerade envolve assumir identidade indevida.",
        "DoS busca degradar ou impedir disponibilidade."
      ],
      "example": "Reutilizar uma mensagem de autenticação válida em outro momento para tentar obter efeito indevido é exemplo de replay.",
      "recall": "Por que replay é classificado como ataque ativo?",
      "tags": [
        "active attack",
        "replay",
        "DoS"
      ],
      "duration": 12,
      "difficulty": "Intermediário",
      "prerequisites": [
        "trc-l013"
      ],
      "questionIds": [
        "trc-q014",
        "trc-h2023-33",
        "trc-h2023-39",
        "trc-q014b"
      ],
      "videoIds": [
        "trc-v-ddos-gov"
      ],
      "discipline": "Segurança Ofensiva"
    },
    {
      "id": "trc-l015",
      "unitId": "trc-off-base",
      "order": 15,
      "title": "Etapas do ataque: reconhecimento a acesso",
      "objective": "Ordenar conceitualmente footprinting, varredura, enumeração e ganho de acesso.",
      "summary": "O edital usa uma cadeia didática de etapas. Footprinting coleta informações; scanning identifica alvos e serviços; enumeration aprofunda detalhes de recursos e identidades; ganho de acesso representa o comprometimento inicial.",
      "points": [
        "As etapas são um modelo de estudo, não uma sequência inevitável.",
        "Reconhecimento pode usar fontes públicas.",
        "Enumeração busca detalhes mais específicos que a varredura."
      ],
      "example": "Descobrir blocos e domínios é mais próximo de footprinting; identificar portas abertas, de scanning; levantar contas ou compartilhamentos, de enumeration.",
      "recall": "Qual é a progressão conceitual entre footprinting, scanning e enumeration?",
      "tags": [
        "footprinting",
        "scanning",
        "enumeration"
      ],
      "duration": 12,
      "difficulty": "Intermediário",
      "prerequisites": [
        "trc-l014"
      ],
      "questionIds": [
        "trc-q015",
        "trc-h2023-36",
        "trc-h2023-41",
        "trc-q015b"
      ],
      "videoIds": [
        "trc-v-mitre-tutorial"
      ],
      "discipline": "Segurança Ofensiva"
    },
    {
      "id": "trc-l016",
      "unitId": "trc-off-base",
      "order": 16,
      "title": "Pós-acesso: privilégio, persistência, rastros e negação",
      "objective": "Reconhecer objetivos das etapas posteriores ao acesso inicial.",
      "summary": "Após o acesso, um adversário pode buscar elevar privilégios, manter persistência por mecanismos de backdoor, reduzir rastros e, em determinados objetivos, provocar indisponibilidade.",
      "points": [
        "Escalação amplia permissões.",
        "Persistência busca manter presença.",
        "Encobrimento tenta dificultar detecção e atribuição."
      ],
      "example": "Uma conta comprometida de baixo privilégio não equivale a controle administrativo; a busca por permissões maiores caracteriza escalação.",
      "recall": "Que objetivo distingue persistência de escalação de privilégios?",
      "tags": [
        "privilege escalation",
        "persistence",
        "cover tracks"
      ],
      "duration": 12,
      "difficulty": "Intermediário",
      "prerequisites": [
        "trc-l015"
      ],
      "questionIds": [
        "trc-q016",
        "trc-q016b"
      ],
      "videoIds": [
        "trc-v-mitre-map"
      ],
      "discipline": "Segurança Ofensiva"
    },
    {
      "id": "trc-l017",
      "unitId": "trc-off-net",
      "order": 17,
      "title": "Ataques e abusos em ARP, IP e ICMP",
      "objective": "Reconhecer como confiança e campos de protocolos podem ser abusados.",
      "summary": "ARP resolve endereços IPv4 em redes locais e não possui autenticação nativa; falsificação de associações pode viabilizar MITM. IP e ICMP também podem ser abusados em spoofing, redirecionamento ou negação, dependendo do cenário.",
      "points": [
        "ARP spoofing associa indevidamente IP e MAC.",
        "IP spoofing falsifica endereço de origem.",
        "ICMP é protocolo de controle/diagnóstico, não de transporte."
      ],
      "example": "Se o gateway passa a aparecer associado ao MAC do atacante em caches ARP, o conceito central é ARP spoofing/poisoning.",
      "recall": "O que caracteriza ARP spoofing?",
      "tags": [
        "ARP",
        "IP",
        "ICMP",
        "spoofing"
      ],
      "duration": 12,
      "difficulty": "Intermediário",
      "prerequisites": [],
      "questionIds": [
        "trc-q017",
        "trc-h2023-31",
        "trc-q017b"
      ],
      "videoIds": [
        "trc-v-mitre-tutorial"
      ],
      "discipline": "Segurança Ofensiva"
    },
    {
      "id": "trc-l018",
      "unitId": "trc-off-net",
      "order": 18,
      "title": "Ataques em UDP e TCP",
      "objective": "Relacionar propriedades de transporte a vetores de fraude e indisponibilidade.",
      "summary": "UDP é não orientado a conexão e pode facilitar certos cenários de reflexão/amplificação; TCP mantém estado e seu handshake pode ser explorado em ataques de exaustão como SYN flood.",
      "points": [
        "SYN flood explora conexões parcialmente abertas.",
        "UDP não oferece handshake equivalente ao TCP.",
        "Portas identificam serviços/processos de transporte."
      ],
      "example": "Muitas solicitações SYN com origem falsificada podem consumir estruturas destinadas a conexões incompletas.",
      "recall": "Qual característica diferencia SYN flood de simples análise passiva?",
      "tags": [
        "TCP",
        "UDP",
        "SYN flood"
      ],
      "duration": 12,
      "difficulty": "Intermediário",
      "prerequisites": [
        "trc-l017"
      ],
      "questionIds": [
        "trc-q018",
        "trc-h2023-50",
        "trc-q018b"
      ],
      "videoIds": [
        "trc-v-ddos-gov"
      ],
      "discipline": "Segurança Ofensiva"
    },
    {
      "id": "trc-l019",
      "unitId": "trc-off-net",
      "order": 19,
      "title": "DHCP e protocolos de e-mail",
      "objective": "Reconhecer superfícies de ataque em DHCP, SMTP, IMAP e POP3.",
      "summary": "DHCP automatiza configuração de rede e pode sofrer atuação de servidor não autorizado; SMTP transporta mensagens, enquanto IMAP e POP3 são usados no acesso a caixas postais, com diferenças de sincronização e armazenamento.",
      "points": [
        "Rogue DHCP pode entregar gateway ou DNS malicioso.",
        "SMTP não é protocolo de leitura de caixa postal.",
        "Proteções modernas dependem de autenticação e transporte seguro adequados."
      ],
      "example": "Um servidor DHCP não autorizado que fornece um gateway controlado pelo adversário pode desviar tráfego sem alterar fisicamente o switch.",
      "recall": "Qual risco está associado a um Rogue DHCP?",
      "tags": [
        "DHCP",
        "SMTP",
        "IMAP",
        "POP3"
      ],
      "duration": 12,
      "difficulty": "Intermediário",
      "prerequisites": [
        "trc-l018"
      ],
      "questionIds": [
        "trc-q019",
        "trc-h2023-45",
        "trc-q019b"
      ],
      "videoIds": [
        "trc-v-phishing-gov"
      ],
      "discipline": "Segurança Ofensiva"
    },
    {
      "id": "trc-l020",
      "unitId": "trc-off-net",
      "order": 20,
      "title": "HTTP, FTP e SMB como superfícies de ataque",
      "objective": "Distinguir funções dos protocolos e riscos típicos de exposição.",
      "summary": "HTTP sustenta aplicações web; FTP transfere arquivos e possui variantes/proteções diferentes; SMB oferece compartilhamento de arquivos e outros serviços em redes. Configuração, autenticação e versão influenciam a superfície de risco.",
      "points": [
        "HTTP em claro não oferece confidencialidade.",
        "FTP clássico transmite credenciais sem proteção criptográfica própria.",
        "SMB exposto indevidamente amplia superfície de ataque."
      ],
      "example": "A simples presença de um serviço não implica vulnerabilidade; versão, configuração, credenciais e controles determinam o risco.",
      "recall": "Por que serviço exposto e vulnerabilidade não são sinônimos?",
      "tags": [
        "HTTP",
        "FTP",
        "SMB",
        "services"
      ],
      "duration": 12,
      "difficulty": "Intermediário",
      "prerequisites": [
        "trc-l019"
      ],
      "questionIds": [
        "trc-q020",
        "trc-q020b"
      ],
      "videoIds": [
        "trc-v-owasp-webinar"
      ],
      "discipline": "Segurança Ofensiva"
    },
    {
      "id": "trc-l021",
      "unitId": "trc-off-net",
      "order": 21,
      "title": "Wi-Fi, Evil Twin, jamming e MITM",
      "objective": "Distinguir Rogue AP, Evil Twin, SSID tracking, jamming, disassociation, sniffing e spoofing.",
      "summary": "Ataques em Wi-Fi podem explorar pontos de acesso não autorizados ou imitadores, interferência de rádio, quadros de gerenciamento ou coleta de identificadores. MITM descreve posição de intermediação; sniffing observa tráfego e spoofing falsifica identidade/campos.",
      "points": [
        "Rogue Access Point (Rogue AP) é ponto de acesso não autorizado.",
        "Evil Twin imita uma rede legítima para induzir associação.",
        "Jamming afeta disponibilidade por interferência."
      ],
      "example": "Um AP que copia nome e aparência de rede conhecida para atrair clientes caracteriza Evil Twin; um AP instalado sem autorização é Rogue AP.",
      "recall": "Qual é a diferença entre Rogue AP e Evil Twin?",
      "tags": [
        "Wi-Fi",
        "Evil Twin",
        "MITM",
        "jamming"
      ],
      "duration": 12,
      "difficulty": "Intermediário",
      "prerequisites": [
        "trc-l020"
      ],
      "questionIds": [
        "trc-q021",
        "trc-h2023-48",
        "trc-q021b"
      ],
      "videoIds": [
        "trc-v-wifi",
        "trc-v-mitre-tutorial"
      ],
      "discipline": "Segurança Ofensiva"
    },
    {
      "id": "trc-l022",
      "unitId": "trc-off-mal",
      "order": 22,
      "title": "Engenharia social: ciclo e técnicas",
      "objective": "Reconhecer manipulação humana, preparação, contato e exploração de confiança.",
      "summary": "Engenharia social explora comportamento e contexto humano. Phishing, spear-phishing, pretexting, baiting e outras técnicas variam em personalização, canal e narrativa, mas dependem de influência e confiança.",
      "points": [
        "Spear-phishing é direcionado.",
        "Pretexting constrói um pretexto plausível.",
        "Treinamento e verificação fora de banda são controles defensivos."
      ],
      "example": "Uma mensagem personalizada com contexto real da vítima e pedido urgente de credencial é mais próxima de spear-phishing que de campanha genérica.",
      "recall": "O que distingue spear-phishing de phishing genérico?",
      "tags": [
        "social engineering",
        "phishing",
        "spear-phishing"
      ],
      "duration": 12,
      "difficulty": "Intermediário",
      "prerequisites": [],
      "questionIds": [
        "trc-q022",
        "trc-h2023-38",
        "trc-q022b"
      ],
      "videoIds": [
        "trc-v-social-gov",
        "trc-v-phishing-gov"
      ],
      "discipline": "Segurança Ofensiva"
    },
    {
      "id": "trc-l023",
      "unitId": "trc-off-mal",
      "order": 23,
      "title": "Vírus, worm, trojan e backdoor",
      "objective": "Diferenciar famílias clássicas de malware pelo comportamento.",
      "summary": "Vírus normalmente depende de hospedeiro; worm possui capacidade de propagação autônoma; trojan se apresenta como software legítimo/útil para induzir execução; backdoor cria ou mantém acesso alternativo.",
      "points": [
        "Forma de propagação é pista importante.",
        "Trojan descreve estratégia de disfarce.",
        "Backdoor pode ser implantado por outros malwares."
      ],
      "example": "Stuxnet é lembrado como worm por sua capacidade de propagação e atuação em contexto industrial, não por ser um “vírus” genérico.",
      "recall": "Qual característica é mais associada a um worm?",
      "tags": [
        "malware",
        "worm",
        "trojan",
        "backdoor"
      ],
      "duration": 12,
      "difficulty": "Intermediário",
      "prerequisites": [
        "trc-l022"
      ],
      "questionIds": [
        "trc-q023",
        "trc-q023b"
      ],
      "videoIds": [
        "trc-v-malware-gov1"
      ],
      "discipline": "Segurança Ofensiva"
    },
    {
      "id": "trc-l024",
      "unitId": "trc-off-mal",
      "order": 24,
      "title": "Keylogger, screenlogger, rootkit, bot e loaders",
      "objective": "Reconhecer malwares de coleta, ocultação, controle e instalação.",
      "summary": "Keylogger registra entradas de teclado; screenlogger captura telas; rootkit busca ocultar presença ou manter controle privilegiado; bot recebe comandos; botnet agrega máquinas controladas; injector/downloader/flooder descrevem funções específicas de carga, obtenção ou geração de tráfego.",
      "points": [
        "Spyware é categoria de monitoramento.",
        "Botnet é conjunto de bots controlados.",
        "Rootkit se associa à ocultação e persistência."
      ],
      "example": "Se o código captura o que o usuário digita para obter credenciais, a classificação mais direta é keylogger.",
      "recall": "O que diferencia keylogger de screenlogger?",
      "tags": [
        "keylogger",
        "rootkit",
        "botnet",
        "spyware"
      ],
      "duration": 12,
      "difficulty": "Intermediário",
      "prerequisites": [
        "trc-l023"
      ],
      "questionIds": [
        "trc-q024",
        "trc-h2023-40",
        "trc-q024b"
      ],
      "videoIds": [
        "trc-v-malware-gov2"
      ],
      "discipline": "Segurança Ofensiva"
    },
    {
      "id": "trc-l025",
      "unitId": "trc-off-mal",
      "order": 25,
      "title": "Ransomware, cryptojacking, formjacking e exploits",
      "objective": "Distinguir objetivos de extorsão, mineração indevida, captura de formulários e exploração.",
      "summary": "Ransomware bloqueia/cifra recursos para extorsão; cryptojacking usa recursos da vítima para mineração; formjacking injeta código em formulários para capturar dados; exploit é código/técnica que aciona uma vulnerabilidade.",
      "points": [
        "Exploit não é sinônimo de vulnerabilidade.",
        "Ransomware afeta fortemente disponibilidade e pode envolver exfiltração.",
        "Formjacking mira dados inseridos em formulários."
      ],
      "example": "Uso não autorizado de CPU para mineração de criptoativos é cryptojacking; captura de dados de checkout por script malicioso é formjacking.",
      "recall": "Qual é a diferença entre vulnerabilidade e exploit?",
      "tags": [
        "ransomware",
        "cryptojacking",
        "formjacking",
        "exploit"
      ],
      "duration": 12,
      "difficulty": "Intermediário",
      "prerequisites": [
        "trc-l024"
      ],
      "questionIds": [
        "trc-q025",
        "trc-q025b"
      ],
      "videoIds": [
        "trc-v-malware-gov2"
      ],
      "discipline": "Segurança Ofensiva"
    },
    {
      "id": "trc-l026",
      "unitId": "trc-off-ttp",
      "order": 26,
      "title": "MITRE ATT&CK: matrizes e táticas",
      "objective": "Entender a estrutura da base ATT&CK e o papel das táticas.",
      "summary": "MITRE ATT&CK é uma base de conhecimento de comportamentos adversários observados. Matrizes organizam técnicas por táticas; a tática representa o objetivo do adversário — o “porquê” da ação.",
      "points": [
        "Enterprise e ICS possuem matrizes próprias.",
        "Tática é objetivo, não ferramenta específica.",
        "A base apoia threat modeling, detecção e avaliação de cobertura."
      ],
      "example": "Persistence e Defense Evasion são exemplos de táticas/objetivos em matrizes ATT&CK.",
      "recall": "No ATT&CK, o que uma tática representa?",
      "tags": [
        "MITRE ATT&CK",
        "tactics",
        "matrix"
      ],
      "duration": 12,
      "difficulty": "Intermediário",
      "prerequisites": [],
      "questionIds": [
        "trc-q026",
        "trc-h2023-42",
        "trc-q026b"
      ],
      "videoIds": [
        "trc-v-mitre-tutorial"
      ],
      "discipline": "Segurança Ofensiva"
    },
    {
      "id": "trc-l027",
      "unitId": "trc-off-ttp",
      "order": 27,
      "title": "ATT&CK: técnicas, procedimentos e mitigações",
      "objective": "Distinguir técnica, procedimento observado e mitigação.",
      "summary": "Técnicas descrevem como adversários alcançam objetivos; procedimentos são implementações concretas observadas; mitigações representam classes de medidas que podem reduzir comportamento ou impacto.",
      "points": [
        "Uma técnica pode ter sub-técnicas.",
        "Um procedimento é mais específico e contextual.",
        "Detecções e mitigações não são a mesma coisa."
      ],
      "example": "A técnica é um padrão de comportamento; a forma como um grupo específico executou esse comportamento em uma campanha é um procedimento.",
      "recall": "Qual é a relação entre técnica e procedimento no ATT&CK?",
      "tags": [
        "MITRE ATT&CK",
        "techniques",
        "procedures",
        "mitigations"
      ],
      "duration": 12,
      "difficulty": "Intermediário",
      "prerequisites": [
        "trc-l026"
      ],
      "questionIds": [
        "trc-q027",
        "trc-h2023-47",
        "trc-q027b"
      ],
      "videoIds": [
        "trc-v-mitre-map"
      ],
      "discipline": "Segurança Ofensiva"
    },
    {
      "id": "trc-l028",
      "unitId": "trc-off-ttp",
      "order": 28,
      "title": "MITRE CAPEC: padrões de ataque",
      "objective": "Reconhecer CAPEC como catálogo de padrões de ataque e suas relações.",
      "summary": "CAPEC organiza padrões de ataque em níveis e domínios, descrevendo mecanismos e características recorrentes. Ele complementa outras bases como CWE e ATT&CK, mas não é um catálogo de vulnerabilidades específicas.",
      "points": [
        "CAPEC = padrões de ataque.",
        "CWE = tipos/fraquezas de software.",
        "CVE = vulnerabilidades divulgadas individualmente."
      ],
      "example": "Uma questão que pede “padrão de ataque” aponta conceitualmente para CAPEC; uma fraqueza de software genérica aponta para CWE.",
      "recall": "Como CAPEC se diferencia de CWE?",
      "tags": [
        "CAPEC",
        "CWE",
        "attack patterns"
      ],
      "duration": 12,
      "difficulty": "Intermediário",
      "prerequisites": [
        "trc-l027"
      ],
      "questionIds": [
        "trc-q028",
        "trc-q028b"
      ],
      "videoIds": [
        "trc-v-mitre-tutorial"
      ],
      "discipline": "Segurança Ofensiva"
    },
    {
      "id": "trc-l029",
      "unitId": "trc-off-ttp",
      "order": 29,
      "title": "Ferramentas de reconhecimento e mapeamento",
      "objective": "Associar amass, Maltego, theHarvester, Nmap e Masscan a suas finalidades gerais.",
      "summary": "O edital exige reconhecimento de ferramentas. Amass apoia enumeração/mapeamento de ativos e DNS; Maltego relaciona entidades em OSINT; theHarvester coleta informações públicas; Nmap descobre hosts/serviços; Masscan é voltado a varredura em alta escala.",
      "points": [
        "Estude finalidade, não comandos ofensivos.",
        "Nmap também realiza identificação de serviços.",
        "OSINT utiliza fontes abertas."
      ],
      "example": "Em prova, “coleta de e-mails/domínios em fontes abertas” aproxima-se de theHarvester; “mapeamento de portas/serviços”, de Nmap.",
      "recall": "Qual é a estratégia segura para estudar ferramentas no edital?",
      "tags": [
        "tools",
        "Nmap",
        "OSINT",
        "Amass"
      ],
      "duration": 12,
      "difficulty": "Intermediário",
      "prerequisites": [
        "trc-l028"
      ],
      "questionIds": [
        "trc-q029",
        "trc-q029b"
      ],
      "videoIds": [
        "trc-v-mitre-tutorial"
      ],
      "discipline": "Segurança Ofensiva"
    },
    {
      "id": "trc-l030",
      "unitId": "trc-off-ttp",
      "order": 30,
      "title": "Ferramentas de credenciais e Wi-Fi",
      "objective": "Reconhecer Aircrack-ng, Airgeddon, Hashcat, Hydra e John the Ripper em nível conceitual.",
      "summary": "Aircrack-ng e Airgeddon aparecem em contexto de auditoria Wi-Fi; Hashcat e John the Ripper em recuperação/auditoria de hashes; Hydra em testes de autenticação contra serviços. O estudo deve permanecer em finalidade e defesa.",
      "points": [
        "Use somente em ambientes autorizados.",
        "Hash não é senha em claro.",
        "MFA e rate limiting reduzem risco de abuso de credenciais."
      ],
      "example": "Uma questão que descreve testes repetidos de combinações de login e senha contra um serviço de rede pode apontar para Hydra.",
      "recall": "Qual ferramenta do edital é conhecida por testar autenticação em serviços de rede?",
      "tags": [
        "tools",
        "Hydra",
        "Hashcat",
        "Wi-Fi"
      ],
      "duration": 12,
      "difficulty": "Intermediário",
      "prerequisites": [
        "trc-l029"
      ],
      "questionIds": [
        "trc-q030",
        "trc-h2023-37",
        "trc-q030b"
      ],
      "videoIds": [
        "trc-v-john",
        "trc-v-hashcat",
        "trc-v-wifi"
      ],
      "discipline": "Segurança Ofensiva"
    },
    {
      "id": "trc-l031",
      "unitId": "trc-off-ttp",
      "order": 31,
      "title": "Ferramentas de aplicações, tráfego e análise",
      "objective": "Reconhecer Burp Suite, Wireshark, SQLmap, Ettercap, Metasploit, Ghidra e demais ferramentas do rol.",
      "summary": "Burp Suite apoia teste de aplicações web; Wireshark analisa protocolos e tráfego; SQLmap automatiza testes de SQL injection; Ettercap associa-se a análise/MITM em redes; Metasploit é framework de testes; Ghidra, engenharia reversa. Netcat, smbmap, steghide, Mimikatz, BeEF-XSS, SET e Veil também devem ser reconhecidos por categoria.",
      "points": [
        "A prova pode cobrar correspondência ferramenta–finalidade.",
        "Ferramentas podem ter uso legítimo em auditoria autorizada.",
        "Conhecer defesa e contexto é mais importante que memorizar comandos."
      ],
      "example": "“Captura e dissecação de protocolos” aponta para Wireshark; “engenharia reversa de binários”, para Ghidra.",
      "recall": "Que associação é clássica para Wireshark?",
      "tags": [
        "tools",
        "Wireshark",
        "Burp Suite",
        "Ghidra"
      ],
      "duration": 12,
      "difficulty": "Intermediário",
      "prerequisites": [
        "trc-l030"
      ],
      "questionIds": [
        "trc-q031",
        "trc-q031b"
      ],
      "videoIds": [
        "trc-v-owasp-webinar",
        "trc-v-zap"
      ],
      "discipline": "Segurança Ofensiva"
    },
    {
      "id": "trc-l032",
      "unitId": "trc-def-depth",
      "order": 32,
      "title": "Defesa em profundidade e tipos de firewall",
      "objective": "Diferenciar filtros de pacotes, firewalls de estado, proxies e o conceito de camadas defensivas.",
      "summary": "Defesa em profundidade combina controles independentes para evitar ponto único de falha. Filtro de pacotes avalia atributos básicos; stateful acompanha estado; proxy intermedeia conexões em camada superior.",
      "points": [
        "Camadas devem ser complementares.",
        "Firewall não substitui correção de vulnerabilidades.",
        "Segmentação limita propagação e exposição."
      ],
      "example": "Uma falha em um controle não deveria deixar o ativo sem proteção se outras camadas independentes continuam ativas.",
      "recall": "O que define defesa em profundidade?",
      "tags": [
        "defense in depth",
        "firewall",
        "segmentation"
      ],
      "duration": 12,
      "difficulty": "Intermediário",
      "prerequisites": [],
      "questionIds": [
        "trc-q032",
        "trc-q032b"
      ],
      "videoIds": [
        "trc-v-firewall-gov"
      ],
      "discipline": "Segurança Defensiva"
    },
    {
      "id": "trc-l033",
      "unitId": "trc-def-depth",
      "order": 33,
      "title": "IDS, IPS e VPN",
      "objective": "Distinguir detecção, prevenção e túneis protegidos.",
      "summary": "IDS monitora e alerta; IPS fica normalmente em linha e pode bloquear; VPN cria conexão lógica protegida sobre rede não confiável, com mecanismos de autenticação e criptografia conforme a tecnologia.",
      "points": [
        "IDS não precisa bloquear para cumprir seu papel.",
        "IPS exige cuidado com falsos positivos.",
        "VPN não torna o endpoint automaticamente seguro."
      ],
      "example": "Em um cenário que pede “detectar e alertar o SOC”, IDS é mais direto; se pede “bloquear automaticamente em linha”, IPS é mais adequado.",
      "recall": "Qual é a diferença operacional mais cobrada entre IDS e IPS?",
      "tags": [
        "IDS",
        "IPS",
        "VPN"
      ],
      "duration": 12,
      "difficulty": "Intermediário",
      "prerequisites": [
        "trc-l032"
      ],
      "questionIds": [
        "trc-q033",
        "trc-h2023-46",
        "trc-q033b"
      ],
      "videoIds": [
        "trc-v-firewall-gov",
        "trc-v-vpn-gov"
      ],
      "discipline": "Segurança Defensiva"
    },
    {
      "id": "trc-l034",
      "unitId": "trc-def-depth",
      "order": 34,
      "title": "IEEE 802.1X, EAP e RADIUS",
      "objective": "Entender os papéis de suplicante, autenticador e servidor de autenticação.",
      "summary": "802.1X fornece controle de acesso baseado em portas. O suplicante solicita acesso; o autenticador controla a porta; EAP transporta métodos de autenticação entre ponta e autenticador; RADIUS é comum entre autenticador e servidor AAA.",
      "points": [
        "EAPOL é usado no enlace entre suplicante e autenticador em Ethernet/Wi-Fi.",
        "RADIUS centraliza AAA em muitos ambientes.",
        "A porta controlada permanece restrita antes da autorização."
      ],
      "example": "Em uma rede corporativa, o switch pode atuar como autenticador e consultar um servidor RADIUS para validar credenciais do suplicante.",
      "recall": "Qual protocolo é comum entre autenticador e servidor AAA em 802.1X?",
      "tags": [
        "802.1X",
        "EAP",
        "RADIUS",
        "NAC"
      ],
      "duration": 12,
      "difficulty": "Intermediário",
      "prerequisites": [
        "trc-l033"
      ],
      "questionIds": [
        "trc-q034",
        "trc-h2023-34",
        "trc-h2023-63",
        "trc-q034b"
      ],
      "videoIds": [
        "trc-v-access-gov"
      ],
      "discipline": "Segurança Defensiva"
    },
    {
      "id": "trc-l035",
      "unitId": "trc-def-depth",
      "order": 35,
      "title": "Propriedades e mecanismos de segurança",
      "objective": "Relacionar confidencialidade, integridade, autenticidade, autorização, disponibilidade e irretratabilidade a controles.",
      "summary": "Confidencialidade limita divulgação; integridade protege contra alteração indevida; autenticidade verifica origem/identidade; autorização define ações permitidas; disponibilidade mantém acesso; irretratabilidade reduz possibilidade de negar participação em determinada ação.",
      "points": [
        "Hash e MAC apoiam integridade em contextos distintos.",
        "Assinatura digital pode apoiar autenticidade, integridade e irretratabilidade.",
        "Redundância apoia disponibilidade."
      ],
      "example": "Negação falsa de participação em uma transação está ligada ao serviço de irretratabilidade/não repúdio.",
      "recall": "Qual propriedade trata da possibilidade de negar uma ação realizada?",
      "tags": [
        "CIA",
        "authenticity",
        "authorization",
        "nonrepudiation"
      ],
      "duration": 12,
      "difficulty": "Intermediário",
      "prerequisites": [
        "trc-l034"
      ],
      "questionIds": [
        "trc-q035",
        "trc-h2023-21",
        "trc-q035b"
      ],
      "videoIds": [
        "trc-v-mfa-gov",
        "trc-v-access-gov"
      ],
      "discipline": "Segurança Defensiva"
    },
    {
      "id": "trc-l036",
      "unitId": "trc-def-app",
      "order": 36,
      "title": "OWASP Top 10: categorias e raciocínio de prova",
      "objective": "Reconhecer categorias de risco e atualizar a leitura sem apagar versões históricas.",
      "summary": "OWASP Top 10 é documento de conscientização sobre riscos críticos de aplicações web. A prova histórica de 2023 citou a edição 2021; para o edital 2026, a trilha também aponta a versão corrente 2025 como atualização de estudo.",
      "points": [
        "Associe cenário ao risco predominante.",
        "Mantenha a versão citada no enunciado.",
        "Não misture categorias de edições diferentes."
      ],
      "example": "Componentes de exemplo esquecidos em produção podem representar configuração insegura, enquanto dependências conhecidamente vulneráveis apontam para componente vulnerável/desatualizado em classificações históricas.",
      "recall": "Como lidar com versões diferentes do OWASP Top 10 em prova?",
      "tags": [
        "OWASP Top 10",
        "web security",
        "versions"
      ],
      "duration": 12,
      "difficulty": "Intermediário",
      "prerequisites": [],
      "questionIds": [
        "trc-q036",
        "trc-h2023-44",
        "trc-q036b"
      ],
      "videoIds": [
        "trc-v-owasp-2025",
        "trc-v-owasp-webinar"
      ],
      "discipline": "Segurança Defensiva"
    },
    {
      "id": "trc-l037",
      "unitId": "trc-def-app",
      "order": 37,
      "title": "OWASP SAMM e maturidade de segurança de software",
      "objective": "Entender SAMM como modelo para avaliar e evoluir práticas de segurança no ciclo de software.",
      "summary": "OWASP SAMM organiza práticas de segurança de software e permite avaliar maturidade, estabelecer metas e planejar melhoria incremental. Ele não é um scanner de vulnerabilidades.",
      "points": [
        "Modelo de maturidade ≠ ferramenta de teste.",
        "Práticas abrangem governança, design, implementação, verificação e operações.",
        "A adoção pode ser adaptada ao contexto."
      ],
      "example": "Uma organização pode usar SAMM para comparar estado atual e alvo de suas práticas de segurança de software.",
      "recall": "Qual é a finalidade central do OWASP SAMM?",
      "tags": [
        "OWASP SAMM",
        "software security",
        "maturity"
      ],
      "duration": 12,
      "difficulty": "Intermediário",
      "prerequisites": [
        "trc-l036"
      ],
      "questionIds": [
        "trc-q037",
        "trc-q037b"
      ],
      "videoIds": [
        "trc-v-threatmodel"
      ],
      "discipline": "Segurança Defensiva"
    },
    {
      "id": "trc-l038",
      "unitId": "trc-def-app",
      "order": 38,
      "title": "CVE e gestão de vulnerabilidades divulgadas",
      "objective": "Distinguir identificadores CVE de pontuação, fraquezas e patches.",
      "summary": "CVE fornece identificadores para vulnerabilidades publicamente divulgadas; o identificador facilita referência comum, mas não é por si só uma pontuação de severidade nem a correção.",
      "points": [
        "CVE = identidade/referência.",
        "Severidade pode ser expressa por sistemas como CVSS, fora do conceito de CVE em si.",
        "Correção depende do fornecedor e contexto."
      ],
      "example": "“CVE-AAAA-NNNN” identifica um registro; não significa automaticamente que todos os sistemas estejam vulneráveis ou que a severidade seja máxima.",
      "recall": "O que um identificador CVE fornece principalmente?",
      "tags": [
        "CVE",
        "vulnerability management"
      ],
      "duration": 12,
      "difficulty": "Intermediário",
      "prerequisites": [
        "trc-l037"
      ],
      "questionIds": [
        "trc-q038",
        "trc-q038b"
      ],
      "videoIds": [
        "trc-v-zap"
      ],
      "discipline": "Segurança Defensiva"
    },
    {
      "id": "trc-l039",
      "unitId": "trc-def-app",
      "order": 39,
      "title": "CWE e classes de fraqueza",
      "objective": "Diferenciar CWE de CVE e reconhecer exemplos como XSS.",
      "summary": "CWE cataloga classes de fraquezas de software/hardware. Uma CVE pode decorrer de uma ou mais fraquezas classificáveis por CWE. XSS é uma família de fraquezas de neutralização/saída em aplicações web.",
      "points": [
        "CWE é taxonomia de fraquezas.",
        "CVE identifica vulnerabilidade específica.",
        "CAPEC descreve padrão de ataque."
      ],
      "example": "DOM-Based XSS ocorre quando a lógica no cliente manipula dados não confiáveis e gera execução no DOM; é distinto de stored e reflected XSS.",
      "recall": "Como CWE e CVE se relacionam?",
      "tags": [
        "CWE",
        "CVE",
        "XSS"
      ],
      "duration": 12,
      "difficulty": "Intermediário",
      "prerequisites": [
        "trc-l038"
      ],
      "questionIds": [
        "trc-q039",
        "trc-h2023-32",
        "trc-q039b"
      ],
      "videoIds": [
        "trc-v-owasp-webinar"
      ],
      "discipline": "Segurança Defensiva"
    },
    {
      "id": "trc-l040",
      "unitId": "trc-def-crypto",
      "order": 40,
      "title": "Hash, cifragem simétrica e assimétrica",
      "objective": "Distinguir resumo criptográfico de cifragem e reconhecer propriedades de algoritmos clássicos.",
      "summary": "Hash gera resumo unidirecional de tamanho definido; cifragem simétrica usa segredo compartilhado; criptografia assimétrica usa par de chaves relacionadas. AES é cifra de bloco com bloco de 128 bits; RSA e Diffie-Hellman pertencem ao universo de chave pública com finalidades distintas.",
      "points": [
        "SHA-256 produz 256 bits de saída.",
        "AES admite chaves de 128, 192 ou 256 bits.",
        "Diffie-Hellman é mecanismo de estabelecimento de segredo, não cifra de bloco."
      ],
      "example": "Um digest SHA-256 costuma ser representado por 64 caracteres hexadecimais porque cada dígito hexadecimal representa 4 bits.",
      "recall": "Por que hash não é simplesmente “criptografia que se desfaz”?",
      "tags": [
        "hash",
        "AES",
        "RSA",
        "Diffie-Hellman"
      ],
      "duration": 12,
      "difficulty": "Intermediário",
      "prerequisites": [],
      "questionIds": [
        "trc-q040",
        "trc-h2023-22",
        "trc-h2023-23",
        "trc-h2023-25",
        "trc-q040b"
      ],
      "videoIds": [
        "trc-v-icp-gov"
      ],
      "discipline": "Segurança Defensiva"
    },
    {
      "id": "trc-l041",
      "unitId": "trc-def-crypto",
      "order": 41,
      "title": "Assinatura, envelope digital e carimbo do tempo",
      "objective": "Relacionar assinatura digital, cifragem híbrida e evidência temporal.",
      "summary": "Assinatura digital normalmente usa a chave privada do signatário e verificação com a chave pública; envelope digital combina criptografia assimétrica para proteger uma chave de sessão com cifragem simétrica dos dados; carimbo do tempo fornece evidência temporal emitida por entidade apropriada.",
      "points": [
        "Assinatura não tem como objetivo principal confidencialidade.",
        "Envelope digital combina eficiência simétrica e distribuição assimétrica.",
        "Carimbo do tempo vincula evidência a um instante/período confiável."
      ],
      "example": "Assinar um documento não é o mesmo que cifrá-lo para esconder seu conteúdo: objetivos e operações são diferentes.",
      "recall": "Qual é a finalidade principal da assinatura digital?",
      "tags": [
        "digital signature",
        "digital envelope",
        "timestamp"
      ],
      "duration": 12,
      "difficulty": "Intermediário",
      "prerequisites": [
        "trc-l040"
      ],
      "questionIds": [
        "trc-q041",
        "trc-q041b"
      ],
      "videoIds": [
        "trc-v-icp-gov"
      ],
      "discipline": "Segurança Defensiva"
    },
    {
      "id": "trc-l042",
      "unitId": "trc-def-crypto",
      "order": 42,
      "title": "Certificados digitais, PKI e posse da chave",
      "objective": "Entender cadeia de confiança, chave pública e prova de posse.",
      "summary": "Certificado liga uma identidade a uma chave pública e é assinado por uma autoridade certificadora. Autenticar com certificado exige, além de validar a cadeia, provar posse da chave privada correspondente.",
      "points": [
        "Certificado contém chave pública, não a privada do titular.",
        "Revogação e validade devem ser verificadas.",
        "A assinatura da AC protege integridade/autenticidade do certificado."
      ],
      "example": "Se um usuário apenas envia seu certificado, qualquer pessoa poderia copiá-lo; a prova de posse da chave privada correspondente é que demonstra controle do par.",
      "recall": "O que o sistema deve verificar além da validade do certificado?",
      "tags": [
        "PKI",
        "certificate",
        "private key"
      ],
      "duration": 12,
      "difficulty": "Intermediário",
      "prerequisites": [
        "trc-l041"
      ],
      "questionIds": [
        "trc-q042",
        "trc-h2023-24",
        "trc-h2023-62",
        "trc-q042b"
      ],
      "videoIds": [
        "trc-v-icp-gov"
      ],
      "discipline": "Segurança Defensiva"
    },
    {
      "id": "trc-l043",
      "unitId": "trc-def-crypto",
      "order": 43,
      "title": "ICP-Brasil, MFA e autoridades de confiança",
      "objective": "Reconhecer papéis de AC, ACT e autenticação multifator.",
      "summary": "Na ICP-Brasil, autoridades certificadoras emitem certificados segundo a cadeia de confiança; Autoridades de Carimbo do Tempo fornecem evidência temporal. MFA combina fatores de categorias distintas, como conhecimento, posse e inerência.",
      "points": [
        "Dois segredos do mesmo tipo não equivalem necessariamente a dois fatores.",
        "Certificado pode representar fator de posse quando a chave privada está sob controle do usuário.",
        "Políticas e padrões da ICP-Brasil definem requisitos operacionais."
      ],
      "example": "Senha + posse de uma chave/certificado em dispositivo controlado pelo usuário combina categorias diferentes e eleva a resistência à tomada de conta.",
      "recall": "O que caracteriza autenticação multifator?",
      "tags": [
        "ICP-Brasil",
        "MFA",
        "CA",
        "timestamp authority"
      ],
      "duration": 12,
      "difficulty": "Intermediário",
      "prerequisites": [
        "trc-l042"
      ],
      "questionIds": [
        "trc-q043",
        "trc-q043b"
      ],
      "videoIds": [
        "trc-v-mfa-gov",
        "trc-v-icp-gov"
      ],
      "discipline": "Segurança Defensiva"
    },
    {
      "id": "trc-l044",
      "unitId": "trc-def-crypto",
      "order": 44,
      "title": "TLS, SSL e IPsec",
      "objective": "Comparar proteção de transporte/aplicação e segurança na camada IP.",
      "summary": "TLS protege comunicações sobre transporte e substitui versões SSL obsoletas; IPsec protege tráfego na camada IP por mecanismos como ESP e AH, com IKE usado para negociação/gerenciamento de chaves.",
      "points": [
        "SSLv3 é obsoleto e vulnerável, incluindo POODLE.",
        "IKE negocia parâmetros e material de chave para IPsec.",
        "TLS autentica servidor e pode autenticar cliente conforme configuração."
      ],
      "example": "HTTPS moderno é HTTP sobre TLS. IPsec pode proteger tráfego independentemente da aplicação, enquanto IKE não transporta o conteúdo da aplicação.",
      "recall": "Qual é o papel do IKE no IPsec?",
      "tags": [
        "TLS",
        "SSL",
        "IPsec",
        "IKE"
      ],
      "duration": 12,
      "difficulty": "Intermediário",
      "prerequisites": [
        "trc-l043"
      ],
      "questionIds": [
        "trc-q044",
        "trc-h2023-27",
        "trc-h2023-29",
        "trc-h2023-30",
        "trc-q044b"
      ],
      "videoIds": [
        "trc-v-vpn-gov"
      ],
      "discipline": "Segurança Defensiva"
    },
    {
      "id": "trc-l045",
      "unitId": "trc-def-end",
      "order": 45,
      "title": "Antimalware e firewall pessoal",
      "objective": "Entender controles básicos no endpoint e suas limitações.",
      "summary": "Antimalware detecta/preveni código malicioso por múltiplas técnicas; firewall pessoal filtra conexões de entrada e saída no host. Ambos são camadas, não substitutos para correções, menor privilégio e monitoramento.",
      "points": [
        "Assinaturas podem ser complementadas por comportamento.",
        "Políticas de saída podem reduzir comunicação indevida.",
        "Configuração e atualização afetam eficácia."
      ],
      "example": "Bloquear uma conexão suspeita no host e detectar um arquivo malicioso são funções relacionadas, porém realizadas por controles diferentes.",
      "recall": "Por que endpoint security exige mais de uma camada?",
      "tags": [
        "endpoint",
        "antimalware",
        "personal firewall"
      ],
      "duration": 12,
      "difficulty": "Intermediário",
      "prerequisites": [],
      "questionIds": [
        "trc-q045",
        "trc-h2023-69",
        "trc-q045b"
      ],
      "videoIds": [
        "trc-v-malware-gov1",
        "trc-v-firewall-gov"
      ],
      "discipline": "Segurança Defensiva"
    },
    {
      "id": "trc-l046",
      "unitId": "trc-def-end",
      "order": 46,
      "title": "CIS Benchmarks, Linux e Windows",
      "objective": "Aplicar hardening e reconhecer controles básicos dos sistemas operacionais.",
      "summary": "CIS Benchmarks fornecem recomendações de configuração segura. Em Linux, permissões rwx e estruturas como inode aparecem em provas; em Windows, BitLocker e Windows Firewall são exemplos de controles nativos.",
      "points": [
        "chmod altera permissões; chown altera propriedade.",
        "640 = rw- r-- --- em notação octal.",
        "BitLocker protege volumes com criptografia."
      ],
      "example": "O comando conceitualmente ligado a mudar permissões de arquivo é chmod; 640 concede leitura/escrita ao dono, leitura ao grupo e nenhum acesso aos demais.",
      "recall": "O que um CIS Benchmark representa?",
      "tags": [
        "CIS Benchmarks",
        "Linux",
        "Windows",
        "hardening"
      ],
      "duration": 12,
      "difficulty": "Intermediário",
      "prerequisites": [
        "trc-l045"
      ],
      "questionIds": [
        "trc-q046",
        "trc-h2023-64",
        "trc-h2023-66",
        "trc-h2023-68",
        "trc-q046b"
      ],
      "videoIds": [
        "trc-v-linux",
        "trc-v-powershell"
      ],
      "discipline": "Segurança Defensiva"
    },
    {
      "id": "trc-l047",
      "unitId": "trc-def-end",
      "order": 47,
      "title": "Redundância, tolerância a falhas e RAID",
      "objective": "Relacionar disponibilidade a redundância de componentes e armazenamento.",
      "summary": "Tolerância a falhas usa redundância e mecanismos de recuperação para manter serviço diante de falhas. RAID possui níveis com propriedades distintas; RAID 10 combina espelhamento e distribuição (striping) em conjuntos apropriados.",
      "points": [
        "RAID 0 não oferece redundância.",
        "RAID 1 usa espelhamento.",
        "Backup e RAID resolvem problemas diferentes."
      ],
      "example": "RAID pode reduzir impacto de falha de disco, mas não substitui backup contra exclusão lógica, ransomware ou desastre amplo.",
      "recall": "Por que RAID não é sinônimo de backup?",
      "tags": [
        "availability",
        "RAID",
        "fault tolerance"
      ],
      "duration": 12,
      "difficulty": "Intermediário",
      "prerequisites": [
        "trc-l046"
      ],
      "questionIds": [
        "trc-q047",
        "trc-h2023-65",
        "trc-q047b"
      ],
      "videoIds": [
        "trc-v-bitlocker"
      ],
      "discipline": "Segurança Defensiva"
    },
    {
      "id": "trc-l048",
      "unitId": "trc-def-ot",
      "order": 48,
      "title": "OT/ICS, SCADA e ISA/IEC 62443",
      "objective": "Reconhecer particularidades de segurança industrial e a família ISA/IEC 62443.",
      "summary": "OT interage com processos físicos e exige considerar segurança operacional, disponibilidade, confiabilidade e safety. A série ISA/IEC 62443 trata de segurança de sistemas de automação e controle industrial, incluindo requisitos de ciclo de vida seguro para produtos em partes específicas.",
      "points": [
        "Segmentação IT/OT reduz exposição.",
        "Mudanças em OT exigem análise de impacto operacional.",
        "Stuxnet é referência histórica de ameaça a ambiente industrial."
      ],
      "example": "Em OT, uma ação defensiva tecnicamente válida em TI pode ser inadequada se provocar parada insegura do processo físico.",
      "recall": "Qual particularidade diferencia fortemente OT de TI corporativa comum?",
      "tags": [
        "OT",
        "ICS",
        "SCADA",
        "IEC 62443"
      ],
      "duration": 12,
      "difficulty": "Intermediário",
      "prerequisites": [],
      "questionIds": [
        "trc-q048",
        "trc-h2023-67",
        "trc-h2023-70",
        "trc-q048b"
      ],
      "videoIds": [
        "trc-v-iec62443",
        "trc-v-stuxnet"
      ],
      "discipline": "Segurança Defensiva"
    },
    {
      "id": "trc-l049",
      "unitId": "trc-def-ot",
      "order": 49,
      "title": "NIST SP 800-82 e gestão de risco em OT",
      "objective": "Relacionar o guia NIST à proteção de OT e ao Risk Management Framework.",
      "summary": "NIST SP 800-82 orienta segurança de OT considerando requisitos próprios desses ambientes. No RMF, categorizar envolve determinar impactos potenciais associados à perda de confidencialidade, integridade e disponibilidade.",
      "points": [
        "A revisão 3 é a publicação final vigente; a revisão 4 estava em processo de desenvolvimento em 2026.",
        "Controles devem ser adaptados ao contexto de OT.",
        "Inventário e arquitetura são base para avaliar exposição."
      ],
      "example": "Classificar o impacto potencial de perda de C/I/A faz parte da categorização antes de selecionar controles adequados.",
      "recall": "O que caracteriza a etapa de categorização no RMF?",
      "tags": [
        "NIST SP 800-82",
        "RMF",
        "OT"
      ],
      "duration": 12,
      "difficulty": "Intermediário",
      "prerequisites": [
        "trc-l048"
      ],
      "questionIds": [
        "trc-q049",
        "trc-h2023-61",
        "trc-q049b"
      ],
      "videoIds": [
        "trc-v-nist-ot",
        "trc-v-iec62443"
      ],
      "discipline": "Segurança Defensiva"
    },
    {
      "id": "trc-l050",
      "unitId": "trc-def-for",
      "order": 50,
      "title": "Evidência digital e processo forense",
      "objective": "Entender preservação, aquisição, análise e documentação de evidências.",
      "summary": "Forense digital busca identificar, preservar, coletar, examinar, analisar e documentar evidências de forma tecnicamente defensável. Integridade e cadeia de custódia são centrais para demonstrar que o material não foi alterado indevidamente.",
      "points": [
        "Trabalhe sobre cópia forense quando apropriado.",
        "Hashes podem apoiar verificação de integridade.",
        "Documente origem, data, responsável e transferências."
      ],
      "example": "Calcular e registrar hashes antes/depois da aquisição ajuda a demonstrar integridade do conjunto analisado.",
      "recall": "Por que cadeia de custódia é importante?",
      "tags": [
        "digital forensics",
        "evidence",
        "chain of custody"
      ],
      "duration": 12,
      "difficulty": "Intermediário",
      "prerequisites": [],
      "questionIds": [
        "trc-q050",
        "trc-q050b"
      ],
      "videoIds": [
        "trc-v-forensic-custody",
        "trc-v-incident"
      ],
      "discipline": "Segurança Defensiva"
    },
    {
      "id": "trc-l051",
      "unitId": "trc-def-for",
      "order": 51,
      "title": "Forense de armazenamento, sites, e-mails e OSINT",
      "objective": "Relacionar fontes de evidência a artefatos e fontes abertas.",
      "summary": "Armazenamento pode conter metadados, arquivos e vestígios; sites e e-mails geram cabeçalhos, logs e conteúdo contextual; OSINT reúne informação obtida de fontes abertas, com verificação e correlação.",
      "points": [
        "Metadados exigem interpretação contextual.",
        "Cabeçalhos de e-mail podem revelar rota e autenticação.",
        "OSINT não significa que toda informação pública seja verdadeira."
      ],
      "example": "Uma captura de fonte aberta deve preservar URL, data e contexto para permitir rechecagem; um cabeçalho de e-mail deve ser analisado sem confiar apenas no campo visual “From”.",
      "recall": "Qual cuidado é essencial em OSINT?",
      "tags": [
        "forensics",
        "OSINT",
        "email"
      ],
      "duration": 12,
      "difficulty": "Intermediário",
      "prerequisites": [
        "trc-l050"
      ],
      "questionIds": [
        "trc-q051",
        "trc-q051b"
      ],
      "videoIds": [
        "trc-v-osint",
        "trc-v-forensic-custody"
      ],
      "discipline": "Segurança Defensiva"
    },
    {
      "id": "trc-l052",
      "unitId": "trc-comp-iso",
      "order": 52,
      "title": "ISO/IEC 27001: SGSI e requisitos",
      "objective": "Entender o SGSI, contexto, liderança, planejamento, suporte, operação, avaliação e melhoria.",
      "summary": "ISO/IEC 27001 especifica requisitos para um Sistema de Gestão de Segurança da Informação orientado a risco. A organização define escopo, trata riscos, opera controles, monitora desempenho e melhora continuamente.",
      "points": [
        "Auditoria interna integra avaliação de desempenho.",
        "Risco orienta a seleção de tratamento e controles.",
        "A Declaração de Aplicabilidade documenta decisões sobre controles do Anexo A."
      ],
      "example": "Um SGSI não é apenas um catálogo de ferramentas; é um sistema de gestão com responsabilidades, objetivos, avaliação e melhoria.",
      "recall": "Qual é a finalidade da ISO/IEC 27001?",
      "tags": [
        "ISO 27001",
        "ISMS",
        "SGSI"
      ],
      "duration": 12,
      "difficulty": "Intermediário",
      "prerequisites": [],
      "questionIds": [
        "trc-q052",
        "trc-h2023-51",
        "trc-q052b"
      ],
      "videoIds": [
        "trc-v-iso27001",
        "trc-v-iso-general"
      ],
      "discipline": "Compliance e Privacidade"
    },
    {
      "id": "trc-l053",
      "unitId": "trc-comp-iso",
      "order": 53,
      "title": "ISO/IEC 27002: controles de segurança",
      "objective": "Usar a 27002 como referência de controles e atributos sem confundi-la com requisito de certificação.",
      "summary": "ISO/IEC 27002 fornece orientação sobre controles de segurança da informação. A edição 2022 reorganiza controles e usa atributos, apoiando a implementação coerente com o tratamento de riscos.",
      "points": [
        "Controle deve responder a necessidade de risco.",
        "Identidade, acesso, pessoas, tecnologia e fornecedores são temas recorrentes.",
        "27002 orienta; 27001 contém requisitos do SGSI."
      ],
      "example": "Gerenciamento de acesso privilegiado reduz exposição de contas com maior impacto e deve seguir necessidade, autorização e revisão.",
      "recall": "Como se relacionam ISO/IEC 27001 e 27002?",
      "tags": [
        "ISO 27002",
        "controls",
        "SGSI"
      ],
      "duration": 12,
      "difficulty": "Intermediário",
      "prerequisites": [
        "trc-l052"
      ],
      "questionIds": [
        "trc-q053",
        "trc-h2023-52",
        "trc-h2023-53",
        "trc-h2023-56",
        "trc-q053b"
      ],
      "videoIds": [
        "trc-v-iso27001-concurso"
      ],
      "discipline": "Compliance e Privacidade"
    },
    {
      "id": "trc-l054",
      "unitId": "trc-comp-iso",
      "order": 54,
      "title": "ISO/IEC 27005: gestão de riscos",
      "objective": "Distinguir identificação, análise, avaliação e tratamento de riscos.",
      "summary": "ISO/IEC 27005 orienta gestão de riscos de segurança da informação. Análise pode ser qualitativa, quantitativa ou combinada conforme método e dados; avaliação compara resultados com critérios para priorizar decisões.",
      "points": [
        "Risco envolve consequências e incerteza/probabilidade.",
        "Critérios devem ser definidos pelo contexto.",
        "Tratamento pode reduzir, evitar, compartilhar/transferir ou aceitar risco conforme abordagem organizacional."
      ],
      "example": "Escalas como baixo/médio/alto para probabilidade e impacto caracterizam abordagem qualitativa.",
      "recall": "O que distingue análise qualitativa de quantitativa?",
      "tags": [
        "ISO 27005",
        "risk analysis",
        "qualitative"
      ],
      "duration": 12,
      "difficulty": "Intermediário",
      "prerequisites": [
        "trc-l053"
      ],
      "questionIds": [
        "trc-q054",
        "trc-h2023-54",
        "trc-q054b"
      ],
      "videoIds": [
        "trc-v-iso27001"
      ],
      "discipline": "Compliance e Privacidade"
    },
    {
      "id": "trc-l055",
      "unitId": "trc-comp-iso",
      "order": 55,
      "title": "ISO/IEC 27035-1: gestão de incidentes",
      "objective": "Reconhecer princípios e processo de gestão de incidentes de segurança.",
      "summary": "A família ISO/IEC 27035 apoia preparação, detecção, reporte, avaliação, resposta e aprendizagem com incidentes. Papéis, comunicação, evidências e melhoria são componentes importantes.",
      "points": [
        "Incidente exige triagem e priorização.",
        "Lições aprendidas retroalimentam controles.",
        "Comunicação deve respeitar necessidade, legalidade e confidencialidade."
      ],
      "example": "Um alerta não confirmado pode ser um evento; após avaliação, pode ser classificado e tratado como incidente com prioridade baseada em impacto e urgência.",
      "recall": "Por que “lições aprendidas” fazem parte da gestão de incidentes?",
      "tags": [
        "ISO 27035",
        "incident response"
      ],
      "duration": 12,
      "difficulty": "Intermediário",
      "prerequisites": [
        "trc-l054"
      ],
      "questionIds": [
        "trc-q055",
        "trc-q055b"
      ],
      "videoIds": [
        "trc-v-incident",
        "trc-v-lgpd-inc"
      ],
      "discipline": "Compliance e Privacidade"
    },
    {
      "id": "trc-l056",
      "unitId": "trc-comp-iso",
      "order": 56,
      "title": "ISO 22301: continuidade de negócios",
      "objective": "Entender requisitos para continuidade e recuperação diante de interrupções.",
      "summary": "ISO 22301 estabelece requisitos de sistema de gestão de continuidade de negócios. BIA, estratégias, planos, exercícios e melhoria apoiam capacidade de responder e recuperar produtos/serviços prioritários.",
      "points": [
        "BIA identifica impactos e prioridades ao longo do tempo.",
        "RTO é objetivo de tempo de recuperação; RPO relaciona perda de dados tolerável em contexto de TI.",
        "Testes e exercícios validam planos."
      ],
      "example": "Plano que nunca é exercitado pode falhar por dependências desconhecidas; continuidade exige validação periódica.",
      "recall": "Qual é o papel da análise de impacto nos negócios (BIA)?",
      "tags": [
        "ISO 22301",
        "BCM",
        "BIA"
      ],
      "duration": 12,
      "difficulty": "Intermediário",
      "prerequisites": [
        "trc-l055"
      ],
      "questionIds": [
        "trc-q056",
        "trc-q056b"
      ],
      "videoIds": [
        "trc-v-iso-general"
      ],
      "discipline": "Compliance e Privacidade"
    },
    {
      "id": "trc-l057",
      "unitId": "trc-comp-iso",
      "order": 57,
      "title": "ISO 22313: orientação para continuidade",
      "objective": "Diferenciar norma de requisitos e documento de orientação.",
      "summary": "ISO 22313 fornece orientação para o uso dos requisitos de continuidade de negócios da ISO 22301, ajudando a interpretar e implementar práticas adequadas ao contexto.",
      "points": [
        "22301 = requisitos; 22313 = orientação.",
        "A implementação deve ser proporcional à organização.",
        "Orientação não elimina necessidade de evidência e testes."
      ],
      "example": "Em prova, a associação central é: 22301 especifica requisitos do sistema de gestão; 22313 orienta sua aplicação.",
      "recall": "Como 22313 complementa 22301?",
      "tags": [
        "ISO 22313",
        "BCM"
      ],
      "duration": 12,
      "difficulty": "Intermediário",
      "prerequisites": [
        "trc-l056"
      ],
      "questionIds": [
        "trc-q057",
        "trc-q057b"
      ],
      "videoIds": [
        "trc-v-iso-general"
      ],
      "discipline": "Compliance e Privacidade"
    },
    {
      "id": "trc-l058",
      "unitId": "trc-comp-iso",
      "order": 58,
      "title": "Integração: risco, incidente e continuidade",
      "objective": "Conectar SGSI, risco, resposta e continuidade em cenários de prova.",
      "summary": "Risco orienta prevenção e priorização; incidentes exigem detecção e resposta; continuidade trata manutenção/recuperação de atividades prioritárias. Em governança madura, esses processos se retroalimentam.",
      "points": [
        "Um incidente pode acionar plano de continuidade.",
        "Lições aprendidas atualizam avaliação de riscos.",
        "Controles são selecionados e revistos segundo risco e desempenho."
      ],
      "example": "Ransomware pode começar como incidente de segurança e, se interromper processo crítico, também acionar estratégias de continuidade e recuperação.",
      "recall": "Como gestão de incidentes e continuidade se relacionam?",
      "tags": [
        "SGSI",
        "risk",
        "incident",
        "continuity"
      ],
      "duration": 12,
      "difficulty": "Intermediário",
      "prerequisites": [
        "trc-l057"
      ],
      "questionIds": [
        "trc-q058",
        "trc-q058b"
      ],
      "videoIds": [
        "trc-v-iso27001",
        "trc-v-incident"
      ],
      "discipline": "Compliance e Privacidade"
    },
    {
      "id": "trc-l059",
      "unitId": "trc-comp-priv",
      "order": 59,
      "title": "ISO/IEC 29100: estrutura e princípios de privacidade",
      "objective": "Revisar conceitos e princípios de proteção de dados pessoais.",
      "summary": "ISO/IEC 29100 fornece uma estrutura de alto nível para privacidade em TIC. Princípios incluem minimização de dados, limitação de coleta, finalidade, qualidade, transparência e outros. Anonimização busca tornar irreversível a identificação dentro do conceito da norma.",
      "points": [
        "Minimização aplica necessidade de conhecer e reduzir dados ao necessário.",
        "Anonimização difere de pseudonimização.",
        "Princípios devem orientar desenho e operação do tratamento."
      ],
      "example": "Coletar apenas atributos necessários para a finalidade e restringir acesso por need-to-know expressa minimização.",
      "recall": "O que significa minimização de dados?",
      "tags": [
        "ISO 29100",
        "privacy",
        "data minimization"
      ],
      "duration": 12,
      "difficulty": "Intermediário",
      "prerequisites": [],
      "questionIds": [
        "trc-q059",
        "trc-h2023-57",
        "trc-h2023-59",
        "trc-q059b"
      ],
      "videoIds": [
        "trc-v-lgpd"
      ],
      "discipline": "Compliance e Privacidade"
    },
    {
      "id": "trc-l060",
      "unitId": "trc-comp-priv",
      "order": 60,
      "title": "ISO/IEC 29134: Privacy Impact Assessment",
      "objective": "Entender PIA e relatório de impacto de privacidade.",
      "summary": "ISO/IEC 29134 orienta avaliação de impacto de privacidade (PIA), processo usado para identificar riscos de privacidade, consultar partes interessadas quando apropriado e documentar medidas de tratamento.",
      "points": [
        "PIA pode ser aplicada a processos, sistemas, programas, software ou dispositivos.",
        "O relatório documenta riscos e medidas.",
        "A avaliação deve ocorrer cedo o suficiente para influenciar decisões."
      ],
      "example": "Antes de lançar sistema que trata grande volume de dados pessoais, uma PIA pode identificar riscos e requisitos de proteção ainda na fase de desenho.",
      "recall": "Qual é o objetivo de uma PIA?",
      "tags": [
        "ISO 29134",
        "PIA",
        "privacy impact"
      ],
      "duration": 12,
      "difficulty": "Intermediário",
      "prerequisites": [
        "trc-l059"
      ],
      "questionIds": [
        "trc-q060",
        "trc-h2023-58",
        "trc-q060b"
      ],
      "videoIds": [
        "trc-v-lgpd"
      ],
      "discipline": "Compliance e Privacidade"
    },
    {
      "id": "trc-l061",
      "unitId": "trc-comp-priv",
      "order": 61,
      "title": "ISO/IEC 27701: gestão de informação de privacidade",
      "objective": "Relacionar PIMS a SGSI e responsabilidades de privacidade.",
      "summary": "ISO/IEC 27701 estende práticas de gestão para informação de privacidade, integrando requisitos e orientações a estruturas de segurança e privacidade. O edital 2026 mantém a edição 2019 com correção de 2020 como referência.",
      "points": [
        "Integra privacidade à gestão.",
        "Papéis de controlador e operador/processador influenciam obrigações.",
        "Controles devem refletir contexto legal e risco."
      ],
      "example": "Uma organização pode integrar governança de privacidade ao SGSI para tratar segurança e proteção de dados de forma coordenada.",
      "recall": "Qual é a ideia central de um PIMS associado à ISO/IEC 27701?",
      "tags": [
        "ISO 27701",
        "PIMS",
        "privacy management"
      ],
      "duration": 12,
      "difficulty": "Intermediário",
      "prerequisites": [
        "trc-l060"
      ],
      "questionIds": [
        "trc-q061",
        "trc-q061b"
      ],
      "videoIds": [
        "trc-v-lgpd",
        "trc-v-iso27001"
      ],
      "discipline": "Compliance e Privacidade"
    },
    {
      "id": "trc-l062",
      "unitId": "trc-comp-fw",
      "order": 62,
      "title": "NIST Cybersecurity Framework 2.0",
      "objective": "Memorizar as funções e usar o CSF como estrutura de gestão de risco cibernético.",
      "summary": "NIST CSF 2.0 organiza resultados de cibersegurança em seis funções: Govern, Identify, Protect, Detect, Respond e Recover. Govern foi incorporada como função de destaque na versão 2.0 e integra governança ao ciclo.",
      "points": [
        "As funções não representam uma sequência rígida.",
        "Profiles e Tiers ajudam a descrever estado e evolução.",
        "O CSF pode ser usado por organizações de diferentes setores e portes."
      ],
      "example": "Uma decisão sobre papéis, políticas, apetite a risco e supervisão se alinha fortemente a Govern; inventário e entendimento de ativos, a Identify.",
      "recall": "Quais são as seis funções do NIST CSF 2.0?",
      "tags": [
        "NIST CSF 2.0",
        "Govern",
        "risk framework"
      ],
      "duration": 12,
      "difficulty": "Intermediário",
      "prerequisites": [],
      "questionIds": [
        "trc-q062",
        "trc-q062b"
      ],
      "videoIds": [
        "trc-v-nist-csf"
      ],
      "discipline": "Compliance e Privacidade"
    },
    {
      "id": "trc-l063",
      "unitId": "trc-comp-fw",
      "order": 63,
      "title": "CIS Critical Security Controls v8.1",
      "objective": "Entender os controles priorizados e os Implementation Groups.",
      "summary": "CIS Controls v8.1 é um conjunto priorizado de salvaguardas de defesa. Implementation Groups ajudam a priorizar adoção conforme perfil e capacidade; IG1 representa higiene cibernética essencial e serve como ponto de partida.",
      "points": [
        "v8.1 alinha-se a referências modernas como CSF 2.0.",
        "Controles cobrem ativos, dados, identidade, vulnerabilidades, logs, resposta e outros temas.",
        "Prioridade não significa ignorar risco específico da organização."
      ],
      "example": "Uma organização pequena pode começar por IG1 e evoluir conforme risco, complexidade e recursos, mantendo análise contextual.",
      "recall": "O que representa IG1 nos CIS Controls?",
      "tags": [
        "CIS Controls 8.1",
        "IG1",
        "cyber hygiene"
      ],
      "duration": 12,
      "difficulty": "Intermediário",
      "prerequisites": [
        "trc-l062"
      ],
      "questionIds": [
        "trc-q063",
        "trc-q063b"
      ],
      "videoIds": [
        "trc-v-cis",
        "trc-v-cis-immersion"
      ],
      "discipline": "Compliance e Privacidade"
    },
    {
      "id": "trc-l064",
      "unitId": "trc-comp-fw",
      "order": 64,
      "title": "Marco Civil, LGPD e Resolução Anatel 740",
      "objective": "Relacionar as normas brasileiras previstas no edital e estudar textos atualizados.",
      "summary": "O Marco Civil estabelece princípios, garantias, direitos e deveres para uso da internet; a LGPD regula tratamento de dados pessoais e deve ser estudada em texto consolidado; a Resolução Anatel 740 aprovou regulamento de segurança cibernética do setor de telecomunicações e sofreu alterações posteriores, inclusive pela Resolução 767/2024.",
      "points": [
        "O edital expressamente inclui alterações das leis e da resolução.",
        "LGPD define agentes, bases, princípios, direitos e deveres de segurança.",
        "Anatel 740 aborda condutas/procedimentos para segurança de redes e serviços de telecomunicações."
      ],
      "example": "Em 2026, estudar “Lei 13.709/2018 e alterações” exige consultar a versão consolidada, não apenas a redação original de 2018.",
      "recall": "Por que a trilha aponta textos consolidados das normas?",
      "tags": [
        "LGPD",
        "Marco Civil",
        "Anatel 740",
        "law"
      ],
      "duration": 12,
      "difficulty": "Intermediário",
      "prerequisites": [
        "trc-l063"
      ],
      "questionIds": [
        "trc-q064",
        "trc-h2023-55",
        "trc-q064b"
      ],
      "videoIds": [
        "trc-v-lgpd",
        "trc-v-lgpd-inc"
      ],
      "discipline": "Compliance e Privacidade"
    }
  ],
  "questions": [
    {
      "id": "trc-h2023-01",
      "lessonId": "trc-l001",
      "topic": "Língua Portuguesa — prova histórica",
      "difficulty": "Histórica CESGRANRIO",
      "statement": "O fragmento de abertura da crônica “Estou me vendo debaixo de uma árvore, lendo a pequena história da literatura brasileira.” (parágrafo 1) faz referência a uma",
      "options": [
        "previsão",
        "fantasia",
        "esperança",
        "expectativa",
        "reminiscência"
      ],
      "correct": 4,
      "explanation": "A abertura recupera uma lembrança do passado; portanto, trata-se de reminiscência.",
      "wrong": [
        "Incorreta. A alternativa “previsão” não produz a interpretação, relação gramatical ou efeito de sentido exigido pelo enunciado. A abertura recupera uma lembrança do passado; portanto, trata-se de reminiscência.",
        "Incorreta. A alternativa “fantasia” não produz a interpretação, relação gramatical ou efeito de sentido exigido pelo enunciado. A abertura recupera uma lembrança do passado; portanto, trata-se de reminiscência.",
        "Incorreta. A alternativa “esperança” não produz a interpretação, relação gramatical ou efeito de sentido exigido pelo enunciado. A abertura recupera uma lembrança do passado; portanto, trata-se de reminiscência.",
        "Incorreta. A alternativa “expectativa” não produz a interpretação, relação gramatical ou efeito de sentido exigido pelo enunciado. A abertura recupera uma lembrança do passado; portanto, trata-se de reminiscência.",
        "Correta. A abertura recupera uma lembrança do passado; portanto, trata-se de reminiscência."
      ],
      "source": "TRANSPETRO/PSP/TERRA/NÍVEL SUPERIOR — 2023.2 · Prova 5",
      "sourceProof": "TRANSPETRO 2023.2 — Prova 5 — Segurança Cibernética e da Informação",
      "sourceStatus": "Prova oficial histórica + gabarito oficial fornecidos pelo usuário",
      "official": true,
      "historical": true,
      "board": "CESGRANRIO",
      "examYear": 2023,
      "questionNumber": 1,
      "examPart": "Língua Portuguesa",
      "textBaseId": "trc-tb-pt2023",
      "feedbackVersion": "1.7.1"
    },
    {
      "id": "trc-h2023-02",
      "lessonId": "trc-l003",
      "topic": "Língua Portuguesa — prova histórica",
      "difficulty": "Histórica CESGRANRIO",
      "statement": "No texto, as palavras que marcam o sentimento de insegurança vivenciado pela narradora ao conversar com seu pai são:",
      "options": [
        "confissão (parágrafo 7) e andar (parágrafo 8)",
        "rodeios (parágrafo 4) e gaguejar (parágrafo 6)",
        "cabecinha (parágrafo 7) e mudar (parágrafo 8)",
        "sepultura (parágrafo 3) e renegar (parágrafo 7)",
        "severidade (parágrafo 7) e esquecer (parágrafo 5)"
      ],
      "correct": 1,
      "explanation": "“Rodeios” e “gaguejar” revelam hesitação e insegurança na abordagem do assunto.",
      "wrong": [
        "Incorreta. A alternativa “confissão (parágrafo 7) e andar (parágrafo 8)” não produz a interpretação, relação gramatical ou efeito de sentido exigido pelo enunciado. “Rodeios” e “gaguejar” revelam hesitação e insegurança na abordagem do assunto.",
        "Correta. “Rodeios” e “gaguejar” revelam hesitação e insegurança na abordagem do assunto.",
        "Incorreta. A alternativa “cabecinha (parágrafo 7) e mudar (parágrafo 8)” não produz a interpretação, relação gramatical ou efeito de sentido exigido pelo enunciado. “Rodeios” e “gaguejar” revelam hesitação e insegurança na abordagem do assunto.",
        "Incorreta. A alternativa “sepultura (parágrafo 3) e renegar (parágrafo 7)” não produz a interpretação, relação gramatical ou efeito de sentido exigido pelo enunciado. “Rodeios” e “gaguejar” revelam hesitação e insegurança na abordagem do assunto.",
        "Incorreta. A alternativa “severidade (parágrafo 7) e esquecer (parágrafo 5)” não produz a interpretação, relação gramatical ou efeito de sentido exigido pelo enunciado. “Rodeios” e “gaguejar” revelam hesitação e insegurança na abordagem do assunto."
      ],
      "source": "TRANSPETRO/PSP/TERRA/NÍVEL SUPERIOR — 2023.2 · Prova 5",
      "sourceProof": "TRANSPETRO 2023.2 — Prova 5 — Segurança Cibernética e da Informação",
      "sourceStatus": "Prova oficial histórica + gabarito oficial fornecidos pelo usuário",
      "official": true,
      "historical": true,
      "board": "CESGRANRIO",
      "examYear": 2023,
      "questionNumber": 2,
      "examPart": "Língua Portuguesa",
      "textBaseId": "trc-tb-pt2023",
      "feedbackVersion": "1.7.1"
    },
    {
      "id": "trc-h2023-03",
      "lessonId": "trc-l001",
      "topic": "Língua Portuguesa — prova histórica",
      "difficulty": "Histórica CESGRANRIO",
      "statement": "De acordo com o texto, na opinião do pai, a filha deveria",
      "options": [
        "aprender a língua da avó.",
        "valorizar a língua materna.",
        "escrever em idiomas diversos.",
        "ler outros poemas de Olavo Bilac.",
        "estudar história da literatura brasileira."
      ],
      "correct": 1,
      "explanation": "O pai repreende a ideia de renegar a própria língua e defende a valorização do português.",
      "wrong": [
        "Incorreta. A alternativa “aprender a língua da avó.” não produz a interpretação, relação gramatical ou efeito de sentido exigido pelo enunciado. O pai repreende a ideia de renegar a própria língua e defende a valorização do português.",
        "Correta. O pai repreende a ideia de renegar a própria língua e defende a valorização do português.",
        "Incorreta. A alternativa “escrever em idiomas diversos.” não produz a interpretação, relação gramatical ou efeito de sentido exigido pelo enunciado. O pai repreende a ideia de renegar a própria língua e defende a valorização do português.",
        "Incorreta. A alternativa “ler outros poemas de Olavo Bilac.” não produz a interpretação, relação gramatical ou efeito de sentido exigido pelo enunciado. O pai repreende a ideia de renegar a própria língua e defende a valorização do português.",
        "Incorreta. A alternativa “estudar história da literatura brasileira.” não produz a interpretação, relação gramatical ou efeito de sentido exigido pelo enunciado. O pai repreende a ideia de renegar a própria língua e defende a valorização do português."
      ],
      "source": "TRANSPETRO/PSP/TERRA/NÍVEL SUPERIOR — 2023.2 · Prova 5",
      "sourceProof": "TRANSPETRO 2023.2 — Prova 5 — Segurança Cibernética e da Informação",
      "sourceStatus": "Prova oficial histórica + gabarito oficial fornecidos pelo usuário",
      "official": true,
      "historical": true,
      "board": "CESGRANRIO",
      "examYear": 2023,
      "questionNumber": 3,
      "examPart": "Língua Portuguesa",
      "textBaseId": "trc-tb-pt2023",
      "feedbackVersion": "1.7.1"
    },
    {
      "id": "trc-h2023-04",
      "lessonId": "trc-l001",
      "topic": "Língua Portuguesa — prova histórica",
      "difficulty": "Histórica CESGRANRIO",
      "statement": "Ao ler os versos de Olavo Bilac, o “quase” susto da narradora, mencionado no parágrafo 2, foi motivado pela",
      "options": [
        "possibilidade de seus escritos não serem conhecidos.",
        "falta de conhecimento sobre a localização do Lácio.",
        "necessidade de aprender uma língua diferente.",
        "surpresa com a postura pessimista do poeta.",
        "abordagem da temática da morte."
      ],
      "correct": 0,
      "explanation": "A narradora interpreta “sepultura” como risco de desaparecimento de seus escritos.",
      "wrong": [
        "Correta. A narradora interpreta “sepultura” como risco de desaparecimento de seus escritos.",
        "Incorreta. A alternativa “falta de conhecimento sobre a localização do Lácio.” não produz a interpretação, relação gramatical ou efeito de sentido exigido pelo enunciado. A narradora interpreta “sepultura” como risco de desaparecimento de seus escritos.",
        "Incorreta. A alternativa “necessidade de aprender uma língua diferente.” não produz a interpretação, relação gramatical ou efeito de sentido exigido pelo enunciado. A narradora interpreta “sepultura” como risco de desaparecimento de seus escritos.",
        "Incorreta. A alternativa “surpresa com a postura pessimista do poeta.” não produz a interpretação, relação gramatical ou efeito de sentido exigido pelo enunciado. A narradora interpreta “sepultura” como risco de desaparecimento de seus escritos.",
        "Incorreta. A alternativa “abordagem da temática da morte.” não produz a interpretação, relação gramatical ou efeito de sentido exigido pelo enunciado. A narradora interpreta “sepultura” como risco de desaparecimento de seus escritos."
      ],
      "source": "TRANSPETRO/PSP/TERRA/NÍVEL SUPERIOR — 2023.2 · Prova 5",
      "sourceProof": "TRANSPETRO 2023.2 — Prova 5 — Segurança Cibernética e da Informação",
      "sourceStatus": "Prova oficial histórica + gabarito oficial fornecidos pelo usuário",
      "official": true,
      "historical": true,
      "board": "CESGRANRIO",
      "examYear": 2023,
      "questionNumber": 4,
      "examPart": "Língua Portuguesa",
      "textBaseId": "trc-tb-pt2023",
      "feedbackVersion": "1.7.1"
    },
    {
      "id": "trc-h2023-05",
      "lessonId": "trc-l006",
      "topic": "Língua Portuguesa — prova histórica",
      "difficulty": "Histórica CESGRANRIO",
      "statement": "O emprego do acento grave em “soneto à língua portuguesa” (parágrafo 2) explica-se a partir do entendimento de que Olavo Bilac escreveu um soneto",
      "options": [
        "em língua portuguesa",
        "com a língua portuguesa",
        "para a língua portuguesa",
        "sobre a língua portuguesa",
        "por causa da língua portuguesa"
      ],
      "correct": 2,
      "explanation": "A construção subentende “escrever um soneto para a língua portuguesa”, com preposição a + artigo a.",
      "wrong": [
        "Incorreta. A alternativa “em língua portuguesa” não produz a interpretação, relação gramatical ou efeito de sentido exigido pelo enunciado. A construção subentende “escrever um soneto para a língua portuguesa”, com preposição a + artigo a.",
        "Incorreta. A alternativa “com a língua portuguesa” não produz a interpretação, relação gramatical ou efeito de sentido exigido pelo enunciado. A construção subentende “escrever um soneto para a língua portuguesa”, com preposição a + artigo a.",
        "Correta. A construção subentende “escrever um soneto para a língua portuguesa”, com preposição a + artigo a.",
        "Incorreta. A alternativa “sobre a língua portuguesa” não produz a interpretação, relação gramatical ou efeito de sentido exigido pelo enunciado. A construção subentende “escrever um soneto para a língua portuguesa”, com preposição a + artigo a.",
        "Incorreta. A alternativa “por causa da língua portuguesa” não produz a interpretação, relação gramatical ou efeito de sentido exigido pelo enunciado. A construção subentende “escrever um soneto para a língua portuguesa”, com preposição a + artigo a."
      ],
      "source": "TRANSPETRO/PSP/TERRA/NÍVEL SUPERIOR — 2023.2 · Prova 5",
      "sourceProof": "TRANSPETRO 2023.2 — Prova 5 — Segurança Cibernética e da Informação",
      "sourceStatus": "Prova oficial histórica + gabarito oficial fornecidos pelo usuário",
      "official": true,
      "historical": true,
      "board": "CESGRANRIO",
      "examYear": 2023,
      "questionNumber": 5,
      "examPart": "Língua Portuguesa",
      "textBaseId": "trc-tb-pt2023",
      "feedbackVersion": "1.7.1"
    },
    {
      "id": "trc-h2023-06",
      "lessonId": "trc-l002",
      "topic": "Língua Portuguesa — prova histórica",
      "difficulty": "Histórica CESGRANRIO",
      "statement": "A palavra que funciona como um mecanismo de coesão textual, retomando um antecedente, em:",
      "options": [
        "“parei quase num susto depois que li os primeiros versos”. (parágrafo 2)",
        "“Não esquecer que a minha avó, Pedrina Perucchi, era italiana”. (parágrafo 5)",
        "“ficou olhando a borboleta que entrou na varanda” (parágrafo 7)",
        "“Sempre que meu pai queria mudar de assunto ele mudava de lugar”. (parágrafo 8)",
        "“quando me avisaram lá do pequeno hotel em Jacareí que ele tinha morrido”. (parágrafo 9)"
      ],
      "correct": 2,
      "explanation": "Em “a borboleta que entrou”, o pronome relativo “que” retoma “a borboleta”.",
      "wrong": [
        "Incorreta. A alternativa ““parei quase num susto depois que li os primeiros versos”. (parágrafo 2)” não produz a interpretação, relação gramatical ou efeito de sentido exigido pelo enunciado. Em “a borboleta que entrou”, o pronome relativo “que” retoma “a borboleta”.",
        "Incorreta. A alternativa ““Não esquecer que a minha avó, Pedrina Perucchi, era italiana”. (parágrafo 5)” não produz a interpretação, relação gramatical ou efeito de sentido exigido pelo enunciado. Em “a borboleta que entrou”, o pronome relativo “que” retoma “a borboleta”.",
        "Correta. Em “a borboleta que entrou”, o pronome relativo “que” retoma “a borboleta”.",
        "Incorreta. A alternativa ““Sempre que meu pai queria mudar de assunto ele mudava de lugar”. (parágrafo 8)” não produz a interpretação, relação gramatical ou efeito de sentido exigido pelo enunciado. Em “a borboleta que entrou”, o pronome relativo “que” retoma “a borboleta”.",
        "Incorreta. A alternativa ““quando me avisaram lá do pequeno hotel em Jacareí que ele tinha morrido”. (parágrafo 9)” não produz a interpretação, relação gramatical ou efeito de sentido exigido pelo enunciado. Em “a borboleta que entrou”, o pronome relativo “que” retoma “a borboleta”."
      ],
      "source": "TRANSPETRO/PSP/TERRA/NÍVEL SUPERIOR — 2023.2 · Prova 5",
      "sourceProof": "TRANSPETRO 2023.2 — Prova 5 — Segurança Cibernética e da Informação",
      "sourceStatus": "Prova oficial histórica + gabarito oficial fornecidos pelo usuário",
      "official": true,
      "historical": true,
      "board": "CESGRANRIO",
      "examYear": 2023,
      "questionNumber": 6,
      "examPart": "Língua Portuguesa",
      "textBaseId": "trc-tb-pt2023",
      "feedbackVersion": "1.7.1"
    },
    {
      "id": "trc-h2023-07",
      "lessonId": "trc-l005",
      "topic": "Língua Portuguesa — prova histórica",
      "difficulty": "Histórica CESGRANRIO",
      "statement": "A frase em que as vírgulas estão empregadas com a mesma função que em “Não esquecer que a minha avó, Pedrina Perucchi, era italiana” (parágrafo 5) é:",
      "options": [
        "Mude de lugar, meu pai, porque a morte vai chegar.",
        "A filha, preocupada e triste, questionava a própria língua materna.",
        "A língua portuguesa, embora inculta, constrói belos textos literários.",
        "Os poemas, textos de uma beleza sem igual, encantam seus leitores.",
        "Colocou os óculos e, caminhando pela sala, revelou a beleza do poema."
      ],
      "correct": 3,
      "explanation": "“Pedrina Perucchi” e “textos de uma beleza sem igual” exercem função apositiva, isolada por vírgulas.",
      "wrong": [
        "Incorreta. A alternativa “Mude de lugar, meu pai, porque a morte vai chegar.” não produz a interpretação, relação gramatical ou efeito de sentido exigido pelo enunciado. “Pedrina Perucchi” e “textos de uma beleza sem igual” exercem função apositiva, isolada por vírgulas.",
        "Incorreta. A alternativa “A filha, preocupada e triste, questionava a própria língua materna.” não produz a interpretação, relação gramatical ou efeito de sentido exigido pelo enunciado. “Pedrina Perucchi” e “textos de uma beleza sem igual” exercem função apositiva, isolada por vírgulas.",
        "Incorreta. A alternativa “A língua portuguesa, embora inculta, constrói belos textos literários.” não produz a interpretação, relação gramatical ou efeito de sentido exigido pelo enunciado. “Pedrina Perucchi” e “textos de uma beleza sem igual” exercem função apositiva, isolada por vírgulas.",
        "Correta. “Pedrina Perucchi” e “textos de uma beleza sem igual” exercem função apositiva, isolada por vírgulas.",
        "Incorreta. A alternativa “Colocou os óculos e, caminhando pela sala, revelou a beleza do poema.” não produz a interpretação, relação gramatical ou efeito de sentido exigido pelo enunciado. “Pedrina Perucchi” e “textos de uma beleza sem igual” exercem função apositiva, isolada por vírgulas."
      ],
      "source": "TRANSPETRO/PSP/TERRA/NÍVEL SUPERIOR — 2023.2 · Prova 5",
      "sourceProof": "TRANSPETRO 2023.2 — Prova 5 — Segurança Cibernética e da Informação",
      "sourceStatus": "Prova oficial histórica + gabarito oficial fornecidos pelo usuário",
      "official": true,
      "historical": true,
      "board": "CESGRANRIO",
      "examYear": 2023,
      "questionNumber": 7,
      "examPart": "Língua Portuguesa",
      "textBaseId": "trc-tb-pt2023",
      "feedbackVersion": "1.7.1"
    },
    {
      "id": "trc-h2023-08",
      "lessonId": "trc-l004",
      "topic": "Língua Portuguesa — prova histórica",
      "difficulty": "Histórica CESGRANRIO",
      "statement": "Considerando-se a correlação adequada entre tempos e modos verbais, a alternativa que, respeitando a norma-padrão, completa o período iniciado pelo trecho “A autora também teria sido lida se...” é",
      "options": [
        "escrever seus contos em outra língua.",
        "escrevera seus contos em outra língua.",
        "tiver escrito seus contos em outra língua.",
        "teria escrito seus contos em outra língua.",
        "tivesse escrito seus contos em outra língua."
      ],
      "correct": 4,
      "explanation": "A forma condicional “teria sido” correlaciona-se adequadamente com o pretérito imperfeito do subjuntivo: “se tivesse escrito”.",
      "wrong": [
        "Incorreta. A alternativa “escrever seus contos em outra língua.” não produz a interpretação, relação gramatical ou efeito de sentido exigido pelo enunciado. A forma condicional “teria sido” correlaciona-se adequadamente com o pretérito imperfeito do subjuntivo: “se tivesse escrito”.",
        "Incorreta. A alternativa “escrevera seus contos em outra língua.” não produz a interpretação, relação gramatical ou efeito de sentido exigido pelo enunciado. A forma condicional “teria sido” correlaciona-se adequadamente com o pretérito imperfeito do subjuntivo: “se tivesse escrito”.",
        "Incorreta. A alternativa “tiver escrito seus contos em outra língua.” não produz a interpretação, relação gramatical ou efeito de sentido exigido pelo enunciado. A forma condicional “teria sido” correlaciona-se adequadamente com o pretérito imperfeito do subjuntivo: “se tivesse escrito”.",
        "Incorreta. A alternativa “teria escrito seus contos em outra língua.” não produz a interpretação, relação gramatical ou efeito de sentido exigido pelo enunciado. A forma condicional “teria sido” correlaciona-se adequadamente com o pretérito imperfeito do subjuntivo: “se tivesse escrito”.",
        "Correta. A forma condicional “teria sido” correlaciona-se adequadamente com o pretérito imperfeito do subjuntivo: “se tivesse escrito”."
      ],
      "source": "TRANSPETRO/PSP/TERRA/NÍVEL SUPERIOR — 2023.2 · Prova 5",
      "sourceProof": "TRANSPETRO 2023.2 — Prova 5 — Segurança Cibernética e da Informação",
      "sourceStatus": "Prova oficial histórica + gabarito oficial fornecidos pelo usuário",
      "official": true,
      "historical": true,
      "board": "CESGRANRIO",
      "examYear": 2023,
      "questionNumber": 8,
      "examPart": "Língua Portuguesa",
      "textBaseId": "trc-tb-pt2023",
      "feedbackVersion": "1.7.1"
    },
    {
      "id": "trc-h2023-09",
      "lessonId": "trc-l005",
      "topic": "Língua Portuguesa — prova histórica",
      "difficulty": "Histórica CESGRANRIO",
      "statement": "No parágrafo 6, “nossa língua é sepultura mesmo, tudo o que a gente fizer vai para debaixo da terra, desaparece!”, o segundo segmento pode articular-se com o anterior, sem alteração do sentido original, empregando-se o conector",
      "options": [
        "quando",
        "portanto",
        "enquanto",
        "embora",
        "ou"
      ],
      "correct": 1,
      "explanation": "O segundo segmento é apresentado como consequência da ideia anterior, relação expressa por “portanto”.",
      "wrong": [
        "Incorreta. A alternativa “quando” não produz a interpretação, relação gramatical ou efeito de sentido exigido pelo enunciado. O segundo segmento é apresentado como consequência da ideia anterior, relação expressa por “portanto”.",
        "Correta. O segundo segmento é apresentado como consequência da ideia anterior, relação expressa por “portanto”.",
        "Incorreta. A alternativa “enquanto” não produz a interpretação, relação gramatical ou efeito de sentido exigido pelo enunciado. O segundo segmento é apresentado como consequência da ideia anterior, relação expressa por “portanto”.",
        "Incorreta. A alternativa “embora” não produz a interpretação, relação gramatical ou efeito de sentido exigido pelo enunciado. O segundo segmento é apresentado como consequência da ideia anterior, relação expressa por “portanto”.",
        "Incorreta. A alternativa “ou” não produz a interpretação, relação gramatical ou efeito de sentido exigido pelo enunciado. O segundo segmento é apresentado como consequência da ideia anterior, relação expressa por “portanto”."
      ],
      "source": "TRANSPETRO/PSP/TERRA/NÍVEL SUPERIOR — 2023.2 · Prova 5",
      "sourceProof": "TRANSPETRO 2023.2 — Prova 5 — Segurança Cibernética e da Informação",
      "sourceStatus": "Prova oficial histórica + gabarito oficial fornecidos pelo usuário",
      "official": true,
      "historical": true,
      "board": "CESGRANRIO",
      "examYear": 2023,
      "questionNumber": 9,
      "examPart": "Língua Portuguesa",
      "textBaseId": "trc-tb-pt2023",
      "feedbackVersion": "1.7.1"
    },
    {
      "id": "trc-h2023-10",
      "lessonId": "trc-l003",
      "topic": "Língua Portuguesa — prova histórica",
      "difficulty": "Histórica CESGRANRIO",
      "statement": "Em “O soneto é muito bonito, disse me encarando com severidade” (parágrafo 7), a palavra que pode substituir severidade, sem alteração no sentido da frase, é",
      "options": [
        "firmeza",
        "rispidez",
        "discrição",
        "desgosto",
        "incompreensão"
      ],
      "correct": 0,
      "explanation": "No contexto, “severidade” equivale a firmeza/rigor na maneira de encarar e falar.",
      "wrong": [
        "Correta. No contexto, “severidade” equivale a firmeza/rigor na maneira de encarar e falar.",
        "Incorreta. A alternativa “rispidez” não produz a interpretação, relação gramatical ou efeito de sentido exigido pelo enunciado. No contexto, “severidade” equivale a firmeza/rigor na maneira de encarar e falar.",
        "Incorreta. A alternativa “discrição” não produz a interpretação, relação gramatical ou efeito de sentido exigido pelo enunciado. No contexto, “severidade” equivale a firmeza/rigor na maneira de encarar e falar.",
        "Incorreta. A alternativa “desgosto” não produz a interpretação, relação gramatical ou efeito de sentido exigido pelo enunciado. No contexto, “severidade” equivale a firmeza/rigor na maneira de encarar e falar.",
        "Incorreta. A alternativa “incompreensão” não produz a interpretação, relação gramatical ou efeito de sentido exigido pelo enunciado. No contexto, “severidade” equivale a firmeza/rigor na maneira de encarar e falar."
      ],
      "source": "TRANSPETRO/PSP/TERRA/NÍVEL SUPERIOR — 2023.2 · Prova 5",
      "sourceProof": "TRANSPETRO 2023.2 — Prova 5 — Segurança Cibernética e da Informação",
      "sourceStatus": "Prova oficial histórica + gabarito oficial fornecidos pelo usuário",
      "official": true,
      "historical": true,
      "board": "CESGRANRIO",
      "examYear": 2023,
      "questionNumber": 10,
      "examPart": "Língua Portuguesa",
      "textBaseId": "trc-tb-pt2023",
      "feedbackVersion": "1.7.1"
    },
    {
      "id": "trc-h2023-11",
      "lessonId": "trc-l007",
      "topic": "Língua Inglesa — prova histórica",
      "difficulty": "Histórica CESGRANRIO",
      "statement": "The main idea of the text is to",
      "options": [
        "disapprove space technology.",
        "relate space technology to diseases.",
        "figure out the costs of space technology.",
        "list potential dangers of space technology.",
        "describe space technology improvements."
      ],
      "correct": 4,
      "explanation": "The text presents advances and practical sustainability benefits enabled by space technology.",
      "wrong": [
        "Incorreta. A alternativa “disapprove space technology.” não corresponde à informação, inferência ou relação linguística pedida no texto em inglês. The text presents advances and practical sustainability benefits enabled by space technology.",
        "Incorreta. A alternativa “relate space technology to diseases.” não corresponde à informação, inferência ou relação linguística pedida no texto em inglês. The text presents advances and practical sustainability benefits enabled by space technology.",
        "Incorreta. A alternativa “figure out the costs of space technology.” não corresponde à informação, inferência ou relação linguística pedida no texto em inglês. The text presents advances and practical sustainability benefits enabled by space technology.",
        "Incorreta. A alternativa “list potential dangers of space technology.” não corresponde à informação, inferência ou relação linguística pedida no texto em inglês. The text presents advances and practical sustainability benefits enabled by space technology.",
        "Correta. The text presents advances and practical sustainability benefits enabled by space technology."
      ],
      "source": "TRANSPETRO/PSP/TERRA/NÍVEL SUPERIOR — 2023.2 · Prova 5",
      "sourceProof": "TRANSPETRO 2023.2 — Prova 5 — Segurança Cibernética e da Informação",
      "sourceStatus": "Prova oficial histórica + gabarito oficial fornecidos pelo usuário",
      "official": true,
      "historical": true,
      "board": "CESGRANRIO",
      "examYear": 2023,
      "questionNumber": 11,
      "examPart": "Língua Inglesa",
      "textBaseId": "trc-tb-en2023",
      "feedbackVersion": "1.7.1"
    },
    {
      "id": "trc-h2023-12",
      "lessonId": "trc-l009",
      "topic": "Língua Inglesa — prova histórica",
      "difficulty": "Histórica CESGRANRIO",
      "statement": "In the fragment in the first paragraph “However, others are already delivering practical results”, the word However can be associated with the idea of",
      "options": [
        "time",
        "condition",
        "emphasis",
        "opposition",
        "accumulation"
      ],
      "correct": 3,
      "explanation": "“However” is a contrastive connector and expresses opposition.",
      "wrong": [
        "Incorreta. A alternativa “time” não corresponde à informação, inferência ou relação linguística pedida no texto em inglês. “However” is a contrastive connector and expresses opposition.",
        "Incorreta. A alternativa “condition” não corresponde à informação, inferência ou relação linguística pedida no texto em inglês. “However” is a contrastive connector and expresses opposition.",
        "Incorreta. A alternativa “emphasis” não corresponde à informação, inferência ou relação linguística pedida no texto em inglês. “However” is a contrastive connector and expresses opposition.",
        "Correta. “However” is a contrastive connector and expresses opposition.",
        "Incorreta. A alternativa “accumulation” não corresponde à informação, inferência ou relação linguística pedida no texto em inglês. “However” is a contrastive connector and expresses opposition."
      ],
      "source": "TRANSPETRO/PSP/TERRA/NÍVEL SUPERIOR — 2023.2 · Prova 5",
      "sourceProof": "TRANSPETRO 2023.2 — Prova 5 — Segurança Cibernética e da Informação",
      "sourceStatus": "Prova oficial histórica + gabarito oficial fornecidos pelo usuário",
      "official": true,
      "historical": true,
      "board": "CESGRANRIO",
      "examYear": 2023,
      "questionNumber": 12,
      "examPart": "Língua Inglesa",
      "textBaseId": "trc-tb-en2023",
      "feedbackVersion": "1.7.1"
    },
    {
      "id": "trc-h2023-13",
      "lessonId": "trc-l011",
      "topic": "Língua Inglesa — prova histórica",
      "difficulty": "Histórica CESGRANRIO",
      "statement": "From the fragment in the second paragraph “connectivity that can reach into situations where terrestrial technologies struggle to deliver”, it can be concluded that terrestrial technologies can present data problems related to their",
      "options": [
        "price",
        "safety",
        "choice",
        "marketing",
        "transmission"
      ],
      "correct": 4,
      "explanation": "The context contrasts satellite connectivity with terrestrial technologies that struggle to deliver connectivity/data transmission.",
      "wrong": [
        "Incorreta. A alternativa “price” não corresponde à informação, inferência ou relação linguística pedida no texto em inglês. The context contrasts satellite connectivity with terrestrial technologies that struggle to deliver connectivity/data transmission.",
        "Incorreta. A alternativa “safety” não corresponde à informação, inferência ou relação linguística pedida no texto em inglês. The context contrasts satellite connectivity with terrestrial technologies that struggle to deliver connectivity/data transmission.",
        "Incorreta. A alternativa “choice” não corresponde à informação, inferência ou relação linguística pedida no texto em inglês. The context contrasts satellite connectivity with terrestrial technologies that struggle to deliver connectivity/data transmission.",
        "Incorreta. A alternativa “marketing” não corresponde à informação, inferência ou relação linguística pedida no texto em inglês. The context contrasts satellite connectivity with terrestrial technologies that struggle to deliver connectivity/data transmission.",
        "Correta. The context contrasts satellite connectivity with terrestrial technologies that struggle to deliver connectivity/data transmission."
      ],
      "source": "TRANSPETRO/PSP/TERRA/NÍVEL SUPERIOR — 2023.2 · Prova 5",
      "sourceProof": "TRANSPETRO 2023.2 — Prova 5 — Segurança Cibernética e da Informação",
      "sourceStatus": "Prova oficial histórica + gabarito oficial fornecidos pelo usuário",
      "official": true,
      "historical": true,
      "board": "CESGRANRIO",
      "examYear": 2023,
      "questionNumber": 13,
      "examPart": "Língua Inglesa",
      "textBaseId": "trc-tb-en2023",
      "feedbackVersion": "1.7.1"
    },
    {
      "id": "trc-h2023-14",
      "lessonId": "trc-l007",
      "topic": "Língua Inglesa — prova histórica",
      "difficulty": "Histórica CESGRANRIO",
      "statement": "From the fragment in the second paragraph “Right now, the satellite supplier market is booming, driving down the cost of access to satellites”, one can infer that the more access to the satellite supplier market is feasible,",
      "options": [
        "the lower its price will be.",
        "the higher its price will be.",
        "the better its quality will be.",
        "the poorer its quality will be.",
        "the more reliable its quality will be."
      ],
      "correct": 0,
      "explanation": "“Driving down the cost” indicates that expanding supply/access is associated with lower prices.",
      "wrong": [
        "Correta. “Driving down the cost” indicates that expanding supply/access is associated with lower prices.",
        "Incorreta. A alternativa “the higher its price will be.” não corresponde à informação, inferência ou relação linguística pedida no texto em inglês. “Driving down the cost” indicates that expanding supply/access is associated with lower prices.",
        "Incorreta. A alternativa “the better its quality will be.” não corresponde à informação, inferência ou relação linguística pedida no texto em inglês. “Driving down the cost” indicates that expanding supply/access is associated with lower prices.",
        "Incorreta. A alternativa “the poorer its quality will be.” não corresponde à informação, inferência ou relação linguística pedida no texto em inglês. “Driving down the cost” indicates that expanding supply/access is associated with lower prices.",
        "Incorreta. A alternativa “the more reliable its quality will be.” não corresponde à informação, inferência ou relação linguística pedida no texto em inglês. “Driving down the cost” indicates that expanding supply/access is associated with lower prices."
      ],
      "source": "TRANSPETRO/PSP/TERRA/NÍVEL SUPERIOR — 2023.2 · Prova 5",
      "sourceProof": "TRANSPETRO 2023.2 — Prova 5 — Segurança Cibernética e da Informação",
      "sourceStatus": "Prova oficial histórica + gabarito oficial fornecidos pelo usuário",
      "official": true,
      "historical": true,
      "board": "CESGRANRIO",
      "examYear": 2023,
      "questionNumber": 14,
      "examPart": "Língua Inglesa",
      "textBaseId": "trc-tb-en2023",
      "feedbackVersion": "1.7.1"
    },
    {
      "id": "trc-h2023-15",
      "lessonId": "trc-l009",
      "topic": "Língua Inglesa — prova histórica",
      "difficulty": "Histórica CESGRANRIO",
      "statement": "The fragment in the third paragraph “The Satellites for Digitalization of Railways (SODOR) project will provide low latency” means that",
      "options": [
        "low volume of data will be conveyed within hours.",
        "low volume of data will be interrupted for a few minutes.",
        "low volume of data will be communicated within minutes.",
        "high volume of data will be transmitted with minimal delay.",
        "high volume of data will be transferred after a few minutes."
      ],
      "correct": 3,
      "explanation": "Low latency means minimal delay in data communication; the alternative captures this key meaning.",
      "wrong": [
        "Incorreta. A alternativa “low volume of data will be conveyed within hours.” não corresponde à informação, inferência ou relação linguística pedida no texto em inglês. Low latency means minimal delay in data communication; the alternative captures this key meaning.",
        "Incorreta. A alternativa “low volume of data will be interrupted for a few minutes.” não corresponde à informação, inferência ou relação linguística pedida no texto em inglês. Low latency means minimal delay in data communication; the alternative captures this key meaning.",
        "Incorreta. A alternativa “low volume of data will be communicated within minutes.” não corresponde à informação, inferência ou relação linguística pedida no texto em inglês. Low latency means minimal delay in data communication; the alternative captures this key meaning.",
        "Correta. Low latency means minimal delay in data communication; the alternative captures this key meaning.",
        "Incorreta. A alternativa “high volume of data will be transferred after a few minutes.” não corresponde à informação, inferência ou relação linguística pedida no texto em inglês. Low latency means minimal delay in data communication; the alternative captures this key meaning."
      ],
      "source": "TRANSPETRO/PSP/TERRA/NÍVEL SUPERIOR — 2023.2 · Prova 5",
      "sourceProof": "TRANSPETRO 2023.2 — Prova 5 — Segurança Cibernética e da Informação",
      "sourceStatus": "Prova oficial histórica + gabarito oficial fornecidos pelo usuário",
      "official": true,
      "historical": true,
      "board": "CESGRANRIO",
      "examYear": 2023,
      "questionNumber": 15,
      "examPart": "Língua Inglesa",
      "textBaseId": "trc-tb-en2023",
      "feedbackVersion": "1.7.1"
    },
    {
      "id": "trc-h2023-16",
      "lessonId": "trc-l008",
      "topic": "Língua Inglesa — prova histórica",
      "difficulty": "Histórica CESGRANRIO",
      "statement": "In the fragment in the fourth paragraph “the transport sector contributes around 14% of the UK’s greenhouse gas emissions, of which 91% is from road vehicles”, the word which refers to",
      "options": [
        "road vehicles",
        "transport sector",
        "United Kingdom",
        "sustainable future",
        "greenhouse gas emissions"
      ],
      "correct": 4,
      "explanation": "The relative construction “of which 91%” refers back to greenhouse gas emissions.",
      "wrong": [
        "Incorreta. A alternativa “road vehicles” não corresponde à informação, inferência ou relação linguística pedida no texto em inglês. The relative construction “of which 91%” refers back to greenhouse gas emissions.",
        "Incorreta. A alternativa “transport sector” não corresponde à informação, inferência ou relação linguística pedida no texto em inglês. The relative construction “of which 91%” refers back to greenhouse gas emissions.",
        "Incorreta. A alternativa “United Kingdom” não corresponde à informação, inferência ou relação linguística pedida no texto em inglês. The relative construction “of which 91%” refers back to greenhouse gas emissions.",
        "Incorreta. A alternativa “sustainable future” não corresponde à informação, inferência ou relação linguística pedida no texto em inglês. The relative construction “of which 91%” refers back to greenhouse gas emissions.",
        "Correta. The relative construction “of which 91%” refers back to greenhouse gas emissions."
      ],
      "source": "TRANSPETRO/PSP/TERRA/NÍVEL SUPERIOR — 2023.2 · Prova 5",
      "sourceProof": "TRANSPETRO 2023.2 — Prova 5 — Segurança Cibernética e da Informação",
      "sourceStatus": "Prova oficial histórica + gabarito oficial fornecidos pelo usuário",
      "official": true,
      "historical": true,
      "board": "CESGRANRIO",
      "examYear": 2023,
      "questionNumber": 16,
      "examPart": "Língua Inglesa",
      "textBaseId": "trc-tb-en2023",
      "feedbackVersion": "1.7.1"
    },
    {
      "id": "trc-h2023-17",
      "lessonId": "trc-l011",
      "topic": "Língua Inglesa — prova histórica",
      "difficulty": "Histórica CESGRANRIO",
      "statement": "From the fifth paragraph of the text, one can infer that models for wind and solar production can provide sources of",
      "options": [
        "unreliable power",
        "intermittent energy",
        "constant power flow",
        "scarce energy sources",
        "dangerous power sources"
      ],
      "correct": 2,
      "explanation": "Forecasting wind and solar production is presented as a way to help manage a consistent flow of green energy.",
      "wrong": [
        "Incorreta. A alternativa “unreliable power” não corresponde à informação, inferência ou relação linguística pedida no texto em inglês. Forecasting wind and solar production is presented as a way to help manage a consistent flow of green energy.",
        "Incorreta. A alternativa “intermittent energy” não corresponde à informação, inferência ou relação linguística pedida no texto em inglês. Forecasting wind and solar production is presented as a way to help manage a consistent flow of green energy.",
        "Correta. Forecasting wind and solar production is presented as a way to help manage a consistent flow of green energy.",
        "Incorreta. A alternativa “scarce energy sources” não corresponde à informação, inferência ou relação linguística pedida no texto em inglês. Forecasting wind and solar production is presented as a way to help manage a consistent flow of green energy.",
        "Incorreta. A alternativa “dangerous power sources” não corresponde à informação, inferência ou relação linguística pedida no texto em inglês. Forecasting wind and solar production is presented as a way to help manage a consistent flow of green energy."
      ],
      "source": "TRANSPETRO/PSP/TERRA/NÍVEL SUPERIOR — 2023.2 · Prova 5",
      "sourceProof": "TRANSPETRO 2023.2 — Prova 5 — Segurança Cibernética e da Informação",
      "sourceStatus": "Prova oficial histórica + gabarito oficial fornecidos pelo usuário",
      "official": true,
      "historical": true,
      "board": "CESGRANRIO",
      "examYear": 2023,
      "questionNumber": 17,
      "examPart": "Língua Inglesa",
      "textBaseId": "trc-tb-en2023",
      "feedbackVersion": "1.7.1"
    },
    {
      "id": "trc-h2023-18",
      "lessonId": "trc-l009",
      "topic": "Língua Inglesa — prova histórica",
      "difficulty": "Histórica CESGRANRIO",
      "statement": "In the fragment in the sixth paragraph “Satellite communications will also be pivotal”, the word pivotal can be replaced, with no change in meaning, by",
      "options": [
        "tricky",
        "erratic",
        "essential",
        "haphazard",
        "problematic"
      ],
      "correct": 2,
      "explanation": "“Pivotal” means crucial or essential in the context.",
      "wrong": [
        "Incorreta. A alternativa “tricky” não corresponde à informação, inferência ou relação linguística pedida no texto em inglês. “Pivotal” means crucial or essential in the context.",
        "Incorreta. A alternativa “erratic” não corresponde à informação, inferência ou relação linguística pedida no texto em inglês. “Pivotal” means crucial or essential in the context.",
        "Correta. “Pivotal” means crucial or essential in the context.",
        "Incorreta. A alternativa “haphazard” não corresponde à informação, inferência ou relação linguística pedida no texto em inglês. “Pivotal” means crucial or essential in the context.",
        "Incorreta. A alternativa “problematic” não corresponde à informação, inferência ou relação linguística pedida no texto em inglês. “Pivotal” means crucial or essential in the context."
      ],
      "source": "TRANSPETRO/PSP/TERRA/NÍVEL SUPERIOR — 2023.2 · Prova 5",
      "sourceProof": "TRANSPETRO 2023.2 — Prova 5 — Segurança Cibernética e da Informação",
      "sourceStatus": "Prova oficial histórica + gabarito oficial fornecidos pelo usuário",
      "official": true,
      "historical": true,
      "board": "CESGRANRIO",
      "examYear": 2023,
      "questionNumber": 18,
      "examPart": "Língua Inglesa",
      "textBaseId": "trc-tb-en2023",
      "feedbackVersion": "1.7.1"
    },
    {
      "id": "trc-h2023-19",
      "lessonId": "trc-l011",
      "topic": "Língua Inglesa — prova histórica",
      "difficulty": "Histórica CESGRANRIO",
      "statement": "From the seventh paragraph of the text, one can infer that automated driving will have the benefits of",
      "options": [
        "human drivers",
        "space technology",
        "terrestrial connectivity",
        "traffic controlled by people",
        "20th century designed cars"
      ],
      "correct": 1,
      "explanation": "The paragraph says vehicles will use satellite connectivity for updates, mapping, communications and safety.",
      "wrong": [
        "Incorreta. A alternativa “human drivers” não corresponde à informação, inferência ou relação linguística pedida no texto em inglês. The paragraph says vehicles will use satellite connectivity for updates, mapping, communications and safety.",
        "Correta. The paragraph says vehicles will use satellite connectivity for updates, mapping, communications and safety.",
        "Incorreta. A alternativa “terrestrial connectivity” não corresponde à informação, inferência ou relação linguística pedida no texto em inglês. The paragraph says vehicles will use satellite connectivity for updates, mapping, communications and safety.",
        "Incorreta. A alternativa “traffic controlled by people” não corresponde à informação, inferência ou relação linguística pedida no texto em inglês. The paragraph says vehicles will use satellite connectivity for updates, mapping, communications and safety.",
        "Incorreta. A alternativa “20th century designed cars” não corresponde à informação, inferência ou relação linguística pedida no texto em inglês. The paragraph says vehicles will use satellite connectivity for updates, mapping, communications and safety."
      ],
      "source": "TRANSPETRO/PSP/TERRA/NÍVEL SUPERIOR — 2023.2 · Prova 5",
      "sourceProof": "TRANSPETRO 2023.2 — Prova 5 — Segurança Cibernética e da Informação",
      "sourceStatus": "Prova oficial histórica + gabarito oficial fornecidos pelo usuário",
      "official": true,
      "historical": true,
      "board": "CESGRANRIO",
      "examYear": 2023,
      "questionNumber": 19,
      "examPart": "Língua Inglesa",
      "textBaseId": "trc-tb-en2023",
      "feedbackVersion": "1.7.1"
    },
    {
      "id": "trc-h2023-20",
      "lessonId": "trc-l007",
      "topic": "Língua Inglesa — prova histórica",
      "difficulty": "Histórica CESGRANRIO",
      "statement": "In the eighth paragraph of the text, the author states that, for the last 40 years, the company where he works has been",
      "options": [
        "embedded in antipollution laws.",
        "dedicated to space travel medicine.",
        "involved with cutting-edge space industry.",
        "concerned with the Earth’s polar ice caps.",
        "engaged in antinuclear weapon campaigns."
      ],
      "correct": 2,
      "explanation": "The company is described as deeply embedded in space engineering and involved with state-of-the-art technologies.",
      "wrong": [
        "Incorreta. A alternativa “embedded in antipollution laws.” não corresponde à informação, inferência ou relação linguística pedida no texto em inglês. The company is described as deeply embedded in space engineering and involved with state-of-the-art technologies.",
        "Incorreta. A alternativa “dedicated to space travel medicine.” não corresponde à informação, inferência ou relação linguística pedida no texto em inglês. The company is described as deeply embedded in space engineering and involved with state-of-the-art technologies.",
        "Correta. The company is described as deeply embedded in space engineering and involved with state-of-the-art technologies.",
        "Incorreta. A alternativa “concerned with the Earth’s polar ice caps.” não corresponde à informação, inferência ou relação linguística pedida no texto em inglês. The company is described as deeply embedded in space engineering and involved with state-of-the-art technologies.",
        "Incorreta. A alternativa “engaged in antinuclear weapon campaigns.” não corresponde à informação, inferência ou relação linguística pedida no texto em inglês. The company is described as deeply embedded in space engineering and involved with state-of-the-art technologies."
      ],
      "source": "TRANSPETRO/PSP/TERRA/NÍVEL SUPERIOR — 2023.2 · Prova 5",
      "sourceProof": "TRANSPETRO 2023.2 — Prova 5 — Segurança Cibernética e da Informação",
      "sourceStatus": "Prova oficial histórica + gabarito oficial fornecidos pelo usuário",
      "official": true,
      "historical": true,
      "board": "CESGRANRIO",
      "examYear": 2023,
      "questionNumber": 20,
      "examPart": "Língua Inglesa",
      "textBaseId": "trc-tb-en2023",
      "feedbackVersion": "1.7.1"
    },
    {
      "id": "trc-h2023-21",
      "lessonId": "trc-l035",
      "topic": "Propriedades e mecanismos de segurança",
      "difficulty": "Histórica CESGRANRIO",
      "statement": "Para proteger as transações eletrônicas contra fraudes, é importante implantar serviços de segurança da informação adequados. É possível, por exemplo, haver proteção contra um tipo de fraude que consiste na negação falsa de envolvimento em uma associação, mais especificamente, uma associação de comunicação que transfere dados. O serviço de segurança que assegura a proteção contra esse tipo de fraude é a",
      "options": [
        "integridade",
        "confidencialidade",
        "disponibilidade",
        "irretroatividade",
        "irretratabilidade"
      ],
      "correct": 4,
      "explanation": "Irretratabilidade (não repúdio) fornece evidências contra a negação posterior de participação em uma comunicação ou transação.",
      "wrong": [
        "Incorreta. “integridade” se refere a conceito, mecanismo ou etapa diferente do que o enunciado descreve. Irretratabilidade (não repúdio) fornece evidências contra a negação posterior de participação em uma comunicação ou transação.",
        "Incorreta. “confidencialidade” se refere a conceito, mecanismo ou etapa diferente do que o enunciado descreve. Irretratabilidade (não repúdio) fornece evidências contra a negação posterior de participação em uma comunicação ou transação.",
        "Incorreta. “disponibilidade” se refere a conceito, mecanismo ou etapa diferente do que o enunciado descreve. Irretratabilidade (não repúdio) fornece evidências contra a negação posterior de participação em uma comunicação ou transação.",
        "Incorreta. “irretroatividade” se refere a conceito, mecanismo ou etapa diferente do que o enunciado descreve. Irretratabilidade (não repúdio) fornece evidências contra a negação posterior de participação em uma comunicação ou transação.",
        "Correta. Irretratabilidade (não repúdio) fornece evidências contra a negação posterior de participação em uma comunicação ou transação."
      ],
      "source": "TRANSPETRO/PSP/TERRA/NÍVEL SUPERIOR — 2023.2 · Prova 5",
      "sourceProof": "TRANSPETRO 2023.2 — Prova 5 — Segurança Cibernética e da Informação",
      "sourceStatus": "Prova oficial histórica + gabarito oficial fornecidos pelo usuário",
      "official": true,
      "historical": true,
      "board": "CESGRANRIO",
      "examYear": 2023,
      "questionNumber": 21,
      "examPart": "Conhecimentos Específicos",
      "feedbackVersion": "1.7.1"
    },
    {
      "id": "trc-h2023-22",
      "lessonId": "trc-l040",
      "topic": "Hash, cifragem simétrica e assimétrica",
      "difficulty": "Histórica CESGRANRIO",
      "statement": "O Advanced Encryption Standard (AES) é uma cifra de bloco para aplicações comerciais. Sua especificação define três alternativas para o tamanho de chave: 128, 192 ou 256 bits. Por outro lado, o AES limita o tamanho do bloco a quantos bits?",
      "options": [
        "128",
        "192",
        "256",
        "512",
        "1024"
      ],
      "correct": 0,
      "explanation": "O AES trabalha com bloco fixo de 128 bits, embora aceite chaves de 128, 192 ou 256 bits.",
      "wrong": [
        "Correta. O AES trabalha com bloco fixo de 128 bits, embora aceite chaves de 128, 192 ou 256 bits.",
        "Incorreta. “192” se refere a conceito, mecanismo ou etapa diferente do que o enunciado descreve. O AES trabalha com bloco fixo de 128 bits, embora aceite chaves de 128, 192 ou 256 bits.",
        "Incorreta. “256” se refere a conceito, mecanismo ou etapa diferente do que o enunciado descreve. O AES trabalha com bloco fixo de 128 bits, embora aceite chaves de 128, 192 ou 256 bits.",
        "Incorreta. “512” se refere a conceito, mecanismo ou etapa diferente do que o enunciado descreve. O AES trabalha com bloco fixo de 128 bits, embora aceite chaves de 128, 192 ou 256 bits.",
        "Incorreta. “1024” se refere a conceito, mecanismo ou etapa diferente do que o enunciado descreve. O AES trabalha com bloco fixo de 128 bits, embora aceite chaves de 128, 192 ou 256 bits."
      ],
      "source": "TRANSPETRO/PSP/TERRA/NÍVEL SUPERIOR — 2023.2 · Prova 5",
      "sourceProof": "TRANSPETRO 2023.2 — Prova 5 — Segurança Cibernética e da Informação",
      "sourceStatus": "Prova oficial histórica + gabarito oficial fornecidos pelo usuário",
      "official": true,
      "historical": true,
      "board": "CESGRANRIO",
      "examYear": 2023,
      "questionNumber": 22,
      "examPart": "Conhecimentos Específicos",
      "feedbackVersion": "1.7.1"
    },
    {
      "id": "trc-h2023-23",
      "lessonId": "trc-l040",
      "topic": "Hash, cifragem simétrica e assimétrica",
      "difficulty": "Histórica CESGRANRIO",
      "statement": "Diversos conceitos da teoria dos números são essenciais para o projeto de algoritmos de chave pública. Um exemplo de algoritmo de chave pública que, para sua segurança, depende da dificuldade de se calcular logaritmos discretos é o",
      "options": [
        "Diffie-Hellman",
        "RSA",
        "DES",
        "AES",
        "RC4"
      ],
      "correct": 0,
      "explanation": "Diffie-Hellman baseia sua segurança clássica na dificuldade do problema do logaritmo discreto em grupos adequados.",
      "wrong": [
        "Correta. Diffie-Hellman baseia sua segurança clássica na dificuldade do problema do logaritmo discreto em grupos adequados.",
        "Incorreta. “RSA” se refere a conceito, mecanismo ou etapa diferente do que o enunciado descreve. Diffie-Hellman baseia sua segurança clássica na dificuldade do problema do logaritmo discreto em grupos adequados.",
        "Incorreta. “DES” se refere a conceito, mecanismo ou etapa diferente do que o enunciado descreve. Diffie-Hellman baseia sua segurança clássica na dificuldade do problema do logaritmo discreto em grupos adequados.",
        "Incorreta. “AES” se refere a conceito, mecanismo ou etapa diferente do que o enunciado descreve. Diffie-Hellman baseia sua segurança clássica na dificuldade do problema do logaritmo discreto em grupos adequados.",
        "Incorreta. “RC4” se refere a conceito, mecanismo ou etapa diferente do que o enunciado descreve. Diffie-Hellman baseia sua segurança clássica na dificuldade do problema do logaritmo discreto em grupos adequados."
      ],
      "source": "TRANSPETRO/PSP/TERRA/NÍVEL SUPERIOR — 2023.2 · Prova 5",
      "sourceProof": "TRANSPETRO 2023.2 — Prova 5 — Segurança Cibernética e da Informação",
      "sourceStatus": "Prova oficial histórica + gabarito oficial fornecidos pelo usuário",
      "official": true,
      "historical": true,
      "board": "CESGRANRIO",
      "examYear": 2023,
      "questionNumber": 23,
      "examPart": "Conhecimentos Específicos",
      "feedbackVersion": "1.7.1"
    },
    {
      "id": "trc-h2023-24",
      "lessonId": "trc-l042",
      "topic": "Certificados digitais, PKI e posse da chave",
      "difficulty": "Histórica CESGRANRIO",
      "statement": "Uma certa infraestrutura de chaves públicas (ICP) define a utilização de uma hierarquia de autoridades certificadoras. Nessa hierarquia, a autoridade certificadora raiz (ACraiz) emite apenas o certificado digital da autoridade certificadora do segundo nível da hierarquia (ACn2). Por sua vez, a ACn2 pode emitir certificado digital para um usuário (Certusuário) dessa ICP. Para a ACn2 assegurar a integridade e a autenticidade do Certusuário, esse certificado digital deve conter APENAS a(s) assinatura(s) digital(is) da(o)",
      "options": [
        "ACraiz",
        "ACn2",
        "ACraiz e do usuário titular do Certusuário",
        "ACn2 e do usuário titular do Certusuário",
        "usuário titular do Certusuário"
      ],
      "correct": 1,
      "explanation": "A autoridade certificadora que emite o certificado do usuário é quem o assina; no cenário, essa autoridade é a ACn2.",
      "wrong": [
        "Incorreta. “ACraiz” se refere a conceito, mecanismo ou etapa diferente do que o enunciado descreve. A autoridade certificadora que emite o certificado do usuário é quem o assina; no cenário, essa autoridade é a ACn2.",
        "Correta. A autoridade certificadora que emite o certificado do usuário é quem o assina; no cenário, essa autoridade é a ACn2.",
        "Incorreta. “ACraiz e do usuário titular do Certusuário” se refere a conceito, mecanismo ou etapa diferente do que o enunciado descreve. A autoridade certificadora que emite o certificado do usuário é quem o assina; no cenário, essa autoridade é a ACn2.",
        "Incorreta. “ACn2 e do usuário titular do Certusuário” se refere a conceito, mecanismo ou etapa diferente do que o enunciado descreve. A autoridade certificadora que emite o certificado do usuário é quem o assina; no cenário, essa autoridade é a ACn2.",
        "Incorreta. “usuário titular do Certusuário” se refere a conceito, mecanismo ou etapa diferente do que o enunciado descreve. A autoridade certificadora que emite o certificado do usuário é quem o assina; no cenário, essa autoridade é a ACn2."
      ],
      "source": "TRANSPETRO/PSP/TERRA/NÍVEL SUPERIOR — 2023.2 · Prova 5",
      "sourceProof": "TRANSPETRO 2023.2 — Prova 5 — Segurança Cibernética e da Informação",
      "sourceStatus": "Prova oficial histórica + gabarito oficial fornecidos pelo usuário",
      "official": true,
      "historical": true,
      "board": "CESGRANRIO",
      "examYear": 2023,
      "questionNumber": 24,
      "examPart": "Conhecimentos Específicos",
      "feedbackVersion": "1.7.1"
    },
    {
      "id": "trc-h2023-25",
      "lessonId": "trc-l040",
      "topic": "Hash, cifragem simétrica e assimétrica",
      "difficulty": "Histórica CESGRANRIO",
      "statement": "O esquema desenvolvido por Rivest, Shamir e Adleman utiliza uma expressão com exponenciais para garantir o sigilo de dados. Considerando-se esse esquema, suponha que os primos p e q foram escolhidos e que n é igual ao produto de p * q. Sabe-se que a chave pública consiste no par [e,n], a chave privada consiste no par [d,n] e o texto cifrado (C) foi gerado a partir da chave pública. Nesse contexto, o cálculo do texto plano (M) a partir do texto cifrado (C) será",
      "options": [
        "M = C^p mod n",
        "M = C^q mod n",
        "M = C^d mod n",
        "M = C^n mod d",
        "M = C^e mod d"
      ],
      "correct": 2,
      "explanation": "No RSA, a recuperação do texto plano usa o expoente privado: M = C^d mod n.",
      "wrong": [
        "Incorreta. “M = C^p mod n” se refere a conceito, mecanismo ou etapa diferente do que o enunciado descreve. No RSA, a recuperação do texto plano usa o expoente privado: M = C^d mod n.",
        "Incorreta. “M = C^q mod n” se refere a conceito, mecanismo ou etapa diferente do que o enunciado descreve. No RSA, a recuperação do texto plano usa o expoente privado: M = C^d mod n.",
        "Correta. No RSA, a recuperação do texto plano usa o expoente privado: M = C^d mod n.",
        "Incorreta. “M = C^n mod d” se refere a conceito, mecanismo ou etapa diferente do que o enunciado descreve. No RSA, a recuperação do texto plano usa o expoente privado: M = C^d mod n.",
        "Incorreta. “M = C^e mod d” se refere a conceito, mecanismo ou etapa diferente do que o enunciado descreve. No RSA, a recuperação do texto plano usa o expoente privado: M = C^d mod n."
      ],
      "source": "TRANSPETRO/PSP/TERRA/NÍVEL SUPERIOR — 2023.2 · Prova 5",
      "sourceProof": "TRANSPETRO 2023.2 — Prova 5 — Segurança Cibernética e da Informação",
      "sourceStatus": "Prova oficial histórica + gabarito oficial fornecidos pelo usuário",
      "official": true,
      "historical": true,
      "board": "CESGRANRIO",
      "examYear": 2023,
      "questionNumber": 25,
      "examPart": "Conhecimentos Específicos",
      "feedbackVersion": "1.7.1"
    },
    {
      "id": "trc-h2023-26",
      "lessonId": "trc-l040",
      "topic": "Hash, cifragem simétrica e assimétrica",
      "difficulty": "Histórica CESGRANRIO",
      "statement": "Os algoritmos de resumo de mensagem e de hash são amplamente aplicados na proteção de dados. Esses algoritmos produzem códigos de verificação para os dados com tamanhos variados, tipicamente representados em hexadecimal. É um exemplo de código produzido pelo algoritmo SHA256 o seguinte código de verificação:",
      "options": [
        "06afa6c8b54d3cc80d269379d8b6a078",
        "4d750439e3f39848345c6ef74ef3d719e34e7111",
        "db662d3a62b9d35365d14000c48d087aaee9c904dc18614961a7f02f",
        "ebdf496f67651cddf6aaa1f0b130f1b99ce9e2e93dc2503d926edcff15aee668",
        "2410b19a07684bf1a6e79a6d2f8bc72b50a992f3992cb2e972c9fc72b472be0fb2174b1bcccde2c318b2a6aa356ada75"
      ],
      "correct": 3,
      "explanation": "SHA-256 produz 256 bits, equivalentes a 64 dígitos hexadecimais; a alternativa correta apresenta esse comprimento.",
      "wrong": [
        "Incorreta. “06afa6c8b54d3cc80d269379d8b6a078” se refere a conceito, mecanismo ou etapa diferente do que o enunciado descreve. SHA-256 produz 256 bits, equivalentes a 64 dígitos hexadecimais; a alternativa correta apresenta esse comprimento.",
        "Incorreta. “4d750439e3f39848345c6ef74ef3d719e34e7111” se refere a conceito, mecanismo ou etapa diferente do que o enunciado descreve. SHA-256 produz 256 bits, equivalentes a 64 dígitos hexadecimais; a alternativa correta apresenta esse comprimento.",
        "Incorreta. “db662d3a62b9d35365d14000c48d087aaee9c904dc18614961a7f02f” se refere a conceito, mecanismo ou etapa diferente do que o enunciado descreve. SHA-256 produz 256 bits, equivalentes a 64 dígitos hexadecimais; a alternativa correta apresenta esse comprimento.",
        "Correta. SHA-256 produz 256 bits, equivalentes a 64 dígitos hexadecimais; a alternativa correta apresenta esse comprimento.",
        "Incorreta. “2410b19a07684bf1a6e79a6d2f8bc72b50a992f3992cb2e972c9fc72b472be0fb2174b1bcccde2c318b2a6aa356ada75” se refere a conceito, mecanismo ou etapa diferente do que o enunciado descreve. SHA-256 produz 256 bits, equivalentes a 64 dígitos hexadecimais; a alternativa correta apresenta esse comprimento."
      ],
      "source": "TRANSPETRO/PSP/TERRA/NÍVEL SUPERIOR — 2023.2 · Prova 5",
      "sourceProof": "TRANSPETRO 2023.2 — Prova 5 — Segurança Cibernética e da Informação",
      "sourceStatus": "Prova oficial histórica + gabarito oficial fornecidos pelo usuário",
      "official": true,
      "historical": true,
      "board": "CESGRANRIO",
      "examYear": 2023,
      "questionNumber": 26,
      "examPart": "Conhecimentos Específicos",
      "feedbackVersion": "1.7.1"
    },
    {
      "id": "trc-h2023-27",
      "lessonId": "trc-l044",
      "topic": "TLS, SSL e IPsec",
      "difficulty": "Histórica CESGRANRIO",
      "statement": "A comunicação segura é essencial para assegurar a proteção dos dados em trânsito nas redes de dados. Nesse contexto, o principal objetivo do Transport Layer Security (TLS) é fornecer um canal seguro entre duas partes que se comunicam. No TLS, o servidor",
      "options": [
        "é opcionalmente autenticado e o cliente é sempre autenticado.",
        "é sempre autenticado e o cliente nunca é autenticado.",
        "é sempre autenticado e o cliente é sempre autenticado.",
        "é sempre autenticado e o cliente é opcionalmente autenticado.",
        "nunca é autenticado e o cliente é sempre autenticado."
      ],
      "correct": 3,
      "explanation": "No uso convencional do TLS, o servidor é autenticado e a autenticação do cliente é opcional conforme a configuração.",
      "wrong": [
        "Incorreta. “é opcionalmente autenticado e o cliente é sempre autenticado.” se refere a conceito, mecanismo ou etapa diferente do que o enunciado descreve. No uso convencional do TLS, o servidor é autenticado e a autenticação do cliente é opcional conforme a configuração.",
        "Incorreta. “é sempre autenticado e o cliente nunca é autenticado.” se refere a conceito, mecanismo ou etapa diferente do que o enunciado descreve. No uso convencional do TLS, o servidor é autenticado e a autenticação do cliente é opcional conforme a configuração.",
        "Incorreta. “é sempre autenticado e o cliente é sempre autenticado.” se refere a conceito, mecanismo ou etapa diferente do que o enunciado descreve. No uso convencional do TLS, o servidor é autenticado e a autenticação do cliente é opcional conforme a configuração.",
        "Correta. No uso convencional do TLS, o servidor é autenticado e a autenticação do cliente é opcional conforme a configuração.",
        "Incorreta. “nunca é autenticado e o cliente é sempre autenticado.” se refere a conceito, mecanismo ou etapa diferente do que o enunciado descreve. No uso convencional do TLS, o servidor é autenticado e a autenticação do cliente é opcional conforme a configuração."
      ],
      "source": "TRANSPETRO/PSP/TERRA/NÍVEL SUPERIOR — 2023.2 · Prova 5",
      "sourceProof": "TRANSPETRO 2023.2 — Prova 5 — Segurança Cibernética e da Informação",
      "sourceStatus": "Prova oficial histórica + gabarito oficial fornecidos pelo usuário",
      "official": true,
      "historical": true,
      "board": "CESGRANRIO",
      "examYear": 2023,
      "questionNumber": 27,
      "examPart": "Conhecimentos Específicos",
      "feedbackVersion": "1.7.1"
    },
    {
      "id": "trc-h2023-28",
      "lessonId": "trc-l040",
      "topic": "Hash, cifragem simétrica e assimétrica",
      "difficulty": "Histórica CESGRANRIO",
      "statement": "Para aplicar uma cifra de bloco em diferentes situações, o National Institute of Standards and Technology (NIST) define alguns modos de operações usados para aprimorar o efeito do algoritmo criptográfico ou para adaptar o algoritmo para uma aplicação em particular. Em um desses modos de operação, a primeira entrada do algoritmo criptográfico é o resultado do XOR entre os primeiros 64 bits de texto claro e um vetor de inicialização (IV), e as demais entradas do algoritmo criptográfico são o resultado do XOR entre os próximos 64 bits de texto claro e os 64 bits anteriores de texto cifrado. Esse modo de operação é o",
      "options": [
        "EBC",
        "CBC",
        "CFB",
        "CTR",
        "OFB"
      ],
      "correct": 1,
      "explanation": "No CBC, cada bloco de texto claro é combinado por XOR com o bloco cifrado anterior; no primeiro bloco usa-se o IV.",
      "wrong": [
        "Incorreta. “EBC” se refere a conceito, mecanismo ou etapa diferente do que o enunciado descreve. No CBC, cada bloco de texto claro é combinado por XOR com o bloco cifrado anterior; no primeiro bloco usa-se o IV.",
        "Correta. No CBC, cada bloco de texto claro é combinado por XOR com o bloco cifrado anterior; no primeiro bloco usa-se o IV.",
        "Incorreta. “CFB” se refere a conceito, mecanismo ou etapa diferente do que o enunciado descreve. No CBC, cada bloco de texto claro é combinado por XOR com o bloco cifrado anterior; no primeiro bloco usa-se o IV.",
        "Incorreta. “CTR” se refere a conceito, mecanismo ou etapa diferente do que o enunciado descreve. No CBC, cada bloco de texto claro é combinado por XOR com o bloco cifrado anterior; no primeiro bloco usa-se o IV.",
        "Incorreta. “OFB” se refere a conceito, mecanismo ou etapa diferente do que o enunciado descreve. No CBC, cada bloco de texto claro é combinado por XOR com o bloco cifrado anterior; no primeiro bloco usa-se o IV."
      ],
      "source": "TRANSPETRO/PSP/TERRA/NÍVEL SUPERIOR — 2023.2 · Prova 5",
      "sourceProof": "TRANSPETRO 2023.2 — Prova 5 — Segurança Cibernética e da Informação",
      "sourceStatus": "Prova oficial histórica + gabarito oficial fornecidos pelo usuário",
      "official": true,
      "historical": true,
      "board": "CESGRANRIO",
      "examYear": 2023,
      "questionNumber": 28,
      "examPart": "Conhecimentos Específicos",
      "feedbackVersion": "1.7.1"
    },
    {
      "id": "trc-h2023-29",
      "lessonId": "trc-l044",
      "topic": "TLS, SSL e IPsec",
      "difficulty": "Histórica CESGRANRIO",
      "statement": "No padrão do Transport Layer Security (TLS), quando um cliente se conecta pela primeira vez a um servidor, o envio da mensagem ClientHello é obrigatório como primeira mensagem TLS. Considere que o servidor ao qual o cliente se conectou é capaz de negociar um conjunto aceitável de parâmetros de handshake com base no conteúdo da mensagem ClientHello. Nesse caso, o servidor irá responder com a seguinte mensagem:",
      "options": [
        "ServerParamsAccepted",
        "ServerAcknowledge",
        "ServerParamsOk",
        "ServerResponse",
        "ServerHello"
      ],
      "correct": 4,
      "explanation": "Após um ClientHello aceitável, a resposta de handshake do servidor começa por ServerHello.",
      "wrong": [
        "Incorreta. “ServerParamsAccepted” se refere a conceito, mecanismo ou etapa diferente do que o enunciado descreve. Após um ClientHello aceitável, a resposta de handshake do servidor começa por ServerHello.",
        "Incorreta. “ServerAcknowledge” se refere a conceito, mecanismo ou etapa diferente do que o enunciado descreve. Após um ClientHello aceitável, a resposta de handshake do servidor começa por ServerHello.",
        "Incorreta. “ServerParamsOk” se refere a conceito, mecanismo ou etapa diferente do que o enunciado descreve. Após um ClientHello aceitável, a resposta de handshake do servidor começa por ServerHello.",
        "Incorreta. “ServerResponse” se refere a conceito, mecanismo ou etapa diferente do que o enunciado descreve. Após um ClientHello aceitável, a resposta de handshake do servidor começa por ServerHello.",
        "Correta. Após um ClientHello aceitável, a resposta de handshake do servidor começa por ServerHello."
      ],
      "source": "TRANSPETRO/PSP/TERRA/NÍVEL SUPERIOR — 2023.2 · Prova 5",
      "sourceProof": "TRANSPETRO 2023.2 — Prova 5 — Segurança Cibernética e da Informação",
      "sourceStatus": "Prova oficial histórica + gabarito oficial fornecidos pelo usuário",
      "official": true,
      "historical": true,
      "board": "CESGRANRIO",
      "examYear": 2023,
      "questionNumber": 29,
      "examPart": "Conhecimentos Específicos",
      "feedbackVersion": "1.7.1"
    },
    {
      "id": "trc-h2023-30",
      "lessonId": "trc-l044",
      "topic": "TLS, SSL e IPsec",
      "difficulty": "Histórica CESGRANRIO",
      "statement": "No IP Security (IPsec), o cabeçalho de autenticação, Authentication Header (AH), oferece suporte para integridade de dados e para autenticação dos pacotes de IP. O valor de verificação de integridade, Integrity Check Value (ICV), pode ser calculado com um algoritmo de HMAC, mas deverá caber no campo reservado para os dados de autenticação. Por essa razão, se usarmos o algoritmo HMAC-SHA1, o valor do HMAC deverá ser truncado em quantos bits?",
      "options": [
        "32",
        "64",
        "96",
        "128",
        "160"
      ],
      "correct": 2,
      "explanation": "O AH com HMAC-SHA1-96 usa ICV truncado para 96 bits nesse perfil histórico do IPsec.",
      "wrong": [
        "Incorreta. “32” se refere a conceito, mecanismo ou etapa diferente do que o enunciado descreve. O AH com HMAC-SHA1-96 usa ICV truncado para 96 bits nesse perfil histórico do IPsec.",
        "Incorreta. “64” se refere a conceito, mecanismo ou etapa diferente do que o enunciado descreve. O AH com HMAC-SHA1-96 usa ICV truncado para 96 bits nesse perfil histórico do IPsec.",
        "Correta. O AH com HMAC-SHA1-96 usa ICV truncado para 96 bits nesse perfil histórico do IPsec.",
        "Incorreta. “128” se refere a conceito, mecanismo ou etapa diferente do que o enunciado descreve. O AH com HMAC-SHA1-96 usa ICV truncado para 96 bits nesse perfil histórico do IPsec.",
        "Incorreta. “160” se refere a conceito, mecanismo ou etapa diferente do que o enunciado descreve. O AH com HMAC-SHA1-96 usa ICV truncado para 96 bits nesse perfil histórico do IPsec."
      ],
      "source": "TRANSPETRO/PSP/TERRA/NÍVEL SUPERIOR — 2023.2 · Prova 5",
      "sourceProof": "TRANSPETRO 2023.2 — Prova 5 — Segurança Cibernética e da Informação",
      "sourceStatus": "Prova oficial histórica + gabarito oficial fornecidos pelo usuário",
      "official": true,
      "historical": true,
      "board": "CESGRANRIO",
      "examYear": 2023,
      "questionNumber": 30,
      "examPart": "Conhecimentos Específicos",
      "feedbackVersion": "1.7.1"
    },
    {
      "id": "trc-h2023-31",
      "lessonId": "trc-l017",
      "topic": "Ataques e abusos em ARP, IP e ICMP",
      "difficulty": "Histórica CESGRANRIO",
      "statement": "Um administrador de rede observou uma situação atípica em várias estações da rede local. Nessas estações, o endereço IP do roteador padrão da rede local encontra-se associado, de forma dinâmica, ao endereço físico da interface de rede (MAC Address) de uma estação de trabalho presente na rede local e que está operando como man-in-the-middle. Ele concluiu que a rede estava sendo atacada e que a associação maliciosa descrita estava sendo realizada. Nesse caso, a técnica de ataque utilizada foi a de",
      "options": [
        "phishing",
        "cryptojacking",
        "eavesdropping",
        "session hijacking",
        "ARP spoofing"
      ],
      "correct": 4,
      "explanation": "A associação maliciosa entre IP do gateway e MAC do atacante caracteriza ARP spoofing/ARP poisoning.",
      "wrong": [
        "Incorreta. Phishing é uma técnica de engenharia social que tenta induzir a vítima a revelar informações ou executar uma ação maliciosa. A associação maliciosa entre IP do gateway e MAC do atacante caracteriza ARP spoofing/ARP poisoning.",
        "Incorreta. Cryptojacking usa recursos computacionais da vítima para mineração de criptomoedas sem autorização. A associação maliciosa entre IP do gateway e MAC do atacante caracteriza ARP spoofing/ARP poisoning.",
        "Incorreta. Eavesdropping é escuta/interceptação de comunicação e não descreve falsificação de resolução ARP. A associação maliciosa entre IP do gateway e MAC do atacante caracteriza ARP spoofing/ARP poisoning.",
        "Incorreta. Session hijacking busca assumir uma sessão válida; não é o mecanismo de envenenamento ARP. A associação maliciosa entre IP do gateway e MAC do atacante caracteriza ARP spoofing/ARP poisoning.",
        "Correta. A associação maliciosa entre IP do gateway e MAC do atacante caracteriza ARP spoofing/ARP poisoning."
      ],
      "source": "TRANSPETRO/PSP/TERRA/NÍVEL SUPERIOR — 2023.2 · Prova 5",
      "sourceProof": "TRANSPETRO 2023.2 — Prova 5 — Segurança Cibernética e da Informação",
      "sourceStatus": "Prova oficial histórica + gabarito oficial fornecidos pelo usuário",
      "official": true,
      "historical": true,
      "board": "CESGRANRIO",
      "examYear": 2023,
      "questionNumber": 31,
      "examPart": "Conhecimentos Específicos",
      "feedbackVersion": "1.7.1"
    },
    {
      "id": "trc-h2023-32",
      "lessonId": "trc-l039",
      "topic": "CWE e classes de fraqueza",
      "difficulty": "Histórica CESGRANRIO",
      "statement": "Os registros do Common Weakness Enumeration (CWE) estão se tornando uma base de conhecimento valiosa sobre exposição a vulnerabilidades. Dentre os 25 pontos fracos de softwares, que são considerados os mais perigosos na listagem de 2023, consta a neutralização inadequada de entrada durante a geração de páginas da Web, que pode ser dividida em três principais tipos. O tipo de neutralização inadequada na qual o cliente realiza a injeção de XSS na página é o",
      "options": [
        "DOM-Based XSS",
        "Reflected XSS",
        "Stored XSS",
        "CRLF Injection",
        "LDAP Injection"
      ],
      "correct": 0,
      "explanation": "DOM-Based XSS é processado no cliente quando dados não confiáveis são manipulados pelo código da página no DOM.",
      "wrong": [
        "Correta. DOM-Based XSS é processado no cliente quando dados não confiáveis são manipulados pelo código da página no DOM.",
        "Incorreta. Reflected XSS reflete a entrada maliciosa na resposta imediata e normalmente depende de a vítima acionar a requisição preparada. DOM-Based XSS é processado no cliente quando dados não confiáveis são manipulados pelo código da página no DOM.",
        "Incorreta. Stored XSS persiste o payload no lado servidor e o entrega posteriormente a usuários que acessam o conteúdo afetado. DOM-Based XSS é processado no cliente quando dados não confiáveis são manipulados pelo código da página no DOM.",
        "Incorreta. CRLF Injection explora tratamento inadequado de caracteres de controle em linhas/cabeçalhos; é classe distinta de XSS. DOM-Based XSS é processado no cliente quando dados não confiáveis são manipulados pelo código da página no DOM.",
        "Incorreta. LDAP Injection manipula consultas LDAP; não é uma categoria de XSS. DOM-Based XSS é processado no cliente quando dados não confiáveis são manipulados pelo código da página no DOM."
      ],
      "source": "TRANSPETRO/PSP/TERRA/NÍVEL SUPERIOR — 2023.2 · Prova 5",
      "sourceProof": "TRANSPETRO 2023.2 — Prova 5 — Segurança Cibernética e da Informação",
      "sourceStatus": "Prova oficial histórica + gabarito oficial fornecidos pelo usuário",
      "official": true,
      "historical": true,
      "board": "CESGRANRIO",
      "examYear": 2023,
      "questionNumber": 32,
      "examPart": "Conhecimentos Específicos",
      "feedbackVersion": "1.7.1"
    },
    {
      "id": "trc-h2023-33",
      "lessonId": "trc-l014",
      "topic": "Ataques ativos: disfarce, repetição e DoS",
      "difficulty": "Histórica CESGRANRIO",
      "statement": "Assegurar a disponibilidade dos sistemas diante de um ataque de Denial of Service (DoS) é uma tarefa bastante complicada, devido à grande sobrecarga exercida por esse tipo de ataque sobre os sistemas. Dentre os ataques de DoS, o que causa o consumo excessivo da largura de banda é o",
      "options": [
        "spoofing",
        "snooping",
        "sniffing",
        "flooding",
        "exploiting"
      ],
      "correct": 3,
      "explanation": "Flooding consome largura de banda por grande volume de tráfego, afetando disponibilidade.",
      "wrong": [
        "Incorreta. Spoofing é falsificação de identidade, endereço ou informação de origem; não significa, por si só, inundação de tráfego. Flooding consome largura de banda por grande volume de tráfego, afetando disponibilidade.",
        "Incorreta. Snooping é observação indevida de dados ou atividade; não é o mecanismo de flooding pedido. Flooding consome largura de banda por grande volume de tráfego, afetando disponibilidade.",
        "Incorreta. Sniffing captura ou inspeciona tráfego de rede; não equivale a flooding. Flooding consome largura de banda por grande volume de tráfego, afetando disponibilidade.",
        "Correta. Flooding consome largura de banda por grande volume de tráfego, afetando disponibilidade.",
        "Incorreta. Exploit/exploiting é exploração de uma vulnerabilidade; o termo não identifica especificamente inundação de banda. Flooding consome largura de banda por grande volume de tráfego, afetando disponibilidade."
      ],
      "source": "TRANSPETRO/PSP/TERRA/NÍVEL SUPERIOR — 2023.2 · Prova 5",
      "sourceProof": "TRANSPETRO 2023.2 — Prova 5 — Segurança Cibernética e da Informação",
      "sourceStatus": "Prova oficial histórica + gabarito oficial fornecidos pelo usuário",
      "official": true,
      "historical": true,
      "board": "CESGRANRIO",
      "examYear": 2023,
      "questionNumber": 33,
      "examPart": "Conhecimentos Específicos",
      "feedbackVersion": "1.7.1"
    },
    {
      "id": "trc-h2023-34",
      "lessonId": "trc-l034",
      "topic": "IEEE 802.1X, EAP e RADIUS",
      "difficulty": "Histórica CESGRANRIO",
      "statement": "Uma política de segurança de redes efetiva requer o controle de acesso a redes de dados da organização. O padrão do IEEE 802.1X permite fazer esse controle utilizando uma infraestrutura formada pelo suplicante, pelo autenticador e pelo servidor de autenticação. Considere que o suplicante não está devidamente autenticado, e, por isso, o sistema de comunicação está operando de forma limitada, restringindo o uso da rede de comunicação de dados. Nessa situação, para se comunicar com o autenticador e proceder com o processo de autenticação, o suplicante utilizará o protocolo",
      "options": [
        "DHCP",
        "EAP",
        "SMB",
        "HTTP",
        "HTTPS"
      ],
      "correct": 1,
      "explanation": "EAP é usado no processo de autenticação entre suplicante e autenticador em 802.1X.",
      "wrong": [
        "Incorreta. DHCP distribui parâmetros de configuração de rede e não é o mecanismo EAP usado pelo suplicante no 802.1X. EAP é usado no processo de autenticação entre suplicante e autenticador em 802.1X.",
        "Correta. EAP é usado no processo de autenticação entre suplicante e autenticador em 802.1X.",
        "Incorreta. SMB é protocolo de compartilhamento de arquivos e recursos em rede; não é o protocolo de autenticação do 802.1X. EAP é usado no processo de autenticação entre suplicante e autenticador em 802.1X.",
        "Incorreta. HTTP é protocolo de aplicação para transferência de recursos web; não substitui EAP no 802.1X. EAP é usado no processo de autenticação entre suplicante e autenticador em 802.1X.",
        "Incorreta. HTTPS é HTTP protegido por TLS; não substitui EAP no 802.1X. EAP é usado no processo de autenticação entre suplicante e autenticador em 802.1X."
      ],
      "source": "TRANSPETRO/PSP/TERRA/NÍVEL SUPERIOR — 2023.2 · Prova 5",
      "sourceProof": "TRANSPETRO 2023.2 — Prova 5 — Segurança Cibernética e da Informação",
      "sourceStatus": "Prova oficial histórica + gabarito oficial fornecidos pelo usuário",
      "official": true,
      "historical": true,
      "board": "CESGRANRIO",
      "examYear": 2023,
      "questionNumber": 34,
      "examPart": "Conhecimentos Específicos",
      "feedbackVersion": "1.7.1"
    },
    {
      "id": "trc-h2023-35",
      "lessonId": "trc-l013",
      "topic": "Ataques passivos: escuta e inferência",
      "difficulty": "Histórica CESGRANRIO",
      "statement": "A técnica de escuta (wire tapping) é amplamente utilizada para atacar as redes de comunicação de dados, sendo a escuta passiva uma técnica comum em ataques passivos. Um exemplo de ataque passivo é a(o)",
      "options": [
        "análise de tráfego",
        "modificação de mensagem",
        "negação de serviço",
        "repetição",
        "disfarce"
      ],
      "correct": 0,
      "explanation": "Análise de tráfego observa padrões sem alterar a comunicação e é exemplo de ataque passivo.",
      "wrong": [
        "Correta. Análise de tráfego observa padrões sem alterar a comunicação e é exemplo de ataque passivo.",
        "Incorreta. “modificação de mensagem” se refere a conceito, mecanismo ou etapa diferente do que o enunciado descreve. Análise de tráfego observa padrões sem alterar a comunicação e é exemplo de ataque passivo.",
        "Incorreta. “negação de serviço” se refere a conceito, mecanismo ou etapa diferente do que o enunciado descreve. Análise de tráfego observa padrões sem alterar a comunicação e é exemplo de ataque passivo.",
        "Incorreta. “repetição” se refere a conceito, mecanismo ou etapa diferente do que o enunciado descreve. Análise de tráfego observa padrões sem alterar a comunicação e é exemplo de ataque passivo.",
        "Incorreta. “disfarce” se refere a conceito, mecanismo ou etapa diferente do que o enunciado descreve. Análise de tráfego observa padrões sem alterar a comunicação e é exemplo de ataque passivo."
      ],
      "source": "TRANSPETRO/PSP/TERRA/NÍVEL SUPERIOR — 2023.2 · Prova 5",
      "sourceProof": "TRANSPETRO 2023.2 — Prova 5 — Segurança Cibernética e da Informação",
      "sourceStatus": "Prova oficial histórica + gabarito oficial fornecidos pelo usuário",
      "official": true,
      "historical": true,
      "board": "CESGRANRIO",
      "examYear": 2023,
      "questionNumber": 35,
      "examPart": "Conhecimentos Específicos",
      "feedbackVersion": "1.7.1"
    },
    {
      "id": "trc-h2023-36",
      "lessonId": "trc-l015",
      "topic": "Etapas do ataque: reconhecimento a acesso",
      "difficulty": "Histórica CESGRANRIO",
      "statement": "Para a realização de um ataque bem direcionado a um alvo, é importante que se colha grande quantidade de informações, e essa etapa de preparação do ataque é conhecida como footprinting. Combinando ferramentas e técnicas, um atacante pode facilmente obter informações públicas sobre os blocos de rede de um domínio e sobre o endereço de contato dos responsáveis por ele. Uma ferramenta utilizada para essa finalidade é a",
      "options": [
        "ping",
        "nmap",
        "whois",
        "telnet",
        "traceroute"
      ],
      "correct": 2,
      "explanation": "WHOIS é usado para consultar informações públicas de registro de domínios e blocos, apoiando footprinting.",
      "wrong": [
        "Incorreta. Ping usa ICMP para testar alcançabilidade; não consulta registros públicos de domínio ou blocos de endereços. WHOIS é usado para consultar informações públicas de registro de domínios e blocos, apoiando footprinting.",
        "Incorreta. Nmap é ferramenta de descoberta e varredura de rede/portas; não é o serviço de consulta cadastral WHOIS. WHOIS é usado para consultar informações públicas de registro de domínios e blocos, apoiando footprinting.",
        "Correta. WHOIS é usado para consultar informações públicas de registro de domínios e blocos, apoiando footprinting.",
        "Incorreta. Telnet oferece terminal remoto em texto claro; não é ferramenta de consulta cadastral de domínio. WHOIS é usado para consultar informações públicas de registro de domínios e blocos, apoiando footprinting.",
        "Incorreta. Traceroute mostra saltos do caminho de rede; não fornece os dados cadastrais obtidos por WHOIS. WHOIS é usado para consultar informações públicas de registro de domínios e blocos, apoiando footprinting."
      ],
      "source": "TRANSPETRO/PSP/TERRA/NÍVEL SUPERIOR — 2023.2 · Prova 5",
      "sourceProof": "TRANSPETRO 2023.2 — Prova 5 — Segurança Cibernética e da Informação",
      "sourceStatus": "Prova oficial histórica + gabarito oficial fornecidos pelo usuário",
      "official": true,
      "historical": true,
      "board": "CESGRANRIO",
      "examYear": 2023,
      "questionNumber": 36,
      "examPart": "Conhecimentos Específicos",
      "feedbackVersion": "1.7.1"
    },
    {
      "id": "trc-h2023-37",
      "lessonId": "trc-l030",
      "topic": "Ferramentas de credenciais e Wi-Fi",
      "difficulty": "Histórica CESGRANRIO",
      "statement": "As organizações estão cada vez mais conscientes sobre os riscos do uso de uma autenticação de usuários com base em um único fator, como, por exemplo, uma senha. Tipicamente, usuários escolhem péssimas senhas para facilitar a sua lembrança no futuro. Comumente, são utilizadas palavras de dicionários combinadas com números ou símbolos, o que facilita os ataques on-line de força bruta. Os hackers utilizam amplamente uma ferramenta que estabelece a comunicação com um serviço de rede e testa a autenticação de usuários usando listas de nomes de login e senhas em busca de uma combinação válida no sistema alvo. A ferramenta descrita é a",
      "options": [
        "crunch",
        "cewl",
        "samdump2",
        "hydra",
        "bkhive"
      ],
      "correct": 3,
      "explanation": "Hydra é conhecida por testes automatizados de autenticação em diferentes serviços de rede.",
      "wrong": [
        "Incorreta. Crunch é gerador de wordlists; não realiza por si só as tentativas de autenticação em serviços de rede descritas no item. Hydra é conhecida por testes automatizados de autenticação em diferentes serviços de rede.",
        "Incorreta. CeWL cria listas de palavras a partir de conteúdo web; não é o cliente de força bruta online descrito. Hydra é conhecida por testes automatizados de autenticação em diferentes serviços de rede.",
        "Incorreta. samdump2 é associado à obtenção de hashes de credenciais do Windows; não testa logins de rede como Hydra. Hydra é conhecida por testes automatizados de autenticação em diferentes serviços de rede.",
        "Correta. Hydra é conhecida por testes automatizados de autenticação em diferentes serviços de rede.",
        "Incorreta. bkhive é associado à extração de material do hive SYSTEM em fluxos antigos de obtenção de hashes; não é ferramenta de login online. Hydra é conhecida por testes automatizados de autenticação em diferentes serviços de rede."
      ],
      "source": "TRANSPETRO/PSP/TERRA/NÍVEL SUPERIOR — 2023.2 · Prova 5",
      "sourceProof": "TRANSPETRO 2023.2 — Prova 5 — Segurança Cibernética e da Informação",
      "sourceStatus": "Prova oficial histórica + gabarito oficial fornecidos pelo usuário",
      "official": true,
      "historical": true,
      "board": "CESGRANRIO",
      "examYear": 2023,
      "questionNumber": 37,
      "examPart": "Conhecimentos Específicos",
      "feedbackVersion": "1.7.1"
    },
    {
      "id": "trc-h2023-38",
      "lessonId": "trc-l022",
      "topic": "Engenharia social: ciclo e técnicas",
      "difficulty": "Histórica CESGRANRIO",
      "statement": "Os usuários de um sistema estão sujeitos a ataques de engenharia social. Um vetor comum nesses ataques é o e-mail, usado para atrair alvos a visitarem sites maliciosos ou a fazerem o download de anexos maliciosos, entre outras atividades maliciosas. Um meio de realizar esse tipo de ataque é utilizando uma ferramenta de código aberto, concebida para ajudar na realização dos ataques de engenharia social, permitindo fazer um ataque de spear-phishing. A ferramenta descrita é o",
      "options": [
        "msfvenom",
        "setoolkit",
        "iptables",
        "burp",
        "ettercap"
      ],
      "correct": 1,
      "explanation": "SET (Social-Engineer Toolkit/setoolkit) foi concebido para apoiar simulações e testes de engenharia social.",
      "wrong": [
        "Incorreta. msfvenom gera payloads para testes; não é o toolkit específico de engenharia social descrito. SET (Social-Engineer Toolkit/setoolkit) foi concebido para apoiar simulações e testes de engenharia social.",
        "Correta. SET (Social-Engineer Toolkit/setoolkit) foi concebido para apoiar simulações e testes de engenharia social.",
        "Incorreta. iptables administra regras de filtragem/NAT no Linux; não é toolkit de spear-phishing. SET (Social-Engineer Toolkit/setoolkit) foi concebido para apoiar simulações e testes de engenharia social.",
        "Incorreta. Burp Suite é plataforma de testes de segurança de aplicações web e proxy de interceptação; não é o toolkit de spear-phishing pedido. SET (Social-Engineer Toolkit/setoolkit) foi concebido para apoiar simulações e testes de engenharia social.",
        "Incorreta. Ettercap é voltado a sniffing e ataques MITM em redes locais; não é o toolkit de spear-phishing descrito. SET (Social-Engineer Toolkit/setoolkit) foi concebido para apoiar simulações e testes de engenharia social."
      ],
      "source": "TRANSPETRO/PSP/TERRA/NÍVEL SUPERIOR — 2023.2 · Prova 5",
      "sourceProof": "TRANSPETRO 2023.2 — Prova 5 — Segurança Cibernética e da Informação",
      "sourceStatus": "Prova oficial histórica + gabarito oficial fornecidos pelo usuário",
      "official": true,
      "historical": true,
      "board": "CESGRANRIO",
      "examYear": 2023,
      "questionNumber": 38,
      "examPart": "Conhecimentos Específicos",
      "feedbackVersion": "1.7.1"
    },
    {
      "id": "trc-h2023-39",
      "lessonId": "trc-l014",
      "topic": "Ataques ativos: disfarce, repetição e DoS",
      "difficulty": "Histórica CESGRANRIO",
      "statement": "Enquanto alguns ataques de Denial of Service (DoS) focam o consumo da largura de banda, outros focam a inanição de recursos. Em um desses ataques de inanição de recursos, o atacante comanda os seus bots para que abram conexões TCP com o servidor alvo e dividam solicitações GET ou POST do protocolo HTTP em vários pacotes ou sessões. Para ser mantida a conexão aberta com o servidor, cabeçalhos HTTP são enviados em cada solicitação, antes que a conexão TCP atinja o tempo limite. Esse ataque de DoS geralmente é realizado de forma distribuída, sendo conhecido como",
      "options": [
        "smurf",
        "mirai",
        "slowloris",
        "brobot",
        "PoD"
      ],
      "correct": 2,
      "explanation": "Slowloris mantém muitas conexões HTTP abertas enviando requisições de forma lenta para exaurir recursos do servidor.",
      "wrong": [
        "Incorreta. Smurf é um DoS baseado em reflexão/amplificação ICMP; não corresponde ao método HTTP lento descrito. Slowloris mantém muitas conexões HTTP abertas enviando requisições de forma lenta para exaurir recursos do servidor.",
        "Incorreta. Mirai é malware/botnet conhecido por comprometer dispositivos IoT; não é o nome do ataque HTTP de conexões lentas. Slowloris mantém muitas conexões HTTP abertas enviando requisições de forma lenta para exaurir recursos do servidor.",
        "Correta. Slowloris mantém muitas conexões HTTP abertas enviando requisições de forma lenta para exaurir recursos do servidor.",
        "Incorreta. “brobot” se refere a conceito, mecanismo ou etapa diferente do que o enunciado descreve. Slowloris mantém muitas conexões HTTP abertas enviando requisições de forma lenta para exaurir recursos do servidor.",
        "Incorreta. “PoD” se refere a conceito, mecanismo ou etapa diferente do que o enunciado descreve. Slowloris mantém muitas conexões HTTP abertas enviando requisições de forma lenta para exaurir recursos do servidor."
      ],
      "source": "TRANSPETRO/PSP/TERRA/NÍVEL SUPERIOR — 2023.2 · Prova 5",
      "sourceProof": "TRANSPETRO 2023.2 — Prova 5 — Segurança Cibernética e da Informação",
      "sourceStatus": "Prova oficial histórica + gabarito oficial fornecidos pelo usuário",
      "official": true,
      "historical": true,
      "board": "CESGRANRIO",
      "examYear": 2023,
      "questionNumber": 39,
      "examPart": "Conhecimentos Específicos",
      "feedbackVersion": "1.7.1"
    },
    {
      "id": "trc-h2023-40",
      "lessonId": "trc-l024",
      "topic": "Keylogger, screenlogger, rootkit, bot e loaders",
      "difficulty": "Histórica CESGRANRIO",
      "statement": "Os códigos maliciosos são construídos para atender a ataques com diferentes finalidades. Muitas vezes, o objetivo do ataque é furtar os dados sensíveis do usuário a partir do monitoramento dos dados fornecidos para uma aplicação, tais como o nome do login e a senha pessoal. Um código malicioso que tem essa característica é o",
      "options": [
        "trojan",
        "worm",
        "backdoor",
        "keylogger",
        "ransomware"
      ],
      "correct": 3,
      "explanation": "Keylogger registra teclas digitadas e pode capturar credenciais inseridas pelo usuário.",
      "wrong": [
        "Incorreta. Trojan se apresenta como software legítimo ou útil para executar ação maliciosa; não é definido especificamente por registrar teclas. Keylogger registra teclas digitadas e pode capturar credenciais inseridas pelo usuário.",
        "Incorreta. Worm se replica e se propaga automaticamente; não é necessariamente um capturador de teclas. Keylogger registra teclas digitadas e pode capturar credenciais inseridas pelo usuário.",
        "Incorreta. Backdoor fornece um meio oculto de acesso; não é sinônimo de keylogger. Keylogger registra teclas digitadas e pode capturar credenciais inseridas pelo usuário.",
        "Correta. Keylogger registra teclas digitadas e pode capturar credenciais inseridas pelo usuário.",
        "Incorreta. Ransomware busca negar acesso a dados/sistemas, geralmente por criptografia, para exigir resgate; não é definido como registrador de teclas. Keylogger registra teclas digitadas e pode capturar credenciais inseridas pelo usuário."
      ],
      "source": "TRANSPETRO/PSP/TERRA/NÍVEL SUPERIOR — 2023.2 · Prova 5",
      "sourceProof": "TRANSPETRO 2023.2 — Prova 5 — Segurança Cibernética e da Informação",
      "sourceStatus": "Prova oficial histórica + gabarito oficial fornecidos pelo usuário",
      "official": true,
      "historical": true,
      "board": "CESGRANRIO",
      "examYear": 2023,
      "questionNumber": 40,
      "examPart": "Conhecimentos Específicos",
      "feedbackVersion": "1.7.1"
    },
    {
      "id": "trc-h2023-41",
      "lessonId": "trc-l015",
      "topic": "Etapas do ataque: reconhecimento a acesso",
      "difficulty": "Histórica CESGRANRIO",
      "statement": "A varredura de portas é o processo de enviar mensagens para as portas de comunicação dos serviços de rede para identificar quais estão ativos. Há um método de varredura furtiva de porta TCP que usa um zumbi para determinar os serviços ativos no computador alvo, sem deixar rastros, pois o alvo conhecerá apenas o endereço IP desse zumbi. Esse método é conhecido como TCP",
      "options": [
        "SYN scan",
        "ACK scan",
        "NULL scan",
        "FIN scan",
        "IDLE scan"
      ],
      "correct": 4,
      "explanation": "Idle scan usa um host “zumbi” para inferir estado de portas do alvo e reduzir a exposição do endereço do scanner.",
      "wrong": [
        "Incorreta. SYN scan envia SYN e interpreta respostas sem concluir normalmente o handshake; não utiliza um host zumbi como o IDLE scan. Idle scan usa um host “zumbi” para inferir estado de portas do alvo e reduzir a exposição do endereço do scanner.",
        "Incorreta. ACK scan é usado sobretudo para inferir filtragem/firewall; não é a técnica furtiva com zumbi descrita. Idle scan usa um host “zumbi” para inferir estado de portas do alvo e reduzir a exposição do endereço do scanner.",
        "Incorreta. NULL scan usa segmentos TCP sem flags para inferir estado de portas; não utiliza zumbi. Idle scan usa um host “zumbi” para inferir estado de portas do alvo e reduzir a exposição do endereço do scanner.",
        "Incorreta. FIN scan usa segmentos com flag FIN para inferir estado; não utiliza zumbi. Idle scan usa um host “zumbi” para inferir estado de portas do alvo e reduzir a exposição do endereço do scanner.",
        "Correta. Idle scan usa um host “zumbi” para inferir estado de portas do alvo e reduzir a exposição do endereço do scanner."
      ],
      "source": "TRANSPETRO/PSP/TERRA/NÍVEL SUPERIOR — 2023.2 · Prova 5",
      "sourceProof": "TRANSPETRO 2023.2 — Prova 5 — Segurança Cibernética e da Informação",
      "sourceStatus": "Prova oficial histórica + gabarito oficial fornecidos pelo usuário",
      "official": true,
      "historical": true,
      "board": "CESGRANRIO",
      "examYear": 2023,
      "questionNumber": 41,
      "examPart": "Conhecimentos Específicos",
      "feedbackVersion": "1.7.1"
    },
    {
      "id": "trc-h2023-42",
      "lessonId": "trc-l026",
      "topic": "MITRE ATT&CK: matrizes e táticas",
      "difficulty": "Histórica CESGRANRIO",
      "statement": "A MITRE ATT&CK® tornou-se uma referência global sobre as táticas e técnicas adversárias. Dentre as técnicas listadas para a tática de persistência, estão as três a seguir:",
      "options": [
        "manipulação de conta, extensões do navegador e implantação de imagem interna",
        "manipulação de conta, extensões do navegador e autenticação forçada",
        "manipulação de conta, interceptação de autenticação multifator e autenticação forçada",
        "extensões do navegador, interceptação de autenticação multifator e autenticação forçada",
        "implantação de imagem interna, interceptação de autenticação multifator e autenticação forçada"
      ],
      "correct": 0,
      "explanation": "Segundo a versão do ATT&CK usada na prova, a combinação correta de técnicas de persistência corresponde à alternativa A.",
      "wrong": [
        "Correta. Segundo a versão do ATT&CK usada na prova, a combinação correta de técnicas de persistência corresponde à alternativa A.",
        "Incorreta. “manipulação de conta, extensões do navegador e autenticação forçada” se refere a conceito, mecanismo ou etapa diferente do que o enunciado descreve. Segundo a versão do ATT&CK usada na prova, a combinação correta de técnicas de persistência corresponde à alternativa A.",
        "Incorreta. “manipulação de conta, interceptação de autenticação multifator e autenticação forçada” se refere a conceito, mecanismo ou etapa diferente do que o enunciado descreve. Segundo a versão do ATT&CK usada na prova, a combinação correta de técnicas de persistência corresponde à alternativa A.",
        "Incorreta. “extensões do navegador, interceptação de autenticação multifator e autenticação forçada” se refere a conceito, mecanismo ou etapa diferente do que o enunciado descreve. Segundo a versão do ATT&CK usada na prova, a combinação correta de técnicas de persistência corresponde à alternativa A.",
        "Incorreta. “implantação de imagem interna, interceptação de autenticação multifator e autenticação forçada” se refere a conceito, mecanismo ou etapa diferente do que o enunciado descreve. Segundo a versão do ATT&CK usada na prova, a combinação correta de técnicas de persistência corresponde à alternativa A."
      ],
      "source": "TRANSPETRO/PSP/TERRA/NÍVEL SUPERIOR — 2023.2 · Prova 5",
      "sourceProof": "TRANSPETRO 2023.2 — Prova 5 — Segurança Cibernética e da Informação",
      "sourceStatus": "Prova oficial histórica + gabarito oficial fornecidos pelo usuário",
      "official": true,
      "historical": true,
      "board": "CESGRANRIO",
      "examYear": 2023,
      "questionNumber": 42,
      "examPart": "Conhecimentos Específicos",
      "feedbackVersion": "1.7.1"
    },
    {
      "id": "trc-h2023-43",
      "lessonId": "trc-l044",
      "topic": "TLS, SSL e IPsec",
      "difficulty": "Histórica CESGRANRIO",
      "statement": "O Internet Protocol Security (IPsec) é um conjunto de protocolos que fornece segurança às comunicações da internet na camada IP. O protocolo de negociação e de gerenciamento de chaves mais comumente usado para fornecer material de chaves negociado e atualizado dinamicamente para IPsec é o",
      "options": [
        "PPTP",
        "L2TP",
        "IKE",
        "ESP",
        "AH"
      ],
      "correct": 2,
      "explanation": "IKE negocia e gerencia associações de segurança e chaves usadas pelo IPsec.",
      "wrong": [
        "Incorreta. PPTP é um protocolo/túnel VPN legado; não é o mecanismo de negociação de chaves do IPsec. IKE negocia e gerencia associações de segurança e chaves usadas pelo IPsec.",
        "Incorreta. L2TP cria túneis de camada 2 e costuma ser combinado com IPsec; não negocia material de chaves do IPsec. IKE negocia e gerencia associações de segurança e chaves usadas pelo IPsec.",
        "Correta. IKE negocia e gerencia associações de segurança e chaves usadas pelo IPsec.",
        "Incorreta. ESP fornece proteção à carga IP, com confidencialidade e/ou integridade conforme configuração; não é o protocolo de negociação de chaves. IKE negocia e gerencia associações de segurança e chaves usadas pelo IPsec.",
        "Incorreta. AH fornece autenticação e integridade para partes do pacote IP; não negocia chaves. IKE negocia e gerencia associações de segurança e chaves usadas pelo IPsec."
      ],
      "source": "TRANSPETRO/PSP/TERRA/NÍVEL SUPERIOR — 2023.2 · Prova 5",
      "sourceProof": "TRANSPETRO 2023.2 — Prova 5 — Segurança Cibernética e da Informação",
      "sourceStatus": "Prova oficial histórica + gabarito oficial fornecidos pelo usuário",
      "official": true,
      "historical": true,
      "board": "CESGRANRIO",
      "examYear": 2023,
      "questionNumber": 43,
      "examPart": "Conhecimentos Específicos",
      "feedbackVersion": "1.7.1"
    },
    {
      "id": "trc-h2023-44",
      "lessonId": "trc-l036",
      "topic": "OWASP Top 10: categorias e raciocínio de prova",
      "difficulty": "Histórica CESGRANRIO",
      "statement": "No OWASP Top 10, relatório regularmente publicado pela Open Web Application Security Project (OWASP), descrevem-se os riscos de segurança mais críticos encontrados em aplicações web em um certo período de análise. Considere o ambiente de uma aplicação web no qual o servidor da aplicação é fornecido com os sistemas de amostra não removidos do servidor de produção, e os aplicativos de amostra têm falhas de segurança conhecidas, usadas pelos invasores para comprometer o servidor. Esse cenário evidencia um risco de segurança classificado no OWASP Top 10 2021, na seguinte categoria:",
      "options": [
        "falhas criptográficas",
        "design inseguro",
        "componentes vulneráveis e desatualizados",
        "configuração incorreta de segurança",
        "falhas de registro e monitoramento de segurança"
      ],
      "correct": 3,
      "explanation": "Manter aplicações de exemplo inseguras em produção é um caso clássico de Security Misconfiguration na edição 2021 do OWASP Top 10.",
      "wrong": [
        "Incorreta. “falhas criptográficas” se refere a conceito, mecanismo ou etapa diferente do que o enunciado descreve. Manter aplicações de exemplo inseguras em produção é um caso clássico de Security Misconfiguration na edição 2021 do OWASP Top 10.",
        "Incorreta. “design inseguro” se refere a conceito, mecanismo ou etapa diferente do que o enunciado descreve. Manter aplicações de exemplo inseguras em produção é um caso clássico de Security Misconfiguration na edição 2021 do OWASP Top 10.",
        "Incorreta. “componentes vulneráveis e desatualizados” se refere a conceito, mecanismo ou etapa diferente do que o enunciado descreve. Manter aplicações de exemplo inseguras em produção é um caso clássico de Security Misconfiguration na edição 2021 do OWASP Top 10.",
        "Correta. Manter aplicações de exemplo inseguras em produção é um caso clássico de Security Misconfiguration na edição 2021 do OWASP Top 10.",
        "Incorreta. “falhas de registro e monitoramento de segurança” se refere a conceito, mecanismo ou etapa diferente do que o enunciado descreve. Manter aplicações de exemplo inseguras em produção é um caso clássico de Security Misconfiguration na edição 2021 do OWASP Top 10."
      ],
      "source": "TRANSPETRO/PSP/TERRA/NÍVEL SUPERIOR — 2023.2 · Prova 5",
      "sourceProof": "TRANSPETRO 2023.2 — Prova 5 — Segurança Cibernética e da Informação",
      "sourceStatus": "Prova oficial histórica + gabarito oficial fornecidos pelo usuário",
      "official": true,
      "historical": true,
      "board": "CESGRANRIO",
      "examYear": 2023,
      "questionNumber": 44,
      "examPart": "Conhecimentos Específicos",
      "feedbackVersion": "1.7.1"
    },
    {
      "id": "trc-h2023-45",
      "lessonId": "trc-l019",
      "topic": "DHCP e protocolos de e-mail",
      "difficulty": "Histórica CESGRANRIO",
      "statement": "Um atacante quer atuar como man-in-the-middle (MITM) em uma rede local. Para conseguir executar esse ataque, esse atacante deseja fazer com que o tráfego destinado à rede externa seja enviado para a sua estação de controle. Considere que, na situação apresentada, o switch de acesso não faz nenhum tipo de monitoramento de tráfego de rede nem fornece isolamento entre as estações de trabalho presentes nessa rede local. Nesse caso, o atacante pode usar a técnica de",
      "options": [
        "Rogue ICMP",
        "Rogue DHCP",
        "Rogue SNMP",
        "SNMP Spoofing",
        "HTTP Spoofing"
      ],
      "correct": 1,
      "explanation": "Um Rogue DHCP pode fornecer gateway malicioso aos clientes e redirecionar o tráfego para o adversário.",
      "wrong": [
        "Incorreta. “Rogue ICMP” se refere a conceito, mecanismo ou etapa diferente do que o enunciado descreve. Um Rogue DHCP pode fornecer gateway malicioso aos clientes e redirecionar o tráfego para o adversário.",
        "Correta. Um Rogue DHCP pode fornecer gateway malicioso aos clientes e redirecionar o tráfego para o adversário.",
        "Incorreta. “Rogue SNMP” se refere a conceito, mecanismo ou etapa diferente do que o enunciado descreve. Um Rogue DHCP pode fornecer gateway malicioso aos clientes e redirecionar o tráfego para o adversário.",
        "Incorreta. “SNMP Spoofing” se refere a conceito, mecanismo ou etapa diferente do que o enunciado descreve. Um Rogue DHCP pode fornecer gateway malicioso aos clientes e redirecionar o tráfego para o adversário.",
        "Incorreta. “HTTP Spoofing” se refere a conceito, mecanismo ou etapa diferente do que o enunciado descreve. Um Rogue DHCP pode fornecer gateway malicioso aos clientes e redirecionar o tráfego para o adversário."
      ],
      "source": "TRANSPETRO/PSP/TERRA/NÍVEL SUPERIOR — 2023.2 · Prova 5",
      "sourceProof": "TRANSPETRO 2023.2 — Prova 5 — Segurança Cibernética e da Informação",
      "sourceStatus": "Prova oficial histórica + gabarito oficial fornecidos pelo usuário",
      "official": true,
      "historical": true,
      "board": "CESGRANRIO",
      "examYear": 2023,
      "questionNumber": 45,
      "examPart": "Conhecimentos Específicos",
      "feedbackVersion": "1.7.1"
    },
    {
      "id": "trc-h2023-46",
      "lessonId": "trc-l033",
      "topic": "IDS, IPS e VPN",
      "difficulty": "Histórica CESGRANRIO",
      "statement": "Os ataques cibernéticos realizados contra as redes de comunicação de dados exigem uma defesa em profundidade, que é um esquema de proteção no qual se utilizam camadas de segurança compostas por componentes de segurança independentes. Considere que uma rede, na qual é utilizada a defesa em profundidade, está diante de um ataque de inundação no nível de transporte. Nesse caso, o componente capaz de detectar o ataque e de alertar o centro de monitoramento é o",
      "options": [
        "firewall com estado",
        "firewall sem estado",
        "firewall proxy",
        "gateway VPN",
        "sistema de detecção de intrusão"
      ],
      "correct": 4,
      "explanation": "IDS é o componente destinado a detectar atividade suspeita e emitir alertas; IPS adiciona capacidade de prevenção em linha.",
      "wrong": [
        "Incorreta. “firewall com estado” se refere a conceito, mecanismo ou etapa diferente do que o enunciado descreve. IDS é o componente destinado a detectar atividade suspeita e emitir alertas; IPS adiciona capacidade de prevenção em linha.",
        "Incorreta. “firewall sem estado” se refere a conceito, mecanismo ou etapa diferente do que o enunciado descreve. IDS é o componente destinado a detectar atividade suspeita e emitir alertas; IPS adiciona capacidade de prevenção em linha.",
        "Incorreta. “firewall proxy” se refere a conceito, mecanismo ou etapa diferente do que o enunciado descreve. IDS é o componente destinado a detectar atividade suspeita e emitir alertas; IPS adiciona capacidade de prevenção em linha.",
        "Incorreta. “gateway VPN” se refere a conceito, mecanismo ou etapa diferente do que o enunciado descreve. IDS é o componente destinado a detectar atividade suspeita e emitir alertas; IPS adiciona capacidade de prevenção em linha.",
        "Correta. IDS é o componente destinado a detectar atividade suspeita e emitir alertas; IPS adiciona capacidade de prevenção em linha."
      ],
      "source": "TRANSPETRO/PSP/TERRA/NÍVEL SUPERIOR — 2023.2 · Prova 5",
      "sourceProof": "TRANSPETRO 2023.2 — Prova 5 — Segurança Cibernética e da Informação",
      "sourceStatus": "Prova oficial histórica + gabarito oficial fornecidos pelo usuário",
      "official": true,
      "historical": true,
      "board": "CESGRANRIO",
      "examYear": 2023,
      "questionNumber": 46,
      "examPart": "Conhecimentos Específicos",
      "feedbackVersion": "1.7.1"
    },
    {
      "id": "trc-h2023-47",
      "lessonId": "trc-l027",
      "topic": "ATT&CK: técnicas, procedimentos e mitigações",
      "difficulty": "Histórica CESGRANRIO",
      "statement": "Os ataques cibernéticos empregam várias táticas que consistem em etapas e em ações individuais para atingir um propósito específico. Uma dessas táticas utiliza técnicas para evitar a detecção do ataque durante todo o seu comprometimento, tais como desinstalar/desativar software de segurança ou ofuscar/criptografar dados e scripts. De acordo com a MITRE ATT&CK®, a tática descrita é a de",
      "options": [
        "reconhecimento",
        "escalação de privilégio",
        "evasão de defesa",
        "acesso inicial",
        "descoberta"
      ],
      "correct": 2,
      "explanation": "Desativar controles e ofuscar artefatos para evitar detecção são comportamentos de Defense Evasion no MITRE ATT&CK.",
      "wrong": [
        "Incorreta. “reconhecimento” se refere a conceito, mecanismo ou etapa diferente do que o enunciado descreve. Desativar controles e ofuscar artefatos para evitar detecção são comportamentos de Defense Evasion no MITRE ATT&CK.",
        "Incorreta. “escalação de privilégio” se refere a conceito, mecanismo ou etapa diferente do que o enunciado descreve. Desativar controles e ofuscar artefatos para evitar detecção são comportamentos de Defense Evasion no MITRE ATT&CK.",
        "Correta. Desativar controles e ofuscar artefatos para evitar detecção são comportamentos de Defense Evasion no MITRE ATT&CK.",
        "Incorreta. “acesso inicial” se refere a conceito, mecanismo ou etapa diferente do que o enunciado descreve. Desativar controles e ofuscar artefatos para evitar detecção são comportamentos de Defense Evasion no MITRE ATT&CK.",
        "Incorreta. “descoberta” se refere a conceito, mecanismo ou etapa diferente do que o enunciado descreve. Desativar controles e ofuscar artefatos para evitar detecção são comportamentos de Defense Evasion no MITRE ATT&CK."
      ],
      "source": "TRANSPETRO/PSP/TERRA/NÍVEL SUPERIOR — 2023.2 · Prova 5",
      "sourceProof": "TRANSPETRO 2023.2 — Prova 5 — Segurança Cibernética e da Informação",
      "sourceStatus": "Prova oficial histórica + gabarito oficial fornecidos pelo usuário",
      "official": true,
      "historical": true,
      "board": "CESGRANRIO",
      "examYear": 2023,
      "questionNumber": 47,
      "examPart": "Conhecimentos Específicos",
      "feedbackVersion": "1.7.1"
    },
    {
      "id": "trc-h2023-48",
      "lessonId": "trc-l021",
      "topic": "Wi-Fi, Evil Twin, jamming e MITM",
      "difficulty": "Histórica CESGRANRIO",
      "statement": "Os usuários tipicamente digitam o endereço do site desejado sem prefixar as URLs com http:// ou https://. Nesses casos, os navegadores tipicamente irão adotar o prefixo http:// e estabelecer uma comunicação insegura com os servidores web. Essa situação é uma oportunidade para o Man-In-The-Middle (MITM) monitorar a comunicação entre o navegador e o servidor web, mesmo que o servidor esteja configurado para redirecionar o navegador a mudar para uma comunicação segura com HTTPS. Quando o servidor web obriga uma conexão com HTTPS, o MITM pode executar o ataque de SSL Stripping, no qual ele intercepta as requisições em HTTP do navegador e",
      "options": [
        "redireciona o navegador web para um site falsificado do servidor web, usando HTTP, e monitora a comunicação HTTP do início ao fim.",
        "redireciona o navegador web para um site falsificado do servidor web, usando HTTPS, e monitora a comunicação HTTPS do início ao fim.",
        "redireciona o navegador web para o servidor web verdadeiro, usando HTTPS, e monitora a comunicação HTTPS do início ao fim.",
        "força a comunicação HTTP com o servidor web verdadeiro, e a resposta do servidor web, em HTTP, será, então, monitorada e entregue ao navegador web.",
        "faz a comunicação HTTPS com o servidor web verdadeiro, e a resposta do servidor web, em HTTPS, será, então, convertida pelo MITM para HTTP e entregue ao navegador web."
      ],
      "correct": 4,
      "explanation": "No SSL stripping, o atacante mantém HTTP com o cliente e estabelece HTTPS com o servidor real, convertendo as respostas para HTTP no lado da vítima.",
      "wrong": [
        "Incorreta. “redireciona o navegador web para um site falsificado do servidor web, usando HTTP, e monitora a comunicação HTTP do início ao fim.” se refere a conceito, mecanismo ou etapa diferente do que o enunciado descreve. No SSL stripping, o atacante mantém HTTP com o cliente e estabelece HTTPS com o servidor real, convertendo as respostas para HTTP no lado da vítima.",
        "Incorreta. “redireciona o navegador web para um site falsificado do servidor web, usando HTTPS, e monitora a comunicação HTTPS do início ao fim.” se refere a conceito, mecanismo ou etapa diferente do que o enunciado descreve. No SSL stripping, o atacante mantém HTTP com o cliente e estabelece HTTPS com o servidor real, convertendo as respostas para HTTP no lado da vítima.",
        "Incorreta. “redireciona o navegador web para o servidor web verdadeiro, usando HTTPS, e monitora a comunicação HTTPS do início ao fim.” se refere a conceito, mecanismo ou etapa diferente do que o enunciado descreve. No SSL stripping, o atacante mantém HTTP com o cliente e estabelece HTTPS com o servidor real, convertendo as respostas para HTTP no lado da vítima.",
        "Incorreta. “força a comunicação HTTP com o servidor web verdadeiro, e a resposta do servidor web, em HTTP, será, então, monitorada e entregue ao navegador web.” se refere a conceito, mecanismo ou etapa diferente do que o enunciado descreve. No SSL stripping, o atacante mantém HTTP com o cliente e estabelece HTTPS com o servidor real, convertendo as respostas para HTTP no lado da vítima.",
        "Correta. No SSL stripping, o atacante mantém HTTP com o cliente e estabelece HTTPS com o servidor real, convertendo as respostas para HTTP no lado da vítima."
      ],
      "source": "TRANSPETRO/PSP/TERRA/NÍVEL SUPERIOR — 2023.2 · Prova 5",
      "sourceProof": "TRANSPETRO 2023.2 — Prova 5 — Segurança Cibernética e da Informação",
      "sourceStatus": "Prova oficial histórica + gabarito oficial fornecidos pelo usuário",
      "official": true,
      "historical": true,
      "board": "CESGRANRIO",
      "examYear": 2023,
      "questionNumber": 48,
      "examPart": "Conhecimentos Específicos",
      "feedbackVersion": "1.7.1"
    },
    {
      "id": "trc-h2023-49",
      "lessonId": "trc-l012",
      "topic": "Vulnerabilidade, ameaça e ataque",
      "difficulty": "Histórica CESGRANRIO",
      "statement": "Um ataque é um ato intencional executado por um agente malicioso para evadir os serviços de segurança de um sistema. Esse agente malicioso pode comandar um terceiro agente na execução do ataque às vítimas, e o fluxo de dados malicioso será direcionado às vítimas por esse terceiro agente. Nesse caso, o método de execução do ataque é classificado como",
      "options": [
        "direto",
        "indireto",
        "off-line",
        "reverso",
        "truncado"
      ],
      "correct": 1,
      "explanation": "Quando um terceiro agente é comandado para encaminhar o ataque à vítima, o método é indireto.",
      "wrong": [
        "Incorreta. “direto” se refere a conceito, mecanismo ou etapa diferente do que o enunciado descreve. Quando um terceiro agente é comandado para encaminhar o ataque à vítima, o método é indireto.",
        "Correta. Quando um terceiro agente é comandado para encaminhar o ataque à vítima, o método é indireto.",
        "Incorreta. “off-line” se refere a conceito, mecanismo ou etapa diferente do que o enunciado descreve. Quando um terceiro agente é comandado para encaminhar o ataque à vítima, o método é indireto.",
        "Incorreta. “reverso” se refere a conceito, mecanismo ou etapa diferente do que o enunciado descreve. Quando um terceiro agente é comandado para encaminhar o ataque à vítima, o método é indireto.",
        "Incorreta. “truncado” se refere a conceito, mecanismo ou etapa diferente do que o enunciado descreve. Quando um terceiro agente é comandado para encaminhar o ataque à vítima, o método é indireto."
      ],
      "source": "TRANSPETRO/PSP/TERRA/NÍVEL SUPERIOR — 2023.2 · Prova 5",
      "sourceProof": "TRANSPETRO 2023.2 — Prova 5 — Segurança Cibernética e da Informação",
      "sourceStatus": "Prova oficial histórica + gabarito oficial fornecidos pelo usuário",
      "official": true,
      "historical": true,
      "board": "CESGRANRIO",
      "examYear": 2023,
      "questionNumber": 49,
      "examPart": "Conhecimentos Específicos",
      "feedbackVersion": "1.7.1"
    },
    {
      "id": "trc-h2023-50",
      "lessonId": "trc-l018",
      "topic": "Ataques em UDP e TCP",
      "difficulty": "Histórica CESGRANRIO",
      "statement": "Um atacante ordenou aos seus bots a continuamente estabelecerem inúmeras conexões TCP diretamente com um servidor web alvo, usando um endereço de origem falsificado e inexistente. Todas as solicitações realizadas pelos bots foram recebidas e respondidas por esse servidor alvo durante algum tempo e, agora, não há mais recursos no servidor para responder a novas solicitações de conexão. Esse servidor alvo está diante de um ataque de TCP",
      "options": [
        "SYN Flood",
        "SYN/ACK Flood",
        "FIND Drain",
        "SEND Drain",
        "REVC Drain"
      ],
      "correct": 0,
      "explanation": "SYN Flood explora o estabelecimento de conexões TCP, acumulando conexões incompletas e consumindo recursos do alvo.",
      "wrong": [
        "Correta. SYN Flood explora o estabelecimento de conexões TCP, acumulando conexões incompletas e consumindo recursos do alvo.",
        "Incorreta. “SYN/ACK Flood” se refere a conceito, mecanismo ou etapa diferente do que o enunciado descreve. SYN Flood explora o estabelecimento de conexões TCP, acumulando conexões incompletas e consumindo recursos do alvo.",
        "Incorreta. “FIND Drain” se refere a conceito, mecanismo ou etapa diferente do que o enunciado descreve. SYN Flood explora o estabelecimento de conexões TCP, acumulando conexões incompletas e consumindo recursos do alvo.",
        "Incorreta. “SEND Drain” se refere a conceito, mecanismo ou etapa diferente do que o enunciado descreve. SYN Flood explora o estabelecimento de conexões TCP, acumulando conexões incompletas e consumindo recursos do alvo.",
        "Incorreta. “REVC Drain” se refere a conceito, mecanismo ou etapa diferente do que o enunciado descreve. SYN Flood explora o estabelecimento de conexões TCP, acumulando conexões incompletas e consumindo recursos do alvo."
      ],
      "source": "TRANSPETRO/PSP/TERRA/NÍVEL SUPERIOR — 2023.2 · Prova 5",
      "sourceProof": "TRANSPETRO 2023.2 — Prova 5 — Segurança Cibernética e da Informação",
      "sourceStatus": "Prova oficial histórica + gabarito oficial fornecidos pelo usuário",
      "official": true,
      "historical": true,
      "board": "CESGRANRIO",
      "examYear": 2023,
      "questionNumber": 50,
      "examPart": "Conhecimentos Específicos",
      "feedbackVersion": "1.7.1"
    },
    {
      "id": "trc-h2023-51",
      "lessonId": "trc-l052",
      "topic": "ISO/IEC 27001: SGSI e requisitos",
      "difficulty": "Histórica CESGRANRIO",
      "statement": "As organizações estabelecem e implementam um Sistema de Gestão de Segurança da Informação (SGSI) com base em suas necessidades e em seus objetivos, em seus requisitos de segurança, em seus processos organizacionais, em seu tamanho e em sua estrutura. A NBR ISO 27001:2013 define vários itens que fazem parte da avaliação de desempenho do SGSI, dentre os quais",
      "options": [
        "a auditoria interna",
        "a avaliação de riscos de segurança da informação",
        "as ações para contemplar riscos e oportunidades",
        "o planejamento operacional e o controle",
        "o tratamento de riscos de segurança da informação"
      ],
      "correct": 0,
      "explanation": "Auditoria interna integra a avaliação de desempenho do SGSI.",
      "wrong": [
        "Correta. Auditoria interna integra a avaliação de desempenho do SGSI.",
        "Incorreta. “a avaliação de riscos de segurança da informação” se refere a conceito, mecanismo ou etapa diferente do que o enunciado descreve. Auditoria interna integra a avaliação de desempenho do SGSI.",
        "Incorreta. “as ações para contemplar riscos e oportunidades” se refere a conceito, mecanismo ou etapa diferente do que o enunciado descreve. Auditoria interna integra a avaliação de desempenho do SGSI.",
        "Incorreta. “o planejamento operacional e o controle” se refere a conceito, mecanismo ou etapa diferente do que o enunciado descreve. Auditoria interna integra a avaliação de desempenho do SGSI.",
        "Incorreta. “o tratamento de riscos de segurança da informação” se refere a conceito, mecanismo ou etapa diferente do que o enunciado descreve. Auditoria interna integra a avaliação de desempenho do SGSI."
      ],
      "source": "TRANSPETRO/PSP/TERRA/NÍVEL SUPERIOR — 2023.2 · Prova 5",
      "sourceProof": "TRANSPETRO 2023.2 — Prova 5 — Segurança Cibernética e da Informação",
      "sourceStatus": "Prova oficial histórica + gabarito oficial fornecidos pelo usuário",
      "official": true,
      "historical": true,
      "board": "CESGRANRIO",
      "examYear": 2023,
      "questionNumber": 51,
      "examPart": "Conhecimentos Específicos",
      "feedbackVersion": "1.7.1"
    },
    {
      "id": "trc-h2023-52",
      "lessonId": "trc-l053",
      "topic": "ISO/IEC 27002: controles de segurança",
      "difficulty": "Histórica CESGRANRIO",
      "statement": "Como parte do gerenciamento de usuários, na NBR ISO 27002:2013, é recomendado o estabelecimento de controles para assegurar acesso de usuário autorizado e para prevenir acesso não autorizado a sistemas e serviços. Dentre esses controles, está o gerenciamento de",
      "options": [
        "mudança e capacidade",
        "direitos de acesso privilegiado",
        "cópias de segurança das informações",
        "mudanças em pacotes de software",
        "mudanças para serviços com fornecedores"
      ],
      "correct": 1,
      "explanation": "Gerenciamento de direitos de acesso privilegiado é controle diretamente associado à gestão de usuários e acessos.",
      "wrong": [
        "Incorreta. “mudança e capacidade” se refere a conceito, mecanismo ou etapa diferente do que o enunciado descreve. Gerenciamento de direitos de acesso privilegiado é controle diretamente associado à gestão de usuários e acessos.",
        "Correta. Gerenciamento de direitos de acesso privilegiado é controle diretamente associado à gestão de usuários e acessos.",
        "Incorreta. “cópias de segurança das informações” se refere a conceito, mecanismo ou etapa diferente do que o enunciado descreve. Gerenciamento de direitos de acesso privilegiado é controle diretamente associado à gestão de usuários e acessos.",
        "Incorreta. “mudanças em pacotes de software” se refere a conceito, mecanismo ou etapa diferente do que o enunciado descreve. Gerenciamento de direitos de acesso privilegiado é controle diretamente associado à gestão de usuários e acessos.",
        "Incorreta. “mudanças para serviços com fornecedores” se refere a conceito, mecanismo ou etapa diferente do que o enunciado descreve. Gerenciamento de direitos de acesso privilegiado é controle diretamente associado à gestão de usuários e acessos."
      ],
      "source": "TRANSPETRO/PSP/TERRA/NÍVEL SUPERIOR — 2023.2 · Prova 5",
      "sourceProof": "TRANSPETRO 2023.2 — Prova 5 — Segurança Cibernética e da Informação",
      "sourceStatus": "Prova oficial histórica + gabarito oficial fornecidos pelo usuário",
      "official": true,
      "historical": true,
      "board": "CESGRANRIO",
      "examYear": 2023,
      "questionNumber": 52,
      "examPart": "Conhecimentos Específicos",
      "feedbackVersion": "1.7.1"
    },
    {
      "id": "trc-h2023-53",
      "lessonId": "trc-l053",
      "topic": "ISO/IEC 27002: controles de segurança",
      "difficulty": "Histórica CESGRANRIO",
      "statement": "Na NBR ISO 27002:2013, são listados controles e objetivos de controles que devem ser aplicados de forma alinhada com o tratamento de riscos de segurança da informação. Um desses controles visa assegurar que a segurança da informação está implementada e é operada de acordo com as políticas e com os procedimentos da organização. O objetivo descrito é o do controle de",
      "options": [
        "análise crítica da segurança da informação",
        "gerenciamento da segurança em redes",
        "gestão de incidentes de segurança da informação e melhorias",
        "segurança da informação na cadeia de suprimento",
        "segurança em processos de desenvolvimento e de suporte"
      ],
      "correct": 0,
      "explanation": "A análise crítica independente da segurança verifica se a implementação e operação estão de acordo com políticas e procedimentos.",
      "wrong": [
        "Correta. A análise crítica independente da segurança verifica se a implementação e operação estão de acordo com políticas e procedimentos.",
        "Incorreta. “gerenciamento da segurança em redes” se refere a conceito, mecanismo ou etapa diferente do que o enunciado descreve. A análise crítica independente da segurança verifica se a implementação e operação estão de acordo com políticas e procedimentos.",
        "Incorreta. “gestão de incidentes de segurança da informação e melhorias” se refere a conceito, mecanismo ou etapa diferente do que o enunciado descreve. A análise crítica independente da segurança verifica se a implementação e operação estão de acordo com políticas e procedimentos.",
        "Incorreta. “segurança da informação na cadeia de suprimento” se refere a conceito, mecanismo ou etapa diferente do que o enunciado descreve. A análise crítica independente da segurança verifica se a implementação e operação estão de acordo com políticas e procedimentos.",
        "Incorreta. “segurança em processos de desenvolvimento e de suporte” se refere a conceito, mecanismo ou etapa diferente do que o enunciado descreve. A análise crítica independente da segurança verifica se a implementação e operação estão de acordo com políticas e procedimentos."
      ],
      "source": "TRANSPETRO/PSP/TERRA/NÍVEL SUPERIOR — 2023.2 · Prova 5",
      "sourceProof": "TRANSPETRO 2023.2 — Prova 5 — Segurança Cibernética e da Informação",
      "sourceStatus": "Prova oficial histórica + gabarito oficial fornecidos pelo usuário",
      "official": true,
      "historical": true,
      "board": "CESGRANRIO",
      "examYear": 2023,
      "questionNumber": 53,
      "examPart": "Conhecimentos Específicos",
      "feedbackVersion": "1.7.1"
    },
    {
      "id": "trc-h2023-54",
      "lessonId": "trc-l054",
      "topic": "ISO/IEC 27005: gestão de riscos",
      "difficulty": "Histórica CESGRANRIO",
      "statement": "Na NBR ISO 27005:2019, é estabelecido que a análise de riscos pode ser empreendida com diferentes graus de detalhamento, dependendo da criticidade dos ativos, da extensão das vulnerabilidades conhecidas e dos incidentes anteriores envolvendo a organização. Há uma metodologia de análise de riscos que utiliza uma escala com atributos que descrevem a magnitude das consequências potenciais (por exemplo, pequena, média e grande) e a probabilidade de essas consequências ocorrerem (por exemplo, alta, média e baixa). Essa metodologia de análise de riscos é classificada como",
      "options": [
        "combinada",
        "geométrica",
        "ponderada",
        "qualitativa",
        "quantitativa"
      ],
      "correct": 3,
      "explanation": "Escalas descritivas como baixa/média/alta para probabilidade e impacto caracterizam análise qualitativa.",
      "wrong": [
        "Incorreta. “combinada” se refere a conceito, mecanismo ou etapa diferente do que o enunciado descreve. Escalas descritivas como baixa/média/alta para probabilidade e impacto caracterizam análise qualitativa.",
        "Incorreta. “geométrica” se refere a conceito, mecanismo ou etapa diferente do que o enunciado descreve. Escalas descritivas como baixa/média/alta para probabilidade e impacto caracterizam análise qualitativa.",
        "Incorreta. “ponderada” se refere a conceito, mecanismo ou etapa diferente do que o enunciado descreve. Escalas descritivas como baixa/média/alta para probabilidade e impacto caracterizam análise qualitativa.",
        "Correta. Escalas descritivas como baixa/média/alta para probabilidade e impacto caracterizam análise qualitativa.",
        "Incorreta. “quantitativa” se refere a conceito, mecanismo ou etapa diferente do que o enunciado descreve. Escalas descritivas como baixa/média/alta para probabilidade e impacto caracterizam análise qualitativa."
      ],
      "source": "TRANSPETRO/PSP/TERRA/NÍVEL SUPERIOR — 2023.2 · Prova 5",
      "sourceProof": "TRANSPETRO 2023.2 — Prova 5 — Segurança Cibernética e da Informação",
      "sourceStatus": "Prova oficial histórica + gabarito oficial fornecidos pelo usuário",
      "official": true,
      "historical": true,
      "board": "CESGRANRIO",
      "examYear": 2023,
      "questionNumber": 54,
      "examPart": "Conhecimentos Específicos",
      "feedbackVersion": "1.7.1"
    },
    {
      "id": "trc-h2023-55",
      "lessonId": "trc-l064",
      "topic": "Marco Civil, LGPD e Resolução Anatel 740",
      "difficulty": "Histórica CESGRANRIO",
      "statement": "A Resolução no 740/2020, da Anatel, aprovou o Regulamento de Segurança Cibernética Aplicada ao Setor de Telecomunicações, que tem por objetivo estabelecer condutas e procedimentos para a promoção da segurança nas redes e nos serviços de telecomunicações. Nessa resolução, é apresentada a seguinte definição: espaço virtual composto por um conjunto de canais de comunicação da internet e outras redes de comunicação que garantem a interconexão de dispositivos de TIC e que engloba todas as formas de atividades digitais em rede, incluindo o armazenamento, processamento e compartilhamento de conteúdo além de todas as ações, humanas ou automatizadas, conduzidas através desse ambiente. Na resolução citada, essa é a definição de espaço",
      "options": [
        "inter-rede",
        "intrarrede",
        "extrarrede",
        "cibernético",
        "metaverso"
      ],
      "correct": 3,
      "explanation": "A definição apresentada pela Resolução Anatel 740 corresponde a espaço cibernético.",
      "wrong": [
        "Incorreta. “inter-rede” se refere a conceito, mecanismo ou etapa diferente do que o enunciado descreve. A definição apresentada pela Resolução Anatel 740 corresponde a espaço cibernético.",
        "Incorreta. “intrarrede” se refere a conceito, mecanismo ou etapa diferente do que o enunciado descreve. A definição apresentada pela Resolução Anatel 740 corresponde a espaço cibernético.",
        "Incorreta. “extrarrede” se refere a conceito, mecanismo ou etapa diferente do que o enunciado descreve. A definição apresentada pela Resolução Anatel 740 corresponde a espaço cibernético.",
        "Correta. A definição apresentada pela Resolução Anatel 740 corresponde a espaço cibernético.",
        "Incorreta. “metaverso” se refere a conceito, mecanismo ou etapa diferente do que o enunciado descreve. A definição apresentada pela Resolução Anatel 740 corresponde a espaço cibernético."
      ],
      "source": "TRANSPETRO/PSP/TERRA/NÍVEL SUPERIOR — 2023.2 · Prova 5",
      "sourceProof": "TRANSPETRO 2023.2 — Prova 5 — Segurança Cibernética e da Informação",
      "sourceStatus": "Prova oficial histórica + gabarito oficial fornecidos pelo usuário",
      "official": true,
      "historical": true,
      "board": "CESGRANRIO",
      "examYear": 2023,
      "questionNumber": 55,
      "examPart": "Conhecimentos Específicos",
      "feedbackVersion": "1.7.1"
    },
    {
      "id": "trc-h2023-56",
      "lessonId": "trc-l053",
      "topic": "ISO/IEC 27002: controles de segurança",
      "difficulty": "Histórica CESGRANRIO",
      "statement": "Na NBR ISO 27002:2013, é recomendada a aplicação de controles para lidar com os recursos humanos que, em geral, são o elo mais fraco da segurança da informação. Com relação à segurança em recursos humanos, essa norma estabelece controles para serem aplicados",
      "options": [
        "antes da contratação, apenas",
        "durante a contratação, apenas",
        "no encerramento e na mudança da contratação, apenas",
        "durante a contratação e no encerramento e na mudança da contratação, apenas",
        "antes da contratação, durante a contratação e no encerramento e na mudança da contratação"
      ],
      "correct": 4,
      "explanation": "Controles de segurança em recursos humanos abrangem fases antes, durante e no encerramento ou mudança da contratação.",
      "wrong": [
        "Incorreta. “antes da contratação, apenas” se refere a conceito, mecanismo ou etapa diferente do que o enunciado descreve. Controles de segurança em recursos humanos abrangem fases antes, durante e no encerramento ou mudança da contratação.",
        "Incorreta. “durante a contratação, apenas” se refere a conceito, mecanismo ou etapa diferente do que o enunciado descreve. Controles de segurança em recursos humanos abrangem fases antes, durante e no encerramento ou mudança da contratação.",
        "Incorreta. “no encerramento e na mudança da contratação, apenas” se refere a conceito, mecanismo ou etapa diferente do que o enunciado descreve. Controles de segurança em recursos humanos abrangem fases antes, durante e no encerramento ou mudança da contratação.",
        "Incorreta. “durante a contratação e no encerramento e na mudança da contratação, apenas” se refere a conceito, mecanismo ou etapa diferente do que o enunciado descreve. Controles de segurança em recursos humanos abrangem fases antes, durante e no encerramento ou mudança da contratação.",
        "Correta. Controles de segurança em recursos humanos abrangem fases antes, durante e no encerramento ou mudança da contratação."
      ],
      "source": "TRANSPETRO/PSP/TERRA/NÍVEL SUPERIOR — 2023.2 · Prova 5",
      "sourceProof": "TRANSPETRO 2023.2 — Prova 5 — Segurança Cibernética e da Informação",
      "sourceStatus": "Prova oficial histórica + gabarito oficial fornecidos pelo usuário",
      "official": true,
      "historical": true,
      "board": "CESGRANRIO",
      "examYear": 2023,
      "questionNumber": 56,
      "examPart": "Conhecimentos Específicos",
      "feedbackVersion": "1.7.1"
    },
    {
      "id": "trc-h2023-57",
      "lessonId": "trc-l059",
      "topic": "ISO/IEC 29100: estrutura e princípios de privacidade",
      "difficulty": "Histórica CESGRANRIO",
      "statement": "Na NBR ISO 29100:2020, é fornecida uma estrutura de alto nível para a proteção de dados pessoais no contexto dos sistemas de tecnologia da informação e de comunicações (TIC). Para assegurar a privacidade de dados pessoais, há um processo pelo qual esses dados são irreversivelmente alterados, de forma que um titular de dados pessoais não mais possa ser identificado, direta ou indiretamente, seja por um controlador de dados pessoais ou em colaboração com qualquer outra parte. Esse processo é definido nessa norma como",
      "options": [
        "cifração",
        "deformação",
        "deterioração",
        "higienização",
        "anonimização"
      ],
      "correct": 4,
      "explanation": "Anonimização é a alteração irreversível de modo que o titular não possa mais ser identificado direta ou indiretamente no contexto definido.",
      "wrong": [
        "Incorreta. “cifração” se refere a conceito, mecanismo ou etapa diferente do que o enunciado descreve. Anonimização é a alteração irreversível de modo que o titular não possa mais ser identificado direta ou indiretamente no contexto definido.",
        "Incorreta. “deformação” se refere a conceito, mecanismo ou etapa diferente do que o enunciado descreve. Anonimização é a alteração irreversível de modo que o titular não possa mais ser identificado direta ou indiretamente no contexto definido.",
        "Incorreta. “deterioração” se refere a conceito, mecanismo ou etapa diferente do que o enunciado descreve. Anonimização é a alteração irreversível de modo que o titular não possa mais ser identificado direta ou indiretamente no contexto definido.",
        "Incorreta. “higienização” se refere a conceito, mecanismo ou etapa diferente do que o enunciado descreve. Anonimização é a alteração irreversível de modo que o titular não possa mais ser identificado direta ou indiretamente no contexto definido.",
        "Correta. Anonimização é a alteração irreversível de modo que o titular não possa mais ser identificado direta ou indiretamente no contexto definido."
      ],
      "source": "TRANSPETRO/PSP/TERRA/NÍVEL SUPERIOR — 2023.2 · Prova 5",
      "sourceProof": "TRANSPETRO 2023.2 — Prova 5 — Segurança Cibernética e da Informação",
      "sourceStatus": "Prova oficial histórica + gabarito oficial fornecidos pelo usuário",
      "official": true,
      "historical": true,
      "board": "CESGRANRIO",
      "examYear": 2023,
      "questionNumber": 57,
      "examPart": "Conhecimentos Específicos",
      "feedbackVersion": "1.7.1"
    },
    {
      "id": "trc-h2023-58",
      "lessonId": "trc-l060",
      "topic": "ISO/IEC 29134: Privacy Impact Assessment",
      "difficulty": "Histórica CESGRANRIO",
      "statement": "Na NBR ISO 29134:2020, é recomendada a elaboração de um instrumento para avaliar os potenciais impactos de um processo, de um sistema de informação, de um programa, de um módulo de software, de um dispositivo ou de outra iniciativa que trate dados pessoais na privacidade. Além disso, é recomendada, também, a consulta às partes interessadas, para tomar ações necessárias para tratar os riscos à privacidade. A partir desse instrumento, é possível elaborar um relatório incluindo uma documentação sobre medidas tomadas para o tratamento de riscos. De acordo com essa norma, esse relatório é o de",
      "options": [
        "DP",
        "PIA",
        "P&D",
        "R&D",
        "SGSI"
      ],
      "correct": 1,
      "explanation": "PIA é a avaliação de impacto de privacidade recomendada pela ISO/IEC 29134.",
      "wrong": [
        "Incorreta. “DP” se refere a conceito, mecanismo ou etapa diferente do que o enunciado descreve. PIA é a avaliação de impacto de privacidade recomendada pela ISO/IEC 29134.",
        "Correta. PIA é a avaliação de impacto de privacidade recomendada pela ISO/IEC 29134.",
        "Incorreta. “P&D” se refere a conceito, mecanismo ou etapa diferente do que o enunciado descreve. PIA é a avaliação de impacto de privacidade recomendada pela ISO/IEC 29134.",
        "Incorreta. “R&D” se refere a conceito, mecanismo ou etapa diferente do que o enunciado descreve. PIA é a avaliação de impacto de privacidade recomendada pela ISO/IEC 29134.",
        "Incorreta. “SGSI” se refere a conceito, mecanismo ou etapa diferente do que o enunciado descreve. PIA é a avaliação de impacto de privacidade recomendada pela ISO/IEC 29134."
      ],
      "source": "TRANSPETRO/PSP/TERRA/NÍVEL SUPERIOR — 2023.2 · Prova 5",
      "sourceProof": "TRANSPETRO 2023.2 — Prova 5 — Segurança Cibernética e da Informação",
      "sourceStatus": "Prova oficial histórica + gabarito oficial fornecidos pelo usuário",
      "official": true,
      "historical": true,
      "board": "CESGRANRIO",
      "examYear": 2023,
      "questionNumber": 58,
      "examPart": "Conhecimentos Específicos",
      "feedbackVersion": "1.7.1"
    },
    {
      "id": "trc-h2023-59",
      "lessonId": "trc-l059",
      "topic": "ISO/IEC 29100: estrutura e princípios de privacidade",
      "difficulty": "Histórica CESGRANRIO",
      "statement": "Na NBR ISO 29100:2020, são adotados princípios de privacidade derivados de princípios existentes, desenvolvidos por vários países e organizações internacionais. Dentre esses princípios, há um que implica conceber e implementar procedimentos de tratamento de dados e sistemas de tecnologia da informação e de comunicações (TIC) de forma a assegurar a adoção de um princípio de necessidade de conhecer (need to know). Esse princípio de privacidade é o de",
      "options": [
        "limitação de coleta",
        "precisão e qualidade",
        "minimização de dados",
        "especificação e legitimidade de objetivo",
        "consentimento e escolha"
      ],
      "correct": 2,
      "explanation": "Need-to-know e redução do tratamento ao necessário correspondem ao princípio de minimização de dados.",
      "wrong": [
        "Incorreta. “limitação de coleta” se refere a conceito, mecanismo ou etapa diferente do que o enunciado descreve. Need-to-know e redução do tratamento ao necessário correspondem ao princípio de minimização de dados.",
        "Incorreta. “precisão e qualidade” se refere a conceito, mecanismo ou etapa diferente do que o enunciado descreve. Need-to-know e redução do tratamento ao necessário correspondem ao princípio de minimização de dados.",
        "Correta. Need-to-know e redução do tratamento ao necessário correspondem ao princípio de minimização de dados.",
        "Incorreta. “especificação e legitimidade de objetivo” se refere a conceito, mecanismo ou etapa diferente do que o enunciado descreve. Need-to-know e redução do tratamento ao necessário correspondem ao princípio de minimização de dados.",
        "Incorreta. “consentimento e escolha” se refere a conceito, mecanismo ou etapa diferente do que o enunciado descreve. Need-to-know e redução do tratamento ao necessário correspondem ao princípio de minimização de dados."
      ],
      "source": "TRANSPETRO/PSP/TERRA/NÍVEL SUPERIOR — 2023.2 · Prova 5",
      "sourceProof": "TRANSPETRO 2023.2 — Prova 5 — Segurança Cibernética e da Informação",
      "sourceStatus": "Prova oficial histórica + gabarito oficial fornecidos pelo usuário",
      "official": true,
      "historical": true,
      "board": "CESGRANRIO",
      "examYear": 2023,
      "questionNumber": 59,
      "examPart": "Conhecimentos Específicos",
      "feedbackVersion": "1.7.1"
    },
    {
      "id": "trc-h2023-60",
      "lessonId": "trc-l044",
      "topic": "TLS, SSL e IPsec",
      "difficulty": "Histórica CESGRANRIO",
      "statement": "O Secure Socket Layer Version 3 (SSLv3) já foi amplamente utilizado como protocolo de comunicação segura, principalmente para assegurar a proteção das comunicações entre clientes e servidores Web. Esse protocolo, disponível em várias bibliotecas criptográficas mais antigas, obteve um registro no Common Vulnerabilities and Exposures (CVE) por causa de uma vulnerabilidade na sua criptografia CBC, na qual o preenchimento de cifra de bloco não é determinístico e não é coberto pelo Message Authentication Code (MAC). Essa vulnerabilidade facilita que invasores intermediários obtenham dados supostamente protegidos por meio de um ataque padding-oracle. O ataque padding-oracle também é conhecido como",
      "options": [
        "Logjam",
        "Heartbleed",
        "FMS",
        "POODLE",
        "FREAK"
      ],
      "correct": 3,
      "explanation": "POODLE é o ataque padding-oracle associado ao SSLv3 e ao modo CBC descrito na questão.",
      "wrong": [
        "Incorreta. “Logjam” se refere a conceito, mecanismo ou etapa diferente do que o enunciado descreve. POODLE é o ataque padding-oracle associado ao SSLv3 e ao modo CBC descrito na questão.",
        "Incorreta. “Heartbleed” se refere a conceito, mecanismo ou etapa diferente do que o enunciado descreve. POODLE é o ataque padding-oracle associado ao SSLv3 e ao modo CBC descrito na questão.",
        "Incorreta. “FMS” se refere a conceito, mecanismo ou etapa diferente do que o enunciado descreve. POODLE é o ataque padding-oracle associado ao SSLv3 e ao modo CBC descrito na questão.",
        "Correta. POODLE é o ataque padding-oracle associado ao SSLv3 e ao modo CBC descrito na questão.",
        "Incorreta. “FREAK” se refere a conceito, mecanismo ou etapa diferente do que o enunciado descreve. POODLE é o ataque padding-oracle associado ao SSLv3 e ao modo CBC descrito na questão."
      ],
      "source": "TRANSPETRO/PSP/TERRA/NÍVEL SUPERIOR — 2023.2 · Prova 5",
      "sourceProof": "TRANSPETRO 2023.2 — Prova 5 — Segurança Cibernética e da Informação",
      "sourceStatus": "Prova oficial histórica + gabarito oficial fornecidos pelo usuário",
      "official": true,
      "historical": true,
      "board": "CESGRANRIO",
      "examYear": 2023,
      "questionNumber": 60,
      "examPart": "Conhecimentos Específicos",
      "feedbackVersion": "1.7.1"
    },
    {
      "id": "trc-h2023-61",
      "lessonId": "trc-l049",
      "topic": "NIST SP 800-82 e gestão de risco em OT",
      "difficulty": "Histórica CESGRANRIO",
      "statement": "A segurança dos sistemas de controle e automação industrial vem ganhando a atenção da indústria, e várias iniciativas de padronização de um modelo de segurança foram propostas. O NIST SP 800-82 mais recente descreve o processo de aplicação do NIST Risk Management Framework (RMF) para sistemas de Operational Technology (OT). Em uma das etapas desse processo de aplicação, determinam-se os potenciais impactos adversos da perda de confidencialidade, de integridade e de disponibilidade das informações e do sistema. Essa etapa é a de",
      "options": [
        "avaliar",
        "autorizar",
        "selecionar",
        "categorizar",
        "implementar"
      ],
      "correct": 3,
      "explanation": "No RMF, determinar impactos potenciais da perda de confidencialidade, integridade e disponibilidade integra a etapa de categorizar.",
      "wrong": [
        "Incorreta. “avaliar” se refere a conceito, mecanismo ou etapa diferente do que o enunciado descreve. No RMF, determinar impactos potenciais da perda de confidencialidade, integridade e disponibilidade integra a etapa de categorizar.",
        "Incorreta. “autorizar” se refere a conceito, mecanismo ou etapa diferente do que o enunciado descreve. No RMF, determinar impactos potenciais da perda de confidencialidade, integridade e disponibilidade integra a etapa de categorizar.",
        "Incorreta. “selecionar” se refere a conceito, mecanismo ou etapa diferente do que o enunciado descreve. No RMF, determinar impactos potenciais da perda de confidencialidade, integridade e disponibilidade integra a etapa de categorizar.",
        "Correta. No RMF, determinar impactos potenciais da perda de confidencialidade, integridade e disponibilidade integra a etapa de categorizar.",
        "Incorreta. “implementar” se refere a conceito, mecanismo ou etapa diferente do que o enunciado descreve. No RMF, determinar impactos potenciais da perda de confidencialidade, integridade e disponibilidade integra a etapa de categorizar."
      ],
      "source": "TRANSPETRO/PSP/TERRA/NÍVEL SUPERIOR — 2023.2 · Prova 5",
      "sourceProof": "TRANSPETRO 2023.2 — Prova 5 — Segurança Cibernética e da Informação",
      "sourceStatus": "Prova oficial histórica + gabarito oficial fornecidos pelo usuário",
      "official": true,
      "historical": true,
      "board": "CESGRANRIO",
      "examYear": 2023,
      "questionNumber": 61,
      "examPart": "Conhecimentos Específicos",
      "feedbackVersion": "1.7.1"
    },
    {
      "id": "trc-h2023-62",
      "lessonId": "trc-l042",
      "topic": "Certificados digitais, PKI e posse da chave",
      "difficulty": "Histórica CESGRANRIO",
      "statement": "Um processo de autenticação simples é aquele que usa uma senha como informação necessária para verificar uma identidade reivindicada por um usuário do sistema de informação. Para aumentar a segurança do processo de autenticação, o sistema pode exigir a verificação de algo que o usuário possui, como, por exemplo, um certificado digital. Nesse processo de verificação, o usuário envia seu certificado digital para o sistema que, por sua vez, deve verificar se o certificado está válido, ou seja, se está íntegro, se é autêntico, se está no prazo de validade e se não está revogado. Considerando-se que está tudo em ordem com o certificado digital enviado pelo usuário, o sistema deve verificar se o usuário tem a posse da",
      "options": [
        "chave pública, que é par da chave privada que consta do certificado digital.",
        "chave privada, que é par da chave pública que consta do certificado digital.",
        "assinatura digital, gerada pela chave pública que consta do certificado digital.",
        "assinatura digital, gerada pela chave privada que consta do certificado digital.",
        "assinatura digital, gerada pela chave pública fornecida pelo sistema de informação."
      ],
      "correct": 1,
      "explanation": "A posse da chave privada correspondente à chave pública do certificado é o que permite demonstrar controle do par de chaves.",
      "wrong": [
        "Incorreta. “chave pública, que é par da chave privada que consta do certificado digital.” se refere a conceito, mecanismo ou etapa diferente do que o enunciado descreve. A posse da chave privada correspondente à chave pública do certificado é o que permite demonstrar controle do par de chaves.",
        "Correta. A posse da chave privada correspondente à chave pública do certificado é o que permite demonstrar controle do par de chaves.",
        "Incorreta. “assinatura digital, gerada pela chave pública que consta do certificado digital.” se refere a conceito, mecanismo ou etapa diferente do que o enunciado descreve. A posse da chave privada correspondente à chave pública do certificado é o que permite demonstrar controle do par de chaves.",
        "Incorreta. “assinatura digital, gerada pela chave privada que consta do certificado digital.” se refere a conceito, mecanismo ou etapa diferente do que o enunciado descreve. A posse da chave privada correspondente à chave pública do certificado é o que permite demonstrar controle do par de chaves.",
        "Incorreta. “assinatura digital, gerada pela chave pública fornecida pelo sistema de informação.” se refere a conceito, mecanismo ou etapa diferente do que o enunciado descreve. A posse da chave privada correspondente à chave pública do certificado é o que permite demonstrar controle do par de chaves."
      ],
      "source": "TRANSPETRO/PSP/TERRA/NÍVEL SUPERIOR — 2023.2 · Prova 5",
      "sourceProof": "TRANSPETRO 2023.2 — Prova 5 — Segurança Cibernética e da Informação",
      "sourceStatus": "Prova oficial histórica + gabarito oficial fornecidos pelo usuário",
      "official": true,
      "historical": true,
      "board": "CESGRANRIO",
      "examYear": 2023,
      "questionNumber": 62,
      "examPart": "Conhecimentos Específicos",
      "feedbackVersion": "1.7.1"
    },
    {
      "id": "trc-h2023-63",
      "lessonId": "trc-l034",
      "topic": "IEEE 802.1X, EAP e RADIUS",
      "difficulty": "Histórica CESGRANRIO",
      "statement": "O padrão IEEE 802.1X possibilita a troca de informação entre o autenticador, que fornece o acesso à rede de dados, e o servidor de autenticação, que valida a credencial de acesso de um suplicante. Um protocolo amplamente utilizado para troca de informação entre o autenticador e o servidor de autenticação é o",
      "options": [
        "RADIUS",
        "HTTPS",
        "WEP",
        "WPA",
        "SSH"
      ],
      "correct": 0,
      "explanation": "RADIUS é amplamente empregado entre autenticador e servidor de autenticação/AAA em 802.1X.",
      "wrong": [
        "Correta. RADIUS é amplamente empregado entre autenticador e servidor de autenticação/AAA em 802.1X.",
        "Incorreta. HTTPS é HTTP protegido por TLS; não substitui EAP no 802.1X. RADIUS é amplamente empregado entre autenticador e servidor de autenticação/AAA em 802.1X.",
        "Incorreta. “WEP” se refere a conceito, mecanismo ou etapa diferente do que o enunciado descreve. RADIUS é amplamente empregado entre autenticador e servidor de autenticação/AAA em 802.1X.",
        "Incorreta. “WPA” se refere a conceito, mecanismo ou etapa diferente do que o enunciado descreve. RADIUS é amplamente empregado entre autenticador e servidor de autenticação/AAA em 802.1X.",
        "Incorreta. “SSH” se refere a conceito, mecanismo ou etapa diferente do que o enunciado descreve. RADIUS é amplamente empregado entre autenticador e servidor de autenticação/AAA em 802.1X."
      ],
      "source": "TRANSPETRO/PSP/TERRA/NÍVEL SUPERIOR — 2023.2 · Prova 5",
      "sourceProof": "TRANSPETRO 2023.2 — Prova 5 — Segurança Cibernética e da Informação",
      "sourceStatus": "Prova oficial histórica + gabarito oficial fornecidos pelo usuário",
      "official": true,
      "historical": true,
      "board": "CESGRANRIO",
      "examYear": 2023,
      "questionNumber": 63,
      "examPart": "Conhecimentos Específicos",
      "feedbackVersion": "1.7.1"
    },
    {
      "id": "trc-h2023-64",
      "lessonId": "trc-l046",
      "topic": "CIS Benchmarks, Linux e Windows",
      "difficulty": "Histórica CESGRANRIO",
      "statement": "No sistema de arquivos EXT3 do sistema operacional Linux, é possível fazer o controle de acesso aos arquivos e às pastas. Considere que um administrador deseja ajustar as permissões do arquivo teste.txt do seguinte modo: permitir apenas o acesso de leitura e de escrita para o dono do arquivo; permitir apenas o acesso de leitura para o grupo do arquivo; negar o acesso de leitura, escrita e execução para os demais usuários do sistema. O comando que deve ser executado para realizar essa tarefa é o",
      "options": [
        "chown 640 teste.txt",
        "chown 610 teste.txt",
        "chmod 640 teste.txt",
        "chmod 610 teste.txt",
        "chmod 410 teste.txt"
      ],
      "correct": 2,
      "explanation": "chmod 640 concede rw ao dono, r ao grupo e nenhum direito aos demais.",
      "wrong": [
        "Incorreta. chown altera proprietário/grupo; não é o comando para definir bits de permissão numéricos. chmod 640 concede rw ao dono, r ao grupo e nenhum direito aos demais.",
        "Incorreta. “chown 610 teste.txt” se refere a conceito, mecanismo ou etapa diferente do que o enunciado descreve. chmod 640 concede rw ao dono, r ao grupo e nenhum direito aos demais.",
        "Correta. chmod 640 concede rw ao dono, r ao grupo e nenhum direito aos demais.",
        "Incorreta. “chmod 610 teste.txt” se refere a conceito, mecanismo ou etapa diferente do que o enunciado descreve. chmod 640 concede rw ao dono, r ao grupo e nenhum direito aos demais.",
        "Incorreta. “chmod 410 teste.txt” se refere a conceito, mecanismo ou etapa diferente do que o enunciado descreve. chmod 640 concede rw ao dono, r ao grupo e nenhum direito aos demais."
      ],
      "source": "TRANSPETRO/PSP/TERRA/NÍVEL SUPERIOR — 2023.2 · Prova 5",
      "sourceProof": "TRANSPETRO 2023.2 — Prova 5 — Segurança Cibernética e da Informação",
      "sourceStatus": "Prova oficial histórica + gabarito oficial fornecidos pelo usuário",
      "official": true,
      "historical": true,
      "board": "CESGRANRIO",
      "examYear": 2023,
      "questionNumber": 64,
      "examPart": "Conhecimentos Específicos",
      "feedbackVersion": "1.7.1"
    },
    {
      "id": "trc-h2023-65",
      "lessonId": "trc-l047",
      "topic": "Redundância, tolerância a falhas e RAID",
      "difficulty": "Histórica CESGRANRIO",
      "statement": "Sistemas computacionais estão sujeitos a falhas que provocam a sua indisponibilidade. Sistemas tolerantes a falhas adotam técnicas de redundância capazes de minimizar os efeitos colaterais de diferentes tipos de adversidades. Quando se deseja aumentar a disponibilidade do sistema de armazenamento, é comum que se adote a redundância com o uso de cálculo de paridade ou de espelhamento. Um padrão de armazenamento de dados que adota a redundância com o uso de espelhamento é o RAID",
      "options": [
        "0",
        "4",
        "5",
        "6",
        "10"
      ],
      "correct": 4,
      "explanation": "RAID 10 combina espelhamento com striping e oferece redundância por espelhamento.",
      "wrong": [
        "Incorreta. “0” se refere a conceito, mecanismo ou etapa diferente do que o enunciado descreve. RAID 10 combina espelhamento com striping e oferece redundância por espelhamento.",
        "Incorreta. “4” se refere a conceito, mecanismo ou etapa diferente do que o enunciado descreve. RAID 10 combina espelhamento com striping e oferece redundância por espelhamento.",
        "Incorreta. “5” se refere a conceito, mecanismo ou etapa diferente do que o enunciado descreve. RAID 10 combina espelhamento com striping e oferece redundância por espelhamento.",
        "Incorreta. “6” se refere a conceito, mecanismo ou etapa diferente do que o enunciado descreve. RAID 10 combina espelhamento com striping e oferece redundância por espelhamento.",
        "Correta. RAID 10 combina espelhamento com striping e oferece redundância por espelhamento."
      ],
      "source": "TRANSPETRO/PSP/TERRA/NÍVEL SUPERIOR — 2023.2 · Prova 5",
      "sourceProof": "TRANSPETRO 2023.2 — Prova 5 — Segurança Cibernética e da Informação",
      "sourceStatus": "Prova oficial histórica + gabarito oficial fornecidos pelo usuário",
      "official": true,
      "historical": true,
      "board": "CESGRANRIO",
      "examYear": 2023,
      "questionNumber": 65,
      "examPart": "Conhecimentos Específicos",
      "feedbackVersion": "1.7.1"
    },
    {
      "id": "trc-h2023-66",
      "lessonId": "trc-l046",
      "topic": "CIS Benchmarks, Linux e Windows",
      "difficulty": "Histórica CESGRANRIO",
      "statement": "Os arquivos armazenados no sistema de arquivos EXT3 do sistema operacional Linux podem ter vários atributos diferentes. Dentre eles, estão os atributos de identificação do usuário (UID) dono do arquivo, os de identificação do grupo (GID) ao qual o arquivo pertence e os de permissões de acesso de leitura, de escrita e de execução. Tais atributos possibilitam que o sistema determine o que cada um dos usuários pode fazer com o arquivo. Esses atributos ficam armazenados em uma estrutura de dados associada ao arquivo. Essa estrutura de dados é o",
      "options": [
        "folder",
        "i-node",
        "attrblock",
        "MFT",
        "FAT"
      ],
      "correct": 1,
      "explanation": "O inode armazena metadados do arquivo em sistemas de arquivos Unix/Linux, incluindo proprietário, grupo e permissões.",
      "wrong": [
        "Incorreta. “folder” se refere a conceito, mecanismo ou etapa diferente do que o enunciado descreve. O inode armazena metadados do arquivo em sistemas de arquivos Unix/Linux, incluindo proprietário, grupo e permissões.",
        "Correta. O inode armazena metadados do arquivo em sistemas de arquivos Unix/Linux, incluindo proprietário, grupo e permissões.",
        "Incorreta. “attrblock” se refere a conceito, mecanismo ou etapa diferente do que o enunciado descreve. O inode armazena metadados do arquivo em sistemas de arquivos Unix/Linux, incluindo proprietário, grupo e permissões.",
        "Incorreta. “MFT” se refere a conceito, mecanismo ou etapa diferente do que o enunciado descreve. O inode armazena metadados do arquivo em sistemas de arquivos Unix/Linux, incluindo proprietário, grupo e permissões.",
        "Incorreta. “FAT” se refere a conceito, mecanismo ou etapa diferente do que o enunciado descreve. O inode armazena metadados do arquivo em sistemas de arquivos Unix/Linux, incluindo proprietário, grupo e permissões."
      ],
      "source": "TRANSPETRO/PSP/TERRA/NÍVEL SUPERIOR — 2023.2 · Prova 5",
      "sourceProof": "TRANSPETRO 2023.2 — Prova 5 — Segurança Cibernética e da Informação",
      "sourceStatus": "Prova oficial histórica + gabarito oficial fornecidos pelo usuário",
      "official": true,
      "historical": true,
      "board": "CESGRANRIO",
      "examYear": 2023,
      "questionNumber": 66,
      "examPart": "Conhecimentos Específicos",
      "feedbackVersion": "1.7.1"
    },
    {
      "id": "trc-h2023-67",
      "lessonId": "trc-l048",
      "topic": "OT/ICS, SCADA e ISA/IEC 62443",
      "difficulty": "Histórica CESGRANRIO",
      "statement": "As pragas maliciosas (malwares) sempre foram ameaças à segurança dos computadores, mas os sistemas de controle e automação industrial passaram também a ser vítimas dos ataques cibernéticos. Dentre essas ameaças, está um worm de computador que foi projetado especificamente para atacar o sistema operacional SCADA, desenvolvido pela Siemens. Esse worm foi supostamente usado para controlar as centrífugas de enriquecimento de urânio iranianas. De acordo com a Cybersecurity & Infrastructure Security Agency (CISA), os métodos conhecidos de propagação desse worm incluíam dispositivos USB infectados, compartilhamentos de rede, arquivos do projeto STEP 7, arquivos de banco de dados WinCC e uma vulnerabilidade do spooler de impressão do sistema operacional Microsoft Windows. O worm descrito é o",
      "options": [
        "meltdown",
        "spectre",
        "stuxnet",
        "defray",
        "petya"
      ],
      "correct": 2,
      "explanation": "Stuxnet foi um worm direcionado a sistemas industriais/SCADA e é referência histórica de ciberataque a OT.",
      "wrong": [
        "Incorreta. “meltdown” se refere a conceito, mecanismo ou etapa diferente do que o enunciado descreve. Stuxnet foi um worm direcionado a sistemas industriais/SCADA e é referência histórica de ciberataque a OT.",
        "Incorreta. “spectre” se refere a conceito, mecanismo ou etapa diferente do que o enunciado descreve. Stuxnet foi um worm direcionado a sistemas industriais/SCADA e é referência histórica de ciberataque a OT.",
        "Correta. Stuxnet foi um worm direcionado a sistemas industriais/SCADA e é referência histórica de ciberataque a OT.",
        "Incorreta. “defray” se refere a conceito, mecanismo ou etapa diferente do que o enunciado descreve. Stuxnet foi um worm direcionado a sistemas industriais/SCADA e é referência histórica de ciberataque a OT.",
        "Incorreta. “petya” se refere a conceito, mecanismo ou etapa diferente do que o enunciado descreve. Stuxnet foi um worm direcionado a sistemas industriais/SCADA e é referência histórica de ciberataque a OT."
      ],
      "source": "TRANSPETRO/PSP/TERRA/NÍVEL SUPERIOR — 2023.2 · Prova 5",
      "sourceProof": "TRANSPETRO 2023.2 — Prova 5 — Segurança Cibernética e da Informação",
      "sourceStatus": "Prova oficial histórica + gabarito oficial fornecidos pelo usuário",
      "official": true,
      "historical": true,
      "board": "CESGRANRIO",
      "examYear": 2023,
      "questionNumber": 67,
      "examPart": "Conhecimentos Específicos",
      "feedbackVersion": "1.7.1"
    },
    {
      "id": "trc-h2023-68",
      "lessonId": "trc-l046",
      "topic": "CIS Benchmarks, Linux e Windows",
      "difficulty": "Histórica CESGRANRIO",
      "statement": "Quando os usuários viajam, os dados confidenciais da sua organização os acompanham e, por essa razão, devem ser protegidos contra acessos não autorizados. O BitLocker, do sistema operacional Windows, é um recurso projetado para tornar a unidade de disco criptografada irrecuperável, caso não se faça a autenticação necessária. Considere que o administrador do sistema deseja consultar o método de criptografia utilizado em uma unidade de disco criptografada. Para tal consulta, esse administrador usará o comando",
      "options": [
        "bcdedit /bitlocker",
        "bcdedit /status /bitlocker",
        "manage-bde -status",
        "manage-bitlck -status",
        "manage-bitlck /status"
      ],
      "correct": 2,
      "explanation": "manage-bde -status consulta o estado do BitLocker, incluindo informações de criptografia do volume.",
      "wrong": [
        "Incorreta. “bcdedit /bitlocker” se refere a conceito, mecanismo ou etapa diferente do que o enunciado descreve. manage-bde -status consulta o estado do BitLocker, incluindo informações de criptografia do volume.",
        "Incorreta. “bcdedit /status /bitlocker” se refere a conceito, mecanismo ou etapa diferente do que o enunciado descreve. manage-bde -status consulta o estado do BitLocker, incluindo informações de criptografia do volume.",
        "Correta. manage-bde -status consulta o estado do BitLocker, incluindo informações de criptografia do volume.",
        "Incorreta. “manage-bitlck -status” se refere a conceito, mecanismo ou etapa diferente do que o enunciado descreve. manage-bde -status consulta o estado do BitLocker, incluindo informações de criptografia do volume.",
        "Incorreta. “manage-bitlck /status” se refere a conceito, mecanismo ou etapa diferente do que o enunciado descreve. manage-bde -status consulta o estado do BitLocker, incluindo informações de criptografia do volume."
      ],
      "source": "TRANSPETRO/PSP/TERRA/NÍVEL SUPERIOR — 2023.2 · Prova 5",
      "sourceProof": "TRANSPETRO 2023.2 — Prova 5 — Segurança Cibernética e da Informação",
      "sourceStatus": "Prova oficial histórica + gabarito oficial fornecidos pelo usuário",
      "official": true,
      "historical": true,
      "board": "CESGRANRIO",
      "examYear": 2023,
      "questionNumber": 68,
      "examPart": "Conhecimentos Específicos",
      "feedbackVersion": "1.7.1"
    },
    {
      "id": "trc-h2023-69",
      "lessonId": "trc-l045",
      "topic": "Antimalware e firewall pessoal",
      "difficulty": "Histórica CESGRANRIO",
      "statement": "O Windows Firewall é um firewall do sistema operacional Microsoft Windows e foi desenvolvido para proteger o dispositivo. Essa proteção é baseada em regras de controle de acesso que filtram o tráfego de rede destinado ao dispositivo ou oriundo do dispositivo. Considere que um administrador usará o Powershell para visualizar as informações da profile Public do Windows Firewall, tais como o nome do arquivo de registro e o tamanho máximo desse arquivo. Para tal fim, esse administrador deve usar o seguinte comando:",
      "options": [
        "Get-NetFirewallProfile -Name Public",
        "Get-NetFirewallProfile -Name Public -LogInfo",
        "Get-NetFirewallProfile -Name Public -LogConfig",
        "Get-NetFirewallLog -Name Public -LogInfo",
        "Get-NetFirewallLog -Name Public -LogConfig"
      ],
      "correct": 0,
      "explanation": "Get-NetFirewallProfile -Name Public consulta as propriedades do perfil Public do Windows Firewall.",
      "wrong": [
        "Correta. Get-NetFirewallProfile -Name Public consulta as propriedades do perfil Public do Windows Firewall.",
        "Incorreta. “Get-NetFirewallProfile -Name Public -LogInfo” se refere a conceito, mecanismo ou etapa diferente do que o enunciado descreve. Get-NetFirewallProfile -Name Public consulta as propriedades do perfil Public do Windows Firewall.",
        "Incorreta. “Get-NetFirewallProfile -Name Public -LogConfig” se refere a conceito, mecanismo ou etapa diferente do que o enunciado descreve. Get-NetFirewallProfile -Name Public consulta as propriedades do perfil Public do Windows Firewall.",
        "Incorreta. “Get-NetFirewallLog -Name Public -LogInfo” se refere a conceito, mecanismo ou etapa diferente do que o enunciado descreve. Get-NetFirewallProfile -Name Public consulta as propriedades do perfil Public do Windows Firewall.",
        "Incorreta. “Get-NetFirewallLog -Name Public -LogConfig” se refere a conceito, mecanismo ou etapa diferente do que o enunciado descreve. Get-NetFirewallProfile -Name Public consulta as propriedades do perfil Public do Windows Firewall."
      ],
      "source": "TRANSPETRO/PSP/TERRA/NÍVEL SUPERIOR — 2023.2 · Prova 5",
      "sourceProof": "TRANSPETRO 2023.2 — Prova 5 — Segurança Cibernética e da Informação",
      "sourceStatus": "Prova oficial histórica + gabarito oficial fornecidos pelo usuário",
      "official": true,
      "historical": true,
      "board": "CESGRANRIO",
      "examYear": 2023,
      "questionNumber": 69,
      "examPart": "Conhecimentos Específicos",
      "feedbackVersion": "1.7.1"
    },
    {
      "id": "trc-h2023-70",
      "lessonId": "trc-l048",
      "topic": "OT/ICS, SCADA e ISA/IEC 62443",
      "difficulty": "Histórica CESGRANRIO",
      "statement": "As ameaças aos sistemas de controle e automação industrial provocaram várias iniciativas de padronização de processos mais seguros para a implantação de infraestruturas de Operational Technology (OT). Um dos documentos publicados pelo International Electrotechnical Commission (IEC) tem uma parte que especifica requisitos de processo para o desenvolvimento seguro de produtos e define um ciclo de vida de desenvolvimento seguro (SDL) com a finalidade de desenvolver e manter produtos seguros. Este documento é o IEC",
      "options": [
        "27001",
        "27002",
        "27005",
        "60488",
        "62443"
      ],
      "correct": 4,
      "explanation": "A família IEC 62443 trata de segurança de automação e controle industrial; partes da série incluem requisitos de desenvolvimento seguro de produtos.",
      "wrong": [
        "Incorreta. “27001” se refere a conceito, mecanismo ou etapa diferente do que o enunciado descreve. A família IEC 62443 trata de segurança de automação e controle industrial; partes da série incluem requisitos de desenvolvimento seguro de produtos.",
        "Incorreta. “27002” se refere a conceito, mecanismo ou etapa diferente do que o enunciado descreve. A família IEC 62443 trata de segurança de automação e controle industrial; partes da série incluem requisitos de desenvolvimento seguro de produtos.",
        "Incorreta. “27005” se refere a conceito, mecanismo ou etapa diferente do que o enunciado descreve. A família IEC 62443 trata de segurança de automação e controle industrial; partes da série incluem requisitos de desenvolvimento seguro de produtos.",
        "Incorreta. “60488” se refere a conceito, mecanismo ou etapa diferente do que o enunciado descreve. A família IEC 62443 trata de segurança de automação e controle industrial; partes da série incluem requisitos de desenvolvimento seguro de produtos.",
        "Correta. A família IEC 62443 trata de segurança de automação e controle industrial; partes da série incluem requisitos de desenvolvimento seguro de produtos."
      ],
      "source": "TRANSPETRO/PSP/TERRA/NÍVEL SUPERIOR — 2023.2 · Prova 5",
      "sourceProof": "TRANSPETRO 2023.2 — Prova 5 — Segurança Cibernética e da Informação",
      "sourceStatus": "Prova oficial histórica + gabarito oficial fornecidos pelo usuário",
      "official": true,
      "historical": true,
      "board": "CESGRANRIO",
      "examYear": 2023,
      "questionNumber": 70,
      "examPart": "Conhecimentos Específicos",
      "feedbackVersion": "1.7.1"
    },
    {
      "id": "trc-q001",
      "lessonId": "trc-l001",
      "topic": "Compreensão, tema e inferência",
      "difficulty": "Básico",
      "statement": "Sobre “Compreensão, tema e inferência”, assinale a alternativa correta.",
      "options": [
        "Inferência válida é qualquer opinião plausível do leitor.",
        "Tema e título são necessariamente idênticos.",
        "Informação implícita dispensa evidência textual.",
        "Uma inferência válida deve ser sustentada por pistas do texto e não pode contradizer informação explícita.",
        "A finalidade do texto é definida apenas pelo primeiro parágrafo."
      ],
      "correct": 3,
      "explanation": "Uma inferência válida deve ser sustentada por pistas do texto e não pode contradizer informação explícita.",
      "wrong": [
        "Incorreta. A proposição “Inferência válida é qualquer opinião plausível do leitor.” contraria ou desloca o conceito central cobrado nesta microlição. Uma inferência válida deve ser sustentada por pistas do texto e não pode contradizer informação explícita.",
        "Incorreta. A proposição “Tema e título são necessariamente idênticos.” contraria ou desloca o conceito central cobrado nesta microlição. Uma inferência válida deve ser sustentada por pistas do texto e não pode contradizer informação explícita.",
        "Incorreta. A proposição “Informação implícita dispensa evidência textual.” contraria ou desloca o conceito central cobrado nesta microlição. Uma inferência válida deve ser sustentada por pistas do texto e não pode contradizer informação explícita.",
        "Correta. Uma inferência válida deve ser sustentada por pistas do texto e não pode contradizer informação explícita.",
        "Incorreta. A proposição “A finalidade do texto é definida apenas pelo primeiro parágrafo.” contraria ou desloca o conceito central cobrado nesta microlição. Uma inferência válida deve ser sustentada por pistas do texto e não pode contradizer informação explícita."
      ],
      "source": "Questão autoral Versa · edital Transpetro 2026.4",
      "board": "CESGRANRIO — estilo de treino",
      "examYear": 2026,
      "feedbackVersion": "1.7.1"
    },
    {
      "id": "trc-q001b",
      "lessonId": "trc-l001",
      "topic": "Compreensão, tema e inferência",
      "difficulty": "Básico",
      "statement": "Em uma questão de interpretação/aplicação sobre “Compreensão, tema e inferência”, qual afirmação deve orientar a análise?",
      "options": [
        "Informação implícita dispensa evidência textual.",
        "Uma inferência válida deve ser sustentada por pistas do texto e não pode contradizer informação explícita.",
        "A finalidade do texto é definida apenas pelo primeiro parágrafo.",
        "Inferência válida é qualquer opinião plausível do leitor.",
        "Tema e título são necessariamente idênticos."
      ],
      "correct": 1,
      "explanation": "Uma inferência válida deve ser sustentada por pistas do texto e não pode contradizer informação explícita.",
      "wrong": [
        "Incorreta. A proposição “Informação implícita dispensa evidência textual.” contraria ou desloca o conceito central cobrado nesta microlição. Uma inferência válida deve ser sustentada por pistas do texto e não pode contradizer informação explícita.",
        "Correta. Uma inferência válida deve ser sustentada por pistas do texto e não pode contradizer informação explícita.",
        "Incorreta. A proposição “A finalidade do texto é definida apenas pelo primeiro parágrafo.” contraria ou desloca o conceito central cobrado nesta microlição. Uma inferência válida deve ser sustentada por pistas do texto e não pode contradizer informação explícita.",
        "Incorreta. A proposição “Inferência válida é qualquer opinião plausível do leitor.” contraria ou desloca o conceito central cobrado nesta microlição. Uma inferência válida deve ser sustentada por pistas do texto e não pode contradizer informação explícita.",
        "Incorreta. A proposição “Tema e título são necessariamente idênticos.” contraria ou desloca o conceito central cobrado nesta microlição. Uma inferência válida deve ser sustentada por pistas do texto e não pode contradizer informação explícita."
      ],
      "source": "Questão autoral Versa · edital Transpetro 2026.4",
      "board": "CESGRANRIO — estilo de treino",
      "examYear": 2026,
      "feedbackVersion": "1.7.1"
    },
    {
      "id": "trc-q002",
      "lessonId": "trc-l002",
      "topic": "Coesão textual e referenciação",
      "difficulty": "Básico",
      "statement": "Sobre “Coesão textual e referenciação”, assinale a alternativa correta.",
      "options": [
        "Coesão é sinônimo de concordância verbal.",
        "Conectores e pronomes podem estabelecer relações entre segmentos e recuperar referentes, contribuindo para a coesão.",
        "Todo pronome retoma obrigatoriamente o termo imediatamente anterior.",
        "Conectores têm sempre o mesmo valor semântico.",
        "Um texto coeso é automaticamente verdadeiro e coerente."
      ],
      "correct": 1,
      "explanation": "Conectores e pronomes podem estabelecer relações entre segmentos e recuperar referentes, contribuindo para a coesão.",
      "wrong": [
        "Incorreta. A proposição “Coesão é sinônimo de concordância verbal.” contraria ou desloca o conceito central cobrado nesta microlição. Conectores e pronomes podem estabelecer relações entre segmentos e recuperar referentes, contribuindo para a coesão.",
        "Correta. Conectores e pronomes podem estabelecer relações entre segmentos e recuperar referentes, contribuindo para a coesão.",
        "Incorreta. A proposição “Todo pronome retoma obrigatoriamente o termo imediatamente anterior.” contraria ou desloca o conceito central cobrado nesta microlição. Conectores e pronomes podem estabelecer relações entre segmentos e recuperar referentes, contribuindo para a coesão.",
        "Incorreta. A proposição “Conectores têm sempre o mesmo valor semântico.” contraria ou desloca o conceito central cobrado nesta microlição. Conectores e pronomes podem estabelecer relações entre segmentos e recuperar referentes, contribuindo para a coesão.",
        "Incorreta. A proposição “Um texto coeso é automaticamente verdadeiro e coerente.” contraria ou desloca o conceito central cobrado nesta microlição. Conectores e pronomes podem estabelecer relações entre segmentos e recuperar referentes, contribuindo para a coesão."
      ],
      "source": "Questão autoral Versa · edital Transpetro 2026.4",
      "board": "CESGRANRIO — estilo de treino",
      "examYear": 2026,
      "feedbackVersion": "1.7.1"
    },
    {
      "id": "trc-q002b",
      "lessonId": "trc-l002",
      "topic": "Coesão textual e referenciação",
      "difficulty": "Básico",
      "statement": "Em uma questão de interpretação/aplicação sobre “Coesão textual e referenciação”, qual afirmação deve orientar a análise?",
      "options": [
        "Todo pronome retoma obrigatoriamente o termo imediatamente anterior.",
        "Conectores têm sempre o mesmo valor semântico.",
        "Um texto coeso é automaticamente verdadeiro e coerente.",
        "Coesão é sinônimo de concordância verbal.",
        "Conectores e pronomes podem estabelecer relações entre segmentos e recuperar referentes, contribuindo para a coesão."
      ],
      "correct": 4,
      "explanation": "Conectores e pronomes podem estabelecer relações entre segmentos e recuperar referentes, contribuindo para a coesão.",
      "wrong": [
        "Incorreta. A proposição “Todo pronome retoma obrigatoriamente o termo imediatamente anterior.” contraria ou desloca o conceito central cobrado nesta microlição. Conectores e pronomes podem estabelecer relações entre segmentos e recuperar referentes, contribuindo para a coesão.",
        "Incorreta. A proposição “Conectores têm sempre o mesmo valor semântico.” contraria ou desloca o conceito central cobrado nesta microlição. Conectores e pronomes podem estabelecer relações entre segmentos e recuperar referentes, contribuindo para a coesão.",
        "Incorreta. A proposição “Um texto coeso é automaticamente verdadeiro e coerente.” contraria ou desloca o conceito central cobrado nesta microlição. Conectores e pronomes podem estabelecer relações entre segmentos e recuperar referentes, contribuindo para a coesão.",
        "Incorreta. A proposição “Coesão é sinônimo de concordância verbal.” contraria ou desloca o conceito central cobrado nesta microlição. Conectores e pronomes podem estabelecer relações entre segmentos e recuperar referentes, contribuindo para a coesão.",
        "Correta. Conectores e pronomes podem estabelecer relações entre segmentos e recuperar referentes, contribuindo para a coesão."
      ],
      "source": "Questão autoral Versa · edital Transpetro 2026.4",
      "board": "CESGRANRIO — estilo de treino",
      "examYear": 2026,
      "feedbackVersion": "1.7.1"
    },
    {
      "id": "trc-q003",
      "lessonId": "trc-l003",
      "topic": "Ortografia e significação das palavras",
      "difficulty": "Básico",
      "statement": "Sobre “Ortografia e significação das palavras”, assinale a alternativa correta.",
      "options": [
        "Palavras sinônimas são intercambiáveis em qualquer contexto.",
        "Ortografia oficial varia segundo a intenção do autor.",
        "Polissemia significa erro de escrita.",
        "O contexto é irrelevante para a significação.",
        "O sentido de uma palavra pode variar conforme o contexto; substituições devem preservar o valor semântico e a estrutura da frase."
      ],
      "correct": 4,
      "explanation": "O sentido de uma palavra pode variar conforme o contexto; substituições devem preservar o valor semântico e a estrutura da frase.",
      "wrong": [
        "Incorreta. A proposição “Palavras sinônimas são intercambiáveis em qualquer contexto.” contraria ou desloca o conceito central cobrado nesta microlição. O sentido de uma palavra pode variar conforme o contexto; substituições devem preservar o valor semântico e a estrutura da frase.",
        "Incorreta. A proposição “Ortografia oficial varia segundo a intenção do autor.” contraria ou desloca o conceito central cobrado nesta microlição. O sentido de uma palavra pode variar conforme o contexto; substituições devem preservar o valor semântico e a estrutura da frase.",
        "Incorreta. A proposição “Polissemia significa erro de escrita.” contraria ou desloca o conceito central cobrado nesta microlição. O sentido de uma palavra pode variar conforme o contexto; substituições devem preservar o valor semântico e a estrutura da frase.",
        "Incorreta. A proposição “O contexto é irrelevante para a significação.” contraria ou desloca o conceito central cobrado nesta microlição. O sentido de uma palavra pode variar conforme o contexto; substituições devem preservar o valor semântico e a estrutura da frase.",
        "Correta. O sentido de uma palavra pode variar conforme o contexto; substituições devem preservar o valor semântico e a estrutura da frase."
      ],
      "source": "Questão autoral Versa · edital Transpetro 2026.4",
      "board": "CESGRANRIO — estilo de treino",
      "examYear": 2026,
      "feedbackVersion": "1.7.1"
    },
    {
      "id": "trc-q003b",
      "lessonId": "trc-l003",
      "topic": "Ortografia e significação das palavras",
      "difficulty": "Básico",
      "statement": "Em uma questão de interpretação/aplicação sobre “Ortografia e significação das palavras”, qual afirmação deve orientar a análise?",
      "options": [
        "Polissemia significa erro de escrita.",
        "O contexto é irrelevante para a significação.",
        "O sentido de uma palavra pode variar conforme o contexto; substituições devem preservar o valor semântico e a estrutura da frase.",
        "Palavras sinônimas são intercambiáveis em qualquer contexto.",
        "Ortografia oficial varia segundo a intenção do autor."
      ],
      "correct": 2,
      "explanation": "O sentido de uma palavra pode variar conforme o contexto; substituições devem preservar o valor semântico e a estrutura da frase.",
      "wrong": [
        "Incorreta. A proposição “Polissemia significa erro de escrita.” contraria ou desloca o conceito central cobrado nesta microlição. O sentido de uma palavra pode variar conforme o contexto; substituições devem preservar o valor semântico e a estrutura da frase.",
        "Incorreta. A proposição “O contexto é irrelevante para a significação.” contraria ou desloca o conceito central cobrado nesta microlição. O sentido de uma palavra pode variar conforme o contexto; substituições devem preservar o valor semântico e a estrutura da frase.",
        "Correta. O sentido de uma palavra pode variar conforme o contexto; substituições devem preservar o valor semântico e a estrutura da frase.",
        "Incorreta. A proposição “Palavras sinônimas são intercambiáveis em qualquer contexto.” contraria ou desloca o conceito central cobrado nesta microlição. O sentido de uma palavra pode variar conforme o contexto; substituições devem preservar o valor semântico e a estrutura da frase.",
        "Incorreta. A proposição “Ortografia oficial varia segundo a intenção do autor.” contraria ou desloca o conceito central cobrado nesta microlição. O sentido de uma palavra pode variar conforme o contexto; substituições devem preservar o valor semântico e a estrutura da frase."
      ],
      "source": "Questão autoral Versa · edital Transpetro 2026.4",
      "board": "CESGRANRIO — estilo de treino",
      "examYear": 2026,
      "feedbackVersion": "1.7.1"
    },
    {
      "id": "trc-q004",
      "lessonId": "trc-l004",
      "topic": "Tempos, modos e classes de palavras",
      "difficulty": "Intermediário",
      "statement": "Sobre “Tempos, modos e classes de palavras”, assinale a alternativa correta.",
      "options": [
        "Subjuntivo indica exclusivamente ações passadas.",
        "Advérbios flexionam-se em gênero e número como regra geral.",
        "O modo subjuntivo é frequentemente associado a hipótese, possibilidade ou desejo, enquanto o indicativo tende a apresentar o fato como mais assertivo.",
        "Todo “que” pertence à mesma classe gramatical.",
        "Tempo verbal não interfere na relação entre eventos."
      ],
      "correct": 2,
      "explanation": "O modo subjuntivo é frequentemente associado a hipótese, possibilidade ou desejo, enquanto o indicativo tende a apresentar o fato como mais assertivo.",
      "wrong": [
        "Incorreta. A proposição “Subjuntivo indica exclusivamente ações passadas.” contraria ou desloca o conceito central cobrado nesta microlição. O modo subjuntivo é frequentemente associado a hipótese, possibilidade ou desejo, enquanto o indicativo tende a apresentar o fato como mais assertivo.",
        "Incorreta. A proposição “Advérbios flexionam-se em gênero e número como regra geral.” contraria ou desloca o conceito central cobrado nesta microlição. O modo subjuntivo é frequentemente associado a hipótese, possibilidade ou desejo, enquanto o indicativo tende a apresentar o fato como mais assertivo.",
        "Correta. O modo subjuntivo é frequentemente associado a hipótese, possibilidade ou desejo, enquanto o indicativo tende a apresentar o fato como mais assertivo.",
        "Incorreta. A proposição “Todo “que” pertence à mesma classe gramatical.” contraria ou desloca o conceito central cobrado nesta microlição. O modo subjuntivo é frequentemente associado a hipótese, possibilidade ou desejo, enquanto o indicativo tende a apresentar o fato como mais assertivo.",
        "Incorreta. A proposição “Tempo verbal não interfere na relação entre eventos.” contraria ou desloca o conceito central cobrado nesta microlição. O modo subjuntivo é frequentemente associado a hipótese, possibilidade ou desejo, enquanto o indicativo tende a apresentar o fato como mais assertivo."
      ],
      "source": "Questão autoral Versa · edital Transpetro 2026.4",
      "board": "CESGRANRIO — estilo de treino",
      "examYear": 2026,
      "feedbackVersion": "1.7.1"
    },
    {
      "id": "trc-q004b",
      "lessonId": "trc-l004",
      "topic": "Tempos, modos e classes de palavras",
      "difficulty": "Intermediário",
      "statement": "Em uma questão de interpretação/aplicação sobre “Tempos, modos e classes de palavras”, qual afirmação deve orientar a análise?",
      "options": [
        "O modo subjuntivo é frequentemente associado a hipótese, possibilidade ou desejo, enquanto o indicativo tende a apresentar o fato como mais assertivo.",
        "Todo “que” pertence à mesma classe gramatical.",
        "Tempo verbal não interfere na relação entre eventos.",
        "Subjuntivo indica exclusivamente ações passadas.",
        "Advérbios flexionam-se em gênero e número como regra geral."
      ],
      "correct": 0,
      "explanation": "O modo subjuntivo é frequentemente associado a hipótese, possibilidade ou desejo, enquanto o indicativo tende a apresentar o fato como mais assertivo.",
      "wrong": [
        "Correta. O modo subjuntivo é frequentemente associado a hipótese, possibilidade ou desejo, enquanto o indicativo tende a apresentar o fato como mais assertivo.",
        "Incorreta. A proposição “Todo “que” pertence à mesma classe gramatical.” contraria ou desloca o conceito central cobrado nesta microlição. O modo subjuntivo é frequentemente associado a hipótese, possibilidade ou desejo, enquanto o indicativo tende a apresentar o fato como mais assertivo.",
        "Incorreta. A proposição “Tempo verbal não interfere na relação entre eventos.” contraria ou desloca o conceito central cobrado nesta microlição. O modo subjuntivo é frequentemente associado a hipótese, possibilidade ou desejo, enquanto o indicativo tende a apresentar o fato como mais assertivo.",
        "Incorreta. A proposição “Subjuntivo indica exclusivamente ações passadas.” contraria ou desloca o conceito central cobrado nesta microlição. O modo subjuntivo é frequentemente associado a hipótese, possibilidade ou desejo, enquanto o indicativo tende a apresentar o fato como mais assertivo.",
        "Incorreta. A proposição “Advérbios flexionam-se em gênero e número como regra geral.” contraria ou desloca o conceito central cobrado nesta microlição. O modo subjuntivo é frequentemente associado a hipótese, possibilidade ou desejo, enquanto o indicativo tende a apresentar o fato como mais assertivo."
      ],
      "source": "Questão autoral Versa · edital Transpetro 2026.4",
      "board": "CESGRANRIO — estilo de treino",
      "examYear": 2026,
      "feedbackVersion": "1.7.1"
    },
    {
      "id": "trc-q005",
      "lessonId": "trc-l005",
      "topic": "Coordenação, subordinação e pontuação",
      "difficulty": "Intermediário",
      "statement": "Sobre “Coordenação, subordinação e pontuação”, assinale a alternativa correta.",
      "options": [
        "“Embora” introduz normalmente uma relação concessiva; a pontuação acompanha a organização sintática da oração.",
        "“Embora” introduz sempre causa.",
        "Vírgula deve separar obrigatoriamente sujeito e predicado.",
        "Coordenação torna uma oração termo sintático da outra.",
        "Pontuação pode ser decidida apenas pela duração da pausa oral."
      ],
      "correct": 0,
      "explanation": "“Embora” introduz normalmente uma relação concessiva; a pontuação acompanha a organização sintática da oração.",
      "wrong": [
        "Correta. “Embora” introduz normalmente uma relação concessiva; a pontuação acompanha a organização sintática da oração.",
        "Incorreta. A proposição ““Embora” introduz sempre causa.” contraria ou desloca o conceito central cobrado nesta microlição. “Embora” introduz normalmente uma relação concessiva; a pontuação acompanha a organização sintática da oração.",
        "Incorreta. A proposição “Vírgula deve separar obrigatoriamente sujeito e predicado.” contraria ou desloca o conceito central cobrado nesta microlição. “Embora” introduz normalmente uma relação concessiva; a pontuação acompanha a organização sintática da oração.",
        "Incorreta. A proposição “Coordenação torna uma oração termo sintático da outra.” contraria ou desloca o conceito central cobrado nesta microlição. “Embora” introduz normalmente uma relação concessiva; a pontuação acompanha a organização sintática da oração.",
        "Incorreta. A proposição “Pontuação pode ser decidida apenas pela duração da pausa oral.” contraria ou desloca o conceito central cobrado nesta microlição. “Embora” introduz normalmente uma relação concessiva; a pontuação acompanha a organização sintática da oração."
      ],
      "source": "Questão autoral Versa · edital Transpetro 2026.4",
      "board": "CESGRANRIO — estilo de treino",
      "examYear": 2026,
      "feedbackVersion": "1.7.1"
    },
    {
      "id": "trc-q005b",
      "lessonId": "trc-l005",
      "topic": "Coordenação, subordinação e pontuação",
      "difficulty": "Intermediário",
      "statement": "Em uma questão de interpretação/aplicação sobre “Coordenação, subordinação e pontuação”, qual afirmação deve orientar a análise?",
      "options": [
        "Vírgula deve separar obrigatoriamente sujeito e predicado.",
        "Coordenação torna uma oração termo sintático da outra.",
        "Pontuação pode ser decidida apenas pela duração da pausa oral.",
        "“Embora” introduz normalmente uma relação concessiva; a pontuação acompanha a organização sintática da oração.",
        "“Embora” introduz sempre causa."
      ],
      "correct": 3,
      "explanation": "“Embora” introduz normalmente uma relação concessiva; a pontuação acompanha a organização sintática da oração.",
      "wrong": [
        "Incorreta. A proposição “Vírgula deve separar obrigatoriamente sujeito e predicado.” contraria ou desloca o conceito central cobrado nesta microlição. “Embora” introduz normalmente uma relação concessiva; a pontuação acompanha a organização sintática da oração.",
        "Incorreta. A proposição “Coordenação torna uma oração termo sintático da outra.” contraria ou desloca o conceito central cobrado nesta microlição. “Embora” introduz normalmente uma relação concessiva; a pontuação acompanha a organização sintática da oração.",
        "Incorreta. A proposição “Pontuação pode ser decidida apenas pela duração da pausa oral.” contraria ou desloca o conceito central cobrado nesta microlição. “Embora” introduz normalmente uma relação concessiva; a pontuação acompanha a organização sintática da oração.",
        "Correta. “Embora” introduz normalmente uma relação concessiva; a pontuação acompanha a organização sintática da oração.",
        "Incorreta. A proposição ““Embora” introduz sempre causa.” contraria ou desloca o conceito central cobrado nesta microlição. “Embora” introduz normalmente uma relação concessiva; a pontuação acompanha a organização sintática da oração."
      ],
      "source": "Questão autoral Versa · edital Transpetro 2026.4",
      "board": "CESGRANRIO — estilo de treino",
      "examYear": 2026,
      "feedbackVersion": "1.7.1"
    },
    {
      "id": "trc-q006",
      "lessonId": "trc-l006",
      "topic": "Concordância, regência, crase e colocação pronominal",
      "difficulty": "Intermediário",
      "statement": "Sobre “Concordância, regência, crase e colocação pronominal”, assinale a alternativa correta.",
      "options": [
        "Crase ocorre antes de todo substantivo feminino.",
        "Regência diz respeito apenas à concordância em número.",
        "Próclise é proibida quando existe palavra atrativa.",
        "A análise de crase exige verificar se o termo regente pede a preposição “a” e se o termo seguinte admite artigo “a”.",
        "Concordância verbal é determinada sempre pelo termo mais próximo."
      ],
      "correct": 3,
      "explanation": "A análise de crase exige verificar se o termo regente pede a preposição “a” e se o termo seguinte admite artigo “a”.",
      "wrong": [
        "Incorreta. A proposição “Crase ocorre antes de todo substantivo feminino.” contraria ou desloca o conceito central cobrado nesta microlição. A análise de crase exige verificar se o termo regente pede a preposição “a” e se o termo seguinte admite artigo “a”.",
        "Incorreta. A proposição “Regência diz respeito apenas à concordância em número.” contraria ou desloca o conceito central cobrado nesta microlição. A análise de crase exige verificar se o termo regente pede a preposição “a” e se o termo seguinte admite artigo “a”.",
        "Incorreta. A proposição “Próclise é proibida quando existe palavra atrativa.” contraria ou desloca o conceito central cobrado nesta microlição. A análise de crase exige verificar se o termo regente pede a preposição “a” e se o termo seguinte admite artigo “a”.",
        "Correta. A análise de crase exige verificar se o termo regente pede a preposição “a” e se o termo seguinte admite artigo “a”.",
        "Incorreta. A proposição “Concordância verbal é determinada sempre pelo termo mais próximo.” contraria ou desloca o conceito central cobrado nesta microlição. A análise de crase exige verificar se o termo regente pede a preposição “a” e se o termo seguinte admite artigo “a”."
      ],
      "source": "Questão autoral Versa · edital Transpetro 2026.4",
      "board": "CESGRANRIO — estilo de treino",
      "examYear": 2026,
      "feedbackVersion": "1.7.1"
    },
    {
      "id": "trc-q006b",
      "lessonId": "trc-l006",
      "topic": "Concordância, regência, crase e colocação pronominal",
      "difficulty": "Intermediário",
      "statement": "Em uma questão de interpretação/aplicação sobre “Concordância, regência, crase e colocação pronominal”, qual afirmação deve orientar a análise?",
      "options": [
        "Próclise é proibida quando existe palavra atrativa.",
        "A análise de crase exige verificar se o termo regente pede a preposição “a” e se o termo seguinte admite artigo “a”.",
        "Concordância verbal é determinada sempre pelo termo mais próximo.",
        "Crase ocorre antes de todo substantivo feminino.",
        "Regência diz respeito apenas à concordância em número."
      ],
      "correct": 1,
      "explanation": "A análise de crase exige verificar se o termo regente pede a preposição “a” e se o termo seguinte admite artigo “a”.",
      "wrong": [
        "Incorreta. A proposição “Próclise é proibida quando existe palavra atrativa.” contraria ou desloca o conceito central cobrado nesta microlição. A análise de crase exige verificar se o termo regente pede a preposição “a” e se o termo seguinte admite artigo “a”.",
        "Correta. A análise de crase exige verificar se o termo regente pede a preposição “a” e se o termo seguinte admite artigo “a”.",
        "Incorreta. A proposição “Concordância verbal é determinada sempre pelo termo mais próximo.” contraria ou desloca o conceito central cobrado nesta microlição. A análise de crase exige verificar se o termo regente pede a preposição “a” e se o termo seguinte admite artigo “a”.",
        "Incorreta. A proposição “Crase ocorre antes de todo substantivo feminino.” contraria ou desloca o conceito central cobrado nesta microlição. A análise de crase exige verificar se o termo regente pede a preposição “a” e se o termo seguinte admite artigo “a”.",
        "Incorreta. A proposição “Regência diz respeito apenas à concordância em número.” contraria ou desloca o conceito central cobrado nesta microlição. A análise de crase exige verificar se o termo regente pede a preposição “a” e se o termo seguinte admite artigo “a”."
      ],
      "source": "Questão autoral Versa · edital Transpetro 2026.4",
      "board": "CESGRANRIO — estilo de treino",
      "examYear": 2026,
      "feedbackVersion": "1.7.1"
    },
    {
      "id": "trc-q007",
      "lessonId": "trc-l007",
      "topic": "Reading: main idea and purpose",
      "difficulty": "Básico",
      "statement": "Sobre “Reading: main idea and purpose”, assinale a alternativa correta.",
      "options": [
        "The main idea is always the first noun in the text.",
        "The main idea is inferred from the text as a whole, especially recurring ideas, topic sentences and the author’s purpose.",
        "Every unknown word must be translated before comprehension is possible.",
        "The title alone determines every correct answer.",
        "Reading comprehension ignores paragraph relationships."
      ],
      "correct": 1,
      "explanation": "The main idea is inferred from the text as a whole, especially recurring ideas, topic sentences and the author’s purpose.",
      "wrong": [
        "Incorreta. A proposição “The main idea is always the first noun in the text.” contraria ou desloca o conceito central cobrado nesta microlição. The main idea is inferred from the text as a whole, especially recurring ideas, topic sentences and the author’s purpose.",
        "Correta. The main idea is inferred from the text as a whole, especially recurring ideas, topic sentences and the author’s purpose.",
        "Incorreta. A proposição “Every unknown word must be translated before comprehension is possible.” contraria ou desloca o conceito central cobrado nesta microlição. The main idea is inferred from the text as a whole, especially recurring ideas, topic sentences and the author’s purpose.",
        "Incorreta. A proposição “The title alone determines every correct answer.” contraria ou desloca o conceito central cobrado nesta microlição. The main idea is inferred from the text as a whole, especially recurring ideas, topic sentences and the author’s purpose.",
        "Incorreta. A proposição “Reading comprehension ignores paragraph relationships.” contraria ou desloca o conceito central cobrado nesta microlição. The main idea is inferred from the text as a whole, especially recurring ideas, topic sentences and the author’s purpose."
      ],
      "source": "Questão autoral Versa · edital Transpetro 2026.4",
      "board": "CESGRANRIO — estilo de treino",
      "examYear": 2026,
      "feedbackVersion": "1.7.1"
    },
    {
      "id": "trc-q007b",
      "lessonId": "trc-l007",
      "topic": "Reading: main idea and purpose",
      "difficulty": "Básico",
      "statement": "Em uma questão de interpretação/aplicação sobre “Reading: main idea and purpose”, qual afirmação deve orientar a análise?",
      "options": [
        "Every unknown word must be translated before comprehension is possible.",
        "The title alone determines every correct answer.",
        "Reading comprehension ignores paragraph relationships.",
        "The main idea is always the first noun in the text.",
        "The main idea is inferred from the text as a whole, especially recurring ideas, topic sentences and the author’s purpose."
      ],
      "correct": 4,
      "explanation": "The main idea is inferred from the text as a whole, especially recurring ideas, topic sentences and the author’s purpose.",
      "wrong": [
        "Incorreta. A proposição “Every unknown word must be translated before comprehension is possible.” contraria ou desloca o conceito central cobrado nesta microlição. The main idea is inferred from the text as a whole, especially recurring ideas, topic sentences and the author’s purpose.",
        "Incorreta. A proposição “The title alone determines every correct answer.” contraria ou desloca o conceito central cobrado nesta microlição. The main idea is inferred from the text as a whole, especially recurring ideas, topic sentences and the author’s purpose.",
        "Incorreta. A proposição “Reading comprehension ignores paragraph relationships.” contraria ou desloca o conceito central cobrado nesta microlição. The main idea is inferred from the text as a whole, especially recurring ideas, topic sentences and the author’s purpose.",
        "Incorreta. A proposição “The main idea is always the first noun in the text.” contraria ou desloca o conceito central cobrado nesta microlição. The main idea is inferred from the text as a whole, especially recurring ideas, topic sentences and the author’s purpose.",
        "Correta. The main idea is inferred from the text as a whole, especially recurring ideas, topic sentences and the author’s purpose."
      ],
      "source": "Questão autoral Versa · edital Transpetro 2026.4",
      "board": "CESGRANRIO — estilo de treino",
      "examYear": 2026,
      "feedbackVersion": "1.7.1"
    },
    {
      "id": "trc-q008",
      "lessonId": "trc-l008",
      "topic": "Reference words and cohesion",
      "difficulty": "Básico",
      "statement": "Sobre “Reference words and cohesion”, assinale a alternativa correta.",
      "options": [
        "Reference words always point to the closest word.",
        "“However” expresses consequence.",
        "“Therefore” is normally a contrast marker.",
        "Cohesion has no role in reading comprehension.",
        "A reference word must be linked to an antecedent or idea that is grammatically and semantically compatible with the context."
      ],
      "correct": 4,
      "explanation": "A reference word must be linked to an antecedent or idea that is grammatically and semantically compatible with the context.",
      "wrong": [
        "Incorreta. A proposição “Reference words always point to the closest word.” contraria ou desloca o conceito central cobrado nesta microlição. A reference word must be linked to an antecedent or idea that is grammatically and semantically compatible with the context.",
        "Incorreta. A proposição ““However” expresses consequence.” contraria ou desloca o conceito central cobrado nesta microlição. A reference word must be linked to an antecedent or idea that is grammatically and semantically compatible with the context.",
        "Incorreta. A proposição ““Therefore” is normally a contrast marker.” contraria ou desloca o conceito central cobrado nesta microlição. A reference word must be linked to an antecedent or idea that is grammatically and semantically compatible with the context.",
        "Incorreta. A proposição “Cohesion has no role in reading comprehension.” contraria ou desloca o conceito central cobrado nesta microlição. A reference word must be linked to an antecedent or idea that is grammatically and semantically compatible with the context.",
        "Correta. A reference word must be linked to an antecedent or idea that is grammatically and semantically compatible with the context."
      ],
      "source": "Questão autoral Versa · edital Transpetro 2026.4",
      "board": "CESGRANRIO — estilo de treino",
      "examYear": 2026,
      "feedbackVersion": "1.7.1"
    },
    {
      "id": "trc-q008b",
      "lessonId": "trc-l008",
      "topic": "Reference words and cohesion",
      "difficulty": "Básico",
      "statement": "Em uma questão de interpretação/aplicação sobre “Reference words and cohesion”, qual afirmação deve orientar a análise?",
      "options": [
        "“Therefore” is normally a contrast marker.",
        "Cohesion has no role in reading comprehension.",
        "A reference word must be linked to an antecedent or idea that is grammatically and semantically compatible with the context.",
        "Reference words always point to the closest word.",
        "“However” expresses consequence."
      ],
      "correct": 2,
      "explanation": "A reference word must be linked to an antecedent or idea that is grammatically and semantically compatible with the context.",
      "wrong": [
        "Incorreta. A proposição ““Therefore” is normally a contrast marker.” contraria ou desloca o conceito central cobrado nesta microlição. A reference word must be linked to an antecedent or idea that is grammatically and semantically compatible with the context.",
        "Incorreta. A proposição “Cohesion has no role in reading comprehension.” contraria ou desloca o conceito central cobrado nesta microlição. A reference word must be linked to an antecedent or idea that is grammatically and semantically compatible with the context.",
        "Correta. A reference word must be linked to an antecedent or idea that is grammatically and semantically compatible with the context.",
        "Incorreta. A proposição “Reference words always point to the closest word.” contraria ou desloca o conceito central cobrado nesta microlição. A reference word must be linked to an antecedent or idea that is grammatically and semantically compatible with the context.",
        "Incorreta. A proposição ““However” expresses consequence.” contraria ou desloca o conceito central cobrado nesta microlição. A reference word must be linked to an antecedent or idea that is grammatically and semantically compatible with the context."
      ],
      "source": "Questão autoral Versa · edital Transpetro 2026.4",
      "board": "CESGRANRIO — estilo de treino",
      "examYear": 2026,
      "feedbackVersion": "1.7.1"
    },
    {
      "id": "trc-q009",
      "lessonId": "trc-l009",
      "topic": "Vocabulary, cognates and context clues",
      "difficulty": "Intermediário",
      "statement": "Sobre “Vocabulary, cognates and context clues”, assinale a alternativa correta.",
      "options": [
        "A cognate is always a perfect translation.",
        "“Actually” normally means “atualmente”.",
        "Context clues, word formation and semantic relations can support vocabulary inference even when the exact translation is unknown.",
        "Unknown vocabulary makes all inference impossible.",
        "Technical words must be interpreted without context."
      ],
      "correct": 2,
      "explanation": "Context clues, word formation and semantic relations can support vocabulary inference even when the exact translation is unknown.",
      "wrong": [
        "Incorreta. A proposição “A cognate is always a perfect translation.” contraria ou desloca o conceito central cobrado nesta microlição. Context clues, word formation and semantic relations can support vocabulary inference even when the exact translation is unknown.",
        "Incorreta. A proposição ““Actually” normally means “atualmente”.” contraria ou desloca o conceito central cobrado nesta microlição. Context clues, word formation and semantic relations can support vocabulary inference even when the exact translation is unknown.",
        "Correta. Context clues, word formation and semantic relations can support vocabulary inference even when the exact translation is unknown.",
        "Incorreta. A proposição “Unknown vocabulary makes all inference impossible.” contraria ou desloca o conceito central cobrado nesta microlição. Context clues, word formation and semantic relations can support vocabulary inference even when the exact translation is unknown.",
        "Incorreta. A proposição “Technical words must be interpreted without context.” contraria ou desloca o conceito central cobrado nesta microlição. Context clues, word formation and semantic relations can support vocabulary inference even when the exact translation is unknown."
      ],
      "source": "Questão autoral Versa · edital Transpetro 2026.4",
      "board": "CESGRANRIO — estilo de treino",
      "examYear": 2026,
      "feedbackVersion": "1.7.1"
    },
    {
      "id": "trc-q009b",
      "lessonId": "trc-l009",
      "topic": "Vocabulary, cognates and context clues",
      "difficulty": "Intermediário",
      "statement": "Em uma questão de interpretação/aplicação sobre “Vocabulary, cognates and context clues”, qual afirmação deve orientar a análise?",
      "options": [
        "Context clues, word formation and semantic relations can support vocabulary inference even when the exact translation is unknown.",
        "Unknown vocabulary makes all inference impossible.",
        "Technical words must be interpreted without context.",
        "A cognate is always a perfect translation.",
        "“Actually” normally means “atualmente”."
      ],
      "correct": 0,
      "explanation": "Context clues, word formation and semantic relations can support vocabulary inference even when the exact translation is unknown.",
      "wrong": [
        "Correta. Context clues, word formation and semantic relations can support vocabulary inference even when the exact translation is unknown.",
        "Incorreta. A proposição “Unknown vocabulary makes all inference impossible.” contraria ou desloca o conceito central cobrado nesta microlição. Context clues, word formation and semantic relations can support vocabulary inference even when the exact translation is unknown.",
        "Incorreta. A proposição “Technical words must be interpreted without context.” contraria ou desloca o conceito central cobrado nesta microlição. Context clues, word formation and semantic relations can support vocabulary inference even when the exact translation is unknown.",
        "Incorreta. A proposição “A cognate is always a perfect translation.” contraria ou desloca o conceito central cobrado nesta microlição. Context clues, word formation and semantic relations can support vocabulary inference even when the exact translation is unknown.",
        "Incorreta. A proposição ““Actually” normally means “atualmente”.” contraria ou desloca o conceito central cobrado nesta microlição. Context clues, word formation and semantic relations can support vocabulary inference even when the exact translation is unknown."
      ],
      "source": "Questão autoral Versa · edital Transpetro 2026.4",
      "board": "CESGRANRIO — estilo de treino",
      "examYear": 2026,
      "feedbackVersion": "1.7.1"
    },
    {
      "id": "trc-q010",
      "lessonId": "trc-l010",
      "topic": "Grammar for meaning: tense, modal and voice",
      "difficulty": "Intermediário",
      "statement": "Sobre “Grammar for meaning: tense, modal and voice”, assinale a alternativa correta.",
      "options": [
        "In many technical contexts, “must” expresses strong obligation or requirement; passive voice can foreground the action or affected object.",
        "“Must” expresses only past possibility.",
        "Passive voice always removes the verb tense.",
        "“May” and “must” have identical force.",
        "Present perfect is formed only with the simple past."
      ],
      "correct": 0,
      "explanation": "In many technical contexts, “must” expresses strong obligation or requirement; passive voice can foreground the action or affected object.",
      "wrong": [
        "Correta. In many technical contexts, “must” expresses strong obligation or requirement; passive voice can foreground the action or affected object.",
        "Incorreta. A proposição ““Must” expresses only past possibility.” contraria ou desloca o conceito central cobrado nesta microlição. In many technical contexts, “must” expresses strong obligation or requirement; passive voice can foreground the action or affected object.",
        "Incorreta. A proposição “Passive voice always removes the verb tense.” contraria ou desloca o conceito central cobrado nesta microlição. In many technical contexts, “must” expresses strong obligation or requirement; passive voice can foreground the action or affected object.",
        "Incorreta. A proposição ““May” and “must” have identical force.” contraria ou desloca o conceito central cobrado nesta microlição. In many technical contexts, “must” expresses strong obligation or requirement; passive voice can foreground the action or affected object.",
        "Incorreta. A proposição “Present perfect is formed only with the simple past.” contraria ou desloca o conceito central cobrado nesta microlição. In many technical contexts, “must” expresses strong obligation or requirement; passive voice can foreground the action or affected object."
      ],
      "source": "Questão autoral Versa · edital Transpetro 2026.4",
      "board": "CESGRANRIO — estilo de treino",
      "examYear": 2026,
      "feedbackVersion": "1.7.1"
    },
    {
      "id": "trc-q010b",
      "lessonId": "trc-l010",
      "topic": "Grammar for meaning: tense, modal and voice",
      "difficulty": "Intermediário",
      "statement": "Em uma questão de interpretação/aplicação sobre “Grammar for meaning: tense, modal and voice”, qual afirmação deve orientar a análise?",
      "options": [
        "Passive voice always removes the verb tense.",
        "“May” and “must” have identical force.",
        "Present perfect is formed only with the simple past.",
        "In many technical contexts, “must” expresses strong obligation or requirement; passive voice can foreground the action or affected object.",
        "“Must” expresses only past possibility."
      ],
      "correct": 3,
      "explanation": "In many technical contexts, “must” expresses strong obligation or requirement; passive voice can foreground the action or affected object.",
      "wrong": [
        "Incorreta. A proposição “Passive voice always removes the verb tense.” contraria ou desloca o conceito central cobrado nesta microlição. In many technical contexts, “must” expresses strong obligation or requirement; passive voice can foreground the action or affected object.",
        "Incorreta. A proposição ““May” and “must” have identical force.” contraria ou desloca o conceito central cobrado nesta microlição. In many technical contexts, “must” expresses strong obligation or requirement; passive voice can foreground the action or affected object.",
        "Incorreta. A proposição “Present perfect is formed only with the simple past.” contraria ou desloca o conceito central cobrado nesta microlição. In many technical contexts, “must” expresses strong obligation or requirement; passive voice can foreground the action or affected object.",
        "Correta. In many technical contexts, “must” expresses strong obligation or requirement; passive voice can foreground the action or affected object.",
        "Incorreta. A proposição ““Must” expresses only past possibility.” contraria ou desloca o conceito central cobrado nesta microlição. In many technical contexts, “must” expresses strong obligation or requirement; passive voice can foreground the action or affected object."
      ],
      "source": "Questão autoral Versa · edital Transpetro 2026.4",
      "board": "CESGRANRIO — estilo de treino",
      "examYear": 2026,
      "feedbackVersion": "1.7.1"
    },
    {
      "id": "trc-q011",
      "lessonId": "trc-l011",
      "topic": "Cybersecurity texts: semantic precision",
      "difficulty": "Intermediário",
      "statement": "Sobre “Cybersecurity texts: semantic precision”, assinale a alternativa correta.",
      "options": [
        "A threat is always a software bug.",
        "A vulnerability is the same as the damage already suffered.",
        "Mitigation guarantees that risk becomes zero.",
        "A vulnerability is a weakness; a threat is a circumstance or actor capable of exploiting weaknesses and causing harm.",
        "An incident and a vulnerability are synonyms."
      ],
      "correct": 3,
      "explanation": "A vulnerability is a weakness; a threat is a circumstance or actor capable of exploiting weaknesses and causing harm.",
      "wrong": [
        "Incorreta. A proposição “A threat is always a software bug.” contraria ou desloca o conceito central cobrado nesta microlição. A vulnerability is a weakness; a threat is a circumstance or actor capable of exploiting weaknesses and causing harm.",
        "Incorreta. A proposição “A vulnerability is the same as the damage already suffered.” contraria ou desloca o conceito central cobrado nesta microlição. A vulnerability is a weakness; a threat is a circumstance or actor capable of exploiting weaknesses and causing harm.",
        "Incorreta. A proposição “Mitigation guarantees that risk becomes zero.” contraria ou desloca o conceito central cobrado nesta microlição. A vulnerability is a weakness; a threat is a circumstance or actor capable of exploiting weaknesses and causing harm.",
        "Correta. A vulnerability is a weakness; a threat is a circumstance or actor capable of exploiting weaknesses and causing harm.",
        "Incorreta. A proposição “An incident and a vulnerability are synonyms.” contraria ou desloca o conceito central cobrado nesta microlição. A vulnerability is a weakness; a threat is a circumstance or actor capable of exploiting weaknesses and causing harm."
      ],
      "source": "Questão autoral Versa · edital Transpetro 2026.4",
      "board": "CESGRANRIO — estilo de treino",
      "examYear": 2026,
      "feedbackVersion": "1.7.1"
    },
    {
      "id": "trc-q011b",
      "lessonId": "trc-l011",
      "topic": "Cybersecurity texts: semantic precision",
      "difficulty": "Intermediário",
      "statement": "Em uma questão de interpretação/aplicação sobre “Cybersecurity texts: semantic precision”, qual afirmação deve orientar a análise?",
      "options": [
        "Mitigation guarantees that risk becomes zero.",
        "A vulnerability is a weakness; a threat is a circumstance or actor capable of exploiting weaknesses and causing harm.",
        "An incident and a vulnerability are synonyms.",
        "A threat is always a software bug.",
        "A vulnerability is the same as the damage already suffered."
      ],
      "correct": 1,
      "explanation": "A vulnerability is a weakness; a threat is a circumstance or actor capable of exploiting weaknesses and causing harm.",
      "wrong": [
        "Incorreta. A proposição “Mitigation guarantees that risk becomes zero.” contraria ou desloca o conceito central cobrado nesta microlição. A vulnerability is a weakness; a threat is a circumstance or actor capable of exploiting weaknesses and causing harm.",
        "Correta. A vulnerability is a weakness; a threat is a circumstance or actor capable of exploiting weaknesses and causing harm.",
        "Incorreta. A proposição “An incident and a vulnerability are synonyms.” contraria ou desloca o conceito central cobrado nesta microlição. A vulnerability is a weakness; a threat is a circumstance or actor capable of exploiting weaknesses and causing harm.",
        "Incorreta. A proposição “A threat is always a software bug.” contraria ou desloca o conceito central cobrado nesta microlição. A vulnerability is a weakness; a threat is a circumstance or actor capable of exploiting weaknesses and causing harm.",
        "Incorreta. A proposição “A vulnerability is the same as the damage already suffered.” contraria ou desloca o conceito central cobrado nesta microlição. A vulnerability is a weakness; a threat is a circumstance or actor capable of exploiting weaknesses and causing harm."
      ],
      "source": "Questão autoral Versa · edital Transpetro 2026.4",
      "board": "CESGRANRIO — estilo de treino",
      "examYear": 2026,
      "feedbackVersion": "1.7.1"
    },
    {
      "id": "trc-q012",
      "lessonId": "trc-l012",
      "topic": "Vulnerabilidade, ameaça e ataque",
      "difficulty": "Intermediário",
      "statement": "Sobre “Vulnerabilidade, ameaça e ataque”, assinale a alternativa correta.",
      "options": [
        "Ameaça e vulnerabilidade são sinônimos perfeitos.",
        "Vulnerabilidade é uma fraqueza; ameaça é algo com potencial de causar dano; ataque é a ação deliberada voltada a violar a segurança.",
        "Ataque é apenas a existência de uma falha ainda não explorada.",
        "Vulnerabilidade é necessariamente um incidente confirmado.",
        "Risco independe de contexto, impacto ou probabilidade."
      ],
      "correct": 1,
      "explanation": "Vulnerabilidade é uma fraqueza; ameaça é algo com potencial de causar dano; ataque é a ação deliberada voltada a violar a segurança.",
      "wrong": [
        "Incorreta. A proposição “Ameaça e vulnerabilidade são sinônimos perfeitos.” contraria ou desloca o conceito central cobrado nesta microlição. Vulnerabilidade é uma fraqueza; ameaça é algo com potencial de causar dano; ataque é a ação deliberada voltada a violar a segurança.",
        "Correta. Vulnerabilidade é uma fraqueza; ameaça é algo com potencial de causar dano; ataque é a ação deliberada voltada a violar a segurança.",
        "Incorreta. A proposição “Ataque é apenas a existência de uma falha ainda não explorada.” contraria ou desloca o conceito central cobrado nesta microlição. Vulnerabilidade é uma fraqueza; ameaça é algo com potencial de causar dano; ataque é a ação deliberada voltada a violar a segurança.",
        "Incorreta. A proposição “Vulnerabilidade é necessariamente um incidente confirmado.” contraria ou desloca o conceito central cobrado nesta microlição. Vulnerabilidade é uma fraqueza; ameaça é algo com potencial de causar dano; ataque é a ação deliberada voltada a violar a segurança.",
        "Incorreta. A proposição “Risco independe de contexto, impacto ou probabilidade.” contraria ou desloca o conceito central cobrado nesta microlição. Vulnerabilidade é uma fraqueza; ameaça é algo com potencial de causar dano; ataque é a ação deliberada voltada a violar a segurança."
      ],
      "source": "Questão autoral Versa · edital Transpetro 2026.4",
      "board": "CESGRANRIO — estilo de treino",
      "examYear": 2026,
      "feedbackVersion": "1.7.1"
    },
    {
      "id": "trc-q012b",
      "lessonId": "trc-l012",
      "topic": "Vulnerabilidade, ameaça e ataque",
      "difficulty": "Intermediário",
      "statement": "Sobre “Vulnerabilidade, ameaça e ataque”, qual afirmação sintetiza corretamente um ponto essencial da microlição?",
      "options": [
        "Protocolos de rede não criam superfícies de ataque, pois apenas transportam dados entre sistemas.",
        "Ferramentas ofensivas determinam por si mesmas a finalidade de uma ação, independentemente do modo como são empregadas.",
        "Risco combina incerteza, probabilidade e impacto em um contexto.",
        "Ataques passivos e ativos têm o mesmo efeito sobre integridade e disponibilidade do alvo.",
        "Persistência e escalação de privilégios sempre acontecem antes do acesso inicial."
      ],
      "correct": 2,
      "explanation": "Na microlição, a orientação-chave é: “Risco combina incerteza, probabilidade e impacto em um contexto.”. Vulnerabilidade é uma fraqueza; ameaça é uma circunstância, evento ou agente capaz de causar dano; ataque é a ação intencional que tenta explorar condições do alvo para produzir efeito adverso.",
      "wrong": [
        "Incorreta. A proposição “Protocolos de rede não criam superfícies de ataque, pois apenas transportam dados entre sistemas.” contraria ou desloca o conceito central cobrado nesta microlição. Na microlição, a orientação-chave é: “Risco combina incerteza, probabilidade e impacto em um contexto.”. Vulnerabilidade é uma fraqueza; ameaça é uma circunstância, evento ou agente capaz de causar dano; ataque é a ação intencional que tenta explorar condições do alvo para produzir efeito adverso.",
        "Incorreta. A proposição “Ferramentas ofensivas determinam por si mesmas a finalidade de uma ação, independentemente do modo como são empregadas.” contraria ou desloca o conceito central cobrado nesta microlição. Na microlição, a orientação-chave é: “Risco combina incerteza, probabilidade e impacto em um contexto.”. Vulnerabilidade é uma fraqueza; ameaça é uma circunstância, evento ou agente capaz de causar dano; ataque é a ação intencional que tenta explorar condições do alvo para produzir efeito adverso.",
        "Correta. Na microlição, a orientação-chave é: “Risco combina incerteza, probabilidade e impacto em um contexto.”. Vulnerabilidade é uma fraqueza; ameaça é uma circunstância, evento ou agente capaz de causar dano; ataque é a ação intencional que tenta explorar condições do alvo para produzir efeito adverso.",
        "Incorreta. A proposição “Ataques passivos e ativos têm o mesmo efeito sobre integridade e disponibilidade do alvo.” contraria ou desloca o conceito central cobrado nesta microlição. Na microlição, a orientação-chave é: “Risco combina incerteza, probabilidade e impacto em um contexto.”. Vulnerabilidade é uma fraqueza; ameaça é uma circunstância, evento ou agente capaz de causar dano; ataque é a ação intencional que tenta explorar condições do alvo para produzir efeito adverso.",
        "Incorreta. A proposição “Persistência e escalação de privilégios sempre acontecem antes do acesso inicial.” contraria ou desloca o conceito central cobrado nesta microlição. Na microlição, a orientação-chave é: “Risco combina incerteza, probabilidade e impacto em um contexto.”. Vulnerabilidade é uma fraqueza; ameaça é uma circunstância, evento ou agente capaz de causar dano; ataque é a ação intencional que tenta explorar condições do alvo para produzir efeito adverso."
      ],
      "source": "Questão autoral Versa · edital Transpetro 2026.4",
      "board": "CESGRANRIO — estilo de treino",
      "examYear": 2026,
      "authorialRevision": "v1.7.1",
      "feedbackVersion": "1.7.1"
    },
    {
      "id": "trc-q013",
      "lessonId": "trc-l013",
      "topic": "Ataques passivos: escuta e inferência",
      "difficulty": "Intermediário",
      "statement": "Sobre “Ataques passivos: escuta e inferência”, assinale a alternativa correta.",
      "options": [
        "Ataque passivo exige modificar a mensagem em trânsito.",
        "Negação de serviço é exemplo típico de ataque passivo.",
        "Replay é sempre passivo porque usa dados antigos.",
        "Ataque passivo tem como objetivo obrigatório destruir disponibilidade.",
        "Ataques passivos observam comunicações ou padrões sem modificar diretamente os dados; a confidencialidade é um alvo central."
      ],
      "correct": 4,
      "explanation": "Ataques passivos observam comunicações ou padrões sem modificar diretamente os dados; a confidencialidade é um alvo central.",
      "wrong": [
        "Incorreta. A proposição “Ataque passivo exige modificar a mensagem em trânsito.” contraria ou desloca o conceito central cobrado nesta microlição. Ataques passivos observam comunicações ou padrões sem modificar diretamente os dados; a confidencialidade é um alvo central.",
        "Incorreta. A proposição “Negação de serviço é exemplo típico de ataque passivo.” contraria ou desloca o conceito central cobrado nesta microlição. Ataques passivos observam comunicações ou padrões sem modificar diretamente os dados; a confidencialidade é um alvo central.",
        "Incorreta. A proposição “Replay é sempre passivo porque usa dados antigos.” contraria ou desloca o conceito central cobrado nesta microlição. Ataques passivos observam comunicações ou padrões sem modificar diretamente os dados; a confidencialidade é um alvo central.",
        "Incorreta. A proposição “Ataque passivo tem como objetivo obrigatório destruir disponibilidade.” contraria ou desloca o conceito central cobrado nesta microlição. Ataques passivos observam comunicações ou padrões sem modificar diretamente os dados; a confidencialidade é um alvo central.",
        "Correta. Ataques passivos observam comunicações ou padrões sem modificar diretamente os dados; a confidencialidade é um alvo central."
      ],
      "source": "Questão autoral Versa · edital Transpetro 2026.4",
      "board": "CESGRANRIO — estilo de treino",
      "examYear": 2026,
      "feedbackVersion": "1.7.1"
    },
    {
      "id": "trc-q013b",
      "lessonId": "trc-l013",
      "topic": "Ataques passivos: escuta e inferência",
      "difficulty": "Intermediário",
      "statement": "Ao revisar “Ataques passivos: escuta e inferência” para a CESGRANRIO, qual alternativa deve ser mantida como correta?",
      "options": [
        "Ferramentas ofensivas determinam por si mesmas a finalidade de uma ação, independentemente do modo como são empregadas.",
        "Ataques passivos e ativos têm o mesmo efeito sobre integridade e disponibilidade do alvo.",
        "Persistência e escalação de privilégios sempre acontecem antes do acesso inicial.",
        "Confidencialidade é a propriedade mais diretamente ameaçada.",
        "As fases de um ataque são equivalentes e podem ser analisadas sem considerar objetivo, contexto ou sequência."
      ],
      "correct": 3,
      "explanation": "Na microlição, a orientação-chave é: “Confidencialidade é a propriedade mais diretamente ameaçada.”. Ataques passivos buscam observar informação ou padrões sem alterar diretamente o fluxo.",
      "wrong": [
        "Incorreta. A proposição “Ferramentas ofensivas determinam por si mesmas a finalidade de uma ação, independentemente do modo como são empregadas.” contraria ou desloca o conceito central cobrado nesta microlição. Na microlição, a orientação-chave é: “Confidencialidade é a propriedade mais diretamente ameaçada.”. Ataques passivos buscam observar informação ou padrões sem alterar diretamente o fluxo.",
        "Incorreta. A proposição “Ataques passivos e ativos têm o mesmo efeito sobre integridade e disponibilidade do alvo.” contraria ou desloca o conceito central cobrado nesta microlição. Na microlição, a orientação-chave é: “Confidencialidade é a propriedade mais diretamente ameaçada.”. Ataques passivos buscam observar informação ou padrões sem alterar diretamente o fluxo.",
        "Incorreta. A proposição “Persistência e escalação de privilégios sempre acontecem antes do acesso inicial.” contraria ou desloca o conceito central cobrado nesta microlição. Na microlição, a orientação-chave é: “Confidencialidade é a propriedade mais diretamente ameaçada.”. Ataques passivos buscam observar informação ou padrões sem alterar diretamente o fluxo.",
        "Correta. Na microlição, a orientação-chave é: “Confidencialidade é a propriedade mais diretamente ameaçada.”. Ataques passivos buscam observar informação ou padrões sem alterar diretamente o fluxo.",
        "Incorreta. A proposição “As fases de um ataque são equivalentes e podem ser analisadas sem considerar objetivo, contexto ou sequência.” contraria ou desloca o conceito central cobrado nesta microlição. Na microlição, a orientação-chave é: “Confidencialidade é a propriedade mais diretamente ameaçada.”. Ataques passivos buscam observar informação ou padrões sem alterar diretamente o fluxo."
      ],
      "source": "Questão autoral Versa · edital Transpetro 2026.4",
      "board": "CESGRANRIO — estilo de treino",
      "examYear": 2026,
      "authorialRevision": "v1.7.1",
      "feedbackVersion": "1.7.1"
    },
    {
      "id": "trc-q014",
      "lessonId": "trc-l014",
      "topic": "Ataques ativos: disfarce, repetição e DoS",
      "difficulty": "Intermediário",
      "statement": "Sobre “Ataques ativos: disfarce, repetição e DoS”, assinale a alternativa correta.",
      "options": [
        "Replay é apenas observação silenciosa do tráfego.",
        "DoS visa primariamente aumentar confidencialidade.",
        "Replay é ativo porque o adversário reintroduz uma mensagem ou transação no sistema para produzir um efeito, alterando a dinâmica normal da comunicação.",
        "Masquerade significa somente medir volume de tráfego.",
        "Ataques ativos nunca alteram estado ou disponibilidade."
      ],
      "correct": 2,
      "explanation": "Replay é ativo porque o adversário reintroduz uma mensagem ou transação no sistema para produzir um efeito, alterando a dinâmica normal da comunicação.",
      "wrong": [
        "Incorreta. A proposição “Replay é apenas observação silenciosa do tráfego.” contraria ou desloca o conceito central cobrado nesta microlição. Replay é ativo porque o adversário reintroduz uma mensagem ou transação no sistema para produzir um efeito, alterando a dinâmica normal da comunicação.",
        "Incorreta. A proposição “DoS visa primariamente aumentar confidencialidade.” contraria ou desloca o conceito central cobrado nesta microlição. Replay é ativo porque o adversário reintroduz uma mensagem ou transação no sistema para produzir um efeito, alterando a dinâmica normal da comunicação.",
        "Correta. Replay é ativo porque o adversário reintroduz uma mensagem ou transação no sistema para produzir um efeito, alterando a dinâmica normal da comunicação.",
        "Incorreta. A proposição “Masquerade significa somente medir volume de tráfego.” contraria ou desloca o conceito central cobrado nesta microlição. Replay é ativo porque o adversário reintroduz uma mensagem ou transação no sistema para produzir um efeito, alterando a dinâmica normal da comunicação.",
        "Incorreta. A proposição “Ataques ativos nunca alteram estado ou disponibilidade.” contraria ou desloca o conceito central cobrado nesta microlição. Replay é ativo porque o adversário reintroduz uma mensagem ou transação no sistema para produzir um efeito, alterando a dinâmica normal da comunicação."
      ],
      "source": "Questão autoral Versa · edital Transpetro 2026.4",
      "board": "CESGRANRIO — estilo de treino",
      "examYear": 2026,
      "feedbackVersion": "1.7.1"
    },
    {
      "id": "trc-q014b",
      "lessonId": "trc-l014",
      "topic": "Ataques ativos: disfarce, repetição e DoS",
      "difficulty": "Intermediário",
      "statement": "Para resolver uma questão sobre “Ataques ativos: disfarce, repetição e DoS”, qual orientação conceitual está de acordo com o conteúdo estudado?",
      "options": [
        "Ataques passivos e ativos têm o mesmo efeito sobre integridade e disponibilidade do alvo.",
        "Persistência e escalação de privilégios sempre acontecem antes do acesso inicial.",
        "As fases de um ataque são equivalentes e podem ser analisadas sem considerar objetivo, contexto ou sequência.",
        "Ameaça, vulnerabilidade, técnica, procedimento e ferramenta são termos intercambiáveis em segurança ofensiva.",
        "DoS busca degradar ou impedir disponibilidade."
      ],
      "correct": 4,
      "explanation": "Na microlição, a orientação-chave é: “DoS busca degradar ou impedir disponibilidade.”. Ataques ativos interferem no sistema ou fluxo: podem envolver disfarce/masquerade, replay, modificação, injeção e negação de serviço.",
      "wrong": [
        "Incorreta. A proposição “Ataques passivos e ativos têm o mesmo efeito sobre integridade e disponibilidade do alvo.” contraria ou desloca o conceito central cobrado nesta microlição. Na microlição, a orientação-chave é: “DoS busca degradar ou impedir disponibilidade.”. Ataques ativos interferem no sistema ou fluxo: podem envolver disfarce/masquerade, replay, modificação, injeção e negação de serviço.",
        "Incorreta. A proposição “Persistência e escalação de privilégios sempre acontecem antes do acesso inicial.” contraria ou desloca o conceito central cobrado nesta microlição. Na microlição, a orientação-chave é: “DoS busca degradar ou impedir disponibilidade.”. Ataques ativos interferem no sistema ou fluxo: podem envolver disfarce/masquerade, replay, modificação, injeção e negação de serviço.",
        "Incorreta. A proposição “As fases de um ataque são equivalentes e podem ser analisadas sem considerar objetivo, contexto ou sequência.” contraria ou desloca o conceito central cobrado nesta microlição. Na microlição, a orientação-chave é: “DoS busca degradar ou impedir disponibilidade.”. Ataques ativos interferem no sistema ou fluxo: podem envolver disfarce/masquerade, replay, modificação, injeção e negação de serviço.",
        "Incorreta. A proposição “Ameaça, vulnerabilidade, técnica, procedimento e ferramenta são termos intercambiáveis em segurança ofensiva.” contraria ou desloca o conceito central cobrado nesta microlição. Na microlição, a orientação-chave é: “DoS busca degradar ou impedir disponibilidade.”. Ataques ativos interferem no sistema ou fluxo: podem envolver disfarce/masquerade, replay, modificação, injeção e negação de serviço.",
        "Correta. Na microlição, a orientação-chave é: “DoS busca degradar ou impedir disponibilidade.”. Ataques ativos interferem no sistema ou fluxo: podem envolver disfarce/masquerade, replay, modificação, injeção e negação de serviço."
      ],
      "source": "Questão autoral Versa · edital Transpetro 2026.4",
      "board": "CESGRANRIO — estilo de treino",
      "examYear": 2026,
      "authorialRevision": "v1.7.1",
      "feedbackVersion": "1.7.1"
    },
    {
      "id": "trc-q015",
      "lessonId": "trc-l015",
      "topic": "Etapas do ataque: reconhecimento a acesso",
      "difficulty": "Intermediário",
      "statement": "Sobre “Etapas do ataque: reconhecimento a acesso”, assinale a alternativa correta.",
      "options": [
        "Footprinting reúne contexto; scanning identifica superfícies/serviços; enumeration aprofunda detalhes dos recursos encontrados antes de eventual ganho de acesso.",
        "Enumeration vem obrigatoriamente antes de qualquer reconhecimento.",
        "Scanning significa apagar rastros.",
        "Footprinting é sinônimo de escalada de privilégios.",
        "Ganho de acesso ocorre antes de descobrir o alvo."
      ],
      "correct": 0,
      "explanation": "Footprinting reúne contexto; scanning identifica superfícies/serviços; enumeration aprofunda detalhes dos recursos encontrados antes de eventual ganho de acesso.",
      "wrong": [
        "Correta. Footprinting reúne contexto; scanning identifica superfícies/serviços; enumeration aprofunda detalhes dos recursos encontrados antes de eventual ganho de acesso.",
        "Incorreta. A proposição “Enumeration vem obrigatoriamente antes de qualquer reconhecimento.” contraria ou desloca o conceito central cobrado nesta microlição. Footprinting reúne contexto; scanning identifica superfícies/serviços; enumeration aprofunda detalhes dos recursos encontrados antes de eventual ganho de acesso.",
        "Incorreta. A proposição “Scanning significa apagar rastros.” contraria ou desloca o conceito central cobrado nesta microlição. Footprinting reúne contexto; scanning identifica superfícies/serviços; enumeration aprofunda detalhes dos recursos encontrados antes de eventual ganho de acesso.",
        "Incorreta. A proposição “Footprinting é sinônimo de escalada de privilégios.” contraria ou desloca o conceito central cobrado nesta microlição. Footprinting reúne contexto; scanning identifica superfícies/serviços; enumeration aprofunda detalhes dos recursos encontrados antes de eventual ganho de acesso.",
        "Incorreta. A proposição “Ganho de acesso ocorre antes de descobrir o alvo.” contraria ou desloca o conceito central cobrado nesta microlição. Footprinting reúne contexto; scanning identifica superfícies/serviços; enumeration aprofunda detalhes dos recursos encontrados antes de eventual ganho de acesso."
      ],
      "source": "Questão autoral Versa · edital Transpetro 2026.4",
      "board": "CESGRANRIO — estilo de treino",
      "examYear": 2026,
      "feedbackVersion": "1.7.1"
    },
    {
      "id": "trc-q015b",
      "lessonId": "trc-l015",
      "topic": "Etapas do ataque: reconhecimento a acesso",
      "difficulty": "Intermediário",
      "statement": "No contexto de “Etapas do ataque: reconhecimento a acesso”, assinale a afirmação compatível com a microlição.",
      "options": [
        "As etapas são um modelo de estudo, não uma sequência inevitável.",
        "Persistência e escalação de privilégios sempre acontecem antes do acesso inicial.",
        "As fases de um ataque são equivalentes e podem ser analisadas sem considerar objetivo, contexto ou sequência.",
        "Ameaça, vulnerabilidade, técnica, procedimento e ferramenta são termos intercambiáveis em segurança ofensiva.",
        "Um ataque só existe quando há destruição definitiva de dados; reconhecimento, interceptação e negação de serviço não se enquadram."
      ],
      "correct": 0,
      "explanation": "Na microlição, a orientação-chave é: “As etapas são um modelo de estudo, não uma sequência inevitável.”. O edital usa uma cadeia didática de etapas.",
      "wrong": [
        "Correta. Na microlição, a orientação-chave é: “As etapas são um modelo de estudo, não uma sequência inevitável.”. O edital usa uma cadeia didática de etapas.",
        "Incorreta. A proposição “Persistência e escalação de privilégios sempre acontecem antes do acesso inicial.” contraria ou desloca o conceito central cobrado nesta microlição. Na microlição, a orientação-chave é: “As etapas são um modelo de estudo, não uma sequência inevitável.”. O edital usa uma cadeia didática de etapas.",
        "Incorreta. A proposição “As fases de um ataque são equivalentes e podem ser analisadas sem considerar objetivo, contexto ou sequência.” contraria ou desloca o conceito central cobrado nesta microlição. Na microlição, a orientação-chave é: “As etapas são um modelo de estudo, não uma sequência inevitável.”. O edital usa uma cadeia didática de etapas.",
        "Incorreta. A proposição “Ameaça, vulnerabilidade, técnica, procedimento e ferramenta são termos intercambiáveis em segurança ofensiva.” contraria ou desloca o conceito central cobrado nesta microlição. Na microlição, a orientação-chave é: “As etapas são um modelo de estudo, não uma sequência inevitável.”. O edital usa uma cadeia didática de etapas.",
        "Incorreta. A proposição “Um ataque só existe quando há destruição definitiva de dados; reconhecimento, interceptação e negação de serviço não se enquadram.” contraria ou desloca o conceito central cobrado nesta microlição. Na microlição, a orientação-chave é: “As etapas são um modelo de estudo, não uma sequência inevitável.”. O edital usa uma cadeia didática de etapas."
      ],
      "source": "Questão autoral Versa · edital Transpetro 2026.4",
      "board": "CESGRANRIO — estilo de treino",
      "examYear": 2026,
      "authorialRevision": "v1.7.1",
      "feedbackVersion": "1.7.1"
    },
    {
      "id": "trc-q016",
      "lessonId": "trc-l016",
      "topic": "Pós-acesso: privilégio, persistência, rastros e negação",
      "difficulty": "Intermediário",
      "statement": "Sobre “Pós-acesso: privilégio, persistência, rastros e negação”, assinale a alternativa correta.",
      "options": [
        "Persistência significa exclusivamente apagar logs.",
        "Escalação de privilégios é apenas reconhecimento externo.",
        "Backdoor é sinônimo de firewall defensivo.",
        "Escalação busca permissões maiores; persistência busca manter acesso ao longo do tempo mesmo após mudanças ou reinicializações.",
        "Negação de serviço busca preservar disponibilidade."
      ],
      "correct": 3,
      "explanation": "Escalação busca permissões maiores; persistência busca manter acesso ao longo do tempo mesmo após mudanças ou reinicializações.",
      "wrong": [
        "Incorreta. A proposição “Persistência significa exclusivamente apagar logs.” contraria ou desloca o conceito central cobrado nesta microlição. Escalação busca permissões maiores; persistência busca manter acesso ao longo do tempo mesmo após mudanças ou reinicializações.",
        "Incorreta. A proposição “Escalação de privilégios é apenas reconhecimento externo.” contraria ou desloca o conceito central cobrado nesta microlição. Escalação busca permissões maiores; persistência busca manter acesso ao longo do tempo mesmo após mudanças ou reinicializações.",
        "Incorreta. A proposição “Backdoor é sinônimo de firewall defensivo.” contraria ou desloca o conceito central cobrado nesta microlição. Escalação busca permissões maiores; persistência busca manter acesso ao longo do tempo mesmo após mudanças ou reinicializações.",
        "Correta. Escalação busca permissões maiores; persistência busca manter acesso ao longo do tempo mesmo após mudanças ou reinicializações.",
        "Incorreta. A proposição “Negação de serviço busca preservar disponibilidade.” contraria ou desloca o conceito central cobrado nesta microlição. Escalação busca permissões maiores; persistência busca manter acesso ao longo do tempo mesmo após mudanças ou reinicializações."
      ],
      "source": "Questão autoral Versa · edital Transpetro 2026.4",
      "board": "CESGRANRIO — estilo de treino",
      "examYear": 2026,
      "feedbackVersion": "1.7.1"
    },
    {
      "id": "trc-q016b",
      "lessonId": "trc-l016",
      "topic": "Pós-acesso: privilégio, persistência, rastros e negação",
      "difficulty": "Intermediário",
      "statement": "Sobre “Pós-acesso: privilégio, persistência, rastros e negação”, qual afirmação sintetiza corretamente um ponto essencial da microlição?",
      "options": [
        "As fases de um ataque são equivalentes e podem ser analisadas sem considerar objetivo, contexto ou sequência.",
        "Persistência busca manter presença.",
        "Ameaça, vulnerabilidade, técnica, procedimento e ferramenta são termos intercambiáveis em segurança ofensiva.",
        "Um ataque só existe quando há destruição definitiva de dados; reconhecimento, interceptação e negação de serviço não se enquadram.",
        "Conhecer o comportamento do adversário é dispensável quando a organização possui firewall de perímetro."
      ],
      "correct": 1,
      "explanation": "Na microlição, a orientação-chave é: “Persistência busca manter presença.”. Após o acesso, um adversário pode buscar elevar privilégios, manter persistência por mecanismos de backdoor, reduzir rastros e, em determinados objetivos, provocar indisponibilidade.",
      "wrong": [
        "Incorreta. A proposição “As fases de um ataque são equivalentes e podem ser analisadas sem considerar objetivo, contexto ou sequência.” contraria ou desloca o conceito central cobrado nesta microlição. Na microlição, a orientação-chave é: “Persistência busca manter presença.”. Após o acesso, um adversário pode buscar elevar privilégios, manter persistência por mecanismos de backdoor, reduzir rastros e, em determinados objetivos, provocar indisponibilidade.",
        "Correta. Na microlição, a orientação-chave é: “Persistência busca manter presença.”. Após o acesso, um adversário pode buscar elevar privilégios, manter persistência por mecanismos de backdoor, reduzir rastros e, em determinados objetivos, provocar indisponibilidade.",
        "Incorreta. A proposição “Ameaça, vulnerabilidade, técnica, procedimento e ferramenta são termos intercambiáveis em segurança ofensiva.” contraria ou desloca o conceito central cobrado nesta microlição. Na microlição, a orientação-chave é: “Persistência busca manter presença.”. Após o acesso, um adversário pode buscar elevar privilégios, manter persistência por mecanismos de backdoor, reduzir rastros e, em determinados objetivos, provocar indisponibilidade.",
        "Incorreta. A proposição “Um ataque só existe quando há destruição definitiva de dados; reconhecimento, interceptação e negação de serviço não se enquadram.” contraria ou desloca o conceito central cobrado nesta microlição. Na microlição, a orientação-chave é: “Persistência busca manter presença.”. Após o acesso, um adversário pode buscar elevar privilégios, manter persistência por mecanismos de backdoor, reduzir rastros e, em determinados objetivos, provocar indisponibilidade.",
        "Incorreta. A proposição “Conhecer o comportamento do adversário é dispensável quando a organização possui firewall de perímetro.” contraria ou desloca o conceito central cobrado nesta microlição. Na microlição, a orientação-chave é: “Persistência busca manter presença.”. Após o acesso, um adversário pode buscar elevar privilégios, manter persistência por mecanismos de backdoor, reduzir rastros e, em determinados objetivos, provocar indisponibilidade."
      ],
      "source": "Questão autoral Versa · edital Transpetro 2026.4",
      "board": "CESGRANRIO — estilo de treino",
      "examYear": 2026,
      "authorialRevision": "v1.7.1",
      "feedbackVersion": "1.7.1"
    },
    {
      "id": "trc-q017",
      "lessonId": "trc-l017",
      "topic": "Ataques e abusos em ARP, IP e ICMP",
      "difficulty": "Intermediário",
      "statement": "Sobre “Ataques e abusos em ARP, IP e ICMP”, assinale a alternativa correta.",
      "options": [
        "ARP spoofing altera registros DNS autoritativos.",
        "ARP spoofing cria ou induz associações IP–MAC falsas em uma rede local, podendo desviar tráfego e favorecer MITM.",
        "ICMP é usado para autenticação 802.1X.",
        "IP spoofing significa cifrar o endereço de origem.",
        "ARP opera como protocolo de aplicação web."
      ],
      "correct": 1,
      "explanation": "ARP spoofing cria ou induz associações IP–MAC falsas em uma rede local, podendo desviar tráfego e favorecer MITM.",
      "wrong": [
        "Incorreta. A proposição “ARP spoofing altera registros DNS autoritativos.” contraria ou desloca o conceito central cobrado nesta microlição. ARP spoofing cria ou induz associações IP–MAC falsas em uma rede local, podendo desviar tráfego e favorecer MITM.",
        "Correta. ARP spoofing cria ou induz associações IP–MAC falsas em uma rede local, podendo desviar tráfego e favorecer MITM.",
        "Incorreta. A proposição “ICMP é usado para autenticação 802.1X.” contraria ou desloca o conceito central cobrado nesta microlição. ARP spoofing cria ou induz associações IP–MAC falsas em uma rede local, podendo desviar tráfego e favorecer MITM.",
        "Incorreta. A proposição “IP spoofing significa cifrar o endereço de origem.” contraria ou desloca o conceito central cobrado nesta microlição. ARP spoofing cria ou induz associações IP–MAC falsas em uma rede local, podendo desviar tráfego e favorecer MITM.",
        "Incorreta. A proposição “ARP opera como protocolo de aplicação web.” contraria ou desloca o conceito central cobrado nesta microlição. ARP spoofing cria ou induz associações IP–MAC falsas em uma rede local, podendo desviar tráfego e favorecer MITM."
      ],
      "source": "Questão autoral Versa · edital Transpetro 2026.4",
      "board": "CESGRANRIO — estilo de treino",
      "examYear": 2026,
      "feedbackVersion": "1.7.1"
    },
    {
      "id": "trc-q017b",
      "lessonId": "trc-l017",
      "topic": "Ataques e abusos em ARP, IP e ICMP",
      "difficulty": "Intermediário",
      "statement": "Ao revisar “Ataques e abusos em ARP, IP e ICMP” para a CESGRANRIO, qual alternativa deve ser mantida como correta?",
      "options": [
        "Ameaça, vulnerabilidade, técnica, procedimento e ferramenta são termos intercambiáveis em segurança ofensiva.",
        "Um ataque só existe quando há destruição definitiva de dados; reconhecimento, interceptação e negação de serviço não se enquadram.",
        "ICMP é protocolo de controle/diagnóstico, não de transporte.",
        "Conhecer o comportamento do adversário é dispensável quando a organização possui firewall de perímetro.",
        "Protocolos de rede não criam superfícies de ataque, pois apenas transportam dados entre sistemas."
      ],
      "correct": 2,
      "explanation": "Na microlição, a orientação-chave é: “ICMP é protocolo de controle/diagnóstico, não de transporte.”. ARP resolve endereços IPv4 em redes locais e não possui autenticação nativa; falsificação de associações pode viabilizar MITM.",
      "wrong": [
        "Incorreta. A proposição “Ameaça, vulnerabilidade, técnica, procedimento e ferramenta são termos intercambiáveis em segurança ofensiva.” contraria ou desloca o conceito central cobrado nesta microlição. Na microlição, a orientação-chave é: “ICMP é protocolo de controle/diagnóstico, não de transporte.”. ARP resolve endereços IPv4 em redes locais e não possui autenticação nativa; falsificação de associações pode viabilizar MITM.",
        "Incorreta. A proposição “Um ataque só existe quando há destruição definitiva de dados; reconhecimento, interceptação e negação de serviço não se enquadram.” contraria ou desloca o conceito central cobrado nesta microlição. Na microlição, a orientação-chave é: “ICMP é protocolo de controle/diagnóstico, não de transporte.”. ARP resolve endereços IPv4 em redes locais e não possui autenticação nativa; falsificação de associações pode viabilizar MITM.",
        "Correta. Na microlição, a orientação-chave é: “ICMP é protocolo de controle/diagnóstico, não de transporte.”. ARP resolve endereços IPv4 em redes locais e não possui autenticação nativa; falsificação de associações pode viabilizar MITM.",
        "Incorreta. A proposição “Conhecer o comportamento do adversário é dispensável quando a organização possui firewall de perímetro.” contraria ou desloca o conceito central cobrado nesta microlição. Na microlição, a orientação-chave é: “ICMP é protocolo de controle/diagnóstico, não de transporte.”. ARP resolve endereços IPv4 em redes locais e não possui autenticação nativa; falsificação de associações pode viabilizar MITM.",
        "Incorreta. A proposição “Protocolos de rede não criam superfícies de ataque, pois apenas transportam dados entre sistemas.” contraria ou desloca o conceito central cobrado nesta microlição. Na microlição, a orientação-chave é: “ICMP é protocolo de controle/diagnóstico, não de transporte.”. ARP resolve endereços IPv4 em redes locais e não possui autenticação nativa; falsificação de associações pode viabilizar MITM."
      ],
      "source": "Questão autoral Versa · edital Transpetro 2026.4",
      "board": "CESGRANRIO — estilo de treino",
      "examYear": 2026,
      "authorialRevision": "v1.7.1",
      "feedbackVersion": "1.7.1"
    },
    {
      "id": "trc-q018",
      "lessonId": "trc-l018",
      "topic": "Ataques em UDP e TCP",
      "difficulty": "Intermediário",
      "statement": "Sobre “Ataques em UDP e TCP”, assinale a alternativa correta.",
      "options": [
        "SYN flood depende de criptografia assimétrica.",
        "UDP exige handshake de três vias antes de enviar dados.",
        "TCP não mantém qualquer estado de conexão.",
        "Reflexão é impossível em protocolos sobre UDP.",
        "SYN flood é ativo e busca exaurir recursos associados ao estabelecimento de conexões TCP incompletas."
      ],
      "correct": 4,
      "explanation": "SYN flood é ativo e busca exaurir recursos associados ao estabelecimento de conexões TCP incompletas.",
      "wrong": [
        "Incorreta. A proposição “SYN flood depende de criptografia assimétrica.” contraria ou desloca o conceito central cobrado nesta microlição. SYN flood é ativo e busca exaurir recursos associados ao estabelecimento de conexões TCP incompletas.",
        "Incorreta. A proposição “UDP exige handshake de três vias antes de enviar dados.” contraria ou desloca o conceito central cobrado nesta microlição. SYN flood é ativo e busca exaurir recursos associados ao estabelecimento de conexões TCP incompletas.",
        "Incorreta. A proposição “TCP não mantém qualquer estado de conexão.” contraria ou desloca o conceito central cobrado nesta microlição. SYN flood é ativo e busca exaurir recursos associados ao estabelecimento de conexões TCP incompletas.",
        "Incorreta. A proposição “Reflexão é impossível em protocolos sobre UDP.” contraria ou desloca o conceito central cobrado nesta microlição. SYN flood é ativo e busca exaurir recursos associados ao estabelecimento de conexões TCP incompletas.",
        "Correta. SYN flood é ativo e busca exaurir recursos associados ao estabelecimento de conexões TCP incompletas."
      ],
      "source": "Questão autoral Versa · edital Transpetro 2026.4",
      "board": "CESGRANRIO — estilo de treino",
      "examYear": 2026,
      "feedbackVersion": "1.7.1"
    },
    {
      "id": "trc-q018b",
      "lessonId": "trc-l018",
      "topic": "Ataques em UDP e TCP",
      "difficulty": "Intermediário",
      "statement": "Para resolver uma questão sobre “Ataques em UDP e TCP”, qual orientação conceitual está de acordo com o conteúdo estudado?",
      "options": [
        "Um ataque só existe quando há destruição definitiva de dados; reconhecimento, interceptação e negação de serviço não se enquadram.",
        "Conhecer o comportamento do adversário é dispensável quando a organização possui firewall de perímetro.",
        "Protocolos de rede não criam superfícies de ataque, pois apenas transportam dados entre sistemas.",
        "SYN flood explora conexões parcialmente abertas.",
        "Ferramentas ofensivas determinam por si mesmas a finalidade de uma ação, independentemente do modo como são empregadas."
      ],
      "correct": 3,
      "explanation": "Na microlição, a orientação-chave é: “SYN flood explora conexões parcialmente abertas.”. UDP é não orientado a conexão e pode facilitar certos cenários de reflexão/amplificação; TCP mantém estado e seu handshake pode ser explorado em ataques de exaustão como SYN flood.",
      "wrong": [
        "Incorreta. A proposição “Um ataque só existe quando há destruição definitiva de dados; reconhecimento, interceptação e negação de serviço não se enquadram.” contraria ou desloca o conceito central cobrado nesta microlição. Na microlição, a orientação-chave é: “SYN flood explora conexões parcialmente abertas.”. UDP é não orientado a conexão e pode facilitar certos cenários de reflexão/amplificação; TCP mantém estado e seu handshake pode ser explorado em ataques de exaustão como SYN flood.",
        "Incorreta. A proposição “Conhecer o comportamento do adversário é dispensável quando a organização possui firewall de perímetro.” contraria ou desloca o conceito central cobrado nesta microlição. Na microlição, a orientação-chave é: “SYN flood explora conexões parcialmente abertas.”. UDP é não orientado a conexão e pode facilitar certos cenários de reflexão/amplificação; TCP mantém estado e seu handshake pode ser explorado em ataques de exaustão como SYN flood.",
        "Incorreta. A proposição “Protocolos de rede não criam superfícies de ataque, pois apenas transportam dados entre sistemas.” contraria ou desloca o conceito central cobrado nesta microlição. Na microlição, a orientação-chave é: “SYN flood explora conexões parcialmente abertas.”. UDP é não orientado a conexão e pode facilitar certos cenários de reflexão/amplificação; TCP mantém estado e seu handshake pode ser explorado em ataques de exaustão como SYN flood.",
        "Correta. Na microlição, a orientação-chave é: “SYN flood explora conexões parcialmente abertas.”. UDP é não orientado a conexão e pode facilitar certos cenários de reflexão/amplificação; TCP mantém estado e seu handshake pode ser explorado em ataques de exaustão como SYN flood.",
        "Incorreta. A proposição “Ferramentas ofensivas determinam por si mesmas a finalidade de uma ação, independentemente do modo como são empregadas.” contraria ou desloca o conceito central cobrado nesta microlição. Na microlição, a orientação-chave é: “SYN flood explora conexões parcialmente abertas.”. UDP é não orientado a conexão e pode facilitar certos cenários de reflexão/amplificação; TCP mantém estado e seu handshake pode ser explorado em ataques de exaustão como SYN flood."
      ],
      "source": "Questão autoral Versa · edital Transpetro 2026.4",
      "board": "CESGRANRIO — estilo de treino",
      "examYear": 2026,
      "authorialRevision": "v1.7.1",
      "feedbackVersion": "1.7.1"
    },
    {
      "id": "trc-q019",
      "lessonId": "trc-l019",
      "topic": "DHCP e protocolos de e-mail",
      "difficulty": "Intermediário",
      "statement": "Sobre “DHCP e protocolos de e-mail”, assinale a alternativa correta.",
      "options": [
        "SMTP atribui endereços IP automaticamente.",
        "IMAP substitui ARP na resolução de endereços.",
        "Um Rogue DHCP pode distribuir parâmetros de rede maliciosos, como gateway ou DNS, desviando o tráfego dos clientes.",
        "POP3 é um protocolo de roteamento IP.",
        "DHCP é usado apenas para criptografar e-mail."
      ],
      "correct": 2,
      "explanation": "Um Rogue DHCP pode distribuir parâmetros de rede maliciosos, como gateway ou DNS, desviando o tráfego dos clientes.",
      "wrong": [
        "Incorreta. A proposição “SMTP atribui endereços IP automaticamente.” contraria ou desloca o conceito central cobrado nesta microlição. Um Rogue DHCP pode distribuir parâmetros de rede maliciosos, como gateway ou DNS, desviando o tráfego dos clientes.",
        "Incorreta. A proposição “IMAP substitui ARP na resolução de endereços.” contraria ou desloca o conceito central cobrado nesta microlição. Um Rogue DHCP pode distribuir parâmetros de rede maliciosos, como gateway ou DNS, desviando o tráfego dos clientes.",
        "Correta. Um Rogue DHCP pode distribuir parâmetros de rede maliciosos, como gateway ou DNS, desviando o tráfego dos clientes.",
        "Incorreta. A proposição “POP3 é um protocolo de roteamento IP.” contraria ou desloca o conceito central cobrado nesta microlição. Um Rogue DHCP pode distribuir parâmetros de rede maliciosos, como gateway ou DNS, desviando o tráfego dos clientes.",
        "Incorreta. A proposição “DHCP é usado apenas para criptografar e-mail.” contraria ou desloca o conceito central cobrado nesta microlição. Um Rogue DHCP pode distribuir parâmetros de rede maliciosos, como gateway ou DNS, desviando o tráfego dos clientes."
      ],
      "source": "Questão autoral Versa · edital Transpetro 2026.4",
      "board": "CESGRANRIO — estilo de treino",
      "examYear": 2026,
      "feedbackVersion": "1.7.1"
    },
    {
      "id": "trc-q019b",
      "lessonId": "trc-l019",
      "topic": "DHCP e protocolos de e-mail",
      "difficulty": "Intermediário",
      "statement": "No contexto de “DHCP e protocolos de e-mail”, assinale a afirmação compatível com a microlição.",
      "options": [
        "Conhecer o comportamento do adversário é dispensável quando a organização possui firewall de perímetro.",
        "Protocolos de rede não criam superfícies de ataque, pois apenas transportam dados entre sistemas.",
        "Ferramentas ofensivas determinam por si mesmas a finalidade de uma ação, independentemente do modo como são empregadas.",
        "Ataques passivos e ativos têm o mesmo efeito sobre integridade e disponibilidade do alvo.",
        "SMTP não é protocolo de leitura de caixa postal."
      ],
      "correct": 4,
      "explanation": "Na microlição, a orientação-chave é: “SMTP não é protocolo de leitura de caixa postal.”. DHCP automatiza configuração de rede e pode sofrer atuação de servidor não autorizado; SMTP transporta mensagens, enquanto IMAP e POP3 são usados no acesso a caixas postais, com diferenças de sincronização e armazenamento.",
      "wrong": [
        "Incorreta. A proposição “Conhecer o comportamento do adversário é dispensável quando a organização possui firewall de perímetro.” contraria ou desloca o conceito central cobrado nesta microlição. Na microlição, a orientação-chave é: “SMTP não é protocolo de leitura de caixa postal.”. DHCP automatiza configuração de rede e pode sofrer atuação de servidor não autorizado; SMTP transporta mensagens, enquanto IMAP e POP3 são usados no acesso a caixas postais, com diferenças de sincronização e armazenamento.",
        "Incorreta. A proposição “Protocolos de rede não criam superfícies de ataque, pois apenas transportam dados entre sistemas.” contraria ou desloca o conceito central cobrado nesta microlição. Na microlição, a orientação-chave é: “SMTP não é protocolo de leitura de caixa postal.”. DHCP automatiza configuração de rede e pode sofrer atuação de servidor não autorizado; SMTP transporta mensagens, enquanto IMAP e POP3 são usados no acesso a caixas postais, com diferenças de sincronização e armazenamento.",
        "Incorreta. A proposição “Ferramentas ofensivas determinam por si mesmas a finalidade de uma ação, independentemente do modo como são empregadas.” contraria ou desloca o conceito central cobrado nesta microlição. Na microlição, a orientação-chave é: “SMTP não é protocolo de leitura de caixa postal.”. DHCP automatiza configuração de rede e pode sofrer atuação de servidor não autorizado; SMTP transporta mensagens, enquanto IMAP e POP3 são usados no acesso a caixas postais, com diferenças de sincronização e armazenamento.",
        "Incorreta. A proposição “Ataques passivos e ativos têm o mesmo efeito sobre integridade e disponibilidade do alvo.” contraria ou desloca o conceito central cobrado nesta microlição. Na microlição, a orientação-chave é: “SMTP não é protocolo de leitura de caixa postal.”. DHCP automatiza configuração de rede e pode sofrer atuação de servidor não autorizado; SMTP transporta mensagens, enquanto IMAP e POP3 são usados no acesso a caixas postais, com diferenças de sincronização e armazenamento.",
        "Correta. Na microlição, a orientação-chave é: “SMTP não é protocolo de leitura de caixa postal.”. DHCP automatiza configuração de rede e pode sofrer atuação de servidor não autorizado; SMTP transporta mensagens, enquanto IMAP e POP3 são usados no acesso a caixas postais, com diferenças de sincronização e armazenamento."
      ],
      "source": "Questão autoral Versa · edital Transpetro 2026.4",
      "board": "CESGRANRIO — estilo de treino",
      "examYear": 2026,
      "authorialRevision": "v1.7.1",
      "feedbackVersion": "1.7.1"
    },
    {
      "id": "trc-q020",
      "lessonId": "trc-l020",
      "topic": "HTTP, FTP e SMB como superfícies de ataque",
      "difficulty": "Intermediário",
      "statement": "Sobre “HTTP, FTP e SMB como superfícies de ataque”, assinale a alternativa correta.",
      "options": [
        "Um serviço exposto compõe a superfície de ataque, mas a vulnerabilidade depende de fraquezas específicas de implementação, configuração, autenticação ou versão.",
        "Todo serviço aberto é automaticamente um comprometimento.",
        "SMB é protocolo exclusivo de correio eletrônico.",
        "HTTP sempre cifra o conteúdo sem TLS.",
        "FTP e SFTP são o mesmo protocolo com a mesma pilha."
      ],
      "correct": 0,
      "explanation": "Um serviço exposto compõe a superfície de ataque, mas a vulnerabilidade depende de fraquezas específicas de implementação, configuração, autenticação ou versão.",
      "wrong": [
        "Correta. Um serviço exposto compõe a superfície de ataque, mas a vulnerabilidade depende de fraquezas específicas de implementação, configuração, autenticação ou versão.",
        "Incorreta. A proposição “Todo serviço aberto é automaticamente um comprometimento.” contraria ou desloca o conceito central cobrado nesta microlição. Um serviço exposto compõe a superfície de ataque, mas a vulnerabilidade depende de fraquezas específicas de implementação, configuração, autenticação ou versão.",
        "Incorreta. A proposição “SMB é protocolo exclusivo de correio eletrônico.” contraria ou desloca o conceito central cobrado nesta microlição. Um serviço exposto compõe a superfície de ataque, mas a vulnerabilidade depende de fraquezas específicas de implementação, configuração, autenticação ou versão.",
        "Incorreta. A proposição “HTTP sempre cifra o conteúdo sem TLS.” contraria ou desloca o conceito central cobrado nesta microlição. Um serviço exposto compõe a superfície de ataque, mas a vulnerabilidade depende de fraquezas específicas de implementação, configuração, autenticação ou versão.",
        "Incorreta. A proposição “FTP e SFTP são o mesmo protocolo com a mesma pilha.” contraria ou desloca o conceito central cobrado nesta microlição. Um serviço exposto compõe a superfície de ataque, mas a vulnerabilidade depende de fraquezas específicas de implementação, configuração, autenticação ou versão."
      ],
      "source": "Questão autoral Versa · edital Transpetro 2026.4",
      "board": "CESGRANRIO — estilo de treino",
      "examYear": 2026,
      "feedbackVersion": "1.7.1"
    },
    {
      "id": "trc-q020b",
      "lessonId": "trc-l020",
      "topic": "HTTP, FTP e SMB como superfícies de ataque",
      "difficulty": "Intermediário",
      "statement": "Sobre “HTTP, FTP e SMB como superfícies de ataque”, qual afirmação sintetiza corretamente um ponto essencial da microlição?",
      "options": [
        "SMB exposto indevidamente amplia superfície de ataque.",
        "Protocolos de rede não criam superfícies de ataque, pois apenas transportam dados entre sistemas.",
        "Ferramentas ofensivas determinam por si mesmas a finalidade de uma ação, independentemente do modo como são empregadas.",
        "Ataques passivos e ativos têm o mesmo efeito sobre integridade e disponibilidade do alvo.",
        "Persistência e escalação de privilégios sempre acontecem antes do acesso inicial."
      ],
      "correct": 0,
      "explanation": "Na microlição, a orientação-chave é: “SMB exposto indevidamente amplia superfície de ataque.”. HTTP sustenta aplicações web; FTP transfere arquivos e possui variantes/proteções diferentes; SMB oferece compartilhamento de arquivos e outros serviços em redes.",
      "wrong": [
        "Correta. Na microlição, a orientação-chave é: “SMB exposto indevidamente amplia superfície de ataque.”. HTTP sustenta aplicações web; FTP transfere arquivos e possui variantes/proteções diferentes; SMB oferece compartilhamento de arquivos e outros serviços em redes.",
        "Incorreta. A proposição “Protocolos de rede não criam superfícies de ataque, pois apenas transportam dados entre sistemas.” contraria ou desloca o conceito central cobrado nesta microlição. Na microlição, a orientação-chave é: “SMB exposto indevidamente amplia superfície de ataque.”. HTTP sustenta aplicações web; FTP transfere arquivos e possui variantes/proteções diferentes; SMB oferece compartilhamento de arquivos e outros serviços em redes.",
        "Incorreta. A proposição “Ferramentas ofensivas determinam por si mesmas a finalidade de uma ação, independentemente do modo como são empregadas.” contraria ou desloca o conceito central cobrado nesta microlição. Na microlição, a orientação-chave é: “SMB exposto indevidamente amplia superfície de ataque.”. HTTP sustenta aplicações web; FTP transfere arquivos e possui variantes/proteções diferentes; SMB oferece compartilhamento de arquivos e outros serviços em redes.",
        "Incorreta. A proposição “Ataques passivos e ativos têm o mesmo efeito sobre integridade e disponibilidade do alvo.” contraria ou desloca o conceito central cobrado nesta microlição. Na microlição, a orientação-chave é: “SMB exposto indevidamente amplia superfície de ataque.”. HTTP sustenta aplicações web; FTP transfere arquivos e possui variantes/proteções diferentes; SMB oferece compartilhamento de arquivos e outros serviços em redes.",
        "Incorreta. A proposição “Persistência e escalação de privilégios sempre acontecem antes do acesso inicial.” contraria ou desloca o conceito central cobrado nesta microlição. Na microlição, a orientação-chave é: “SMB exposto indevidamente amplia superfície de ataque.”. HTTP sustenta aplicações web; FTP transfere arquivos e possui variantes/proteções diferentes; SMB oferece compartilhamento de arquivos e outros serviços em redes."
      ],
      "source": "Questão autoral Versa · edital Transpetro 2026.4",
      "board": "CESGRANRIO — estilo de treino",
      "examYear": 2026,
      "authorialRevision": "v1.7.1",
      "feedbackVersion": "1.7.1"
    },
    {
      "id": "trc-q021",
      "lessonId": "trc-l021",
      "topic": "Wi-Fi, Evil Twin, jamming e MITM",
      "difficulty": "Intermediário",
      "statement": "Sobre “Wi-Fi, Evil Twin, jamming e MITM”, assinale a alternativa correta.",
      "options": [
        "Jamming é técnica de assinatura digital.",
        "Sniffing significa necessariamente alterar pacotes.",
        "Spoofing apenas mede potência de sinal.",
        "Rogue AP enfatiza a ausência de autorização; Evil Twin enfatiza a imitação de uma rede legítima para enganar clientes.",
        "SSID tracking é uma forma de cifragem simétrica."
      ],
      "correct": 3,
      "explanation": "Rogue AP enfatiza a ausência de autorização; Evil Twin enfatiza a imitação de uma rede legítima para enganar clientes.",
      "wrong": [
        "Incorreta. A proposição “Jamming é técnica de assinatura digital.” contraria ou desloca o conceito central cobrado nesta microlição. Rogue AP enfatiza a ausência de autorização; Evil Twin enfatiza a imitação de uma rede legítima para enganar clientes.",
        "Incorreta. A proposição “Sniffing significa necessariamente alterar pacotes.” contraria ou desloca o conceito central cobrado nesta microlição. Rogue AP enfatiza a ausência de autorização; Evil Twin enfatiza a imitação de uma rede legítima para enganar clientes.",
        "Incorreta. A proposição “Spoofing apenas mede potência de sinal.” contraria ou desloca o conceito central cobrado nesta microlição. Rogue AP enfatiza a ausência de autorização; Evil Twin enfatiza a imitação de uma rede legítima para enganar clientes.",
        "Correta. Rogue AP enfatiza a ausência de autorização; Evil Twin enfatiza a imitação de uma rede legítima para enganar clientes.",
        "Incorreta. A proposição “SSID tracking é uma forma de cifragem simétrica.” contraria ou desloca o conceito central cobrado nesta microlição. Rogue AP enfatiza a ausência de autorização; Evil Twin enfatiza a imitação de uma rede legítima para enganar clientes."
      ],
      "source": "Questão autoral Versa · edital Transpetro 2026.4",
      "board": "CESGRANRIO — estilo de treino",
      "examYear": 2026,
      "feedbackVersion": "1.7.1"
    },
    {
      "id": "trc-q021b",
      "lessonId": "trc-l021",
      "topic": "Wi-Fi, Evil Twin, jamming e MITM",
      "difficulty": "Intermediário",
      "statement": "Ao revisar “Wi-Fi, Evil Twin, jamming e MITM” para a CESGRANRIO, qual alternativa deve ser mantida como correta?",
      "options": [
        "Ferramentas ofensivas determinam por si mesmas a finalidade de uma ação, independentemente do modo como são empregadas.",
        "Rogue Access Point (Rogue AP) é ponto de acesso não autorizado.",
        "Ataques passivos e ativos têm o mesmo efeito sobre integridade e disponibilidade do alvo.",
        "Persistência e escalação de privilégios sempre acontecem antes do acesso inicial.",
        "As fases de um ataque são equivalentes e podem ser analisadas sem considerar objetivo, contexto ou sequência."
      ],
      "correct": 1,
      "explanation": "Na microlição, a orientação-chave é: “Rogue Access Point (Rogue AP) é ponto de acesso não autorizado.”. Ataques em Wi-Fi podem explorar pontos de acesso não autorizados ou imitadores, interferência de rádio, quadros de gerenciamento ou coleta de identificadores.",
      "wrong": [
        "Incorreta. A proposição “Ferramentas ofensivas determinam por si mesmas a finalidade de uma ação, independentemente do modo como são empregadas.” contraria ou desloca o conceito central cobrado nesta microlição. Na microlição, a orientação-chave é: “Rogue Access Point (Rogue AP) é ponto de acesso não autorizado.”. Ataques em Wi-Fi podem explorar pontos de acesso não autorizados ou imitadores, interferência de rádio, quadros de gerenciamento ou coleta de identificadores.",
        "Correta. Na microlição, a orientação-chave é: “Rogue Access Point (Rogue AP) é ponto de acesso não autorizado.”. Ataques em Wi-Fi podem explorar pontos de acesso não autorizados ou imitadores, interferência de rádio, quadros de gerenciamento ou coleta de identificadores.",
        "Incorreta. A proposição “Ataques passivos e ativos têm o mesmo efeito sobre integridade e disponibilidade do alvo.” contraria ou desloca o conceito central cobrado nesta microlição. Na microlição, a orientação-chave é: “Rogue Access Point (Rogue AP) é ponto de acesso não autorizado.”. Ataques em Wi-Fi podem explorar pontos de acesso não autorizados ou imitadores, interferência de rádio, quadros de gerenciamento ou coleta de identificadores.",
        "Incorreta. A proposição “Persistência e escalação de privilégios sempre acontecem antes do acesso inicial.” contraria ou desloca o conceito central cobrado nesta microlição. Na microlição, a orientação-chave é: “Rogue Access Point (Rogue AP) é ponto de acesso não autorizado.”. Ataques em Wi-Fi podem explorar pontos de acesso não autorizados ou imitadores, interferência de rádio, quadros de gerenciamento ou coleta de identificadores.",
        "Incorreta. A proposição “As fases de um ataque são equivalentes e podem ser analisadas sem considerar objetivo, contexto ou sequência.” contraria ou desloca o conceito central cobrado nesta microlição. Na microlição, a orientação-chave é: “Rogue Access Point (Rogue AP) é ponto de acesso não autorizado.”. Ataques em Wi-Fi podem explorar pontos de acesso não autorizados ou imitadores, interferência de rádio, quadros de gerenciamento ou coleta de identificadores."
      ],
      "source": "Questão autoral Versa · edital Transpetro 2026.4",
      "board": "CESGRANRIO — estilo de treino",
      "examYear": 2026,
      "authorialRevision": "v1.7.1",
      "feedbackVersion": "1.7.1"
    },
    {
      "id": "trc-q022",
      "lessonId": "trc-l022",
      "topic": "Engenharia social: ciclo e técnicas",
      "difficulty": "Intermediário",
      "statement": "Sobre “Engenharia social: ciclo e técnicas”, assinale a alternativa correta.",
      "options": [
        "Spear-phishing depende obrigatoriamente de malware zero-day.",
        "Spear-phishing é direcionado e usa contexto específico do alvo para aumentar credibilidade e chance de ação.",
        "Engenharia social ocorre apenas por telefone.",
        "Phishing é uma técnica de criptografia de e-mail.",
        "Treinamento não possui qualquer efeito sobre risco humano."
      ],
      "correct": 1,
      "explanation": "Spear-phishing é direcionado e usa contexto específico do alvo para aumentar credibilidade e chance de ação.",
      "wrong": [
        "Incorreta. A proposição “Spear-phishing depende obrigatoriamente de malware zero-day.” contraria ou desloca o conceito central cobrado nesta microlição. Spear-phishing é direcionado e usa contexto específico do alvo para aumentar credibilidade e chance de ação.",
        "Correta. Spear-phishing é direcionado e usa contexto específico do alvo para aumentar credibilidade e chance de ação.",
        "Incorreta. A proposição “Engenharia social ocorre apenas por telefone.” contraria ou desloca o conceito central cobrado nesta microlição. Spear-phishing é direcionado e usa contexto específico do alvo para aumentar credibilidade e chance de ação.",
        "Incorreta. A proposição “Phishing é uma técnica de criptografia de e-mail.” contraria ou desloca o conceito central cobrado nesta microlição. Spear-phishing é direcionado e usa contexto específico do alvo para aumentar credibilidade e chance de ação.",
        "Incorreta. A proposição “Treinamento não possui qualquer efeito sobre risco humano.” contraria ou desloca o conceito central cobrado nesta microlição. Spear-phishing é direcionado e usa contexto específico do alvo para aumentar credibilidade e chance de ação."
      ],
      "source": "Questão autoral Versa · edital Transpetro 2026.4",
      "board": "CESGRANRIO — estilo de treino",
      "examYear": 2026,
      "feedbackVersion": "1.7.1"
    },
    {
      "id": "trc-q022b",
      "lessonId": "trc-l022",
      "topic": "Engenharia social: ciclo e técnicas",
      "difficulty": "Intermediário",
      "statement": "Para resolver uma questão sobre “Engenharia social: ciclo e técnicas”, qual orientação conceitual está de acordo com o conteúdo estudado?",
      "options": [
        "Ataques passivos e ativos têm o mesmo efeito sobre integridade e disponibilidade do alvo.",
        "Persistência e escalação de privilégios sempre acontecem antes do acesso inicial.",
        "Pretexting constrói um pretexto plausível.",
        "As fases de um ataque são equivalentes e podem ser analisadas sem considerar objetivo, contexto ou sequência.",
        "Ameaça, vulnerabilidade, técnica, procedimento e ferramenta são termos intercambiáveis em segurança ofensiva."
      ],
      "correct": 2,
      "explanation": "Na microlição, a orientação-chave é: “Pretexting constrói um pretexto plausível.”. Engenharia social explora comportamento e contexto humano.",
      "wrong": [
        "Incorreta. A proposição “Ataques passivos e ativos têm o mesmo efeito sobre integridade e disponibilidade do alvo.” contraria ou desloca o conceito central cobrado nesta microlição. Na microlição, a orientação-chave é: “Pretexting constrói um pretexto plausível.”. Engenharia social explora comportamento e contexto humano.",
        "Incorreta. A proposição “Persistência e escalação de privilégios sempre acontecem antes do acesso inicial.” contraria ou desloca o conceito central cobrado nesta microlição. Na microlição, a orientação-chave é: “Pretexting constrói um pretexto plausível.”. Engenharia social explora comportamento e contexto humano.",
        "Correta. Na microlição, a orientação-chave é: “Pretexting constrói um pretexto plausível.”. Engenharia social explora comportamento e contexto humano.",
        "Incorreta. A proposição “As fases de um ataque são equivalentes e podem ser analisadas sem considerar objetivo, contexto ou sequência.” contraria ou desloca o conceito central cobrado nesta microlição. Na microlição, a orientação-chave é: “Pretexting constrói um pretexto plausível.”. Engenharia social explora comportamento e contexto humano.",
        "Incorreta. A proposição “Ameaça, vulnerabilidade, técnica, procedimento e ferramenta são termos intercambiáveis em segurança ofensiva.” contraria ou desloca o conceito central cobrado nesta microlição. Na microlição, a orientação-chave é: “Pretexting constrói um pretexto plausível.”. Engenharia social explora comportamento e contexto humano."
      ],
      "source": "Questão autoral Versa · edital Transpetro 2026.4",
      "board": "CESGRANRIO — estilo de treino",
      "examYear": 2026,
      "authorialRevision": "v1.7.1",
      "feedbackVersion": "1.7.1"
    },
    {
      "id": "trc-q023",
      "lessonId": "trc-l023",
      "topic": "Vírus, worm, trojan e backdoor",
      "difficulty": "Intermediário",
      "statement": "Sobre “Vírus, worm, trojan e backdoor”, assinale a alternativa correta.",
      "options": [
        "Trojan se replica autonomamente por definição.",
        "Vírus nunca depende de hospedeiro.",
        "Backdoor é mecanismo defensivo de autenticação forte.",
        "Worm é sinônimo de keylogger.",
        "Worm é associado à propagação autônoma entre sistemas ou meios, sem depender necessariamente de anexar-se a um arquivo hospedeiro."
      ],
      "correct": 4,
      "explanation": "Worm é associado à propagação autônoma entre sistemas ou meios, sem depender necessariamente de anexar-se a um arquivo hospedeiro.",
      "wrong": [
        "Incorreta. A proposição “Trojan se replica autonomamente por definição.” contraria ou desloca o conceito central cobrado nesta microlição. Worm é associado à propagação autônoma entre sistemas ou meios, sem depender necessariamente de anexar-se a um arquivo hospedeiro.",
        "Incorreta. A proposição “Vírus nunca depende de hospedeiro.” contraria ou desloca o conceito central cobrado nesta microlição. Worm é associado à propagação autônoma entre sistemas ou meios, sem depender necessariamente de anexar-se a um arquivo hospedeiro.",
        "Incorreta. A proposição “Backdoor é mecanismo defensivo de autenticação forte.” contraria ou desloca o conceito central cobrado nesta microlição. Worm é associado à propagação autônoma entre sistemas ou meios, sem depender necessariamente de anexar-se a um arquivo hospedeiro.",
        "Incorreta. A proposição “Worm é sinônimo de keylogger.” contraria ou desloca o conceito central cobrado nesta microlição. Worm é associado à propagação autônoma entre sistemas ou meios, sem depender necessariamente de anexar-se a um arquivo hospedeiro.",
        "Correta. Worm é associado à propagação autônoma entre sistemas ou meios, sem depender necessariamente de anexar-se a um arquivo hospedeiro."
      ],
      "source": "Questão autoral Versa · edital Transpetro 2026.4",
      "board": "CESGRANRIO — estilo de treino",
      "examYear": 2026,
      "feedbackVersion": "1.7.1"
    },
    {
      "id": "trc-q023b",
      "lessonId": "trc-l023",
      "topic": "Vírus, worm, trojan e backdoor",
      "difficulty": "Intermediário",
      "statement": "No contexto de “Vírus, worm, trojan e backdoor”, assinale a afirmação compatível com a microlição.",
      "options": [
        "Persistência e escalação de privilégios sempre acontecem antes do acesso inicial.",
        "As fases de um ataque são equivalentes e podem ser analisadas sem considerar objetivo, contexto ou sequência.",
        "Ameaça, vulnerabilidade, técnica, procedimento e ferramenta são termos intercambiáveis em segurança ofensiva.",
        "Backdoor pode ser implantado por outros malwares.",
        "Um ataque só existe quando há destruição definitiva de dados; reconhecimento, interceptação e negação de serviço não se enquadram."
      ],
      "correct": 3,
      "explanation": "Na microlição, a orientação-chave é: “Backdoor pode ser implantado por outros malwares.”. Vírus normalmente depende de hospedeiro; worm possui capacidade de propagação autônoma; trojan se apresenta como software legítimo/útil para induzir execução; backdoor cria ou mantém acesso alternativo.",
      "wrong": [
        "Incorreta. A proposição “Persistência e escalação de privilégios sempre acontecem antes do acesso inicial.” contraria ou desloca o conceito central cobrado nesta microlição. Na microlição, a orientação-chave é: “Backdoor pode ser implantado por outros malwares.”. Vírus normalmente depende de hospedeiro; worm possui capacidade de propagação autônoma; trojan se apresenta como software legítimo/útil para induzir execução; backdoor cria ou mantém acesso alternativo.",
        "Incorreta. A proposição “As fases de um ataque são equivalentes e podem ser analisadas sem considerar objetivo, contexto ou sequência.” contraria ou desloca o conceito central cobrado nesta microlição. Na microlição, a orientação-chave é: “Backdoor pode ser implantado por outros malwares.”. Vírus normalmente depende de hospedeiro; worm possui capacidade de propagação autônoma; trojan se apresenta como software legítimo/útil para induzir execução; backdoor cria ou mantém acesso alternativo.",
        "Incorreta. A proposição “Ameaça, vulnerabilidade, técnica, procedimento e ferramenta são termos intercambiáveis em segurança ofensiva.” contraria ou desloca o conceito central cobrado nesta microlição. Na microlição, a orientação-chave é: “Backdoor pode ser implantado por outros malwares.”. Vírus normalmente depende de hospedeiro; worm possui capacidade de propagação autônoma; trojan se apresenta como software legítimo/útil para induzir execução; backdoor cria ou mantém acesso alternativo.",
        "Correta. Na microlição, a orientação-chave é: “Backdoor pode ser implantado por outros malwares.”. Vírus normalmente depende de hospedeiro; worm possui capacidade de propagação autônoma; trojan se apresenta como software legítimo/útil para induzir execução; backdoor cria ou mantém acesso alternativo.",
        "Incorreta. A proposição “Um ataque só existe quando há destruição definitiva de dados; reconhecimento, interceptação e negação de serviço não se enquadram.” contraria ou desloca o conceito central cobrado nesta microlição. Na microlição, a orientação-chave é: “Backdoor pode ser implantado por outros malwares.”. Vírus normalmente depende de hospedeiro; worm possui capacidade de propagação autônoma; trojan se apresenta como software legítimo/útil para induzir execução; backdoor cria ou mantém acesso alternativo."
      ],
      "source": "Questão autoral Versa · edital Transpetro 2026.4",
      "board": "CESGRANRIO — estilo de treino",
      "examYear": 2026,
      "authorialRevision": "v1.7.1",
      "feedbackVersion": "1.7.1"
    },
    {
      "id": "trc-q024",
      "lessonId": "trc-l024",
      "topic": "Keylogger, screenlogger, rootkit, bot e loaders",
      "difficulty": "Intermediário",
      "statement": "Sobre “Keylogger, screenlogger, rootkit, bot e loaders”, assinale a alternativa correta.",
      "options": [
        "Rootkit é ferramenta de backup.",
        "Botnet é um único arquivo de log.",
        "Keylogger registra entradas de teclado; screenlogger registra conteúdo visual da tela.",
        "Downloader tem como objetivo obrigatório cifrar arquivos da vítima.",
        "Keylogger captura exclusivamente pacotes de rede."
      ],
      "correct": 2,
      "explanation": "Keylogger registra entradas de teclado; screenlogger registra conteúdo visual da tela.",
      "wrong": [
        "Incorreta. A proposição “Rootkit é ferramenta de backup.” contraria ou desloca o conceito central cobrado nesta microlição. Keylogger registra entradas de teclado; screenlogger registra conteúdo visual da tela.",
        "Incorreta. A proposição “Botnet é um único arquivo de log.” contraria ou desloca o conceito central cobrado nesta microlição. Keylogger registra entradas de teclado; screenlogger registra conteúdo visual da tela.",
        "Correta. Keylogger registra entradas de teclado; screenlogger registra conteúdo visual da tela.",
        "Incorreta. A proposição “Downloader tem como objetivo obrigatório cifrar arquivos da vítima.” contraria ou desloca o conceito central cobrado nesta microlição. Keylogger registra entradas de teclado; screenlogger registra conteúdo visual da tela.",
        "Incorreta. A proposição “Keylogger captura exclusivamente pacotes de rede.” contraria ou desloca o conceito central cobrado nesta microlição. Keylogger registra entradas de teclado; screenlogger registra conteúdo visual da tela."
      ],
      "source": "Questão autoral Versa · edital Transpetro 2026.4",
      "board": "CESGRANRIO — estilo de treino",
      "examYear": 2026,
      "feedbackVersion": "1.7.1"
    },
    {
      "id": "trc-q024b",
      "lessonId": "trc-l024",
      "topic": "Keylogger, screenlogger, rootkit, bot e loaders",
      "difficulty": "Intermediário",
      "statement": "Sobre “Keylogger, screenlogger, rootkit, bot e loaders”, qual afirmação sintetiza corretamente um ponto essencial da microlição?",
      "options": [
        "As fases de um ataque são equivalentes e podem ser analisadas sem considerar objetivo, contexto ou sequência.",
        "Ameaça, vulnerabilidade, técnica, procedimento e ferramenta são termos intercambiáveis em segurança ofensiva.",
        "Um ataque só existe quando há destruição definitiva de dados; reconhecimento, interceptação e negação de serviço não se enquadram.",
        "Conhecer o comportamento do adversário é dispensável quando a organização possui firewall de perímetro.",
        "Spyware é categoria de monitoramento."
      ],
      "correct": 4,
      "explanation": "Na microlição, a orientação-chave é: “Spyware é categoria de monitoramento.”. Keylogger registra entradas de teclado; screenlogger captura telas; rootkit busca ocultar presença ou manter controle privilegiado; bot recebe comandos; botnet agrega máquinas controladas; injector/downloader/flooder descrevem funções específicas de carga, obtenção ou geração de tráfego.",
      "wrong": [
        "Incorreta. A proposição “As fases de um ataque são equivalentes e podem ser analisadas sem considerar objetivo, contexto ou sequência.” contraria ou desloca o conceito central cobrado nesta microlição. Na microlição, a orientação-chave é: “Spyware é categoria de monitoramento.”. Keylogger registra entradas de teclado; screenlogger captura telas; rootkit busca ocultar presença ou manter controle privilegiado; bot recebe comandos; botnet agrega máquinas controladas; injector/downloader/flooder descrevem funções específicas de carga, obtenção ou geração de tráfego.",
        "Incorreta. A proposição “Ameaça, vulnerabilidade, técnica, procedimento e ferramenta são termos intercambiáveis em segurança ofensiva.” contraria ou desloca o conceito central cobrado nesta microlição. Na microlição, a orientação-chave é: “Spyware é categoria de monitoramento.”. Keylogger registra entradas de teclado; screenlogger captura telas; rootkit busca ocultar presença ou manter controle privilegiado; bot recebe comandos; botnet agrega máquinas controladas; injector/downloader/flooder descrevem funções específicas de carga, obtenção ou geração de tráfego.",
        "Incorreta. A proposição “Um ataque só existe quando há destruição definitiva de dados; reconhecimento, interceptação e negação de serviço não se enquadram.” contraria ou desloca o conceito central cobrado nesta microlição. Na microlição, a orientação-chave é: “Spyware é categoria de monitoramento.”. Keylogger registra entradas de teclado; screenlogger captura telas; rootkit busca ocultar presença ou manter controle privilegiado; bot recebe comandos; botnet agrega máquinas controladas; injector/downloader/flooder descrevem funções específicas de carga, obtenção ou geração de tráfego.",
        "Incorreta. A proposição “Conhecer o comportamento do adversário é dispensável quando a organização possui firewall de perímetro.” contraria ou desloca o conceito central cobrado nesta microlição. Na microlição, a orientação-chave é: “Spyware é categoria de monitoramento.”. Keylogger registra entradas de teclado; screenlogger captura telas; rootkit busca ocultar presença ou manter controle privilegiado; bot recebe comandos; botnet agrega máquinas controladas; injector/downloader/flooder descrevem funções específicas de carga, obtenção ou geração de tráfego.",
        "Correta. Na microlição, a orientação-chave é: “Spyware é categoria de monitoramento.”. Keylogger registra entradas de teclado; screenlogger captura telas; rootkit busca ocultar presença ou manter controle privilegiado; bot recebe comandos; botnet agrega máquinas controladas; injector/downloader/flooder descrevem funções específicas de carga, obtenção ou geração de tráfego."
      ],
      "source": "Questão autoral Versa · edital Transpetro 2026.4",
      "board": "CESGRANRIO — estilo de treino",
      "examYear": 2026,
      "authorialRevision": "v1.7.1",
      "feedbackVersion": "1.7.1"
    },
    {
      "id": "trc-q025",
      "lessonId": "trc-l025",
      "topic": "Ransomware, cryptojacking, formjacking e exploits",
      "difficulty": "Intermediário",
      "statement": "Sobre “Ransomware, cryptojacking, formjacking e exploits”, assinale a alternativa correta.",
      "options": [
        "Vulnerabilidade é a fraqueza; exploit é a técnica ou código empregado para tirar proveito dela.",
        "Cryptojacking significa sequestrar arquivos e exigir resgate.",
        "Formjacking é um tipo de redundância de armazenamento.",
        "Exploit é sempre um patch de correção.",
        "Ransomware não pode afetar disponibilidade."
      ],
      "correct": 0,
      "explanation": "Vulnerabilidade é a fraqueza; exploit é a técnica ou código empregado para tirar proveito dela.",
      "wrong": [
        "Correta. Vulnerabilidade é a fraqueza; exploit é a técnica ou código empregado para tirar proveito dela.",
        "Incorreta. A proposição “Cryptojacking significa sequestrar arquivos e exigir resgate.” contraria ou desloca o conceito central cobrado nesta microlição. Vulnerabilidade é a fraqueza; exploit é a técnica ou código empregado para tirar proveito dela.",
        "Incorreta. A proposição “Formjacking é um tipo de redundância de armazenamento.” contraria ou desloca o conceito central cobrado nesta microlição. Vulnerabilidade é a fraqueza; exploit é a técnica ou código empregado para tirar proveito dela.",
        "Incorreta. A proposição “Exploit é sempre um patch de correção.” contraria ou desloca o conceito central cobrado nesta microlição. Vulnerabilidade é a fraqueza; exploit é a técnica ou código empregado para tirar proveito dela.",
        "Incorreta. A proposição “Ransomware não pode afetar disponibilidade.” contraria ou desloca o conceito central cobrado nesta microlição. Vulnerabilidade é a fraqueza; exploit é a técnica ou código empregado para tirar proveito dela."
      ],
      "source": "Questão autoral Versa · edital Transpetro 2026.4",
      "board": "CESGRANRIO — estilo de treino",
      "examYear": 2026,
      "feedbackVersion": "1.7.1"
    },
    {
      "id": "trc-q025b",
      "lessonId": "trc-l025",
      "topic": "Ransomware, cryptojacking, formjacking e exploits",
      "difficulty": "Intermediário",
      "statement": "Ao revisar “Ransomware, cryptojacking, formjacking e exploits” para a CESGRANRIO, qual alternativa deve ser mantida como correta?",
      "options": [
        "Ransomware afeta fortemente disponibilidade e pode envolver exfiltração.",
        "Ameaça, vulnerabilidade, técnica, procedimento e ferramenta são termos intercambiáveis em segurança ofensiva.",
        "Um ataque só existe quando há destruição definitiva de dados; reconhecimento, interceptação e negação de serviço não se enquadram.",
        "Conhecer o comportamento do adversário é dispensável quando a organização possui firewall de perímetro.",
        "Protocolos de rede não criam superfícies de ataque, pois apenas transportam dados entre sistemas."
      ],
      "correct": 0,
      "explanation": "Na microlição, a orientação-chave é: “Ransomware afeta fortemente disponibilidade e pode envolver exfiltração.”. Ransomware bloqueia/cifra recursos para extorsão; cryptojacking usa recursos da vítima para mineração; formjacking injeta código em formulários para capturar dados; exploit é código/técnica que aciona uma vulnerabilidade.",
      "wrong": [
        "Correta. Na microlição, a orientação-chave é: “Ransomware afeta fortemente disponibilidade e pode envolver exfiltração.”. Ransomware bloqueia/cifra recursos para extorsão; cryptojacking usa recursos da vítima para mineração; formjacking injeta código em formulários para capturar dados; exploit é código/técnica que aciona uma vulnerabilidade.",
        "Incorreta. A proposição “Ameaça, vulnerabilidade, técnica, procedimento e ferramenta são termos intercambiáveis em segurança ofensiva.” contraria ou desloca o conceito central cobrado nesta microlição. Na microlição, a orientação-chave é: “Ransomware afeta fortemente disponibilidade e pode envolver exfiltração.”. Ransomware bloqueia/cifra recursos para extorsão; cryptojacking usa recursos da vítima para mineração; formjacking injeta código em formulários para capturar dados; exploit é código/técnica que aciona uma vulnerabilidade.",
        "Incorreta. A proposição “Um ataque só existe quando há destruição definitiva de dados; reconhecimento, interceptação e negação de serviço não se enquadram.” contraria ou desloca o conceito central cobrado nesta microlição. Na microlição, a orientação-chave é: “Ransomware afeta fortemente disponibilidade e pode envolver exfiltração.”. Ransomware bloqueia/cifra recursos para extorsão; cryptojacking usa recursos da vítima para mineração; formjacking injeta código em formulários para capturar dados; exploit é código/técnica que aciona uma vulnerabilidade.",
        "Incorreta. A proposição “Conhecer o comportamento do adversário é dispensável quando a organização possui firewall de perímetro.” contraria ou desloca o conceito central cobrado nesta microlição. Na microlição, a orientação-chave é: “Ransomware afeta fortemente disponibilidade e pode envolver exfiltração.”. Ransomware bloqueia/cifra recursos para extorsão; cryptojacking usa recursos da vítima para mineração; formjacking injeta código em formulários para capturar dados; exploit é código/técnica que aciona uma vulnerabilidade.",
        "Incorreta. A proposição “Protocolos de rede não criam superfícies de ataque, pois apenas transportam dados entre sistemas.” contraria ou desloca o conceito central cobrado nesta microlição. Na microlição, a orientação-chave é: “Ransomware afeta fortemente disponibilidade e pode envolver exfiltração.”. Ransomware bloqueia/cifra recursos para extorsão; cryptojacking usa recursos da vítima para mineração; formjacking injeta código em formulários para capturar dados; exploit é código/técnica que aciona uma vulnerabilidade."
      ],
      "source": "Questão autoral Versa · edital Transpetro 2026.4",
      "board": "CESGRANRIO — estilo de treino",
      "examYear": 2026,
      "authorialRevision": "v1.7.1",
      "feedbackVersion": "1.7.1"
    },
    {
      "id": "trc-q026",
      "lessonId": "trc-l026",
      "topic": "MITRE ATT&CK: matrizes e táticas",
      "difficulty": "Intermediário",
      "statement": "Sobre “MITRE ATT&CK: matrizes e táticas”, assinale a alternativa correta.",
      "options": [
        "Tática é o nome obrigatório do malware usado.",
        "Matriz contém apenas vulnerabilidades CVE.",
        "Tática é sinônimo de controle ISO.",
        "Tática representa o objetivo do adversário — a razão pela qual uma técnica ou sub-técnica é executada.",
        "ATT&CK descreve apenas redes Wi-Fi."
      ],
      "correct": 3,
      "explanation": "Tática representa o objetivo do adversário — a razão pela qual uma técnica ou sub-técnica é executada.",
      "wrong": [
        "Incorreta. A proposição “Tática é o nome obrigatório do malware usado.” contraria ou desloca o conceito central cobrado nesta microlição. Tática representa o objetivo do adversário — a razão pela qual uma técnica ou sub-técnica é executada.",
        "Incorreta. A proposição “Matriz contém apenas vulnerabilidades CVE.” contraria ou desloca o conceito central cobrado nesta microlição. Tática representa o objetivo do adversário — a razão pela qual uma técnica ou sub-técnica é executada.",
        "Incorreta. A proposição “Tática é sinônimo de controle ISO.” contraria ou desloca o conceito central cobrado nesta microlição. Tática representa o objetivo do adversário — a razão pela qual uma técnica ou sub-técnica é executada.",
        "Correta. Tática representa o objetivo do adversário — a razão pela qual uma técnica ou sub-técnica é executada.",
        "Incorreta. A proposição “ATT&CK descreve apenas redes Wi-Fi.” contraria ou desloca o conceito central cobrado nesta microlição. Tática representa o objetivo do adversário — a razão pela qual uma técnica ou sub-técnica é executada."
      ],
      "source": "Questão autoral Versa · edital Transpetro 2026.4",
      "board": "CESGRANRIO — estilo de treino",
      "examYear": 2026,
      "feedbackVersion": "1.7.1"
    },
    {
      "id": "trc-q026b",
      "lessonId": "trc-l026",
      "topic": "MITRE ATT&CK: matrizes e táticas",
      "difficulty": "Intermediário",
      "statement": "Para resolver uma questão sobre “MITRE ATT&CK: matrizes e táticas”, qual orientação conceitual está de acordo com o conteúdo estudado?",
      "options": [
        "Um ataque só existe quando há destruição definitiva de dados; reconhecimento, interceptação e negação de serviço não se enquadram.",
        "A base apoia threat modeling, detecção e avaliação de cobertura.",
        "Conhecer o comportamento do adversário é dispensável quando a organização possui firewall de perímetro.",
        "Protocolos de rede não criam superfícies de ataque, pois apenas transportam dados entre sistemas.",
        "Ferramentas ofensivas determinam por si mesmas a finalidade de uma ação, independentemente do modo como são empregadas."
      ],
      "correct": 1,
      "explanation": "Na microlição, a orientação-chave é: “A base apoia threat modeling, detecção e avaliação de cobertura.”. MITRE ATT&CK é uma base de conhecimento de comportamentos adversários observados.",
      "wrong": [
        "Incorreta. A proposição “Um ataque só existe quando há destruição definitiva de dados; reconhecimento, interceptação e negação de serviço não se enquadram.” contraria ou desloca o conceito central cobrado nesta microlição. Na microlição, a orientação-chave é: “A base apoia threat modeling, detecção e avaliação de cobertura.”. MITRE ATT&CK é uma base de conhecimento de comportamentos adversários observados.",
        "Correta. Na microlição, a orientação-chave é: “A base apoia threat modeling, detecção e avaliação de cobertura.”. MITRE ATT&CK é uma base de conhecimento de comportamentos adversários observados.",
        "Incorreta. A proposição “Conhecer o comportamento do adversário é dispensável quando a organização possui firewall de perímetro.” contraria ou desloca o conceito central cobrado nesta microlição. Na microlição, a orientação-chave é: “A base apoia threat modeling, detecção e avaliação de cobertura.”. MITRE ATT&CK é uma base de conhecimento de comportamentos adversários observados.",
        "Incorreta. A proposição “Protocolos de rede não criam superfícies de ataque, pois apenas transportam dados entre sistemas.” contraria ou desloca o conceito central cobrado nesta microlição. Na microlição, a orientação-chave é: “A base apoia threat modeling, detecção e avaliação de cobertura.”. MITRE ATT&CK é uma base de conhecimento de comportamentos adversários observados.",
        "Incorreta. A proposição “Ferramentas ofensivas determinam por si mesmas a finalidade de uma ação, independentemente do modo como são empregadas.” contraria ou desloca o conceito central cobrado nesta microlição. Na microlição, a orientação-chave é: “A base apoia threat modeling, detecção e avaliação de cobertura.”. MITRE ATT&CK é uma base de conhecimento de comportamentos adversários observados."
      ],
      "source": "Questão autoral Versa · edital Transpetro 2026.4",
      "board": "CESGRANRIO — estilo de treino",
      "examYear": 2026,
      "authorialRevision": "v1.7.1",
      "feedbackVersion": "1.7.1"
    },
    {
      "id": "trc-q027",
      "lessonId": "trc-l027",
      "topic": "ATT&CK: técnicas, procedimentos e mitigações",
      "difficulty": "Intermediário",
      "statement": "Sobre “ATT&CK: técnicas, procedimentos e mitigações”, assinale a alternativa correta.",
      "options": [
        "Procedimento é sempre mais abstrato que a tática.",
        "Técnica descreve um método adversário; procedimento é uma implementação concreta daquela técnica em determinado contexto.",
        "Mitigação é o objetivo ofensivo do adversário.",
        "Técnica é sinônimo de CVE.",
        "ATT&CK não possui sub-técnicas."
      ],
      "correct": 1,
      "explanation": "Técnica descreve um método adversário; procedimento é uma implementação concreta daquela técnica em determinado contexto.",
      "wrong": [
        "Incorreta. A proposição “Procedimento é sempre mais abstrato que a tática.” contraria ou desloca o conceito central cobrado nesta microlição. Técnica descreve um método adversário; procedimento é uma implementação concreta daquela técnica em determinado contexto.",
        "Correta. Técnica descreve um método adversário; procedimento é uma implementação concreta daquela técnica em determinado contexto.",
        "Incorreta. A proposição “Mitigação é o objetivo ofensivo do adversário.” contraria ou desloca o conceito central cobrado nesta microlição. Técnica descreve um método adversário; procedimento é uma implementação concreta daquela técnica em determinado contexto.",
        "Incorreta. A proposição “Técnica é sinônimo de CVE.” contraria ou desloca o conceito central cobrado nesta microlição. Técnica descreve um método adversário; procedimento é uma implementação concreta daquela técnica em determinado contexto.",
        "Incorreta. A proposição “ATT&CK não possui sub-técnicas.” contraria ou desloca o conceito central cobrado nesta microlição. Técnica descreve um método adversário; procedimento é uma implementação concreta daquela técnica em determinado contexto."
      ],
      "source": "Questão autoral Versa · edital Transpetro 2026.4",
      "board": "CESGRANRIO — estilo de treino",
      "examYear": 2026,
      "feedbackVersion": "1.7.1"
    },
    {
      "id": "trc-q027b",
      "lessonId": "trc-l027",
      "topic": "ATT&CK: técnicas, procedimentos e mitigações",
      "difficulty": "Intermediário",
      "statement": "No contexto de “ATT&CK: técnicas, procedimentos e mitigações”, assinale a afirmação compatível com a microlição.",
      "options": [
        "Conhecer o comportamento do adversário é dispensável quando a organização possui firewall de perímetro.",
        "Protocolos de rede não criam superfícies de ataque, pois apenas transportam dados entre sistemas.",
        "Uma técnica pode ter sub-técnicas.",
        "Ferramentas ofensivas determinam por si mesmas a finalidade de uma ação, independentemente do modo como são empregadas.",
        "Ataques passivos e ativos têm o mesmo efeito sobre integridade e disponibilidade do alvo."
      ],
      "correct": 2,
      "explanation": "Na microlição, a orientação-chave é: “Uma técnica pode ter sub-técnicas.”. Técnicas descrevem como adversários alcançam objetivos; procedimentos são implementações concretas observadas; mitigações representam classes de medidas que podem reduzir comportamento ou impacto.",
      "wrong": [
        "Incorreta. A proposição “Conhecer o comportamento do adversário é dispensável quando a organização possui firewall de perímetro.” contraria ou desloca o conceito central cobrado nesta microlição. Na microlição, a orientação-chave é: “Uma técnica pode ter sub-técnicas.”. Técnicas descrevem como adversários alcançam objetivos; procedimentos são implementações concretas observadas; mitigações representam classes de medidas que podem reduzir comportamento ou impacto.",
        "Incorreta. A proposição “Protocolos de rede não criam superfícies de ataque, pois apenas transportam dados entre sistemas.” contraria ou desloca o conceito central cobrado nesta microlição. Na microlição, a orientação-chave é: “Uma técnica pode ter sub-técnicas.”. Técnicas descrevem como adversários alcançam objetivos; procedimentos são implementações concretas observadas; mitigações representam classes de medidas que podem reduzir comportamento ou impacto.",
        "Correta. Na microlição, a orientação-chave é: “Uma técnica pode ter sub-técnicas.”. Técnicas descrevem como adversários alcançam objetivos; procedimentos são implementações concretas observadas; mitigações representam classes de medidas que podem reduzir comportamento ou impacto.",
        "Incorreta. A proposição “Ferramentas ofensivas determinam por si mesmas a finalidade de uma ação, independentemente do modo como são empregadas.” contraria ou desloca o conceito central cobrado nesta microlição. Na microlição, a orientação-chave é: “Uma técnica pode ter sub-técnicas.”. Técnicas descrevem como adversários alcançam objetivos; procedimentos são implementações concretas observadas; mitigações representam classes de medidas que podem reduzir comportamento ou impacto.",
        "Incorreta. A proposição “Ataques passivos e ativos têm o mesmo efeito sobre integridade e disponibilidade do alvo.” contraria ou desloca o conceito central cobrado nesta microlição. Na microlição, a orientação-chave é: “Uma técnica pode ter sub-técnicas.”. Técnicas descrevem como adversários alcançam objetivos; procedimentos são implementações concretas observadas; mitigações representam classes de medidas que podem reduzir comportamento ou impacto."
      ],
      "source": "Questão autoral Versa · edital Transpetro 2026.4",
      "board": "CESGRANRIO — estilo de treino",
      "examYear": 2026,
      "authorialRevision": "v1.7.1",
      "feedbackVersion": "1.7.1"
    },
    {
      "id": "trc-q028",
      "lessonId": "trc-l028",
      "topic": "MITRE CAPEC: padrões de ataque",
      "difficulty": "Intermediário",
      "statement": "Sobre “MITRE CAPEC: padrões de ataque”, assinale a alternativa correta.",
      "options": [
        "CAPEC é um banco de certificados digitais.",
        "CWE contém apenas endereços IP maliciosos.",
        "CAPEC substitui a legislação de proteção de dados.",
        "CVE é uma matriz de táticas adversárias.",
        "CAPEC cataloga padrões de ataque; CWE cataloga classes de fraquezas que podem existir em software e hardware."
      ],
      "correct": 4,
      "explanation": "CAPEC cataloga padrões de ataque; CWE cataloga classes de fraquezas que podem existir em software e hardware.",
      "wrong": [
        "Incorreta. A proposição “CAPEC é um banco de certificados digitais.” contraria ou desloca o conceito central cobrado nesta microlição. CAPEC cataloga padrões de ataque; CWE cataloga classes de fraquezas que podem existir em software e hardware.",
        "Incorreta. A proposição “CWE contém apenas endereços IP maliciosos.” contraria ou desloca o conceito central cobrado nesta microlição. CAPEC cataloga padrões de ataque; CWE cataloga classes de fraquezas que podem existir em software e hardware.",
        "Incorreta. A proposição “CAPEC substitui a legislação de proteção de dados.” contraria ou desloca o conceito central cobrado nesta microlição. CAPEC cataloga padrões de ataque; CWE cataloga classes de fraquezas que podem existir em software e hardware.",
        "Incorreta. A proposição “CVE é uma matriz de táticas adversárias.” contraria ou desloca o conceito central cobrado nesta microlição. CAPEC cataloga padrões de ataque; CWE cataloga classes de fraquezas que podem existir em software e hardware.",
        "Correta. CAPEC cataloga padrões de ataque; CWE cataloga classes de fraquezas que podem existir em software e hardware."
      ],
      "source": "Questão autoral Versa · edital Transpetro 2026.4",
      "board": "CESGRANRIO — estilo de treino",
      "examYear": 2026,
      "feedbackVersion": "1.7.1"
    },
    {
      "id": "trc-q028b",
      "lessonId": "trc-l028",
      "topic": "MITRE CAPEC: padrões de ataque",
      "difficulty": "Intermediário",
      "statement": "Sobre “MITRE CAPEC: padrões de ataque”, qual afirmação sintetiza corretamente um ponto essencial da microlição?",
      "options": [
        "Protocolos de rede não criam superfícies de ataque, pois apenas transportam dados entre sistemas.",
        "Ferramentas ofensivas determinam por si mesmas a finalidade de uma ação, independentemente do modo como são empregadas.",
        "Ataques passivos e ativos têm o mesmo efeito sobre integridade e disponibilidade do alvo.",
        "CWE = tipos/fraquezas de software.",
        "Persistência e escalação de privilégios sempre acontecem antes do acesso inicial."
      ],
      "correct": 3,
      "explanation": "Na microlição, a orientação-chave é: “CWE = tipos/fraquezas de software.”. CAPEC organiza padrões de ataque em níveis e domínios, descrevendo mecanismos e características recorrentes.",
      "wrong": [
        "Incorreta. A proposição “Protocolos de rede não criam superfícies de ataque, pois apenas transportam dados entre sistemas.” contraria ou desloca o conceito central cobrado nesta microlição. Na microlição, a orientação-chave é: “CWE = tipos/fraquezas de software.”. CAPEC organiza padrões de ataque em níveis e domínios, descrevendo mecanismos e características recorrentes.",
        "Incorreta. A proposição “Ferramentas ofensivas determinam por si mesmas a finalidade de uma ação, independentemente do modo como são empregadas.” contraria ou desloca o conceito central cobrado nesta microlição. Na microlição, a orientação-chave é: “CWE = tipos/fraquezas de software.”. CAPEC organiza padrões de ataque em níveis e domínios, descrevendo mecanismos e características recorrentes.",
        "Incorreta. A proposição “Ataques passivos e ativos têm o mesmo efeito sobre integridade e disponibilidade do alvo.” contraria ou desloca o conceito central cobrado nesta microlição. Na microlição, a orientação-chave é: “CWE = tipos/fraquezas de software.”. CAPEC organiza padrões de ataque em níveis e domínios, descrevendo mecanismos e características recorrentes.",
        "Correta. Na microlição, a orientação-chave é: “CWE = tipos/fraquezas de software.”. CAPEC organiza padrões de ataque em níveis e domínios, descrevendo mecanismos e características recorrentes.",
        "Incorreta. A proposição “Persistência e escalação de privilégios sempre acontecem antes do acesso inicial.” contraria ou desloca o conceito central cobrado nesta microlição. Na microlição, a orientação-chave é: “CWE = tipos/fraquezas de software.”. CAPEC organiza padrões de ataque em níveis e domínios, descrevendo mecanismos e características recorrentes."
      ],
      "source": "Questão autoral Versa · edital Transpetro 2026.4",
      "board": "CESGRANRIO — estilo de treino",
      "examYear": 2026,
      "authorialRevision": "v1.7.1",
      "feedbackVersion": "1.7.1"
    },
    {
      "id": "trc-q029",
      "lessonId": "trc-l029",
      "topic": "Ferramentas de reconhecimento e mapeamento",
      "difficulty": "Intermediário",
      "statement": "Sobre “Ferramentas de reconhecimento e mapeamento”, assinale a alternativa correta.",
      "options": [
        "Maltego é um algoritmo de hash.",
        "Nmap é uma autoridade certificadora.",
        "Para a prova, associe cada ferramenta à finalidade geral, tipo de dado e etapa do ciclo, sem confundir catálogo de ferramentas com execução de ataque.",
        "theHarvester é um firewall de estado.",
        "Masscan é um padrão ISO de continuidade."
      ],
      "correct": 2,
      "explanation": "Para a prova, associe cada ferramenta à finalidade geral, tipo de dado e etapa do ciclo, sem confundir catálogo de ferramentas com execução de ataque.",
      "wrong": [
        "Incorreta. A proposição “Maltego é um algoritmo de hash.” contraria ou desloca o conceito central cobrado nesta microlição. Para a prova, associe cada ferramenta à finalidade geral, tipo de dado e etapa do ciclo, sem confundir catálogo de ferramentas com execução de ataque.",
        "Incorreta. A proposição “Nmap é uma autoridade certificadora.” contraria ou desloca o conceito central cobrado nesta microlição. Para a prova, associe cada ferramenta à finalidade geral, tipo de dado e etapa do ciclo, sem confundir catálogo de ferramentas com execução de ataque.",
        "Correta. Para a prova, associe cada ferramenta à finalidade geral, tipo de dado e etapa do ciclo, sem confundir catálogo de ferramentas com execução de ataque.",
        "Incorreta. A proposição “theHarvester é um firewall de estado.” contraria ou desloca o conceito central cobrado nesta microlição. Para a prova, associe cada ferramenta à finalidade geral, tipo de dado e etapa do ciclo, sem confundir catálogo de ferramentas com execução de ataque.",
        "Incorreta. A proposição “Masscan é um padrão ISO de continuidade.” contraria ou desloca o conceito central cobrado nesta microlição. Para a prova, associe cada ferramenta à finalidade geral, tipo de dado e etapa do ciclo, sem confundir catálogo de ferramentas com execução de ataque."
      ],
      "source": "Questão autoral Versa · edital Transpetro 2026.4",
      "board": "CESGRANRIO — estilo de treino",
      "examYear": 2026,
      "feedbackVersion": "1.7.1"
    },
    {
      "id": "trc-q029b",
      "lessonId": "trc-l029",
      "topic": "Ferramentas de reconhecimento e mapeamento",
      "difficulty": "Intermediário",
      "statement": "Ao revisar “Ferramentas de reconhecimento e mapeamento” para a CESGRANRIO, qual alternativa deve ser mantida como correta?",
      "options": [
        "Ferramentas ofensivas determinam por si mesmas a finalidade de uma ação, independentemente do modo como são empregadas.",
        "Ataques passivos e ativos têm o mesmo efeito sobre integridade e disponibilidade do alvo.",
        "Persistência e escalação de privilégios sempre acontecem antes do acesso inicial.",
        "As fases de um ataque são equivalentes e podem ser analisadas sem considerar objetivo, contexto ou sequência.",
        "OSINT utiliza fontes abertas."
      ],
      "correct": 4,
      "explanation": "Na microlição, a orientação-chave é: “OSINT utiliza fontes abertas.”. O edital exige reconhecimento de ferramentas.",
      "wrong": [
        "Incorreta. A proposição “Ferramentas ofensivas determinam por si mesmas a finalidade de uma ação, independentemente do modo como são empregadas.” contraria ou desloca o conceito central cobrado nesta microlição. Na microlição, a orientação-chave é: “OSINT utiliza fontes abertas.”. O edital exige reconhecimento de ferramentas.",
        "Incorreta. A proposição “Ataques passivos e ativos têm o mesmo efeito sobre integridade e disponibilidade do alvo.” contraria ou desloca o conceito central cobrado nesta microlição. Na microlição, a orientação-chave é: “OSINT utiliza fontes abertas.”. O edital exige reconhecimento de ferramentas.",
        "Incorreta. A proposição “Persistência e escalação de privilégios sempre acontecem antes do acesso inicial.” contraria ou desloca o conceito central cobrado nesta microlição. Na microlição, a orientação-chave é: “OSINT utiliza fontes abertas.”. O edital exige reconhecimento de ferramentas.",
        "Incorreta. A proposição “As fases de um ataque são equivalentes e podem ser analisadas sem considerar objetivo, contexto ou sequência.” contraria ou desloca o conceito central cobrado nesta microlição. Na microlição, a orientação-chave é: “OSINT utiliza fontes abertas.”. O edital exige reconhecimento de ferramentas.",
        "Correta. Na microlição, a orientação-chave é: “OSINT utiliza fontes abertas.”. O edital exige reconhecimento de ferramentas."
      ],
      "source": "Questão autoral Versa · edital Transpetro 2026.4",
      "board": "CESGRANRIO — estilo de treino",
      "examYear": 2026,
      "authorialRevision": "v1.7.1",
      "feedbackVersion": "1.7.1"
    },
    {
      "id": "trc-q030",
      "lessonId": "trc-l030",
      "topic": "Ferramentas de credenciais e Wi-Fi",
      "difficulty": "Intermediário",
      "statement": "Sobre “Ferramentas de credenciais e Wi-Fi”, assinale a alternativa correta.",
      "options": [
        "Hydra é associada a testes de autenticação em vários serviços; Hashcat e John the Ripper são associados à auditoria/recuperação de hashes.",
        "Hashcat é um IDS de rede.",
        "Aircrack-ng é um padrão de gestão de riscos.",
        "John the Ripper é um protocolo de roteamento.",
        "Hydra é uma autoridade certificadora da ICP-Brasil."
      ],
      "correct": 0,
      "explanation": "Hydra é associada a testes de autenticação em vários serviços; Hashcat e John the Ripper são associados à auditoria/recuperação de hashes.",
      "wrong": [
        "Correta. Hydra é associada a testes de autenticação em vários serviços; Hashcat e John the Ripper são associados à auditoria/recuperação de hashes.",
        "Incorreta. A proposição “Hashcat é um IDS de rede.” contraria ou desloca o conceito central cobrado nesta microlição. Hydra é associada a testes de autenticação em vários serviços; Hashcat e John the Ripper são associados à auditoria/recuperação de hashes.",
        "Incorreta. A proposição “Aircrack-ng é um padrão de gestão de riscos.” contraria ou desloca o conceito central cobrado nesta microlição. Hydra é associada a testes de autenticação em vários serviços; Hashcat e John the Ripper são associados à auditoria/recuperação de hashes.",
        "Incorreta. A proposição “John the Ripper é um protocolo de roteamento.” contraria ou desloca o conceito central cobrado nesta microlição. Hydra é associada a testes de autenticação em vários serviços; Hashcat e John the Ripper são associados à auditoria/recuperação de hashes.",
        "Incorreta. A proposição “Hydra é uma autoridade certificadora da ICP-Brasil.” contraria ou desloca o conceito central cobrado nesta microlição. Hydra é associada a testes de autenticação em vários serviços; Hashcat e John the Ripper são associados à auditoria/recuperação de hashes."
      ],
      "source": "Questão autoral Versa · edital Transpetro 2026.4",
      "board": "CESGRANRIO — estilo de treino",
      "examYear": 2026,
      "feedbackVersion": "1.7.1"
    },
    {
      "id": "trc-q030b",
      "lessonId": "trc-l030",
      "topic": "Ferramentas de credenciais e Wi-Fi",
      "difficulty": "Intermediário",
      "statement": "Para resolver uma questão sobre “Ferramentas de credenciais e Wi-Fi”, qual orientação conceitual está de acordo com o conteúdo estudado?",
      "options": [
        "Use somente em ambientes autorizados.",
        "Ataques passivos e ativos têm o mesmo efeito sobre integridade e disponibilidade do alvo.",
        "Persistência e escalação de privilégios sempre acontecem antes do acesso inicial.",
        "As fases de um ataque são equivalentes e podem ser analisadas sem considerar objetivo, contexto ou sequência.",
        "Ameaça, vulnerabilidade, técnica, procedimento e ferramenta são termos intercambiáveis em segurança ofensiva."
      ],
      "correct": 0,
      "explanation": "Na microlição, a orientação-chave é: “Use somente em ambientes autorizados.”. Aircrack-ng e Airgeddon aparecem em contexto de auditoria Wi-Fi; Hashcat e John the Ripper em recuperação/auditoria de hashes; Hydra em testes de autenticação contra serviços.",
      "wrong": [
        "Correta. Na microlição, a orientação-chave é: “Use somente em ambientes autorizados.”. Aircrack-ng e Airgeddon aparecem em contexto de auditoria Wi-Fi; Hashcat e John the Ripper em recuperação/auditoria de hashes; Hydra em testes de autenticação contra serviços.",
        "Incorreta. A proposição “Ataques passivos e ativos têm o mesmo efeito sobre integridade e disponibilidade do alvo.” contraria ou desloca o conceito central cobrado nesta microlição. Na microlição, a orientação-chave é: “Use somente em ambientes autorizados.”. Aircrack-ng e Airgeddon aparecem em contexto de auditoria Wi-Fi; Hashcat e John the Ripper em recuperação/auditoria de hashes; Hydra em testes de autenticação contra serviços.",
        "Incorreta. A proposição “Persistência e escalação de privilégios sempre acontecem antes do acesso inicial.” contraria ou desloca o conceito central cobrado nesta microlição. Na microlição, a orientação-chave é: “Use somente em ambientes autorizados.”. Aircrack-ng e Airgeddon aparecem em contexto de auditoria Wi-Fi; Hashcat e John the Ripper em recuperação/auditoria de hashes; Hydra em testes de autenticação contra serviços.",
        "Incorreta. A proposição “As fases de um ataque são equivalentes e podem ser analisadas sem considerar objetivo, contexto ou sequência.” contraria ou desloca o conceito central cobrado nesta microlição. Na microlição, a orientação-chave é: “Use somente em ambientes autorizados.”. Aircrack-ng e Airgeddon aparecem em contexto de auditoria Wi-Fi; Hashcat e John the Ripper em recuperação/auditoria de hashes; Hydra em testes de autenticação contra serviços.",
        "Incorreta. A proposição “Ameaça, vulnerabilidade, técnica, procedimento e ferramenta são termos intercambiáveis em segurança ofensiva.” contraria ou desloca o conceito central cobrado nesta microlição. Na microlição, a orientação-chave é: “Use somente em ambientes autorizados.”. Aircrack-ng e Airgeddon aparecem em contexto de auditoria Wi-Fi; Hashcat e John the Ripper em recuperação/auditoria de hashes; Hydra em testes de autenticação contra serviços."
      ],
      "source": "Questão autoral Versa · edital Transpetro 2026.4",
      "board": "CESGRANRIO — estilo de treino",
      "examYear": 2026,
      "authorialRevision": "v1.7.1",
      "feedbackVersion": "1.7.1"
    },
    {
      "id": "trc-q031",
      "lessonId": "trc-l031",
      "topic": "Ferramentas de aplicações, tráfego e análise",
      "difficulty": "Intermediário",
      "statement": "Sobre “Ferramentas de aplicações, tráfego e análise”, assinale a alternativa correta.",
      "options": [
        "Burp Suite é um sistema de arquivos Linux.",
        "Ghidra é um algoritmo simétrico.",
        "SQLmap é um padrão de autenticação de rede.",
        "Wireshark é um analisador de protocolos e pacotes usado para inspecionar tráfego; Ghidra é voltado à engenharia reversa.",
        "Wireshark é uma norma ISO de privacidade."
      ],
      "correct": 3,
      "explanation": "Wireshark é um analisador de protocolos e pacotes usado para inspecionar tráfego; Ghidra é voltado à engenharia reversa.",
      "wrong": [
        "Incorreta. A proposição “Burp Suite é um sistema de arquivos Linux.” contraria ou desloca o conceito central cobrado nesta microlição. Wireshark é um analisador de protocolos e pacotes usado para inspecionar tráfego; Ghidra é voltado à engenharia reversa.",
        "Incorreta. A proposição “Ghidra é um algoritmo simétrico.” contraria ou desloca o conceito central cobrado nesta microlição. Wireshark é um analisador de protocolos e pacotes usado para inspecionar tráfego; Ghidra é voltado à engenharia reversa.",
        "Incorreta. A proposição “SQLmap é um padrão de autenticação de rede.” contraria ou desloca o conceito central cobrado nesta microlição. Wireshark é um analisador de protocolos e pacotes usado para inspecionar tráfego; Ghidra é voltado à engenharia reversa.",
        "Correta. Wireshark é um analisador de protocolos e pacotes usado para inspecionar tráfego; Ghidra é voltado à engenharia reversa.",
        "Incorreta. A proposição “Wireshark é uma norma ISO de privacidade.” contraria ou desloca o conceito central cobrado nesta microlição. Wireshark é um analisador de protocolos e pacotes usado para inspecionar tráfego; Ghidra é voltado à engenharia reversa."
      ],
      "source": "Questão autoral Versa · edital Transpetro 2026.4",
      "board": "CESGRANRIO — estilo de treino",
      "examYear": 2026,
      "feedbackVersion": "1.7.1"
    },
    {
      "id": "trc-q031b",
      "lessonId": "trc-l031",
      "topic": "Ferramentas de aplicações, tráfego e análise",
      "difficulty": "Intermediário",
      "statement": "No contexto de “Ferramentas de aplicações, tráfego e análise”, assinale a afirmação compatível com a microlição.",
      "options": [
        "Persistência e escalação de privilégios sempre acontecem antes do acesso inicial.",
        "Ferramentas podem ter uso legítimo em auditoria autorizada.",
        "As fases de um ataque são equivalentes e podem ser analisadas sem considerar objetivo, contexto ou sequência.",
        "Ameaça, vulnerabilidade, técnica, procedimento e ferramenta são termos intercambiáveis em segurança ofensiva.",
        "Um ataque só existe quando há destruição definitiva de dados; reconhecimento, interceptação e negação de serviço não se enquadram."
      ],
      "correct": 1,
      "explanation": "Na microlição, a orientação-chave é: “Ferramentas podem ter uso legítimo em auditoria autorizada.”. Burp Suite apoia teste de aplicações web; Wireshark analisa protocolos e tráfego; SQLmap automatiza testes de SQL injection; Ettercap associa-se a análise/MITM em redes; Metasploit é framework de testes; Ghidra, engenharia reversa.",
      "wrong": [
        "Incorreta. A proposição “Persistência e escalação de privilégios sempre acontecem antes do acesso inicial.” contraria ou desloca o conceito central cobrado nesta microlição. Na microlição, a orientação-chave é: “Ferramentas podem ter uso legítimo em auditoria autorizada.”. Burp Suite apoia teste de aplicações web; Wireshark analisa protocolos e tráfego; SQLmap automatiza testes de SQL injection; Ettercap associa-se a análise/MITM em redes; Metasploit é framework de testes; Ghidra, engenharia reversa.",
        "Correta. Na microlição, a orientação-chave é: “Ferramentas podem ter uso legítimo em auditoria autorizada.”. Burp Suite apoia teste de aplicações web; Wireshark analisa protocolos e tráfego; SQLmap automatiza testes de SQL injection; Ettercap associa-se a análise/MITM em redes; Metasploit é framework de testes; Ghidra, engenharia reversa.",
        "Incorreta. A proposição “As fases de um ataque são equivalentes e podem ser analisadas sem considerar objetivo, contexto ou sequência.” contraria ou desloca o conceito central cobrado nesta microlição. Na microlição, a orientação-chave é: “Ferramentas podem ter uso legítimo em auditoria autorizada.”. Burp Suite apoia teste de aplicações web; Wireshark analisa protocolos e tráfego; SQLmap automatiza testes de SQL injection; Ettercap associa-se a análise/MITM em redes; Metasploit é framework de testes; Ghidra, engenharia reversa.",
        "Incorreta. A proposição “Ameaça, vulnerabilidade, técnica, procedimento e ferramenta são termos intercambiáveis em segurança ofensiva.” contraria ou desloca o conceito central cobrado nesta microlição. Na microlição, a orientação-chave é: “Ferramentas podem ter uso legítimo em auditoria autorizada.”. Burp Suite apoia teste de aplicações web; Wireshark analisa protocolos e tráfego; SQLmap automatiza testes de SQL injection; Ettercap associa-se a análise/MITM em redes; Metasploit é framework de testes; Ghidra, engenharia reversa.",
        "Incorreta. A proposição “Um ataque só existe quando há destruição definitiva de dados; reconhecimento, interceptação e negação de serviço não se enquadram.” contraria ou desloca o conceito central cobrado nesta microlição. Na microlição, a orientação-chave é: “Ferramentas podem ter uso legítimo em auditoria autorizada.”. Burp Suite apoia teste de aplicações web; Wireshark analisa protocolos e tráfego; SQLmap automatiza testes de SQL injection; Ettercap associa-se a análise/MITM em redes; Metasploit é framework de testes; Ghidra, engenharia reversa."
      ],
      "source": "Questão autoral Versa · edital Transpetro 2026.4",
      "board": "CESGRANRIO — estilo de treino",
      "examYear": 2026,
      "authorialRevision": "v1.7.1",
      "feedbackVersion": "1.7.1"
    },
    {
      "id": "trc-q032",
      "lessonId": "trc-l032",
      "topic": "Defesa em profundidade e tipos de firewall",
      "difficulty": "Intermediário",
      "statement": "Sobre “Defesa em profundidade e tipos de firewall”, assinale a alternativa correta.",
      "options": [
        "É a adoção de um único firewall de maior capacidade.",
        "Defesa em profundidade usa múltiplos controles complementares e independentes, reduzindo dependência de uma única barreira.",
        "Dispensa controles de endpoint e identidade.",
        "Stateful firewall ignora completamente estado de conexão.",
        "Proxy firewall opera obrigatoriamente sem intermediar sessões."
      ],
      "correct": 1,
      "explanation": "Defesa em profundidade usa múltiplos controles complementares e independentes, reduzindo dependência de uma única barreira.",
      "wrong": [
        "Incorreta. A proposição “É a adoção de um único firewall de maior capacidade.” contraria ou desloca o conceito central cobrado nesta microlição. Defesa em profundidade usa múltiplos controles complementares e independentes, reduzindo dependência de uma única barreira.",
        "Correta. Defesa em profundidade usa múltiplos controles complementares e independentes, reduzindo dependência de uma única barreira.",
        "Incorreta. A proposição “Dispensa controles de endpoint e identidade.” contraria ou desloca o conceito central cobrado nesta microlição. Defesa em profundidade usa múltiplos controles complementares e independentes, reduzindo dependência de uma única barreira.",
        "Incorreta. A proposição “Stateful firewall ignora completamente estado de conexão.” contraria ou desloca o conceito central cobrado nesta microlição. Defesa em profundidade usa múltiplos controles complementares e independentes, reduzindo dependência de uma única barreira.",
        "Incorreta. A proposição “Proxy firewall opera obrigatoriamente sem intermediar sessões.” contraria ou desloca o conceito central cobrado nesta microlição. Defesa em profundidade usa múltiplos controles complementares e independentes, reduzindo dependência de uma única barreira."
      ],
      "source": "Questão autoral Versa · edital Transpetro 2026.4",
      "board": "CESGRANRIO — estilo de treino",
      "examYear": 2026,
      "feedbackVersion": "1.7.1"
    },
    {
      "id": "trc-q032b",
      "lessonId": "trc-l032",
      "topic": "Defesa em profundidade e tipos de firewall",
      "difficulty": "Intermediário",
      "statement": "Sobre “Defesa em profundidade e tipos de firewall”, qual afirmação sintetiza corretamente um ponto essencial da microlição?",
      "options": [
        "Defesa em profundidade significa concentrar a proteção em um único controle de perímetro suficientemente robusto.",
        "Autenticação, autorização, confidencialidade, integridade e disponibilidade são propriedades equivalentes e podem ser tratadas como sinônimos.",
        "Segmentação limita propagação e exposição.",
        "Controles preventivos eliminam a necessidade de detecção, resposta, recuperação e monitoramento.",
        "Criptografia garante, sozinha, disponibilidade, autenticidade, autorização e continuidade de todos os serviços."
      ],
      "correct": 2,
      "explanation": "Na microlição, a orientação-chave é: “Segmentação limita propagação e exposição.”. Defesa em profundidade combina controles independentes para evitar ponto único de falha.",
      "wrong": [
        "Incorreta. A proposição “Defesa em profundidade significa concentrar a proteção em um único controle de perímetro suficientemente robusto.” contraria ou desloca o conceito central cobrado nesta microlição. Na microlição, a orientação-chave é: “Segmentação limita propagação e exposição.”. Defesa em profundidade combina controles independentes para evitar ponto único de falha.",
        "Incorreta. A proposição “Autenticação, autorização, confidencialidade, integridade e disponibilidade são propriedades equivalentes e podem ser tratadas como sinônimos.” contraria ou desloca o conceito central cobrado nesta microlição. Na microlição, a orientação-chave é: “Segmentação limita propagação e exposição.”. Defesa em profundidade combina controles independentes para evitar ponto único de falha.",
        "Correta. Na microlição, a orientação-chave é: “Segmentação limita propagação e exposição.”. Defesa em profundidade combina controles independentes para evitar ponto único de falha.",
        "Incorreta. A proposição “Controles preventivos eliminam a necessidade de detecção, resposta, recuperação e monitoramento.” contraria ou desloca o conceito central cobrado nesta microlição. Na microlição, a orientação-chave é: “Segmentação limita propagação e exposição.”. Defesa em profundidade combina controles independentes para evitar ponto único de falha.",
        "Incorreta. A proposição “Criptografia garante, sozinha, disponibilidade, autenticidade, autorização e continuidade de todos os serviços.” contraria ou desloca o conceito central cobrado nesta microlição. Na microlição, a orientação-chave é: “Segmentação limita propagação e exposição.”. Defesa em profundidade combina controles independentes para evitar ponto único de falha."
      ],
      "source": "Questão autoral Versa · edital Transpetro 2026.4",
      "board": "CESGRANRIO — estilo de treino",
      "examYear": 2026,
      "authorialRevision": "v1.7.1",
      "feedbackVersion": "1.7.1"
    },
    {
      "id": "trc-q033",
      "lessonId": "trc-l033",
      "topic": "IDS, IPS e VPN",
      "difficulty": "Intermediário",
      "statement": "Sobre “IDS, IPS e VPN”, assinale a alternativa correta.",
      "options": [
        "IDS é sinônimo de VPN.",
        "IPS apenas registra eventos e nunca interfere no fluxo.",
        "VPN elimina a necessidade de autenticação.",
        "IDS garante prevenção de toda ameaça desconhecida.",
        "IDS detecta e alerta; IPS atua em linha e pode impedir ou bloquear tráfego conforme regras e detecções."
      ],
      "correct": 4,
      "explanation": "IDS detecta e alerta; IPS atua em linha e pode impedir ou bloquear tráfego conforme regras e detecções.",
      "wrong": [
        "Incorreta. A proposição “IDS é sinônimo de VPN.” contraria ou desloca o conceito central cobrado nesta microlição. IDS detecta e alerta; IPS atua em linha e pode impedir ou bloquear tráfego conforme regras e detecções.",
        "Incorreta. A proposição “IPS apenas registra eventos e nunca interfere no fluxo.” contraria ou desloca o conceito central cobrado nesta microlição. IDS detecta e alerta; IPS atua em linha e pode impedir ou bloquear tráfego conforme regras e detecções.",
        "Incorreta. A proposição “VPN elimina a necessidade de autenticação.” contraria ou desloca o conceito central cobrado nesta microlição. IDS detecta e alerta; IPS atua em linha e pode impedir ou bloquear tráfego conforme regras e detecções.",
        "Incorreta. A proposição “IDS garante prevenção de toda ameaça desconhecida.” contraria ou desloca o conceito central cobrado nesta microlição. IDS detecta e alerta; IPS atua em linha e pode impedir ou bloquear tráfego conforme regras e detecções.",
        "Correta. IDS detecta e alerta; IPS atua em linha e pode impedir ou bloquear tráfego conforme regras e detecções."
      ],
      "source": "Questão autoral Versa · edital Transpetro 2026.4",
      "board": "CESGRANRIO — estilo de treino",
      "examYear": 2026,
      "feedbackVersion": "1.7.1"
    },
    {
      "id": "trc-q033b",
      "lessonId": "trc-l033",
      "topic": "IDS, IPS e VPN",
      "difficulty": "Intermediário",
      "statement": "Ao revisar “IDS, IPS e VPN” para a CESGRANRIO, qual alternativa deve ser mantida como correta?",
      "options": [
        "Autenticação, autorização, confidencialidade, integridade e disponibilidade são propriedades equivalentes e podem ser tratadas como sinônimos.",
        "Controles preventivos eliminam a necessidade de detecção, resposta, recuperação e monitoramento.",
        "Criptografia garante, sozinha, disponibilidade, autenticidade, autorização e continuidade de todos os serviços.",
        "IDS não precisa bloquear para cumprir seu papel.",
        "Hardening consiste em habilitar o maior número possível de serviços para aumentar a compatibilidade do sistema."
      ],
      "correct": 3,
      "explanation": "Na microlição, a orientação-chave é: “IDS não precisa bloquear para cumprir seu papel.”. IDS monitora e alerta; IPS fica normalmente em linha e pode bloquear; VPN cria conexão lógica protegida sobre rede não confiável, com mecanismos de autenticação e criptografia conforme a tecnologia.",
      "wrong": [
        "Incorreta. A proposição “Autenticação, autorização, confidencialidade, integridade e disponibilidade são propriedades equivalentes e podem ser tratadas como sinônimos.” contraria ou desloca o conceito central cobrado nesta microlição. Na microlição, a orientação-chave é: “IDS não precisa bloquear para cumprir seu papel.”. IDS monitora e alerta; IPS fica normalmente em linha e pode bloquear; VPN cria conexão lógica protegida sobre rede não confiável, com mecanismos de autenticação e criptografia conforme a tecnologia.",
        "Incorreta. A proposição “Controles preventivos eliminam a necessidade de detecção, resposta, recuperação e monitoramento.” contraria ou desloca o conceito central cobrado nesta microlição. Na microlição, a orientação-chave é: “IDS não precisa bloquear para cumprir seu papel.”. IDS monitora e alerta; IPS fica normalmente em linha e pode bloquear; VPN cria conexão lógica protegida sobre rede não confiável, com mecanismos de autenticação e criptografia conforme a tecnologia.",
        "Incorreta. A proposição “Criptografia garante, sozinha, disponibilidade, autenticidade, autorização e continuidade de todos os serviços.” contraria ou desloca o conceito central cobrado nesta microlição. Na microlição, a orientação-chave é: “IDS não precisa bloquear para cumprir seu papel.”. IDS monitora e alerta; IPS fica normalmente em linha e pode bloquear; VPN cria conexão lógica protegida sobre rede não confiável, com mecanismos de autenticação e criptografia conforme a tecnologia.",
        "Correta. Na microlição, a orientação-chave é: “IDS não precisa bloquear para cumprir seu papel.”. IDS monitora e alerta; IPS fica normalmente em linha e pode bloquear; VPN cria conexão lógica protegida sobre rede não confiável, com mecanismos de autenticação e criptografia conforme a tecnologia.",
        "Incorreta. A proposição “Hardening consiste em habilitar o maior número possível de serviços para aumentar a compatibilidade do sistema.” contraria ou desloca o conceito central cobrado nesta microlição. Na microlição, a orientação-chave é: “IDS não precisa bloquear para cumprir seu papel.”. IDS monitora e alerta; IPS fica normalmente em linha e pode bloquear; VPN cria conexão lógica protegida sobre rede não confiável, com mecanismos de autenticação e criptografia conforme a tecnologia."
      ],
      "source": "Questão autoral Versa · edital Transpetro 2026.4",
      "board": "CESGRANRIO — estilo de treino",
      "examYear": 2026,
      "authorialRevision": "v1.7.1",
      "feedbackVersion": "1.7.1"
    },
    {
      "id": "trc-q034",
      "lessonId": "trc-l034",
      "topic": "IEEE 802.1X, EAP e RADIUS",
      "difficulty": "Intermediário",
      "statement": "Sobre “IEEE 802.1X, EAP e RADIUS”, assinale a alternativa correta.",
      "options": [
        "DHCP substitui EAP na autenticação 802.1X.",
        "RADIUS é um algoritmo de cifragem de disco.",
        "RADIUS é amplamente usado entre o autenticador e o servidor de autenticação/AAA em implementações 802.1X.",
        "O suplicante é sempre o servidor AAA.",
        "802.1X é um padrão exclusivo de criptografia de arquivos."
      ],
      "correct": 2,
      "explanation": "RADIUS é amplamente usado entre o autenticador e o servidor de autenticação/AAA em implementações 802.1X.",
      "wrong": [
        "Incorreta. A proposição “DHCP substitui EAP na autenticação 802.1X.” contraria ou desloca o conceito central cobrado nesta microlição. RADIUS é amplamente usado entre o autenticador e o servidor de autenticação/AAA em implementações 802.1X.",
        "Incorreta. A proposição “RADIUS é um algoritmo de cifragem de disco.” contraria ou desloca o conceito central cobrado nesta microlição. RADIUS é amplamente usado entre o autenticador e o servidor de autenticação/AAA em implementações 802.1X.",
        "Correta. RADIUS é amplamente usado entre o autenticador e o servidor de autenticação/AAA em implementações 802.1X.",
        "Incorreta. A proposição “O suplicante é sempre o servidor AAA.” contraria ou desloca o conceito central cobrado nesta microlição. RADIUS é amplamente usado entre o autenticador e o servidor de autenticação/AAA em implementações 802.1X.",
        "Incorreta. A proposição “802.1X é um padrão exclusivo de criptografia de arquivos.” contraria ou desloca o conceito central cobrado nesta microlição. RADIUS é amplamente usado entre o autenticador e o servidor de autenticação/AAA em implementações 802.1X."
      ],
      "source": "Questão autoral Versa · edital Transpetro 2026.4",
      "board": "CESGRANRIO — estilo de treino",
      "examYear": 2026,
      "feedbackVersion": "1.7.1"
    },
    {
      "id": "trc-q034b",
      "lessonId": "trc-l034",
      "topic": "IEEE 802.1X, EAP e RADIUS",
      "difficulty": "Intermediário",
      "statement": "Para resolver uma questão sobre “IEEE 802.1X, EAP e RADIUS”, qual orientação conceitual está de acordo com o conteúdo estudado?",
      "options": [
        "Controles preventivos eliminam a necessidade de detecção, resposta, recuperação e monitoramento.",
        "Criptografia garante, sozinha, disponibilidade, autenticidade, autorização e continuidade de todos os serviços.",
        "Hardening consiste em habilitar o maior número possível de serviços para aumentar a compatibilidade do sistema.",
        "Vulnerabilidades publicadas, fraquezas de software e riscos operacionais são exatamente o mesmo conceito.",
        "RADIUS centraliza AAA em muitos ambientes."
      ],
      "correct": 4,
      "explanation": "Na microlição, a orientação-chave é: “RADIUS centraliza AAA em muitos ambientes.”. 802.1X fornece controle de acesso baseado em portas.",
      "wrong": [
        "Incorreta. A proposição “Controles preventivos eliminam a necessidade de detecção, resposta, recuperação e monitoramento.” contraria ou desloca o conceito central cobrado nesta microlição. Na microlição, a orientação-chave é: “RADIUS centraliza AAA em muitos ambientes.”. 802.1X fornece controle de acesso baseado em portas.",
        "Incorreta. A proposição “Criptografia garante, sozinha, disponibilidade, autenticidade, autorização e continuidade de todos os serviços.” contraria ou desloca o conceito central cobrado nesta microlição. Na microlição, a orientação-chave é: “RADIUS centraliza AAA em muitos ambientes.”. 802.1X fornece controle de acesso baseado em portas.",
        "Incorreta. A proposição “Hardening consiste em habilitar o maior número possível de serviços para aumentar a compatibilidade do sistema.” contraria ou desloca o conceito central cobrado nesta microlição. Na microlição, a orientação-chave é: “RADIUS centraliza AAA em muitos ambientes.”. 802.1X fornece controle de acesso baseado em portas.",
        "Incorreta. A proposição “Vulnerabilidades publicadas, fraquezas de software e riscos operacionais são exatamente o mesmo conceito.” contraria ou desloca o conceito central cobrado nesta microlição. Na microlição, a orientação-chave é: “RADIUS centraliza AAA em muitos ambientes.”. 802.1X fornece controle de acesso baseado em portas.",
        "Correta. Na microlição, a orientação-chave é: “RADIUS centraliza AAA em muitos ambientes.”. 802.1X fornece controle de acesso baseado em portas."
      ],
      "source": "Questão autoral Versa · edital Transpetro 2026.4",
      "board": "CESGRANRIO — estilo de treino",
      "examYear": 2026,
      "authorialRevision": "v1.7.1",
      "feedbackVersion": "1.7.1"
    },
    {
      "id": "trc-q035",
      "lessonId": "trc-l035",
      "topic": "Propriedades e mecanismos de segurança",
      "difficulty": "Intermediário",
      "statement": "Sobre “Propriedades e mecanismos de segurança”, assinale a alternativa correta.",
      "options": [
        "Irretratabilidade (não repúdio) fornece evidências para reduzir a possibilidade de uma parte negar posteriormente sua participação em uma ação ou transação.",
        "Confidencialidade prova autoria de toda transação.",
        "Disponibilidade impede qualquer alteração de dados.",
        "Autorização e autenticação são o mesmo conceito.",
        "Integridade significa manter o serviço sempre online."
      ],
      "correct": 0,
      "explanation": "Irretratabilidade (não repúdio) fornece evidências para reduzir a possibilidade de uma parte negar posteriormente sua participação em uma ação ou transação.",
      "wrong": [
        "Correta. Irretratabilidade (não repúdio) fornece evidências para reduzir a possibilidade de uma parte negar posteriormente sua participação em uma ação ou transação.",
        "Incorreta. A proposição “Confidencialidade prova autoria de toda transação.” contraria ou desloca o conceito central cobrado nesta microlição. Irretratabilidade (não repúdio) fornece evidências para reduzir a possibilidade de uma parte negar posteriormente sua participação em uma ação ou transação.",
        "Incorreta. A proposição “Disponibilidade impede qualquer alteração de dados.” contraria ou desloca o conceito central cobrado nesta microlição. Irretratabilidade (não repúdio) fornece evidências para reduzir a possibilidade de uma parte negar posteriormente sua participação em uma ação ou transação.",
        "Incorreta. A proposição “Autorização e autenticação são o mesmo conceito.” contraria ou desloca o conceito central cobrado nesta microlição. Irretratabilidade (não repúdio) fornece evidências para reduzir a possibilidade de uma parte negar posteriormente sua participação em uma ação ou transação.",
        "Incorreta. A proposição “Integridade significa manter o serviço sempre online.” contraria ou desloca o conceito central cobrado nesta microlição. Irretratabilidade (não repúdio) fornece evidências para reduzir a possibilidade de uma parte negar posteriormente sua participação em uma ação ou transação."
      ],
      "source": "Questão autoral Versa · edital Transpetro 2026.4",
      "board": "CESGRANRIO — estilo de treino",
      "examYear": 2026,
      "feedbackVersion": "1.7.1"
    },
    {
      "id": "trc-q035b",
      "lessonId": "trc-l035",
      "topic": "Propriedades e mecanismos de segurança",
      "difficulty": "Intermediário",
      "statement": "No contexto de “Propriedades e mecanismos de segurança”, assinale a afirmação compatível com a microlição.",
      "options": [
        "Redundância apoia disponibilidade.",
        "Criptografia garante, sozinha, disponibilidade, autenticidade, autorização e continuidade de todos os serviços.",
        "Hardening consiste em habilitar o maior número possível de serviços para aumentar a compatibilidade do sistema.",
        "Vulnerabilidades publicadas, fraquezas de software e riscos operacionais são exatamente o mesmo conceito.",
        "Em OT/ICS, disponibilidade e segurança operacional têm a mesma tolerância a interrupções encontrada em ambientes de TI corporativa comum."
      ],
      "correct": 0,
      "explanation": "Na microlição, a orientação-chave é: “Redundância apoia disponibilidade.”. Confidencialidade limita divulgação; integridade protege contra alteração indevida; autenticidade verifica origem/identidade; autorização define ações permitidas; disponibilidade mantém acesso; irretratabilidade reduz possibilidade de negar participação em determinada ação.",
      "wrong": [
        "Correta. Na microlição, a orientação-chave é: “Redundância apoia disponibilidade.”. Confidencialidade limita divulgação; integridade protege contra alteração indevida; autenticidade verifica origem/identidade; autorização define ações permitidas; disponibilidade mantém acesso; irretratabilidade reduz possibilidade de negar participação em determinada ação.",
        "Incorreta. A proposição “Criptografia garante, sozinha, disponibilidade, autenticidade, autorização e continuidade de todos os serviços.” contraria ou desloca o conceito central cobrado nesta microlição. Na microlição, a orientação-chave é: “Redundância apoia disponibilidade.”. Confidencialidade limita divulgação; integridade protege contra alteração indevida; autenticidade verifica origem/identidade; autorização define ações permitidas; disponibilidade mantém acesso; irretratabilidade reduz possibilidade de negar participação em determinada ação.",
        "Incorreta. A proposição “Hardening consiste em habilitar o maior número possível de serviços para aumentar a compatibilidade do sistema.” contraria ou desloca o conceito central cobrado nesta microlição. Na microlição, a orientação-chave é: “Redundância apoia disponibilidade.”. Confidencialidade limita divulgação; integridade protege contra alteração indevida; autenticidade verifica origem/identidade; autorização define ações permitidas; disponibilidade mantém acesso; irretratabilidade reduz possibilidade de negar participação em determinada ação.",
        "Incorreta. A proposição “Vulnerabilidades publicadas, fraquezas de software e riscos operacionais são exatamente o mesmo conceito.” contraria ou desloca o conceito central cobrado nesta microlição. Na microlição, a orientação-chave é: “Redundância apoia disponibilidade.”. Confidencialidade limita divulgação; integridade protege contra alteração indevida; autenticidade verifica origem/identidade; autorização define ações permitidas; disponibilidade mantém acesso; irretratabilidade reduz possibilidade de negar participação em determinada ação.",
        "Incorreta. A proposição “Em OT/ICS, disponibilidade e segurança operacional têm a mesma tolerância a interrupções encontrada em ambientes de TI corporativa comum.” contraria ou desloca o conceito central cobrado nesta microlição. Na microlição, a orientação-chave é: “Redundância apoia disponibilidade.”. Confidencialidade limita divulgação; integridade protege contra alteração indevida; autenticidade verifica origem/identidade; autorização define ações permitidas; disponibilidade mantém acesso; irretratabilidade reduz possibilidade de negar participação em determinada ação."
      ],
      "source": "Questão autoral Versa · edital Transpetro 2026.4",
      "board": "CESGRANRIO — estilo de treino",
      "examYear": 2026,
      "authorialRevision": "v1.7.1",
      "feedbackVersion": "1.7.1"
    },
    {
      "id": "trc-q036",
      "lessonId": "trc-l036",
      "topic": "OWASP Top 10: categorias e raciocínio de prova",
      "difficulty": "Intermediário",
      "statement": "Sobre “OWASP Top 10: categorias e raciocínio de prova”, assinale a alternativa correta.",
      "options": [
        "Sempre responda pela versão mais nova, mesmo se a questão citar 2021.",
        "OWASP Top 10 é uma lista de CVEs individuais.",
        "OWASP Top 10 trata exclusivamente de redes Wi-Fi.",
        "Use a versão explicitamente indicada no enunciado; na preparação para 2026, acompanhe também a versão corrente porque o edital não fixa uma edição.",
        "As categorias nunca mudam entre edições."
      ],
      "correct": 3,
      "explanation": "Use a versão explicitamente indicada no enunciado; na preparação para 2026, acompanhe também a versão corrente porque o edital não fixa uma edição.",
      "wrong": [
        "Incorreta. A proposição “Sempre responda pela versão mais nova, mesmo se a questão citar 2021.” contraria ou desloca o conceito central cobrado nesta microlição. Use a versão explicitamente indicada no enunciado; na preparação para 2026, acompanhe também a versão corrente porque o edital não fixa uma edição.",
        "Incorreta. A proposição “OWASP Top 10 é uma lista de CVEs individuais.” contraria ou desloca o conceito central cobrado nesta microlição. Use a versão explicitamente indicada no enunciado; na preparação para 2026, acompanhe também a versão corrente porque o edital não fixa uma edição.",
        "Incorreta. A proposição “OWASP Top 10 trata exclusivamente de redes Wi-Fi.” contraria ou desloca o conceito central cobrado nesta microlição. Use a versão explicitamente indicada no enunciado; na preparação para 2026, acompanhe também a versão corrente porque o edital não fixa uma edição.",
        "Correta. Use a versão explicitamente indicada no enunciado; na preparação para 2026, acompanhe também a versão corrente porque o edital não fixa uma edição.",
        "Incorreta. A proposição “As categorias nunca mudam entre edições.” contraria ou desloca o conceito central cobrado nesta microlição. Use a versão explicitamente indicada no enunciado; na preparação para 2026, acompanhe também a versão corrente porque o edital não fixa uma edição."
      ],
      "source": "Questão autoral Versa · edital Transpetro 2026.4",
      "board": "CESGRANRIO — estilo de treino",
      "examYear": 2026,
      "feedbackVersion": "1.7.1"
    },
    {
      "id": "trc-q036b",
      "lessonId": "trc-l036",
      "topic": "OWASP Top 10: categorias e raciocínio de prova",
      "difficulty": "Intermediário",
      "statement": "Sobre “OWASP Top 10: categorias e raciocínio de prova”, qual afirmação sintetiza corretamente um ponto essencial da microlição?",
      "options": [
        "Hardening consiste em habilitar o maior número possível de serviços para aumentar a compatibilidade do sistema.",
        "Associe cenário ao risco predominante.",
        "Vulnerabilidades publicadas, fraquezas de software e riscos operacionais são exatamente o mesmo conceito.",
        "Em OT/ICS, disponibilidade e segurança operacional têm a mesma tolerância a interrupções encontrada em ambientes de TI corporativa comum.",
        "Evidência digital pode ser coletada sem preservação de integridade ou rastreabilidade, desde que o conteúdo pareça tecnicamente útil."
      ],
      "correct": 1,
      "explanation": "Na microlição, a orientação-chave é: “Associe cenário ao risco predominante.”. OWASP Top 10 é documento de conscientização sobre riscos críticos de aplicações web.",
      "wrong": [
        "Incorreta. A proposição “Hardening consiste em habilitar o maior número possível de serviços para aumentar a compatibilidade do sistema.” contraria ou desloca o conceito central cobrado nesta microlição. Na microlição, a orientação-chave é: “Associe cenário ao risco predominante.”. OWASP Top 10 é documento de conscientização sobre riscos críticos de aplicações web.",
        "Correta. Na microlição, a orientação-chave é: “Associe cenário ao risco predominante.”. OWASP Top 10 é documento de conscientização sobre riscos críticos de aplicações web.",
        "Incorreta. A proposição “Vulnerabilidades publicadas, fraquezas de software e riscos operacionais são exatamente o mesmo conceito.” contraria ou desloca o conceito central cobrado nesta microlição. Na microlição, a orientação-chave é: “Associe cenário ao risco predominante.”. OWASP Top 10 é documento de conscientização sobre riscos críticos de aplicações web.",
        "Incorreta. A proposição “Em OT/ICS, disponibilidade e segurança operacional têm a mesma tolerância a interrupções encontrada em ambientes de TI corporativa comum.” contraria ou desloca o conceito central cobrado nesta microlição. Na microlição, a orientação-chave é: “Associe cenário ao risco predominante.”. OWASP Top 10 é documento de conscientização sobre riscos críticos de aplicações web.",
        "Incorreta. A proposição “Evidência digital pode ser coletada sem preservação de integridade ou rastreabilidade, desde que o conteúdo pareça tecnicamente útil.” contraria ou desloca o conceito central cobrado nesta microlição. Na microlição, a orientação-chave é: “Associe cenário ao risco predominante.”. OWASP Top 10 é documento de conscientização sobre riscos críticos de aplicações web."
      ],
      "source": "Questão autoral Versa · edital Transpetro 2026.4",
      "board": "CESGRANRIO — estilo de treino",
      "examYear": 2026,
      "authorialRevision": "v1.7.1",
      "feedbackVersion": "1.7.1"
    },
    {
      "id": "trc-q037",
      "lessonId": "trc-l037",
      "topic": "OWASP SAMM e maturidade de segurança de software",
      "difficulty": "Intermediário",
      "statement": "Sobre “OWASP SAMM e maturidade de segurança de software”, assinale a alternativa correta.",
      "options": [
        "SAMM é um identificador de vulnerabilidade individual.",
        "SAMM é um modelo de maturidade para avaliar e melhorar sistematicamente práticas de segurança de software.",
        "SAMM é um protocolo de VPN.",
        "SAMM substitui toda gestão de riscos corporativos.",
        "SAMM é um algoritmo de assinatura digital."
      ],
      "correct": 1,
      "explanation": "SAMM é um modelo de maturidade para avaliar e melhorar sistematicamente práticas de segurança de software.",
      "wrong": [
        "Incorreta. A proposição “SAMM é um identificador de vulnerabilidade individual.” contraria ou desloca o conceito central cobrado nesta microlição. SAMM é um modelo de maturidade para avaliar e melhorar sistematicamente práticas de segurança de software.",
        "Correta. SAMM é um modelo de maturidade para avaliar e melhorar sistematicamente práticas de segurança de software.",
        "Incorreta. A proposição “SAMM é um protocolo de VPN.” contraria ou desloca o conceito central cobrado nesta microlição. SAMM é um modelo de maturidade para avaliar e melhorar sistematicamente práticas de segurança de software.",
        "Incorreta. A proposição “SAMM substitui toda gestão de riscos corporativos.” contraria ou desloca o conceito central cobrado nesta microlição. SAMM é um modelo de maturidade para avaliar e melhorar sistematicamente práticas de segurança de software.",
        "Incorreta. A proposição “SAMM é um algoritmo de assinatura digital.” contraria ou desloca o conceito central cobrado nesta microlição. SAMM é um modelo de maturidade para avaliar e melhorar sistematicamente práticas de segurança de software."
      ],
      "source": "Questão autoral Versa · edital Transpetro 2026.4",
      "board": "CESGRANRIO — estilo de treino",
      "examYear": 2026,
      "feedbackVersion": "1.7.1"
    },
    {
      "id": "trc-q037b",
      "lessonId": "trc-l037",
      "topic": "OWASP SAMM e maturidade de segurança de software",
      "difficulty": "Intermediário",
      "statement": "Ao revisar “OWASP SAMM e maturidade de segurança de software” para a CESGRANRIO, qual alternativa deve ser mantida como correta?",
      "options": [
        "Vulnerabilidades publicadas, fraquezas de software e riscos operacionais são exatamente o mesmo conceito.",
        "Em OT/ICS, disponibilidade e segurança operacional têm a mesma tolerância a interrupções encontrada em ambientes de TI corporativa comum.",
        "Práticas abrangem governança, design, implementação, verificação e operações.",
        "Evidência digital pode ser coletada sem preservação de integridade ou rastreabilidade, desde que o conteúdo pareça tecnicamente útil.",
        "Defesa em profundidade significa concentrar a proteção em um único controle de perímetro suficientemente robusto."
      ],
      "correct": 2,
      "explanation": "Na microlição, a orientação-chave é: “Práticas abrangem governança, design, implementação, verificação e operações.”. OWASP SAMM organiza práticas de segurança de software e permite avaliar maturidade, estabelecer metas e planejar melhoria incremental.",
      "wrong": [
        "Incorreta. A proposição “Vulnerabilidades publicadas, fraquezas de software e riscos operacionais são exatamente o mesmo conceito.” contraria ou desloca o conceito central cobrado nesta microlição. Na microlição, a orientação-chave é: “Práticas abrangem governança, design, implementação, verificação e operações.”. OWASP SAMM organiza práticas de segurança de software e permite avaliar maturidade, estabelecer metas e planejar melhoria incremental.",
        "Incorreta. A proposição “Em OT/ICS, disponibilidade e segurança operacional têm a mesma tolerância a interrupções encontrada em ambientes de TI corporativa comum.” contraria ou desloca o conceito central cobrado nesta microlição. Na microlição, a orientação-chave é: “Práticas abrangem governança, design, implementação, verificação e operações.”. OWASP SAMM organiza práticas de segurança de software e permite avaliar maturidade, estabelecer metas e planejar melhoria incremental.",
        "Correta. Na microlição, a orientação-chave é: “Práticas abrangem governança, design, implementação, verificação e operações.”. OWASP SAMM organiza práticas de segurança de software e permite avaliar maturidade, estabelecer metas e planejar melhoria incremental.",
        "Incorreta. A proposição “Evidência digital pode ser coletada sem preservação de integridade ou rastreabilidade, desde que o conteúdo pareça tecnicamente útil.” contraria ou desloca o conceito central cobrado nesta microlição. Na microlição, a orientação-chave é: “Práticas abrangem governança, design, implementação, verificação e operações.”. OWASP SAMM organiza práticas de segurança de software e permite avaliar maturidade, estabelecer metas e planejar melhoria incremental.",
        "Incorreta. A proposição “Defesa em profundidade significa concentrar a proteção em um único controle de perímetro suficientemente robusto.” contraria ou desloca o conceito central cobrado nesta microlição. Na microlição, a orientação-chave é: “Práticas abrangem governança, design, implementação, verificação e operações.”. OWASP SAMM organiza práticas de segurança de software e permite avaliar maturidade, estabelecer metas e planejar melhoria incremental."
      ],
      "source": "Questão autoral Versa · edital Transpetro 2026.4",
      "board": "CESGRANRIO — estilo de treino",
      "examYear": 2026,
      "authorialRevision": "v1.7.1",
      "feedbackVersion": "1.7.1"
    },
    {
      "id": "trc-q038",
      "lessonId": "trc-l038",
      "topic": "CVE e gestão de vulnerabilidades divulgadas",
      "difficulty": "Intermediário",
      "statement": "Sobre “CVE e gestão de vulnerabilidades divulgadas”, assinale a alternativa correta.",
      "options": [
        "CVE é um algoritmo que calcula risco financeiro.",
        "Todo CVE corresponde a um malware específico.",
        "CVE é sinônimo de patch.",
        "CVE identifica somente fraquezas teóricas sem vulnerabilidade concreta.",
        "CVE fornece uma identificação padronizada para uma vulnerabilidade divulgada, facilitando correlação entre fontes e ferramentas."
      ],
      "correct": 4,
      "explanation": "CVE fornece uma identificação padronizada para uma vulnerabilidade divulgada, facilitando correlação entre fontes e ferramentas.",
      "wrong": [
        "Incorreta. A proposição “CVE é um algoritmo que calcula risco financeiro.” contraria ou desloca o conceito central cobrado nesta microlição. CVE fornece uma identificação padronizada para uma vulnerabilidade divulgada, facilitando correlação entre fontes e ferramentas.",
        "Incorreta. A proposição “Todo CVE corresponde a um malware específico.” contraria ou desloca o conceito central cobrado nesta microlição. CVE fornece uma identificação padronizada para uma vulnerabilidade divulgada, facilitando correlação entre fontes e ferramentas.",
        "Incorreta. A proposição “CVE é sinônimo de patch.” contraria ou desloca o conceito central cobrado nesta microlição. CVE fornece uma identificação padronizada para uma vulnerabilidade divulgada, facilitando correlação entre fontes e ferramentas.",
        "Incorreta. A proposição “CVE identifica somente fraquezas teóricas sem vulnerabilidade concreta.” contraria ou desloca o conceito central cobrado nesta microlição. CVE fornece uma identificação padronizada para uma vulnerabilidade divulgada, facilitando correlação entre fontes e ferramentas.",
        "Correta. CVE fornece uma identificação padronizada para uma vulnerabilidade divulgada, facilitando correlação entre fontes e ferramentas."
      ],
      "source": "Questão autoral Versa · edital Transpetro 2026.4",
      "board": "CESGRANRIO — estilo de treino",
      "examYear": 2026,
      "feedbackVersion": "1.7.1"
    },
    {
      "id": "trc-q038b",
      "lessonId": "trc-l038",
      "topic": "CVE e gestão de vulnerabilidades divulgadas",
      "difficulty": "Intermediário",
      "statement": "Para resolver uma questão sobre “CVE e gestão de vulnerabilidades divulgadas”, qual orientação conceitual está de acordo com o conteúdo estudado?",
      "options": [
        "Em OT/ICS, disponibilidade e segurança operacional têm a mesma tolerância a interrupções encontrada em ambientes de TI corporativa comum.",
        "Evidência digital pode ser coletada sem preservação de integridade ou rastreabilidade, desde que o conteúdo pareça tecnicamente útil.",
        "Defesa em profundidade significa concentrar a proteção em um único controle de perímetro suficientemente robusto.",
        "Correção depende do fornecedor e contexto.",
        "Autenticação, autorização, confidencialidade, integridade e disponibilidade são propriedades equivalentes e podem ser tratadas como sinônimos."
      ],
      "correct": 3,
      "explanation": "Na microlição, a orientação-chave é: “Correção depende do fornecedor e contexto.”. CVE fornece identificadores para vulnerabilidades publicamente divulgadas; o identificador facilita referência comum, mas não é por si só uma pontuação de severidade nem a correção.",
      "wrong": [
        "Incorreta. A proposição “Em OT/ICS, disponibilidade e segurança operacional têm a mesma tolerância a interrupções encontrada em ambientes de TI corporativa comum.” contraria ou desloca o conceito central cobrado nesta microlição. Na microlição, a orientação-chave é: “Correção depende do fornecedor e contexto.”. CVE fornece identificadores para vulnerabilidades publicamente divulgadas; o identificador facilita referência comum, mas não é por si só uma pontuação de severidade nem a correção.",
        "Incorreta. A proposição “Evidência digital pode ser coletada sem preservação de integridade ou rastreabilidade, desde que o conteúdo pareça tecnicamente útil.” contraria ou desloca o conceito central cobrado nesta microlição. Na microlição, a orientação-chave é: “Correção depende do fornecedor e contexto.”. CVE fornece identificadores para vulnerabilidades publicamente divulgadas; o identificador facilita referência comum, mas não é por si só uma pontuação de severidade nem a correção.",
        "Incorreta. A proposição “Defesa em profundidade significa concentrar a proteção em um único controle de perímetro suficientemente robusto.” contraria ou desloca o conceito central cobrado nesta microlição. Na microlição, a orientação-chave é: “Correção depende do fornecedor e contexto.”. CVE fornece identificadores para vulnerabilidades publicamente divulgadas; o identificador facilita referência comum, mas não é por si só uma pontuação de severidade nem a correção.",
        "Correta. Na microlição, a orientação-chave é: “Correção depende do fornecedor e contexto.”. CVE fornece identificadores para vulnerabilidades publicamente divulgadas; o identificador facilita referência comum, mas não é por si só uma pontuação de severidade nem a correção.",
        "Incorreta. A proposição “Autenticação, autorização, confidencialidade, integridade e disponibilidade são propriedades equivalentes e podem ser tratadas como sinônimos.” contraria ou desloca o conceito central cobrado nesta microlição. Na microlição, a orientação-chave é: “Correção depende do fornecedor e contexto.”. CVE fornece identificadores para vulnerabilidades publicamente divulgadas; o identificador facilita referência comum, mas não é por si só uma pontuação de severidade nem a correção."
      ],
      "source": "Questão autoral Versa · edital Transpetro 2026.4",
      "board": "CESGRANRIO — estilo de treino",
      "examYear": 2026,
      "authorialRevision": "v1.7.1",
      "feedbackVersion": "1.7.1"
    },
    {
      "id": "trc-q039",
      "lessonId": "trc-l039",
      "topic": "CWE e classes de fraqueza",
      "difficulty": "Intermediário",
      "statement": "Sobre “CWE e classes de fraqueza”, assinale a alternativa correta.",
      "options": [
        "CWE é uma lista de certificados revogados.",
        "CVE é uma categoria abstrata de fraqueza, nunca um caso concreto.",
        "CWE descreve tipos de fraqueza; CVE identifica vulnerabilidades específicas que podem ser associadas a uma ou mais classes CWE.",
        "XSS é um mecanismo de redundância.",
        "CWE substitui o OWASP SAMM."
      ],
      "correct": 2,
      "explanation": "CWE descreve tipos de fraqueza; CVE identifica vulnerabilidades específicas que podem ser associadas a uma ou mais classes CWE.",
      "wrong": [
        "Incorreta. A proposição “CWE é uma lista de certificados revogados.” contraria ou desloca o conceito central cobrado nesta microlição. CWE descreve tipos de fraqueza; CVE identifica vulnerabilidades específicas que podem ser associadas a uma ou mais classes CWE.",
        "Incorreta. A proposição “CVE é uma categoria abstrata de fraqueza, nunca um caso concreto.” contraria ou desloca o conceito central cobrado nesta microlição. CWE descreve tipos de fraqueza; CVE identifica vulnerabilidades específicas que podem ser associadas a uma ou mais classes CWE.",
        "Correta. CWE descreve tipos de fraqueza; CVE identifica vulnerabilidades específicas que podem ser associadas a uma ou mais classes CWE.",
        "Incorreta. A proposição “XSS é um mecanismo de redundância.” contraria ou desloca o conceito central cobrado nesta microlição. CWE descreve tipos de fraqueza; CVE identifica vulnerabilidades específicas que podem ser associadas a uma ou mais classes CWE.",
        "Incorreta. A proposição “CWE substitui o OWASP SAMM.” contraria ou desloca o conceito central cobrado nesta microlição. CWE descreve tipos de fraqueza; CVE identifica vulnerabilidades específicas que podem ser associadas a uma ou mais classes CWE."
      ],
      "source": "Questão autoral Versa · edital Transpetro 2026.4",
      "board": "CESGRANRIO — estilo de treino",
      "examYear": 2026,
      "feedbackVersion": "1.7.1"
    },
    {
      "id": "trc-q039b",
      "lessonId": "trc-l039",
      "topic": "CWE e classes de fraqueza",
      "difficulty": "Intermediário",
      "statement": "No contexto de “CWE e classes de fraqueza”, assinale a afirmação compatível com a microlição.",
      "options": [
        "Evidência digital pode ser coletada sem preservação de integridade ou rastreabilidade, desde que o conteúdo pareça tecnicamente útil.",
        "Defesa em profundidade significa concentrar a proteção em um único controle de perímetro suficientemente robusto.",
        "Autenticação, autorização, confidencialidade, integridade e disponibilidade são propriedades equivalentes e podem ser tratadas como sinônimos.",
        "Controles preventivos eliminam a necessidade de detecção, resposta, recuperação e monitoramento.",
        "CWE é taxonomia de fraquezas."
      ],
      "correct": 4,
      "explanation": "Na microlição, a orientação-chave é: “CWE é taxonomia de fraquezas.”. CWE cataloga classes de fraquezas de software/hardware.",
      "wrong": [
        "Incorreta. A proposição “Evidência digital pode ser coletada sem preservação de integridade ou rastreabilidade, desde que o conteúdo pareça tecnicamente útil.” contraria ou desloca o conceito central cobrado nesta microlição. Na microlição, a orientação-chave é: “CWE é taxonomia de fraquezas.”. CWE cataloga classes de fraquezas de software/hardware.",
        "Incorreta. A proposição “Defesa em profundidade significa concentrar a proteção em um único controle de perímetro suficientemente robusto.” contraria ou desloca o conceito central cobrado nesta microlição. Na microlição, a orientação-chave é: “CWE é taxonomia de fraquezas.”. CWE cataloga classes de fraquezas de software/hardware.",
        "Incorreta. A proposição “Autenticação, autorização, confidencialidade, integridade e disponibilidade são propriedades equivalentes e podem ser tratadas como sinônimos.” contraria ou desloca o conceito central cobrado nesta microlição. Na microlição, a orientação-chave é: “CWE é taxonomia de fraquezas.”. CWE cataloga classes de fraquezas de software/hardware.",
        "Incorreta. A proposição “Controles preventivos eliminam a necessidade de detecção, resposta, recuperação e monitoramento.” contraria ou desloca o conceito central cobrado nesta microlição. Na microlição, a orientação-chave é: “CWE é taxonomia de fraquezas.”. CWE cataloga classes de fraquezas de software/hardware.",
        "Correta. Na microlição, a orientação-chave é: “CWE é taxonomia de fraquezas.”. CWE cataloga classes de fraquezas de software/hardware."
      ],
      "source": "Questão autoral Versa · edital Transpetro 2026.4",
      "board": "CESGRANRIO — estilo de treino",
      "examYear": 2026,
      "authorialRevision": "v1.7.1",
      "feedbackVersion": "1.7.1"
    },
    {
      "id": "trc-q040",
      "lessonId": "trc-l040",
      "topic": "Hash, cifragem simétrica e assimétrica",
      "difficulty": "Intermediário",
      "statement": "Sobre “Hash, cifragem simétrica e assimétrica”, assinale a alternativa correta.",
      "options": [
        "Hash é projetado como transformação unidirecional para produzir resumo; cifragem é reversível para quem possui a chave apropriada.",
        "AES produz sempre blocos de 256 bits.",
        "SHA-256 é uma cifra simétrica reversível.",
        "RSA utiliza a mesma chave secreta em ambos os lados.",
        "Diffie-Hellman é um algoritmo de hash de senha."
      ],
      "correct": 0,
      "explanation": "Hash é projetado como transformação unidirecional para produzir resumo; cifragem é reversível para quem possui a chave apropriada.",
      "wrong": [
        "Correta. Hash é projetado como transformação unidirecional para produzir resumo; cifragem é reversível para quem possui a chave apropriada.",
        "Incorreta. A proposição “AES produz sempre blocos de 256 bits.” contraria ou desloca o conceito central cobrado nesta microlição. Hash é projetado como transformação unidirecional para produzir resumo; cifragem é reversível para quem possui a chave apropriada.",
        "Incorreta. A proposição “SHA-256 é uma cifra simétrica reversível.” contraria ou desloca o conceito central cobrado nesta microlição. Hash é projetado como transformação unidirecional para produzir resumo; cifragem é reversível para quem possui a chave apropriada.",
        "Incorreta. A proposição “RSA utiliza a mesma chave secreta em ambos os lados.” contraria ou desloca o conceito central cobrado nesta microlição. Hash é projetado como transformação unidirecional para produzir resumo; cifragem é reversível para quem possui a chave apropriada.",
        "Incorreta. A proposição “Diffie-Hellman é um algoritmo de hash de senha.” contraria ou desloca o conceito central cobrado nesta microlição. Hash é projetado como transformação unidirecional para produzir resumo; cifragem é reversível para quem possui a chave apropriada."
      ],
      "source": "Questão autoral Versa · edital Transpetro 2026.4",
      "board": "CESGRANRIO — estilo de treino",
      "examYear": 2026,
      "feedbackVersion": "1.7.1"
    },
    {
      "id": "trc-q040b",
      "lessonId": "trc-l040",
      "topic": "Hash, cifragem simétrica e assimétrica",
      "difficulty": "Intermediário",
      "statement": "Sobre “Hash, cifragem simétrica e assimétrica”, qual afirmação sintetiza corretamente um ponto essencial da microlição?",
      "options": [
        "AES admite chaves de 128, 192 ou 256 bits.",
        "Defesa em profundidade significa concentrar a proteção em um único controle de perímetro suficientemente robusto.",
        "Autenticação, autorização, confidencialidade, integridade e disponibilidade são propriedades equivalentes e podem ser tratadas como sinônimos.",
        "Controles preventivos eliminam a necessidade de detecção, resposta, recuperação e monitoramento.",
        "Criptografia garante, sozinha, disponibilidade, autenticidade, autorização e continuidade de todos os serviços."
      ],
      "correct": 0,
      "explanation": "Na microlição, a orientação-chave é: “AES admite chaves de 128, 192 ou 256 bits.”. Hash gera resumo unidirecional de tamanho definido; cifragem simétrica usa segredo compartilhado; criptografia assimétrica usa par de chaves relacionadas.",
      "wrong": [
        "Correta. Na microlição, a orientação-chave é: “AES admite chaves de 128, 192 ou 256 bits.”. Hash gera resumo unidirecional de tamanho definido; cifragem simétrica usa segredo compartilhado; criptografia assimétrica usa par de chaves relacionadas.",
        "Incorreta. A proposição “Defesa em profundidade significa concentrar a proteção em um único controle de perímetro suficientemente robusto.” contraria ou desloca o conceito central cobrado nesta microlição. Na microlição, a orientação-chave é: “AES admite chaves de 128, 192 ou 256 bits.”. Hash gera resumo unidirecional de tamanho definido; cifragem simétrica usa segredo compartilhado; criptografia assimétrica usa par de chaves relacionadas.",
        "Incorreta. A proposição “Autenticação, autorização, confidencialidade, integridade e disponibilidade são propriedades equivalentes e podem ser tratadas como sinônimos.” contraria ou desloca o conceito central cobrado nesta microlição. Na microlição, a orientação-chave é: “AES admite chaves de 128, 192 ou 256 bits.”. Hash gera resumo unidirecional de tamanho definido; cifragem simétrica usa segredo compartilhado; criptografia assimétrica usa par de chaves relacionadas.",
        "Incorreta. A proposição “Controles preventivos eliminam a necessidade de detecção, resposta, recuperação e monitoramento.” contraria ou desloca o conceito central cobrado nesta microlição. Na microlição, a orientação-chave é: “AES admite chaves de 128, 192 ou 256 bits.”. Hash gera resumo unidirecional de tamanho definido; cifragem simétrica usa segredo compartilhado; criptografia assimétrica usa par de chaves relacionadas.",
        "Incorreta. A proposição “Criptografia garante, sozinha, disponibilidade, autenticidade, autorização e continuidade de todos os serviços.” contraria ou desloca o conceito central cobrado nesta microlição. Na microlição, a orientação-chave é: “AES admite chaves de 128, 192 ou 256 bits.”. Hash gera resumo unidirecional de tamanho definido; cifragem simétrica usa segredo compartilhado; criptografia assimétrica usa par de chaves relacionadas."
      ],
      "source": "Questão autoral Versa · edital Transpetro 2026.4",
      "board": "CESGRANRIO — estilo de treino",
      "examYear": 2026,
      "authorialRevision": "v1.7.1",
      "feedbackVersion": "1.7.1"
    },
    {
      "id": "trc-q041",
      "lessonId": "trc-l041",
      "topic": "Assinatura, envelope digital e carimbo do tempo",
      "difficulty": "Intermediário",
      "statement": "Sobre “Assinatura, envelope digital e carimbo do tempo”, assinale a alternativa correta.",
      "options": [
        "Assinatura digital torna o conteúdo secreto por definição.",
        "Envelope digital usa apenas hash, sem cifragem.",
        "Carimbo do tempo substitui a identidade do signatário.",
        "Assinatura digital apoia autenticidade, integridade e não repúdio; confidencialidade requer mecanismo de cifragem quando necessária.",
        "Assinatura é verificada exclusivamente com a mesma chave privada."
      ],
      "correct": 3,
      "explanation": "Assinatura digital apoia autenticidade, integridade e não repúdio; confidencialidade requer mecanismo de cifragem quando necessária.",
      "wrong": [
        "Incorreta. A proposição “Assinatura digital torna o conteúdo secreto por definição.” contraria ou desloca o conceito central cobrado nesta microlição. Assinatura digital apoia autenticidade, integridade e não repúdio; confidencialidade requer mecanismo de cifragem quando necessária.",
        "Incorreta. A proposição “Envelope digital usa apenas hash, sem cifragem.” contraria ou desloca o conceito central cobrado nesta microlição. Assinatura digital apoia autenticidade, integridade e não repúdio; confidencialidade requer mecanismo de cifragem quando necessária.",
        "Incorreta. A proposição “Carimbo do tempo substitui a identidade do signatário.” contraria ou desloca o conceito central cobrado nesta microlição. Assinatura digital apoia autenticidade, integridade e não repúdio; confidencialidade requer mecanismo de cifragem quando necessária.",
        "Correta. Assinatura digital apoia autenticidade, integridade e não repúdio; confidencialidade requer mecanismo de cifragem quando necessária.",
        "Incorreta. A proposição “Assinatura é verificada exclusivamente com a mesma chave privada.” contraria ou desloca o conceito central cobrado nesta microlição. Assinatura digital apoia autenticidade, integridade e não repúdio; confidencialidade requer mecanismo de cifragem quando necessária."
      ],
      "source": "Questão autoral Versa · edital Transpetro 2026.4",
      "board": "CESGRANRIO — estilo de treino",
      "examYear": 2026,
      "feedbackVersion": "1.7.1"
    },
    {
      "id": "trc-q041b",
      "lessonId": "trc-l041",
      "topic": "Assinatura, envelope digital e carimbo do tempo",
      "difficulty": "Intermediário",
      "statement": "Ao revisar “Assinatura, envelope digital e carimbo do tempo” para a CESGRANRIO, qual alternativa deve ser mantida como correta?",
      "options": [
        "Autenticação, autorização, confidencialidade, integridade e disponibilidade são propriedades equivalentes e podem ser tratadas como sinônimos.",
        "Carimbo do tempo vincula evidência a um instante/período confiável.",
        "Controles preventivos eliminam a necessidade de detecção, resposta, recuperação e monitoramento.",
        "Criptografia garante, sozinha, disponibilidade, autenticidade, autorização e continuidade de todos os serviços.",
        "Hardening consiste em habilitar o maior número possível de serviços para aumentar a compatibilidade do sistema."
      ],
      "correct": 1,
      "explanation": "Na microlição, a orientação-chave é: “Carimbo do tempo vincula evidência a um instante/período confiável.”. Assinatura digital normalmente usa a chave privada do signatário e verificação com a chave pública; envelope digital combina criptografia assimétrica para proteger uma chave de sessão com cifragem simétrica dos dados; carimbo do tempo fornece evidência temporal emitida por entidade apropriada.",
      "wrong": [
        "Incorreta. A proposição “Autenticação, autorização, confidencialidade, integridade e disponibilidade são propriedades equivalentes e podem ser tratadas como sinônimos.” contraria ou desloca o conceito central cobrado nesta microlição. Na microlição, a orientação-chave é: “Carimbo do tempo vincula evidência a um instante/período confiável.”. Assinatura digital normalmente usa a chave privada do signatário e verificação com a chave pública; envelope digital combina criptografia assimétrica para proteger uma chave de sessão com cifragem simétrica dos dados; carimbo do tempo fornece evidência temporal emitida por entidade apropriada.",
        "Correta. Na microlição, a orientação-chave é: “Carimbo do tempo vincula evidência a um instante/período confiável.”. Assinatura digital normalmente usa a chave privada do signatário e verificação com a chave pública; envelope digital combina criptografia assimétrica para proteger uma chave de sessão com cifragem simétrica dos dados; carimbo do tempo fornece evidência temporal emitida por entidade apropriada.",
        "Incorreta. A proposição “Controles preventivos eliminam a necessidade de detecção, resposta, recuperação e monitoramento.” contraria ou desloca o conceito central cobrado nesta microlição. Na microlição, a orientação-chave é: “Carimbo do tempo vincula evidência a um instante/período confiável.”. Assinatura digital normalmente usa a chave privada do signatário e verificação com a chave pública; envelope digital combina criptografia assimétrica para proteger uma chave de sessão com cifragem simétrica dos dados; carimbo do tempo fornece evidência temporal emitida por entidade apropriada.",
        "Incorreta. A proposição “Criptografia garante, sozinha, disponibilidade, autenticidade, autorização e continuidade de todos os serviços.” contraria ou desloca o conceito central cobrado nesta microlição. Na microlição, a orientação-chave é: “Carimbo do tempo vincula evidência a um instante/período confiável.”. Assinatura digital normalmente usa a chave privada do signatário e verificação com a chave pública; envelope digital combina criptografia assimétrica para proteger uma chave de sessão com cifragem simétrica dos dados; carimbo do tempo fornece evidência temporal emitida por entidade apropriada.",
        "Incorreta. A proposição “Hardening consiste em habilitar o maior número possível de serviços para aumentar a compatibilidade do sistema.” contraria ou desloca o conceito central cobrado nesta microlição. Na microlição, a orientação-chave é: “Carimbo do tempo vincula evidência a um instante/período confiável.”. Assinatura digital normalmente usa a chave privada do signatário e verificação com a chave pública; envelope digital combina criptografia assimétrica para proteger uma chave de sessão com cifragem simétrica dos dados; carimbo do tempo fornece evidência temporal emitida por entidade apropriada."
      ],
      "source": "Questão autoral Versa · edital Transpetro 2026.4",
      "board": "CESGRANRIO — estilo de treino",
      "examYear": 2026,
      "authorialRevision": "v1.7.1",
      "feedbackVersion": "1.7.1"
    },
    {
      "id": "trc-q042",
      "lessonId": "trc-l042",
      "topic": "Certificados digitais, PKI e posse da chave",
      "difficulty": "Intermediário",
      "statement": "Sobre “Certificados digitais, PKI e posse da chave”, assinale a alternativa correta.",
      "options": [
        "O certificado publica a chave privada do titular.",
        "Deve haver prova de posse da chave privada correspondente à chave pública contida no certificado, além da validação da cadeia, prazo e revogação.",
        "A AC raiz assina obrigatoriamente cada certificado final diretamente.",
        "A validade do certificado torna desnecessária a verificação de revogação.",
        "Chave pública e privada são idênticas."
      ],
      "correct": 1,
      "explanation": "Deve haver prova de posse da chave privada correspondente à chave pública contida no certificado, além da validação da cadeia, prazo e revogação.",
      "wrong": [
        "Incorreta. A proposição “O certificado publica a chave privada do titular.” contraria ou desloca o conceito central cobrado nesta microlição. Deve haver prova de posse da chave privada correspondente à chave pública contida no certificado, além da validação da cadeia, prazo e revogação.",
        "Correta. Deve haver prova de posse da chave privada correspondente à chave pública contida no certificado, além da validação da cadeia, prazo e revogação.",
        "Incorreta. A proposição “A AC raiz assina obrigatoriamente cada certificado final diretamente.” contraria ou desloca o conceito central cobrado nesta microlição. Deve haver prova de posse da chave privada correspondente à chave pública contida no certificado, além da validação da cadeia, prazo e revogação.",
        "Incorreta. A proposição “A validade do certificado torna desnecessária a verificação de revogação.” contraria ou desloca o conceito central cobrado nesta microlição. Deve haver prova de posse da chave privada correspondente à chave pública contida no certificado, além da validação da cadeia, prazo e revogação.",
        "Incorreta. A proposição “Chave pública e privada são idênticas.” contraria ou desloca o conceito central cobrado nesta microlição. Deve haver prova de posse da chave privada correspondente à chave pública contida no certificado, além da validação da cadeia, prazo e revogação."
      ],
      "source": "Questão autoral Versa · edital Transpetro 2026.4",
      "board": "CESGRANRIO — estilo de treino",
      "examYear": 2026,
      "feedbackVersion": "1.7.1"
    },
    {
      "id": "trc-q042b",
      "lessonId": "trc-l042",
      "topic": "Certificados digitais, PKI e posse da chave",
      "difficulty": "Intermediário",
      "statement": "Para resolver uma questão sobre “Certificados digitais, PKI e posse da chave”, qual orientação conceitual está de acordo com o conteúdo estudado?",
      "options": [
        "Controles preventivos eliminam a necessidade de detecção, resposta, recuperação e monitoramento.",
        "Criptografia garante, sozinha, disponibilidade, autenticidade, autorização e continuidade de todos os serviços.",
        "Certificado contém chave pública, não a privada do titular.",
        "Hardening consiste em habilitar o maior número possível de serviços para aumentar a compatibilidade do sistema.",
        "Vulnerabilidades publicadas, fraquezas de software e riscos operacionais são exatamente o mesmo conceito."
      ],
      "correct": 2,
      "explanation": "Na microlição, a orientação-chave é: “Certificado contém chave pública, não a privada do titular.”. Certificado liga uma identidade a uma chave pública e é assinado por uma autoridade certificadora.",
      "wrong": [
        "Incorreta. A proposição “Controles preventivos eliminam a necessidade de detecção, resposta, recuperação e monitoramento.” contraria ou desloca o conceito central cobrado nesta microlição. Na microlição, a orientação-chave é: “Certificado contém chave pública, não a privada do titular.”. Certificado liga uma identidade a uma chave pública e é assinado por uma autoridade certificadora.",
        "Incorreta. A proposição “Criptografia garante, sozinha, disponibilidade, autenticidade, autorização e continuidade de todos os serviços.” contraria ou desloca o conceito central cobrado nesta microlição. Na microlição, a orientação-chave é: “Certificado contém chave pública, não a privada do titular.”. Certificado liga uma identidade a uma chave pública e é assinado por uma autoridade certificadora.",
        "Correta. Na microlição, a orientação-chave é: “Certificado contém chave pública, não a privada do titular.”. Certificado liga uma identidade a uma chave pública e é assinado por uma autoridade certificadora.",
        "Incorreta. A proposição “Hardening consiste em habilitar o maior número possível de serviços para aumentar a compatibilidade do sistema.” contraria ou desloca o conceito central cobrado nesta microlição. Na microlição, a orientação-chave é: “Certificado contém chave pública, não a privada do titular.”. Certificado liga uma identidade a uma chave pública e é assinado por uma autoridade certificadora.",
        "Incorreta. A proposição “Vulnerabilidades publicadas, fraquezas de software e riscos operacionais são exatamente o mesmo conceito.” contraria ou desloca o conceito central cobrado nesta microlição. Na microlição, a orientação-chave é: “Certificado contém chave pública, não a privada do titular.”. Certificado liga uma identidade a uma chave pública e é assinado por uma autoridade certificadora."
      ],
      "source": "Questão autoral Versa · edital Transpetro 2026.4",
      "board": "CESGRANRIO — estilo de treino",
      "examYear": 2026,
      "authorialRevision": "v1.7.1",
      "feedbackVersion": "1.7.1"
    },
    {
      "id": "trc-q043",
      "lessonId": "trc-l043",
      "topic": "ICP-Brasil, MFA e autoridades de confiança",
      "difficulty": "Intermediário",
      "statement": "Sobre “ICP-Brasil, MFA e autoridades de confiança”, assinale a alternativa correta.",
      "options": [
        "Duas perguntas de segurança são sempre dois fatores independentes.",
        "Autoridade Certificadora emite a chave privada de todo usuário em texto público.",
        "ACT é um firewall de aplicação.",
        "MFA elimina a necessidade de proteger sessões e endpoints.",
        "MFA combina evidências de categorias independentes de autenticação, como algo que o usuário sabe e algo que possui."
      ],
      "correct": 4,
      "explanation": "MFA combina evidências de categorias independentes de autenticação, como algo que o usuário sabe e algo que possui.",
      "wrong": [
        "Incorreta. A proposição “Duas perguntas de segurança são sempre dois fatores independentes.” contraria ou desloca o conceito central cobrado nesta microlição. MFA combina evidências de categorias independentes de autenticação, como algo que o usuário sabe e algo que possui.",
        "Incorreta. A proposição “Autoridade Certificadora emite a chave privada de todo usuário em texto público.” contraria ou desloca o conceito central cobrado nesta microlição. MFA combina evidências de categorias independentes de autenticação, como algo que o usuário sabe e algo que possui.",
        "Incorreta. A proposição “ACT é um firewall de aplicação.” contraria ou desloca o conceito central cobrado nesta microlição. MFA combina evidências de categorias independentes de autenticação, como algo que o usuário sabe e algo que possui.",
        "Incorreta. A proposição “MFA elimina a necessidade de proteger sessões e endpoints.” contraria ou desloca o conceito central cobrado nesta microlição. MFA combina evidências de categorias independentes de autenticação, como algo que o usuário sabe e algo que possui.",
        "Correta. MFA combina evidências de categorias independentes de autenticação, como algo que o usuário sabe e algo que possui."
      ],
      "source": "Questão autoral Versa · edital Transpetro 2026.4",
      "board": "CESGRANRIO — estilo de treino",
      "examYear": 2026,
      "feedbackVersion": "1.7.1"
    },
    {
      "id": "trc-q043b",
      "lessonId": "trc-l043",
      "topic": "ICP-Brasil, MFA e autoridades de confiança",
      "difficulty": "Intermediário",
      "statement": "No contexto de “ICP-Brasil, MFA e autoridades de confiança”, assinale a afirmação compatível com a microlição.",
      "options": [
        "Criptografia garante, sozinha, disponibilidade, autenticidade, autorização e continuidade de todos os serviços.",
        "Hardening consiste em habilitar o maior número possível de serviços para aumentar a compatibilidade do sistema.",
        "Vulnerabilidades publicadas, fraquezas de software e riscos operacionais são exatamente o mesmo conceito.",
        "Certificado pode representar fator de posse quando a chave privada está sob controle do usuário.",
        "Em OT/ICS, disponibilidade e segurança operacional têm a mesma tolerância a interrupções encontrada em ambientes de TI corporativa comum."
      ],
      "correct": 3,
      "explanation": "Na microlição, a orientação-chave é: “Certificado pode representar fator de posse quando a chave privada está sob controle do usuário.”. Na ICP-Brasil, autoridades certificadoras emitem certificados segundo a cadeia de confiança; Autoridades de Carimbo do Tempo fornecem evidência temporal.",
      "wrong": [
        "Incorreta. A proposição “Criptografia garante, sozinha, disponibilidade, autenticidade, autorização e continuidade de todos os serviços.” contraria ou desloca o conceito central cobrado nesta microlição. Na microlição, a orientação-chave é: “Certificado pode representar fator de posse quando a chave privada está sob controle do usuário.”. Na ICP-Brasil, autoridades certificadoras emitem certificados segundo a cadeia de confiança; Autoridades de Carimbo do Tempo fornecem evidência temporal.",
        "Incorreta. A proposição “Hardening consiste em habilitar o maior número possível de serviços para aumentar a compatibilidade do sistema.” contraria ou desloca o conceito central cobrado nesta microlição. Na microlição, a orientação-chave é: “Certificado pode representar fator de posse quando a chave privada está sob controle do usuário.”. Na ICP-Brasil, autoridades certificadoras emitem certificados segundo a cadeia de confiança; Autoridades de Carimbo do Tempo fornecem evidência temporal.",
        "Incorreta. A proposição “Vulnerabilidades publicadas, fraquezas de software e riscos operacionais são exatamente o mesmo conceito.” contraria ou desloca o conceito central cobrado nesta microlição. Na microlição, a orientação-chave é: “Certificado pode representar fator de posse quando a chave privada está sob controle do usuário.”. Na ICP-Brasil, autoridades certificadoras emitem certificados segundo a cadeia de confiança; Autoridades de Carimbo do Tempo fornecem evidência temporal.",
        "Correta. Na microlição, a orientação-chave é: “Certificado pode representar fator de posse quando a chave privada está sob controle do usuário.”. Na ICP-Brasil, autoridades certificadoras emitem certificados segundo a cadeia de confiança; Autoridades de Carimbo do Tempo fornecem evidência temporal.",
        "Incorreta. A proposição “Em OT/ICS, disponibilidade e segurança operacional têm a mesma tolerância a interrupções encontrada em ambientes de TI corporativa comum.” contraria ou desloca o conceito central cobrado nesta microlição. Na microlição, a orientação-chave é: “Certificado pode representar fator de posse quando a chave privada está sob controle do usuário.”. Na ICP-Brasil, autoridades certificadoras emitem certificados segundo a cadeia de confiança; Autoridades de Carimbo do Tempo fornecem evidência temporal."
      ],
      "source": "Questão autoral Versa · edital Transpetro 2026.4",
      "board": "CESGRANRIO — estilo de treino",
      "examYear": 2026,
      "authorialRevision": "v1.7.1",
      "feedbackVersion": "1.7.1"
    },
    {
      "id": "trc-q044",
      "lessonId": "trc-l044",
      "topic": "TLS, SSL e IPsec",
      "difficulty": "Intermediário",
      "statement": "Sobre “TLS, SSL e IPsec”, assinale a alternativa correta.",
      "options": [
        "IKE é um algoritmo de hash usado por SHA-256.",
        "SSLv3 é a versão atual recomendada do TLS.",
        "IKE negocia associações de segurança, algoritmos e material de chave usados pelo IPsec; não é o protocolo que carrega diretamente os dados da aplicação.",
        "IPsec funciona apenas dentro do navegador web.",
        "AH fornece confidencialidade por cifrar todo o payload."
      ],
      "correct": 2,
      "explanation": "IKE negocia associações de segurança, algoritmos e material de chave usados pelo IPsec; não é o protocolo que carrega diretamente os dados da aplicação.",
      "wrong": [
        "Incorreta. A proposição “IKE é um algoritmo de hash usado por SHA-256.” contraria ou desloca o conceito central cobrado nesta microlição. IKE negocia associações de segurança, algoritmos e material de chave usados pelo IPsec; não é o protocolo que carrega diretamente os dados da aplicação.",
        "Incorreta. A proposição “SSLv3 é a versão atual recomendada do TLS.” contraria ou desloca o conceito central cobrado nesta microlição. IKE negocia associações de segurança, algoritmos e material de chave usados pelo IPsec; não é o protocolo que carrega diretamente os dados da aplicação.",
        "Correta. IKE negocia associações de segurança, algoritmos e material de chave usados pelo IPsec; não é o protocolo que carrega diretamente os dados da aplicação.",
        "Incorreta. A proposição “IPsec funciona apenas dentro do navegador web.” contraria ou desloca o conceito central cobrado nesta microlição. IKE negocia associações de segurança, algoritmos e material de chave usados pelo IPsec; não é o protocolo que carrega diretamente os dados da aplicação.",
        "Incorreta. A proposição “AH fornece confidencialidade por cifrar todo o payload.” contraria ou desloca o conceito central cobrado nesta microlição. IKE negocia associações de segurança, algoritmos e material de chave usados pelo IPsec; não é o protocolo que carrega diretamente os dados da aplicação."
      ],
      "source": "Questão autoral Versa · edital Transpetro 2026.4",
      "board": "CESGRANRIO — estilo de treino",
      "examYear": 2026,
      "feedbackVersion": "1.7.1"
    },
    {
      "id": "trc-q044b",
      "lessonId": "trc-l044",
      "topic": "TLS, SSL e IPsec",
      "difficulty": "Intermediário",
      "statement": "Sobre “TLS, SSL e IPsec”, qual afirmação sintetiza corretamente um ponto essencial da microlição?",
      "options": [
        "Hardening consiste em habilitar o maior número possível de serviços para aumentar a compatibilidade do sistema.",
        "Vulnerabilidades publicadas, fraquezas de software e riscos operacionais são exatamente o mesmo conceito.",
        "Em OT/ICS, disponibilidade e segurança operacional têm a mesma tolerância a interrupções encontrada em ambientes de TI corporativa comum.",
        "Evidência digital pode ser coletada sem preservação de integridade ou rastreabilidade, desde que o conteúdo pareça tecnicamente útil.",
        "TLS autentica servidor e pode autenticar cliente conforme configuração."
      ],
      "correct": 4,
      "explanation": "Na microlição, a orientação-chave é: “TLS autentica servidor e pode autenticar cliente conforme configuração.”. TLS protege comunicações sobre transporte e substitui versões SSL obsoletas; IPsec protege tráfego na camada IP por mecanismos como ESP e AH, com IKE usado para negociação/gerenciamento de chaves.",
      "wrong": [
        "Incorreta. A proposição “Hardening consiste em habilitar o maior número possível de serviços para aumentar a compatibilidade do sistema.” contraria ou desloca o conceito central cobrado nesta microlição. Na microlição, a orientação-chave é: “TLS autentica servidor e pode autenticar cliente conforme configuração.”. TLS protege comunicações sobre transporte e substitui versões SSL obsoletas; IPsec protege tráfego na camada IP por mecanismos como ESP e AH, com IKE usado para negociação/gerenciamento de chaves.",
        "Incorreta. A proposição “Vulnerabilidades publicadas, fraquezas de software e riscos operacionais são exatamente o mesmo conceito.” contraria ou desloca o conceito central cobrado nesta microlição. Na microlição, a orientação-chave é: “TLS autentica servidor e pode autenticar cliente conforme configuração.”. TLS protege comunicações sobre transporte e substitui versões SSL obsoletas; IPsec protege tráfego na camada IP por mecanismos como ESP e AH, com IKE usado para negociação/gerenciamento de chaves.",
        "Incorreta. A proposição “Em OT/ICS, disponibilidade e segurança operacional têm a mesma tolerância a interrupções encontrada em ambientes de TI corporativa comum.” contraria ou desloca o conceito central cobrado nesta microlição. Na microlição, a orientação-chave é: “TLS autentica servidor e pode autenticar cliente conforme configuração.”. TLS protege comunicações sobre transporte e substitui versões SSL obsoletas; IPsec protege tráfego na camada IP por mecanismos como ESP e AH, com IKE usado para negociação/gerenciamento de chaves.",
        "Incorreta. A proposição “Evidência digital pode ser coletada sem preservação de integridade ou rastreabilidade, desde que o conteúdo pareça tecnicamente útil.” contraria ou desloca o conceito central cobrado nesta microlição. Na microlição, a orientação-chave é: “TLS autentica servidor e pode autenticar cliente conforme configuração.”. TLS protege comunicações sobre transporte e substitui versões SSL obsoletas; IPsec protege tráfego na camada IP por mecanismos como ESP e AH, com IKE usado para negociação/gerenciamento de chaves.",
        "Correta. Na microlição, a orientação-chave é: “TLS autentica servidor e pode autenticar cliente conforme configuração.”. TLS protege comunicações sobre transporte e substitui versões SSL obsoletas; IPsec protege tráfego na camada IP por mecanismos como ESP e AH, com IKE usado para negociação/gerenciamento de chaves."
      ],
      "source": "Questão autoral Versa · edital Transpetro 2026.4",
      "board": "CESGRANRIO — estilo de treino",
      "examYear": 2026,
      "authorialRevision": "v1.7.1",
      "feedbackVersion": "1.7.1"
    },
    {
      "id": "trc-q045",
      "lessonId": "trc-l045",
      "topic": "Antimalware e firewall pessoal",
      "difficulty": "Intermediário",
      "statement": "Sobre “Antimalware e firewall pessoal”, assinale a alternativa correta.",
      "options": [
        "Antimalware e firewall pessoal cobrem classes de risco distintas e devem ser combinados com hardening, patching, identidade e monitoramento.",
        "Firewall pessoal remove todas as vulnerabilidades do sistema.",
        "Antimalware substitui qualquer controle de acesso.",
        "Atualizações reduzem a eficácia dos controles.",
        "Endpoint não participa da defesa em profundidade."
      ],
      "correct": 0,
      "explanation": "Antimalware e firewall pessoal cobrem classes de risco distintas e devem ser combinados com hardening, patching, identidade e monitoramento.",
      "wrong": [
        "Correta. Antimalware e firewall pessoal cobrem classes de risco distintas e devem ser combinados com hardening, patching, identidade e monitoramento.",
        "Incorreta. A proposição “Firewall pessoal remove todas as vulnerabilidades do sistema.” contraria ou desloca o conceito central cobrado nesta microlição. Antimalware e firewall pessoal cobrem classes de risco distintas e devem ser combinados com hardening, patching, identidade e monitoramento.",
        "Incorreta. A proposição “Antimalware substitui qualquer controle de acesso.” contraria ou desloca o conceito central cobrado nesta microlição. Antimalware e firewall pessoal cobrem classes de risco distintas e devem ser combinados com hardening, patching, identidade e monitoramento.",
        "Incorreta. A proposição “Atualizações reduzem a eficácia dos controles.” contraria ou desloca o conceito central cobrado nesta microlição. Antimalware e firewall pessoal cobrem classes de risco distintas e devem ser combinados com hardening, patching, identidade e monitoramento.",
        "Incorreta. A proposição “Endpoint não participa da defesa em profundidade.” contraria ou desloca o conceito central cobrado nesta microlição. Antimalware e firewall pessoal cobrem classes de risco distintas e devem ser combinados com hardening, patching, identidade e monitoramento."
      ],
      "source": "Questão autoral Versa · edital Transpetro 2026.4",
      "board": "CESGRANRIO — estilo de treino",
      "examYear": 2026,
      "feedbackVersion": "1.7.1"
    },
    {
      "id": "trc-q045b",
      "lessonId": "trc-l045",
      "topic": "Antimalware e firewall pessoal",
      "difficulty": "Intermediário",
      "statement": "Ao revisar “Antimalware e firewall pessoal” para a CESGRANRIO, qual alternativa deve ser mantida como correta?",
      "options": [
        "Assinaturas podem ser complementadas por comportamento.",
        "Vulnerabilidades publicadas, fraquezas de software e riscos operacionais são exatamente o mesmo conceito.",
        "Em OT/ICS, disponibilidade e segurança operacional têm a mesma tolerância a interrupções encontrada em ambientes de TI corporativa comum.",
        "Evidência digital pode ser coletada sem preservação de integridade ou rastreabilidade, desde que o conteúdo pareça tecnicamente útil.",
        "Defesa em profundidade significa concentrar a proteção em um único controle de perímetro suficientemente robusto."
      ],
      "correct": 0,
      "explanation": "Na microlição, a orientação-chave é: “Assinaturas podem ser complementadas por comportamento.”. Antimalware detecta/preveni código malicioso por múltiplas técnicas; firewall pessoal filtra conexões de entrada e saída no host.",
      "wrong": [
        "Correta. Na microlição, a orientação-chave é: “Assinaturas podem ser complementadas por comportamento.”. Antimalware detecta/preveni código malicioso por múltiplas técnicas; firewall pessoal filtra conexões de entrada e saída no host.",
        "Incorreta. A proposição “Vulnerabilidades publicadas, fraquezas de software e riscos operacionais são exatamente o mesmo conceito.” contraria ou desloca o conceito central cobrado nesta microlição. Na microlição, a orientação-chave é: “Assinaturas podem ser complementadas por comportamento.”. Antimalware detecta/preveni código malicioso por múltiplas técnicas; firewall pessoal filtra conexões de entrada e saída no host.",
        "Incorreta. A proposição “Em OT/ICS, disponibilidade e segurança operacional têm a mesma tolerância a interrupções encontrada em ambientes de TI corporativa comum.” contraria ou desloca o conceito central cobrado nesta microlição. Na microlição, a orientação-chave é: “Assinaturas podem ser complementadas por comportamento.”. Antimalware detecta/preveni código malicioso por múltiplas técnicas; firewall pessoal filtra conexões de entrada e saída no host.",
        "Incorreta. A proposição “Evidência digital pode ser coletada sem preservação de integridade ou rastreabilidade, desde que o conteúdo pareça tecnicamente útil.” contraria ou desloca o conceito central cobrado nesta microlição. Na microlição, a orientação-chave é: “Assinaturas podem ser complementadas por comportamento.”. Antimalware detecta/preveni código malicioso por múltiplas técnicas; firewall pessoal filtra conexões de entrada e saída no host.",
        "Incorreta. A proposição “Defesa em profundidade significa concentrar a proteção em um único controle de perímetro suficientemente robusto.” contraria ou desloca o conceito central cobrado nesta microlição. Na microlição, a orientação-chave é: “Assinaturas podem ser complementadas por comportamento.”. Antimalware detecta/preveni código malicioso por múltiplas técnicas; firewall pessoal filtra conexões de entrada e saída no host."
      ],
      "source": "Questão autoral Versa · edital Transpetro 2026.4",
      "board": "CESGRANRIO — estilo de treino",
      "examYear": 2026,
      "authorialRevision": "v1.7.1",
      "feedbackVersion": "1.7.1"
    },
    {
      "id": "trc-q046",
      "lessonId": "trc-l046",
      "topic": "CIS Benchmarks, Linux e Windows",
      "difficulty": "Intermediário",
      "statement": "Sobre “CIS Benchmarks, Linux e Windows”, assinale a alternativa correta.",
      "options": [
        "CIS Benchmark é um catálogo de malwares.",
        "chmod altera sempre o dono do arquivo.",
        "BitLocker é um protocolo de e-mail.",
        "CIS Benchmarks são guias prescritivos de configuração segura para tecnologias e sistemas, usados como referência de hardening.",
        "Hardening significa habilitar todos os serviços por padrão."
      ],
      "correct": 3,
      "explanation": "CIS Benchmarks são guias prescritivos de configuração segura para tecnologias e sistemas, usados como referência de hardening.",
      "wrong": [
        "Incorreta. A proposição “CIS Benchmark é um catálogo de malwares.” contraria ou desloca o conceito central cobrado nesta microlição. CIS Benchmarks são guias prescritivos de configuração segura para tecnologias e sistemas, usados como referência de hardening.",
        "Incorreta. A proposição “chmod altera sempre o dono do arquivo.” contraria ou desloca o conceito central cobrado nesta microlição. CIS Benchmarks são guias prescritivos de configuração segura para tecnologias e sistemas, usados como referência de hardening.",
        "Incorreta. A proposição “BitLocker é um protocolo de e-mail.” contraria ou desloca o conceito central cobrado nesta microlição. CIS Benchmarks são guias prescritivos de configuração segura para tecnologias e sistemas, usados como referência de hardening.",
        "Correta. CIS Benchmarks são guias prescritivos de configuração segura para tecnologias e sistemas, usados como referência de hardening.",
        "Incorreta. A proposição “Hardening significa habilitar todos os serviços por padrão.” contraria ou desloca o conceito central cobrado nesta microlição. CIS Benchmarks são guias prescritivos de configuração segura para tecnologias e sistemas, usados como referência de hardening."
      ],
      "source": "Questão autoral Versa · edital Transpetro 2026.4",
      "board": "CESGRANRIO — estilo de treino",
      "examYear": 2026,
      "feedbackVersion": "1.7.1"
    },
    {
      "id": "trc-q046b",
      "lessonId": "trc-l046",
      "topic": "CIS Benchmarks, Linux e Windows",
      "difficulty": "Intermediário",
      "statement": "Para resolver uma questão sobre “CIS Benchmarks, Linux e Windows”, qual orientação conceitual está de acordo com o conteúdo estudado?",
      "options": [
        "Em OT/ICS, disponibilidade e segurança operacional têm a mesma tolerância a interrupções encontrada em ambientes de TI corporativa comum.",
        "640 = rw- r-- --- em notação octal.",
        "Evidência digital pode ser coletada sem preservação de integridade ou rastreabilidade, desde que o conteúdo pareça tecnicamente útil.",
        "Defesa em profundidade significa concentrar a proteção em um único controle de perímetro suficientemente robusto.",
        "Autenticação, autorização, confidencialidade, integridade e disponibilidade são propriedades equivalentes e podem ser tratadas como sinônimos."
      ],
      "correct": 1,
      "explanation": "Na microlição, a orientação-chave é: “640 = rw- r-- --- em notação octal.”. CIS Benchmarks fornecem recomendações de configuração segura.",
      "wrong": [
        "Incorreta. A proposição “Em OT/ICS, disponibilidade e segurança operacional têm a mesma tolerância a interrupções encontrada em ambientes de TI corporativa comum.” contraria ou desloca o conceito central cobrado nesta microlição. Na microlição, a orientação-chave é: “640 = rw- r-- --- em notação octal.”. CIS Benchmarks fornecem recomendações de configuração segura.",
        "Correta. Na microlição, a orientação-chave é: “640 = rw- r-- --- em notação octal.”. CIS Benchmarks fornecem recomendações de configuração segura.",
        "Incorreta. A proposição “Evidência digital pode ser coletada sem preservação de integridade ou rastreabilidade, desde que o conteúdo pareça tecnicamente útil.” contraria ou desloca o conceito central cobrado nesta microlição. Na microlição, a orientação-chave é: “640 = rw- r-- --- em notação octal.”. CIS Benchmarks fornecem recomendações de configuração segura.",
        "Incorreta. A proposição “Defesa em profundidade significa concentrar a proteção em um único controle de perímetro suficientemente robusto.” contraria ou desloca o conceito central cobrado nesta microlição. Na microlição, a orientação-chave é: “640 = rw- r-- --- em notação octal.”. CIS Benchmarks fornecem recomendações de configuração segura.",
        "Incorreta. A proposição “Autenticação, autorização, confidencialidade, integridade e disponibilidade são propriedades equivalentes e podem ser tratadas como sinônimos.” contraria ou desloca o conceito central cobrado nesta microlição. Na microlição, a orientação-chave é: “640 = rw- r-- --- em notação octal.”. CIS Benchmarks fornecem recomendações de configuração segura."
      ],
      "source": "Questão autoral Versa · edital Transpetro 2026.4",
      "board": "CESGRANRIO — estilo de treino",
      "examYear": 2026,
      "authorialRevision": "v1.7.1",
      "feedbackVersion": "1.7.1"
    },
    {
      "id": "trc-q047",
      "lessonId": "trc-l047",
      "topic": "Redundância, tolerância a falhas e RAID",
      "difficulty": "Intermediário",
      "statement": "Sobre “Redundância, tolerância a falhas e RAID”, assinale a alternativa correta.",
      "options": [
        "RAID 0 usa espelhamento completo.",
        "RAID melhora disponibilidade ou desempenho conforme o nível, mas replica também erros lógicos e não substitui cópias independentes e recuperáveis.",
        "Todo RAID protege contra ransomware por definição.",
        "Redundância reduz disponibilidade.",
        "Backup serve apenas para aumentar IOPS."
      ],
      "correct": 1,
      "explanation": "RAID melhora disponibilidade ou desempenho conforme o nível, mas replica também erros lógicos e não substitui cópias independentes e recuperáveis.",
      "wrong": [
        "Incorreta. A proposição “RAID 0 usa espelhamento completo.” contraria ou desloca o conceito central cobrado nesta microlição. RAID melhora disponibilidade ou desempenho conforme o nível, mas replica também erros lógicos e não substitui cópias independentes e recuperáveis.",
        "Correta. RAID melhora disponibilidade ou desempenho conforme o nível, mas replica também erros lógicos e não substitui cópias independentes e recuperáveis.",
        "Incorreta. A proposição “Todo RAID protege contra ransomware por definição.” contraria ou desloca o conceito central cobrado nesta microlição. RAID melhora disponibilidade ou desempenho conforme o nível, mas replica também erros lógicos e não substitui cópias independentes e recuperáveis.",
        "Incorreta. A proposição “Redundância reduz disponibilidade.” contraria ou desloca o conceito central cobrado nesta microlição. RAID melhora disponibilidade ou desempenho conforme o nível, mas replica também erros lógicos e não substitui cópias independentes e recuperáveis.",
        "Incorreta. A proposição “Backup serve apenas para aumentar IOPS.” contraria ou desloca o conceito central cobrado nesta microlição. RAID melhora disponibilidade ou desempenho conforme o nível, mas replica também erros lógicos e não substitui cópias independentes e recuperáveis."
      ],
      "source": "Questão autoral Versa · edital Transpetro 2026.4",
      "board": "CESGRANRIO — estilo de treino",
      "examYear": 2026,
      "feedbackVersion": "1.7.1"
    },
    {
      "id": "trc-q047b",
      "lessonId": "trc-l047",
      "topic": "Redundância, tolerância a falhas e RAID",
      "difficulty": "Intermediário",
      "statement": "No contexto de “Redundância, tolerância a falhas e RAID”, assinale a afirmação compatível com a microlição.",
      "options": [
        "Evidência digital pode ser coletada sem preservação de integridade ou rastreabilidade, desde que o conteúdo pareça tecnicamente útil.",
        "Defesa em profundidade significa concentrar a proteção em um único controle de perímetro suficientemente robusto.",
        "Backup e RAID resolvem problemas diferentes.",
        "Autenticação, autorização, confidencialidade, integridade e disponibilidade são propriedades equivalentes e podem ser tratadas como sinônimos.",
        "Controles preventivos eliminam a necessidade de detecção, resposta, recuperação e monitoramento."
      ],
      "correct": 2,
      "explanation": "Na microlição, a orientação-chave é: “Backup e RAID resolvem problemas diferentes.”. Tolerância a falhas usa redundância e mecanismos de recuperação para manter serviço diante de falhas.",
      "wrong": [
        "Incorreta. A proposição “Evidência digital pode ser coletada sem preservação de integridade ou rastreabilidade, desde que o conteúdo pareça tecnicamente útil.” contraria ou desloca o conceito central cobrado nesta microlição. Na microlição, a orientação-chave é: “Backup e RAID resolvem problemas diferentes.”. Tolerância a falhas usa redundância e mecanismos de recuperação para manter serviço diante de falhas.",
        "Incorreta. A proposição “Defesa em profundidade significa concentrar a proteção em um único controle de perímetro suficientemente robusto.” contraria ou desloca o conceito central cobrado nesta microlição. Na microlição, a orientação-chave é: “Backup e RAID resolvem problemas diferentes.”. Tolerância a falhas usa redundância e mecanismos de recuperação para manter serviço diante de falhas.",
        "Correta. Na microlição, a orientação-chave é: “Backup e RAID resolvem problemas diferentes.”. Tolerância a falhas usa redundância e mecanismos de recuperação para manter serviço diante de falhas.",
        "Incorreta. A proposição “Autenticação, autorização, confidencialidade, integridade e disponibilidade são propriedades equivalentes e podem ser tratadas como sinônimos.” contraria ou desloca o conceito central cobrado nesta microlição. Na microlição, a orientação-chave é: “Backup e RAID resolvem problemas diferentes.”. Tolerância a falhas usa redundância e mecanismos de recuperação para manter serviço diante de falhas.",
        "Incorreta. A proposição “Controles preventivos eliminam a necessidade de detecção, resposta, recuperação e monitoramento.” contraria ou desloca o conceito central cobrado nesta microlição. Na microlição, a orientação-chave é: “Backup e RAID resolvem problemas diferentes.”. Tolerância a falhas usa redundância e mecanismos de recuperação para manter serviço diante de falhas."
      ],
      "source": "Questão autoral Versa · edital Transpetro 2026.4",
      "board": "CESGRANRIO — estilo de treino",
      "examYear": 2026,
      "authorialRevision": "v1.7.1",
      "feedbackVersion": "1.7.1"
    },
    {
      "id": "trc-q048",
      "lessonId": "trc-l048",
      "topic": "OT/ICS, SCADA e ISA/IEC 62443",
      "difficulty": "Intermediário",
      "statement": "Sobre “OT/ICS, SCADA e ISA/IEC 62443”, assinale a alternativa correta.",
      "options": [
        "OT não possui impacto físico possível.",
        "IEC 62443 é uma cifra de bloco.",
        "SCADA é sinônimo de antivírus.",
        "Segurança de OT pode ignorar disponibilidade.",
        "OT controla ou monitora processos físicos; por isso, segurança precisa considerar requisitos de disponibilidade, confiabilidade e safety além da confidencialidade."
      ],
      "correct": 4,
      "explanation": "OT controla ou monitora processos físicos; por isso, segurança precisa considerar requisitos de disponibilidade, confiabilidade e safety além da confidencialidade.",
      "wrong": [
        "Incorreta. A proposição “OT não possui impacto físico possível.” contraria ou desloca o conceito central cobrado nesta microlição. OT controla ou monitora processos físicos; por isso, segurança precisa considerar requisitos de disponibilidade, confiabilidade e safety além da confidencialidade.",
        "Incorreta. A proposição “IEC 62443 é uma cifra de bloco.” contraria ou desloca o conceito central cobrado nesta microlição. OT controla ou monitora processos físicos; por isso, segurança precisa considerar requisitos de disponibilidade, confiabilidade e safety além da confidencialidade.",
        "Incorreta. A proposição “SCADA é sinônimo de antivírus.” contraria ou desloca o conceito central cobrado nesta microlição. OT controla ou monitora processos físicos; por isso, segurança precisa considerar requisitos de disponibilidade, confiabilidade e safety além da confidencialidade.",
        "Incorreta. A proposição “Segurança de OT pode ignorar disponibilidade.” contraria ou desloca o conceito central cobrado nesta microlição. OT controla ou monitora processos físicos; por isso, segurança precisa considerar requisitos de disponibilidade, confiabilidade e safety além da confidencialidade.",
        "Correta. OT controla ou monitora processos físicos; por isso, segurança precisa considerar requisitos de disponibilidade, confiabilidade e safety além da confidencialidade."
      ],
      "source": "Questão autoral Versa · edital Transpetro 2026.4",
      "board": "CESGRANRIO — estilo de treino",
      "examYear": 2026,
      "feedbackVersion": "1.7.1"
    },
    {
      "id": "trc-q048b",
      "lessonId": "trc-l048",
      "topic": "OT/ICS, SCADA e ISA/IEC 62443",
      "difficulty": "Intermediário",
      "statement": "Sobre “OT/ICS, SCADA e ISA/IEC 62443”, qual afirmação sintetiza corretamente um ponto essencial da microlição?",
      "options": [
        "Defesa em profundidade significa concentrar a proteção em um único controle de perímetro suficientemente robusto.",
        "Autenticação, autorização, confidencialidade, integridade e disponibilidade são propriedades equivalentes e podem ser tratadas como sinônimos.",
        "Controles preventivos eliminam a necessidade de detecção, resposta, recuperação e monitoramento.",
        "Segmentação IT/OT reduz exposição.",
        "Criptografia garante, sozinha, disponibilidade, autenticidade, autorização e continuidade de todos os serviços."
      ],
      "correct": 3,
      "explanation": "Na microlição, a orientação-chave é: “Segmentação IT/OT reduz exposição.”. OT interage com processos físicos e exige considerar segurança operacional, disponibilidade, confiabilidade e safety.",
      "wrong": [
        "Incorreta. A proposição “Defesa em profundidade significa concentrar a proteção em um único controle de perímetro suficientemente robusto.” contraria ou desloca o conceito central cobrado nesta microlição. Na microlição, a orientação-chave é: “Segmentação IT/OT reduz exposição.”. OT interage com processos físicos e exige considerar segurança operacional, disponibilidade, confiabilidade e safety.",
        "Incorreta. A proposição “Autenticação, autorização, confidencialidade, integridade e disponibilidade são propriedades equivalentes e podem ser tratadas como sinônimos.” contraria ou desloca o conceito central cobrado nesta microlição. Na microlição, a orientação-chave é: “Segmentação IT/OT reduz exposição.”. OT interage com processos físicos e exige considerar segurança operacional, disponibilidade, confiabilidade e safety.",
        "Incorreta. A proposição “Controles preventivos eliminam a necessidade de detecção, resposta, recuperação e monitoramento.” contraria ou desloca o conceito central cobrado nesta microlição. Na microlição, a orientação-chave é: “Segmentação IT/OT reduz exposição.”. OT interage com processos físicos e exige considerar segurança operacional, disponibilidade, confiabilidade e safety.",
        "Correta. Na microlição, a orientação-chave é: “Segmentação IT/OT reduz exposição.”. OT interage com processos físicos e exige considerar segurança operacional, disponibilidade, confiabilidade e safety.",
        "Incorreta. A proposição “Criptografia garante, sozinha, disponibilidade, autenticidade, autorização e continuidade de todos os serviços.” contraria ou desloca o conceito central cobrado nesta microlição. Na microlição, a orientação-chave é: “Segmentação IT/OT reduz exposição.”. OT interage com processos físicos e exige considerar segurança operacional, disponibilidade, confiabilidade e safety."
      ],
      "source": "Questão autoral Versa · edital Transpetro 2026.4",
      "board": "CESGRANRIO — estilo de treino",
      "examYear": 2026,
      "authorialRevision": "v1.7.1",
      "feedbackVersion": "1.7.1"
    },
    {
      "id": "trc-q049",
      "lessonId": "trc-l049",
      "topic": "NIST SP 800-82 e gestão de risco em OT",
      "difficulty": "Intermediário",
      "statement": "Sobre “NIST SP 800-82 e gestão de risco em OT”, assinale a alternativa correta.",
      "options": [
        "Categorização significa executar pentest em produção.",
        "RMF dispensa análise de impacto.",
        "A categorização determina o impacto potencial associado à perda de confidencialidade, integridade e disponibilidade do sistema e da informação.",
        "NIST SP 800-82 trata exclusivamente de aplicações móveis.",
        "OT não exige adaptação de controles ao processo físico."
      ],
      "correct": 2,
      "explanation": "A categorização determina o impacto potencial associado à perda de confidencialidade, integridade e disponibilidade do sistema e da informação.",
      "wrong": [
        "Incorreta. A proposição “Categorização significa executar pentest em produção.” contraria ou desloca o conceito central cobrado nesta microlição. A categorização determina o impacto potencial associado à perda de confidencialidade, integridade e disponibilidade do sistema e da informação.",
        "Incorreta. A proposição “RMF dispensa análise de impacto.” contraria ou desloca o conceito central cobrado nesta microlição. A categorização determina o impacto potencial associado à perda de confidencialidade, integridade e disponibilidade do sistema e da informação.",
        "Correta. A categorização determina o impacto potencial associado à perda de confidencialidade, integridade e disponibilidade do sistema e da informação.",
        "Incorreta. A proposição “NIST SP 800-82 trata exclusivamente de aplicações móveis.” contraria ou desloca o conceito central cobrado nesta microlição. A categorização determina o impacto potencial associado à perda de confidencialidade, integridade e disponibilidade do sistema e da informação.",
        "Incorreta. A proposição “OT não exige adaptação de controles ao processo físico.” contraria ou desloca o conceito central cobrado nesta microlição. A categorização determina o impacto potencial associado à perda de confidencialidade, integridade e disponibilidade do sistema e da informação."
      ],
      "source": "Questão autoral Versa · edital Transpetro 2026.4",
      "board": "CESGRANRIO — estilo de treino",
      "examYear": 2026,
      "feedbackVersion": "1.7.1"
    },
    {
      "id": "trc-q049b",
      "lessonId": "trc-l049",
      "topic": "NIST SP 800-82 e gestão de risco em OT",
      "difficulty": "Intermediário",
      "statement": "Ao revisar “NIST SP 800-82 e gestão de risco em OT” para a CESGRANRIO, qual alternativa deve ser mantida como correta?",
      "options": [
        "Autenticação, autorização, confidencialidade, integridade e disponibilidade são propriedades equivalentes e podem ser tratadas como sinônimos.",
        "Controles preventivos eliminam a necessidade de detecção, resposta, recuperação e monitoramento.",
        "Criptografia garante, sozinha, disponibilidade, autenticidade, autorização e continuidade de todos os serviços.",
        "Hardening consiste em habilitar o maior número possível de serviços para aumentar a compatibilidade do sistema.",
        "Controles devem ser adaptados ao contexto de OT."
      ],
      "correct": 4,
      "explanation": "Na microlição, a orientação-chave é: “Controles devem ser adaptados ao contexto de OT.”. NIST SP 800-82 orienta segurança de OT considerando requisitos próprios desses ambientes.",
      "wrong": [
        "Incorreta. A proposição “Autenticação, autorização, confidencialidade, integridade e disponibilidade são propriedades equivalentes e podem ser tratadas como sinônimos.” contraria ou desloca o conceito central cobrado nesta microlição. Na microlição, a orientação-chave é: “Controles devem ser adaptados ao contexto de OT.”. NIST SP 800-82 orienta segurança de OT considerando requisitos próprios desses ambientes.",
        "Incorreta. A proposição “Controles preventivos eliminam a necessidade de detecção, resposta, recuperação e monitoramento.” contraria ou desloca o conceito central cobrado nesta microlição. Na microlição, a orientação-chave é: “Controles devem ser adaptados ao contexto de OT.”. NIST SP 800-82 orienta segurança de OT considerando requisitos próprios desses ambientes.",
        "Incorreta. A proposição “Criptografia garante, sozinha, disponibilidade, autenticidade, autorização e continuidade de todos os serviços.” contraria ou desloca o conceito central cobrado nesta microlição. Na microlição, a orientação-chave é: “Controles devem ser adaptados ao contexto de OT.”. NIST SP 800-82 orienta segurança de OT considerando requisitos próprios desses ambientes.",
        "Incorreta. A proposição “Hardening consiste em habilitar o maior número possível de serviços para aumentar a compatibilidade do sistema.” contraria ou desloca o conceito central cobrado nesta microlição. Na microlição, a orientação-chave é: “Controles devem ser adaptados ao contexto de OT.”. NIST SP 800-82 orienta segurança de OT considerando requisitos próprios desses ambientes.",
        "Correta. Na microlição, a orientação-chave é: “Controles devem ser adaptados ao contexto de OT.”. NIST SP 800-82 orienta segurança de OT considerando requisitos próprios desses ambientes."
      ],
      "source": "Questão autoral Versa · edital Transpetro 2026.4",
      "board": "CESGRANRIO — estilo de treino",
      "examYear": 2026,
      "authorialRevision": "v1.7.1",
      "feedbackVersion": "1.7.1"
    },
    {
      "id": "trc-q050",
      "lessonId": "trc-l050",
      "topic": "Evidência digital e processo forense",
      "difficulty": "Intermediário",
      "statement": "Sobre “Evidência digital e processo forense”, assinale a alternativa correta.",
      "options": [
        "A cadeia de custódia registra controle, transferência e tratamento da evidência, sustentando sua integridade e rastreabilidade.",
        "Forense digital exige modificar o original para testar hipóteses.",
        "Hash serve para recuperar arquivos apagados por definição.",
        "Cadeia de custódia é apenas uma lista de senhas.",
        "Documentação reduz a confiabilidade da análise."
      ],
      "correct": 0,
      "explanation": "A cadeia de custódia registra controle, transferência e tratamento da evidência, sustentando sua integridade e rastreabilidade.",
      "wrong": [
        "Correta. A cadeia de custódia registra controle, transferência e tratamento da evidência, sustentando sua integridade e rastreabilidade.",
        "Incorreta. A proposição “Forense digital exige modificar o original para testar hipóteses.” contraria ou desloca o conceito central cobrado nesta microlição. A cadeia de custódia registra controle, transferência e tratamento da evidência, sustentando sua integridade e rastreabilidade.",
        "Incorreta. A proposição “Hash serve para recuperar arquivos apagados por definição.” contraria ou desloca o conceito central cobrado nesta microlição. A cadeia de custódia registra controle, transferência e tratamento da evidência, sustentando sua integridade e rastreabilidade.",
        "Incorreta. A proposição “Cadeia de custódia é apenas uma lista de senhas.” contraria ou desloca o conceito central cobrado nesta microlição. A cadeia de custódia registra controle, transferência e tratamento da evidência, sustentando sua integridade e rastreabilidade.",
        "Incorreta. A proposição “Documentação reduz a confiabilidade da análise.” contraria ou desloca o conceito central cobrado nesta microlição. A cadeia de custódia registra controle, transferência e tratamento da evidência, sustentando sua integridade e rastreabilidade."
      ],
      "source": "Questão autoral Versa · edital Transpetro 2026.4",
      "board": "CESGRANRIO — estilo de treino",
      "examYear": 2026,
      "feedbackVersion": "1.7.1"
    },
    {
      "id": "trc-q050b",
      "lessonId": "trc-l050",
      "topic": "Evidência digital e processo forense",
      "difficulty": "Intermediário",
      "statement": "Para resolver uma questão sobre “Evidência digital e processo forense”, qual orientação conceitual está de acordo com o conteúdo estudado?",
      "options": [
        "Documente origem, data, responsável e transferências.",
        "Controles preventivos eliminam a necessidade de detecção, resposta, recuperação e monitoramento.",
        "Criptografia garante, sozinha, disponibilidade, autenticidade, autorização e continuidade de todos os serviços.",
        "Hardening consiste em habilitar o maior número possível de serviços para aumentar a compatibilidade do sistema.",
        "Vulnerabilidades publicadas, fraquezas de software e riscos operacionais são exatamente o mesmo conceito."
      ],
      "correct": 0,
      "explanation": "Na microlição, a orientação-chave é: “Documente origem, data, responsável e transferências.”. Forense digital busca identificar, preservar, coletar, examinar, analisar e documentar evidências de forma tecnicamente defensável.",
      "wrong": [
        "Correta. Na microlição, a orientação-chave é: “Documente origem, data, responsável e transferências.”. Forense digital busca identificar, preservar, coletar, examinar, analisar e documentar evidências de forma tecnicamente defensável.",
        "Incorreta. A proposição “Controles preventivos eliminam a necessidade de detecção, resposta, recuperação e monitoramento.” contraria ou desloca o conceito central cobrado nesta microlição. Na microlição, a orientação-chave é: “Documente origem, data, responsável e transferências.”. Forense digital busca identificar, preservar, coletar, examinar, analisar e documentar evidências de forma tecnicamente defensável.",
        "Incorreta. A proposição “Criptografia garante, sozinha, disponibilidade, autenticidade, autorização e continuidade de todos os serviços.” contraria ou desloca o conceito central cobrado nesta microlição. Na microlição, a orientação-chave é: “Documente origem, data, responsável e transferências.”. Forense digital busca identificar, preservar, coletar, examinar, analisar e documentar evidências de forma tecnicamente defensável.",
        "Incorreta. A proposição “Hardening consiste em habilitar o maior número possível de serviços para aumentar a compatibilidade do sistema.” contraria ou desloca o conceito central cobrado nesta microlição. Na microlição, a orientação-chave é: “Documente origem, data, responsável e transferências.”. Forense digital busca identificar, preservar, coletar, examinar, analisar e documentar evidências de forma tecnicamente defensável.",
        "Incorreta. A proposição “Vulnerabilidades publicadas, fraquezas de software e riscos operacionais são exatamente o mesmo conceito.” contraria ou desloca o conceito central cobrado nesta microlição. Na microlição, a orientação-chave é: “Documente origem, data, responsável e transferências.”. Forense digital busca identificar, preservar, coletar, examinar, analisar e documentar evidências de forma tecnicamente defensável."
      ],
      "source": "Questão autoral Versa · edital Transpetro 2026.4",
      "board": "CESGRANRIO — estilo de treino",
      "examYear": 2026,
      "authorialRevision": "v1.7.1",
      "feedbackVersion": "1.7.1"
    },
    {
      "id": "trc-q051",
      "lessonId": "trc-l051",
      "topic": "Forense de armazenamento, sites, e-mails e OSINT",
      "difficulty": "Intermediário",
      "statement": "Sobre “Forense de armazenamento, sites, e-mails e OSINT”, assinale a alternativa correta.",
      "options": [
        "OSINT significa acesso não autorizado a banco privado.",
        "Cabeçalho de e-mail não possui metadados técnicos.",
        "Fonte pública elimina necessidade de validação.",
        "Informação de fonte aberta deve ser verificada, contextualizada e documentada; disponibilidade pública não garante veracidade.",
        "Forense de armazenamento analisa apenas nomes de arquivos."
      ],
      "correct": 3,
      "explanation": "Informação de fonte aberta deve ser verificada, contextualizada e documentada; disponibilidade pública não garante veracidade.",
      "wrong": [
        "Incorreta. A proposição “OSINT significa acesso não autorizado a banco privado.” contraria ou desloca o conceito central cobrado nesta microlição. Informação de fonte aberta deve ser verificada, contextualizada e documentada; disponibilidade pública não garante veracidade.",
        "Incorreta. A proposição “Cabeçalho de e-mail não possui metadados técnicos.” contraria ou desloca o conceito central cobrado nesta microlição. Informação de fonte aberta deve ser verificada, contextualizada e documentada; disponibilidade pública não garante veracidade.",
        "Incorreta. A proposição “Fonte pública elimina necessidade de validação.” contraria ou desloca o conceito central cobrado nesta microlição. Informação de fonte aberta deve ser verificada, contextualizada e documentada; disponibilidade pública não garante veracidade.",
        "Correta. Informação de fonte aberta deve ser verificada, contextualizada e documentada; disponibilidade pública não garante veracidade.",
        "Incorreta. A proposição “Forense de armazenamento analisa apenas nomes de arquivos.” contraria ou desloca o conceito central cobrado nesta microlição. Informação de fonte aberta deve ser verificada, contextualizada e documentada; disponibilidade pública não garante veracidade."
      ],
      "source": "Questão autoral Versa · edital Transpetro 2026.4",
      "board": "CESGRANRIO — estilo de treino",
      "examYear": 2026,
      "feedbackVersion": "1.7.1"
    },
    {
      "id": "trc-q051b",
      "lessonId": "trc-l051",
      "topic": "Forense de armazenamento, sites, e-mails e OSINT",
      "difficulty": "Intermediário",
      "statement": "No contexto de “Forense de armazenamento, sites, e-mails e OSINT”, assinale a afirmação compatível com a microlição.",
      "options": [
        "Criptografia garante, sozinha, disponibilidade, autenticidade, autorização e continuidade de todos os serviços.",
        "Metadados exigem interpretação contextual.",
        "Hardening consiste em habilitar o maior número possível de serviços para aumentar a compatibilidade do sistema.",
        "Vulnerabilidades publicadas, fraquezas de software e riscos operacionais são exatamente o mesmo conceito.",
        "Em OT/ICS, disponibilidade e segurança operacional têm a mesma tolerância a interrupções encontrada em ambientes de TI corporativa comum."
      ],
      "correct": 1,
      "explanation": "Na microlição, a orientação-chave é: “Metadados exigem interpretação contextual.”. Armazenamento pode conter metadados, arquivos e vestígios; sites e e-mails geram cabeçalhos, logs e conteúdo contextual; OSINT reúne informação obtida de fontes abertas, com verificação e correlação.",
      "wrong": [
        "Incorreta. A proposição “Criptografia garante, sozinha, disponibilidade, autenticidade, autorização e continuidade de todos os serviços.” contraria ou desloca o conceito central cobrado nesta microlição. Na microlição, a orientação-chave é: “Metadados exigem interpretação contextual.”. Armazenamento pode conter metadados, arquivos e vestígios; sites e e-mails geram cabeçalhos, logs e conteúdo contextual; OSINT reúne informação obtida de fontes abertas, com verificação e correlação.",
        "Correta. Na microlição, a orientação-chave é: “Metadados exigem interpretação contextual.”. Armazenamento pode conter metadados, arquivos e vestígios; sites e e-mails geram cabeçalhos, logs e conteúdo contextual; OSINT reúne informação obtida de fontes abertas, com verificação e correlação.",
        "Incorreta. A proposição “Hardening consiste em habilitar o maior número possível de serviços para aumentar a compatibilidade do sistema.” contraria ou desloca o conceito central cobrado nesta microlição. Na microlição, a orientação-chave é: “Metadados exigem interpretação contextual.”. Armazenamento pode conter metadados, arquivos e vestígios; sites e e-mails geram cabeçalhos, logs e conteúdo contextual; OSINT reúne informação obtida de fontes abertas, com verificação e correlação.",
        "Incorreta. A proposição “Vulnerabilidades publicadas, fraquezas de software e riscos operacionais são exatamente o mesmo conceito.” contraria ou desloca o conceito central cobrado nesta microlição. Na microlição, a orientação-chave é: “Metadados exigem interpretação contextual.”. Armazenamento pode conter metadados, arquivos e vestígios; sites e e-mails geram cabeçalhos, logs e conteúdo contextual; OSINT reúne informação obtida de fontes abertas, com verificação e correlação.",
        "Incorreta. A proposição “Em OT/ICS, disponibilidade e segurança operacional têm a mesma tolerância a interrupções encontrada em ambientes de TI corporativa comum.” contraria ou desloca o conceito central cobrado nesta microlição. Na microlição, a orientação-chave é: “Metadados exigem interpretação contextual.”. Armazenamento pode conter metadados, arquivos e vestígios; sites e e-mails geram cabeçalhos, logs e conteúdo contextual; OSINT reúne informação obtida de fontes abertas, com verificação e correlação."
      ],
      "source": "Questão autoral Versa · edital Transpetro 2026.4",
      "board": "CESGRANRIO — estilo de treino",
      "examYear": 2026,
      "authorialRevision": "v1.7.1",
      "feedbackVersion": "1.7.1"
    },
    {
      "id": "trc-q052",
      "lessonId": "trc-l052",
      "topic": "ISO/IEC 27001: SGSI e requisitos",
      "difficulty": "Intermediário",
      "statement": "Sobre “ISO/IEC 27001: SGSI e requisitos”, assinale a alternativa correta.",
      "options": [
        "ISO 27001 é um manual de comandos de firewall.",
        "A ISO/IEC 27001 especifica requisitos para estabelecer, implementar, manter e melhorar continuamente um SGSI baseado em riscos.",
        "SGSI elimina a necessidade de avaliação de riscos.",
        "Auditoria interna é incompatível com avaliação de desempenho.",
        "Certificação ISO garante ausência total de incidentes."
      ],
      "correct": 1,
      "explanation": "A ISO/IEC 27001 especifica requisitos para estabelecer, implementar, manter e melhorar continuamente um SGSI baseado em riscos.",
      "wrong": [
        "Incorreta. A proposição “ISO 27001 é um manual de comandos de firewall.” contraria ou desloca o conceito central cobrado nesta microlição. A ISO/IEC 27001 especifica requisitos para estabelecer, implementar, manter e melhorar continuamente um SGSI baseado em riscos.",
        "Correta. A ISO/IEC 27001 especifica requisitos para estabelecer, implementar, manter e melhorar continuamente um SGSI baseado em riscos.",
        "Incorreta. A proposição “SGSI elimina a necessidade de avaliação de riscos.” contraria ou desloca o conceito central cobrado nesta microlição. A ISO/IEC 27001 especifica requisitos para estabelecer, implementar, manter e melhorar continuamente um SGSI baseado em riscos.",
        "Incorreta. A proposição “Auditoria interna é incompatível com avaliação de desempenho.” contraria ou desloca o conceito central cobrado nesta microlição. A ISO/IEC 27001 especifica requisitos para estabelecer, implementar, manter e melhorar continuamente um SGSI baseado em riscos.",
        "Incorreta. A proposição “Certificação ISO garante ausência total de incidentes.” contraria ou desloca o conceito central cobrado nesta microlição. A ISO/IEC 27001 especifica requisitos para estabelecer, implementar, manter e melhorar continuamente um SGSI baseado em riscos."
      ],
      "source": "Questão autoral Versa · edital Transpetro 2026.4",
      "board": "CESGRANRIO — estilo de treino",
      "examYear": 2026,
      "feedbackVersion": "1.7.1"
    },
    {
      "id": "trc-q052b",
      "lessonId": "trc-l052",
      "topic": "ISO/IEC 27001: SGSI e requisitos",
      "difficulty": "Intermediário",
      "statement": "Sobre “ISO/IEC 27001: SGSI e requisitos”, qual afirmação sintetiza corretamente um ponto essencial da microlição?",
      "options": [
        "Frameworks e normas substituem a análise do contexto da organização e devem ser aplicados de forma idêntica em qualquer ambiente.",
        "Conformidade legal elimina automaticamente todos os riscos de segurança da informação e de privacidade.",
        "Risco orienta a seleção de tratamento e controles.",
        "Auditoria interna é incompatível com melhoria contínua porque deve ocorrer apenas depois de um incidente grave.",
        "Políticas de segurança são documentos estáticos e não precisam refletir riscos, responsabilidades ou mudanças organizacionais."
      ],
      "correct": 2,
      "explanation": "Na microlição, a orientação-chave é: “Risco orienta a seleção de tratamento e controles.”. ISO/IEC 27001 especifica requisitos para um Sistema de Gestão de Segurança da Informação orientado a risco.",
      "wrong": [
        "Incorreta. A proposição “Frameworks e normas substituem a análise do contexto da organização e devem ser aplicados de forma idêntica em qualquer ambiente.” contraria ou desloca o conceito central cobrado nesta microlição. Na microlição, a orientação-chave é: “Risco orienta a seleção de tratamento e controles.”. ISO/IEC 27001 especifica requisitos para um Sistema de Gestão de Segurança da Informação orientado a risco.",
        "Incorreta. A proposição “Conformidade legal elimina automaticamente todos os riscos de segurança da informação e de privacidade.” contraria ou desloca o conceito central cobrado nesta microlição. Na microlição, a orientação-chave é: “Risco orienta a seleção de tratamento e controles.”. ISO/IEC 27001 especifica requisitos para um Sistema de Gestão de Segurança da Informação orientado a risco.",
        "Correta. Na microlição, a orientação-chave é: “Risco orienta a seleção de tratamento e controles.”. ISO/IEC 27001 especifica requisitos para um Sistema de Gestão de Segurança da Informação orientado a risco.",
        "Incorreta. A proposição “Auditoria interna é incompatível com melhoria contínua porque deve ocorrer apenas depois de um incidente grave.” contraria ou desloca o conceito central cobrado nesta microlição. Na microlição, a orientação-chave é: “Risco orienta a seleção de tratamento e controles.”. ISO/IEC 27001 especifica requisitos para um Sistema de Gestão de Segurança da Informação orientado a risco.",
        "Incorreta. A proposição “Políticas de segurança são documentos estáticos e não precisam refletir riscos, responsabilidades ou mudanças organizacionais.” contraria ou desloca o conceito central cobrado nesta microlição. Na microlição, a orientação-chave é: “Risco orienta a seleção de tratamento e controles.”. ISO/IEC 27001 especifica requisitos para um Sistema de Gestão de Segurança da Informação orientado a risco."
      ],
      "source": "Questão autoral Versa · edital Transpetro 2026.4",
      "board": "CESGRANRIO — estilo de treino",
      "examYear": 2026,
      "authorialRevision": "v1.7.1",
      "feedbackVersion": "1.7.1"
    },
    {
      "id": "trc-q053",
      "lessonId": "trc-l053",
      "topic": "ISO/IEC 27002: controles de segurança",
      "difficulty": "Intermediário",
      "statement": "Sobre “ISO/IEC 27002: controles de segurança”, assinale a alternativa correta.",
      "options": [
        "27002 substitui a avaliação de riscos.",
        "27001 e 27002 são algoritmos de criptografia.",
        "Todo controle da 27002 deve ser aplicado sem contexto.",
        "27002 é a lei brasileira de proteção de dados.",
        "A 27001 define requisitos do SGSI; a 27002 oferece orientação detalhada sobre controles que podem apoiar o tratamento de riscos."
      ],
      "correct": 4,
      "explanation": "A 27001 define requisitos do SGSI; a 27002 oferece orientação detalhada sobre controles que podem apoiar o tratamento de riscos.",
      "wrong": [
        "Incorreta. A proposição “27002 substitui a avaliação de riscos.” contraria ou desloca o conceito central cobrado nesta microlição. A 27001 define requisitos do SGSI; a 27002 oferece orientação detalhada sobre controles que podem apoiar o tratamento de riscos.",
        "Incorreta. A proposição “27001 e 27002 são algoritmos de criptografia.” contraria ou desloca o conceito central cobrado nesta microlição. A 27001 define requisitos do SGSI; a 27002 oferece orientação detalhada sobre controles que podem apoiar o tratamento de riscos.",
        "Incorreta. A proposição “Todo controle da 27002 deve ser aplicado sem contexto.” contraria ou desloca o conceito central cobrado nesta microlição. A 27001 define requisitos do SGSI; a 27002 oferece orientação detalhada sobre controles que podem apoiar o tratamento de riscos.",
        "Incorreta. A proposição “27002 é a lei brasileira de proteção de dados.” contraria ou desloca o conceito central cobrado nesta microlição. A 27001 define requisitos do SGSI; a 27002 oferece orientação detalhada sobre controles que podem apoiar o tratamento de riscos.",
        "Correta. A 27001 define requisitos do SGSI; a 27002 oferece orientação detalhada sobre controles que podem apoiar o tratamento de riscos."
      ],
      "source": "Questão autoral Versa · edital Transpetro 2026.4",
      "board": "CESGRANRIO — estilo de treino",
      "examYear": 2026,
      "feedbackVersion": "1.7.1"
    },
    {
      "id": "trc-q053b",
      "lessonId": "trc-l053",
      "topic": "ISO/IEC 27002: controles de segurança",
      "difficulty": "Intermediário",
      "statement": "Ao revisar “ISO/IEC 27002: controles de segurança” para a CESGRANRIO, qual alternativa deve ser mantida como correta?",
      "options": [
        "Conformidade legal elimina automaticamente todos os riscos de segurança da informação e de privacidade.",
        "Auditoria interna é incompatível com melhoria contínua porque deve ocorrer apenas depois de um incidente grave.",
        "Políticas de segurança são documentos estáticos e não precisam refletir riscos, responsabilidades ou mudanças organizacionais.",
        "27002 orienta; 27001 contém requisitos do SGSI.",
        "Um SGSI é apenas um conjunto de ferramentas técnicas e dispensa governança, contexto, risco, auditoria e melhoria contínua."
      ],
      "correct": 3,
      "explanation": "Na microlição, a orientação-chave é: “27002 orienta; 27001 contém requisitos do SGSI.”. ISO/IEC 27002 fornece orientação sobre controles de segurança da informação.",
      "wrong": [
        "Incorreta. A proposição “Conformidade legal elimina automaticamente todos os riscos de segurança da informação e de privacidade.” contraria ou desloca o conceito central cobrado nesta microlição. Na microlição, a orientação-chave é: “27002 orienta; 27001 contém requisitos do SGSI.”. ISO/IEC 27002 fornece orientação sobre controles de segurança da informação.",
        "Incorreta. A proposição “Auditoria interna é incompatível com melhoria contínua porque deve ocorrer apenas depois de um incidente grave.” contraria ou desloca o conceito central cobrado nesta microlição. Na microlição, a orientação-chave é: “27002 orienta; 27001 contém requisitos do SGSI.”. ISO/IEC 27002 fornece orientação sobre controles de segurança da informação.",
        "Incorreta. A proposição “Políticas de segurança são documentos estáticos e não precisam refletir riscos, responsabilidades ou mudanças organizacionais.” contraria ou desloca o conceito central cobrado nesta microlição. Na microlição, a orientação-chave é: “27002 orienta; 27001 contém requisitos do SGSI.”. ISO/IEC 27002 fornece orientação sobre controles de segurança da informação.",
        "Correta. Na microlição, a orientação-chave é: “27002 orienta; 27001 contém requisitos do SGSI.”. ISO/IEC 27002 fornece orientação sobre controles de segurança da informação.",
        "Incorreta. A proposição “Um SGSI é apenas um conjunto de ferramentas técnicas e dispensa governança, contexto, risco, auditoria e melhoria contínua.” contraria ou desloca o conceito central cobrado nesta microlição. Na microlição, a orientação-chave é: “27002 orienta; 27001 contém requisitos do SGSI.”. ISO/IEC 27002 fornece orientação sobre controles de segurança da informação."
      ],
      "source": "Questão autoral Versa · edital Transpetro 2026.4",
      "board": "CESGRANRIO — estilo de treino",
      "examYear": 2026,
      "authorialRevision": "v1.7.1",
      "feedbackVersion": "1.7.1"
    },
    {
      "id": "trc-q054",
      "lessonId": "trc-l054",
      "topic": "ISO/IEC 27005: gestão de riscos",
      "difficulty": "Intermediário",
      "statement": "Sobre “ISO/IEC 27005: gestão de riscos”, assinale a alternativa correta.",
      "options": [
        "Análise qualitativa exige valores monetários exatos.",
        "Avaliação de risco ocorre sem critérios.",
        "A qualitativa usa categorias e escalas descritivas; a quantitativa busca valores numéricos para probabilidade, frequência e/ou impacto conforme o método.",
        "Tratamento deve sempre eliminar qualquer risco.",
        "Identificação de ativos é irrelevante ao contexto."
      ],
      "correct": 2,
      "explanation": "A qualitativa usa categorias e escalas descritivas; a quantitativa busca valores numéricos para probabilidade, frequência e/ou impacto conforme o método.",
      "wrong": [
        "Incorreta. A proposição “Análise qualitativa exige valores monetários exatos.” contraria ou desloca o conceito central cobrado nesta microlição. A qualitativa usa categorias e escalas descritivas; a quantitativa busca valores numéricos para probabilidade, frequência e/ou impacto conforme o método.",
        "Incorreta. A proposição “Avaliação de risco ocorre sem critérios.” contraria ou desloca o conceito central cobrado nesta microlição. A qualitativa usa categorias e escalas descritivas; a quantitativa busca valores numéricos para probabilidade, frequência e/ou impacto conforme o método.",
        "Correta. A qualitativa usa categorias e escalas descritivas; a quantitativa busca valores numéricos para probabilidade, frequência e/ou impacto conforme o método.",
        "Incorreta. A proposição “Tratamento deve sempre eliminar qualquer risco.” contraria ou desloca o conceito central cobrado nesta microlição. A qualitativa usa categorias e escalas descritivas; a quantitativa busca valores numéricos para probabilidade, frequência e/ou impacto conforme o método.",
        "Incorreta. A proposição “Identificação de ativos é irrelevante ao contexto.” contraria ou desloca o conceito central cobrado nesta microlição. A qualitativa usa categorias e escalas descritivas; a quantitativa busca valores numéricos para probabilidade, frequência e/ou impacto conforme o método."
      ],
      "source": "Questão autoral Versa · edital Transpetro 2026.4",
      "board": "CESGRANRIO — estilo de treino",
      "examYear": 2026,
      "feedbackVersion": "1.7.1"
    },
    {
      "id": "trc-q054b",
      "lessonId": "trc-l054",
      "topic": "ISO/IEC 27005: gestão de riscos",
      "difficulty": "Intermediário",
      "statement": "Para resolver uma questão sobre “ISO/IEC 27005: gestão de riscos”, qual orientação conceitual está de acordo com o conteúdo estudado?",
      "options": [
        "Auditoria interna é incompatível com melhoria contínua porque deve ocorrer apenas depois de um incidente grave.",
        "Políticas de segurança são documentos estáticos e não precisam refletir riscos, responsabilidades ou mudanças organizacionais.",
        "Um SGSI é apenas um conjunto de ferramentas técnicas e dispensa governança, contexto, risco, auditoria e melhoria contínua.",
        "Gestão de riscos se resume a listar vulnerabilidades, sem considerar impacto, probabilidade, contexto ou tratamento.",
        "Risco envolve consequências e incerteza/probabilidade."
      ],
      "correct": 4,
      "explanation": "Na microlição, a orientação-chave é: “Risco envolve consequências e incerteza/probabilidade.”. ISO/IEC 27005 orienta gestão de riscos de segurança da informação.",
      "wrong": [
        "Incorreta. A proposição “Auditoria interna é incompatível com melhoria contínua porque deve ocorrer apenas depois de um incidente grave.” contraria ou desloca o conceito central cobrado nesta microlição. Na microlição, a orientação-chave é: “Risco envolve consequências e incerteza/probabilidade.”. ISO/IEC 27005 orienta gestão de riscos de segurança da informação.",
        "Incorreta. A proposição “Políticas de segurança são documentos estáticos e não precisam refletir riscos, responsabilidades ou mudanças organizacionais.” contraria ou desloca o conceito central cobrado nesta microlição. Na microlição, a orientação-chave é: “Risco envolve consequências e incerteza/probabilidade.”. ISO/IEC 27005 orienta gestão de riscos de segurança da informação.",
        "Incorreta. A proposição “Um SGSI é apenas um conjunto de ferramentas técnicas e dispensa governança, contexto, risco, auditoria e melhoria contínua.” contraria ou desloca o conceito central cobrado nesta microlição. Na microlição, a orientação-chave é: “Risco envolve consequências e incerteza/probabilidade.”. ISO/IEC 27005 orienta gestão de riscos de segurança da informação.",
        "Incorreta. A proposição “Gestão de riscos se resume a listar vulnerabilidades, sem considerar impacto, probabilidade, contexto ou tratamento.” contraria ou desloca o conceito central cobrado nesta microlição. Na microlição, a orientação-chave é: “Risco envolve consequências e incerteza/probabilidade.”. ISO/IEC 27005 orienta gestão de riscos de segurança da informação.",
        "Correta. Na microlição, a orientação-chave é: “Risco envolve consequências e incerteza/probabilidade.”. ISO/IEC 27005 orienta gestão de riscos de segurança da informação."
      ],
      "source": "Questão autoral Versa · edital Transpetro 2026.4",
      "board": "CESGRANRIO — estilo de treino",
      "examYear": 2026,
      "authorialRevision": "v1.7.1",
      "feedbackVersion": "1.7.1"
    },
    {
      "id": "trc-q055",
      "lessonId": "trc-l055",
      "topic": "ISO/IEC 27035-1: gestão de incidentes",
      "difficulty": "Intermediário",
      "statement": "Sobre “ISO/IEC 27035-1: gestão de incidentes”, assinale a alternativa correta.",
      "options": [
        "Lições aprendidas ajudam a corrigir causas, aprimorar controles, processos e detecções e reduzir recorrência de incidentes semelhantes.",
        "Incidentes encerrados nunca devem gerar melhoria.",
        "Todo evento de log é automaticamente incidente grave.",
        "Resposta a incidentes independe de papéis e comunicação.",
        "Preservação de evidências é sempre desnecessária."
      ],
      "correct": 0,
      "explanation": "Lições aprendidas ajudam a corrigir causas, aprimorar controles, processos e detecções e reduzir recorrência de incidentes semelhantes.",
      "wrong": [
        "Correta. Lições aprendidas ajudam a corrigir causas, aprimorar controles, processos e detecções e reduzir recorrência de incidentes semelhantes.",
        "Incorreta. A proposição “Incidentes encerrados nunca devem gerar melhoria.” contraria ou desloca o conceito central cobrado nesta microlição. Lições aprendidas ajudam a corrigir causas, aprimorar controles, processos e detecções e reduzir recorrência de incidentes semelhantes.",
        "Incorreta. A proposição “Todo evento de log é automaticamente incidente grave.” contraria ou desloca o conceito central cobrado nesta microlição. Lições aprendidas ajudam a corrigir causas, aprimorar controles, processos e detecções e reduzir recorrência de incidentes semelhantes.",
        "Incorreta. A proposição “Resposta a incidentes independe de papéis e comunicação.” contraria ou desloca o conceito central cobrado nesta microlição. Lições aprendidas ajudam a corrigir causas, aprimorar controles, processos e detecções e reduzir recorrência de incidentes semelhantes.",
        "Incorreta. A proposição “Preservação de evidências é sempre desnecessária.” contraria ou desloca o conceito central cobrado nesta microlição. Lições aprendidas ajudam a corrigir causas, aprimorar controles, processos e detecções e reduzir recorrência de incidentes semelhantes."
      ],
      "source": "Questão autoral Versa · edital Transpetro 2026.4",
      "board": "CESGRANRIO — estilo de treino",
      "examYear": 2026,
      "feedbackVersion": "1.7.1"
    },
    {
      "id": "trc-q055b",
      "lessonId": "trc-l055",
      "topic": "ISO/IEC 27035-1: gestão de incidentes",
      "difficulty": "Intermediário",
      "statement": "No contexto de “ISO/IEC 27035-1: gestão de incidentes”, assinale a afirmação compatível com a microlição.",
      "options": [
        "Lições aprendidas retroalimentam controles.",
        "Políticas de segurança são documentos estáticos e não precisam refletir riscos, responsabilidades ou mudanças organizacionais.",
        "Um SGSI é apenas um conjunto de ferramentas técnicas e dispensa governança, contexto, risco, auditoria e melhoria contínua.",
        "Gestão de riscos se resume a listar vulnerabilidades, sem considerar impacto, probabilidade, contexto ou tratamento.",
        "Continuidade de negócios e resposta a incidentes são processos idênticos e não precisam de planejamento específico."
      ],
      "correct": 0,
      "explanation": "Na microlição, a orientação-chave é: “Lições aprendidas retroalimentam controles.”. A família ISO/IEC 27035 apoia preparação, detecção, reporte, avaliação, resposta e aprendizagem com incidentes.",
      "wrong": [
        "Correta. Na microlição, a orientação-chave é: “Lições aprendidas retroalimentam controles.”. A família ISO/IEC 27035 apoia preparação, detecção, reporte, avaliação, resposta e aprendizagem com incidentes.",
        "Incorreta. A proposição “Políticas de segurança são documentos estáticos e não precisam refletir riscos, responsabilidades ou mudanças organizacionais.” contraria ou desloca o conceito central cobrado nesta microlição. Na microlição, a orientação-chave é: “Lições aprendidas retroalimentam controles.”. A família ISO/IEC 27035 apoia preparação, detecção, reporte, avaliação, resposta e aprendizagem com incidentes.",
        "Incorreta. A proposição “Um SGSI é apenas um conjunto de ferramentas técnicas e dispensa governança, contexto, risco, auditoria e melhoria contínua.” contraria ou desloca o conceito central cobrado nesta microlição. Na microlição, a orientação-chave é: “Lições aprendidas retroalimentam controles.”. A família ISO/IEC 27035 apoia preparação, detecção, reporte, avaliação, resposta e aprendizagem com incidentes.",
        "Incorreta. A proposição “Gestão de riscos se resume a listar vulnerabilidades, sem considerar impacto, probabilidade, contexto ou tratamento.” contraria ou desloca o conceito central cobrado nesta microlição. Na microlição, a orientação-chave é: “Lições aprendidas retroalimentam controles.”. A família ISO/IEC 27035 apoia preparação, detecção, reporte, avaliação, resposta e aprendizagem com incidentes.",
        "Incorreta. A proposição “Continuidade de negócios e resposta a incidentes são processos idênticos e não precisam de planejamento específico.” contraria ou desloca o conceito central cobrado nesta microlição. Na microlição, a orientação-chave é: “Lições aprendidas retroalimentam controles.”. A família ISO/IEC 27035 apoia preparação, detecção, reporte, avaliação, resposta e aprendizagem com incidentes."
      ],
      "source": "Questão autoral Versa · edital Transpetro 2026.4",
      "board": "CESGRANRIO — estilo de treino",
      "examYear": 2026,
      "authorialRevision": "v1.7.1",
      "feedbackVersion": "1.7.1"
    },
    {
      "id": "trc-q056",
      "lessonId": "trc-l056",
      "topic": "ISO 22301: continuidade de negócios",
      "difficulty": "Intermediário",
      "statement": "Sobre “ISO 22301: continuidade de negócios”, assinale a alternativa correta.",
      "options": [
        "BIA é um algoritmo de criptografia.",
        "Continuidade trata apenas de backup de arquivos.",
        "RTO mede força de senha.",
        "A BIA identifica atividades prioritárias, impactos de interrupção e requisitos de recuperação, subsidiando estratégias de continuidade.",
        "Exercícios de continuidade devem ser evitados."
      ],
      "correct": 3,
      "explanation": "A BIA identifica atividades prioritárias, impactos de interrupção e requisitos de recuperação, subsidiando estratégias de continuidade.",
      "wrong": [
        "Incorreta. A proposição “BIA é um algoritmo de criptografia.” contraria ou desloca o conceito central cobrado nesta microlição. A BIA identifica atividades prioritárias, impactos de interrupção e requisitos de recuperação, subsidiando estratégias de continuidade.",
        "Incorreta. A proposição “Continuidade trata apenas de backup de arquivos.” contraria ou desloca o conceito central cobrado nesta microlição. A BIA identifica atividades prioritárias, impactos de interrupção e requisitos de recuperação, subsidiando estratégias de continuidade.",
        "Incorreta. A proposição “RTO mede força de senha.” contraria ou desloca o conceito central cobrado nesta microlição. A BIA identifica atividades prioritárias, impactos de interrupção e requisitos de recuperação, subsidiando estratégias de continuidade.",
        "Correta. A BIA identifica atividades prioritárias, impactos de interrupção e requisitos de recuperação, subsidiando estratégias de continuidade.",
        "Incorreta. A proposição “Exercícios de continuidade devem ser evitados.” contraria ou desloca o conceito central cobrado nesta microlição. A BIA identifica atividades prioritárias, impactos de interrupção e requisitos de recuperação, subsidiando estratégias de continuidade."
      ],
      "source": "Questão autoral Versa · edital Transpetro 2026.4",
      "board": "CESGRANRIO — estilo de treino",
      "examYear": 2026,
      "feedbackVersion": "1.7.1"
    },
    {
      "id": "trc-q056b",
      "lessonId": "trc-l056",
      "topic": "ISO 22301: continuidade de negócios",
      "difficulty": "Intermediário",
      "statement": "Sobre “ISO 22301: continuidade de negócios”, qual afirmação sintetiza corretamente um ponto essencial da microlição?",
      "options": [
        "Um SGSI é apenas um conjunto de ferramentas técnicas e dispensa governança, contexto, risco, auditoria e melhoria contínua.",
        "Testes e exercícios validam planos.",
        "Gestão de riscos se resume a listar vulnerabilidades, sem considerar impacto, probabilidade, contexto ou tratamento.",
        "Continuidade de negócios e resposta a incidentes são processos idênticos e não precisam de planejamento específico.",
        "Privacidade é obtida exclusivamente por criptografia, sem necessidade de finalidade, minimização, governança ou avaliação de impacto."
      ],
      "correct": 1,
      "explanation": "Na microlição, a orientação-chave é: “Testes e exercícios validam planos.”. ISO 22301 estabelece requisitos de sistema de gestão de continuidade de negócios.",
      "wrong": [
        "Incorreta. A proposição “Um SGSI é apenas um conjunto de ferramentas técnicas e dispensa governança, contexto, risco, auditoria e melhoria contínua.” contraria ou desloca o conceito central cobrado nesta microlição. Na microlição, a orientação-chave é: “Testes e exercícios validam planos.”. ISO 22301 estabelece requisitos de sistema de gestão de continuidade de negócios.",
        "Correta. Na microlição, a orientação-chave é: “Testes e exercícios validam planos.”. ISO 22301 estabelece requisitos de sistema de gestão de continuidade de negócios.",
        "Incorreta. A proposição “Gestão de riscos se resume a listar vulnerabilidades, sem considerar impacto, probabilidade, contexto ou tratamento.” contraria ou desloca o conceito central cobrado nesta microlição. Na microlição, a orientação-chave é: “Testes e exercícios validam planos.”. ISO 22301 estabelece requisitos de sistema de gestão de continuidade de negócios.",
        "Incorreta. A proposição “Continuidade de negócios e resposta a incidentes são processos idênticos e não precisam de planejamento específico.” contraria ou desloca o conceito central cobrado nesta microlição. Na microlição, a orientação-chave é: “Testes e exercícios validam planos.”. ISO 22301 estabelece requisitos de sistema de gestão de continuidade de negócios.",
        "Incorreta. A proposição “Privacidade é obtida exclusivamente por criptografia, sem necessidade de finalidade, minimização, governança ou avaliação de impacto.” contraria ou desloca o conceito central cobrado nesta microlição. Na microlição, a orientação-chave é: “Testes e exercícios validam planos.”. ISO 22301 estabelece requisitos de sistema de gestão de continuidade de negócios."
      ],
      "source": "Questão autoral Versa · edital Transpetro 2026.4",
      "board": "CESGRANRIO — estilo de treino",
      "examYear": 2026,
      "authorialRevision": "v1.7.1",
      "feedbackVersion": "1.7.1"
    },
    {
      "id": "trc-q057",
      "lessonId": "trc-l057",
      "topic": "ISO 22313: orientação para continuidade",
      "difficulty": "Intermediário",
      "statement": "Sobre “ISO 22313: orientação para continuidade”, assinale a alternativa correta.",
      "options": [
        "22313 substitui a LGPD.",
        "A ISO 22313 oferece orientação para interpretar e implementar o sistema de gestão de continuidade definido pelos requisitos da ISO 22301.",
        "22313 é um protocolo de rede.",
        "22301 é somente uma recomendação sem requisitos.",
        "As duas normas tratam exclusivamente de criptografia."
      ],
      "correct": 1,
      "explanation": "A ISO 22313 oferece orientação para interpretar e implementar o sistema de gestão de continuidade definido pelos requisitos da ISO 22301.",
      "wrong": [
        "Incorreta. A proposição “22313 substitui a LGPD.” contraria ou desloca o conceito central cobrado nesta microlição. A ISO 22313 oferece orientação para interpretar e implementar o sistema de gestão de continuidade definido pelos requisitos da ISO 22301.",
        "Correta. A ISO 22313 oferece orientação para interpretar e implementar o sistema de gestão de continuidade definido pelos requisitos da ISO 22301.",
        "Incorreta. A proposição “22313 é um protocolo de rede.” contraria ou desloca o conceito central cobrado nesta microlição. A ISO 22313 oferece orientação para interpretar e implementar o sistema de gestão de continuidade definido pelos requisitos da ISO 22301.",
        "Incorreta. A proposição “22301 é somente uma recomendação sem requisitos.” contraria ou desloca o conceito central cobrado nesta microlição. A ISO 22313 oferece orientação para interpretar e implementar o sistema de gestão de continuidade definido pelos requisitos da ISO 22301.",
        "Incorreta. A proposição “As duas normas tratam exclusivamente de criptografia.” contraria ou desloca o conceito central cobrado nesta microlição. A ISO 22313 oferece orientação para interpretar e implementar o sistema de gestão de continuidade definido pelos requisitos da ISO 22301."
      ],
      "source": "Questão autoral Versa · edital Transpetro 2026.4",
      "board": "CESGRANRIO — estilo de treino",
      "examYear": 2026,
      "feedbackVersion": "1.7.1"
    },
    {
      "id": "trc-q057b",
      "lessonId": "trc-l057",
      "topic": "ISO 22313: orientação para continuidade",
      "difficulty": "Intermediário",
      "statement": "Ao revisar “ISO 22313: orientação para continuidade” para a CESGRANRIO, qual alternativa deve ser mantida como correta?",
      "options": [
        "Gestão de riscos se resume a listar vulnerabilidades, sem considerar impacto, probabilidade, contexto ou tratamento.",
        "Continuidade de negócios e resposta a incidentes são processos idênticos e não precisam de planejamento específico.",
        "22301 = requisitos; 22313 = orientação.",
        "Privacidade é obtida exclusivamente por criptografia, sem necessidade de finalidade, minimização, governança ou avaliação de impacto.",
        "Frameworks e normas substituem a análise do contexto da organização e devem ser aplicados de forma idêntica em qualquer ambiente."
      ],
      "correct": 2,
      "explanation": "Na microlição, a orientação-chave é: “22301 = requisitos; 22313 = orientação.”. ISO 22313 fornece orientação para o uso dos requisitos de continuidade de negócios da ISO 22301, ajudando a interpretar e implementar práticas adequadas ao contexto.",
      "wrong": [
        "Incorreta. A proposição “Gestão de riscos se resume a listar vulnerabilidades, sem considerar impacto, probabilidade, contexto ou tratamento.” contraria ou desloca o conceito central cobrado nesta microlição. Na microlição, a orientação-chave é: “22301 = requisitos; 22313 = orientação.”. ISO 22313 fornece orientação para o uso dos requisitos de continuidade de negócios da ISO 22301, ajudando a interpretar e implementar práticas adequadas ao contexto.",
        "Incorreta. A proposição “Continuidade de negócios e resposta a incidentes são processos idênticos e não precisam de planejamento específico.” contraria ou desloca o conceito central cobrado nesta microlição. Na microlição, a orientação-chave é: “22301 = requisitos; 22313 = orientação.”. ISO 22313 fornece orientação para o uso dos requisitos de continuidade de negócios da ISO 22301, ajudando a interpretar e implementar práticas adequadas ao contexto.",
        "Correta. Na microlição, a orientação-chave é: “22301 = requisitos; 22313 = orientação.”. ISO 22313 fornece orientação para o uso dos requisitos de continuidade de negócios da ISO 22301, ajudando a interpretar e implementar práticas adequadas ao contexto.",
        "Incorreta. A proposição “Privacidade é obtida exclusivamente por criptografia, sem necessidade de finalidade, minimização, governança ou avaliação de impacto.” contraria ou desloca o conceito central cobrado nesta microlição. Na microlição, a orientação-chave é: “22301 = requisitos; 22313 = orientação.”. ISO 22313 fornece orientação para o uso dos requisitos de continuidade de negócios da ISO 22301, ajudando a interpretar e implementar práticas adequadas ao contexto.",
        "Incorreta. A proposição “Frameworks e normas substituem a análise do contexto da organização e devem ser aplicados de forma idêntica em qualquer ambiente.” contraria ou desloca o conceito central cobrado nesta microlição. Na microlição, a orientação-chave é: “22301 = requisitos; 22313 = orientação.”. ISO 22313 fornece orientação para o uso dos requisitos de continuidade de negócios da ISO 22301, ajudando a interpretar e implementar práticas adequadas ao contexto."
      ],
      "source": "Questão autoral Versa · edital Transpetro 2026.4",
      "board": "CESGRANRIO — estilo de treino",
      "examYear": 2026,
      "authorialRevision": "v1.7.1",
      "feedbackVersion": "1.7.1"
    },
    {
      "id": "trc-q058",
      "lessonId": "trc-l058",
      "topic": "Integração: risco, incidente e continuidade",
      "difficulty": "Intermediário",
      "statement": "Sobre “Integração: risco, incidente e continuidade”, assinale a alternativa correta.",
      "options": [
        "Continuidade começa apenas após todos os incidentes terminarem.",
        "Risco é avaliado uma única vez e nunca atualizado.",
        "SGSI não usa resultados de auditoria ou incidentes.",
        "Planos de continuidade dispensam testes.",
        "A resposta trata o evento de segurança; a continuidade assegura atividades e recuperação quando o impacto ameaça produtos ou serviços prioritários."
      ],
      "correct": 4,
      "explanation": "A resposta trata o evento de segurança; a continuidade assegura atividades e recuperação quando o impacto ameaça produtos ou serviços prioritários.",
      "wrong": [
        "Incorreta. A proposição “Continuidade começa apenas após todos os incidentes terminarem.” contraria ou desloca o conceito central cobrado nesta microlição. A resposta trata o evento de segurança; a continuidade assegura atividades e recuperação quando o impacto ameaça produtos ou serviços prioritários.",
        "Incorreta. A proposição “Risco é avaliado uma única vez e nunca atualizado.” contraria ou desloca o conceito central cobrado nesta microlição. A resposta trata o evento de segurança; a continuidade assegura atividades e recuperação quando o impacto ameaça produtos ou serviços prioritários.",
        "Incorreta. A proposição “SGSI não usa resultados de auditoria ou incidentes.” contraria ou desloca o conceito central cobrado nesta microlição. A resposta trata o evento de segurança; a continuidade assegura atividades e recuperação quando o impacto ameaça produtos ou serviços prioritários.",
        "Incorreta. A proposição “Planos de continuidade dispensam testes.” contraria ou desloca o conceito central cobrado nesta microlição. A resposta trata o evento de segurança; a continuidade assegura atividades e recuperação quando o impacto ameaça produtos ou serviços prioritários.",
        "Correta. A resposta trata o evento de segurança; a continuidade assegura atividades e recuperação quando o impacto ameaça produtos ou serviços prioritários."
      ],
      "source": "Questão autoral Versa · edital Transpetro 2026.4",
      "board": "CESGRANRIO — estilo de treino",
      "examYear": 2026,
      "feedbackVersion": "1.7.1"
    },
    {
      "id": "trc-q058b",
      "lessonId": "trc-l058",
      "topic": "Integração: risco, incidente e continuidade",
      "difficulty": "Intermediário",
      "statement": "Para resolver uma questão sobre “Integração: risco, incidente e continuidade”, qual orientação conceitual está de acordo com o conteúdo estudado?",
      "options": [
        "Continuidade de negócios e resposta a incidentes são processos idênticos e não precisam de planejamento específico.",
        "Privacidade é obtida exclusivamente por criptografia, sem necessidade de finalidade, minimização, governança ou avaliação de impacto.",
        "Frameworks e normas substituem a análise do contexto da organização e devem ser aplicados de forma idêntica em qualquer ambiente.",
        "Lições aprendidas atualizam avaliação de riscos.",
        "Conformidade legal elimina automaticamente todos os riscos de segurança da informação e de privacidade."
      ],
      "correct": 3,
      "explanation": "Na microlição, a orientação-chave é: “Lições aprendidas atualizam avaliação de riscos.”. Risco orienta prevenção e priorização; incidentes exigem detecção e resposta; continuidade trata manutenção/recuperação de atividades prioritárias.",
      "wrong": [
        "Incorreta. A proposição “Continuidade de negócios e resposta a incidentes são processos idênticos e não precisam de planejamento específico.” contraria ou desloca o conceito central cobrado nesta microlição. Na microlição, a orientação-chave é: “Lições aprendidas atualizam avaliação de riscos.”. Risco orienta prevenção e priorização; incidentes exigem detecção e resposta; continuidade trata manutenção/recuperação de atividades prioritárias.",
        "Incorreta. A proposição “Privacidade é obtida exclusivamente por criptografia, sem necessidade de finalidade, minimização, governança ou avaliação de impacto.” contraria ou desloca o conceito central cobrado nesta microlição. Na microlição, a orientação-chave é: “Lições aprendidas atualizam avaliação de riscos.”. Risco orienta prevenção e priorização; incidentes exigem detecção e resposta; continuidade trata manutenção/recuperação de atividades prioritárias.",
        "Incorreta. A proposição “Frameworks e normas substituem a análise do contexto da organização e devem ser aplicados de forma idêntica em qualquer ambiente.” contraria ou desloca o conceito central cobrado nesta microlição. Na microlição, a orientação-chave é: “Lições aprendidas atualizam avaliação de riscos.”. Risco orienta prevenção e priorização; incidentes exigem detecção e resposta; continuidade trata manutenção/recuperação de atividades prioritárias.",
        "Correta. Na microlição, a orientação-chave é: “Lições aprendidas atualizam avaliação de riscos.”. Risco orienta prevenção e priorização; incidentes exigem detecção e resposta; continuidade trata manutenção/recuperação de atividades prioritárias.",
        "Incorreta. A proposição “Conformidade legal elimina automaticamente todos os riscos de segurança da informação e de privacidade.” contraria ou desloca o conceito central cobrado nesta microlição. Na microlição, a orientação-chave é: “Lições aprendidas atualizam avaliação de riscos.”. Risco orienta prevenção e priorização; incidentes exigem detecção e resposta; continuidade trata manutenção/recuperação de atividades prioritárias."
      ],
      "source": "Questão autoral Versa · edital Transpetro 2026.4",
      "board": "CESGRANRIO — estilo de treino",
      "examYear": 2026,
      "authorialRevision": "v1.7.1",
      "feedbackVersion": "1.7.1"
    },
    {
      "id": "trc-q059",
      "lessonId": "trc-l059",
      "topic": "ISO/IEC 29100: estrutura e princípios de privacidade",
      "difficulty": "Intermediário",
      "statement": "Sobre “ISO/IEC 29100: estrutura e princípios de privacidade”, assinale a alternativa correta.",
      "options": [
        "Minimização significa coletar tudo e apagar somente após incidente.",
        "Anonimização mantém identificação direta intacta.",
        "Minimização busca limitar coleta, acesso, retenção e tratamento ao que é necessário para objetivos legítimos e definidos.",
        "Need-to-know exige acesso amplo por padrão.",
        "Privacidade trata apenas de confidencialidade criptográfica."
      ],
      "correct": 2,
      "explanation": "Minimização busca limitar coleta, acesso, retenção e tratamento ao que é necessário para objetivos legítimos e definidos.",
      "wrong": [
        "Incorreta. A proposição “Minimização significa coletar tudo e apagar somente após incidente.” contraria ou desloca o conceito central cobrado nesta microlição. Minimização busca limitar coleta, acesso, retenção e tratamento ao que é necessário para objetivos legítimos e definidos.",
        "Incorreta. A proposição “Anonimização mantém identificação direta intacta.” contraria ou desloca o conceito central cobrado nesta microlição. Minimização busca limitar coleta, acesso, retenção e tratamento ao que é necessário para objetivos legítimos e definidos.",
        "Correta. Minimização busca limitar coleta, acesso, retenção e tratamento ao que é necessário para objetivos legítimos e definidos.",
        "Incorreta. A proposição “Need-to-know exige acesso amplo por padrão.” contraria ou desloca o conceito central cobrado nesta microlição. Minimização busca limitar coleta, acesso, retenção e tratamento ao que é necessário para objetivos legítimos e definidos.",
        "Incorreta. A proposição “Privacidade trata apenas de confidencialidade criptográfica.” contraria ou desloca o conceito central cobrado nesta microlição. Minimização busca limitar coleta, acesso, retenção e tratamento ao que é necessário para objetivos legítimos e definidos."
      ],
      "source": "Questão autoral Versa · edital Transpetro 2026.4",
      "board": "CESGRANRIO — estilo de treino",
      "examYear": 2026,
      "feedbackVersion": "1.7.1"
    },
    {
      "id": "trc-q059b",
      "lessonId": "trc-l059",
      "topic": "ISO/IEC 29100: estrutura e princípios de privacidade",
      "difficulty": "Intermediário",
      "statement": "No contexto de “ISO/IEC 29100: estrutura e princípios de privacidade”, assinale a afirmação compatível com a microlição.",
      "options": [
        "Privacidade é obtida exclusivamente por criptografia, sem necessidade de finalidade, minimização, governança ou avaliação de impacto.",
        "Frameworks e normas substituem a análise do contexto da organização e devem ser aplicados de forma idêntica em qualquer ambiente.",
        "Conformidade legal elimina automaticamente todos os riscos de segurança da informação e de privacidade.",
        "Auditoria interna é incompatível com melhoria contínua porque deve ocorrer apenas depois de um incidente grave.",
        "Princípios devem orientar desenho e operação do tratamento."
      ],
      "correct": 4,
      "explanation": "Na microlição, a orientação-chave é: “Princípios devem orientar desenho e operação do tratamento.”. ISO/IEC 29100 fornece uma estrutura de alto nível para privacidade em TIC.",
      "wrong": [
        "Incorreta. A proposição “Privacidade é obtida exclusivamente por criptografia, sem necessidade de finalidade, minimização, governança ou avaliação de impacto.” contraria ou desloca o conceito central cobrado nesta microlição. Na microlição, a orientação-chave é: “Princípios devem orientar desenho e operação do tratamento.”. ISO/IEC 29100 fornece uma estrutura de alto nível para privacidade em TIC.",
        "Incorreta. A proposição “Frameworks e normas substituem a análise do contexto da organização e devem ser aplicados de forma idêntica em qualquer ambiente.” contraria ou desloca o conceito central cobrado nesta microlição. Na microlição, a orientação-chave é: “Princípios devem orientar desenho e operação do tratamento.”. ISO/IEC 29100 fornece uma estrutura de alto nível para privacidade em TIC.",
        "Incorreta. A proposição “Conformidade legal elimina automaticamente todos os riscos de segurança da informação e de privacidade.” contraria ou desloca o conceito central cobrado nesta microlição. Na microlição, a orientação-chave é: “Princípios devem orientar desenho e operação do tratamento.”. ISO/IEC 29100 fornece uma estrutura de alto nível para privacidade em TIC.",
        "Incorreta. A proposição “Auditoria interna é incompatível com melhoria contínua porque deve ocorrer apenas depois de um incidente grave.” contraria ou desloca o conceito central cobrado nesta microlição. Na microlição, a orientação-chave é: “Princípios devem orientar desenho e operação do tratamento.”. ISO/IEC 29100 fornece uma estrutura de alto nível para privacidade em TIC.",
        "Correta. Na microlição, a orientação-chave é: “Princípios devem orientar desenho e operação do tratamento.”. ISO/IEC 29100 fornece uma estrutura de alto nível para privacidade em TIC."
      ],
      "source": "Questão autoral Versa · edital Transpetro 2026.4",
      "board": "CESGRANRIO — estilo de treino",
      "examYear": 2026,
      "authorialRevision": "v1.7.1",
      "feedbackVersion": "1.7.1"
    },
    {
      "id": "trc-q060",
      "lessonId": "trc-l060",
      "topic": "ISO/IEC 29134: Privacy Impact Assessment",
      "difficulty": "Intermediário",
      "statement": "Sobre “ISO/IEC 29134: Privacy Impact Assessment”, assinale a alternativa correta.",
      "options": [
        "PIA identifica e avalia impactos/riscos de privacidade e documenta medidas para tratá-los antes e durante a iniciativa.",
        "PIA é um algoritmo de autenticação.",
        "PIA serve apenas para medir desempenho de rede.",
        "PIA elimina automaticamente todos os riscos.",
        "PIA é o mesmo que CVE."
      ],
      "correct": 0,
      "explanation": "PIA identifica e avalia impactos/riscos de privacidade e documenta medidas para tratá-los antes e durante a iniciativa.",
      "wrong": [
        "Correta. PIA identifica e avalia impactos/riscos de privacidade e documenta medidas para tratá-los antes e durante a iniciativa.",
        "Incorreta. A proposição “PIA é um algoritmo de autenticação.” contraria ou desloca o conceito central cobrado nesta microlição. PIA identifica e avalia impactos/riscos de privacidade e documenta medidas para tratá-los antes e durante a iniciativa.",
        "Incorreta. A proposição “PIA serve apenas para medir desempenho de rede.” contraria ou desloca o conceito central cobrado nesta microlição. PIA identifica e avalia impactos/riscos de privacidade e documenta medidas para tratá-los antes e durante a iniciativa.",
        "Incorreta. A proposição “PIA elimina automaticamente todos os riscos.” contraria ou desloca o conceito central cobrado nesta microlição. PIA identifica e avalia impactos/riscos de privacidade e documenta medidas para tratá-los antes e durante a iniciativa.",
        "Incorreta. A proposição “PIA é o mesmo que CVE.” contraria ou desloca o conceito central cobrado nesta microlição. PIA identifica e avalia impactos/riscos de privacidade e documenta medidas para tratá-los antes e durante a iniciativa."
      ],
      "source": "Questão autoral Versa · edital Transpetro 2026.4",
      "board": "CESGRANRIO — estilo de treino",
      "examYear": 2026,
      "feedbackVersion": "1.7.1"
    },
    {
      "id": "trc-q060b",
      "lessonId": "trc-l060",
      "topic": "ISO/IEC 29134: Privacy Impact Assessment",
      "difficulty": "Intermediário",
      "statement": "Sobre “ISO/IEC 29134: Privacy Impact Assessment”, qual afirmação sintetiza corretamente um ponto essencial da microlição?",
      "options": [
        "PIA pode ser aplicada a processos, sistemas, programas, software ou dispositivos.",
        "Frameworks e normas substituem a análise do contexto da organização e devem ser aplicados de forma idêntica em qualquer ambiente.",
        "Conformidade legal elimina automaticamente todos os riscos de segurança da informação e de privacidade.",
        "Auditoria interna é incompatível com melhoria contínua porque deve ocorrer apenas depois de um incidente grave.",
        "Políticas de segurança são documentos estáticos e não precisam refletir riscos, responsabilidades ou mudanças organizacionais."
      ],
      "correct": 0,
      "explanation": "Na microlição, a orientação-chave é: “PIA pode ser aplicada a processos, sistemas, programas, software ou dispositivos.”. ISO/IEC 29134 orienta avaliação de impacto de privacidade (PIA), processo usado para identificar riscos de privacidade, consultar partes interessadas quando apropriado e documentar medidas de tratamento.",
      "wrong": [
        "Correta. Na microlição, a orientação-chave é: “PIA pode ser aplicada a processos, sistemas, programas, software ou dispositivos.”. ISO/IEC 29134 orienta avaliação de impacto de privacidade (PIA), processo usado para identificar riscos de privacidade, consultar partes interessadas quando apropriado e documentar medidas de tratamento.",
        "Incorreta. A proposição “Frameworks e normas substituem a análise do contexto da organização e devem ser aplicados de forma idêntica em qualquer ambiente.” contraria ou desloca o conceito central cobrado nesta microlição. Na microlição, a orientação-chave é: “PIA pode ser aplicada a processos, sistemas, programas, software ou dispositivos.”. ISO/IEC 29134 orienta avaliação de impacto de privacidade (PIA), processo usado para identificar riscos de privacidade, consultar partes interessadas quando apropriado e documentar medidas de tratamento.",
        "Incorreta. A proposição “Conformidade legal elimina automaticamente todos os riscos de segurança da informação e de privacidade.” contraria ou desloca o conceito central cobrado nesta microlição. Na microlição, a orientação-chave é: “PIA pode ser aplicada a processos, sistemas, programas, software ou dispositivos.”. ISO/IEC 29134 orienta avaliação de impacto de privacidade (PIA), processo usado para identificar riscos de privacidade, consultar partes interessadas quando apropriado e documentar medidas de tratamento.",
        "Incorreta. A proposição “Auditoria interna é incompatível com melhoria contínua porque deve ocorrer apenas depois de um incidente grave.” contraria ou desloca o conceito central cobrado nesta microlição. Na microlição, a orientação-chave é: “PIA pode ser aplicada a processos, sistemas, programas, software ou dispositivos.”. ISO/IEC 29134 orienta avaliação de impacto de privacidade (PIA), processo usado para identificar riscos de privacidade, consultar partes interessadas quando apropriado e documentar medidas de tratamento.",
        "Incorreta. A proposição “Políticas de segurança são documentos estáticos e não precisam refletir riscos, responsabilidades ou mudanças organizacionais.” contraria ou desloca o conceito central cobrado nesta microlição. Na microlição, a orientação-chave é: “PIA pode ser aplicada a processos, sistemas, programas, software ou dispositivos.”. ISO/IEC 29134 orienta avaliação de impacto de privacidade (PIA), processo usado para identificar riscos de privacidade, consultar partes interessadas quando apropriado e documentar medidas de tratamento."
      ],
      "source": "Questão autoral Versa · edital Transpetro 2026.4",
      "board": "CESGRANRIO — estilo de treino",
      "examYear": 2026,
      "authorialRevision": "v1.7.1",
      "feedbackVersion": "1.7.1"
    },
    {
      "id": "trc-q061",
      "lessonId": "trc-l061",
      "topic": "ISO/IEC 27701: gestão de informação de privacidade",
      "difficulty": "Intermediário",
      "statement": "Sobre “ISO/IEC 27701: gestão de informação de privacidade”, assinale a alternativa correta.",
      "options": [
        "PIMS é uma técnica de port scanning.",
        "ISO 27701 substitui toda legislação nacional.",
        "Privacidade é independente de governança e risco.",
        "PIMS estrutura a gestão sistemática de informação de privacidade e pode ser integrado ao SGSI para alinhar segurança, responsabilidades e controles.",
        "A norma trata somente de Wi-Fi."
      ],
      "correct": 3,
      "explanation": "PIMS estrutura a gestão sistemática de informação de privacidade e pode ser integrado ao SGSI para alinhar segurança, responsabilidades e controles.",
      "wrong": [
        "Incorreta. A proposição “PIMS é uma técnica de port scanning.” contraria ou desloca o conceito central cobrado nesta microlição. PIMS estrutura a gestão sistemática de informação de privacidade e pode ser integrado ao SGSI para alinhar segurança, responsabilidades e controles.",
        "Incorreta. A proposição “ISO 27701 substitui toda legislação nacional.” contraria ou desloca o conceito central cobrado nesta microlição. PIMS estrutura a gestão sistemática de informação de privacidade e pode ser integrado ao SGSI para alinhar segurança, responsabilidades e controles.",
        "Incorreta. A proposição “Privacidade é independente de governança e risco.” contraria ou desloca o conceito central cobrado nesta microlição. PIMS estrutura a gestão sistemática de informação de privacidade e pode ser integrado ao SGSI para alinhar segurança, responsabilidades e controles.",
        "Correta. PIMS estrutura a gestão sistemática de informação de privacidade e pode ser integrado ao SGSI para alinhar segurança, responsabilidades e controles.",
        "Incorreta. A proposição “A norma trata somente de Wi-Fi.” contraria ou desloca o conceito central cobrado nesta microlição. PIMS estrutura a gestão sistemática de informação de privacidade e pode ser integrado ao SGSI para alinhar segurança, responsabilidades e controles."
      ],
      "source": "Questão autoral Versa · edital Transpetro 2026.4",
      "board": "CESGRANRIO — estilo de treino",
      "examYear": 2026,
      "feedbackVersion": "1.7.1"
    },
    {
      "id": "trc-q061b",
      "lessonId": "trc-l061",
      "topic": "ISO/IEC 27701: gestão de informação de privacidade",
      "difficulty": "Intermediário",
      "statement": "Ao revisar “ISO/IEC 27701: gestão de informação de privacidade” para a CESGRANRIO, qual alternativa deve ser mantida como correta?",
      "options": [
        "Conformidade legal elimina automaticamente todos os riscos de segurança da informação e de privacidade.",
        "Papéis de controlador e operador/processador influenciam obrigações.",
        "Auditoria interna é incompatível com melhoria contínua porque deve ocorrer apenas depois de um incidente grave.",
        "Políticas de segurança são documentos estáticos e não precisam refletir riscos, responsabilidades ou mudanças organizacionais.",
        "Um SGSI é apenas um conjunto de ferramentas técnicas e dispensa governança, contexto, risco, auditoria e melhoria contínua."
      ],
      "correct": 1,
      "explanation": "Na microlição, a orientação-chave é: “Papéis de controlador e operador/processador influenciam obrigações.”. ISO/IEC 27701 estende práticas de gestão para informação de privacidade, integrando requisitos e orientações a estruturas de segurança e privacidade.",
      "wrong": [
        "Incorreta. A proposição “Conformidade legal elimina automaticamente todos os riscos de segurança da informação e de privacidade.” contraria ou desloca o conceito central cobrado nesta microlição. Na microlição, a orientação-chave é: “Papéis de controlador e operador/processador influenciam obrigações.”. ISO/IEC 27701 estende práticas de gestão para informação de privacidade, integrando requisitos e orientações a estruturas de segurança e privacidade.",
        "Correta. Na microlição, a orientação-chave é: “Papéis de controlador e operador/processador influenciam obrigações.”. ISO/IEC 27701 estende práticas de gestão para informação de privacidade, integrando requisitos e orientações a estruturas de segurança e privacidade.",
        "Incorreta. A proposição “Auditoria interna é incompatível com melhoria contínua porque deve ocorrer apenas depois de um incidente grave.” contraria ou desloca o conceito central cobrado nesta microlição. Na microlição, a orientação-chave é: “Papéis de controlador e operador/processador influenciam obrigações.”. ISO/IEC 27701 estende práticas de gestão para informação de privacidade, integrando requisitos e orientações a estruturas de segurança e privacidade.",
        "Incorreta. A proposição “Políticas de segurança são documentos estáticos e não precisam refletir riscos, responsabilidades ou mudanças organizacionais.” contraria ou desloca o conceito central cobrado nesta microlição. Na microlição, a orientação-chave é: “Papéis de controlador e operador/processador influenciam obrigações.”. ISO/IEC 27701 estende práticas de gestão para informação de privacidade, integrando requisitos e orientações a estruturas de segurança e privacidade.",
        "Incorreta. A proposição “Um SGSI é apenas um conjunto de ferramentas técnicas e dispensa governança, contexto, risco, auditoria e melhoria contínua.” contraria ou desloca o conceito central cobrado nesta microlição. Na microlição, a orientação-chave é: “Papéis de controlador e operador/processador influenciam obrigações.”. ISO/IEC 27701 estende práticas de gestão para informação de privacidade, integrando requisitos e orientações a estruturas de segurança e privacidade."
      ],
      "source": "Questão autoral Versa · edital Transpetro 2026.4",
      "board": "CESGRANRIO — estilo de treino",
      "examYear": 2026,
      "authorialRevision": "v1.7.1",
      "feedbackVersion": "1.7.1"
    },
    {
      "id": "trc-q062",
      "lessonId": "trc-l062",
      "topic": "NIST Cybersecurity Framework 2.0",
      "difficulty": "Intermediário",
      "statement": "Sobre “NIST Cybersecurity Framework 2.0”, assinale a alternativa correta.",
      "options": [
        "Identify, Attack, Exploit, Persist, Exfiltrate e Recover.",
        "Govern, Identify, Protect, Detect, Respond e Recover formam o núcleo funcional do NIST CSF 2.0.",
        "Plan, Do, Check, Act, Audit e Certify.",
        "Govern, Encrypt, Patch, Scan, Backup e Report.",
        "O CSF 2.0 possui apenas cinco funções e removeu Govern."
      ],
      "correct": 1,
      "explanation": "Govern, Identify, Protect, Detect, Respond e Recover formam o núcleo funcional do NIST CSF 2.0.",
      "wrong": [
        "Incorreta. A proposição “Identify, Attack, Exploit, Persist, Exfiltrate e Recover.” contraria ou desloca o conceito central cobrado nesta microlição. Govern, Identify, Protect, Detect, Respond e Recover formam o núcleo funcional do NIST CSF 2.0.",
        "Correta. Govern, Identify, Protect, Detect, Respond e Recover formam o núcleo funcional do NIST CSF 2.0.",
        "Incorreta. A proposição “Plan, Do, Check, Act, Audit e Certify.” contraria ou desloca o conceito central cobrado nesta microlição. Govern, Identify, Protect, Detect, Respond e Recover formam o núcleo funcional do NIST CSF 2.0.",
        "Incorreta. A proposição “Govern, Encrypt, Patch, Scan, Backup e Report.” contraria ou desloca o conceito central cobrado nesta microlição. Govern, Identify, Protect, Detect, Respond e Recover formam o núcleo funcional do NIST CSF 2.0.",
        "Incorreta. A proposição “O CSF 2.0 possui apenas cinco funções e removeu Govern.” contraria ou desloca o conceito central cobrado nesta microlição. Govern, Identify, Protect, Detect, Respond e Recover formam o núcleo funcional do NIST CSF 2.0."
      ],
      "source": "Questão autoral Versa · edital Transpetro 2026.4",
      "board": "CESGRANRIO — estilo de treino",
      "examYear": 2026,
      "feedbackVersion": "1.7.1"
    },
    {
      "id": "trc-q062b",
      "lessonId": "trc-l062",
      "topic": "NIST Cybersecurity Framework 2.0",
      "difficulty": "Intermediário",
      "statement": "Para resolver uma questão sobre “NIST Cybersecurity Framework 2.0”, qual orientação conceitual está de acordo com o conteúdo estudado?",
      "options": [
        "Auditoria interna é incompatível com melhoria contínua porque deve ocorrer apenas depois de um incidente grave.",
        "Políticas de segurança são documentos estáticos e não precisam refletir riscos, responsabilidades ou mudanças organizacionais.",
        "O CSF pode ser usado por organizações de diferentes setores e portes.",
        "Um SGSI é apenas um conjunto de ferramentas técnicas e dispensa governança, contexto, risco, auditoria e melhoria contínua.",
        "Gestão de riscos se resume a listar vulnerabilidades, sem considerar impacto, probabilidade, contexto ou tratamento."
      ],
      "correct": 2,
      "explanation": "Na microlição, a orientação-chave é: “O CSF pode ser usado por organizações de diferentes setores e portes.”. NIST CSF 2.0 organiza resultados de cibersegurança em seis funções: Govern, Identify, Protect, Detect, Respond e Recover.",
      "wrong": [
        "Incorreta. A proposição “Auditoria interna é incompatível com melhoria contínua porque deve ocorrer apenas depois de um incidente grave.” contraria ou desloca o conceito central cobrado nesta microlição. Na microlição, a orientação-chave é: “O CSF pode ser usado por organizações de diferentes setores e portes.”. NIST CSF 2.0 organiza resultados de cibersegurança em seis funções: Govern, Identify, Protect, Detect, Respond e Recover.",
        "Incorreta. A proposição “Políticas de segurança são documentos estáticos e não precisam refletir riscos, responsabilidades ou mudanças organizacionais.” contraria ou desloca o conceito central cobrado nesta microlição. Na microlição, a orientação-chave é: “O CSF pode ser usado por organizações de diferentes setores e portes.”. NIST CSF 2.0 organiza resultados de cibersegurança em seis funções: Govern, Identify, Protect, Detect, Respond e Recover.",
        "Correta. Na microlição, a orientação-chave é: “O CSF pode ser usado por organizações de diferentes setores e portes.”. NIST CSF 2.0 organiza resultados de cibersegurança em seis funções: Govern, Identify, Protect, Detect, Respond e Recover.",
        "Incorreta. A proposição “Um SGSI é apenas um conjunto de ferramentas técnicas e dispensa governança, contexto, risco, auditoria e melhoria contínua.” contraria ou desloca o conceito central cobrado nesta microlição. Na microlição, a orientação-chave é: “O CSF pode ser usado por organizações de diferentes setores e portes.”. NIST CSF 2.0 organiza resultados de cibersegurança em seis funções: Govern, Identify, Protect, Detect, Respond e Recover.",
        "Incorreta. A proposição “Gestão de riscos se resume a listar vulnerabilidades, sem considerar impacto, probabilidade, contexto ou tratamento.” contraria ou desloca o conceito central cobrado nesta microlição. Na microlição, a orientação-chave é: “O CSF pode ser usado por organizações de diferentes setores e portes.”. NIST CSF 2.0 organiza resultados de cibersegurança em seis funções: Govern, Identify, Protect, Detect, Respond e Recover."
      ],
      "source": "Questão autoral Versa · edital Transpetro 2026.4",
      "board": "CESGRANRIO — estilo de treino",
      "examYear": 2026,
      "authorialRevision": "v1.7.1",
      "feedbackVersion": "1.7.1"
    },
    {
      "id": "trc-q063",
      "lessonId": "trc-l063",
      "topic": "CIS Critical Security Controls v8.1",
      "difficulty": "Intermediário",
      "statement": "Sobre “CIS Critical Security Controls v8.1”, assinale a alternativa correta.",
      "options": [
        "IG1 é o grupo reservado apenas a infraestruturas militares.",
        "CIS Controls são uma lista de CVEs.",
        "v8.1 removeu qualquer relação com governança.",
        "Implementation Groups medem apenas velocidade de rede.",
        "IG1 reúne salvaguardas essenciais de higiene cibernética e funciona como base recomendada para todas as organizações."
      ],
      "correct": 4,
      "explanation": "IG1 reúne salvaguardas essenciais de higiene cibernética e funciona como base recomendada para todas as organizações.",
      "wrong": [
        "Incorreta. A proposição “IG1 é o grupo reservado apenas a infraestruturas militares.” contraria ou desloca o conceito central cobrado nesta microlição. IG1 reúne salvaguardas essenciais de higiene cibernética e funciona como base recomendada para todas as organizações.",
        "Incorreta. A proposição “CIS Controls são uma lista de CVEs.” contraria ou desloca o conceito central cobrado nesta microlição. IG1 reúne salvaguardas essenciais de higiene cibernética e funciona como base recomendada para todas as organizações.",
        "Incorreta. A proposição “v8.1 removeu qualquer relação com governança.” contraria ou desloca o conceito central cobrado nesta microlição. IG1 reúne salvaguardas essenciais de higiene cibernética e funciona como base recomendada para todas as organizações.",
        "Incorreta. A proposição “Implementation Groups medem apenas velocidade de rede.” contraria ou desloca o conceito central cobrado nesta microlição. IG1 reúne salvaguardas essenciais de higiene cibernética e funciona como base recomendada para todas as organizações.",
        "Correta. IG1 reúne salvaguardas essenciais de higiene cibernética e funciona como base recomendada para todas as organizações."
      ],
      "source": "Questão autoral Versa · edital Transpetro 2026.4",
      "board": "CESGRANRIO — estilo de treino",
      "examYear": 2026,
      "feedbackVersion": "1.7.1"
    },
    {
      "id": "trc-q063b",
      "lessonId": "trc-l063",
      "topic": "CIS Critical Security Controls v8.1",
      "difficulty": "Intermediário",
      "statement": "No contexto de “CIS Critical Security Controls v8.1”, assinale a afirmação compatível com a microlição.",
      "options": [
        "Políticas de segurança são documentos estáticos e não precisam refletir riscos, responsabilidades ou mudanças organizacionais.",
        "Um SGSI é apenas um conjunto de ferramentas técnicas e dispensa governança, contexto, risco, auditoria e melhoria contínua.",
        "Gestão de riscos se resume a listar vulnerabilidades, sem considerar impacto, probabilidade, contexto ou tratamento.",
        "v8.1 alinha-se a referências modernas como CSF 2.0.",
        "Continuidade de negócios e resposta a incidentes são processos idênticos e não precisam de planejamento específico."
      ],
      "correct": 3,
      "explanation": "Na microlição, a orientação-chave é: “v8.1 alinha-se a referências modernas como CSF 2.0.”. CIS Controls v8.1 é um conjunto priorizado de salvaguardas de defesa.",
      "wrong": [
        "Incorreta. A proposição “Políticas de segurança são documentos estáticos e não precisam refletir riscos, responsabilidades ou mudanças organizacionais.” contraria ou desloca o conceito central cobrado nesta microlição. Na microlição, a orientação-chave é: “v8.1 alinha-se a referências modernas como CSF 2.0.”. CIS Controls v8.1 é um conjunto priorizado de salvaguardas de defesa.",
        "Incorreta. A proposição “Um SGSI é apenas um conjunto de ferramentas técnicas e dispensa governança, contexto, risco, auditoria e melhoria contínua.” contraria ou desloca o conceito central cobrado nesta microlição. Na microlição, a orientação-chave é: “v8.1 alinha-se a referências modernas como CSF 2.0.”. CIS Controls v8.1 é um conjunto priorizado de salvaguardas de defesa.",
        "Incorreta. A proposição “Gestão de riscos se resume a listar vulnerabilidades, sem considerar impacto, probabilidade, contexto ou tratamento.” contraria ou desloca o conceito central cobrado nesta microlição. Na microlição, a orientação-chave é: “v8.1 alinha-se a referências modernas como CSF 2.0.”. CIS Controls v8.1 é um conjunto priorizado de salvaguardas de defesa.",
        "Correta. Na microlição, a orientação-chave é: “v8.1 alinha-se a referências modernas como CSF 2.0.”. CIS Controls v8.1 é um conjunto priorizado de salvaguardas de defesa.",
        "Incorreta. A proposição “Continuidade de negócios e resposta a incidentes são processos idênticos e não precisam de planejamento específico.” contraria ou desloca o conceito central cobrado nesta microlição. Na microlição, a orientação-chave é: “v8.1 alinha-se a referências modernas como CSF 2.0.”. CIS Controls v8.1 é um conjunto priorizado de salvaguardas de defesa."
      ],
      "source": "Questão autoral Versa · edital Transpetro 2026.4",
      "board": "CESGRANRIO — estilo de treino",
      "examYear": 2026,
      "authorialRevision": "v1.7.1",
      "feedbackVersion": "1.7.1"
    },
    {
      "id": "trc-q064",
      "lessonId": "trc-l064",
      "topic": "Marco Civil, LGPD e Resolução Anatel 740",
      "difficulty": "Intermediário",
      "statement": "Sobre “Marco Civil, LGPD e Resolução Anatel 740”, assinale a alternativa correta.",
      "options": [
        "A LGPD não possui alterações desde 2018.",
        "Marco Civil é uma norma ISO.",
        "Porque o edital cobra as normas “e suas alterações”; a preparação deve refletir a redação vigente e alterações regulamentares aplicáveis.",
        "Resolução 740 trata exclusivamente de relações trabalhistas.",
        "Alterações posteriores devem ser ignoradas em qualquer questão de 2026."
      ],
      "correct": 2,
      "explanation": "Porque o edital cobra as normas “e suas alterações”; a preparação deve refletir a redação vigente e alterações regulamentares aplicáveis.",
      "wrong": [
        "Incorreta. A proposição “A LGPD não possui alterações desde 2018.” contraria ou desloca o conceito central cobrado nesta microlição. Porque o edital cobra as normas “e suas alterações”; a preparação deve refletir a redação vigente e alterações regulamentares aplicáveis.",
        "Incorreta. A proposição “Marco Civil é uma norma ISO.” contraria ou desloca o conceito central cobrado nesta microlição. Porque o edital cobra as normas “e suas alterações”; a preparação deve refletir a redação vigente e alterações regulamentares aplicáveis.",
        "Correta. Porque o edital cobra as normas “e suas alterações”; a preparação deve refletir a redação vigente e alterações regulamentares aplicáveis.",
        "Incorreta. A proposição “Resolução 740 trata exclusivamente de relações trabalhistas.” contraria ou desloca o conceito central cobrado nesta microlição. Porque o edital cobra as normas “e suas alterações”; a preparação deve refletir a redação vigente e alterações regulamentares aplicáveis.",
        "Incorreta. A proposição “Alterações posteriores devem ser ignoradas em qualquer questão de 2026.” contraria ou desloca o conceito central cobrado nesta microlição. Porque o edital cobra as normas “e suas alterações”; a preparação deve refletir a redação vigente e alterações regulamentares aplicáveis."
      ],
      "source": "Questão autoral Versa · edital Transpetro 2026.4",
      "board": "CESGRANRIO — estilo de treino",
      "examYear": 2026,
      "feedbackVersion": "1.7.1"
    },
    {
      "id": "trc-q064b",
      "lessonId": "trc-l064",
      "topic": "Marco Civil, LGPD e Resolução Anatel 740",
      "difficulty": "Intermediário",
      "statement": "Sobre “Marco Civil, LGPD e Resolução Anatel 740”, qual afirmação sintetiza corretamente um ponto essencial da microlição?",
      "options": [
        "Um SGSI é apenas um conjunto de ferramentas técnicas e dispensa governança, contexto, risco, auditoria e melhoria contínua.",
        "Gestão de riscos se resume a listar vulnerabilidades, sem considerar impacto, probabilidade, contexto ou tratamento.",
        "Continuidade de negócios e resposta a incidentes são processos idênticos e não precisam de planejamento específico.",
        "Privacidade é obtida exclusivamente por criptografia, sem necessidade de finalidade, minimização, governança ou avaliação de impacto.",
        "LGPD define agentes, bases, princípios, direitos e deveres de segurança."
      ],
      "correct": 4,
      "explanation": "Na microlição, a orientação-chave é: “LGPD define agentes, bases, princípios, direitos e deveres de segurança.”. O Marco Civil estabelece princípios, garantias, direitos e deveres para uso da internet; a LGPD regula tratamento de dados pessoais e deve ser estudada em texto consolidado; a Resolução Anatel 740 aprovou regulamento de segurança cibernética do setor de telecomunicações e sofreu alterações posteriores, inclusive pela Resolução 767/2024.",
      "wrong": [
        "Incorreta. A proposição “Um SGSI é apenas um conjunto de ferramentas técnicas e dispensa governança, contexto, risco, auditoria e melhoria contínua.” contraria ou desloca o conceito central cobrado nesta microlição. Na microlição, a orientação-chave é: “LGPD define agentes, bases, princípios, direitos e deveres de segurança.”. O Marco Civil estabelece princípios, garantias, direitos e deveres para uso da internet; a LGPD regula tratamento de dados pessoais e deve ser estudada em texto consolidado; a Resolução Anatel 740 aprovou regulamento de segurança cibernética do setor de telecomunicações e sofreu alterações posteriores, inclusive pela Resolução 767/2024.",
        "Incorreta. A proposição “Gestão de riscos se resume a listar vulnerabilidades, sem considerar impacto, probabilidade, contexto ou tratamento.” contraria ou desloca o conceito central cobrado nesta microlição. Na microlição, a orientação-chave é: “LGPD define agentes, bases, princípios, direitos e deveres de segurança.”. O Marco Civil estabelece princípios, garantias, direitos e deveres para uso da internet; a LGPD regula tratamento de dados pessoais e deve ser estudada em texto consolidado; a Resolução Anatel 740 aprovou regulamento de segurança cibernética do setor de telecomunicações e sofreu alterações posteriores, inclusive pela Resolução 767/2024.",
        "Incorreta. A proposição “Continuidade de negócios e resposta a incidentes são processos idênticos e não precisam de planejamento específico.” contraria ou desloca o conceito central cobrado nesta microlição. Na microlição, a orientação-chave é: “LGPD define agentes, bases, princípios, direitos e deveres de segurança.”. O Marco Civil estabelece princípios, garantias, direitos e deveres para uso da internet; a LGPD regula tratamento de dados pessoais e deve ser estudada em texto consolidado; a Resolução Anatel 740 aprovou regulamento de segurança cibernética do setor de telecomunicações e sofreu alterações posteriores, inclusive pela Resolução 767/2024.",
        "Incorreta. A proposição “Privacidade é obtida exclusivamente por criptografia, sem necessidade de finalidade, minimização, governança ou avaliação de impacto.” contraria ou desloca o conceito central cobrado nesta microlição. Na microlição, a orientação-chave é: “LGPD define agentes, bases, princípios, direitos e deveres de segurança.”. O Marco Civil estabelece princípios, garantias, direitos e deveres para uso da internet; a LGPD regula tratamento de dados pessoais e deve ser estudada em texto consolidado; a Resolução Anatel 740 aprovou regulamento de segurança cibernética do setor de telecomunicações e sofreu alterações posteriores, inclusive pela Resolução 767/2024.",
        "Correta. Na microlição, a orientação-chave é: “LGPD define agentes, bases, princípios, direitos e deveres de segurança.”. O Marco Civil estabelece princípios, garantias, direitos e deveres para uso da internet; a LGPD regula tratamento de dados pessoais e deve ser estudada em texto consolidado; a Resolução Anatel 740 aprovou regulamento de segurança cibernética do setor de telecomunicações e sofreu alterações posteriores, inclusive pela Resolução 767/2024."
      ],
      "source": "Questão autoral Versa · edital Transpetro 2026.4",
      "board": "CESGRANRIO — estilo de treino",
      "examYear": 2026,
      "authorialRevision": "v1.7.1",
      "feedbackVersion": "1.7.1"
    }
  ],
  "textBases": {
    "trc-tb-pt2023": {
      "title": "Texto-base — questões 1 a 10 — TRANSPETRO 2023.2",
      "text": "À moda brasileira\n\nEstou me vendo debaixo de uma árvore, lendo a pequena história da literatura brasileira.\n\nOlavo Bilac! – eu disse em voz alta e de repente parei quase num susto depois que li os primeiros versos do soneto à língua portuguesa: Última flor do Lácio, inculta e bela / És, a um tempo, esplendor e sepultura.\n\nFiquei pensando, mas o poeta disse sepultura?! O tal de Lácio eu não sabia onde ficava, mas de sepultura eu entendia bem, disso eu entendia, repensei baixando o olhar para a terra. Se escrevia (e já escrevia) pequenos contos nessa língua, quer dizer que era a sepultura que esperava por esses meus escritos?\n\nFui falar com meu pai. Comecei por aquelas minhas sondagens antes de chegar até onde queria, os tais rodeios que ele ia ouvindo com paciência enquanto enrolava o cigarro de palha, fumava nessa época esses cigarros. Comecei por perguntar se minha mãe e ele não tinham viajado para o exterior.\n\nMeu pai fixou em mim o olhar verde. Viagens, só pelo Brasil, meus avós é que tinham feito aquelas longas viagens de navio, Portugal, França, Itália... Não esquecer que a minha avó, Pedrina Perucchi, era italiana, ele acrescentou. Mas por que essa curiosidade?\n\nSentei-me ao lado dele, respirei fundo e comecei a gaguejar, é que seria tão bom se ambos tivessem nascido lá longe e assim eu estaria hoje escrevendo em italiano, italiano! – fiquei repetindo e abri o livro que trazia na mão: Olha aí, pai, o poeta escreveu com todas as letras, nossa língua é sepultura mesmo, tudo o que a gente fizer vai para debaixo da terra, desaparece!\n\nCalmamente ele pousou o cigarro no cinzeiro ao lado. Pegou os óculos. O soneto é muito bonito, disse me encarando com severidade. Feio é isso, filha, isso de querer renegar a própria língua. Se você chegar a escrever bem, não precisa ser em italiano ou espanhol ou alemão, você ficará na nossa língua mesmo, está me compreendendo? E as traduções? Renegar a língua é renegar o país, guarde isso nessa cabecinha. E depois (ele voltou a abrir o livro), olha que beleza o que o poeta escreveu em seguida, Amo-te assim, desconhecida e obscura, veja que confissão de amor ele fez à nossa língua! Tem mais, ele precisava da rima para sepultura e calhou tão bem essa obscura, entendeu agora? – acrescentou e levantou-se. Deu alguns passos e ficou olhando a borboleta que entrou na varanda: Já fez a sua lição de casa?\n\nFechei o livro e recuei. Sempre que meu pai queria mudar de assunto ele mudava de lugar: saía da poltrona e ia para a cadeira de vime. Saía da cadeira de vime e ia para a rede ou simplesmente começava a andar. Era o sinal, Não quero falar nisso, chega. Então a gente falava noutra coisa ou ficava quieta.\n\nTantos anos depois, quando me avisaram lá do pequeno hotel em Jacareí que ele tinha morrido, fiquei pensando nisso, ah! se quando a morte entrou, se nesse instante ele tivesse mudado de lugar. Mudar depressa de lugar e de assunto. Depressa, pai, saia da cama e fique na cadeira ou vá pra rua e feche a porta!\n\nTELLES, Lygia Fagundes. Durante aquele estranho chá: perdidos e achados. Fragmento adaptado pela banca."
    },
    "trc-tb-en2023": {
      "title": "Text base — questions 11 to 20 — TRANSPETRO 2023.2",
      "text": "How space technology is bringing green wins for transport\n\nSpace technology is developing fast, and, with every advance, it is becoming more accessible to industry. Today, satellite communications (satcoms) and space-based data are underpinning new ways of operating that boost both sustainability and profitability. Some projects are still in the planning stages, offering great promise for the future. However, others are already delivering practical results.\n\nThe benefits of space technology broadly fall into two categories: connectivity that can reach into situations where terrestrial technologies struggle to deliver and the deep, unique insights delivered by Earth Observation (EO) data. Both depend on access to satellite networks, particularly medium earth orbit (MEO) and low earth orbit (LEO) satellites that offer low-latency connectivity and frequently updated data. Right now, the satellite supplier market is booming, driving down the cost of access to satellites. Suppliers are increasingly tailoring their services to emerging customer needs and the potential applications are incredible – as a look at the transportation sector shows.\n\nSatellite technology is a critical part of revolutionizing connectivity on trains. The Satellites for Digitalization of Railways (SODOR) project will provide low latency, highly reliable connectivity that, combined with monitoring sensors, will mean near real-time data guides operational decisions. This insight will help trains run more efficiently with fewer delays for passengers. Launching this year, SODOR will help operators reduce emissions by using the network more efficiently, allowing preventative maintenance and extending the lifetime of some existing trains. It will also make rail travel more attractive and help shift more passengers from road to rail.\n\nSatellite data and communications will also play a fundamental role in shaping a sustainable future for road vehicles. Right now, the transport sector contributes around 14% of the UK’s greenhouse gas emissions, of which 91% is from road vehicles – and this needs to change.\n\nA future where Electric Vehicles (EV) dominate will need a smart infrastructure to monitor and control the electricity network, managing highly variable supply and demand, as well as a large network of EV charging points. EO data will be critical in future forecasting models for wind and solar production, to help manage a consistent flow of green energy.\n\nSatellite communications will also be pivotal. As more wind and solar installations join the electricity network – often in remote locations – satcoms will step in to deliver highly reliable connectivity where 4G struggles to reach. It will underpin a growing network of EV charging points, connecting each point to the internet for operational management purposes, for billing and access app functionality and for the users’ comfort, they may access the system wherever they are.\n\nSatellite technology will increasingly be a part of the vehicles themselves, particularly when automated driving becomes more mainstream. It will be essential for every vehicle to have continuous connectivity to support real-time software patches, map updates and inter-vehicle communications. Already, satellites provide regular software updates to vehicles and enhanced safety through an in-car emergency call service.\n\nAt our company, we have been deeply embedded in the space engineering for more than 40 years – and we continue to be involved with the state-of-the-art technologies and use cases. We have a strong track record of translating these advances into practical benefits for our customers that make sense on both a business and a sustainability level.\n\nSource indicated by the exam: CGI, adapted; retrieved April 25, 2023."
    }
  },
  "historicalProofs": [
    {
      "id": "transpetro2023",
      "name": "TRANSPETRO 2023.2 — Prova 5 — Segurança Cibernética e da Informação",
      "board": "CESGRANRIO",
      "year": 2023,
      "questions": 70,
      "durationSeconds": 16200,
      "note": "Caderno oficial de 2023.2 integrado integralmente: 10 Português + 10 Inglês + 50 Conhecimentos Específicos, com gabarito oficial."
    }
  ],
  "examInfo": {
    "publicNotice": "Edital nº 04 — TRANSPETRO/PSP/TERRA/NÍVEL SUPERIOR — 2026.4",
    "emphasis": "Ênfase 7 — Análise de Sistemas — Segurança Cibernética e da Informação",
    "registration": "12/08 a 14/09/2026",
    "examDate": "29/11/2026",
    "fee": "R$ 117,00",
    "specificQuestions": 50,
    "generalQuestions": 20,
    "portugueseQuestions": 10,
    "englishQuestions": 10,
    "minimumRule": "50% em Específicos + 50% em Gerais + nota diferente de zero em cada matéria de Gerais"
  },
  "videoCatalog": [
    {
      "id": "trc-v-pt-cesg-int",
      "discipline": "Português",
      "title": "Português CESGRANRIO — Interpretação e Compreensão Textual",
      "channel": "YouTube · preparação CESGRANRIO",
      "url": "https://www.youtube.com/watch?v=gpX1iFArbqU",
      "youtubeId": "gpX1iFArbqU",
      "level": "Básico",
      "why": "Teoria e aplicação diretamente no perfil de interpretação da banca.",
      "tags": [
        "Português",
        "CESGRANRIO",
        "interpretação"
      ],
      "type": "video",
      "curated": true,
      "reviewedAt": "13/08/2026"
    },
    {
      "id": "trc-v-pt-cesg-quest",
      "discipline": "Português",
      "title": "CESGRANRIO — correção de prova de Português",
      "channel": "Prof.ª Flávia Rita",
      "url": "https://www.youtube.com/watch?v=dvM6MSCZ4So",
      "youtubeId": "dvM6MSCZ4So",
      "level": "Intermediário",
      "why": "Treino por questões anteriores para observar padrões de cobrança da banca.",
      "tags": [
        "Português",
        "CESGRANRIO",
        "questões"
      ],
      "type": "video",
      "curated": true,
      "reviewedAt": "13/08/2026"
    },
    {
      "id": "trc-v-en-inst",
      "discipline": "Inglês",
      "title": "Inglês Instrumental — leitura orientada à prova",
      "channel": "Prof. João Paulo Valle",
      "url": "https://www.youtube.com/watch?v=d2eht56Wft8",
      "youtubeId": "d2eht56Wft8",
      "level": "Básico",
      "why": "Revisão de leitura instrumental e construção de sentido.",
      "tags": [
        "Inglês",
        "instrumental"
      ],
      "type": "video",
      "curated": true,
      "reviewedAt": "13/08/2026"
    },
    {
      "id": "trc-v-en-reading",
      "discipline": "Inglês",
      "title": "Leitura detalhada — Inglês Instrumental",
      "channel": "Inglês com Denilson Barbosa",
      "url": "https://www.youtube.com/watch?v=SnfjLeWTkPo",
      "youtubeId": "SnfjLeWTkPo",
      "level": "Básico",
      "why": "Estratégias para extrair sentido, referência e vocabulário pelo contexto.",
      "tags": [
        "Inglês",
        "reading"
      ],
      "type": "video",
      "curated": true,
      "reviewedAt": "13/08/2026"
    },
    {
      "id": "trc-v-mitre-tutorial",
      "discipline": "Segurança Ofensiva",
      "title": "Usando MITRE ATT&CK — tutorial completo",
      "channel": "CyberBessa",
      "url": "https://www.youtube.com/watch?v=1mf3De-UZkA",
      "youtubeId": "1mf3De-UZkA",
      "level": "Intermediário",
      "why": "Explica matrizes, táticas, técnicas, procedimentos e uso prático do ATT&CK.",
      "tags": [
        "MITRE ATT&CK",
        "TTP"
      ],
      "type": "video",
      "curated": true,
      "reviewedAt": "13/08/2026"
    },
    {
      "id": "trc-v-mitre-map",
      "discipline": "Segurança Ofensiva",
      "title": "Mapeando e respondendo a um ataque com MITRE ATT&CK",
      "channel": "CECyber — Centro de Excelência em Cibersegurança",
      "url": "https://www.youtube.com/watch?v=6byYuxOARFc",
      "youtubeId": "6byYuxOARFc",
      "level": "Intermediário",
      "why": "Conecta comportamento adversário, detecção e resposta.",
      "tags": [
        "MITRE ATT&CK",
        "resposta"
      ],
      "type": "video",
      "curated": true,
      "reviewedAt": "13/08/2026"
    },
    {
      "id": "trc-v-malware-gov1",
      "discipline": "Segurança Ofensiva",
      "title": "Códigos Maliciosos — Parte 1",
      "channel": "CEPS GOV.BR",
      "url": "https://www.youtube.com/watch?v=nqCS9t7XUQ8",
      "youtubeId": "nqCS9t7XUQ8",
      "level": "Básico",
      "why": "Material oficial do Governo Digital sobre famílias e comportamento de códigos maliciosos.",
      "tags": [
        "malware",
        "GOV.BR"
      ],
      "type": "video",
      "curated": true,
      "reviewedAt": "13/08/2026"
    },
    {
      "id": "trc-v-malware-gov2",
      "discipline": "Segurança Ofensiva",
      "title": "Códigos Maliciosos — Parte 2",
      "channel": "CEPS GOV.BR",
      "url": "https://www.youtube.com/watch?v=UcZanySPXpU",
      "youtubeId": "UcZanySPXpU",
      "level": "Básico",
      "why": "Complementa a classificação de malwares e práticas de proteção.",
      "tags": [
        "malware",
        "GOV.BR"
      ],
      "type": "video",
      "curated": true,
      "reviewedAt": "13/08/2026"
    },
    {
      "id": "trc-v-phishing-gov",
      "discipline": "Segurança Ofensiva",
      "title": "Phishing",
      "channel": "CEPS GOV.BR",
      "url": "https://www.youtube.com/watch?v=KejbBwBKTzs",
      "youtubeId": "KejbBwBKTzs",
      "level": "Básico",
      "why": "Vídeo oficial e objetivo para reconhecer phishing e seus sinais.",
      "tags": [
        "phishing",
        "engenharia social"
      ],
      "type": "video",
      "curated": true,
      "reviewedAt": "13/08/2026"
    },
    {
      "id": "trc-v-social-gov",
      "discipline": "Segurança Ofensiva",
      "title": "Golpes Cibernéticos — Engenharia Social",
      "channel": "CEPS GOV.BR",
      "url": "https://www.youtube.com/watch?v=v4_vcGqh8YE",
      "youtubeId": "v4_vcGqh8YE",
      "level": "Básico",
      "why": "Material oficial sobre manipulação, gatilhos e prevenção de engenharia social.",
      "tags": [
        "engenharia social",
        "GOV.BR"
      ],
      "type": "video",
      "curated": true,
      "reviewedAt": "13/08/2026"
    },
    {
      "id": "trc-v-ddos-gov",
      "discipline": "Segurança Ofensiva",
      "title": "Ataques de Negação de Serviços (DDoS)",
      "channel": "CEPS GOV.BR",
      "url": "https://www.youtube.com/watch?v=Hpt9sG_tqqs",
      "youtubeId": "Hpt9sG_tqqs",
      "level": "Básico",
      "why": "Revisão oficial sobre negação de serviço e indisponibilidade.",
      "tags": [
        "DDoS",
        "DoS"
      ],
      "type": "video",
      "curated": true,
      "reviewedAt": "13/08/2026"
    },
    {
      "id": "trc-v-john",
      "discipline": "Segurança Ofensiva",
      "title": "John the Ripper — auditoria de senhas na prática",
      "channel": "CyberBessa",
      "url": "https://www.youtube.com/watch?v=5DvC2YXJOMc",
      "youtubeId": "5DvC2YXJOMc",
      "level": "Intermediário",
      "why": "Ajuda a reconhecer a finalidade da ferramenta citada no edital, em contexto de laboratório autorizado.",
      "tags": [
        "John the Ripper",
        "senhas"
      ],
      "type": "video",
      "curated": true,
      "reviewedAt": "13/08/2026"
    },
    {
      "id": "trc-v-hashcat",
      "discipline": "Segurança Ofensiva",
      "title": "Cracking de senhas com Hashcat — Parte 1",
      "channel": "Papo Binário",
      "url": "https://www.youtube.com/watch?v=D7uEDQdDqy4",
      "youtubeId": "D7uEDQdDqy4",
      "level": "Intermediário",
      "why": "Diferencia hashes, wordlists e finalidade do Hashcat para prova.",
      "tags": [
        "Hashcat",
        "hash"
      ],
      "type": "video",
      "curated": true,
      "reviewedAt": "13/08/2026"
    },
    {
      "id": "trc-v-wifi",
      "discipline": "Segurança Ofensiva",
      "title": "Testando vulnerabilidades Wi-Fi com Aircrack-ng",
      "channel": "YouTube · laboratório de segurança",
      "url": "https://www.youtube.com/watch?v=KCpoIOw1voE",
      "youtubeId": "KCpoIOw1voE",
      "level": "Intermediário",
      "why": "Relaciona Aircrack-ng ao ecossistema de testes de redes sem fio em ambiente autorizado.",
      "tags": [
        "Wi-Fi",
        "Aircrack-ng"
      ],
      "type": "video",
      "curated": true,
      "reviewedAt": "13/08/2026"
    },
    {
      "id": "trc-v-owasp-2025",
      "discipline": "Segurança Defensiva",
      "title": "OWASP Top 10 2025 — falhas mais críticas",
      "channel": "Solyd Offensive Security",
      "url": "https://www.youtube.com/watch?v=WYSXGax0r5w",
      "youtubeId": "WYSXGax0r5w",
      "level": "Intermediário",
      "why": "Atualiza a visão das categorias OWASP sem apagar a versão histórica cobrada em 2023.",
      "tags": [
        "OWASP",
        "Top 10 2025"
      ],
      "type": "video",
      "curated": true,
      "reviewedAt": "13/08/2026"
    },
    {
      "id": "trc-v-owasp-webinar",
      "discipline": "Segurança Defensiva",
      "title": "OWASP Top 10 — dos conceitos à prática",
      "channel": "DARYUS Talks",
      "url": "https://www.youtube.com/watch?v=G81pYTQX7ck",
      "youtubeId": "G81pYTQX7ck",
      "level": "Intermediário",
      "why": "Visão consolidada de riscos de aplicações web e mitigação.",
      "tags": [
        "OWASP",
        "AppSec"
      ],
      "type": "video",
      "curated": true,
      "reviewedAt": "13/08/2026"
    },
    {
      "id": "trc-v-threatmodel",
      "discipline": "Segurança Defensiva",
      "title": "Modelagem de Ameaças — AppSec Starter",
      "channel": "Conviso",
      "url": "https://www.youtube.com/watch?v=UWDqnhJsafY",
      "youtubeId": "UWDqnhJsafY",
      "level": "Básico",
      "why": "Complementa raciocínio de ameaça, superfície e desenvolvimento seguro.",
      "tags": [
        "threat modeling",
        "AppSec"
      ],
      "type": "video",
      "curated": true,
      "reviewedAt": "13/08/2026"
    },
    {
      "id": "trc-v-zap",
      "discipline": "Segurança Defensiva",
      "title": "OWASP ZAP — detectando vulnerabilidades em aplicações web",
      "channel": "Canal .NET / Coding Night",
      "url": "https://www.youtube.com/watch?v=554d18eXtY8",
      "youtubeId": "554d18eXtY8",
      "level": "Intermediário",
      "why": "Demonstra ferramenta defensiva de apoio à identificação de falhas web.",
      "tags": [
        "OWASP ZAP",
        "vulnerabilidades"
      ],
      "type": "video",
      "curated": true,
      "reviewedAt": "13/08/2026"
    },
    {
      "id": "trc-v-firewall-gov",
      "discipline": "Segurança Defensiva",
      "title": "Firewall Pessoal",
      "channel": "CEPS GOV.BR",
      "url": "https://www.youtube.com/watch?v=SyIbVFHzwxs",
      "youtubeId": "SyIbVFHzwxs",
      "level": "Básico",
      "why": "Material oficial sobre filtragem e proteção no endpoint.",
      "tags": [
        "firewall",
        "endpoint"
      ],
      "type": "video",
      "curated": true,
      "reviewedAt": "13/08/2026"
    },
    {
      "id": "trc-v-vpn-gov",
      "discipline": "Segurança Defensiva",
      "title": "VPN — Ambientes Pessoais",
      "channel": "CEPS GOV.BR",
      "url": "https://www.youtube.com/watch?v=2qlMjLrlp2k",
      "youtubeId": "2qlMjLrlp2k",
      "level": "Básico",
      "why": "Revisão oficial de túnel protegido e uso de VPN.",
      "tags": [
        "VPN",
        "GOV.BR"
      ],
      "type": "video",
      "curated": true,
      "reviewedAt": "13/08/2026"
    },
    {
      "id": "trc-v-mfa-gov",
      "discipline": "Segurança Defensiva",
      "title": "Multifator de Autenticação (MFA)",
      "channel": "CEPS GOV.BR",
      "url": "https://www.youtube.com/watch?v=BtFAu_DRMLg",
      "youtubeId": "BtFAu_DRMLg",
      "level": "Básico",
      "why": "Explica a combinação de fatores de autenticação em fonte governamental.",
      "tags": [
        "MFA",
        "autenticação"
      ],
      "type": "video",
      "curated": true,
      "reviewedAt": "13/08/2026"
    },
    {
      "id": "trc-v-icp-gov",
      "discipline": "Segurança Defensiva",
      "title": "Infraestrutura de Chaves Públicas Brasileira (ICP-Brasil)",
      "channel": "CEPS GOV.BR",
      "url": "https://www.youtube.com/watch?v=2WqX6o-qvoI",
      "youtubeId": "2WqX6o-qvoI",
      "level": "Intermediário",
      "why": "Apoio audiovisual para certificados, autoridades e confiança no contexto brasileiro.",
      "tags": [
        "ICP-Brasil",
        "certificado digital"
      ],
      "type": "video",
      "curated": true,
      "reviewedAt": "13/08/2026"
    },
    {
      "id": "trc-v-access-gov",
      "discipline": "Segurança Defensiva",
      "title": "Controle de Acesso — Segurança Lógica",
      "channel": "CEPS GOV.BR",
      "url": "https://www.youtube.com/watch?v=O_2BQkIOJJE",
      "youtubeId": "O_2BQkIOJJE",
      "level": "Básico",
      "why": "Reforça autenticação, autorização e princípio de acesso controlado.",
      "tags": [
        "controle de acesso",
        "IAM"
      ],
      "type": "video",
      "curated": true,
      "reviewedAt": "13/08/2026"
    },
    {
      "id": "trc-v-linux",
      "discipline": "Segurança Defensiva",
      "title": "Linux — permissões em modo numérico (chmod)",
      "channel": "Bóson Treinamentos",
      "url": "https://www.youtube.com/watch?v=Wj2HTgwXp00",
      "youtubeId": "Wj2HTgwXp00",
      "level": "Básico",
      "why": "Treino direto para permissões rwx e notação octal, tema presente na prova histórica.",
      "tags": [
        "Linux",
        "chmod",
        "permissões"
      ],
      "type": "video",
      "curated": true,
      "reviewedAt": "13/08/2026"
    },
    {
      "id": "trc-v-bitlocker",
      "discipline": "Segurança Defensiva",
      "title": "Windows Server — criptografia com BitLocker",
      "channel": "Professor Ramos",
      "url": "https://www.youtube.com/watch?v=zuterq2j0zw",
      "youtubeId": "zuterq2j0zw",
      "level": "Intermediário",
      "why": "Reforça BitLocker e proteção de volume, conectando-se à questão histórica da CESGRANRIO.",
      "tags": [
        "BitLocker",
        "Windows"
      ],
      "type": "video",
      "curated": true,
      "reviewedAt": "13/08/2026"
    },
    {
      "id": "trc-v-nist-ot",
      "discipline": "Segurança Defensiva",
      "title": "NIST SP 800-82 Rev. 3 — OT/ICS Security",
      "channel": "YouTube · OT Cybersecurity",
      "url": "https://www.youtube.com/watch?v=7ts3EGTCJcQ",
      "youtubeId": "7ts3EGTCJcQ",
      "level": "Avançado",
      "why": "Explica a revisão 3 do guia de segurança de tecnologia operacional citado no edital.",
      "tags": [
        "NIST SP 800-82",
        "OT",
        "ICS"
      ],
      "type": "video",
      "curated": true,
      "reviewedAt": "13/08/2026"
    },
    {
      "id": "trc-v-iec62443",
      "discipline": "Segurança Defensiva",
      "title": "Aplicação da IEC 62443 em sistemas de supervisão e controle",
      "channel": "Elipse Software",
      "url": "https://www.youtube.com/watch?v=CStw6jL8jBA",
      "youtubeId": "CStw6jL8jBA",
      "level": "Avançado",
      "why": "Webinar em português sobre a série IEC 62443 no contexto industrial.",
      "tags": [
        "IEC 62443",
        "SCADA",
        "OT"
      ],
      "type": "video",
      "curated": true,
      "reviewedAt": "13/08/2026"
    },
    {
      "id": "trc-v-stuxnet",
      "discipline": "Segurança Defensiva",
      "title": "Stuxnet — a primeira arma cibernética",
      "channel": "Podcast / cibersegurança",
      "url": "https://www.youtube.com/watch?v=ehSlEtRCG24",
      "youtubeId": "ehSlEtRCG24",
      "level": "Intermediário",
      "why": "Contextualiza Stuxnet, SCADA e ameaças a infraestruturas industriais.",
      "tags": [
        "Stuxnet",
        "ICS"
      ],
      "type": "video",
      "curated": true,
      "reviewedAt": "13/08/2026"
    },
    {
      "id": "trc-v-incident",
      "discipline": "Segurança Defensiva",
      "title": "Resposta a Incidentes — papel do CSIRT e do DFIR",
      "channel": "Segurança Descomplicada",
      "url": "https://www.youtube.com/watch?v=9boBUPsvkUk",
      "youtubeId": "9boBUPsvkUk",
      "level": "Intermediário",
      "why": "Conecta preparação, resposta, CSIRT e forense digital.",
      "tags": [
        "CSIRT",
        "DFIR",
        "incidentes"
      ],
      "type": "video",
      "curated": true,
      "reviewedAt": "13/08/2026"
    },
    {
      "id": "trc-v-forensic-custody",
      "discipline": "Segurança Defensiva",
      "title": "Cadeia de Custódia em Forense Digital",
      "channel": "Academia de Forense Digital / Marcelo Nagy",
      "url": "https://www.youtube.com/watch?v=NDeXyJBnrFU",
      "youtubeId": "NDeXyJBnrFU",
      "level": "Intermediário",
      "why": "Reforça preservação, rastreabilidade e confiabilidade de evidências.",
      "tags": [
        "forense digital",
        "cadeia de custódia"
      ],
      "type": "video",
      "curated": true,
      "reviewedAt": "13/08/2026"
    },
    {
      "id": "trc-v-osint",
      "discipline": "Segurança Defensiva",
      "title": "OSINT 2025 — visão completa",
      "channel": "HackStation",
      "url": "https://www.youtube.com/watch?v=uuh5ActJxRA",
      "youtubeId": "uuh5ActJxRA",
      "level": "Intermediário",
      "why": "Material amplo sobre inteligência de fontes abertas aplicada à investigação.",
      "tags": [
        "OSINT",
        "investigação"
      ],
      "type": "video",
      "curated": true,
      "reviewedAt": "13/08/2026"
    },
    {
      "id": "trc-v-iso27001",
      "discipline": "Compliance e Privacidade",
      "title": "ISO/IEC 27001:2022 Foundation — cláusulas da norma",
      "channel": "TI Exames / Denny Roger",
      "url": "https://www.youtube.com/watch?v=uaEJyiDZ3jY",
      "youtubeId": "uaEJyiDZ3jY",
      "level": "Intermediário",
      "why": "Visão estruturada das cláusulas do SGSI na edição 2022.",
      "tags": [
        "ISO 27001:2022",
        "SGSI"
      ],
      "type": "video",
      "curated": true,
      "reviewedAt": "13/08/2026"
    },
    {
      "id": "trc-v-iso27001-concurso",
      "discipline": "Compliance e Privacidade",
      "title": "ISO 27001 para concurso de Segurança Cibernética",
      "channel": "YouTube · preparação para concursos",
      "url": "https://www.youtube.com/watch?v=6Q5WMTgwEvI",
      "youtubeId": "6Q5WMTgwEvI",
      "level": "Intermediário",
      "why": "Aplica requisitos de SGSI ao raciocínio de questões de concurso.",
      "tags": [
        "ISO 27001",
        "concursos"
      ],
      "type": "video",
      "curated": true,
      "reviewedAt": "13/08/2026"
    },
    {
      "id": "trc-v-nist-csf",
      "discipline": "Compliance e Privacidade",
      "title": "NIST Cybersecurity Framework 2.0 — o que mudou e como aplicar",
      "channel": "Blue Team Academy / Segurança Descomplicada",
      "url": "https://www.youtube.com/watch?v=_jt_Cp1f49A",
      "youtubeId": "_jt_Cp1f49A",
      "level": "Intermediário",
      "why": "Detalha Govern, Identify, Protect, Detect, Respond e Recover no CSF 2.0.",
      "tags": [
        "NIST CSF 2.0",
        "governança"
      ],
      "type": "video",
      "curated": true,
      "reviewedAt": "13/08/2026"
    },
    {
      "id": "trc-v-cis",
      "discipline": "Compliance e Privacidade",
      "title": "CIS Controls v8.1 Foundation — Aula 1",
      "channel": "TI Exames / Denny Roger",
      "url": "https://www.youtube.com/watch?v=jmTZokypZ1w",
      "youtubeId": "jmTZokypZ1w",
      "level": "Intermediário",
      "why": "Introdução organizada ao framework CIS Controls v8.1 exigido no edital.",
      "tags": [
        "CIS Controls 8.1"
      ],
      "type": "video",
      "curated": true,
      "reviewedAt": "13/08/2026"
    },
    {
      "id": "trc-v-cis-immersion",
      "discipline": "Compliance e Privacidade",
      "title": "Imersão CIS Controls v8.1",
      "channel": "Manual do CISO / Denny Roger",
      "url": "https://www.youtube.com/watch?v=tMvzluVr928",
      "youtubeId": "tMvzluVr928",
      "level": "Intermediário",
      "why": "Aprofunda priorização, implementação e leitura prática dos 18 controles.",
      "tags": [
        "CIS Controls 8.1",
        "implementação"
      ],
      "type": "video",
      "curated": true,
      "reviewedAt": "13/08/2026"
    },
    {
      "id": "trc-v-lgpd",
      "discipline": "Compliance e Privacidade",
      "title": "LGPD — conceitos e fundamentos",
      "channel": "YouTube · preparação jurídica",
      "url": "https://www.youtube.com/watch?v=M-ETuNbmJN4",
      "youtubeId": "M-ETuNbmJN4",
      "level": "Básico",
      "why": "Revisão de conceitos centrais da LGPD em formato de aula.",
      "tags": [
        "LGPD",
        "privacidade"
      ],
      "type": "video",
      "curated": true,
      "reviewedAt": "13/08/2026"
    },
    {
      "id": "trc-v-lgpd-inc",
      "discipline": "Compliance e Privacidade",
      "title": "LGPD — Comunicação de Incidente de Segurança",
      "channel": "CEPS GOV.BR",
      "url": "https://www.youtube.com/watch?v=wReFFgkzerY",
      "youtubeId": "wReFFgkzerY",
      "level": "Intermediário",
      "why": "Material oficial sobre comunicação de incidentes que envolvem dados pessoais.",
      "tags": [
        "LGPD",
        "incidente"
      ],
      "type": "video",
      "curated": true,
      "reviewedAt": "13/08/2026"
    },
    {
      "id": "trc-v-iso-general",
      "discipline": "Compliance e Privacidade",
      "title": "Norma ISO/IEC 27001 — super aula",
      "channel": "YouTube · Gestão e Segurança",
      "url": "https://www.youtube.com/watch?v=ZSTzq5PI5ZQ",
      "youtubeId": "ZSTzq5PI5ZQ",
      "level": "Intermediário",
      "why": "Revisão complementar sobre requisitos, implementação e SGSI.",
      "tags": [
        "ISO 27001",
        "SGSI"
      ],
      "type": "video",
      "curated": true,
      "reviewedAt": "13/08/2026"
    },
    {
      "id": "trc-v-powershell",
      "discipline": "Segurança Defensiva",
      "title": "PowerShell — Primeiros Passos",
      "channel": "Professor Ramos",
      "url": "https://www.youtube.com/watch?v=xOdfGoJfr9Q",
      "youtubeId": "xOdfGoJfr9Q",
      "level": "Básico",
      "why": "Apoia leitura de comandos administrativos do Windows presentes em questões históricas.",
      "tags": [
        "PowerShell",
        "Windows"
      ],
      "type": "video",
      "curated": true,
      "reviewedAt": "13/08/2026"
    }
  ],
  "videoReviewDate": "13/08/2026",
  "diagnosticIds": [
    "trc-q001",
    "trc-q001b",
    "trc-q002",
    "trc-q002b",
    "trc-q007",
    "trc-q007b",
    "trc-q008",
    "trc-q008b",
    "trc-q012",
    "trc-q013",
    "trc-q014",
    "trc-q015",
    "trc-q016",
    "trc-q017",
    "trc-q018",
    "trc-q019",
    "trc-q032",
    "trc-q033",
    "trc-q034",
    "trc-q035",
    "trc-q036",
    "trc-q037",
    "trc-q038",
    "trc-q039",
    "trc-q052",
    "trc-q053",
    "trc-q054",
    "trc-q055",
    "trc-q056",
    "trc-q057"
  ],
  "resources": [
    {
      "title": "Edital nº 04 — Transpetro/PSP/Terra/Nível Superior 2026.4",
      "type": "Edital-base da trilha",
      "description": "Fonte primária fornecida pelo usuário: estrutura da seleção, requisitos, cronograma e conteúdo programático da Ênfase 7."
    },
    {
      "title": "Prova 5 — Segurança Cibernética e da Informação — 2023.2",
      "type": "Prova histórica oficial fornecida",
      "description": "50 questões específicas CESGRANRIO integradas ao banco histórico com ordem e alternativas preservadas."
    },
    {
      "title": "Gabarito oficial Transpetro 2023.2 — Prova 5",
      "type": "Gabarito histórico fornecido",
      "description": "Base usada para validar as respostas das 50 questões específicas históricas."
    },
    {
      "title": "NIST Cybersecurity Framework 2.0",
      "type": "Referência oficial NIST",
      "description": "Framework de gestão de risco cibernético com as funções Govern, Identify, Protect, Detect, Respond e Recover.",
      "url": "https://www.nist.gov/cyberframework"
    },
    {
      "title": "NIST SP 800-82 Rev. 3 — Guide to Operational Technology Security",
      "type": "Referência oficial NIST",
      "description": "Guia para segurança de OT considerando requisitos de desempenho, confiabilidade e safety.",
      "url": "https://csrc.nist.gov/pubs/sp/800/82/r3/final"
    },
    {
      "title": "MITRE ATT&CK",
      "type": "Base oficial MITRE",
      "description": "Matrizes, táticas, técnicas, sub-técnicas, mitigations e referências de comportamento adversário.",
      "url": "https://attack.mitre.org/"
    },
    {
      "title": "MITRE CAPEC",
      "type": "Base oficial MITRE",
      "description": "Catálogo de padrões de ataque cibernético e mecanismos relacionados.",
      "url": "https://capec.mitre.org/"
    },
    {
      "title": "OWASP Top 10",
      "type": "Referência oficial OWASP",
      "description": "Página canônica com a versão atual e versões anteriores do documento de conscientização sobre riscos de aplicações web.",
      "url": "https://owasp.org/www-project-top-ten/"
    },
    {
      "title": "CIS Critical Security Controls v8.1",
      "type": "Referência oficial CIS",
      "description": "Conjunto priorizado de salvaguardas e Implementation Groups previstos no edital.",
      "url": "https://www.cisecurity.org/controls/v8-1"
    },
    {
      "title": "LGPD — Lei nº 13.709/2018, texto compilado",
      "type": "Legislação oficial",
      "description": "Texto consolidado da Lei Geral de Proteção de Dados Pessoais, incluindo alterações.",
      "url": "https://www.planalto.gov.br/ccivil_03/_ato2015-2018/2018/lei/L13709compilado.htm"
    },
    {
      "title": "Marco Civil da Internet — Lei nº 12.965/2014",
      "type": "Legislação oficial",
      "description": "Princípios, garantias, direitos e deveres para uso da internet no Brasil.",
      "url": "https://www.planalto.gov.br/ccivil_03/_ato2011-2014/2014/lei/l12965.htm"
    },
    {
      "title": "Resolução Anatel nº 740/2020",
      "type": "Regulamentação oficial",
      "description": "Regulamento de Segurança Cibernética Aplicada ao Setor de Telecomunicações.",
      "url": "https://informacoes.anatel.gov.br/legislacao/resolucoes/2020/1497-resolucao-740"
    }
  ],
  "stages": [
    {
      "title": "1. Inscrição",
      "text": "12/08 a 14/09/2026 pela Fundação Cesgranrio. Taxa informada no edital: R$ 117,00; hipóteses de isenção seguem o item 5.7."
    },
    {
      "title": "2. Provas objetivas",
      "text": "29/11/2026. Para a Ênfase 7: 50 questões específicas + 20 gerais (10 Português + 10 Inglês), total de 70, com duração de 4h30."
    },
    {
      "title": "3. Critérios mínimos",
      "text": "Aproveitamento mínimo de 50% em Conhecimentos Específicos e 50% em Conhecimentos Gerais, sem nota zero em Português ou Inglês."
    },
    {
      "title": "4. Recursos e resultado",
      "text": "Gabaritos previstos para 30/11/2026 e recursos de questões/gabaritos em 30/11 e 01/12/2026, conforme cronograma do edital."
    }
  ],
  "references": [
    "Edital nº 04 — TRANSPETRO/PSP/TERRA/NÍVEL SUPERIOR — 2026.4, fornecido pelo usuário.",
    "Prova oficial TRANSPETRO 2023.2 — Prova 5 — Análise de Sistemas — Segurança Cibernética e da Informação, fornecida pelo usuário.",
    "Gabarito oficial das Provas Terra — Nível Superior — 2023.2, fornecido pelo usuário.",
    "NIST CSF 2.0 e NIST SP 800-82 Rev. 3 — fontes primárias de atualização técnica.",
    "MITRE ATT&CK/CAPEC, OWASP Top 10 e CIS Controls v8.1 — páginas oficiais de referência.",
    "Planalto e Anatel — textos oficiais para LGPD, Marco Civil e Resolução nº 740/2020 e alterações."
  ],
  "coverage": {
    "label": "Edital 2026.4 integralmente mapeado · histórico 2023 integrado",
    "historicalExamAvailable": true,
    "historicalQuestionsIntegrated": 70,
    "authorialQuestions": 75,
    "updated": "13/08/2026",
    "explicitItemsReviewed": true,
    "officialNorms": [
      "ABNT NBR ISO/IEC 27001:2022 (Versão Corrigida: 2023)",
      "ABNT NBR ISO/IEC 27002:2022",
      "ABNT NBR ISO/IEC 27005:2023",
      "ABNT ISO/IEC 27035-1:2023",
      "ABNT NBR ISO 22301:2020",
      "ABNT NBR ISO 22313:2020",
      "ABNT NBR ISO/IEC 29100:2024",
      "ABNT NBR ISO/IEC 29134:2024",
      "ABNT NBR ISO/IEC 27701:2019 (Versão corrigida: 2020)",
      "The NIST Cybersecurity Framework (CSF) 2.0",
      "CIS Critical Security Controls Version 8.1"
    ]
  },
  "contentVersion": "1.7.1",
  "videoCuration": {
    "version": "1.7.1",
    "directVideos": 40,
    "searchPages": 0,
    "criteria": "Links diretos e tematicamente conferidos; preferência por fontes governamentais, comunidades técnicas, professores e canais de cibersegurança.",
    "note": "Videoaulas são apoio de estudo; para normas e leis, prevalece a redação oficial vigente e o conteúdo programático do edital."
  }
};
  window.TRANSPETRO_CYBER_DATA = TRANSPETRO_CYBER_DATA;
})();
