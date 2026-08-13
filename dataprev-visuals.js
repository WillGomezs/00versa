/* Versa DATAPREV — demonstrativos visuais pedagógicos v1.8.1. */
(() => {
  "use strict";
  const visuals = {
  "red-001": {
    "type": "flow",
    "title": "Da máquina ao servidor",
    "caption": "Uma comunicação nasce no dispositivo, cruza a rede e chega ao serviço.",
    "items": [
      {
        "icon": "PC",
        "label": "Cliente",
        "sub": "gera a requisição"
      },
      {
        "icon": "RT",
        "label": "Roteador",
        "sub": "encaminha o tráfego"
      },
      {
        "icon": "SRV",
        "label": "Servidor",
        "sub": "processa e responde"
      }
    ],
    "steps": [
      "O cliente cria os dados.",
      "O equipamento intermediário escolhe o caminho.",
      "O servidor recebe e devolve a resposta."
    ]
  },
  "red-002": {
    "type": "compare",
    "title": "LAN, WLAN e WAN em uma única visão",
    "caption": "A diferença principal está na abrangência e no meio de acesso.",
    "items": [
      {
        "title": "LAN",
        "icon": "▦",
        "items": [
          "Área local",
          "Normalmente cabeada",
          "Baixa latência"
        ]
      },
      {
        "title": "WLAN",
        "icon": "⌁",
        "items": [
          "Área local",
          "Acesso por rádio",
          "Mobilidade"
        ]
      },
      {
        "title": "WAN",
        "icon": "↔",
        "items": [
          "Longas distâncias",
          "Interliga LANs",
          "Operadoras/links"
        ]
      }
    ],
    "steps": [
      "LAN: pense em um escritório.",
      "WLAN: a LAN continua local, mas sem fio.",
      "WAN: conecta redes geograficamente separadas."
    ]
  },
  "red-003": {
    "type": "topology",
    "title": "Quatro topologias, quatro padrões",
    "caption": "Observe onde existe um centro e quantos caminhos alternativos cada desenho oferece.",
    "items": [
      {
        "title": "Estrela",
        "kind": "star",
        "note": "centro único"
      },
      {
        "title": "Barramento",
        "kind": "bus",
        "note": "meio compartilhado"
      },
      {
        "title": "Anel",
        "kind": "ring",
        "note": "circuito fechado"
      },
      {
        "title": "Malha",
        "kind": "mesh",
        "note": "múltiplos caminhos"
      }
    ],
    "steps": [
      "Estrela concentra as conexões.",
      "Barramento compartilha o mesmo tronco.",
      "Malha aumenta redundância."
    ]
  },
  "red-004": {
    "type": "compare",
    "title": "O meio muda o comportamento da rede",
    "caption": "Compare alcance, interferência e mobilidade.",
    "items": [
      {
        "title": "Cobre",
        "icon": "≋",
        "items": [
          "Sinal elétrico",
          "Custo menor",
          "Sujeito a EMI"
        ]
      },
      {
        "title": "Fibra",
        "icon": "✦",
        "items": [
          "Luz",
          "Grande alcance",
          "Imune a EMI"
        ]
      },
      {
        "title": "Rádio",
        "icon": ")))",
        "items": [
          "Sem cabo",
          "Mobilidade",
          "Sujeito a interferência"
        ]
      }
    ],
    "steps": [
      "Cobre é comum em LANs.",
      "Fibra favorece distância e imunidade eletromagnética.",
      "Rádio troca cabo por mobilidade."
    ]
  },
  "red-005": {
    "type": "flow",
    "title": "Encapsulamento: o dado ganha “envelopes”",
    "caption": "Cada camada acrescenta informações de controle antes da transmissão.",
    "items": [
      {
        "icon": "APP",
        "label": "Dados",
        "sub": "conteúdo da aplicação"
      },
      {
        "icon": "SEG",
        "label": "Segmento",
        "sub": "transporte"
      },
      {
        "icon": "IP",
        "label": "Pacote",
        "sub": "rede"
      },
      {
        "icon": "ETH",
        "label": "Quadro",
        "sub": "enlace"
      },
      {
        "icon": "01",
        "label": "Bits",
        "sub": "meio físico"
      }
    ],
    "steps": [
      "A aplicação produz os dados.",
      "Cabeçalhos são acrescentados camada a camada.",
      "No destino, o processo é desfeito."
    ]
  },
  "red-006": {
    "type": "flow",
    "title": "O repetidor recompõe o sinal",
    "caption": "Ele não decide destino: apenas recebe, regenera e retransmite.",
    "items": [
      {
        "icon": "≈",
        "label": "Sinal fraco",
        "sub": "degradado pelo meio"
      },
      {
        "icon": "REP",
        "label": "Repetidor",
        "sub": "regenera"
      },
      {
        "icon": "∿",
        "label": "Sinal renovado",
        "sub": "segue adiante"
      }
    ],
    "steps": [
      "O sinal chega enfraquecido.",
      "O repetidor atua na camada física.",
      "O sinal é retransmitido sem analisar IP ou MAC."
    ]
  },
  "red-007": {
    "type": "hub",
    "title": "Hub: uma entrada, várias cópias",
    "caption": "O hub replica o sinal para todas as portas, mesmo quando só um destino interessa.",
    "items": [
      {
        "icon": "PC1",
        "label": "Origem"
      },
      {
        "icon": "HUB",
        "label": "Hub"
      },
      {
        "icon": "PC2",
        "label": "Recebe cópia"
      },
      {
        "icon": "PC3",
        "label": "Recebe cópia"
      },
      {
        "icon": "PC4",
        "label": "Recebe cópia"
      }
    ],
    "steps": [
      "A origem envia um sinal.",
      "O hub não aprende endereços MAC.",
      "Todas as outras portas recebem a transmissão."
    ]
  },
  "red-008": {
    "type": "switch",
    "title": "Switch: encaminhamento seletivo",
    "caption": "A tabela MAC permite enviar o quadro à porta correta quando o destino já foi aprendido.",
    "items": [
      {
        "icon": "PC",
        "label": "Origem"
      },
      {
        "icon": "SW",
        "label": "Switch",
        "sub": "consulta tabela MAC"
      },
      {
        "icon": "SRV",
        "label": "Destino certo"
      },
      {
        "icon": "X",
        "label": "Outras portas",
        "sub": "não recebem unicast conhecido"
      }
    ],
    "steps": [
      "O switch aprende MAC por porta.",
      "Consulta a tabela para o destino.",
      "Encaminha somente onde precisa."
    ]
  },
  "red-009": {
    "type": "flow",
    "title": "Roteamento entre redes",
    "caption": "O roteador olha o endereço IP de destino e escolhe o próximo salto.",
    "items": [
      {
        "icon": "LAN A",
        "label": "192.168.10.0/24"
      },
      {
        "icon": "R1",
        "label": "Roteador",
        "sub": "tabela de rotas"
      },
      {
        "icon": "WAN",
        "label": "Próximo salto"
      },
      {
        "icon": "LAN B",
        "label": "10.0.0.0/24"
      }
    ],
    "steps": [
      "O pacote sai da rede de origem.",
      "O roteador compara o IP com suas rotas.",
      "O pacote segue até a rede de destino."
    ]
  },
  "red-010": {
    "type": "ap",
    "title": "Access Point: ponte entre rádio e rede cabeada",
    "caption": "O AP integra estações Wi‑Fi ao sistema de distribuição.",
    "items": [
      {
        "icon": "TEL",
        "label": "Celular"
      },
      {
        "icon": "NB",
        "label": "Notebook"
      },
      {
        "icon": "AP",
        "label": "Access Point"
      },
      {
        "icon": "SW",
        "label": "Switch/LAN"
      }
    ],
    "steps": [
      "As estações usam rádio.",
      "O AP organiza o BSS e conecta ao meio de distribuição.",
      "A partir dali, o tráfego entra na LAN."
    ]
  },
  "red-011": {
    "type": "compare",
    "title": "VLAN separa logicamente; cabeamento organiza fisicamente",
    "caption": "Dois mecanismos diferentes podem coexistir no mesmo switch e no mesmo rack.",
    "items": [
      {
        "title": "VLAN 10",
        "icon": "10",
        "items": [
          "Segmento lógico",
          "Broadcast separado",
          "Portas atribuídas"
        ]
      },
      {
        "title": "VLAN 20",
        "icon": "20",
        "items": [
          "Outro segmento lógico",
          "Política distinta",
          "Mesmo equipamento físico"
        ]
      },
      {
        "title": "Cabeamento",
        "icon": "▥",
        "items": [
          "Patch panel",
          "Tomadas e racks",
          "Organização física"
        ]
      }
    ],
    "steps": [
      "VLAN cria separação lógica.",
      "Trunk pode transportar várias VLANs.",
      "Cabeamento estruturado padroniza a infraestrutura física."
    ]
  },
  "red-012": {
    "type": "stack",
    "title": "Modelo OSI: sete camadas empilhadas",
    "caption": "Cada camada oferece serviços para a camada superior e usa a inferior.",
    "items": [
      {
        "label": "7 · Aplicação",
        "sub": "serviços ao usuário"
      },
      {
        "label": "6 · Apresentação",
        "sub": "formato e transformação"
      },
      {
        "label": "5 · Sessão",
        "sub": "diálogo"
      },
      {
        "label": "4 · Transporte",
        "sub": "fim a fim"
      },
      {
        "label": "3 · Rede",
        "sub": "roteamento"
      },
      {
        "label": "2 · Enlace",
        "sub": "quadros e MAC"
      },
      {
        "label": "1 · Física",
        "sub": "bits e sinais"
      }
    ],
    "steps": [
      "Comece de cima: serviços de aplicação.",
      "No meio: transporte e rede organizam a entrega.",
      "Na base: enlace e física levam quadros e bits."
    ]
  },
  "red-013": {
    "type": "flow",
    "title": "Camada física: bits viram sinais",
    "caption": "A física define como 0 e 1 são representados e transportados no meio.",
    "items": [
      {
        "icon": "01",
        "label": "Bits"
      },
      {
        "icon": "PHY",
        "label": "Codificação física"
      },
      {
        "icon": "∿",
        "label": "Sinal",
        "sub": "elétrico, óptico ou rádio"
      }
    ],
    "steps": [
      "Recebe uma sequência de bits.",
      "Transforma bits em sinal conforme o meio.",
      "Não interpreta endereços de rede."
    ]
  },
  "red-014": {
    "type": "packet",
    "title": "Quadro de enlace",
    "caption": "O quadro envolve o pacote com endereços locais e verificação.",
    "items": [
      {
        "label": "MAC destino",
        "tone": "accent"
      },
      {
        "label": "MAC origem"
      },
      {
        "label": "Tipo"
      },
      {
        "label": "Dados (pacote IP)",
        "wide": true
      },
      {
        "label": "FCS",
        "tone": "accent"
      }
    ],
    "steps": [
      "MAC identifica interfaces no enlace local.",
      "O campo de dados carrega o pacote da camada de rede.",
      "FCS auxilia a detectar erros no quadro."
    ]
  },
  "red-015": {
    "type": "flow",
    "title": "Camada de rede: caminho lógico por IP",
    "caption": "Pacotes podem atravessar vários roteadores até a rede de destino.",
    "items": [
      {
        "icon": "IP A",
        "label": "Origem"
      },
      {
        "icon": "R1",
        "label": "Roteador"
      },
      {
        "icon": "R2",
        "label": "Roteador"
      },
      {
        "icon": "IP B",
        "label": "Destino"
      }
    ],
    "steps": [
      "O endereço IP indica origem e destino lógicos.",
      "Cada roteador decide o próximo salto.",
      "A camada de rede não depende de um único enlace físico."
    ]
  },
  "red-016": {
    "type": "compare",
    "title": "Transporte: confiabilidade ou rapidez",
    "caption": "TCP e UDP atendem necessidades diferentes.",
    "items": [
      {
        "title": "TCP",
        "icon": "✓",
        "items": [
          "Orientado à conexão",
          "Confirma entrega",
          "Ordena e retransmite"
        ]
      },
      {
        "title": "UDP",
        "icon": "⚡",
        "items": [
          "Sem conexão",
          "Baixo overhead",
          "Não confirma entrega"
        ]
      }
    ],
    "steps": [
      "TCP prioriza confiabilidade.",
      "UDP reduz mecanismos e latência.",
      "A aplicação escolhe conforme a necessidade."
    ]
  },
  "red-017": {
    "type": "timeline",
    "title": "Sessão: abrir, manter e encerrar diálogo",
    "caption": "Pense na camada de sessão como controle da conversa entre aplicações.",
    "items": [
      {
        "label": "Estabelecer",
        "sub": "iniciar diálogo"
      },
      {
        "label": "Manter",
        "sub": "sincronizar e controlar"
      },
      {
        "label": "Encerrar",
        "sub": "finalizar a sessão"
      }
    ],
    "steps": [
      "Primeiro a sessão é estabelecida.",
      "Durante a troca, o diálogo é controlado.",
      "Ao final, recursos da sessão são liberados."
    ]
  },
  "red-018": {
    "type": "flow",
    "title": "Apresentação: transformar antes de entregar",
    "caption": "Formato, compressão e criptografia tornam os dados utilizáveis pela aplicação.",
    "items": [
      {
        "icon": "TXT",
        "label": "Dados"
      },
      {
        "icon": "ENC",
        "label": "Codificar"
      },
      {
        "icon": "ZIP",
        "label": "Comprimir"
      },
      {
        "icon": "🔒",
        "label": "Cifrar"
      },
      {
        "icon": "APP",
        "label": "Formato utilizável"
      }
    ],
    "steps": [
      "Representação resolve diferenças de formato.",
      "Compressão reduz tamanho quando aplicável.",
      "Criptografia protege o conteúdo."
    ]
  },
  "red-019": {
    "type": "grid",
    "title": "Aplicação: serviços que o usuário percebe",
    "caption": "Protocolos da camada de aplicação resolvem tarefas concretas.",
    "items": [
      {
        "title": "HTTP",
        "icon": "WEB",
        "note": "páginas e APIs"
      },
      {
        "title": "DNS",
        "icon": "DNS",
        "note": "nomes → IP"
      },
      {
        "title": "SMTP",
        "icon": "MAIL",
        "note": "envio de e-mail"
      },
      {
        "title": "SSH",
        "icon": "SSH",
        "note": "acesso remoto seguro"
      }
    ],
    "steps": [
      "A camada de aplicação reúne protocolos próximos ao software do usuário.",
      "Cada protocolo resolve um serviço específico.",
      "Eles usam as camadas inferiores para transportar os dados."
    ]
  },
  "red-020": {
    "type": "stack",
    "title": "TCP/IP: quatro camadas práticas",
    "caption": "A arquitetura TCP/IP agrupa funções do OSI em quatro níveis.",
    "items": [
      {
        "label": "Aplicação",
        "sub": "HTTP, DNS, SMTP, SSH"
      },
      {
        "label": "Transporte",
        "sub": "TCP, UDP"
      },
      {
        "label": "Internet",
        "sub": "IP, ICMP"
      },
      {
        "label": "Acesso à rede",
        "sub": "Ethernet, Wi‑Fi"
      }
    ],
    "steps": [
      "Aplicação agrega funções das camadas superiores do OSI.",
      "Transporte mantém o papel fim a fim.",
      "Internet e acesso cuidam de IP e do enlace físico."
    ]
  },
  "red-021": {
    "type": "mapping",
    "title": "OSI ↔ TCP/IP",
    "caption": "As arquiteturas não têm o mesmo número de camadas, mas suas funções podem ser relacionadas.",
    "items": [
      {
        "left": "7 Aplicação",
        "right": "Aplicação"
      },
      {
        "left": "6 Apresentação",
        "right": "Aplicação"
      },
      {
        "left": "5 Sessão",
        "right": "Aplicação"
      },
      {
        "left": "4 Transporte",
        "right": "Transporte"
      },
      {
        "left": "3 Rede",
        "right": "Internet"
      },
      {
        "left": "2 Enlace",
        "right": "Acesso à rede"
      },
      {
        "left": "1 Física",
        "right": "Acesso à rede"
      }
    ],
    "steps": [
      "Três camadas superiores do OSI convergem em Aplicação TCP/IP.",
      "Transporte e Rede têm correspondências diretas.",
      "Enlace + Física convergem em Acesso à rede."
    ]
  },
  "red-022": {
    "type": "address",
    "title": "IPv4 em quatro octetos",
    "caption": "Cada octeto tem 8 bits; juntos formam 32 bits.",
    "items": [
      {
        "label": "192",
        "bits": "11000000"
      },
      {
        "label": "168",
        "bits": "10101000"
      },
      {
        "label": "10",
        "bits": "00001010"
      },
      {
        "label": "25",
        "bits": "00011001"
      }
    ],
    "steps": [
      "IPv4 possui 32 bits.",
      "A notação decimal pontuada separa quatro octetos.",
      "Máscara/prefixo define qual parte representa rede e host."
    ]
  },
  "red-023": {
    "type": "split",
    "title": "Rede e host separados pelo prefixo",
    "caption": "Com /24, os primeiros 24 bits identificam a rede e os 8 últimos identificam o host.",
    "items": [
      {
        "label": "192.168.10",
        "role": "REDE",
        "size": 3
      },
      {
        "label": ".25",
        "role": "HOST",
        "size": 1
      }
    ],
    "steps": [
      "O prefixo /24 equivale a 255.255.255.0.",
      "A parte de rede é comum aos hosts da mesma sub-rede.",
      "A parte de host diferencia interfaces dentro dela."
    ]
  },
  "red-024": {
    "type": "address",
    "title": "IPv6: 128 bits em oito grupos hexadecimais",
    "caption": "A abreviação reduz zeros à esquerda e pode comprimir uma sequência contínua de grupos zero.",
    "items": [
      {
        "label": "2001",
        "bits": "db8"
      },
      {
        "label": "0",
        "bits": "0"
      },
      {
        "label": "0",
        "bits": "0"
      },
      {
        "label": "1",
        "bits": "0"
      },
      {
        "label": "0",
        "bits": "0"
      },
      {
        "label": "0",
        "bits": "0"
      },
      {
        "label": "0",
        "bits": "0"
      },
      {
        "label": "25",
        "bits": "::25"
      }
    ],
    "steps": [
      "IPv6 usa 128 bits.",
      "Grupos são escritos em hexadecimal.",
      "“::” só pode representar uma sequência contínua de zeros por endereço."
    ]
  },
  "red-025": {
    "type": "table",
    "title": "Tabela de roteamento: escolha pela rota mais específica",
    "caption": "O roteador compara o destino com os prefixos disponíveis.",
    "items": [
      {
        "cols": [
          "Destino",
          "Próximo salto",
          "Interface"
        ],
        "rows": [
          [
            "10.0.0.0/8",
            "R2",
            "eth1"
          ],
          [
            "192.168.10.0/24",
            "direto",
            "eth0"
          ],
          [
            "0.0.0.0/0",
            "ISP",
            "wan0"
          ]
        ]
      }
    ],
    "steps": [
      "Rotas mais específicas vencem rotas genéricas.",
      "Rota diretamente conectada não precisa de outro roteador.",
      "A rota default cobre destinos sem correspondência melhor."
    ]
  },
  "red-026": {
    "type": "timeline",
    "title": "TCP: handshake de três vias",
    "caption": "SYN, SYN/ACK e ACK estabelecem parâmetros antes de transportar dados.",
    "items": [
      {
        "label": "SYN",
        "sub": "cliente → servidor"
      },
      {
        "label": "SYN + ACK",
        "sub": "servidor → cliente"
      },
      {
        "label": "ACK",
        "sub": "cliente → servidor"
      },
      {
        "label": "DADOS",
        "sub": "conexão estabelecida"
      }
    ],
    "steps": [
      "O cliente solicita sincronização.",
      "O servidor confirma e também sincroniza.",
      "O cliente confirma; a conexão fica estabelecida."
    ]
  },
  "red-027": {
    "type": "compare",
    "title": "UDP e IPsec resolvem problemas diferentes",
    "caption": "UDP é transporte leve; IPsec protege comunicação na camada IP.",
    "items": [
      {
        "title": "UDP",
        "icon": "⚡",
        "items": [
          "Datagramas",
          "Sem handshake",
          "Baixo overhead"
        ]
      },
      {
        "title": "IPsec",
        "icon": "🔒",
        "items": [
          "Protege pacotes IP",
          "AH/ESP",
          "Pode formar VPN"
        ]
      }
    ],
    "steps": [
      "UDP trata transporte.",
      "IPsec trata proteção no nível IP.",
      "Eles podem coexistir: não são alternativas da mesma categoria."
    ]
  },
  "red-028": {
    "type": "grid",
    "title": "Portas: “endereços” dos serviços no host",
    "caption": "A porta ajuda o sistema operacional a entregar o tráfego à aplicação correta.",
    "items": [
      {
        "title": "22",
        "icon": "SSH",
        "note": "acesso remoto"
      },
      {
        "title": "53",
        "icon": "DNS",
        "note": "resolução de nomes"
      },
      {
        "title": "80",
        "icon": "HTTP",
        "note": "web"
      },
      {
        "title": "443",
        "icon": "HTTPS",
        "note": "web com TLS"
      }
    ],
    "steps": [
      "IP leva ao host.",
      "Porta leva ao processo/serviço dentro do host.",
      "Portas conhecidas facilitam interoperabilidade."
    ]
  },
  "red-029": {
    "type": "flow",
    "title": "HTTPS = HTTP protegido por TLS",
    "caption": "O navegador negocia segurança antes de trocar conteúdo HTTP protegido.",
    "items": [
      {
        "icon": "WEB",
        "label": "Navegador"
      },
      {
        "icon": "TLS",
        "label": "Handshake",
        "sub": "certificado e chaves"
      },
      {
        "icon": "🔒",
        "label": "Canal cifrado"
      },
      {
        "icon": "HTTP",
        "label": "Conteúdo protegido"
      }
    ],
    "steps": [
      "TLS autentica o servidor por certificado no cenário comum.",
      "Chaves de sessão protegem o tráfego.",
      "HTTP passa pelo canal TLS."
    ]
  },
  "red-030": {
    "type": "compare",
    "title": "DNS descobre o endereço; DHCP entrega configuração",
    "caption": "Os dois automatizam tarefas diferentes na entrada da rede.",
    "items": [
      {
        "title": "DNS",
        "icon": "?→IP",
        "items": [
          "Nome para endereço",
          "Consulta hierárquica",
          "Cache"
        ]
      },
      {
        "title": "DHCP",
        "icon": "IP→PC",
        "items": [
          "Entrega IP/máscara",
          "Gateway e DNS",
          "Concessão (lease)"
        ]
      }
    ],
    "steps": [
      "DHCP configura o cliente.",
      "DNS resolve nomes para endereços.",
      "Um cliente pode receber do DHCP o endereço do servidor DNS."
    ]
  },
  "red-031": {
    "type": "compare",
    "title": "FTP, SSH e RDP",
    "caption": "Três serviços, três objetivos.",
    "items": [
      {
        "title": "FTP",
        "icon": "⇅",
        "items": [
          "Transferência de arquivos",
          "Canal de dados",
          "Não é shell remoto"
        ]
      },
      {
        "title": "SSH",
        "icon": ">_",
        "items": [
          "Terminal seguro",
          "Cifrado",
          "Pode tunelar"
        ]
      },
      {
        "title": "RDP",
        "icon": "▣",
        "items": [
          "Área de trabalho remota",
          "Interface gráfica",
          "Ecossistema Windows"
        ]
      }
    ],
    "steps": [
      "FTP transfere arquivos.",
      "SSH oferece acesso remoto textual seguro.",
      "RDP entrega sessão gráfica remota."
    ]
  },
  "red-032": {
    "type": "flow",
    "title": "E-mail: envio e acesso à caixa",
    "caption": "SMTP movimenta mensagens; POP e IMAP são usados pelo cliente para acessar a caixa.",
    "items": [
      {
        "icon": "USR",
        "label": "Remetente"
      },
      {
        "icon": "SMTP",
        "label": "Servidor de envio"
      },
      {
        "icon": "MAIL",
        "label": "Caixa postal"
      },
      {
        "icon": "IMAP",
        "label": "Cliente sincronizado"
      }
    ],
    "steps": [
      "SMTP envia/relaya mensagens.",
      "A mensagem fica na caixa do destinatário.",
      "IMAP mantém sincronização; POP tende a trabalhar com download."
    ]
  },
  "red-033": {
    "type": "flow",
    "title": "Abrir um site envolve vários protocolos",
    "caption": "Uma única ação do usuário dispara uma cadeia de serviços.",
    "items": [
      {
        "icon": "DNS",
        "label": "Resolver nome"
      },
      {
        "icon": "IP",
        "label": "Encontrar destino"
      },
      {
        "icon": "TCP",
        "label": "Criar conexão"
      },
      {
        "icon": "TLS",
        "label": "Proteger canal"
      },
      {
        "icon": "HTTP",
        "label": "Pedir conteúdo"
      }
    ],
    "steps": [
      "Primeiro é necessário localizar o servidor.",
      "Depois a conectividade e o transporte são estabelecidos.",
      "TLS protege e HTTP leva a requisição da aplicação."
    ]
  },
  "red-034": {
    "type": "compare",
    "title": "IEEE 802: famílias para redes locais",
    "caption": "802.3 é Ethernet; 802.1 reúne funções de arquitetura/controle como bridging e VLAN.",
    "items": [
      {
        "title": "802.1",
        "icon": "BR",
        "items": [
          "Bridging",
          "VLAN (802.1Q)",
          "Controle/arquitetura LAN"
        ]
      },
      {
        "title": "802.3",
        "icon": "ETH",
        "items": [
          "Ethernet",
          "MAC e meio cabeado",
          "Taxas e PHYs"
        ]
      }
    ],
    "steps": [
      "802.1Q marca VLANs em enlaces compatíveis.",
      "802.3 especifica a família Ethernet.",
      "Ambas convivem em redes com switches."
    ]
  },
  "red-035": {
    "type": "compare",
    "title": "Wi‑Fi: banda, largura e ambiente importam",
    "caption": "A família 802.11 evolui para maiores taxas, eficiência e uso de diferentes bandas.",
    "items": [
      {
        "title": "2,4 GHz",
        "icon": "2.4",
        "items": [
          "Maior alcance típico",
          "Mais interferência",
          "Poucos canais não sobrepostos"
        ]
      },
      {
        "title": "5 GHz",
        "icon": "5",
        "items": [
          "Mais canais",
          "Maior capacidade",
          "Menor alcance típico"
        ]
      },
      {
        "title": "6 GHz",
        "icon": "6",
        "items": [
          "Espectro adicional",
          "Equipamentos compatíveis",
          "Menos legado"
        ]
      }
    ],
    "steps": [
      "A versão 802.11 não é só “velocidade”.",
      "Banda e largura de canal alteram alcance e capacidade.",
      "Ambiente RF influencia o resultado real."
    ]
  },
  "red-036": {
    "type": "compare",
    "title": "BSS, SSID, AP e ad hoc",
    "caption": "Veja a diferença entre infraestrutura e comunicação direta.",
    "items": [
      {
        "title": "Infraestrutura",
        "icon": "AP",
        "items": [
          "AP coordena BSS",
          "SSID identifica a rede",
          "Clientes passam pelo AP"
        ]
      },
      {
        "title": "Ad hoc",
        "icon": "↔",
        "items": [
          "Sem AP central",
          "Estações se comunicam diretamente",
          "Topologia ponto a ponto"
        ]
      }
    ],
    "steps": [
      "BSS é o conjunto básico de serviço.",
      "SSID é o nome lógico divulgado para a rede.",
      "Ad hoc dispensa AP para a comunicação local."
    ]
  },
  "red-037": {
    "type": "flow",
    "title": "Gerência: coletar, comparar, alertar",
    "caption": "SNMP troca informações com agentes; RMON historicamente amplia monitoramento do tráfego remoto.",
    "items": [
      {
        "icon": "NMS",
        "label": "Gerente"
      },
      {
        "icon": "SNMP",
        "label": "Consultas/Traps"
      },
      {
        "icon": "AGT",
        "label": "Agente"
      },
      {
        "icon": "MIB",
        "label": "Objetos gerenciados"
      }
    ],
    "steps": [
      "O gerente consulta ou recebe notificações.",
      "O agente expõe objetos definidos em MIB.",
      "Monitoramento transforma telemetria em visibilidade operacional."
    ]
  },
  "red-038": {
    "type": "stack",
    "title": "Defesa em profundidade",
    "caption": "Controles diferentes reduzem a chance de uma única falha comprometer todo o ambiente.",
    "items": [
      {
        "label": "Identidade e MFA",
        "sub": "quem pode acessar"
      },
      {
        "label": "Firewall / segmentação",
        "sub": "por onde pode passar"
      },
      {
        "label": "IDS/IPS / EDR",
        "sub": "detectar e bloquear"
      },
      {
        "label": "Logs / SIEM",
        "sub": "observar e investigar"
      },
      {
        "label": "Backup / continuidade",
        "sub": "recuperar"
      }
    ],
    "steps": [
      "Nenhum controle cobre tudo.",
      "Camadas independentes criam barreiras sucessivas.",
      "Monitoramento e recuperação completam a proteção preventiva."
    ]
  },
  "red-039": {
    "type": "timeline",
    "title": "Estratégia para questão contextualizada",
    "caption": "Use uma sequência repetível para reduzir distrações.",
    "items": [
      {
        "label": "1 · Comando",
        "sub": "o que a banca realmente pede?"
      },
      {
        "label": "2 · Palavra-chave",
        "sub": "camada, protocolo, função"
      },
      {
        "label": "3 · Eliminação",
        "sub": "retire incompatíveis"
      },
      {
        "label": "4 · Justificativa",
        "sub": "explique por que a correta vence"
      }
    ],
    "steps": [
      "Leia o comando antes de se apaixonar por uma alternativa.",
      "Classifique o assunto tecnicamente.",
      "Registre o motivo do erro para evitar repetição."
    ]
  },
  "red-040": {
    "type": "bars",
    "title": "Domínio real não é só “concluído”",
    "caption": "A retenção precisa aparecer em momentos e formatos diferentes.",
    "items": [
      {
        "label": "Viu o conteúdo",
        "value": 100
      },
      {
        "label": "Acerta agora",
        "value": 86
      },
      {
        "label": "Recupera sem pista",
        "value": 72
      },
      {
        "label": "Retém após intervalo",
        "value": 61
      }
    ],
    "steps": [
      "Conclusão mede exposição.",
      "Recuperação sem pista mede acesso à memória.",
      "Retenção tardia é evidência mais forte de domínio."
    ]
  },
  "sec-001": {
    "type": "triangle",
    "title": "Tríade CIA + propriedades complementares",
    "caption": "Confidencialidade, Integridade e Disponibilidade são o núcleo; autenticidade e responsabilização reforçam a confiança.",
    "items": [
      {
        "label": "Confidencialidade",
        "icon": "C"
      },
      {
        "label": "Integridade",
        "icon": "I"
      },
      {
        "label": "Disponibilidade",
        "icon": "D"
      }
    ],
    "steps": [
      "C: só quem deve, vê.",
      "I: o conteúdo permanece correto.",
      "D: o serviço está acessível quando necessário."
    ],
    "satellites": [
      "Autenticidade",
      "Não repúdio",
      "Responsabilização"
    ]
  },
  "sec-002": {
    "type": "stack",
    "title": "Da diretriz ao passo operacional",
    "caption": "Documentos descem do “o quê e por quê” para o “como fazer”.",
    "items": [
      {
        "label": "Política",
        "sub": "direção e princípios"
      },
      {
        "label": "Norma",
        "sub": "requisitos obrigatórios"
      },
      {
        "label": "Procedimento",
        "sub": "passos, papéis e evidências"
      },
      {
        "label": "Orientação",
        "sub": "boas práticas e apoio"
      }
    ],
    "steps": [
      "Política é ampla e aprovada pela direção.",
      "Norma detalha obrigações.",
      "Procedimento torna a execução repetível e auditável."
    ]
  },
  "sec-003": {
    "type": "cycle",
    "title": "SGSI: melhoria contínua baseada em risco",
    "caption": "O sistema de gestão conecta contexto, liderança, planejamento, operação e avaliação.",
    "items": [
      {
        "label": "Planejar",
        "icon": "P"
      },
      {
        "label": "Operar",
        "icon": "O"
      },
      {
        "label": "Avaliar",
        "icon": "A"
      },
      {
        "label": "Melhorar",
        "icon": "M"
      }
    ],
    "steps": [
      "Defina contexto, riscos e objetivos.",
      "Implemente controles e processos.",
      "Meça, audite e corrija desvios."
    ]
  },
  "sec-004": {
    "type": "grid",
    "title": "ISO 27002: controles organizados por temas",
    "caption": "A edição 2022 agrupa controles em quatro grandes temas.",
    "items": [
      {
        "title": "Organizacionais",
        "icon": "ORG",
        "note": "governança e processos"
      },
      {
        "title": "Pessoas",
        "icon": "PEO",
        "note": "ciclo de RH e conscientização"
      },
      {
        "title": "Físicos",
        "icon": "PHY",
        "note": "ambientes e equipamentos"
      },
      {
        "title": "Tecnológicos",
        "icon": "TEC",
        "note": "sistemas, redes e dados"
      }
    ],
    "steps": [
      "Controles são escolhidos conforme riscos e contexto.",
      "A norma não é uma lista cega de “ligar/desligar”.",
      "Evidências demonstram implementação e operação."
    ]
  },
  "sec-005": {
    "type": "flow",
    "title": "Como o risco nasce",
    "caption": "Uma ameaça explora uma vulnerabilidade e pode produzir impacto sobre um ativo.",
    "items": [
      {
        "icon": "A",
        "label": "Ameaça"
      },
      {
        "icon": "V",
        "label": "Vulnerabilidade"
      },
      {
        "icon": "⚠",
        "label": "Evento"
      },
      {
        "icon": "IMP",
        "label": "Impacto"
      },
      {
        "icon": "R",
        "label": "Risco"
      }
    ],
    "steps": [
      "A ameaça é a causa potencial.",
      "A vulnerabilidade cria a oportunidade.",
      "Probabilidade e impacto sustentam a avaliação do risco."
    ]
  },
  "sec-006": {
    "type": "cycle",
    "title": "Gestão de riscos é um processo recorrente",
    "caption": "Identificar, analisar, avaliar, tratar e monitorar formam um ciclo.",
    "items": [
      {
        "label": "Identificar",
        "icon": "1"
      },
      {
        "label": "Analisar",
        "icon": "2"
      },
      {
        "label": "Avaliar",
        "icon": "3"
      },
      {
        "label": "Tratar",
        "icon": "4"
      },
      {
        "label": "Monitorar",
        "icon": "5"
      }
    ],
    "steps": [
      "Comece pelos ativos, ameaças e vulnerabilidades.",
      "Compare risco com critérios de aceitação.",
      "Tratamento muda o risco e exige acompanhamento."
    ]
  },
  "sec-007": {
    "type": "compare",
    "title": "Quatro respostas clássicas ao risco",
    "caption": "A decisão depende do apetite, custo, impacto e viabilidade.",
    "items": [
      {
        "title": "Mitigar",
        "icon": "↓",
        "items": [
          "reduzir probabilidade/impacto"
        ]
      },
      {
        "title": "Evitar",
        "icon": "X",
        "items": [
          "eliminar atividade geradora"
        ]
      },
      {
        "title": "Transferir",
        "icon": "↗",
        "items": [
          "compartilhar impacto"
        ]
      },
      {
        "title": "Aceitar",
        "icon": "✓",
        "items": [
          "assumir conscientemente"
        ]
      }
    ],
    "steps": [
      "Tratamento não elimina todo risco.",
      "O que sobra é risco residual.",
      "Aceitação deve ocorrer conforme autoridade e critérios definidos."
    ]
  },
  "sec-008": {
    "type": "timeline",
    "title": "Continuidade: do impacto à recuperação",
    "caption": "BIA ajuda a priorizar serviços e definir objetivos de recuperação.",
    "items": [
      {
        "label": "BIA",
        "sub": "impacto e criticidade"
      },
      {
        "label": "RTO/RPO",
        "sub": "metas de recuperação"
      },
      {
        "label": "Estratégia",
        "sub": "redundância, backup, site alternativo"
      },
      {
        "label": "Teste",
        "sub": "validar capacidade real"
      }
    ],
    "steps": [
      "BIA identifica o que é crítico.",
      "RTO fala de tempo; RPO fala de perda aceitável de dados.",
      "Planos só ganham confiança quando testados."
    ]
  },
  "sec-009": {
    "type": "compare",
    "title": "O que a criptografia pode proteger",
    "caption": "Confidencialidade, integridade, autenticidade e não repúdio usam mecanismos diferentes.",
    "items": [
      {
        "title": "Cifração",
        "icon": "🔒",
        "items": [
          "confidencialidade",
          "chaves"
        ]
      },
      {
        "title": "Hash/MAC",
        "icon": "#",
        "items": [
          "integridade",
          "autenticidade com chave no MAC"
        ]
      },
      {
        "title": "Assinatura",
        "icon": "✍",
        "items": [
          "integridade",
          "autenticidade",
          "não repúdio"
        ]
      }
    ],
    "steps": [
      "Cifrar não significa assinar.",
      "Hash simples não autentica sozinho uma origem.",
      "Assinatura digital combina hash e criptografia assimétrica."
    ]
  },
  "sec-010": {
    "type": "flow",
    "title": "AES: mesma chave para cifrar e decifrar",
    "caption": "Criptografia simétrica é eficiente para grandes volumes de dados.",
    "items": [
      {
        "icon": "TXT",
        "label": "Texto claro"
      },
      {
        "icon": "K",
        "label": "Chave secreta"
      },
      {
        "icon": "AES",
        "label": "Cifração"
      },
      {
        "icon": "CIF",
        "label": "Texto cifrado"
      }
    ],
    "steps": [
      "As partes precisam compartilhar a chave secreta.",
      "AES cifra blocos usando a chave.",
      "Modos de operação definem como blocos são encadeados/transformados."
    ]
  },
  "sec-011": {
    "type": "compare",
    "title": "Par de chaves assimétricas",
    "caption": "O que uma chave faz depende do objetivo do mecanismo.",
    "items": [
      {
        "title": "Confidencialidade",
        "icon": "PUB→PRIV",
        "items": [
          "cifra com pública do destinatário",
          "decifra com privada"
        ]
      },
      {
        "title": "Assinatura",
        "icon": "PRIV→PUB",
        "items": [
          "assina com privada",
          "verifica com pública"
        ]
      }
    ],
    "steps": [
      "A chave privada deve permanecer sob controle do titular.",
      "A pública pode ser distribuída.",
      "RSA é mais custoso que cifras simétricas e costuma atuar em esquemas híbridos."
    ]
  },
  "sec-012": {
    "type": "flow",
    "title": "Senha: armazene verificador, não segredo reversível",
    "caption": "Senha deve passar por função adequada de derivação/hash com sal.",
    "items": [
      {
        "icon": "PWD",
        "label": "Senha"
      },
      {
        "icon": "SALT",
        "label": "Sal aleatório"
      },
      {
        "icon": "KDF",
        "label": "Função lenta"
      },
      {
        "icon": "HASH",
        "label": "Verificador armazenado"
      }
    ],
    "steps": [
      "Sal diferente reduz reutilização de tabelas pré-computadas.",
      "Funções lentas elevam custo de tentativa.",
      "O servidor compara verificadores em vez de recuperar a senha original."
    ]
  },
  "sec-013": {
    "type": "flow",
    "title": "Assinatura digital em duas etapas",
    "caption": "Primeiro calcula-se um resumo; depois a chave privada assina esse resumo.",
    "items": [
      {
        "icon": "DOC",
        "label": "Documento"
      },
      {
        "icon": "#",
        "label": "Hash"
      },
      {
        "icon": "PRIV",
        "label": "Chave privada"
      },
      {
        "icon": "SIG",
        "label": "Assinatura"
      },
      {
        "icon": "PUB",
        "label": "Verificação pública"
      }
    ],
    "steps": [
      "Hash representa o conteúdo.",
      "A assinatura liga o resumo ao titular da chave privada.",
      "A chave pública permite verificar integridade e autoria criptográfica."
    ]
  },
  "sec-014": {
    "type": "flow",
    "title": "PKI cria confiança em uma chave pública",
    "caption": "O certificado liga uma identidade a uma chave pública e é validado por uma cadeia de confiança.",
    "items": [
      {
        "icon": "USR",
        "label": "Titular"
      },
      {
        "icon": "CA",
        "label": "Autoridade Certificadora"
      },
      {
        "icon": "CRT",
        "label": "Certificado"
      },
      {
        "icon": "APP",
        "label": "Validador"
      }
    ],
    "steps": [
      "A CA assina o certificado.",
      "O validador confere cadeia, validade e nome/uso.",
      "CRL ou OCSP ajudam a verificar revogação."
    ]
  },
  "sec-015": {
    "type": "cycle",
    "title": "Vulnerabilidade: descobrir não basta",
    "caption": "O ciclo termina quando a correção é verificada e o risco é acompanhado.",
    "items": [
      {
        "label": "Descobrir",
        "icon": "1"
      },
      {
        "label": "Priorizar",
        "icon": "2"
      },
      {
        "label": "Corrigir",
        "icon": "3"
      },
      {
        "label": "Validar",
        "icon": "4"
      },
      {
        "label": "Monitorar",
        "icon": "5"
      }
    ],
    "steps": [
      "Inventário define o que pode ser afetado.",
      "Criticidade combina severidade e contexto.",
      "Remediação precisa de reteste para confirmar eficácia."
    ]
  },
  "sec-016": {
    "type": "grid",
    "title": "Malwares pelo comportamento dominante",
    "caption": "Diferenciar pelo modo de propagação, persistência e objetivo reduz confusões.",
    "items": [
      {
        "title": "Vírus",
        "icon": "V",
        "note": "depende de hospedeiro"
      },
      {
        "title": "Worm",
        "icon": "W",
        "note": "propaga-se automaticamente"
      },
      {
        "title": "Ransomware",
        "icon": "R$",
        "note": "extorsão/indisponibilidade"
      },
      {
        "title": "Spyware",
        "icon": "SPY",
        "note": "coleta clandestina"
      },
      {
        "title": "Rootkit",
        "icon": "ROOT",
        "note": "ocultação/persistência"
      }
    ],
    "steps": [
      "“Malware” é categoria ampla.",
      "O mesmo ataque pode combinar mais de uma família.",
      "Comportamento e objetivo são pistas melhores que o nome comercial."
    ]
  },
  "sec-017": {
    "type": "stack",
    "title": "Hardening reduz superfície de ataque",
    "caption": "Retirar o desnecessário e fortalecer o necessário diminui caminhos de exploração.",
    "items": [
      {
        "label": "Remover serviços desnecessários",
        "sub": "menos portas e componentes"
      },
      {
        "label": "Atualizar e corrigir",
        "sub": "reduzir falhas conhecidas"
      },
      {
        "label": "Privilégio mínimo",
        "sub": "limitar impacto"
      },
      {
        "label": "Configuração segura",
        "sub": "baselines e auditoria"
      },
      {
        "label": "Monitoramento",
        "sub": "detectar desvios"
      }
    ],
    "steps": [
      "Hardening começa com uma baseline.",
      "Menos funcionalidades expostas significam menos superfície.",
      "Configuração deve ser continuamente verificada."
    ]
  },
  "sec-018": {
    "type": "stack",
    "title": "Proteção por camadas do físico à nuvem",
    "caption": "Controles precisam acompanhar o ativo em diferentes ambientes.",
    "items": [
      {
        "label": "Físico",
        "sub": "acesso, energia, ambiente"
      },
      {
        "label": "Rede",
        "sub": "segmentação, firewall, VPN"
      },
      {
        "label": "Host",
        "sub": "hardening, EDR"
      },
      {
        "label": "Aplicação",
        "sub": "AppSec, WAF"
      },
      {
        "label": "Nuvem",
        "sub": "IAM, postura, configuração"
      }
    ],
    "steps": [
      "Uma falha física pode anular controles lógicos.",
      "Rede e host reduzem movimento lateral.",
      "Na nuvem, configuração e identidade têm peso central."
    ]
  },
  "sec-019": {
    "type": "compare",
    "title": "IDS observa; IPS pode agir no caminho",
    "caption": "A diferença operacional mais cobrada é detecção versus prevenção inline.",
    "items": [
      {
        "title": "IDS",
        "icon": "👁",
        "items": [
          "detecta",
          "gera alerta",
          "pode operar fora do caminho"
        ]
      },
      {
        "title": "IPS",
        "icon": "🛑",
        "items": [
          "detecta",
          "pode bloquear",
          "normalmente inline"
        ]
      }
    ],
    "steps": [
      "Assinaturas e comportamento podem alimentar ambos.",
      "Inline permite impedir, mas exige cuidado com falso positivo.",
      "Posicionamento altera o papel operacional."
    ]
  },
  "sec-020": {
    "type": "flow",
    "title": "SIEM transforma logs em contexto",
    "caption": "Fontes distintas são centralizadas, normalizadas e correlacionadas para gerar alertas investigáveis.",
    "items": [
      {
        "icon": "LOG",
        "label": "Fontes"
      },
      {
        "icon": "→",
        "label": "Coleta"
      },
      {
        "icon": "SIEM",
        "label": "Correlação"
      },
      {
        "icon": "⚠",
        "label": "Alerta"
      },
      {
        "icon": "SOC",
        "label": "Investigação"
      }
    ],
    "steps": [
      "Sem qualidade de logs, correlação perde valor.",
      "Regras/contexto reduzem ruído.",
      "Analista valida e investiga o alerta."
    ]
  },
  "sec-021": {
    "type": "compare",
    "title": "EDR vê o endpoint; XDR correlaciona domínios",
    "caption": "XDR amplia o contexto além do host.",
    "items": [
      {
        "title": "EDR",
        "icon": "PC",
        "items": [
          "processos",
          "arquivos",
          "telemetria do endpoint"
        ]
      },
      {
        "title": "XDR",
        "icon": "X",
        "items": [
          "endpoint + identidade",
          "e-mail + nuvem + rede",
          "correlação ampliada"
        ]
      }
    ],
    "steps": [
      "EDR aprofunda o comportamento do endpoint.",
      "XDR combina múltiplas fontes de detecção/resposta.",
      "Mais dados não substituem contexto e investigação."
    ]
  },
  "sec-022": {
    "type": "grid",
    "title": "DLP, CASB e WAF protegem superfícies diferentes",
    "caption": "Associe cada sigla ao problema que ela foi desenhada para enfrentar.",
    "items": [
      {
        "title": "DLP",
        "icon": "DATA",
        "note": "prevenir vazamento de dados"
      },
      {
        "title": "CASB",
        "icon": "CLOUD",
        "note": "controle/visibilidade de serviços em nuvem"
      },
      {
        "title": "WAF",
        "icon": "WEB",
        "note": "proteger aplicações HTTP"
      }
    ],
    "steps": [
      "DLP olha conteúdo e movimentação de dados.",
      "CASB atua na relação com serviços cloud.",
      "WAF filtra tráfego de aplicação web."
    ]
  },
  "sec-023": {
    "type": "flow",
    "title": "SOAR: alerta vira fluxo de resposta",
    "caption": "Playbooks conectam ferramentas para executar passos repetíveis com supervisão adequada.",
    "items": [
      {
        "icon": "⚠",
        "label": "Alerta"
      },
      {
        "icon": "SOAR",
        "label": "Playbook"
      },
      {
        "icon": "API",
        "label": "Ações automáticas"
      },
      {
        "icon": "SOC",
        "label": "Decisão humana"
      },
      {
        "icon": "✓",
        "label": "Evidência"
      }
    ],
    "steps": [
      "O playbook define gatilhos e passos.",
      "Automação reduz tarefas repetitivas.",
      "Ações de alto impacto podem exigir aprovação humana."
    ]
  },
  "sec-024": {
    "type": "compare",
    "title": "UEBA observa comportamento; BAS testa controles",
    "caption": "Um procura anomalias reais, o outro simula técnicas de ataque de forma controlada.",
    "items": [
      {
        "title": "UEBA",
        "icon": "USR",
        "items": [
          "baseline de comportamento",
          "anomalias de usuários/entidades",
          "contexto de risco"
        ]
      },
      {
        "title": "BAS",
        "icon": "SIM",
        "items": [
          "simulação contínua",
          "valida detecções/controles",
          "mede exposição"
        ]
      }
    ],
    "steps": [
      "UEBA aprende padrões e destaca desvios.",
      "BAS executa cenários controlados.",
      "Ambos ajudam a priorizar melhorias, por caminhos diferentes."
    ]
  },
  "sec-025": {
    "type": "cycle",
    "title": "Resposta a incidentes: preparar antes de reagir",
    "caption": "O ciclo reduz improviso e transforma cada incidente em aprendizado.",
    "items": [
      {
        "label": "Preparar",
        "icon": "1"
      },
      {
        "label": "Detectar/Analisar",
        "icon": "2"
      },
      {
        "label": "Conter/Erradicar/Recuperar",
        "icon": "3"
      },
      {
        "label": "Pós-incidente",
        "icon": "4"
      }
    ],
    "steps": [
      "Preparação inclui papéis, ferramentas e contatos.",
      "Análise determina escopo e prioridade.",
      "Lições aprendidas realimentam controles e procedimentos."
    ]
  },
  "sec-026": {
    "type": "timeline",
    "title": "Triagem e evidência: rapidez com preservação",
    "caption": "Conter sem destruir rastros exige disciplina operacional.",
    "items": [
      {
        "label": "Triar",
        "sub": "validar e priorizar"
      },
      {
        "label": "Preservar",
        "sub": "coletar com integridade"
      },
      {
        "label": "Conter",
        "sub": "limitar propagação"
      },
      {
        "label": "Documentar",
        "sub": "cadeia de custódia e decisões"
      }
    ],
    "steps": [
      "Prioridade depende do impacto e do escopo.",
      "Preservação busca manter valor probatório.",
      "Toda ação relevante deve ser registrada."
    ]
  },
  "sec-027": {
    "type": "compare",
    "title": "Threat intelligence informa; hunting procura",
    "caption": "Inteligência organiza conhecimento sobre ameaças; hunting formula hipóteses e busca sinais no ambiente.",
    "items": [
      {
        "title": "Threat Intel",
        "icon": "INT",
        "items": [
          "fontes e contexto",
          "TTPs/IOCs",
          "apoia priorização"
        ]
      },
      {
        "title": "Threat Hunting",
        "icon": "HUNT",
        "items": [
          "hipóteses",
          "busca proativa",
          "telemetria interna"
        ]
      }
    ],
    "steps": [
      "IOC sem contexto tem valor limitado.",
      "Hunting não espera necessariamente um alerta.",
      "Resultados de hunting podem criar novas detecções."
    ]
  },
  "sec-028": {
    "type": "flow",
    "title": "MITRE ATT&CK: do objetivo ao comportamento observável",
    "caption": "Táticas respondem “por quê”; técnicas descrevem “como”; procedimentos mostram a execução concreta.",
    "items": [
      {
        "icon": "TA",
        "label": "Tática",
        "sub": "objetivo do adversário"
      },
      {
        "icon": "TE",
        "label": "Técnica",
        "sub": "como alcançar"
      },
      {
        "icon": "PR",
        "label": "Procedimento",
        "sub": "implementação real"
      },
      {
        "icon": "DET",
        "label": "Detecção/Mitigação"
      }
    ],
    "steps": [
      "Tática organiza o objetivo.",
      "Técnica descreve comportamento.",
      "Procedimentos dão exemplos concretos de uso."
    ]
  },
  "sec-029": {
    "type": "timeline",
    "title": "DevSecOps: segurança ao longo do ciclo",
    "caption": "Quanto mais cedo uma falha é evitada ou detectada, menor tende a ser o custo de correção.",
    "items": [
      {
        "label": "Planejar",
        "sub": "requisitos e ameaça"
      },
      {
        "label": "Codificar",
        "sub": "padrões e secrets"
      },
      {
        "label": "Construir/Testar",
        "sub": "SAST/SCA/DAST"
      },
      {
        "label": "Implantar",
        "sub": "configuração segura"
      },
      {
        "label": "Operar",
        "sub": "monitorar e responder"
      }
    ],
    "steps": [
      "Segurança começa antes do código.",
      "Pipelines automatizam verificações repetíveis.",
      "Operação realimenta backlog e requisitos."
    ]
  },
  "sec-030": {
    "type": "grid",
    "title": "OWASP Top 10: pense em famílias de risco",
    "caption": "A lista funciona como mapa de riscos recorrentes em aplicações web.",
    "items": [
      {
        "title": "Acesso",
        "icon": "ACL",
        "note": "controle quebrado"
      },
      {
        "title": "Criptografia",
        "icon": "CRY",
        "note": "proteção inadequada"
      },
      {
        "title": "Injeção",
        "icon": "INJ",
        "note": "entrada vira comando"
      },
      {
        "title": "Design",
        "icon": "DES",
        "note": "falha arquitetural"
      },
      {
        "title": "Configuração",
        "icon": "CFG",
        "note": "defaults/exposição"
      }
    ],
    "steps": [
      "Categorias agrupam padrões de falha.",
      "A prevenção envolve design, código, configuração e operação.",
      "A versão cobrada deve seguir o edital, quando especificada."
    ]
  },
  "sec-031": {
    "type": "compare",
    "title": "SAST, DAST e IAST olham lugares diferentes",
    "caption": "Associe a técnica ao momento e à visão que ela possui.",
    "items": [
      {
        "title": "SAST",
        "icon": "CODE",
        "items": [
          "analisa artefatos/código",
          "sem executar a aplicação",
          "shift-left"
        ]
      },
      {
        "title": "DAST",
        "icon": "WEB",
        "items": [
          "testa aplicação em execução",
          "visão externa",
          "caixa-preta comum"
        ]
      },
      {
        "title": "IAST",
        "icon": "RUN",
        "items": [
          "instrumenta a execução",
          "contexto interno",
          "combina sinais"
        ]
      }
    ],
    "steps": [
      "SAST olha “por dentro” do código/artefato.",
      "DAST interage com a aplicação rodando.",
      "IAST observa a execução com instrumentação."
    ]
  },
  "sec-032": {
    "type": "compare",
    "title": "Modelagem prevê; pentest demonstra",
    "caption": "Os dois procuram riscos, mas em momentos e com evidências diferentes.",
    "items": [
      {
        "title": "STRIDE / Modelagem",
        "icon": "MAP",
        "items": [
          "ameaças no design",
          "antes/durante desenvolvimento",
          "prioriza controles"
        ]
      },
      {
        "title": "Pentest",
        "icon": "TEST",
        "items": [
          "exploração autorizada",
          "escopo definido",
          "demonstra impacto real"
        ]
      }
    ],
    "steps": [
      "Modelagem reduz falhas antes da produção.",
      "Pentest testa a superfície disponível.",
      "Nenhum deles substitui gestão contínua de vulnerabilidades."
    ]
  },
  "sec-033": {
    "type": "stack",
    "title": "IAM: identidade → autenticação → autorização → auditoria",
    "caption": "Acesso seguro depende de verificar quem é, o que pode fazer e registrar o uso.",
    "items": [
      {
        "label": "Identidade",
        "sub": "quem é o sujeito"
      },
      {
        "label": "Autenticação",
        "sub": "provar identidade; MFA"
      },
      {
        "label": "Autorização",
        "sub": "permissões e papéis"
      },
      {
        "label": "PAM",
        "sub": "privilégios elevados"
      },
      {
        "label": "Auditoria",
        "sub": "trilha de uso"
      }
    ],
    "steps": [
      "SSO reduz múltiplas autenticações, não elimina autorização.",
      "MFA combina fatores distintos.",
      "Privilégios devem ser mínimos e temporários quando possível."
    ]
  },
  "sec-034": {
    "type": "flow",
    "title": "Privacidade: finalidade orienta o ciclo do dado",
    "caption": "Coleta e uso precisam estar ligados a base, finalidade e controles adequados.",
    "items": [
      {
        "icon": "COL",
        "label": "Coletar"
      },
      {
        "icon": "USE",
        "label": "Usar"
      },
      {
        "icon": "SHR",
        "label": "Compartilhar"
      },
      {
        "icon": "RET",
        "label": "Reter"
      },
      {
        "icon": "DEL",
        "label": "Eliminar"
      }
    ],
    "steps": [
      "Minimização reduz dados ao necessário.",
      "Transparência e direitos do titular acompanham o tratamento.",
      "Governança define papéis, bases, registros e respostas."
    ]
  },
  "sec-035": {
    "type": "compare",
    "title": "Anonimização ≠ pseudonimização",
    "caption": "A diferença central é a possibilidade de vincular novamente os dados a uma pessoa.",
    "items": [
      {
        "title": "Anonimização",
        "icon": "ANON",
        "items": [
          "busca irreversibilidade razoável",
          "reduz vínculo com titular",
          "risco de reidentificação deve ser avaliado"
        ]
      },
      {
        "title": "Pseudonimização",
        "icon": "PSEU",
        "items": [
          "substitui identificadores",
          "informação adicional permite reversão",
          "continua exigindo proteção"
        ]
      }
    ],
    "steps": [
      "Remover nome não garante anonimização.",
      "Quase-identificadores podem permitir reidentificação.",
      "Contexto e meios razoáveis disponíveis importam."
    ]
  },
  "sec-036": {
    "type": "grid",
    "title": "Novas plataformas, novas superfícies",
    "caption": "O princípio é o mesmo: inventariar, reduzir privilégio, configurar e monitorar.",
    "items": [
      {
        "title": "Containers",
        "icon": "CTR",
        "note": "imagens, runtime, registry"
      },
      {
        "title": "IoT",
        "icon": "IOT",
        "note": "firmware, credenciais, rede"
      },
      {
        "title": "APIs",
        "icon": "API",
        "note": "identidade, entrada, rate limit"
      },
      {
        "title": "Cloud",
        "icon": "CLD",
        "note": "IAM, postura, segredos"
      }
    ],
    "steps": [
      "Cada plataforma adiciona superfícies específicas.",
      "Defaults e segredos expostos são riscos recorrentes.",
      "Segmentação e telemetria continuam fundamentais."
    ]
  },
  "sec-037": {
    "type": "compare",
    "title": "Blockchain e Microsoft 365: modelos de confiança distintos",
    "caption": "Um depende de consenso e chaves; o outro de identidade, políticas e telemetria da suíte.",
    "items": [
      {
        "title": "Blockchain",
        "icon": "CHAIN",
        "items": [
          "blocos encadeados",
          "assinaturas/chaves",
          "consenso e contratos"
        ]
      },
      {
        "title": "Microsoft 365 E5",
        "icon": "M365",
        "items": [
          "Entra ID/identidade",
          "Defender/Purview",
          "políticas e correlação"
        ]
      }
    ],
    "steps": [
      "Blockchain não elimina a necessidade de proteger chaves e aplicações.",
      "M365 E5 integra múltiplos controles de identidade, dados e detecção.",
      "Em ambos, configuração segura continua crítica."
    ]
  }
};
  window.VERSA_DATAPREV_VISUALS = Object.freeze(visuals);
})();
