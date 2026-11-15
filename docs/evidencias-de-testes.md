# Evidências de testes — Trocaverde

Este documento reúne os testes e as verificações realizados durante o desenvolvimento do site Trocaverde. São apresentados os resultados da análise de navegação, estrutura HTML, acessibilidade, responsividade, validação pelo W3C, funcionamento do JavaScript e conferência do repositório GitHub.

As informações registradas consideram os testes realizados pela equipe, os resultados documentados e as evidências disponíveis por meio de capturas de tela.

## 1. Navegação e links internos

Um script percorreu as dez páginas do site e verificou os links internos, as folhas de estilo e as âncoras, com o objetivo de identificar possíveis referências quebradas.

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

**Resultado:** não foram identificados problemas nos links verificados. Também foi registrada a presença do menu de navegação nas dez páginas e o uso de `aria-current="page"` para identificar a página ativa.

## 2. Estrutura HTML e verificações de acessibilidade

Nas dez páginas do site, foram verificadas características relacionadas à estrutura do HTML e à acessibilidade dos elementos.

Os itens analisados foram:

- Presença do atributo `lang="pt-BR"` para identificar o idioma da página;
- Existência do elemento `<title>` e da meta description;
- Presença de exatamente um `<h1>` por página;
- Utilização das regiões semânticas `<header>`, `<nav>`, `<main>` e `<footer>`;
- Correspondência entre os atributos `for` dos elementos `<label>` e os `id` dos campos;
- Ausência de imagens sem o atributo `alt`;
- Identificação acessível das ilustrações SVG da galeria por meio de `role="img"` e `aria-label`.

**Resultado:** as verificações estruturais descritas foram realizadas nas dez páginas. Esses procedimentos ajudam a identificar problemas na organização do HTML e na identificação dos elementos, mas não substituem testes manuais com teclado e leitores de tela.

## 3. Testes de validação W3C — HTML e CSS

O grupo realizou testes utilizando os validadores oficiais do W3C para verificar a estrutura dos arquivos HTML e a folha de estilo CSS do projeto.

Os registros foram documentados por meio de capturas de tela, permitindo consultar os resultados apresentados pelas ferramentas.

### 3.1. Resumo dos testes

| Item testado | Arquivo enviado | Tempo | Resultado | Evidência |
|---|---|---:|---|---|
| Acessibilidade | Não informado no registro | — | Sem erros e sem avisos | `w3c-acessibilidade.png` |
| Contato | `contato (2).html` | 11 ms | Sem erros e sem avisos | `w3c-contato.png` |
| CSS | `style.css` | — | Sem erros; 18 alertas informativos | `w3c-css.png` |
| Galeria | `galeria (1).html` | 8 ms | Sem erros e sem avisos | `w3c-galeria.png` |
| Impacto | `impacto (1).html` | 9 ms | Sem erros e sem avisos | `w3c-impacto.png` |
| Index | `index (1).html` | 11 ms | Sem erros e sem avisos | `w3c-index.png` |
| Mídia | `midia (1).html` | 8 ms | Sem erros e sem avisos | `w3c-midia.png` |
| Notícias | `noticias (4).html` | 11 ms | Sem erros e sem avisos | `w3c-noticias.png` |
| Orçamento | `orcamento_hospedagem (3).html` | 13 ms | Sem erros e sem avisos | `w3c-orcamento.png` |
| Projetos | `projetos (3).html` | 6 ms | Sem erros e sem avisos | `w3c-projetos.png` |
| Sobre | `sobre (1).html` | 8 ms | Sem erros e sem avisos | `w3c-sobre.png` |

### 3.2. Ferramentas utilizadas

**Validação HTML**

Foi utilizado o **Nu Html Checker**, versão `vnu 26.11.9`, validador oficial do W3C. Os arquivos foram enviados pela opção de upload, utilizando o parser HTML para analisar a estrutura dos documentos.

**Validação CSS**

Foi utilizado o validador de CSS do W3C, configurado para **CSS nível 3 + SVG**, com o objetivo de verificar a folha de estilo utilizada no site.

### 3.3. Teste de acessibilidade — W3C

Foi realizado um teste no arquivo registrado pela equipe como `w3c-acessibilidade.png`, utilizando a ferramenta de validação W3C.

A análise verificou o código HTML da página em busca de possíveis erros ou avisos. O resultado foi positivo, pois não foram encontrados erros nem avisos durante a verificação.

**Resultado:** validação concluída sem apontamentos.

**Evidência:** `w3c-acessibilidade.png`.

*Observação: o registro disponível não informa o nome exato do arquivo HTML enviado nem o tempo de execução desse teste.*

### 3.4. Validação das páginas HTML

As páginas HTML foram submetidas individualmente ao Nu Html Checker. Em todas as verificações documentadas, o validador apresentou uma faixa verde com a seguinte mensagem:

`Document checking completed. No errors or warnings to show`

A mensagem indica que a ferramenta concluiu a análise sem identificar erros ou avisos nos arquivos enviados.

#### 3.4.1. Contato

- **Arquivo enviado:** `contato (2).html`;
- **Ferramenta:** Nu Html Checker, versão `vnu 26.11.9`;
- **Tempo de execução:** 11 milissegundos;
- **Resultado:** nenhum erro ou aviso identificado;
- **Conclusão:** a página foi aprovada na validação, sem necessidade de correções apontadas pela ferramenta.
- **Evidência:** `w3c-contato.png`.

#### 3.4.2. Galeria

- **Arquivo enviado:** `galeria (1).html`;
- **Ferramenta:** Nu Html Checker, versão `vnu 26.11.9`;
- **Tempo de execução:** aproximadamente 8 milissegundos;
- **Resultado:** nenhum erro ou aviso identificado;
- **Conclusão:** a página foi aprovada na validação, sem necessidade de alterações.
- **Evidência:** `w3c-galeria.png`.

#### 3.4.3. Impacto

- **Arquivo enviado:** `impacto (1).html`;
- **Ferramenta:** Nu Html Checker, versão `vnu 26.11.9`;
- **Tempo de execução:** aproximadamente 9 milissegundos;
- **Resultado:** nenhum erro ou aviso identificado;
- **Conclusão:** a página passou pela validação sem exigir ajustes no código.
- **Evidência:** `w3c-impacto.png`.

#### 3.4.4. Página inicial — Index

- **Arquivo enviado:** `index (1).html`;
- **Ferramenta:** Nu Html Checker, versão `vnu 26.11.9`;
- **Tempo de execução:** aproximadamente 11 milissegundos;
- **Resultado:** nenhum erro ou aviso identificado;
- **Conclusão:** a página inicial foi aprovada na validação, sem necessidade de correções apontadas pela ferramenta.
- **Evidência:** `w3c-index.png`.

#### 3.4.5. Mídia

- **Arquivo enviado:** `midia (1).html`;
- **Ferramenta:** Nu Html Checker, versão `vnu 26.11.9`;
- **Tempo de execução:** aproximadamente 8 milissegundos;
- **Resultado:** nenhum erro ou aviso identificado;
- **Conclusão:** a página foi aprovada na validação, sem apontamentos que exigissem alterações.
- **Evidência:** `w3c-midia.png`.

#### 3.4.6. Notícias

- **Arquivo enviado:** `noticias (4).html`, correspondente à quarta versão do arquivo;
- **Ferramenta:** Nu Html Checker, versão `vnu 26.11.9`;
- **Tempo de execução:** aproximadamente 11 milissegundos;
- **Resultado:** nenhum erro ou aviso identificado;
- **Conclusão:** mesmo na quarta versão do arquivo, a página foi aprovada sem problemas apontados pelo validador.
- **Evidência:** `w3c-noticias.png`.

#### 3.4.7. Orçamento

- **Arquivo enviado:** `orcamento_hospedagem (3).html`;
- **Ferramenta:** Nu Html Checker, versão `vnu 26.11.9`;
- **Tempo de execução:** aproximadamente 13 milissegundos;
- **Resultado:** nenhum erro ou aviso identificado;
- **Conclusão:** a página foi validada sem apontamentos, não sendo necessárias correções indicadas pela ferramenta.
- **Evidência:** `w3c-orcamento.png`.

#### 3.4.8. Projetos

- **Arquivo enviado:** `projetos (3).html`;
- **Ferramenta:** Nu Html Checker, versão `vnu 26.11.9`;
- **Tempo de execução:** aproximadamente 6 milissegundos;
- **Resultado:** nenhum erro ou aviso identificado;
- **Conclusão:** foi a validação HTML mais rápida entre as registradas, e a página não precisou de alterações.
- **Evidência:** `w3c-projetos.png`.

#### 3.4.9. Sobre

- **Arquivo enviado:** `sobre (1).html`;
- **Ferramenta:** Nu Html Checker, versão `vnu 26.11.9`;
- **Tempo de execução:** aproximadamente 8 milissegundos;
- **Resultado:** nenhum erro ou aviso identificado;
- **Conclusão:** a página foi aprovada na validação, sem necessidade de correções.
- **Evidência:** `w3c-sobre.png`.

### 3.5. Validação da folha de estilo CSS

A equipe também realizou a validação da folha de estilo principal do projeto, `style.css`, utilizando o validador de CSS do W3C, configurado para CSS nível 3 + SVG.

O resultado apresentou uma faixa verde com a seguinte mensagem:

`Parabéns! Não foram encontrados erros na sua folha de estilo`

Durante a análise, foram identificados 18 alertas informativos. Esses alertas não foram classificados como erros e não impediram a aprovação da folha de estilo.

O validador também disponibilizou a possibilidade de utilizar o selo **CSS válido** do W3C no site, caso a equipe desejasse.

- **Arquivo testado:** `style.css`;
- **Ferramenta:** validador de CSS do W3C;
- **Configuração:** CSS nível 3 + SVG;
- **Resultado:** nenhum erro identificado e 18 alertas informativos;
- **Conclusão:** folha de estilo aprovada, sem necessidade de alterações apontadas pelo validador.
- **Evidência:** `w3c-css.png`.

### 3.6. Conclusão das validações W3C

Os registros apresentam resultados positivos para as dez páginas HTML e para a folha de estilo CSS.

As páginas HTML foram aprovadas sem erros ou avisos, enquanto o CSS foi aprovado sem erros, apresentando 18 alertas informativos.

Dessa forma, os resultados documentados atendem ao critério de aceitação de validar o código HTML e CSS no W3C Validator sem erros.

## 4. Testes de responsividade

O grupo realizou testes de responsividade para verificar a adaptação do site a diferentes tamanhos de tela e resoluções.

Durante as verificações, foram observados o posicionamento dos elementos, a organização do conteúdo, a navegação e a adaptação do menu.

Na página inicial, foram registradas as seguintes verificações no Chromium:

| Largura de tela | Resultado registrado |
|---:|---|
| 1280 px | Página aberta para verificação em resolução de computador |
| 390 px | Sem rolagem horizontal; menu adaptado para apresentação compacta |

Durante os testes, o grupo constatou que o site se adapta adequadamente às dimensões de tela utilizadas, mantendo sua organização visual e usabilidade.

**Resultado:** os testes de responsividade realizados pelo grupo foram concluídos com sucesso.

*Observação: o registro detalhado das larguras de 1280 px e 390 px refere-se à página inicial. Não há, neste documento, uma relação individual de todas as páginas verificadas em cada resolução.*

## 5. Observação sobre o JavaScript

O código JavaScript analisado contém implementações de validação do formulário, armazenamento de rascunho em `localStorage` e diversas interações com o DOM.

Entre os recursos identificados no código estão:

- Validação dos campos do formulário;
- Verificação do formato básico de e-mail;
- Verificação de tamanho mínimo;
- Armazenamento e recuperação de rascunhos utilizando `localStorage`;
- Definição do atributo `aria-invalid="true"` para indicar campos inválidos;
- Envio de informações ao Formspree por meio de requisição assíncrona.

A análise do código confirma a presença dessas rotinas, mas não comprova, por si só, que todos os comportamentos funcionem corretamente na versão publicada.

Também foram identificados alguns pontos de atenção:

- Não há verificação explícita dos padrões de telefone e CEP;
- O destaque visual de campos inválidos depende de regras CSS correspondentes ao atributo `aria-invalid`;
- O envio ao Formspree depende de conexão, configuração válida do endpoint e resposta do serviço;
- O rascunho é armazenado no navegador e inclui os valores dos campos do formulário.

**Resultado:** foram identificadas as implementações no código, mas testes funcionais completos dessas rotinas não estão comprovados pelos registros disponíveis.

## 6. Conferência pública do GitHub

Foi realizada uma conferência da página principal do repositório público para observar sua disponibilidade e estrutura geral.

| Verificação | Resultado observado |
|---|---|
| Acesso ao repositório | Repositório público e acessível |
| Estrutura principal | Dez arquivos HTML e pastas `assets/`, `css/`, `docs/`, `img/` e `js/` visíveis na raiz |
| Histórico de commits | A página exibia cinco commits na consulta |

A conferência permitiu verificar a disponibilidade do repositório e a organização geral dos arquivos apresentados na página inicial.

Entretanto, a visualização do repositório não substitui os testes funcionais, de acessibilidade, responsividade ou validação W3C.

## 7. Conferência do inventário do repositório

A página principal do repositório público apresenta os dez arquivos HTML, o `favicon.svg` e as pastas `assets/`, `css/`, `docs/`, `img/` e `js/`.

O README do repositório identifica também os seguintes arquivos:

- `css/style.css`;
- `assets/video/mutirao-troca.mp4`;
- `assets/audio/depoimento-participante.mp3`;
- `img/poster-mutirao.png`.

| Item | Situação |
|---|---|
| Dez páginas HTML | Listadas na raiz do repositório |
| `favicon.svg` | Listado na raiz do repositório |
| Pastas `assets/`, `css/`, `docs/`, `img/` e `js/` | Listadas na raiz do repositório |
| Arquivos internos das pastas | Conferência completa ainda necessária diretamente no GitHub |
| Seis documentos de apoio em `docs/` | Relação documentada; confirmar presença e versão de cada arquivo no diretório |

A listagem da raiz comprova apenas a presença dos diretórios, não a integridade nem a execução dos arquivos internos.

## 8. Considerações finais

Os testes realizados permitiram verificar diferentes aspectos do projeto Trocaverde, incluindo navegação, estrutura HTML, acessibilidade estrutural, responsividade, validação de código pelo W3C e organização do repositório.

Os resultados documentados demonstram que:

- Não foram encontrados links internos quebrados nas dez páginas verificadas;
- As dez páginas HTML passaram pela validação do Nu Html Checker sem erros ou avisos;
- A folha de estilo `style.css` passou pela validação do W3C sem erros, apresentando 18 alertas informativos;
- O teste de acessibilidade registrado pela equipe apresentou resultado positivo, sem erros ou avisos;
- Os testes de responsividade realizados pelo grupo foram concluídos com sucesso;
- Foram identificadas no código JavaScript rotinas de interação, armazenamento e validação de formulários, embora sua presença não represente comprovação de funcionamento integral;
- A conferência pública do GitHub permitiu observar a disponibilidade e a estrutura principal do repositório.

Dessa forma, os resultados registrados indicam que o projeto apresenta uma estrutura consistente nos aspectos avaliados e atende ao critério de validação HTML e CSS pelo W3C sem erros.

Como continuidade, recomenda-se ampliar os testes funcionais do JavaScript, verificar manualmente a navegação por teclado e leitores de tela, conferir todas as páginas em diferentes resoluções e realizar a conferência completa dos arquivos internos do repositório.
