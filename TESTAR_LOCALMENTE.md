# 🧪 TESTAR LOCALMENTE - Guia Completo

## ✅ Você Tem Tudo Instalado

- ✅ Python 3.12.3
- ✅ Node.js v24.13.0

---

## 🚀 OPÇÃO 1: Python (Mais Simples)

### Passo 1: Criar estrutura de teste

```bash
# Crie uma pasta de teste
mkdir -p ~/teste-iaapc
cd ~/teste-iaapc

# Copie o index.html
cp ~/projetos/iaapc/index.html .

# Copie a pasta estática
cp -r ~/projetos/iaapc/.next/static .

# Estrutura criada:
# teste-iaapc/
# ├── index.html
# └── static/
#     ├── chunks/
#     ├── media/
#     └── 4AtZuf2M_QNzauYt6ddUp/
```

### Passo 2: Iniciar servidor Python

```bash
# Entre na pasta
cd ~/teste-iaapc

# Python 3.12+ (mais rápido e moderno)
python3 -m http.server 8080

# OU (alternativa compatível com versões antigas)
python3 -m http.server 8080 --bind 127.0.0.1
```

### Passo 3: Acessar no navegador

```
http://localhost:8080
```

---

## 🚀 OPÇÃO 2: Node.js (Recomendado)

### Passo 1: Instalar http-server

```bash
npm install -g http-server
```

### Passo 2: Criar estrutura de teste

```bash
mkdir -p ~/teste-iaapc
cd ~/teste-iaapc
cp ~/projetos/iaapc/index.html .
cp -r ~/projetos/iaapc/.next/static .
```

### Passo 3: Iniciar servidor

```bash
http-server -p 8080 -c-1
```

Flags:
- `-p 8080` → Usa porta 8080
- `-c-1` → Desabilita cache (bom para testes)

### Passo 4: Acessar no navegador

```
http://localhost:8080
```

---

## 🎯 OPÇÃO 3: Live Server (VS Code)

### Passo 1: Instalar extensão

1. Abra VS Code
2. **Extensions** (Ctrl+Shift+X)
3. Procure por: **Live Server**
4. Instale (de Ritwick Dey)

### Passo 2: Preparar pasta

```bash
mkdir -p ~/teste-iaapc
cd ~/teste-iaapc
cp ~/projetos/iaapc/index.html .
cp -r ~/projetos/iaapc/.next/static .
```

### Passo 3: Abrir com Live Server

1. Abra a pasta `~/teste-iaapc` no VS Code
2. Clique com direito em `index.html`
3. Selecione: **Open with Live Server**
4. Abre automaticamente no navegador

---

## 📋 SCRIPT DE TESTE AUTOMÁTICO

Criei um script para facilitar:

```bash
#!/bin/bash

# Criar pasta de teste
TESTE_DIR="$HOME/teste-iaapc"
mkdir -p "$TESTE_DIR"

# Limpar conteúdo antigo
rm -rf "$TESTE_DIR"/*

# Copiar arquivos
cp ~/projetos/iaapc/index.html "$TESTE_DIR/"
cp -r ~/projetos/iaapc/.next/static "$TESTE_DIR/"

# Entrar na pasta
cd "$TESTE_DIR"

# Iniciar servidor Python
echo "🚀 Servidor iniciado em http://localhost:8080"
echo ""
echo "Estrutura de teste criada em: $TESTE_DIR"
echo ""
python3 -m http.server 8080
```

**Para usar:**

```bash
# Salve como: ~/start-server.sh
chmod +x ~/start-server.sh
~/start-server.sh
```

---

## 🧪 TESTAR APÓS INICIAR

### 1. Verificar DevTools

Abra: **http://localhost:8080**

Pressione: **F12**

Vá para aba: **Network**

Recarregue: **F5**

Procure por:
- ✅ `200` (verde) = arquivo carregou
- ❌ `404` (vermelho) = arquivo não encontrado

### 2. Verificar Console

Vá para aba: **Console**

Procure por:
- ✅ Sem erros em vermelho
- ✅ Se houver warnings (amarelo), é ok

### 3. Verificar Visual

A página deve mostrar:
- ✅ Logo com coração rosa
- ✅ Título "Acolhimento e Esperança"
- ✅ Buttons coloridos
- ✅ Tudo com estilos corretos

---

## 🔍 COMPARAÇÃO DAS OPÇÕES

| Opção | Vantagem | Desvantagem | Comando |
|-------|----------|-------------|---------|
| **Python** | Simples, sem instalação extra | Um pouco mais lento | `python3 -m http.server 8080` |
| **Node.js** | Rápido, muitas opções | Precisa npm | `http-server -p 8080 -c-1` |
| **Live Server** | Recarrega automático | GUI necessário | Extensão VS Code |

**Recomendação:** Use **Python** (mais simples) ou **Node.js** (mais rápido)

---

## 🚀 PASSO A PASSO RÁPIDO (Python)

```bash
# 1. Criar pasta
mkdir ~/teste-iaapc && cd ~/teste-iaapc

# 2. Copiar arquivos
cp ~/projetos/iaapc/index.html .
cp -r ~/projetos/iaapc/.next/static .

# 3. Iniciar servidor
python3 -m http.server 8080

# 4. No navegador: http://localhost:8080
```

**Pronto!** Sua landing page está sendo servida localmente.

---

## 💡 DICAS

### Para parar o servidor:

```
Ctrl+C  (no terminal onde o servidor está rodando)
```

### Para alterar a porta:

```bash
python3 -m http.server 9000  # usa porta 9000 ao invés de 8080
```

### Para testar responsividade:

1. Abra DevTools (F12)
2. Clique no ícone mobile (celular)
3. Teste em diferentes tamanhos

### Para limpar cache:

```bash
# DevTools aberto (F12)
Ctrl+Shift+Del  # Limpa cache do navegador
Ctrl+F5         # Force reload
```

---

## 🎯 VERIFICAÇÃO FINAL

Depois de acessar `http://localhost:8080`, verifique:

- [ ] Página carrega sem erros
- [ ] Cores e estilos aparecem
- [ ] Responsiva em mobile (F12 → celular)
- [ ] Botões são clicáveis
- [ ] Sem erros 404 no DevTools → Network

Se tudo ok = **Pronto para fazer upload para Hostgator!**

---

## 📝 Próximas Etapas

Após testar localmente e confirmar que funciona:

1. Faça upload do `index.html` correto para `/public_html/`
2. Garanta que `static/` está em `/public_html/static/`
3. Acesse seu domínio
4. Limpe cache (Ctrl+Shift+Del)
5. Recarregue (Ctrl+F5)

---

## ❓ Problemas Ao Testar Localmente?

Se der erro mesmo localmente:

1. Verifique se a estrutura está correta:
   ```bash
   ls -la ~/teste-iaapc/
   # Deve mostrar:
   # index.html
   # static/
   ```

2. Se não, refaça os comandos de cópia

3. Se ainda tiver erro, abra DevTools (F12) → Network e veja qual arquivo não carrega

---

**Agora é hora de testar!** ✅
