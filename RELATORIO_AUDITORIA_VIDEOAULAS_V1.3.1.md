# Relatório de auditoria de videoaulas — v1.3.1

Data da revisão: **09/08/2026**  
Status: **APROVADO**

## Escopo

Foram inventariados e revisados os **197 vídeos e coleções** das quatro trilhas:

| Trilha | Recursos preservados |
|---|---:|
| DATAPREV | 50 |
| ASON | 50 |
| IBGE | 80 |
| CFAQ-MOC | 17 |

A revisão considerou disponibilidade pública, correspondência entre assunto, título e endereço, canal atual, uso obrigatório de HTTPS e coerência entre o `youtubeId` e a URL de reprodução.

## Correções efetuadas

| Trilha afetada | Problema | Correção |
|---|---|---|
| DATAPREV | Aula ISO retirada | Substituição por playlist de questões sobre ISO 27001, 27002 e 27005 |
| DATAPREV, ASON e IBGE | Aula de coesão sem confirmação | Substituição por aula pública do Professor Noslen |
| ASON | Present Continuous sem confirmação | Substituição por aula pública sobre a forma `-ing` |
| ASON | Identificador antigo do canal English in Brazil | Atualização para o canal atual de Carina Fragozo |
| IBGE | Aulas de pobreza e Estatuto da Igualdade Racial sem confirmação | Substituição por buscas temáticas curadas, mais resistentes à remoção de um vídeo isolado |
| IBGE | Aula de tendência central sem confirmação | Substituição por aula pública sobre média, mediana e moda |
| CFAQ-MOC | Aula de interpretação sem confirmação | Substituição por aula pública do Professor Noslen |
| DATAPREV | Título de criptografia divergente do conteúdo | Metadados corrigidos sem alterar a aula disponível |

## Validação automatizada

O teste `npm run validate:videos` executa **1.538 verificações**, incluindo:

- quantidade esperada de recursos em cada curso;
- URLs exclusivamente HTTPS;
- correspondência entre URL direta e ID do YouTube;
- IDs únicos por catálogo;
- referências de vídeos existentes nas microlições;
- mesma data de revisão nas quatro trilhas;
- bloqueio de oito URLs, IDs ou identificadores aposentados conhecidos.

O arquivo `AUDITORIA_VIDEOAULAS_V1.3.1.json` registra o resultado legível por ferramentas.

## Limite da auditoria

Vídeos pertencem a serviços e canais externos e podem ser removidos, tornados privados ou renomeados após esta revisão. O teste impede regressões conhecidas e erros estruturais, mas não substitui uma nova conferência editorial periódica da disponibilidade e da adequação pedagógica.
