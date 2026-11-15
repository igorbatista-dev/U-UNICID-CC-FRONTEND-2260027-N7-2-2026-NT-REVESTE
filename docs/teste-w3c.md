# Testes de validação W3C — Trocaverde

Este documento reúne os testes de validação feitos nas páginas e na folha de estilo do site no validador oficial do W3C. Os registros abaixo se limitam às informações do documento de testes da equipe e aos prints do resultado de cada validação.

## 1. Resumo dos testes

| Item testado | Arquivo enviado | Tempo | Resultado | Print |
|---|---|---|---|---|
| Acessibilidade | — | — | Sem erros e sem avisos | `w3c-acessibilidade.png` |
| Contato | `contato (2).html` | 11 ms | Sem erros e sem avisos | `w3c-contato.png` |
| CSS | `style.css` | — | Sem erros (18 alertas informativos) | `w3c-css.png` |
| Galeria | `galeria (1).html` | 8 ms | Sem erros e sem avisos | `w3c-galeria.png` |
| Impacto | `impacto (1).html` | 9 ms | Sem erros e sem avisos | `w3c-impacto.png` |
| Index | `index (1).html` | 11 ms | Sem erros e sem avisos | `w3c-index.png` |
| Mídia | `midia (1).html` | 8 ms | Sem erros e sem avisos | `w3c-midia.png` |
| Notícias | `noticias (4).html` | 11 ms | Sem erros e sem avisos | `w3c-noticias.png` |
| Orçamento | `orcamento_hospedagem (3).html` | 13 ms | Sem erros e sem avisos | `w3c-orcamento.png` |
| Projetos | `projetos (3).html` | 6 ms | Sem erros e sem avisos | `w3c-projetos.png` |
| Sobre | `sobre (1).html` | 8 ms | Sem erros e sem avisos | `w3c-sobre.png` |

## 2. Ferramentas utilizadas

- **HTML:** Nu Html Checker (versão vnu 26.11.9), validador oficial do W3C, com envio do arquivo pela opção de upload e uso do parser HTML.
- **CSS:** validador de CSS do W3C, configurado para CSS nível 3 + SVG.

## 3. Teste de acessibilidade — W3C

- Foi feito um teste utilizando a ferramenta de validação W3C, que analisou o código HTML da página em busca de possíveis erros ou avisos.
- O resultado foi positivo: não foram encontrados erros nem avisos.
- Evidência: `w3c-acessibilidade.png`.

## 4. Validação das páginas HTML

Em todas as páginas, o validador usou o parser HTML e exibiu uma faixa verde com a mensagem "Document checking completed. No errors or warnings to show".

### 4.1 Contato

- Arquivo enviado: `contato (2).html`. Verificação concluída em 11 milissegundos.
- Nenhum erro ou aviso, então não foi necessária nenhuma correção. Página aprovada.
- Evidência: `w3c-contato.png`.

### 4.2 Galeria

- Arquivo enviado: `galeria (1).html`. Verificação concluída em cerca de 8 milissegundos.
- Nenhum erro ou aviso, então não foi necessária nenhuma correção. Página aprovada.
- Evidência: `w3c-galeria.png`.

### 4.3 Impacto

- Arquivo enviado: `impacto (1).html`. Verificação concluída em cerca de 9 milissegundos.
- A página passou de primeira, sem exigir nenhum ajuste.
- Evidência: `w3c-impacto.png`.

### 4.4 Index

- Arquivo enviado: `index (1).html`. Verificação concluída em cerca de 11 milissegundos.
- Por ser a página inicial do site, o resultado limpo indica que não houve necessidade de correção.
- Evidência: `w3c-index.png`.

### 4.5 Mídia

- Arquivo enviado: `midia (1).html`. Verificação concluída em cerca de 8 milissegundos.
- Nada para corrigir; o código da página já estava pronto.
- Evidência: `w3c-midia.png`.

### 4.6 Notícias

- Arquivo enviado: `noticias (4).html` (quarta versão do arquivo). Verificação concluída em cerca de 11 milissegundos.
- Nenhum problema a corrigir.
- Evidência: `w3c-noticias.png`.

### 4.7 Orçamento

- Arquivo enviado: `orcamento_hospedagem (3).html`. Verificação concluída em cerca de 13 milissegundos.
- A página foi validada sem apontamentos.
- Evidência: `w3c-orcamento.png`.

### 4.8 Projetos

- Arquivo enviado: `projetos (3).html`. Verificação concluída em cerca de 6 milissegundos, a mais rápida de todas.
- Nada precisou ser alterado.
- Evidência: `w3c-projetos.png`.

### 4.9 Sobre

- Arquivo enviado: `sobre (1).html`. Verificação concluída em cerca de 8 milissegundos.
- A página passou limpa, sem necessidade de retoque no código.
- Evidência: `w3c-sobre.png`.

## 5. Validação do CSS

- Arquivo testado: `style.css`, no validador de CSS do W3C (CSS nível 3 + SVG).
- O validador exibiu uma faixa verde com a mensagem "Parabéns! Não foram encontrados erros na sua folha de estilo".
- Apareceram 18 alertas, todos informativos e não impeditivos, que não afetaram a aprovação.
- O validador ofereceu o selo "CSS válido" do W3C, caso a equipe queira usá-lo no site.
- Não foi necessário alterar o código.
- Evidência: `w3c-css.png`.

## 6. Conclusão

Todas as páginas HTML testadas foram aprovadas sem erros nem avisos, e a folha de estilo foi aprovada sem erros, com 18 alertas informativos. Isso atende ao critério de aceitação de validar o código HTML/CSS no W3C Validator sem erros.
