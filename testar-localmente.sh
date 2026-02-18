#!/bin/bash

# Script para testar a landing page IAAPC localmente
# Uso: ./testar-localmente.sh

set -e

# Cores para output
GREEN='\033[0;32m'
BLUE='\033[0;34m'
YELLOW='\033[1;33m'
RED='\033[0;31m'
NC='\033[0m' # No Color

echo -e "${BLUE}╔════════════════════════════════════════════════════════════╗${NC}"
echo -e "${BLUE}║   Testador Local - Landing Page IAAPC                     ║${NC}"
echo -e "${BLUE}╚════════════════════════════════════════════════════════════╝${NC}"
echo ""

# Pasta de teste
TESTE_DIR="$HOME/teste-iaapc"
PROJETO_DIR="$HOME/projetos/iaapc"

echo -e "${YELLOW}📁 Preparando ambiente de teste...${NC}"
echo ""

# Criar pasta
if [ -d "$TESTE_DIR" ]; then
    echo -e "${YELLOW}🔄 Pasta de teste já existe. Limpando...${NC}"
    rm -rf "$TESTE_DIR"
fi

mkdir -p "$TESTE_DIR"
echo -e "${GREEN}✓ Pasta criada: $TESTE_DIR${NC}"

# Copiar index.html
if [ -f "$PROJETO_DIR/index.html" ]; then
    cp "$PROJETO_DIR/index.html" "$TESTE_DIR/"
    echo -e "${GREEN}✓ Arquivo index.html copiado${NC}"
else
    echo -e "${RED}✗ ERRO: index.html não encontrado em $PROJETO_DIR${NC}"
    exit 1
fi

# Copiar pasta static
if [ -d "$PROJETO_DIR/.next/static" ]; then
    cp -r "$PROJETO_DIR/.next/static" "$TESTE_DIR/"
    echo -e "${GREEN}✓ Pasta static/ copiada${NC}"
else
    echo -e "${RED}✗ ERRO: .next/static não encontrado${NC}"
    exit 1
fi

# Verificar estrutura
echo ""
echo -e "${YELLOW}📋 Estrutura criada:${NC}"
tree "$TESTE_DIR" -L 2 2>/dev/null || ls -lR "$TESTE_DIR" | head -20

echo ""
echo -e "${GREEN}✓ Ambiente pronto!${NC}"
echo ""

# Detectar porta disponível
PORTA=8080
while lsof -Pi :$PORTA -sTCP:LISTEN -t >/dev/null 2>&1 ; do
    PORTA=$((PORTA + 1))
done

echo -e "${BLUE}═══════════════════════════════════════════════════════════${NC}"
echo -e "${GREEN}🚀 Iniciando servidor...${NC}"
echo ""
echo -e "${YELLOW}📌 Acesse no navegador:${NC}"
echo -e "${BLUE}   http://localhost:$PORTA${NC}"
echo ""
echo -e "${YELLOW}🛑 Para parar o servidor:${NC}"
echo -e "${BLUE}   Ctrl+C${NC}"
echo ""
echo -e "${YELLOW}📖 Dicas:${NC}"
echo -e "   • Abra DevTools (F12) para ver erros"
echo -e "   • Vá para aba 'Network' para verificar carregamento"
echo -e "   • Teste responsividade (F12 → ícone mobile)"
echo ""
echo -e "${BLUE}═══════════════════════════════════════════════════════════${NC}"
echo ""

# Iniciar servidor
cd "$TESTE_DIR"
python3 -m http.server $PORTA
