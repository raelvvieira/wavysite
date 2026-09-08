# Publicação na Hostinger

O projeto completo usa Vite durante o desenvolvimento. A hospedagem final é estática e não precisa executar Node.js.

## Opção mais rápida

1. Abra a pasta `hostinger-files`.
2. Envie **todo o conteúdo interno** dessa pasta para `public_html` na Hostinger.
3. Confirme que o arquivo `.htaccess` também foi enviado.
4. Limpe o cache da hospedagem/CDN, se estiver ativo.

As rotas `/dashboard`, `/politica-de-privacidade` e `/termos-de-uso` já estão preparadas.

## Código-fonte

O restante do pacote contém o código-fonte editável do site. Depois de editar, execute:

```bash
npm install
npm run build
```

O pacote entregue já inclui a versão estática pronta em `hostinger-files`, portanto esses comandos não são necessários para a primeira publicação.
