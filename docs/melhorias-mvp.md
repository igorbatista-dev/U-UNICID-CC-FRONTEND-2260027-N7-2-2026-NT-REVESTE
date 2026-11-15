# Melhorias realizadas e previstas a partir do MVP — Trocaverde

## 1. Objetivo

Este documento organiza a evolução do MVP do Trocaverde em direção à entrega da atividade A2. Como não foram disponibilizados os arquivos completos da primeira versão e um relatório comparativo de todas as alterações, a análise distingue os recursos identificados nos materiais atuais, os requisitos novos ou reforçados pela atividade e as melhorias que ainda precisam de confirmação ou evidência.

Assim, não são atribuídas correções específicas à equipe sem uma comparação verificável entre as versões.

## 2. Evolução identificada

| Aspecto | MVP / planejamento inicial | Situação identificada nos materiais atuais |
|---|---|---|
| Estrutura do site | Previsão de dez páginas em HTML e CSS. | Dez páginas interligadas identificadas no repositório. |
| Navegação | Menu comum às páginas. | Menu registrado nas dez páginas e identificação da página ativa com `aria-current="page"`. |
| Acessibilidade estrutural | Uso planejado de idioma, textos alternativos, teclado e elementos semânticos. | Verificações estruturais registradas nas dez páginas, incluindo idioma, títulos, elementos semânticos, labels e textos alternativos. |
| Responsividade | Layout adaptável a diferentes telas. | Página inicial verificada em 1280 px e 390 px, sem rolagem horizontal na menor largura. |
| Galeria | Fotografias de peças previstas para demonstrar as possibilidades de troca. | Foram utilizadas ilustrações SVG no lugar de fotografias próprias. O código também apresenta filtros e lightbox. |
| Conteúdo audiovisual | Vídeo de mutirão e áudio de depoimento previstos. | O README anterior descreve os arquivos de mídia como demonstrações: cartão de título de 6 segundos e tom de 4 segundos. |
| Indicadores de impacto | Conteúdo educativo e indicadores previstos. | A página de impacto apresenta números identificados como fictícios ou ilustrativos. |
| Formulário | Formulário com validação HTML5 planejado. | O código JavaScript implementa validação de campos, mensagens de erro, armazenamento de rascunho e envio ao Formspree. |
| JavaScript | Opcional no escopo da primeira versão. | A versão atual apresenta dropdown, efeitos de revelação, contadores animados, filtros, lightbox, campo condicional, contador de caracteres, `localStorage` e envio do formulário. |
| Publicação | Site local na primeira entrega. | O README informa um endereço de publicação no Railway (`https://trocaverde.up.railway.app/`), cuja disponibilidade e funcionamento precisam ser confirmados. |

### Evolução visual

As capturas de tela abaixo podem ser utilizadas para demonstrar a evolução visual entre o MVP e a versão posterior:

[Print de antes](../img/Antes-TrocaVerde.jpeg)
[Print de depois](../img/Site_Depois_TrocaVerde.jpeg)

## 3. Melhorias exigidas pela atividade A2

A atividade amplia os requisitos da primeira versão. Os seguintes pontos devem ser comprovados na entrega:

1. **Validação do formulário com JavaScript:** o script implementa verificações de campos obrigatórios, formato básico de e-mail e tamanho mínimo, apresenta mensagens de erro e direciona o foco ao primeiro campo inválido.

2. **Armazenamento local:** o script utiliza `localStorage` para salvar e restaurar o rascunho do formulário. Como esse recurso armazena informações digitadas pelo visitante no navegador, é importante avaliar sua necessidade e informar sua utilização.

3. **Interação com o DOM:** foram identificadas diferentes interações em JavaScript, como menu dropdown, efeitos de revelação durante a rolagem, contadores animados, filtros da galeria, lightbox, campo condicional e contador de caracteres.

4. **Envio do formulário:** o código utiliza `fetch()` para enviar os dados ao Formspree. É necessário testar o endpoint e verificar os retornos de sucesso e erro no ambiente publicado.

5. **Publicação:** disponibilizar o site em um endereço HTTPS e confirmar o carregamento correto das páginas e dos recursos utilizados.

6. **Versionamento colaborativo:** manter o histórico de commits e comprovar o fluxo de branches e pull requests solicitado pela atividade.

7. **Documentação:** registrar os testes realizados, as melhorias implementadas, o uso de inteligência artificial e as respectivas evidências.

## 4. Validações e melhorias futuras

Os recursos identificados no código não significam, necessariamente, que todos os seus comportamentos foram validados em execução. Por isso, permanecem os seguintes pontos:

1. **Ampliar os testes responsivos:** verificar todas as páginas em diferentes tamanhos de tela, incluindo celular, tablet e desktop.

2. **Evoluir o conteúdo:** manter notícias, fontes e informações educativas revisadas e atualizadas.

3. **Avaliar uma plataforma de dados:** caso o projeto evolua para uma operação real, estudar autenticação, cadastro de usuários, armazenamento de peças e gestão de trocas. Isso
