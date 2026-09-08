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

**`npm run build` sozinho não atualiza `hostinger-files/`.**

O build gera `dist/client/`, que contém os assets (JS, CSS, imagens) mas **não**
os arquivos `index.html` das páginas — o vinext compila um Worker que renderiza
o HTML sob demanda, e a Hostinger não executa esse Worker.

Os HTML de `hostinger-files/` são capturas pré-renderizadas das páginas. Para
atualizá-los é preciso subir o servidor e salvar o HTML de cada rota:

```bash
npm run build
npm start                      # em outro terminal
curl -s localhost:3000/                        > hostinger-files/index.html
curl -s localhost:3000/dashboard               > hostinger-files/dashboard/index.html
curl -s localhost:3000/politica-de-privacidade > hostinger-files/politica-de-privacidade/index.html
curl -s localhost:3000/termos-de-uso           > hostinger-files/termos-de-uso/index.html
```

Também copie os assets novos de `dist/client/assets/` para
`hostinger-files/assets/`, já que os nomes mudam a cada build (hash no nome).

Confirme a porta que o `npm start` informa antes de rodar os `curl`.
