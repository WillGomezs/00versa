# Relatório de auditoria de segurança — Versa Concursos v1.3.0

Data: 08/08/2026  
Escopo: pacote estático, execução no navegador, armazenamento local, links externos, dependências e preparação para GitHub Pages.  
Resultado: **APROVADO PARA PUBLICAÇÃO ESTÁTICA, COM REQUISITOS OPERACIONAIS**.

## Conclusão executiva

A aplicação não possui backend, login, API própria, banco de dados remoto, analytics ou publicidade. Isso reduz significativamente a superfície de vazamento. A auditoria corrigiu os principais riscos identificados e validou o pacote com **38 verificações específicas de segurança**, sem execução de XSS, sem erros de JavaScript e sem requisições automáticas a terceiros. A auditoria de dependências encontrou **zero vulnerabilidades conhecidas** no momento do teste.

Segurança absoluta não existe. O resultado depende também da proteção da conta GitHub, do HTTPS obrigatório, da integridade do pacote e da revisão de futuras alterações.

## Achados e tratamento

| Risco identificado | Nível anterior | Correção aplicada | Risco residual |
|---|---:|---|---:|
| Arquivo-fonte bruto executável no pacote público, com metadado identificável e superfície de código desnecessária | Alto | Removido da distribuição pública; gerador agora exige caminho privado explícito | Baixo |
| Miniaturas e iframes do YouTube conectavam o navegador a terceiros sem clique | Alto | Removidos; conteúdo externo abre somente após ação consciente, com `no-referrer` | Baixo |
| JavaScript e CSS principais inline impediam CSP forte para scripts | Alto | Extraídos para arquivos próprios; `script-src 'self'`; nenhum script inline | Baixo |
| Mensagem de erro inseria conteúdo de exceção no HTML | Alto | Tela de erro refeita com `textContent` e `replaceChildren`, sem expor detalhes internos | Baixo |
| URLs externas sem validação explícita de protocolo | Médio | Allowlist exclusiva de HTTPS, sem credenciais embutidas | Baixo |
| Caminho de imagem controlável por dados | Médio | Allowlist de `assets/`, extensões de imagem e bloqueio de `..` | Baixo |
| Exclusão usava `localStorage.clear()` e podia apagar dados de outra aplicação na mesma origem | Médio | Exclusão restrita às chaves iniciadas por `versa-` | Baixo |
| Entradas e estruturas locais sem limites suficientes | Médio | Apelido e rascunhos limitados; payload total, históricos e mapas possuem tetos | Baixo |
| Abertura em nova aba poderia expor contexto da origem | Médio | `noopener noreferrer` e `referrerpolicy="no-referrer"` em todos os links externos | Baixo |
| Segredos ou dependências conhecidamente vulneráveis | — | Nenhum segredo aparente; `npm audit` sem vulnerabilidades conhecidas | Monitorar |

## Controles técnicos implantados

- CSP com origem própria para scripts, imagens locais/data e bloqueio de conexão, iframe, objeto, mídia, worker e formulário;
- política global `no-referrer`;
- validação de URL e de recursos locais;
- codificação contextual de todo texto inserido em templates;
- inicialização e tratamento de erro defensivos;
- minimização de dados e aviso para uso de apelido;
- armazenamento somente local, limitado e normalizado;
- remoção seletiva dos dados do usuário;
- zero carregamento automático de terceiros;
- varredura de segredo, sintaxe, dependência, integridade estrutural, fluxo DOM e XSS simulado.

## Referenciais utilizados

O trabalho foi orientado, de forma proporcional ao escopo, por:

- **ISO/IEC 27001:2022** — abordagem baseada em risco e gestão contínua;
- **ISO/IEC 27002:2022** — configuração, prevenção de vazamento, desenvolvimento seguro, teste e gestão de mudanças;
- **ISO/IEC 27701:2025** — minimização, transparência e gestão de privacidade;
- **ISO/IEC 27017:2026** — responsabilidades e controles aplicáveis ao serviço de hospedagem em nuvem;
- **LGPD**, especialmente os princípios do art. 6º e as medidas técnicas e administrativas do art. 46;
- **OWASP Top 10, ASVS e Cheat Sheets** — XSS, CSP, validação, recursos de terceiros e cabeçalhos HTTP;
- **NIST SSDF SP 800-218** — práticas de desenvolvimento e verificação de software seguro.

Referências públicas: [ISO/IEC 27001](https://www.iso.org/standard/27001), [ISO/IEC 27002](https://www.iso.org/standard/75652.html), [ISO/IEC 27701](https://www.iso.org/standard/27701), [ISO/IEC 27017](https://www.iso.org/standard/27017), [LGPD compilada](https://www.planalto.gov.br/ccivil_03/_ato2015-2018/2018/lei/L13709compilado.htm), [OWASP CSP](https://cheatsheetseries.owasp.org/cheatsheets/Content_Security_Policy_Cheat_Sheet.html) e [NIST SSDF](https://csrc.nist.gov/pubs/sp/800/218/final).

> Este alinhamento não equivale a certificação ISO, auditoria independente, pentest de infraestrutura, parecer jurídico ou garantia de conformidade organizacional. Uma certificação exige escopo, políticas, responsáveis, evidências, gestão de risco e auditoria da organização — não apenas código seguro.

## Evidências de teste

| Teste | Resultado |
|---|---:|
| Validação CFAQ-MOC | 2.083 verificações aprovadas |
| Validação de flashcards | 2.321 verificações aprovadas |
| Fluxo DOM das quatro trilhas | Aprovado, 0 erros JavaScript |
| Auditoria específica de segurança | 38 verificações aprovadas |
| Requisições automáticas a terceiros | 0 |
| Payloads XSS executados | 0 |
| `npm audit --package-lock-only` | 0 vulnerabilidades conhecidas |

## Requisitos antes de colocar no ar

1. Ativar 2FA/passkey na conta que administra o repositório.
2. Marcar **Enforce HTTPS** em Settings > Pages.
3. Habilitar alertas de dependências e varredura de segredos disponíveis.
4. Não enviar o arquivo-fonte bruto nem qualquer backup privado.
5. Se cabeçalhos HTTP avançados forem exigidos, usar hospedagem configurável e validar os cabeçalhos no domínio final.
