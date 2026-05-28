# IAAPC - Instituto Abracar de Apoio aos Portadores de Cancer

Site institucional do IAAPC com foco em informacao, acolhimento e captacao de doacoes para apoio a pacientes com cancer e suas familias em Planaltina-DF.

## Visao Geral

O projeto foi desenvolvido em Next.js (App Router) com TypeScript e inclui:

- Pagina inicial institucional
- Pagina de doacao via Pix
- SEO tecnico (metadata, robots e sitemap)
- Suporte a PWA (manifesto e service worker)

## Tecnologias

- Next.js 15
- React 19
- TypeScript
- Tailwind CSS 4
- ESLint 9

## Estrutura Principal

- `src/app/page.tsx`: rota principal
- `src/app/doacao/page.tsx`: rota de doacao
- `src/app/layout.tsx`: layout global e metadata base
- `src/app/robots.ts`: regras de indexacao
- `src/app/sitemap.ts`: sitemap
- `src/components/HomePageClient.tsx`: interface da home
- `src/components/DoacaoPageClient.tsx`: interface da pagina de doacao
- `src/components/InstallPWA.tsx`: fluxo de instalacao PWA
- `public/manifest.json`: configuracao PWA
- `public/sw.js`: service worker

## Requisitos

- Node.js 20+
- npm 10+

## Execucao Local

1. Instale as dependencias:

```bash
npm install
```

2. Rode em desenvolvimento:

```bash
npm run dev
```

3. Acesse no navegador:

```text
http://localhost:3000
```

## Scripts Disponiveis

- `npm run dev`: inicia ambiente de desenvolvimento com Turbopack
- `npm run build`: gera build de producao
- `npm run start`: inicia o servidor de producao
- `npm run lint`: executa validacao de codigo com ESLint

## Deploy

Este repositorio possui guias dedicados para publicacao e manutencao:

- `DEPLOY_RAPIDO.md`
- `DEPLOY_HOSTGATOR.md`
- `README_DEPLOY.md`
- `UPLOAD_HOSTGATOR.md`

## PWA

Recursos de Progressive Web App ja estao configurados no projeto. Para detalhes de instalacao e ajustes:

- `PWA_SETUP.md`
- `BOTAO_INSTALACAO_PWA.md`

## SEO

- Metadata por rota (home e doacao)
- URL canonica
- Open Graph
- Arquivos `robots.ts` e `sitemap.ts`

## Licenca

Este projeto nao possui licenca definida no momento.
