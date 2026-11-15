# Diário de bordo — Trocaverde

Este diário reúne decisões, atividades, verificações e aprendizados registrados durante o desenvolvimento do Trocaverde. As entradas distinguem atividades documentadas de pontos que ainda dependem de confirmação.

## 21/09/2026 — Definição do projeto e do escopo

- **Tema escolhido:** moda circular e troca de roupas.
- **Proposta:** apresentar uma rede comunitária de troca e reaproveitamento de roupas, incentivando o consumo consciente e a economia circular.
- **Estrutura inicial:** site com dez páginas interligadas, inicialmente planejado com HTML e CSS.
- **Identidade visual:** combinação de tons de verde, terracota e bege.
- **Galeria:** previsão de ilustrações enquanto não houvesse fotografias próprias das peças.
- **Hospedagem:** Railway foi registrado como alternativa de hospedagem para site estático.

## 26/10/2026 — Verificações registradas

- Foi executada uma verificação automática dos links internos das dez páginas, sem registro de links quebrados.
- Foram conferidos elementos estruturais como `lang="pt-BR"`, título, meta description, um `<h1>`, regiões semânticas e associação entre `label` e `id`.
- O relatório registra ausência de elementos `<img>` sem atributo `alt` e identificação acessível das ilustrações SVG.
- A página inicial foi aberta no Chromium em larguras de 1280 px e 390 px. Na largura menor, não foi registrada rolagem horizontal.
- Permaneceram pendentes a validação formal no W3C, os testes com teclado e leitor de tela, a verificação de contraste e os testes completos do formulário.

## 09/11/2026 — Revisão para a entrega A2

- A documentação foi revisada para refletir a presença de JavaScript na versão atual.
- Foram identificadas no código rotinas de menu dropdown, efeitos de revelação durante a rolagem, contadores animados, filtros e lightbox da galeria.
- No formulário, foram identificadas rotinas de armazenamento e restauração de rascunho com `localStorage`, exibição condicional de campo, contador de caracteres, validação e envio ao Formspree por `fetch()`.
- A análise estática do código não foi tratada como prova de que todos os comportamentos funcionam na versão publicada.
- Foram destacados pontos a conferir, como validação de telefone e CEP, estilo dos campos inválidos, foco na mensagem de sucesso e envio efetivo pelo Formspree.
- Foi organizado o registro de uso de Inteligência Artificial, distinguindo sugestões da ferramenta das decisões e validações da equipe.

## 09/11/2026 — Conferência do repositório

- Foi consultada a página pública do repositório GitHub.
- A página principal apresentava dez arquivos HTML e as pastas `assets/`, `css/`, `docs/`, `img/` e `js/`.
- O README foi identificado como desatualizado em pontos relacionados à primeira entrega, especialmente na descrição do JavaScript como opcional.
- Foi identificada a necessidade de padronizar a descrição do projeto como rede comunitária de troca e reaproveitamento, evitando a interpretação de que se trata de uma loja convencional.
- A existência de publicação HTTPS, de branch com pull request e a conclusão de todos os testes não foram consideradas comprovadas apenas pela listagem da raiz.

## 15/11/2026 — Atualização da documentação com base no repositório

- O README e os documentos complementares foram reorganizados para acompanhar a estrutura e as funcionalidades descritas no repositório.
- O objetivo e o escopo foram alinhados à proposta informativa e comunitária do Trocaverde.
- As funcionalidades JavaScript foram descritas como recursos identificados no código, sem presumir aprovação de todos os testes.
- As evidências foram separadas entre verificações registradas e validações ainda pendentes.
- O orçamento foi estruturado para refletir a publicação informada no README e para evitar valores comerciais não confirmados.
- A documentação revisada deve passar por conferência final da equipe antes de ser incorporada ao repositório.

## Aprendizados registrados

- `aria-current="page"` ajuda a identificar a página atual no menu.
- Associar cada `<label>` ao campo correspondente melhora a compreensão e o uso dos formulários.
- Atributos como `pattern` e `title` podem orientar o preenchimento dos campos.
- Tabelas devem possuir título/legenda e cabeçalhos identificados para facilitar a leitura por tecnologias assistivas.
- Indicadores fictícios devem ser identificados claramente para não serem confundidos com resultados reais.
- A análise do código não substitui testes funcionais realizados no navegador.

## Dificuldades e pontos de atenção

- Manter cabeçalho, rodapé e navegação consistentes nas dez páginas.
- Obter e organizar materiais audiovisuais e imagens adequados.
- Distinguir conteúdo ilustrativo de informação real.
- Conferir o comportamento do formulário e a integração com serviço externo.
- Concluir e registrar testes de acessibilidade, responsividade e validação formal.
- Manter a documentação sincronizada com as alterações do repositório e do site publicado.
