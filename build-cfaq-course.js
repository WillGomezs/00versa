#!/usr/bin/env node
'use strict';

const fs = require('fs');
const path = require('path');
const crypto = require('crypto');

const projectRoot = path.resolve(__dirname, '..');
if (!process.argv[2]) {
  console.error('Uso: node tools/build-cfaq-course.js /caminho/privado/Rota_Naval_original.html [pasta-de-saida]');
  console.error('O arquivo-fonte privado não acompanha o pacote público por segurança e minimização de dados.');
  process.exit(1);
}
const sourcePath = path.resolve(process.argv[2]);
const outputRoot = path.resolve(process.argv[3] || projectRoot);
const assetsDir = path.join(outputRoot, 'assets', 'cfaq');

if (!fs.existsSync(sourcePath)) {
  throw new Error(`Fonte não encontrada: ${sourcePath}`);
}

fs.mkdirSync(assetsDir, { recursive: true });
const html = fs.readFileSync(sourcePath, 'utf8');

function extractBalanced(marker, quotes = ['"']) {
  const markerPos = html.indexOf(marker);
  if (markerPos < 0) throw new Error(`Marcador não encontrado: ${marker}`);
  const start = markerPos + marker.length;
  let depth = 0;
  let inString = false;
  let quote = '';
  let escaped = false;
  for (let i = start; i < html.length; i += 1) {
    const char = html[i];
    if (inString) {
      if (escaped) escaped = false;
      else if (char === '\\') escaped = true;
      else if (char === quote) inString = false;
      continue;
    }
    if (quotes.includes(char)) {
      inString = true;
      quote = char;
      continue;
    }
    if (char === '[' || char === '{') depth += 1;
    else if (char === ']' || char === '}') {
      depth -= 1;
      if (depth === 0) return html.slice(start, i + 1);
    }
  }
  throw new Error(`Estrutura não finalizada após: ${marker}`);
}

const bank = JSON.parse(extractBalanced('const BANK = '));
const textMap = JSON.parse(extractBalanced('const TEXT_MAP = '));

function parseStringMap(marker) {
  const raw = extractBalanced(marker, ['"', "'", '`']);
  const result = {};
  const regex = /(['"])(.*?)\1\s*:\s*(['"])(.*?)\3\s*,?/gs;
  for (const match of raw.matchAll(regex)) result[match[2]] = match[4];
  return result;
}

function parseNumericStringMap(marker) {
  const raw = extractBalanced(marker, ['"', "'", '`']);
  const result = {};
  const regex = /(\d+)\s*:\s*(['"])(.*?)\2\s*,?/gs;
  for (const match of raw.matchAll(regex)) result[Number(match[1])] = match[3];
  return result;
}

const textAliases = parseStringMap('const TEXT_ALIASES = ');
const explicitTextLinks = parseNumericStringMap('const EXPLICIT_TEXT_LINKS = ');

const normalize = (value = '') => String(value)
  .normalize('NFD')
  .replace(/[\u0300-\u036f]/g, '')
  .toLowerCase()
  .replace(/[^a-z0-9]+/g, ' ')
  .trim();

function resolveTextBase(question) {
  const requested = explicitTextLinks[question.id] || question.textoBaseKey;
  if (!requested) return null;
  if (textMap[requested]) return { key: requested, text: textMap[requested] };
  const alias = textAliases[normalize(requested)];
  if (alias && textMap[alias]) return { key: alias, text: textMap[alias] };
  const normalized = normalize(requested);
  for (const [key, text] of Object.entries(textMap)) {
    const candidate = normalize(key);
    if (normalized === candidate || normalized.includes(candidate) || candidate.includes(normalized)) {
      return { key, text };
    }
  }
  return null;
}

function cleanText(value = '') {
  return String(value)
    .replace(/\[\/?u\]/gi, '')
    .replace(/\*\*/g, '')
    .replace(/\r/g, '')
    .replace(/[ \t]+\n/g, '\n')
    .replace(/\n{3,}/g, '\n\n')
    .trim();
}

function youtubeId(url) {
  const match = String(url).match(/[?&]v=([^&#]+)/);
  return match ? match[1] : null;
}

const units = [
  { id: 'cfaq-port-leitura', title: 'Português — Leitura e Interpretação', description: 'Estratégias de leitura, inferência e gêneros cobrados nos processos CFAQ-MOC.', color: 'teal', discipline: 'Português' },
  { id: 'cfaq-port-texto', title: 'Português — Textualidade e Semântica', description: 'Coesão, coerência, conectores, vocabulário e efeitos de sentido.', color: 'blue', discipline: 'Português' },
  { id: 'cfaq-port-forma', title: 'Português — Fonologia e Escrita', description: 'Fonemas, acentuação, ortografia, hífen e formação de palavras.', color: 'green', discipline: 'Português' },
  { id: 'cfaq-port-morf', title: 'Português — Morfologia', description: 'Classes de palavras, flexões, pronomes, conectivos e verbos.', color: 'violet', discipline: 'Português' },
  { id: 'cfaq-port-norma', title: 'Português — Sintaxe e Norma-padrão', description: 'Termos da oração, concordância, regência, crase e pontuação.', color: 'amber', discipline: 'Português' },
  { id: 'cfaq-math-arit', title: 'Matemática — Aritmética', description: 'Operações, expressões, potências, raízes, frações e decimais.', color: 'blue', discipline: 'Matemática' },
  { id: 'cfaq-math-num', title: 'Matemática — Números e Proporções', description: 'Divisibilidade, MMC, MDC, escalas, regra de três e porcentagem.', color: 'green', discipline: 'Matemática' },
  { id: 'cfaq-math-alg', title: 'Matemática — Álgebra e Funções', description: 'Expressões algébricas, equações, sistemas, funções e gráficos.', color: 'violet', discipline: 'Matemática' },
  { id: 'cfaq-math-geo', title: 'Matemática — Geometria e Medidas', description: 'Ângulos, proporcionalidade geométrica, áreas, volumes e unidades.', color: 'amber', discipline: 'Matemática' },
  { id: 'cfaq-math-dados', title: 'Matemática — Conjuntos e Dados', description: 'Conjuntos, contagem, estatística, probabilidade e resolução de problemas.', color: 'rose', discipline: 'Matemática' },
];

const lessonDefs = [
  ['cfaq-p01','cfaq-port-leitura',1,'Estratégias de leitura','Localizar tema, finalidade e informações explícitas.','A leitura de prova começa pelo comando e retorna ao texto para localizar evidências, evitando respostas baseadas apenas em opinião.',['Leia primeiro o comando.','Diferencie assunto, tema e tese.','Confirme cada alternativa no texto.'],'Uma manchete apresenta o assunto; o desenvolvimento revela o recorte e a finalidade.','Como você diferencia assunto, tema e tese?',['interpretação','tema','finalidade'],['interpretacao','compreensao','tema','tese','finalidade','ideia principal','texto visa']],
  ['cfaq-p02','cfaq-port-leitura',2,'Inferência e informações implícitas','Distinguir o que o texto declara do que permite concluir.','Inferir é chegar a uma conclusão apoiada por pistas textuais. Uma inferência válida não contradiz informações explícitas.',['Procure pistas convergentes.','Evite extrapolações.','Observe pressupostos e subentendidos.'],'Se o texto informa que o porto suspendeu operações por mau tempo, pode-se inferir impacto temporário, mas não encerramento definitivo.','Que evidência transforma uma suposição em inferência válida?',['inferência','implícito','conclusão'],['inferencia','concluir','de acordo com o texto','pode-se afirmar','deduz','implicita']],
  ['cfaq-p03','cfaq-port-leitura',3,'Gêneros e tipologias textuais','Reconhecer gênero, organização e propósito comunicativo.','Gênero é a forma social concreta do texto; tipologia é a organização predominante, como narração, descrição, exposição ou argumentação.',['Notícia informa fatos.','Artigo pode defender uma tese.','Descrição caracteriza seres e ambientes.'],'Uma reportagem pode combinar exposição de dados com trechos narrativos.','Qual é a diferença entre gênero e tipologia?',['gênero','tipologia','finalidade'],['genero','tipologia','noticia','reportagem','cronica','narracao','descricao','argumentacao']],
  ['cfaq-p04','cfaq-port-texto',1,'Coesão e referenciação','Identificar mecanismos que conectam partes do texto.','Coesão reúne recursos linguísticos que retomam termos e articulam ideias, como pronomes, elipses, repetições controladas e conectores.',['Pronomes retomam referentes.','Elipses evitam repetição.','Conectores sinalizam relações.'],'Em “A embarcação chegou. Ela atracou”, “ela” retoma “a embarcação”.','Dê um exemplo de elemento coesivo referencial.',['coesão','referenciação','pronome'],['coesao','referenciacao','retoma','referente','pronome relativo','anaf','catáf']],
  ['cfaq-p05','cfaq-port-texto',2,'Conectores e relações lógicas','Interpretar causa, consequência, condição, oposição e conclusão.','Conjunções e locuções conectivas orientam o raciocínio. Trocar um conector pode alterar totalmente a relação entre as orações.',['Porque pode indicar causa.','Embora introduz concessão.','Portanto marca conclusão.'],'“Embora o mar estivesse agitado, o navio partiu” apresenta concessão.','Que relação é expressa por “desde que”?',['conectores','relações lógicas'],['conjuncao','conector','causa','consequencia','concessao','condicao','oposicao','finalidade','portanto','embora']],
  ['cfaq-p06','cfaq-port-texto',3,'Semântica e efeitos de sentido','Analisar significado contextual, ambiguidade e linguagem figurada.','O sentido depende do contexto. Palavras podem assumir valor denotativo, conotativo ou figurado, e escolhas lexicais produzem efeitos específicos.',['Considere o contexto completo.','Observe polissemia e ambiguidade.','Reconheça ironia e figuras.'],'“O porto acordou cedo” personifica o porto para representar a atividade das pessoas.','Como o contexto elimina uma ambiguidade?',['semântica','figuras','vocabulário'],['semantica','sentido','significado','sinon','anton','ambig','figura','metafora','ironia','conot']],
  ['cfaq-p07','cfaq-port-forma',1,'Fonemas, sílabas e encontros','Analisar fonemas, dígrafos, encontros e divisão silábica.','Letras representam a escrita; fonemas representam sons. Dígrafos usam duas letras para um som, enquanto encontros vocálicos e consonantais seguem classificações próprias.',['Dígrafo representa um fonema.','Ditongo ocorre na mesma sílaba.','Hiato separa vogais em sílabas distintas.'],'Em “saída”, a sequência a-í forma hiato.','Qual é a diferença entre dígrafo e encontro consonantal?',['fonologia','dígrafo','sílaba'],['fonologia','fonema','silaba','digrafo','ditongo','hiato','encontro vocal','encontro conson']],
  ['cfaq-p08','cfaq-port-forma',2,'Acentuação gráfica','Aplicar regras de tonicidade e acentuação.','A acentuação depende da posição da sílaba tônica, da terminação e de regras específicas para hiatos e ditongos.',['Classifique a tonicidade.','Observe a terminação.','Verifique regras especiais.'],'“Máquina” é proparoxítona e, por isso, recebe acento.','Quais são as três etapas para justificar um acento?',['acentuação','tonicidade'],['acentuacao','acentuada','tonica','oxitona','paroxitona','proparoxitona']],
  ['cfaq-p09','cfaq-port-forma',3,'Ortografia, hífen e formação','Aplicar convenções ortográficas e reconhecer processos de formação.','Ortografia, emprego do hífen e formação de palavras seguem convenções que devem ser observadas no contexto da norma-padrão.',['Consulte a base morfológica.','Observe prefixos e letras de encontro.','Diferencie derivação e composição.'],'“Infeliz” é formado por derivação prefixal a partir de “feliz”.','Como diferenciar derivação de composição?',['ortografia','hífen','formação'],['ortografia','hifen','grafia','formacao de palavra','prefix','sufix','derivacao','composicao']],
  ['cfaq-p10','cfaq-port-morf',1,'Substantivos, artigos e adjetivos','Classificar nomes, determinantes e qualificadores.','Substantivos nomeiam; artigos determinam; adjetivos caracterizam. A função concreta depende da relação que a palavra estabelece na frase.',['Identifique o núcleo nominal.','Observe concordância.','Diferencie substantivação.'],'Em “o azul do mar”, “azul” funciona como substantivo por estar determinado pelo artigo.','Como um adjetivo pode ser substantivado?',['substantivo','artigo','adjetivo'],['substantivo','adjetivo','artigo','grau do adjetivo','locucao adjetiva','flexao nominal']],
  ['cfaq-p11','cfaq-port-morf',2,'Pronomes, preposições e advérbios','Reconhecer classes relacionais e seus valores contextuais.','Pronomes retomam ou acompanham nomes; preposições ligam termos; advérbios modificam verbos, adjetivos ou outros advérbios.',['Classifique pelo uso contextual.','Observe o termo retomado.','Identifique a relação semântica.'],'Em “chegou cedo”, “cedo” modifica o verbo e funciona como advérbio.','Qual elemento o pronome retoma na frase analisada?',['pronomes','preposições','advérbios'],['pronome','preposicao','adverbio','locucao adverbial','classe gramatical']],
  ['cfaq-p12','cfaq-port-morf',3,'Verbos, tempos e vozes','Interpretar flexões, locuções, tempos, modos e vozes verbais.','O verbo expressa ação, estado ou fenômeno e varia em pessoa, número, tempo e modo. A voz indica a relação entre sujeito e ação.',['Identifique tempo e modo.','Observe valor aspectual.','Diferencie voz ativa e passiva.'],'“A prova foi aplicada” está na voz passiva analítica.','Que diferença de sentido existe entre pretérito perfeito e imperfeito?',['verbos','tempos','vozes'],['verbo','tempo verbal','modo verbal','voz ativa','voz passiva','flexao verbal','locucao verbal']],
  ['cfaq-p13','cfaq-port-norma',1,'Termos da oração e períodos','Identificar funções sintáticas e relações entre orações.','A sintaxe organiza sujeito, predicado, complementos e adjuntos. Em períodos compostos, orações podem coordenar-se ou subordinar-se.',['Localize o verbo.','Pergunte quem pratica ou sofre a ação.','Analise complementos e circunstâncias.'],'Em “Os candidatos resolveram a prova”, “a prova” é objeto direto.','Como localizar o núcleo do sujeito?',['sintaxe','oração','período'],['sintaxe','sujeito','predicado','objeto direto','objeto indireto','complemento nominal','adjunto','aposto','vocativo','oracao']],
  ['cfaq-p14','cfaq-port-norma',2,'Concordância, regência e crase','Aplicar relações de concordância e complementação.','Concordância ajusta formas; regência determina complementos e preposições. A crase ocorre na fusão da preposição “a” com artigo ou pronome compatível.',['Identifique o núcleo.','Verifique a regência.','Use a troca pelo masculino para testar crase.'],'“O candidato assistiu à aula” combina a regência de assistir com o artigo feminino.','Por que ocorre crase em “à sala”?',['concordância','regência','crase'],['concordancia','regencia','crase','transitiv','complementacao']],
  ['cfaq-p15','cfaq-port-norma',3,'Pontuação e organização sintática','Empregar sinais de pontuação conforme a estrutura e o sentido.','Pontuação não representa apenas pausas: ela marca relações sintáticas, deslocamentos, enumerações, explicações e efeitos de sentido.',['Não separe sujeito e verbo.','Isole vocativos e apostos explicativos.','Observe termos deslocados.'],'Em “Candidatos, leiam o edital”, a vírgula isola o vocativo.','Por que não se usa vírgula entre sujeito e predicado?',['pontuação','vírgula'],['pontuacao','virgula','dois pontos','parenteses','travessao','ponto e virgula']],
  ['cfaq-m01','cfaq-math-arit',1,'Números e operações','Resolver operações com naturais, inteiros e racionais.','A resolução correta exige reconhecer a operação, organizar os dados e respeitar a ordem de prioridade.',['Parênteses vêm primeiro.','Multiplicação e divisão antecedem soma e subtração.','Verifique sinais.'],'Em 3 + 2 × 5, calcula-se primeiro 2 × 5, obtendo 13.','Qual é a ordem das operações?',['operações','números'],['operacoes','expressao numerica','numeros inteiros','naturais','racionais','quatro operacoes']],
  ['cfaq-m02','cfaq-math-arit',2,'Potências e raízes','Aplicar propriedades de potenciação e radiciação.','Potências representam multiplicações repetidas e raízes desfazem potências compatíveis. As propriedades simplificam expressões.',['Some expoentes ao multiplicar potências de mesma base.','Expoente negativo indica inverso.','Confira o domínio da raiz.'],'2³ × 2² = 2⁵ = 32.','Como simplificar potências de mesma base?',['potenciação','radiciação'],['potencia','expoente','radiciacao','raiz quadrada','raiz cubica']],
  ['cfaq-m03','cfaq-math-arit',3,'Frações e decimais','Operar e comparar representações fracionárias e decimais.','Frações representam partes de um todo ou quocientes. Para somar denominadores diferentes, deve-se obter uma base comum.',['Simplifique quando possível.','Use denominador comum.','Converta entre fração e decimal.'],'1/2 + 1/4 = 2/4 + 1/4 = 3/4.','Por que é necessário um denominador comum na adição?',['frações','decimais'],['fracao','fracoes','decimal','denominador','numerador']],
  ['cfaq-m04','cfaq-math-num',1,'Divisibilidade, MMC e MDC','Aplicar critérios de divisibilidade, mínimo múltiplo e máximo divisor.','MMC organiza coincidência de ciclos; MDC encontra a maior divisão exata comum. A fatoração ajuda nos dois processos.',['Use fatoração em primos.','No MMC, considere maiores expoentes.','No MDC, considere fatores comuns.'],'Para eventos a cada 6 e 8 dias, o reencontro ocorre após MMC(6,8)=24 dias.','Quando usar MMC e quando usar MDC?',['divisibilidade','MMC','MDC'],['divisibilidade','mmc','mdc','multiplo','divisor','numero primo','fatoracao']],
  ['cfaq-m05','cfaq-math-num',2,'Razões, proporções e regra de três','Modelar relações proporcionais diretas e inversas.','Razão compara grandezas; proporção iguala razões. Antes de montar regra de três, determine se a relação é direta ou inversa.',['Alinhe grandezas de mesma espécie.','Classifique a proporcionalidade.','Verifique unidades.'],'Se 2 trabalhadores fazem uma tarefa em 6 dias, 4 trabalhadores, no mesmo ritmo, levam 3 dias.','Como reconhecer uma relação inversamente proporcional?',['proporção','regra de três','escala'],['razao','proporcao','regra de tres','escala','grandezas proporcionais','tales']],
  ['cfaq-m06','cfaq-math-num',3,'Porcentagem e matemática financeira','Calcular aumentos, descontos e taxas percentuais.','Porcentagem é uma razão de denominador 100. Aumentos e descontos sucessivos incidem sobre bases atualizadas.',['Converta percentual em fator.','Identifique a base de cálculo.','Não some taxas sucessivas automaticamente.'],'Um aumento de 20% transforma 100 em 120, multiplicando por 1,20.','Por que aumentos sucessivos não devem ser apenas somados?',['porcentagem','taxa','desconto'],['porcentagem','percentual','desconto','aumento','juros','matematica financeira']],
  ['cfaq-m07','cfaq-math-alg',1,'Expressões algébricas e polinômios','Simplificar expressões, produtos notáveis e fatorações.','Expressões algébricas combinam números, letras e operações. Termos semelhantes podem ser reduzidos e identidades ajudam a fatorar.',['Agrupe termos semelhantes.','Aplique distributiva.','Reconheça produtos notáveis.'],'(a+b)² = a² + 2ab + b².','Como identificar termos semelhantes?',['álgebra','polinômios'],['expressao algebrica','polinomio','produto notavel','fatoracao','monomio']],
  ['cfaq-m08','cfaq-math-alg',2,'Equações e sistemas do 1º grau','Resolver incógnitas e problemas lineares.','Uma equação mantém a igualdade quando a mesma operação é realizada nos dois membros. Sistemas combinam duas ou mais relações.',['Isole a incógnita.','Preserve a equivalência.','Confira substituindo o resultado.'],'2x+4=10 implica 2x=6 e x=3.','Como verificar a solução de uma equação?',['equação','sistema linear'],['equacao do 1','primeiro grau','sistema linear','incognita']],
  ['cfaq-m09','cfaq-math-alg',3,'Equação do 2º grau, funções e gráficos','Relacionar raízes, funções quadráticas e representações gráficas.','Equações quadráticas podem ser resolvidas por fatoração ou fórmula geral. O discriminante informa a quantidade de raízes reais.',['Organize na forma ax²+bx+c=0.','Calcule o discriminante.','Interprete zeros e vértice.'],'Em x²−5x+6=0, a fatoração (x−2)(x−3)=0 fornece raízes 2 e 3.','O que o discriminante informa?',['equação quadrática','função','gráfico'],['equacao do 2','segundo grau','quadratica','funcao','grafico','plano cartesiano','discriminante']],
  ['cfaq-m10','cfaq-math-geo',1,'Ângulos, retas e proporcionalidade geométrica','Resolver relações entre ângulos, paralelas e segmentos proporcionais.','Geometria começa pela leitura da figura. Relações entre retas paralelas, transversais e triângulos produzem igualdades úteis.',['Identifique paralelas e transversais.','Use soma de ângulos.','Aplique proporcionalidade quando houver semelhança.'],'A soma dos ângulos internos de um triângulo é 180°.','Que condições permitem aplicar o Teorema de Tales?',['ângulos','Tales','retas'],['angulo','retas paralelas','teorema de tales','triangulo','semelhanca']],
  ['cfaq-m11','cfaq-math-geo',2,'Geometria plana: perímetros e áreas','Calcular medidas de figuras planas.','Perímetro mede o contorno; área mede a superfície. A unidade de área é quadrática.',['Desenhe e identifique medidas.','Escolha a fórmula adequada.','Mantenha unidades coerentes.'],'Um retângulo de lados 4 e 3 tem perímetro 14 e área 12.','Qual é a diferença entre perímetro e área?',['geometria plana','área','perímetro'],['geometria plana','area','perimetro','retangulo','quadrado','circulo','triangulo']],
  ['cfaq-m12','cfaq-math-geo',3,'Volumes, escalas e conversão de unidades','Calcular volumes e converter medidas.','Volume mede espaço tridimensional. Conversões lineares, quadráticas e cúbicas exigem fatores diferentes.',['Identifique as três dimensões.','Observe a potência da unidade.','Converta antes de calcular.'],'1 m³ corresponde a 1.000 litros.','Por que a conversão de área usa o fator ao quadrado?',['volume','medidas','unidades'],['volume','unidade','conversao','litro','metro cubico','capacidade','escala']],
  ['cfaq-m13','cfaq-math-dados',1,'Conjuntos e inclusão-exclusão','Representar relações e contar elementos de conjuntos.','Diagramas ajudam a visualizar união, interseção e complemento. A inclusão-exclusão evita contar a interseção duas vezes.',['Defina o universo.','Marque interseções primeiro.','Use n(A∪B)=n(A)+n(B)−n(A∩B).'],'Se 20 gostam de A, 15 de B e 5 de ambos, 30 gostam de ao menos um.','Por que a interseção é subtraída na fórmula da união?',['conjuntos','inclusão-exclusão'],['conjunto','uniao','intersecao','inclusao exclusao','diagrama de venn']],
  ['cfaq-m14','cfaq-math-dados',2,'Contagem, lógica e probabilidade','Organizar possibilidades e calcular chances simples.','Contagem sistemática evita omissões. Probabilidade clássica compara casos favoráveis com casos possíveis equiprováveis.',['Use árvore ou tabela.','Aplique o princípio multiplicativo.','Confirme se os casos são equiprováveis.'],'Ao lançar um dado justo, a chance de número par é 3/6=1/2.','Quando se aplica o princípio multiplicativo?',['contagem','lógica','probabilidade'],['contagem','combinacao','possibilidade','probabilidade','logica','principio multiplicativo']],
  ['cfaq-m15','cfaq-math-dados',3,'Médias, tabelas e interpretação de dados','Interpretar gráficos, tabelas e medidas descritivas.','A média aritmética resume valores, mas deve ser interpretada junto ao contexto. Tabelas e gráficos exigem atenção a escalas e unidades.',['Leia título e fonte.','Observe eixos e escalas.','Verifique a unidade.'],'A média de 4, 6 e 8 é (4+6+8)/3=6.','Que informação um gráfico pode ocultar por causa da escala?',['média','gráficos','dados'],['media aritmetica','estatistica','tabela','grafico','dados','frequencia']],
].map(([id,unitId,order,title,objective,summary,points,example,recall,tags,keywords]) => ({
  id, unitId, order, title, objective, summary, points, example, recall, tags, keywords,
  duration: 11, difficulty: order === 1 ? 'Básico' : order === 2 ? 'Intermediário' : 'Intermediário',
  prerequisites: [], questionIds: [], videoIds: [], discipline: unitId.includes('port') ? 'Português' : 'Matemática',
}));

for (const unit of units) {
  const lessons = lessonDefs.filter((lesson) => lesson.unitId === unit.id).sort((a, b) => a.order - b.order);
  lessons.forEach((lesson, index) => { lesson.prerequisites = index ? [lessons[index - 1].id] : []; });
}

const videoCatalog = [
  ['cfaq-v-pt-interpretacao','Português','Compreensão e Interpretação de Texto','Professor Noslen','https://www.youtube.com/watch?v=XsN0e_xPyNI','Básico','Leitura estratégica para questões de compreensão e inferência.',['interpretação']],
  ['cfaq-v-pt-substantivo','Português','Substantivo e Adjetivo','Aula do plano','https://www.youtube.com/watch?v=6IjReY03lL8','Básico','Revisão das classes nominais mais recorrentes.',['morfologia']],
  ['cfaq-v-pt-verbos','Português','Verbos','Aula do plano','https://www.youtube.com/watch?v=T8MB4vzTAv4','Intermediário','Tempos, modos, flexões e vozes verbais.',['verbos']],
  ['cfaq-v-pt-pronomes','Português','Pronomes e Artigos','Aula do plano','https://www.youtube.com/watch?v=PQRdgiIutrE','Básico','Emprego contextual de pronomes e artigos.',['pronomes']],
  ['cfaq-v-pt-pontuacao','Português','Pontuação','Aula do plano','https://www.youtube.com/watch?v=9tdpcfdr244','Intermediário','Pontuação guiada pela estrutura sintática.',['pontuação']],
  ['cfaq-v-pt-ortografia','Português','Ortografia','Aula do plano','https://www.youtube.com/watch?v=a1ic6i4NamM','Básico','Convenções ortográficas e dúvidas frequentes.',['ortografia']],
  ['cfaq-v-pt-acentuacao','Português','Acentuação e revisão','Aula do plano','https://www.youtube.com/watch?v=Ytw1SjnqEJ8','Básico','Revisão de tonicidade e regras de acentuação.',['acentuação']],
  ['cfaq-v-m-regra-tres','Matemática','Regra de Três','Professor Ferretto','https://www.youtube.com/watch?v=alLifth7gxE','Básico','Grandezas proporcionais e resolução prática.',['proporção']],
  ['cfaq-v-m-mmc-mdc','Matemática','MMC e MDC','Rafael Procópio','https://www.youtube.com/watch?v=LoiM5d7Kors','Básico','Aplicações de múltiplos, divisores e fatoração.',['MMC','MDC']],
  ['cfaq-v-m-porcentagem','Matemática','Porcentagem','Professor Ferretto','https://www.youtube.com/watch?v=CERiIwParX4','Básico','Cálculo percentual, aumentos e descontos.',['porcentagem']],
  ['cfaq-v-m-equacao','Matemática','Equação do 1º Grau','Professor Ferretto','https://www.youtube.com/watch?v=0lbhe16At_A','Básico','Modelagem e resolução de equações lineares.',['equações']],
  ['cfaq-v-m-fracoes','Matemática','Frações','Professor Ferretto','https://www.youtube.com/watch?v=SgJpB78R7x0','Básico','Operações e interpretação de frações.',['frações']],
  ['cfaq-v-m-logica','Matemática','Lógica Matemática','Prof. Gui','https://www.youtube.com/watch?v=pU4I8sC-2WM','Intermediário','Organização lógica e resolução de problemas.',['lógica']],
  ['cfaq-v-m-geometria','Matemática','Geometria Básica','Sandro Curió','https://www.youtube.com/watch?v=7YeYeL2MjB4','Básico','Ângulos, perímetros e áreas essenciais.',['geometria']],
  ['cfaq-v-m-volume','Matemática','Volume e Unidades','Professor Ferretto','https://www.youtube.com/watch?v=epFmO0M8gDk','Intermediário','Volumes e conversões de unidades.',['volume']],
  ['cfaq-v-m-divisibilidade','Matemática','Divisibilidade','Professor Ferretto','https://www.youtube.com/watch?v=6YnChMLDcos','Básico','Critérios de divisibilidade e números primos.',['divisibilidade']],
  ['cfaq-v-m-contagem','Matemática','Contagem e Conjuntos','Prof. Edson','https://www.youtube.com/watch?v=a0GcRAWcoUY','Intermediário','Conjuntos, diagramas e contagem.',['conjuntos']],
].map(([id,discipline,title,channel,url,level,why,tags]) => ({ id, discipline, title, channel, url, youtubeId: youtubeId(url), level, why, tags }));

const videoLinks = {
  'cfaq-p01':['cfaq-v-pt-interpretacao'], 'cfaq-p08':['cfaq-v-pt-acentuacao'], 'cfaq-p09':['cfaq-v-pt-ortografia'],
  'cfaq-p10':['cfaq-v-pt-substantivo'], 'cfaq-p11':['cfaq-v-pt-pronomes'], 'cfaq-p12':['cfaq-v-pt-verbos'], 'cfaq-p15':['cfaq-v-pt-pontuacao'],
  'cfaq-m03':['cfaq-v-m-fracoes'], 'cfaq-m04':['cfaq-v-m-mmc-mdc','cfaq-v-m-divisibilidade'], 'cfaq-m05':['cfaq-v-m-regra-tres'],
  'cfaq-m06':['cfaq-v-m-porcentagem'], 'cfaq-m08':['cfaq-v-m-equacao'], 'cfaq-m10':['cfaq-v-m-geometria'],
  'cfaq-m12':['cfaq-v-m-volume'], 'cfaq-m13':['cfaq-v-m-contagem'], 'cfaq-m14':['cfaq-v-m-logica'],
};
for (const lesson of lessonDefs) lesson.videoIds = videoLinks[lesson.id] || [];

const imported = bank.filter((question) => /^CFAQ\s/i.test(question.prova || ''));
const omittedInvalid = imported.filter((question) => !Number.isInteger(question.correct) || question.correct < 0 || question.correct >= (question.options || []).length || question.anulada === true);
const valid = imported.filter((question) => !omittedInvalid.includes(question));
const unique = [];
const duplicates = [];
const byStatement = new Map();
for (const question of valid) {
  const key = normalize(question.q);
  if (byStatement.has(key)) {
    const retained = byStatement.get(key);
    retained.sourceProofs.push(question.prova);
    duplicates.push({ omittedId: question.id, retainedId: retained.sourceId, proof: question.prova });
    continue;
  }
  const copy = { ...question, sourceId: question.id, sourceProofs: [question.prova] };
  byStatement.set(key, copy);
  unique.push(copy);
}

function chooseLesson(question, counts) {
  const discipline = question.disciplina;
  const candidates = lessonDefs.filter((lesson) => lesson.discipline === discipline);
  const haystack = normalize(`${question.topic || ''} ${question.q || ''} ${(question.options || []).join(' ')} ${question.why || ''}`);
  let best = null;
  let bestScore = -1;
  for (const lesson of candidates) {
    const score = lesson.keywords.reduce((sum, keyword) => sum + (haystack.includes(normalize(keyword)) ? 1 : 0), 0);
    if (score > bestScore || (score === bestScore && (counts[lesson.id] || 0) < (counts[best?.id] || Infinity))) {
      best = lesson;
      bestScore = score;
    }
  }
  if (bestScore <= 0) best = candidates.slice().sort((a, b) => (counts[a.id] || 0) - (counts[b.id] || 0))[0];
  return best;
}

const textBases = {};
const textBaseIds = new Map();
const missingTextBases = [];
const counts = {};
const questions = unique.map((question) => {
  const lesson = chooseLesson(question, counts);
  counts[lesson.id] = (counts[lesson.id] || 0) + 1;
  const textBase = resolveTextBase(question);
  let textBaseId = null;
  if (textBase) {
    if (!textBaseIds.has(textBase.key)) {
      textBaseId = `cfaq-tb-${String(textBaseIds.size + 1).padStart(2, '0')}`;
      textBaseIds.set(textBase.key, textBaseId);
      textBases[textBaseId] = { title: textBase.key, text: cleanText(textBase.text) };
    } else textBaseId = textBaseIds.get(textBase.key);
  } else if (question.textoBaseKey || explicitTextLinks[question.id]) {
    missingTextBases.push({ id: question.id, key: explicitTextLinks[question.id] || question.textoBaseKey });
  }

  let image = null;
  if (question.imageSrc) {
    const match = question.imageSrc.match(/^data:([^;,]+)(;base64)?,(.*)$/s);
    if (match) {
      const mime = match[1];
      const extension = mime.includes('svg') ? 'svg' : mime.includes('jpeg') ? 'jpg' : 'png';
      const bytes = match[2] ? Buffer.from(match[3], 'base64') : Buffer.from(decodeURIComponent(match[3]), 'utf8');
      const digest = crypto.createHash('sha256').update(bytes).digest('hex').slice(0, 16);
      const filename = `question-${digest}.${extension}`;
      fs.writeFileSync(path.join(assetsDir, filename), bytes);
      image = `assets/cfaq/${filename}`;
    }
  }

  return {
    id: `cfaq-q${question.sourceId}`,
    lessonId: lesson.id,
    statement: cleanText(question.q),
    options: question.options.map(cleanText),
    correct: question.correct,
    explanation: cleanText(question.why),
    wrong: [],
    topic: !question.topic || ['Português','Matemática'].includes(question.topic) ? lesson.title : cleanText(question.topic),
    difficulty: lesson.difficulty,
    source: `Banco histórico Rota Naval — ${question.prova}; órgão de origem a confirmar`,
    sourceStatus: 'Importada para estudo; conferir prova e gabarito oficiais antes de atribuir origem institucional.',
    sourceProof: question.prova,
    sourceProofs: [...new Set(question.sourceProofs)],
    year: question.ano,
    discipline: question.disciplina,
    originalId: question.sourceId,
    textBaseId,
    image,
  };
});

for (const question of questions) {
  const lesson = lessonDefs.find((item) => item.id === question.lessonId);
  lesson.questionIds.push(question.id);
}

// Garante que toda microlição tenha prática suficiente sem descartar questões.
for (const lesson of lessonDefs) {
  while (lesson.questionIds.length < 3) {
    const donors = lessonDefs
      .filter((candidate) => candidate.discipline === lesson.discipline && candidate.questionIds.length > 4)
      .sort((a, b) => b.questionIds.length - a.questionIds.length);
    if (!donors.length) break;
    const movedId = donors[0].questionIds.pop();
    lesson.questionIds.push(movedId);
    const movedQuestion = questions.find((question) => question.id === movedId);
    movedQuestion.lessonId = lesson.id;
  }
}

// Mantém a microlição curta; as demais questões continuam disponíveis nos simulados e no banco por disciplina.
for (const lesson of lessonDefs) {
  lesson.bankQuestionCount = lesson.questionIds.length;
  lesson.questionIds = lesson.questionIds.slice(0, 5);
}

const diagnosticIds = lessonDefs.map((lesson) => lesson.questionIds[0]).filter(Boolean);
const proofs = [...new Set(questions.flatMap((question) => question.sourceProofs))].sort();
const years = [...new Set(questions.map((question) => Number(question.year)))].sort();

for (const lesson of lessonDefs) delete lesson.keywords;

const course = {
  id: 'cfaq',
  shortName: 'CFAQ-MOC',
  name: 'CFAQ-MOC Nacional',
  subtitle: 'Moço de Convés — todas as Capitanias',
  status: 'Abrangência nacional · base histórica v1',
  icon: '⚓',
  accent: '#176f83',
  description: 'Trilha nacional de preparação para processos seletivos do Curso de Formação de Aquaviários — Moço de Convés, com núcleo comum de Português e Matemática e banco histórico consolidado.',
  exam: { board: 'DPC / Órgãos de Execução locais', questions: 40, duration: 'consulte o edital local', note: 'Português + Matemática · regras variam por órgão' },
  units,
  lessons: lessonDefs,
  questions,
  diagnosticIds,
  textBases,
  resources: [
    { title: 'PREPOM — Aquaviários 2026', type: 'Documento oficial DPC', description: 'Programa anual que organiza cursos e Órgãos de Execução do Ensino Profissional Marítimo.', url: 'https://assets.marinha.mil.br/dpc/sites/www.marinha.mil.br.dpc/files/2026-02/PREPOM202606022026.pdf' },
    { title: 'Localize uma Capitania', type: 'Diretório oficial DPC', description: 'Consulta de Capitanias, Delegacias e Agências por unidade federativa.', url: 'https://www.marinha.mil.br/dpc/localize-capitania' },
    { title: 'CFAQ-MOC 2026 — Espírito Santo', type: 'Página oficial CPES', description: 'Edital, prova, gabaritos, retificações e resultados do processo local.', url: 'https://www.marinha.mil.br/cpes/node/472' },
    { title: 'CFAQ-MOC 2026 — Amazônia Oriental', type: 'Página oficial CPAOR', description: 'Edital, conteúdo programático, prova e gabaritos do processo local.', url: 'https://www.marinha.mil.br/cpaor/processo-seletivo-de-admissao-ao-curso-de-formacao-de-aquaviarios-moco-de-conves-cfaq-moc-turma' },
    { title: 'CFAQ-MOC 2026 — São Paulo', type: 'Página oficial CPSP', description: 'Edital retificado e anexos, incluindo conteúdo programático.', url: 'https://www.marinha.mil.br/cpsp/node/1177' },
    { title: 'Processos EPM — Rio de Janeiro', type: 'Página oficial CPRJ', description: 'Editais, provas, gabaritos e resultados publicados pela CPRJ.', url: 'https://www.marinha.mil.br/cprj/node/1274' },
    { title: 'Rota Naval — banco-fonte recebido', type: 'Fonte local importada', description: 'Banco histórico usado como matéria-prima. Letras A/B/C/D/R/I/M não foram convertidas em Capitanias sem documento comprobatório.' },
  ],
  stages: [
    { title: '1. Edital do órgão local', text: 'Confirme vagas, datas, requisitos, documentos e estrutura da prova na Capitania, Delegacia ou Agência responsável.' },
    { title: '2. Exame de conhecimentos', text: 'A trilha prepara Português e Matemática. A quantidade e a duração devem seguir o edital local vigente.' },
    { title: '3. Etapas complementares', text: 'Teste físico, inspeções e convocações variam e não são tratados como regra nacional fixa.' },
    { title: '4. Matrícula', text: 'Use exclusivamente a relação final e as instruções publicadas pelo Órgão de Execução responsável.' },
  ],
  references: [
    'Diretoria de Portos e Costas — PREPOM-Aquaviários 2026.',
    'Páginas oficiais de Capitanias, Delegacias e Agências responsáveis pelos processos locais.',
    'Banco Rota Naval recebido do usuário — conteúdo importado com origem institucional pendente de comprovação.',
    'Questões anuladas, sem gabarito válido e duplicatas exatas não integram o banco ativo.',
  ],
  videoCatalog,
  videoReviewDate: '09/08/2026',
  filters: { proofs, years, originStatus: ['Origem institucional a confirmar'] },
  coverage: { label: 'Abrangência nacional em consolidação', updated: '07/08/2026', activeQuestions: questions.length, importedQuestions: imported.length },
};

const dataJs = `/* Gerado por tools/build-cfaq-course.js em 07/08/2026. */\n(()=>{'use strict';\nconst CFAQ_DATA=${JSON.stringify(course)};\nwindow.CFAQ_DATA=CFAQ_DATA;\n})();\n`;
fs.writeFileSync(path.join(outputRoot, 'cfaq-data.js'), dataJs);

const audit = {
  generatedAt: '2026-08-07',
  source: path.basename(sourcePath),
  importedCfaqQuestions: imported.length,
  activeUniqueQuestions: questions.length,
  invalidOrAnnulledOmitted: omittedInvalid.map((q) => ({ id: q.id, proof: q.prova, correct: q.correct, annulled: Boolean(q.anulada) })),
  exactDuplicatesOmitted: duplicates,
  proofs,
  years,
  textBasesIncluded: Object.keys(textBases).length,
  unresolvedTextBases: missingTextBases,
  imageFiles: [...new Set(questions.map((q) => q.image).filter(Boolean))].length,
  lessons: lessonDefs.map((lesson) => ({ id: lesson.id, title: lesson.title, lessonQuestions: lesson.questionIds.length, bankQuestions: lesson.bankQuestionCount })),
};
fs.writeFileSync(path.join(outputRoot, 'AUDITORIA_IMPORTACAO_CFAQ_MOC.json'), JSON.stringify(audit, null, 2));

const mappingRows = lessonDefs.map((lesson) => {
  const unit = units.find((item) => item.id === lesson.unitId);
  return `| ${unit.title} | ${lesson.id} | ${lesson.title} | ${lesson.questionIds.length} | ${lesson.bankQuestionCount} | ${(lesson.videoIds || []).length} |`;
}).join('\n');
const mapping = `# Mapeamento curricular — CFAQ-MOC Nacional\n\nData: 07/08/2026\n\nEsta matriz organiza o núcleo nacional de Português e Matemática em 10 módulos e 30 microlições. A classificação é pedagógica; a origem institucional dos rótulos históricos permanece pendente de documentação oficial.\n\nCada microlição exibe cinco questões de prática. As demais questões vinculadas ao tema permanecem disponíveis nos simulados e treinos por disciplina.\n\n| Módulo | ID | Microlição | Prática na lição | Banco temático | Vídeos |\n|---|---|---|---:|---:|---:|\n${mappingRows}\n\n## Cobertura histórica\n\n- Anos: ${years.join(', ')}.\n- Conjuntos: ${proofs.join(', ')}.\n- Questões ativas: ${questions.length}.\n- Diagnóstico: ${diagnosticIds.length} questões.\n`;
fs.writeFileSync(path.join(outputRoot, 'MAPEAMENTO_CFAQ_MOC.md'), mapping);

const report = `# Relatório de importação — CFAQ-MOC Nacional\n\nData: 07/08/2026\n\n- Questões CFAQ identificadas na fonte: **${imported.length}**\n- Questões ativas, válidas e sem duplicata exata: **${questions.length}**\n- Questões anuladas ou sem gabarito válido omitidas: **${omittedInvalid.length}**\n- Duplicatas exatas omitidas do banco ativo: **${duplicates.length}**\n- Provas/conjuntos históricos: **${proofs.length}**\n- Textos-base incorporados: **${Object.keys(textBases).length}**\n- Imagens externas extraídas: **${audit.imageFiles}**\n- Módulos: **${units.length}**\n- Microlições: **${lessonDefs.length}**\n- Diagnóstico: **${diagnosticIds.length} questões**\n- Videoaulas: **${videoCatalog.length}**\n\n## Limite de atribuição institucional\n\nOs rótulos A/B/C/D/R/I/M da fonte não foram transformados em nomes de Capitanias sem documento comprobatório. O filtro por prova histórica está disponível, mas a interface informa “origem institucional a confirmar”.\n\n## Separação de escopo\n\nQuestões ASON, CPRJ Fundamental e qualquer conteúdo CFAQ-MOM não foram incorporados à trilha CFAQ-MOC.\n`;
fs.writeFileSync(path.join(outputRoot, 'RELATORIO_IMPORTACAO_CFAQ_MOC.md'), report);

console.log(JSON.stringify(audit, null, 2));
