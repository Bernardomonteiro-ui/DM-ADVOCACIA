# DM Advocacia — site institucional

Astro 7 + TypeScript + Tailwind CSS 4. Site estático, sem back-end.

## Comandos

| Comando | O que faz |
|---|---|
| `npm run dev` | Servidor de desenvolvimento (mostra também artigos `draft`) |
| `npm run build` | Gera o site em `dist/` |
| `npm run verify` | Checagem de tipos (astro check) + lint. Rodar separado do build: juntos, excedem a memória livre desta máquina |
| `npm run preview` | Serve o `dist/` localmente |
| `npm run images` | Reprocessa as fotos de `materiais/` para `src/assets/fotos/` e gera `public/og-default.jpg` |

## Publicação (GitHub Pages)

O workflow [.github/workflows/deploy.yml](.github/workflows/deploy.yml) faz o build a cada push na `main` e publica em
`https://bernardomonteiro-ui.github.io/DM-ADVOCACIA/`.

- **Uma vez só:** em *Settings → Pages → Build and deployment → Source*, escolher **GitHub Actions**. No modo
  “Deploy from a branch” o GitHub tenta usar Jekyll e falha (`Invalid YAML front matter in ...astro`).
- O endereço é definido por variáveis de ambiente (`SITE_URL`, `BASE_PATH`). Todo link interno passa por
  `link()` em `src/utils/paths.ts`, por isso o site funciona tanto em subdiretório quanto na raiz.
- O preview usa `PUBLIC_NOINDEX=true` (fora do Google). **Ao ir para o domínio definitivo:** no workflow, trocar
  `SITE_URL` pelo domínio, `BASE_PATH` por `/`, e remover `PUBLIC_NOINDEX`.

## Onde editar

- **Contato, endereço, OAB, WhatsApp, Instagram, horário, domínio** → `src/config/site.ts` (fonte única; nenhum componente repete esses dados).
- **Áreas de atuação** (textos, situações, FAQ, mensagens de WhatsApp, áreas relacionadas) → `src/data/areas.ts`.
- **Formação e equipe** → `src/data/about.ts`. Preenchendo `team`, a lista aparece automaticamente na página Sobre.
- **Artigos** → um `.md` por artigo em `src/content/artigos/`. `draft: true` não é publicado; `example: true` exibe o selo "Conteúdo de exemplo".
- **Logo** → `src/components/ui/Logo.astro` (o site inteiro usa só esse componente; recortes em `src/assets/logo/`).

## Pendências — [TODO — CONFIRMAR COM CLIENTE]

1. **Logo**: em uso o arquivo oficial (materiais/logo-dm-advocacia.jpeg), recortado por `npm run images`. Uma versão vetorial (SVG) deixaria o logo ainda mais nítido.
2. **Domínio definitivo** — hoje `https://www.dmadvocacia.com.br` em `src/config/site.ts` **e** `astro.config.mjs` (ou variável `SITE_URL`). Afeta canonical, sitemap, Open Graph e Schema.
3. **Horário** — interpretado como "atendimento com horário marcado, inclusive fora do horário comercial quando previamente agendado". O Schema.org declara 24h, coerente com o Perfil do Google.
4. **Endereço** — usado o formato do Perfil do Google ("Rua Engenheiro Fernando Abreu Pereira, 107 — Sala 205, Sarandi, 91130-030") para consistência NAP. O briefing traz "Eng. Fernando **de** Abreu Pereira": confirmar a grafia oficial e manter igual no Google.
5. **Douglas Marcolino**: apresentado como Bacharel em Direito, sem OAB informada e sem rótulo de função; o site não o chama de advogado nem o vincula à condução de casos.
6. **Equipe**: nomes, OAB e áreas dos demais profissionais (ex.: o Perfil do Google cita a "Dra. Daniela").
7. **Formação** — instituições e anos das pós-graduações e do MBA.
8. **Revisão jurídica dos textos** das 8 áreas (`src/data/areas.ts`), incluindo as referências legais citadas.
9. **Política de privacidade** — revisão jurídica e nome do provedor de hospedagem.
10. **Artigos** — o único artigo existente é de exemplo (`draft: true`), não publicado. Enquanto não houver artigos reais, `/artigos` fica com `noindex` e fora do sitemap automaticamente.

## Direção de design (manter nas próximas alterações)

- **Paleta:** navy `#0F1E33`, neutro frio `#EFEFEC` (não usar creme amarelado), branco, latão `#A8834E` só em linhas/indicadores; texto em latão usa `#7C5E33` (contraste AA).
- **Tipografia:** Besley (títulos — Clarendon, a letra de documentos oficiais; escolhida em comparação com Newsreader, Brygada 1918, Gloock e Petrona) + Instrument Sans (interface). Peso mínimo da Besley é 400. Itálico **somente** no slogan (“Soluções em cada caso.”) e no lema do logo.
- **Sem rótulos em caixa alta** acima dos títulos; o título diz o que é a seção. Botões em caixa normal; links de texto sublinhados, sem seta.
- **Numeração só em sequência real** (passos do atendimento) e nas 8 áreas (ordem de prioridade comercial). Listas de situações e formação não são numeradas.
- **Motion:** um único momento orquestrado (abertura do hero da Home) + revelação das fotos + declaração de posicionamento. Não adicionar fade em parágrafos: atrasa o LCP (medido: /contato caiu de 3,7 s para 1,9 s ao remover).
- **WhatsApp:** todos os botões de WhatsApp em verde `#25D366` com texto navy (branco sobre esse verde não passa no contraste).
- **Hero da Home:** foto como fundo, dissolvida no navy por gradiente; header transparente com texto claro sobre ele.
- **Hover:** 200 ms (`--dur-hover` em `global.css`).

## Decisões técnicas

- **WhatsApp**: `whatsappLink()` em `site.ts` é o único ponto que monta a URL (`wa.me/5551981170921`), com mensagem contextual por área.
- **Mapa**: carregado sob demanda (fachada), para não pesar no carregamento nem gravar cookies sem ação do visitante.
- **Formulário de contato**: monta a mensagem e abre o WhatsApp. Nenhum dado é enviado ou armazenado pelo site.
- **Motion**: CSS + um IntersectionObserver pequeno; respeita `prefers-reduced-motion`; sem JS o conteúdo fica visível.
- **Fontes**: apenas o eixo de peso das variáveis (≈105 KB, antes ≈330 KB), auto-hospedadas e com preload.
- **Navegação**: Speculation Rules com `eagerness: conservative` (pré-renderiza ao tocar/clicar). `moderate` foi testado e descartado.
- **SEO**: o H1 das páginas internas inclui a intenção de busca (“Advogado trabalhista em Porto Alegre” + “Direito Trabalhista”); descrições ≤ 160 caracteres.
- **Privacidade**: `/politica-de-privacidade` descreve o funcionamento real (sem cookies/analytics). Atualizar se forem adicionadas ferramentas de análise ou pixel.
- **SEO**: title/description únicos, canonical, Open Graph, sitemap, robots.txt e JSON-LD (LegalService, Person, WebSite, WebPage, Service, BreadcrumbList, FAQPage). Sem avaliações, estrelas ou preços.
- **Hospedagem**: qualquer host estático (Netlify, Vercel, Cloudflare Pages). Configurar o host para servir `/pagina` a partir de `pagina.html` (padrão nesses serviços).
