/**
 * Caminhos internos com suporte a subdiretório (`base` do Astro).
 *
 * No GitHub Pages o site fica em /DM-ADVOCACIA; no domínio próprio, na raiz.
 * Todo link interno deve passar por `link()` — o código continua usando caminhos
 * lógicos ('/sobre', '/direito-civil') e o prefixo é aplicado aqui.
 */
const BASE = import.meta.env.BASE_URL.replace(/\/$/, '');

/** '/sobre' → '/DM-ADVOCACIA/sobre' (ou '/sobre' na raiz). Links externos passam intactos. */
export function link(path: string): string {
  if (!path.startsWith('/') || path.startsWith('//')) return path;
  if (path === '/') return BASE ? `${BASE}/` : '/';
  return `${BASE}${path}`;
}

/** Remove o prefixo e a extensão .html para comparar com caminhos lógicos. */
export function logicalPath(pathname: string): string {
  const p = BASE && pathname.startsWith(BASE) ? pathname.slice(BASE.length) : pathname;
  return p.replace(/(\/index)?\.html$/, '').replace(/\/$/, '') || '/';
}

/** URL absoluta (canonical, Open Graph, Schema.org). */
export function absoluteUrl(path: string): string {
  return new URL(link(path), import.meta.env.SITE).toString();
}

/** Build de pré-visualização (ex.: GitHub Pages): não indexar. */
export const isNoindexBuild = import.meta.env.PUBLIC_NOINDEX === 'true';
