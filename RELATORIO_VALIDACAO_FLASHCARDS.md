# Validação dos flashcards — Versa Concursos v1.2.0

Data: 08/08/2026

Status: **APROVADO**

## Resultados

- Validações especializadas de flashcards: **2.321 aprovadas**.
- Validações estruturais CFAQ-MOC preservadas: **2.083 aprovadas**.
- Catálogo total: **421 cartões**.
- Cartões-base preservados: **341**.
- Cartões estratégicos adicionados: **80**, sendo 20 por curso.
- Cursos contemplados: **4**.
- IDs duplicados: **0**.
- Referências inválidas de curso, módulo ou lição: **0**.
- Cartões sem frente ou resposta: **0**.
- Migração de progresso antigo: **aprovada**.
- Separação do progresso por curso: **aprovada**.
- Agendamento Errei/Difícil/Bom/Fácil: **aprovado**.
- Teste de fluxo DOM: **aprovado**.
- Erros JavaScript capturados no fluxo DOM: **0**.

## Fluxos cobertos

- carregamento dos quatro catálogos;
- carregamento da metodologia e das fontes de incidência;
- exibição da nova opção no menu;
- abertura do baralho **Alta incidência** com 20 cartões;
- exibição do marcador e da justificativa estratégica;
- início de sessão com dez cartões novos;
- revelação da resposta;
- exibição das quatro classificações;
- salvamento do primeiro cartão estudado;
- preservação e atualização do XP antigo;
- avanço para o cartão seguinte;
- troca entre DATAPREV, ASON, IBGE e CFAQ-MOC;
- manutenção dos simulados e da prova histórica CFAQ-MOC;
- abertura por servidor HTTP local, equivalente ao GitHub Pages.

## Limite da validação

O teste automatizado usa um DOM com carregamento HTTP local. Ele verifica estrutura, interações e erros JavaScript, mas não substitui uma inspeção visual manual em todos os navegadores e tamanhos de tela.
