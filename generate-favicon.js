async function generateHeartFavicon() {
  const { default: sharp } = await import('sharp');
  const path = await import('node:path');
  const size = 64;
  const svg = `
    <svg width="${size}" height="${size}" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64">
      <defs>
        <style>
          .heart {
            fill: #ef4444;
            filter: drop-shadow(0 1px 2px rgba(0,0,0,0.1));
          }
        </style>
      </defs>
      <path class="heart" d="M32 56c-12-10-20-17-20-25 0-6 4-10 9-10 3 0 6 1 8 3 2-2 5-3 8-3 5 0 9 4 9 10 0 8-8 15-20 25z"/>
    </svg>
  `;

  try {
    await sharp(Buffer.from(svg))
      .resize(64, 64, { fit: 'contain', background: { r: 255, g: 255, b: 255, alpha: 1 } })
      .png()
      .toFile(path.join(__dirname, 'public', 'favicon-64.png'));
    
    await sharp(Buffer.from(svg))
      .resize(32, 32, { fit: 'contain', background: { r: 255, g: 255, b: 255, alpha: 1 } })
      .png()
      .toFile(path.join(__dirname, 'public', 'favicon-32.png'));

    console.log('✓ Favicon 32x32 criado');
    console.log('✓ Favicon 64x64 criado');
  } catch (error) {
    console.error('✗ Erro ao criar favicon:', error);
  }
}

generateHeartFavicon().then(() => {
  console.log('✅ Favicon do coração criado com sucesso!');
});
