# Deploying to GitHub Pages

Este projeto usa [Vite](https://vitejs.dev/) com React e pode ser hospedado de maneira gratuita no GitHub Pages. Um workflow de GitHub Actions foi adicionado para automatizar o processo de build e deploy.

## Passos para publicar

1. Certifique-se de que o repositório está hospedado no GitHub.
2. Altere, se necessário, o nome do repositório utilizado no caminho base editando `vite.config.ts`.
3. Habilite o GitHub Pages nas configurações do repositório, escolhendo a opção "GitHub Actions" como origem.
4. Ao realizar um push para o branch `main`, o workflow `Deploy to GitHub Pages` será executado e publicá o conteúdo da pasta `dist`.

Após a execução do workflow, seu site estará disponível em `https://<usuario>.github.io/<nome-do-repositorio>/`.
