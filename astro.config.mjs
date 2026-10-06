// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';
import { readdirSync, readFileSync } from 'node:fs';

/**
 * Endereço do site, configurável por variável de ambiente:
 * - Domínio próprio (padrão):  SITE_URL=https://www.dmadvocacia.com.br  BASE_PATH=/
 * - GitHub Pages (preview):    SITE_URL=https://bernardomonteiro-ui.github.io  BASE_PATH=/DM-ADVOCACIA
 * [TODO — CONFIRMAR COM CLIENTE] domínio definitivo.
 */
const SITE_URL = process.env.SITE_URL ?? 'https://www.dmadvocacia.com.br';
const BASE_PATH = process.env.BASE_PATH ?? '/';

// Enquanto não houver artigos publicados, /artigos fica com noindex e fora do sitemap.
const hasPublishedArticles = readdirSync('./src/content/artigos')
  .filter((f) => f.endsWith('.md'))
  .some((f) => !/^draft:\s*true/m.test(readFileSync(`./src/content/artigos/${f}`, 'utf8')));

export default defineConfig({
  site: SITE_URL,
  base: BASE_PATH,
  trailingSlash: 'never',
  build: { format: 'file' },
  integrations: [
    sitemap({
      filter: (page) => !page.includes('/404') && (hasPublishedArticles || !page.endsWith('/artigos')),
    }),
  ],
  vite: {
    plugins: [tailwindcss()],
  },
});
