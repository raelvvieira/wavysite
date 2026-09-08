# Publicação na Hostinger

O projeto usa Vite/vinext durante o desenvolvimento. A hospedagem final é
estática e não executa Node.js: o servidor apenas entrega arquivos prontos.

Os arquivos publicáveis ficam em `hostinger-files/`.

## Deploy pelo GitHub (recomendado)

Na Hostinger, em **Implante de GitHub**:

| Campo | Valor |
| --- | --- |
| Repositório | `wavysite` |
| Branch | `main` |
| Diretório raiz | `public_html` |

A Hostinger copia a **raiz do repositório** para `public_html` — ela não roda
`npm run build`. Como o site publicável está em `hostinger-files/`, o
`.htaccess` da raiz faz a ponte: bloqueia o código-fonte via HTTP e serve as
páginas e os assets a partir daquela pasta.

Por isso o `.htaccess` da raiz precisa continuar versionado. Sem ele, o
`public_html` fica sem página inicial.

## Deploy manual (alternativa)

1. Abra a pasta `hostinger-files`.
2. Envie **todo o conteúdo interno** dessa pasta para `public_html`.
3. Confirme que o `.htaccess` de dentro dela também foi enviado.
4. Limpe o cache da hospedagem/CDN, se estiver ativo.

Nesse formato o conteúdo de `hostinger-files/` vira a raiz do site, e o
`.htaccess` da raiz do repositório não é usado.

## Rotas

`/`, `/dashboard`, `/politica-de-privacidade` e `/termos-de-uso`.

As três últimas dependem das regras de reescrita do `.htaccess`. Sempre
confira-as depois de publicar.

## Atualizar o site depois de editar o código

```bash
npm run build:static
```

Um comando só. Depois: commit de `hostinger-files/`, push para `main` e
publicar na Hostinger.

**Não use `npm run build` sozinho para publicar.** Ele gera `dist/client/` com
os assets, mas **não** os `index.html` das páginas: o vinext compila um Worker
que renderiza o HTML sob demanda, e a hospedagem não executa Worker. Publicar
depois de um `build` puro deixa o site com o HTML antigo — e nada acusa o erro.

O `build:static` faz o ciclo inteiro: descobre as rotas varrendo
`app/**/page.tsx`, roda o build, sobe o servidor de produção, recria
`hostinger-files/` do zero com os assets novos e grava o HTML de cada rota.
Como a pasta é reconstruída, não sobra arquivo de versões anteriores. O
`.htaccess` é preservado entre execuções, já que é escrito à mão e não sai do
build.

Ele aborta em vez de publicar algo quebrado se uma rota não responder 200, se
o HTML contiver caminho da máquina de build (`/workspace/...`, o problema
antigo das fontes) ou se algum arquivo referenciado em `/assets/` não existir
na pasta final.

Rotas novas são detectadas sozinhas: basta criar `app/<rota>/page.tsx`. Some-se
a isso registrar a rota nos dois `.htaccess` (o da raiz e o de
`hostinger-files/`).
