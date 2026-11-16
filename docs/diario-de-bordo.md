# Diário de bordo — Trocaverde

Este diário reúne as principais decisões, atividades, verificações, dificuldades e aprendizados registrados durante o desenvolvimento do Trocaverde. As entradas apresentam a evolução do projeto desde a definição do escopo até a revisão da documentação para a entrega final, distinguindo as atividades realizadas dos pontos que ainda dependem de confirmação ou evidências complementares.

## 21/09/2026 — Definição do projeto e do escopo

- **Tema escolhido:** moda circular, sustentabilidade e troca de roupas.
- **Proposta:** desenvolver um site para apresentar o Trocaverde, uma iniciativa comunitária de troca e reaproveitamento de roupas, incentivando o consumo consciente e a economia circular.
- **Estrutura inicial:** planejamento de um site com dez páginas interligadas, utilizando HTML e CSS.
- **Identidade visual:** definição de uma combinação de tons de verde, terracota e bege, buscando transmitir sustentabilidade, acolhimento e proximidade.
- **Galeria:** previsão de utilização de imagens ilustrativas das peças enquanto não houvesse fotografias próprias.
- **Hospedagem:** Railway foi considerado como alternativa para publicação do site.

## 26/10/2026 — Verificações de estrutura e responsividade

- Foi executada uma verificação automática dos links internos das dez páginas, sem registro de links quebrados.
- Foram conferidos elementos estruturais do HTML, como `lang="pt-BR"`, título, meta description, presença de um `<h1>`, regiões semânticas e associação entre `label` e `id`.
- A verificação registrou ausência de elementos `<img>` sem atributo `alt` e identificação acessível das ilustrações SVG.
- A página inicial foi aberta no Chromium em larguras de 1280 px e 390 px. Na largura menor, não foi registrada rolagem horizontal.
- Foram identificados aspectos que ainda precisavam de testes complementares, como validação formal no W3C, navegação por teclado, uso com leitor de tela, contraste e funcionamento completo do formulário.

## 09/11/2026 — Revisão para a entrega A2

- A documentação foi revisada para refletir a evolução do projeto e a utilização de JavaScript na versão atual.
- Foram identificadas no código rotinas de menu dropdown, efeitos de revelação durante a rolagem, contadores animados, filtros e lightbox na galeria.
- No formulário de contato, foram identificadas funcionalidades de armazenamento e restauração de rascunho com `localStorage`, exibição condicional de campo, contador de caracteres, validação e tentativa de envio ao Formspree por meio de `fetch()`.
- A análise estática do código foi tratada como identificação de funcionalidades implementadas, e não como comprovação de que todos os comportamentos funcionam corretamente na versão publicada.
- Foram destacados pontos que exigiam conferência prática, como validação de telefone e CEP, apresentação visual dos campos inválidos, foco na mensagem de sucesso e confirmação do envio pelo Formspree.
- Também foi organizado o registro de utilização de Inteligência Artificial, considerando as sugestões fornecidas, as alterações aproveitadas e as decisões que permaneceram sob responsabilidade da equipe.

## 09/11/2026 — Conferência do repositório e dos requisitos

- Foi consultada a página pública do repositório no GitHub para verificar sua organização e os arquivos disponíveis.
- A estrutura identificada apresentava dez páginas HTML e as pastas `assets/`, `css/`, `docs/`, `img/` e `js/`, além dos arquivos complementares do projeto.
- Foi identificada a necessidade de atualizar o README, principalmente nos trechos que ainda descreviam o JavaScript como opcional, uma vez que ele é obrigatório na entrega final.
- Foi observada a importância de manter a descrição do Trocaverde coerente com sua proposta de rede comunitária de troca e reaproveitamento de roupas, evitando caracterizá-lo como uma loja convencional.
- Foram considerados separadamente os requisitos de publicação HTTPS, histórico de commits, utilização de branches e pull requests e validação das páginas.
- A existência de publicação funcional, de branch com pull request e a conclusão de todos os testes não foram consideradas comprovadas apenas pela consulta à listagem de arquivos do repositório.

## 15/11/2026 — Atualização da documentação com base no repositório

- Foi realizada uma nova revisão da documentação, considerando a estrutura de arquivos identificada no repositório.
- O README foi reorganizado para apresentar a estrutura atual do projeto, suas tecnologias, páginas e diretórios.
- Foi identificada a necessidade de manter o README principal na raiz do repositório, facilitando a apresentação do projeto para quem acessa o GitHub.
- O objetivo e o escopo foram alinhados à proposta informativa e comunitária do Trocaverde, diferenciando o site demonstrativo de uma plataforma funcional de gerenciamento de trocas.
- As funcionalidades de JavaScript foram descritas com base nos recursos identificados no código, sem presumir a aprovação de todos os testes funcionais.
- As evidências de testes foram organizadas de modo a distinguir verificações já registradas de validações que ainda precisam ser realizadas ou comprovadas.
- O orçamento foi revisado para diferenciar os custos efetivamente confirmados dos valores estimados de hospedagem.
- Os documentos complementares foram considerados em conjunto, buscando manter coerência entre README, escopo, orçamento, testes, melhorias do MVP e uso de IA.
- Foi reforçada a necessidade de uma conferência final da equipe antes de incorporar as alterações ao repositório.

### 15/11/2026 — Revisão final da documentação

Foi realizada uma revisão da documentação do projeto Trocaverde, com o objetivo de alinhar os registros à versão final do site.

Durante essa etapa, foram revisados o orçamento de hospedagem, as informações sobre a integração com o Formspree e a distinção entre o formulário de contato e a newsletter demonstrativa.

Também foi organizada a documentação de testes e das melhorias realizadas desde a primeira entrega do MVP.


## Aprendizados registrados

- O atributo `aria-current="page"` ajuda a identificar a página atual na navegação.
- Associar cada `<label>` ao campo correspondente melhora a compreensão e a utilização dos formulários.
- Atributos como `pattern` e `title` podem orientar o preenchimento e a validação dos campos.
- Tabelas devem possuir título ou legenda e cabeçalhos identificados para facilitar a compreensão por tecnologias assistivas.
- Indicadores fictícios ou ilustrativos precisam ser identificados claramente para não serem confundidos com resultados reais.
- O uso de `localStorage` permite armazenar informações no navegador e recuperá-las posteriormente, como no caso de um rascunho de formulário.
- Eventos e manipulação do DOM permitem criar interações sem depender exclusivamente de navegação entre páginas.
- A análise do código ajuda a identificar funcionalidades, mas não substitui testes funcionais realizados no navegador.
- A documentação precisa acompanhar a evolução do projeto para evitar divergências entre o que foi planejado, desenvolvido e efetivamente entregue.
- Sugestões de Inteligência Artificial devem ser avaliadas pela equipe, verificando sua adequação ao projeto antes de serem incorporadas.
