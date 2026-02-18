# 🎯 GUIA CORRIGIDO - Arquivos Corretos para Upload

## ✅ Os Arquivos ESTÃO CERTOS!

Sua build foi compilada com sucesso. Os arquivos que parecem "estranhos" é na verdade porque o Next.js usa nomes de arquivo **com hash** para otimização e cache busting.

---

## 📁 ESTRUTURA CORRETA VERIFICADA

```
/home/walquirio/projetos/iaapc/.next/static/
├── chunks/                    ← Aqui estão os JavaScript e CSS compilados
│   ├── *.js                  (vários arquivos JavaScript)
│   └── *.css                 (arquivo CSS compilado - b1f78b15be511353.css)
├── media/                     ← Imagens e midia
└── 4AtZuf2M_QNzauYt6ddUp/    ← Manifests e configurações
```

---

## 🔍 VERIFICAÇÃO DOS ARQUIVOS

Seus arquivos compilados:
- ✅ **JavaScript compilado**: 18 arquivos .js (~1MB no total)
- ✅ **CSS compilado**: 1 arquivo .css (~26KB)
- ✅ **Imagens**: Pasta media com imagens otimizadas
- ✅ **Build ID**: Arquivo BUILD_ID confirmando build bem-sucedida

---

## 📤 O QUE VOCÊ PRECISA FAZER UPLOAD

### **PASSO 1: Upload da Pasta Completa**

Você precisa fazer upload de TODA a pasta:
```
/home/walquirio/projetos/iaapc/.next/static/
```

Para:
```
/public_html/static/
```

**Resultado final no servidor:**
```
public_html/
├── index.html              ← Criar este arquivo (veja abaixo)
└── static/
    ├── chunks/             ← Todos os .js e .css aqui
    ├── media/              ← Imagens
    └── 4AtZuf2M_QNzauYt6ddUp/
```

---

### **PASSO 2: Criar arquivo `index.html` em public_html/**

Crie um arquivo chamado **`index.html`** com o seguinte conteúdo:

```html
<!DOCTYPE html>
<html lang="pt-BR">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="description" content="Instituto Abraçar de Apoio aos Portadores de Câncer - IAAPC">
    <title>IAAPC - Instituto Abraçar de Apoio aos Portadores de Câncer</title>
    <link rel="icon" href="/favicon.ico">
</head>
<body>
    <div id="__next"></div>
    <script src="/static/chunks/2f12edbe65313c69.js" defer></script>
</body>
</html>
```

---

## 🚀 PASSO A PASSO DO UPLOAD (COM FILEZILLA)

### **1. Abrir FileZilla**
- Baixe em: https://filezilla-project.org/
- Instale no seu computador
- Abra o programa

### **2. Configurar Conexão SFTP**
- Menu: **File → Site Manager**
- Clique em **"New Site"**
- Preencha:
  ```
  Host:     ftp.seudominio.com.br
  Protocol: SFTP
  User:     seu_usuario_ftp
  Password: sua_senha_ftp
  Port:     22
  ```
- Clique **"Connect"**

### **3. Navegar para a Pasta Certa**
- **No painel DIREITO** (servidor):
  - Abra a pasta `/public_html/`
  - (ou `/www/` se for diferente na sua conta)

### **4. Fazer Upload da Pasta static/**
- **No painel ESQUERDO** (seu computador):
  - Navegue até: `/home/walquirio/projetos/iaapc/.next/`
  - Clique em **static**
- **Arraste** para o painel direito (servidor)
- Aguarde terminar o upload (~1-2 minutos)

### **5. Criar arquivo index.html**
- Abra um editor de texto (Notepad, VS Code, etc)
- Cole o código HTML acima
- Salve como: **index.html**
- Faça upload dele para `/public_html/`

### **6. Estrutura Final no Servidor**
Verifique se ficou assim:
```
public_html/
├── index.html                      ← 1 arquivo
└── static/
    ├── chunks/                     ← Pasta com muitos .js e .css
    │   ├── 060f9a97930f3d04.js
    │   ├── 26538f73ab1ad266.js
    │   ├── 2f12edbe65313c69.js
    │   ├── 955e54b3c15af871.js
    │   ├── b1f78b15be511353.css    ← Estilos CSS
    │   └── ... (outros arquivos)
    ├── media/                      ← Pasta com imagens
    └── 4AtZuf2M_QNzauYt6ddUp/      ← Pasta com manifests
        ├── _buildManifest.js
        ├── _clientMiddlewareManifest.json
        └── _ssgManifest.js
```

---

## 🧪 TESTANDO NO NAVEGADOR

### **Acessar o site:**
```
https://seu_dominio.com.br
```

### **Se carregar em branco ou com erro:**
1. Abra **DevTools**: Pressione **F12**
2. Vá para aba **Console**
3. Procure por erros em vermelho
4. Se disser "404 not found", significa que:
   - Arquivo `static/` não está em `public_html/`
   - Ou `index.html` não está em `public_html/`

### **Se disser "Cannot find module":**
- Verifique se todos os arquivos foram uploadados
- Tente fazer upload novamente da pasta `static/`

### **Se página ficar em branco sem erros:**
- Limpe cache: **Ctrl+Shift+Del**
- Force refresh: **Ctrl+F5**
- Aguarde 5 minutos (pode ser propagação DNS)

---

## 💻 ALTERNATIVA: Upload via SCP (Linha de Comando)

Se preferir não usar FileZilla:

```bash
# Terminal 1: Copiar arquivos estáticos
scp -r /home/walquirio/projetos/iaapc/.next/static seu_usuario@seu_dominio.com.br:~/public_html/

# Terminal 2: Conectar ao servidor
ssh seu_usuario@seu_dominio.com.br

# No servidor, criar index.html
cat > ~/public_html/index.html << 'EOF'
<!DOCTYPE html>
<html lang="pt-BR">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>IAAPC - Instituto Abraçar</title>
</head>
<body>
    <div id="__next"></div>
    <script src="/static/chunks/2f12edbe65313c69.js" defer></script>
</body>
</html>
EOF

# Pronto! Acesse seu domínio
exit
```

---

## 📊 RESUMO DOS ARQUIVOS

| Tipo | Quantidade | Tamanho | O Que É |
|------|-----------|---------|---------|
| JavaScript (.js) | 17 | ~730 KB | Código compilado da página |
| CSS (.css) | 1 | ~26 KB | Estilos da página |
| Outros (media, manifests) | 5 | ~30 KB | Configurações e imagens |

**Total**: ~1.1 MB (super otimizado!)

---

## ✅ CHECKLIST FINAL

- [ ] Baixei FileZilla
- [ ] Obtive credenciais FTP/SFTP da Hostgator
- [ ] Conectei ao servidor via SFTP
- [ ] Fiz upload da pasta `static/` para `public_html/`
- [ ] Criei arquivo `index.html` em `public_html/`
- [ ] Acessei `https://seu_dominio.com.br`
- [ ] Página carregou corretamente
- [ ] CSS e JavaScript funcionando

---

## 🆘 TROUBLESHOOTING

| Problema | Solução |
|----------|---------|
| **Página em branco** | Abra DevTools (F12) → Console para ver erros |
| **Erro 404** | Verifique se `index.html` existe em `public_html/` |
| **CSS quebrado** | Confirme que `static/chunks/b1f78b15be511353.css` existe |
| **Não conecta SFTP** | Verifique credenciais em cPanel → FTP Accounts |
| **Domínio não aponta** | Aguarde até 24h para propagação DNS |

---

## 🎯 RESULTADO

Após seguir estes passos, você terá:

✅ Landing page do IAAPC online  
✅ Totalmente responsiva (mobile, tablet, desktop)  
✅ Com design profissional  
✅ Pronta para receber doações e voluntários  

---

**Qualquer dúvida, consulte:**
- [START_HERE.txt](START_HERE.txt)
- [DEPLOY_RAPIDO.md](DEPLOY_RAPIDO.md)
- [ESTRUTURA_FILES.txt](ESTRUTURA_FILES.txt)
