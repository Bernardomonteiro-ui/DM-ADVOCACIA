// Prepara as fotografias originais do cliente para o site.
// Uso: npm run images  (só precisa rodar quando novas fotos forem adicionadas)
import sharp from 'sharp';
import { mkdir } from 'node:fs/promises';

const SRC = 'materiais';
const OUT = 'src/assets/fotos';
await mkdir(OUT, { recursive: true });
await mkdir('public', { recursive: true });

// Foto 1 — braços cruzados (enquadramento frontal)
await sharp(`${SRC}/deivid-marcolino-bracos-cruzados.jpeg`)
  .jpeg({ quality: 92, mozjpeg: true })
  .toFile(`${OUT}/deivid-marcolino-bracos-cruzados.jpg`);

// Foto 2 — perfil. O original tem uma linha clara de captura de tela no topo: recorta 4px.
const meta2 = await sharp(`${SRC}/deivid-marcolino-perfil.jpeg`).metadata();
await sharp(`${SRC}/deivid-marcolino-perfil.jpeg`)
  .extract({ left: 0, top: 4, width: meta2.width, height: meta2.height - 4 })
  .jpeg({ quality: 92, mozjpeg: true })
  .toFile(`${OUT}/deivid-marcolino-perfil.jpg`);

/* ------------------------------------------------------------------ Logo
   Original do cliente: monograma dourado sobre fundo cinza claro (247,247,247), JPEG 1024².
   Gera versões com fundo transparente. Nas bordas, a cor é "des-misturada" do fundo
   para não aparecer halo claro quando o logo fica sobre o navy. */
const LOGO_SRC = `${SRC}/logo-dm-advocacia.jpeg`;
const LOGO_OUT = 'src/assets/logo';
await mkdir(LOGO_OUT, { recursive: true });

const BG = 247;
async function cutout(region, file) {
  const { data, info } = await sharp(LOGO_SRC).extract(region).raw().toBuffer({ resolveWithObject: true });
  const out = Buffer.alloc(info.width * info.height * 4);
  for (let p = 0, q = 0; p < data.length; p += 3, q += 4) {
    const [r, g, b] = [data[p], data[p + 1], data[p + 2]];
    const d = Math.max(Math.abs(r - BG), Math.abs(g - BG), Math.abs(b - BG));
    const a = Math.min(1, Math.max(0, (d - 10) / 45));
    const unmix = (c) => (a > 0 ? Math.min(255, Math.max(0, Math.round((c - (1 - a) * BG) / a))) : 0);
    out[q] = unmix(r);
    out[q + 1] = unmix(g);
    out[q + 2] = unmix(b);
    out[q + 3] = Math.round(a * 255);
  }
  await sharp(out, { raw: { width: info.width, height: info.height, channels: 4 } })
    .png({ compressionLevel: 9 })
    .toFile(`${LOGO_OUT}/${file}`);
}
// Faixas medidas no original: monograma y 202–612, "ADVOCACIA" y 634–694, "LEX ET ORDO" y 719–754.
await cutout({ left: 252, top: 196, width: 510, height: 424 }, 'logo-monograma.png');
await cutout({ left: 218, top: 628, width: 584, height: 132 }, 'logo-letreiro.png');
await cutout({ left: 218, top: 196, width: 584, height: 564 }, 'logo-completo.png');

// Ícones: monograma sobre navy
async function icon(size, file, pad) {
  const inner = Math.round(size * (1 - pad * 2));
  const mark = await sharp(`${LOGO_OUT}/logo-monograma.png`).resize({ width: inner, height: inner, fit: 'contain', background: { r: 0, g: 0, b: 0, alpha: 0 } }).toBuffer();
  await sharp({ create: { width: size, height: size, channels: 4, background: '#0f1e33' } })
    .composite([{ input: mark, gravity: 'center' }])
    .png()
    .toFile(file);
}
await icon(48, 'public/favicon.png', 0.1);
await icon(180, 'public/apple-touch-icon.png', 0.14);
await icon(512, 'public/logo-dm-advocacia.png', 0.12); // usado no Schema.org (logo da organização)

// Imagem Open Graph padrão (1200x630): foto à direita, marca à esquerda.
const W = 1200, H = 630;
const photo = await sharp(`${OUT}/deivid-marcolino-perfil.jpg`)
  .resize({ width: 640, height: H, fit: 'cover', position: 'right' })
  .toBuffer();

const ogLogo = await sharp(`${LOGO_OUT}/logo-completo.png`).resize({ height: 150 }).toBuffer();

const svg = `
<svg width="${W}" height="${H}" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="fade" x1="0" x2="1">
      <stop offset="0.42" stop-color="#0d1a2b" stop-opacity="1"/>
      <stop offset="0.62" stop-color="#0d1a2b" stop-opacity="0"/>
    </linearGradient>
  </defs>
  <rect width="100%" height="100%" fill="url(#fade)"/>
  <text x="72" y="300" font-family="Georgia, serif" font-size="62" fill="#f4f1ea">Especialistas</text>
  <text x="72" y="368" font-family="Georgia, serif" font-size="62" fill="#f4f1ea">em cada causa.</text>
  <text x="72" y="436" font-family="Georgia, serif" font-style="italic" font-size="62" fill="#d9c6a1">Soluções em cada caso.</text>
  <text x="72" y="540" font-family="Arial, sans-serif" font-size="20" letter-spacing="2" fill="#a9b3c1">PORTO ALEGRE · ATENDIMENTO EM TODO O BRASIL</text>
</svg>`;

await sharp({ create: { width: W, height: H, channels: 3, background: '#0d1a2b' } })
  .composite([
    { input: photo, left: W - 640, top: 0 },
    { input: Buffer.from(svg), left: 0, top: 0 },
    { input: ogLogo, left: 64, top: 56 },
  ])
  .jpeg({ quality: 86, mozjpeg: true })
  .toFile('public/og-default.jpg');

console.log('Imagens preparadas.');
