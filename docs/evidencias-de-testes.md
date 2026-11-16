# Evidências de testes — Trocaverde

Este documento reúne os testes e as verificações realizados durante o desenvolvimento do Trocaverde, considerando a estrutura atual do repositório, as capturas de tela disponíveis e os requisitos da entrega A2.

Os resultados estão divididos entre verificações registradas pela equipe, análises do código-fonte e testes que ainda precisam de execução ou comprovação. A presença de uma funcionalidade no código não significa, necessariamente, que seu funcionamento tenha sido validado na versão publicada.

## 1. Navegação e links internos

Durante o desenvolvimento, foi executada uma verificação automática dos links internos das dez páginas do site, das folhas de estilo e das âncoras, com o objetivo de identificar referências quebradas.

| Página | Resultado registrado |
|---|---|
| `index.html` | Sem links quebrados |
| `sobre.html` | Sem links quebrados |
| `projetos.html` | Sem links quebrados |
| `impacto.html` | Sem links quebrados |
| `acessibilidade.html` | Sem links quebrados |
| `galeria.html` | Sem links quebrados |
| `midia.html` | Sem links quebrados |
| `noticias.html` | Sem links quebrados |
| `contato.html` | Sem links quebrados |
| `orcamento_hospedagem.html` | Sem links quebrados |

**Resultado registrado:** a equipe não identificou links internos quebrados nas páginas verificadas. Também foi registrada a presença do menu de navegação nas dez páginas e do atributo `aria-current="page"` para identificar a página ativa.

**Observação:** recomenda-se repetir a verificação na versão final publicada, especialmente após alterações nos caminhos dos arquivos e na documentação.

## 2. Estrutura HTML e acessibilidade estrutural

Foram realizadas verificações estruturais nas dez páginas HTML, considerando os seguintes elementos:

- Presença do atributo `lang="pt-BR"` para identificação do idioma;
- Existência do elemento `<title>` e da meta description;
- Presença de um elemento `<h1>` por página;
- Utilização de regiões semânticas, como `<header>`, `<nav>`, `<main>` e `<footer>`;
- Correspondência entre os atributos `for` dos elementos `<label>` e os `id` dos campos;
- Presença do atributo `alt` nas imagens;
- Identificação acessível das ilustrações SVG da galeria por meio de `role="img"` e `aria-label`.

**Resultado registrado:** as verificações estruturais descritas foram realizadas nas dez páginas. Não foram registrados elementos `<img>` sem atributo `alt`, e as ilustrações SVG verificadas apresentavam identificação acessível.

Essas verificações ajudam a melhorar a organização do HTML e a identificação dos elementos pelas tecnologias assistivas, mas não comprovam, isoladamente, a conformidade completa com critérios de acessibilidade.

### 2.1. Testes complementares de acessibilidade

A atividade A2 também exige atenção ao contraste AA, à navegação por teclado e ao uso de recursos de acessibilidade.

| Verificação | Situação |
|---|---|
| Idioma `pt-BR` | Verificado na análise estrutural |
| Textos alternativos das imagens | Verificados na análise estrutural |
| Identificação de elementos e campos | Verificada na análise estrutural |
| Validação HTML pelo W3C | Há capturas registradas |
| Contraste mínimo AA | Necessita de comprovação específica |
| Navegação completa por teclado | Necessita de teste manual registrado |

**Observação:** a validação HTML do W3C não equivale a uma avaliação completa de acessibilidade WCAG. Também é necessário verificar visualmente o contraste, o foco dos elementos e a navegação por teclado.

## 3. Validação W3C — HTML e CSS

A equipe realizou verificações utilizando os validadores do W3C para analisar a estrutura HTML das páginas e a folha de estilo CSS do projeto.

As evidências disponíveis estão armazenadas na pasta `teste w3c/`, na raiz do repositório.

### 3.1. Resumo das evidências

| Item testado | Nome do registro de validação | Resultado documentado | Evidência |
|---|---|---|---|
| Acessibilidade | Arquivo HTML não identificado no registro anterior | Sem erros e sem avisos | `w3c-acessibilidade.png` |
| Contato | `contato (2).html` | Sem erros e sem avisos | `w3c-contato.png` |
| CSS | `style.css` | Sem erros; 18 alertas informativos | `w3c-css.png` |
| Galeria | `galeria (1).html` | Sem erros e sem avisos | `w3c-galeria.png` |
| Impacto | `impacto (1).html` | Sem erros e sem avisos | `w3c-impacto.png` |
| Página inicial | `index (1).html` | Sem erros e sem avisos | `w3c-index.png` |
| Mídia | `midia (1).html` | Sem erros e sem avisos | `w3c-midia.png` |
| Notícias | `noticias (4).html` | Sem erros e sem avisos | `w3c-noticias.png` |
| Orçamento | `orcamento_hospedagem (3).html` | Sem erros e sem avisos | `w3c-orcamento.png` |
| Projetos | `projetos (3).html` | Sem erros e sem avisos | `w3c-projetos.png` |
| Sobre | `sobre (1).html` | Sem erros e sem avisos | `w3c-sobre.png` |


### 3.2. Ferramentas utilizadas

**Validação HTML**

Foi utilizado o Nu Html Checker, versão `vnu 26.11.9`, para verificar a estrutura dos documentos HTML.

A mensagem registrada nas capturas foi:

`Document checking completed. No errors or warnings to show`

**Validação CSS**

Foi utilizado o validador de CSS do W3C, configurado para CSS nível 3 + SVG, para verificar a folha de estilos principal.

### 3.3. Resultados individuais das páginas HTML

Nas capturas registradas pela equipe, as páginas apresentaram os seguintes resultados:

- **Acessibilidade:** sem erros e sem avisos. O nome exato do arquivo HTML enviado não foi identificado no registro anterior.
- **Contato:** sem erros e sem avisos; tempo registrado de 11 ms.
- **Galeria:** sem erros e sem avisos; tempo registrado de aproximadamente 8 ms.
- **Impacto:** sem erros e sem avisos; tempo registrado de aproximadamente 9 ms.
- **Página inicial:** sem erros e sem avisos; tempo registrado de aproximadamente 11 ms.
- **Mídia:** sem erros e sem avisos; tempo registrado de aproximadamente 8 ms.
- **Notícias:** sem erros e sem avisos; tempo registrado de aproximadamente 11 ms.
- **Orçamento:** sem erros e sem avisos; tempo registrado de aproximadamente 13 ms.
- **Projetos:** sem erros e sem avisos; tempo registrado de aproximadamente 6 ms.
- **Sobre:** sem erros e sem avisos; tempo registrado de aproximadamente 8 ms.

Os tempos acima foram mantidos conforme o registro anterior da equipe. Eles não representam uma comparação de desempenho entre as páginas.

### 3.4. Validação da folha de estilo CSS

A folha de estilo principal `css/style.css` foi submetida ao validador de CSS do W3C.

O resultado registrado apresentou a mensagem:

`Parabéns! Não foram encontrados erros na sua folha de estilo`

Durante a análise, foram identificados 18 alertas informativos, que não foram classificados como erros.

- **Arquivo registrado:** `style.css`;
- **Ferramenta:** validador CSS do W3C;
- **Configuração:** CSS nível 3 + SVG;
- **Resultado registrado:** nenhum erro e 18 alertas informativos;
- **Evidência:** `teste w3c/w3c-css.png`.

### 3.5. Localização das capturas

As capturas estão disponíveis nos seguintes caminhos do repositório:

- `teste w3c/w3c-acessibilidade.png`
- `teste w3c/w3c-contato.png`
- `teste w3c/w3c-css.png`
- `teste w3c/w3c-galeria.png`
- `teste w3c/w3c-impacto.png`
- `teste w3c/w3c-index.png`
- `teste w3c/w3c-midia.png`
- `teste w3c/w3c-noticias.png`
- `teste w3c/w3c-orcamento.png`
- `teste w3c/w3c-projetos.png`
- `teste w3c/w3c-sobre.png`

**Conclusão das evidências W3C:** as capturas registram resultados positivos nas verificações anteriores. Entretanto, como os nomes dos arquivos enviados ao validador indicam cópias de versões anteriores, é necessário executar novamente a validação nos dez arquivos HTML e no CSS da versão final.

## 4. Testes de responsividade

Foram realizados testes de visualização no navegador Chromium para observar a adaptação do site a diferentes larguras de tela.

Na página inicial, foram registradas as seguintes verificações:

| Largura de tela | Resultado registrado |
|---:|---|
| 1280 px | Página aberta para verificação em resolução de computador |
| 390 px | Não foi registrada rolagem horizontal; menu adaptado para apresentação compacta |

Durante a verificação, foram observados o posicionamento dos elementos, a organização do conteúdo e a adaptação do menu.

**Resultado registrado:** a página inicial foi verificada em uma resolução de computador e em uma largura menor, sem rolagem horizontal na largura de 390 px.

**Limitação:** não há registro individual das dez páginas testadas em diferentes resoluções. Portanto, não é possível afirmar, com base nas evidências disponíveis, que todas foram verificadas em dispositivos móveis.

Recomenda-se testar também as demais páginas em larguras de celular, tablet e computador, registrando capturas de tela.

## 5. Verificação das funcionalidades JavaScript

A análise do arquivo `js/main.js` identificou diferentes funcionalidades implementadas no projeto.

| Funcionalidade | Implementação identificada |
|---|---|
| Menu de navegação | Interação para abrir e fechar o menu em telas menores |
| Menu dropdown | Exibição e controle de menus suspensos |
| Efeitos de rolagem | Elementos revelados conforme a rolagem da página |
| Contadores animados | Atualização dos números durante a exibição |
| Filtros da galeria | Filtragem de peças por categoria |
| Lightbox | Exibição ampliada de imagens em uma janela de diálogo |
| Newsletter | Mensagem informando que o formulário é demonstrativo |
| Formulário de contato | Validação personalizada e envio assíncrono |
| `localStorage` | Armazenamento e recuperação de rascunhos do formulário |

### 5.1. Validação do formulário

No arquivo `contato.html`, o formulário utiliza o atributo `novalidate`, deixando a validação sob responsabilidade do JavaScript.

No arquivo `js/main.js`, foram identificadas as seguintes rotinas:

- Interceptação do envio com `preventDefault()`;
- Verificação de campos obrigatórios;
- Verificação básica do formato de e-mail;
- Verificação do comprimento mínimo dos campos que possuem `minlength`;
- Exibição de mensagens de erro;
- Utilização de `aria-invalid="true"` nos campos inválidos;
- Direcionamento do foco para o primeiro campo inválido;
- Envio dos dados ao Formspree por meio de `fetch()`;
- Exibição de mensagem de sucesso ou alerta de falha.

**Resultado da análise:** as rotinas estão presentes no código-fonte. O funcionamento completo do envio, entretanto, depende de teste prático na versão publicada e de uma resposta válida do serviço Formspree.

### 5.2. Armazenamento com localStorage

O código utiliza a chave `trocaverde-draft` para armazenar os valores preenchidos no formulário.

Foram identificadas rotinas para:

- Salvar os dados durante o preenchimento;
- Recuperar os valores armazenados ao carregar a página;
- Restaurar os campos do formulário;
- Remover o rascunho após o envio bem-sucedido.

**Resultado da análise:** as rotinas de armazenamento e recuperação estão implementadas no JavaScript. É necessário realizar o teste manual de preenchimento, recarregamento e recuperação dos dados para comprovar o funcionamento na versão publicada.

### 5.3. Pontos de atenção identificados

A análise do código também identificou alguns aspectos que merecem testes complementares:

- Os padrões de telefone e CEP estão definidos no HTML, mas não são verificados explicitamente pela validação personalizada do JavaScript.
- O formulário utiliza `novalidate`, portanto os padrões nativos desses campos não são aplicados automaticamente no envio.
- É necessário verificar se os campos inválidos recebem o destaque visual esperado.
- O envio ao Formspree depende da configuração do endpoint, da conexão e da resposta do serviço.
- O armazenamento do rascunho inclui os valores dos campos preenchidos, sendo importante avaliar quais informações precisam permanecer salvas no navegador.

## 6. Conferência do repositório GitHub

Foi realizada uma consulta à estrutura pública do repositório para conferir os arquivos e diretórios existentes.

**Repositório:** `igorbatista-dev/U-UNICID-CC-FRONTEND-2260027-N7-2-2026-NT-REVESTE`

A estrutura atual apresenta:

- Dez páginas HTML;
- Arquivo `README.md` na raiz;
- Arquivo `favicon.svg`;
- Pasta `assets/`, com arquivos de áudio, vídeo e legenda;
- Pasta `css/`, com `style.css`;
- Pasta `docs/`, com seis documentos complementares;
- Pasta `img/`, com imagens utilizadas no site;
- Pasta `js/`, com `main.js`;
- Pasta `teste w3c/`, com onze capturas de validação.

### 6.1. Versionamento

Na consulta realizada em 15/11/2026, foram identificados commits recentes de integrantes da equipe, demonstrando atualizações no repositório.

Entretanto, a consulta também identificou:

| Item | Resultado observado |
|---|---|
| Repositório público | Disponível |
| Branch principal | `main` |
| Outras branches | Não identificadas na consulta |
| Pull requests | Nenhum identificado na consulta |
| Histórico de commits | Há registros de alterações realizados por integrantes da equipe |

**Ponto de atenção:** a atividade exige commits de todos os integrantes, mensagens descritivas e pelo menos uma branch com pull request. É necessário conferir o histórico completo para comprovar a participação dos seis integrantes e criar uma branch com pull request caso esse requisito ainda não tenha sido cumprido.

### 6.2. Publicação do site

O README apresenta a seguinte URL de publicação:

`https://trocaverde.up.railway.app/`

A existência desse endereço está documentada no repositório. A disponibilidade atual do site, o acesso HTTPS e o funcionamento das dez páginas online precisam ser conferidos diretamente no navegador.

### 6.3 Revisão final dos testes

| Elemento testado | Procedimento |
|---|---|---|
| Navegação | Acessar as páginas pelo menu |
| Responsividade | Verificar o site em diferentes larguras |
| Formulário | Enviar dados inválidos e válidos |
| localStorage | Salvar dados e recarregar a página |
| Acessibilidade | Navegar utilizando o teclado |
| Links | Verificar os links internos e externos |

## 7. Conclusão

As verificações registradas durante o desenvolvimento do Trocaverde permitiram analisar a estrutura das páginas, a navegação, os elementos HTML, a responsividade e a implementação das funcionalidades JavaScript.

Os registros disponíveis indicam que:

- Foi realizada uma verificação automática dos links internos das dez páginas, sem problemas registrados;
- Foram realizadas verificações estruturais de HTML e identificação de elementos acessíveis;
- Existem capturas de validação W3C para as dez páginas HTML e para a folha de estilo CSS;
- As capturas anteriores registram ausência de erros e avisos nas páginas HTML e ausência de erros no CSS;
- A página inicial foi verificada em larguras de 1280 px e 390 px, sem rolagem horizontal registrada na menor largura;
- O código JavaScript contém rotinas de interação, validação de formulário e armazenamento de rascunhos com `localStorage`;
- O repositório possui uma estrutura organizada, com documentação e evidências separadas.

Apesar dos resultados positivos registrados, ainda é necessário repetir as validações W3C na versão final, executar os testes funcionais do formulário, comprovar a recuperação do `localStorage`, verificar a navegação por teclado e registrar os testes de contraste e acessibilidade.

Também é necessário conferir a disponibilidade do site publicado e completar a comprovação dos requisitos de versionamento no GitHub.

Dessa forma, este documento diferencia os resultados já registrados das verificações que ainda precisam ser realizadas, evitando considerar uma funcionalidade aprovada apenas por sua presença no código-fonte.
