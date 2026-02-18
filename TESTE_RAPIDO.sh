#!/bin/bash

# VERSÃO SUPER RÁPIDA - Copie e cole no terminal

# Opção 1: Usar script automático (MAIS FÁCIL)
cd ~/projetos/iaapc && ./testar-localmente.sh

# Depois abra: http://localhost:8080

# ═══════════════════════════════════════════════════════════════════

# Opção 2: Python manual (se o script não funcionar)
mkdir ~/teste-iaapc && cd ~/teste-iaapc
cp ~/projetos/iaapc/index.html .
cp -r ~/projetos/iaapc/.next/static .
python3 -m http.server 8080

# Depois abra: http://localhost:8080

# ═══════════════════════════════════════════════════════════════════

# Para parar o servidor em qualquer opção:
# Ctrl+C  (no terminal)
