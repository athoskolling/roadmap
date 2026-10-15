# Roadmap para dev júnior (2027)

Página única (HTML, CSS e JavaScript puros, sem build) com as etapas do roadmap,
requisitos e testes de cada uma. O progresso é salvo no navegador e, opcionalmente,
em um Gist secreto do GitHub.

## Publicar no GitHub Pages

1. Crie um repositório público chamado `roadmap` na sua conta.
2. Envie os arquivos:

   ```bash
   git init -b main
   git add .
   git commit -m "Roadmap inicial"
   git remote add origin https://github.com/SEU_USUARIO/roadmap.git
   git push -u origin main
   ```

3. No GitHub, vá em **Settings → Pages**, em *Source* escolha **Deploy from a branch**,
   branch `main` e pasta `/ (root)`.
4. Em alguns minutos, o site estará em `https://SEU_USUARIO.github.io/roadmap/`.

## Salvar o progresso na nuvem

1. Crie um token clássico em **GitHub → Settings → Developer settings → Personal access tokens → Tokens (classic)**
   com apenas o escopo `gist`.
2. Na página, cole o token em **Conectar**. O site cria um Gist secreto com o seu progresso.
3. A partir daí, cada item marcado é salvo automaticamente no Gist.

O token fica somente no `localStorage` do seu navegador. Ele nunca é enviado para o repositório.
Se usar um computador que não é seu, clique em **Desconectar** ao terminar.

## Estrutura

- `index.html`: interface, páginas de detalhe (via `#/item/<id>`), efeitos e sincronização.
- `content.js`: todo o conteúdo do roadmap. Requisitos têm explicação, passos, exemplo,
  critérios e armadilhas. Testes têm enunciado, critérios, dicas progressivas e solução
  de referência (escondida até você confirmar que tentou).
- `README.md`: este arquivo.

Para editar requisitos ou testes, altere o `content.js`.
Cada item precisa de um `id` único, que é a chave usada para guardar o progresso:
não mude o `id` de um item que você já marcou.
