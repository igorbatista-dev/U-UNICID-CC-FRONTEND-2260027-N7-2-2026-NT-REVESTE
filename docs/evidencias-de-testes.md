# Evidências de testes — Trocaverde

## 1. Navegação e links internos

Um script percorreu as dez páginas do site e verificou os links internos, as folhas de estilo e as âncoras.

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

**Resultado:** não foram identificados problemas nos links verificados. O documento também registra a presença do menu de navegação nas dez páginas e o uso de `aria-current="page"` para identificar a página ativa.

## 2. Estrutura HTML e verificações de acessibilidade

Nas dez páginas, foram verificadas as seguintes características:

- `lang="pt-BR"`;
- presença do elemento `<title>` e da meta description;
- existência de exatamente um `<h1>`;
- presença das regiões semânticas `<header>`, `<nav>`, `<main>` e `<footer>`;
- correspondência entre os atributos `for` dos elementos `<label>` e os `id` dos campos;
- ausência de imagens sem o atributo `alt`;
- identificação acessível das ilustrações SVG da galeria por meio de `role="img"` e `aria-label`.

Essas verificações ajudam a identificar problemas estruturais e aspectos relacionados à acessibilidade. Entretanto, não substituem testes manuais com teclado e leitores de tela.

## 3. Validação HTML e CSS — W3C

O grupo realizou testes utilizando os validadores oficiais do W3C para verificar a estrutura HTML das páginas e a folha de estilo CSS do projeto. Os resultados foram registrados por meio de capturas de tela.

### 3.1. Validação das páginas HTML

As páginas foram submetidas ao **Nu Html Checker**, versão `vnu 26.11.9`, por meio da opção de upload de arquivos.

Em todas as dez páginas, o validador apresentou a mensagem:

`Document checking completed. No errors or warnings to show`

Isso significa que os arquivos enviados foram verificados sem a identificação de erros ou avisos pelo validador.

| Página validada | Evidência registrada | Resultado |
|---|---|---|
| `index.html` | `w3c-index.png` | Aprovada — sem erros ou avisos |
| `sobre.html` | `w3c-sobre.png` | Aprovada — sem erros ou avisos |
| `projetos.html` | `w3c-projetos.png` | Aprovada — sem erros ou avisos |
| `impacto.html` | `w3c-impacto.png` | Aprovada — sem erros ou avisos |
| `acessibilidade.html` | `w3c-acessibilidade.png` | Aprovada — sem erros ou avisos |
| `galeria.html` | `w3c-galeria.png` | Aprovada — sem erros ou avisos |
| `midia.html` | `w3c-midia.png` | Aprovada — sem erros ou avisos |
| `noticias.html` | `w3c-noticias.png` | Aprovada — sem erros ou avisos |
| `contato.html` | `w3c-contato.png` | Aprovada — sem erros ou avisos |
| `orcamento_hospedagem.html` | `w3c-orcamento.png` | Aprovada — sem erros ou avisos |

**Resultado:** as dez páginas HTML apresentaram resultados positivos na validação realizada pelo W3C, sem necessidade de correções apontadas pela ferramenta.

### 3.2. Validação da folha de estilo CSS

A folha de estilo `style.css` também foi submetida ao validador de CSS do W3C, configurado para **CSS nível 3 + SVG**.

O resultado apresentou a mensagem:

`Parabéns! Não foram encontrados erros na sua folha de estilo`

Durante a análise, foram identificados 18 avisos informativos, mas nenhum erro de validação.

| Arquivo | Evidência registrada | Resultado |
|---|---|---|
| `style.css` | `w3c-css.png` | Aprovado — sem erros; 18 avisos informativos |

**Resultado:** a folha de estilo foi aprovada na validação, sem erros identificados pelo W3C.

## 4. Testes de responsividade

O grupo realizou testes de responsividade para verificar a adaptação do site a diferentes tamanhos de tela, observando a organização dos elementos, a navegação e a apresentação do conteúdo.

Na página inicial, foram registradas as seguintes verificações no Chromium:

| Largura de tela | Resultado registrado |
|---:|---|
| 1280 px | Página aberta para verificação em resolução de computador |
| 390 px | Sem rolagem horizontal; menu adaptado para apresentação compacta |

Durante os testes, o grupo verificou que o site se adapta adequadamente às dimensões de tela utilizadas, mantendo a organização visual e a navegação.

**Resultado:** os testes de responsividade realizados pelo grupo foram concluídos com sucesso.

## 5. Observação sobre o JavaScript

O código JavaScript analisado contém implementações de validação do formulário, armazenamento de rascunho em `localStorage` e diversas interações com o DOM.

Isso confirma a presença dessas rotinas no código apresentado, mas não comprova, por si só, que todos os comportamentos funcionem corretamente na versão publicada.

A validação apresentada verifica campos obrigatórios, formato básico de e-mail e tamanho mínimo. Não há verificação explícita dos padrões de telefone e CEP. O script também define `aria-invalid="true"`; o destaque visual depende de CSS correspondente.

O envio ao Formspree depende de conexão, configuração válida do endpoint e resposta do serviço.

O rascunho é armazenado no navegador e inclui os valores dos campos do formulário.

## 6. Conferência pública do GitHub

Foi realizada uma conferência da página principal do repositório público para observar sua disponibilidade e estrutura geral.

| Verificação | Resultado observado |
|---|---|
| Acesso ao repositório | Repositório público e acessível |
| Estrutura principal | Dez arquivos HTML e pastas `assets/`, `css/`, `docs/`, `img/` e `js/` visíveis na raiz |
| Histórico de commits | A página exibia cinco commits na consulta |

A visualização da página inicial do repositório não substitui os testes funcionais, de acessibilidade, responsividade ou validação W3C.

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

Os testes realizados permitiram verificar diferentes aspectos do projeto Trocaverde, incluindo navegação, estrutura HTML, acessibilidade estrutural, responsividade e validação de código pelo W3C.

Os resultados registrados demonstram que:

- Não foram encontrados links internos quebrados nas dez páginas verificadas.
- As dez páginas HTML passaram pela validação do Nu Html Checker sem erros ou avisos.
- A folha de estilo CSS passou pela validação do W3C sem erros, embora tenham sido apresentados 18 avisos informativos.
- Os testes de responsividade realizados pelo grupo apresentaram resultados positivos.
- Foram identificadas no código JavaScript rotinas de interação e validação, embora sua presença não represente comprovação de funcionamento integral.

Dessa forma, os resultados documentados indicam que o projeto apresenta uma estrutura consistente nos aspectos avaliados. As verificações adicionais de funcionamento, acessibilidade prática e integridade dos arquivos internos permanecem importantes para ampliar a cobertura dos testes.
