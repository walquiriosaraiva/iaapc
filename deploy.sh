#!/bin/bash

# Script para preparar a build para Hostgator
# Use: ./deploy.sh

echo "🚀 Iniciando preparação para deploy na Hostgator..."

# Cores para output
GREEN='\033[0;32m'
BLUE='\033[0;34m'
YELLOW='\033[1;33m'
NC='\033[0m' # No Color

# Step 1: Clean
echo -e "${BLUE}📦 Limpando build anterior...${NC}"
rm -rf out/
npm run build

# Step 2: Criar pasta de deploy
echo -e "${BLUE}📁 Organizando arquivos...${NC}"
mkdir -p hostgator-deploy

# Step 3: Copiar arquivos estáticos
echo -e "${BLUE}📋 Copiando arquivos estáticos...${NC}"
cp -r .next/static hostgator-deploy/
cp -r public/* hostgator-deploy/ 2>/dev/null || true

# Step 4: Criar index.html simples (se usar export)
echo -e "${BLUE}📄 Gerando arquivo de índice...${NC}"
cat > hostgator-deploy/index.html << 'EOF'
<!DOCTYPE html>
<html lang="pt-BR">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>IAAPC - Instituto Abraçar de Apoio aos Portadores de Câncer</title>
    <link rel="stylesheet" href="/static/main.css">
</head>
<body>
    <div id="__next"></div>
    <script src="/static/main.js"></script>
</body>
</html>
EOF

# Step 5: Criar arquivo tar.gz para upload
echo -e "${BLUE}📦 Compactando arquivos...${NC}"
tar -czf hostgator-deploy.tar.gz hostgator-deploy/

# Step 6: Criar instruções
echo -e "${BLUE}📝 Criando instruções de upload...${NC}"
cat > UPLOAD_INSTRUCTIONS.txt << 'EOF'
=== INSTRUÇÕES DE UPLOAD PARA HOSTGATOR ===

1. USANDO FILEZILLA (Recomendado):
   - Abra FileZilla
   - File > Site Manager
   - Host: ftp.seudominio.com.br
   - Protocol: SFTP
   - Username: seu_usuario_ftp
   - Password: sua_senha_ftp
   - Connect
   - Navegue para public_html
   - Faça upload de todos os arquivos em hostgator-deploy/

2. USANDO SFTP NO TERMINAL:
   sftp seu_usuario@seu_dominio.com.br
   cd public_html
   put -r hostgator-deploy/*
   exit

3. USANDO SCP NO TERMINAL:
   scp -r hostgator-deploy/* seu_usuario@seu_dominio.com.br:~/public_html/

4. POR UPLOAD DIRETO NO CPANEL:
   - Acesse cPanel da Hostgator
   - File Manager
   - Navegue para public_html
   - Upload dos arquivos via interface web

=== DEPOIS DO UPLOAD ===
1. Teste acessando seu domínio
2. Se necessário, configure .htaccess para reescrever URLs
3. Configure email de contato em contato@iaapc.org.br

EOF

echo ""
echo -e "${GREEN}✅ Tudo pronto para upload!${NC}"
echo ""
echo -e "${YELLOW}📂 Arquivos criados:${NC}"
echo "  - hostgator-deploy/ (diretório com todos os arquivos)"
echo "  - hostgator-deploy.tar.gz (arquivo compactado para upload)"
echo ""
echo -e "${YELLOW}🚀 Próximos passos:${NC}"
echo "  1. Faça upload dos arquivos para public_html da Hostgator"
echo "  2. Teste em seu domínio"
echo "  3. Verifique os logs se houver problemas"
echo ""
