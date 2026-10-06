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

// Imagem Open Graph padrão (1200x630): foto à direita, marca à esquerda.
const W = 1200, H = 630;
const photo = await sharp(`${OUT}/deivid-marcolino-perfil.jpg`)
  .resize({ width: 640, height: H, fit: 'cover', position: 'right' })
  .toBuffer();

const svg = `
<svg width="${W}" height="${H}" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="fade" x1="0" x2="1">
      <stop offset="0.42" stop-color="#0d1a2b" stop-opacity="1"/>
      <stop offset="0.62" stop-color="#0d1a2b" stop-opacity="0"/>
    </linearGradient>
  </defs>
  <rect width="100%" height="100%" fill="url(#fade)"/>
  <rect x="72" y="96" width="48" height="2" fill="#b89a67"/>
  <text x="72" y="150" font-family="Georgia, serif" font-size="22" letter-spacing="6" fill="#b89a67">DM ADVOCACIA</text>
  <text x="72" y="270" font-family="Georgia, serif" font-size="62" fill="#f4f1ea">Especialistas</text>
  <text x="72" y="340" font-family="Georgia, serif" font-size="62" fill="#f4f1ea">em cada causa.</text>
  <text x="72" y="410" font-family="Georgia, serif" font-style="italic" font-size="62" fill="#d9c6a1">Soluções em cada caso.</text>
  <text x="72" y="540" font-family="Arial, sans-serif" font-size="20" letter-spacing="2" fill="#a9b3c1">PORTO ALEGRE · ATENDIMENTO EM TODO O BRASIL</text>
</svg>`;

await sharp({ create: { width: W, height: H, channels: 3, background: '#0d1a2b' } })
  .composite([
    { input: photo, left: W - 640, top: 0 },
    { input: Buffer.from(svg), left: 0, top: 0 },
  ])
  .jpeg({ quality: 86, mozjpeg: true })
  .toFile('public/og-default.jpg');

console.log('Imagens preparadas.');
