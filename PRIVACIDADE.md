# Privacidade — Versa Concursos v1.5.0

Última revisão: 09/08/2026.

## Resumo simples

O Versa é um site estático. Ele não possui conta de usuário, servidor próprio, banco de dados remoto, publicidade, ferramenta de análise de audiência ou cookie de rastreamento. Apelido, preferências, progresso, erros, simulados, flashcards e rascunhos permanecem no `localStorage` do navegador usado pelo aluno.

Esses dados locais **não são criptografados**. Qualquer pessoa ou programa com acesso ao mesmo perfil do navegador pode conseguir lê-los. Por isso, use somente um apelido e nunca informe CPF, nome completo, senha, token, e-mail, telefone, documento ou dado sensível.

## Dados guardados localmente

As chaves pertencentes ao aplicativo começam com `versa-` e podem conter:

- apelido, tema e meta diária;
- curso ativo;
- lições concluídas, pontuações, XP e revisões;
- questões erradas e resultados de simulados;
- agenda dos flashcards;
- tentativas por questão, mapa de domínio e agenda adaptativa das lições;
- estado ativo ou superado dos erros;
- rascunhos editoriais locais.

O botão **Apagar dados do Versa** remove somente essas chaves e preserva dados de outras aplicações hospedadas na mesma origem.

## Serviços externos

O site carrega thumbnails dos vídeos diretos a partir de `i.ytimg.com`, infraestrutura de imagens do YouTube. Esse carregamento acontece quando um cartão de vídeo é exibido e pode transmitir ao serviço dados técnicos normais da conexão, como endereço IP, agente do navegador e horário da solicitação. O atributo `referrerpolicy="no-referrer"` impede o envio do endereço da página do Versa.

O Versa não incorpora nem reproduz vídeos. O vídeo, a playlist, a coleção ou a busca somente é aberta depois de um clique consciente, em nova aba, com `noopener`, `noreferrer` e `no-referrer`. Capas de playlists, coleções e buscas são geradas localmente em CSS e não criam solicitação de imagem.

A Política de Segurança de Conteúdo permite imagens externas apenas em `https://i.ytimg.com`. Outros hosts de imagem, iframes, mídia incorporada e conexões de API continuam bloqueados.

## Princípios aplicados

O desenho reduz a coleta e a transmissão de dados em linha com os princípios de finalidade, necessidade, transparência, segurança, prevenção e responsabilização da LGPD. Isso é um alinhamento técnico do produto; não representa certificação, parecer jurídico ou declaração formal de conformidade da organização que o publicar.

Referências: [LGPD — Lei nº 13.709/2018](https://www.planalto.gov.br/ccivil_03/_ato2015-2018/2018/lei/L13709compilado.htm) e [princípios da LGPD](https://www.gov.br/mds/pt-br/acesso-a-informacao/governanca/integridade/campanhas/lgpd).
