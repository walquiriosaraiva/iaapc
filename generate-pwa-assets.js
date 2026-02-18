let sharp;
let path;

// Cores do design
const bgColor = '#1f2937';
const textColor = '#ffffff';

async function generateIcon(size) {
  const svg = `
    <svg width="${size}" height="${size}" xmlns="http://www.w3.org/2000/svg">
      <rect width="${size}" height="${size}" fill="${bgColor}"/>
      <text x="${size / 2}" y="${size / 2}" font-size="${Math.floor(size * 0.4)}" 
            font-weight="bold" text-anchor="middle" dominant-baseline="middle" 
            fill="${textColor}" font-family="Arial, sans-serif">
        IA
      </text>
      <circle cx="${size * 0.8}" cy="${size * 0.2}" r="${size * 0.15}" fill="${textColor}" opacity="0.3"/>
    </svg>
  `;

  const outputPath = path.join(__dirname, 'public', `icon-${size}.png`);
  
  try {
    await sharp(Buffer.from(svg)).png().toFile(outputPath);
    console.log(`✓ Ícone ${size}x${size} criado: ${outputPath}`);
  } catch (error) {
    console.error(`✗ Erro ao criar ícone ${size}x${size}:`, error);
  }
}

async function generateScreenshot() {
  const width = 540;
  const height = 720;
  const svg = `
    <svg width="${width}" height="${height}" xmlns="http://www.w3.org/2000/svg">
      <rect width="${width}" height="${height}" fill="${bgColor}"/>
      <rect width="${width}" height="100" fill="#059669"/>
      <text x="${width / 2}" y="60" font-size="40" font-weight="bold" 
            text-anchor="middle" dominant-baseline="middle" fill="${textColor}" 
            font-family="Arial, sans-serif">
        IAAPC
      </text>
      <text x="${width / 2}" y="${height / 2}" font-size="32" 
            text-anchor="middle" dominant-baseline="middle" fill="${textColor}" 
            font-family="Arial, sans-serif">
        Acolhimento<tspan x="${width / 2}" dy="50">Esperança</tspan><tspan x="${width / 2}" dy="50">Suporte</tspan>
      </text>
    </svg>
  `;

  const outputPath = path.join(__dirname, 'public', 'screenshot-1.png');
  
  try {
    await sharp(Buffer.from(svg)).png().toFile(outputPath);
    console.log(`✓ Screenshot criado: ${outputPath}`);
  } catch (error) {
    console.error(`✗ Erro ao criar screenshot:`, error);
  }
}

async function main() {
  ({ default: sharp } = await import('sharp'));
  path = await import('node:path');
  console.log('🎨 Gerando ícones e assets do PWA...\n');
  
  try {
    await generateIcon(192);
    await generateIcon(512);
    await generateScreenshot();
    console.log('\n✅ PWA assets gerados com sucesso!');
  } catch (error) {
    console.error('Erro geral:', error);
    process.exit(1);
  }
}

main();
