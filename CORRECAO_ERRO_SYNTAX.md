# 🔧 CORREÇÃO DO ERRO - Unexpected token '<'

## ❌ O Problema

Quando você acessou o site, recebeu:
```
Uncaught SyntaxError: Unexpected token '<' (at 2f12edbe65313c69.js:1:1)
```

## ✅ O Que Significa

O navegador está tentando **executar um arquivo HTML como JavaScript**.

Isso ocorre quando:
- O servidor retorna um **erro 404** (arquivo não encontrado)
- Em vez do arquivo .js, ele envia um HTML de erro
- O navegador tenta executar esse HTML como JavaScript
- Daí o erro: '<' é o primeiro caractere do HTML (`<!DOCTYPE>`)

## 🎯 A Causa

Seu `index.html` provavelmente está incorreto. Ele não está carregando os arquivos certos ou não está em ordem.

---

## ✅ SOLUÇÃO (2 Opções)

### **OPÇÃO 1: Usar o arquivo index.html correto (RECOMENDADO)**

Criei um arquivo corrigido em:
```
/home/walquirio/projetos/iaapc/index.html
```

**Copie este arquivo para seu servidor:**
```
Local:  /home/walquirio/projetos/iaapc/index.html
Para:   /public_html/index.html  (via FileZilla ou SCP)
```

**Conteúdo do arquivo (se precisar criar manualmente):**

```html
<!DOCTYPE html>
<html lang="pt-BR">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <title>IAAPC - Instituto Abraçar de Apoio aos Portadores de Câncer</title>
    <meta name="description" content="Instituto Abraçar de Apoio aos Portadores de Câncer" />
    <link rel="icon" href="/favicon.ico" />
    <style>
      * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
      }
      body {
        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
      }
      #__next {
        display: contents;
      }
    </style>
  </head>
  <body>
    <div id="__next"></div>
    <!-- Carrega o CSS compilado -->
    <link rel="stylesheet" href="/static/chunks/b1f78b15be511353.css" />
    <!-- Carrega os scripts em ordem correta -->
    <script src="/static/4AtZuf2M_QNzauYt6ddUp/_buildManifest.js" async></script>
    <script src="/static/4AtZuf2M_QNzauYt6ddUp/_ssgManifest.js" async></script>
    <!-- Carrega o app principal -->
    <script src="/static/chunks/2f12edbe65313c69.js" defer></script>
  </body>
</html>
```

---

### **OPÇÃO 2: Verificar a estrutura no servidor**

Se o problema persistir após atualizar o index.html:

#### 1. Verificar se `static/` está em `public_html/`

Sua estrutura deve ser:
```
public_html/
├── index.html                           ← Arquivo principal
└── static/                              ← Pasta com todos os arquivos
    ├── chunks/
    │   ├── 2f12edbe65313c69.js         ← Arquivo que tava dando erro
    │   ├── b1f78b15be511353.css
    │   └── ... (outros .js)
    ├── media/                           ← Imagens
    │   └── ... (fontes, favicon)
    └── 4AtZuf2M_QNzauYt6ddUp/          ← Manifests
        ├── _buildManifest.js
        ├── _clientMiddlewareManifest.json
        └── _ssgManifest.js
```

#### 2. Se a pasta `static/` está na raiz errada

Talvez você tenha uploadado para:
```
❌ ERRADO:
public_html/chunks/
public_html/media/
public_html/4AtZuf2M_QNzauYt6ddUp/

✅ CORRETO:
public_html/static/chunks/
public_html/static/media/
public_html/static/4AtZuf2M_QNzauYt6ddUp/
```

Se foi assim, **reorganize a estrutura** para ter a pasta `static/` como intermediária.

---

## 🧪 Teste Após Corrigir

### 1. Atualize no navegador
```
Ctrl+F5  (força recarregar, limpa cache)
```

### 2. Abra DevTools (F12) → Console

Procure por:
- ✅ Se a página carregar = Sucesso!
- ❌ Se ainda der erro 404, veja o caminho do arquivo e confirme a estrutura

### 3. Verifique DevTools → Network

- Clique em **F12**
- Vá para aba **Network**
- Recarregue a página (F5)
- Procure por:
  - `200` = arquivo carregou (verde) ✅
  - `404` = arquivo não encontrado (vermelho) ❌

Se ver `404 /static/chunks/b1f78b15be511353.css`, significa que a pasta `static/` não está em `public_html/`.

---

## 🔍 Checklist de Correção

- [ ] Atualizei o arquivo `index.html` com o código acima
- [ ] Verifiquei que `static/` está dentro de `public_html/`
- [ ] Usei `Ctrl+F5` para forçar limpeza de cache
- [ ] Abri DevTools (F12) e não vejo erros em vermelho
- [ ] Todos os arquivos .js e .css têm status `200`
- [ ] A página carrega e mostra a landing page do IAAPC

---

## 📱 Se Ainda Não Funcionar

### Cenário 1: Erro 404 em /static/
**Problema:** Arquivo static/ não está em public_html/
**Solução:** Verifique com FileZilla ou cPanel File Manager a estrutura exata

### Cenário 2: Página em branco sem erros
**Problema:** JavaScript não executa
**Solução:** 
- Limpe cache completo do navegador
- Tente em navegador privado/incógnito
- Aguarde 5-10 minutos (DNS pode estar atualizando)

### Cenário 3: CSS não carrega (página sem estilos)
**Problema:** Arquivo CSS não encontrado
**Solução:** Confirme que `b1f78b15be511353.css` existe em `/public_html/static/chunks/`

---

## 📞 Dúvidas Comuns

**P: Preciso fazer upload novamente?**
R: Não. Apenas atualize o arquivo `index.html` e limpe cache do navegador.

**P: Por que o arquivo tem nome com hash?**
R: É assim que Next.js otimiza - totalmente normal e seguro.

**P: Quanto tempo leva para funcionar?**
R: Segundos após atualizar o index.html. Se não funcionar, é problema de estrutura de pasta.

---

## 🚀 Próximas Ações

1. ✅ Atualizar `index.html` (veja código acima)
2. ✅ Fazer upload para `/public_html/index.html`
3. ✅ Limpar cache (Ctrl+F5)
4. ✅ Acessar seu domínio
5. ✅ Se erro 404, verificar estrutura de pastas com FileZilla

---

**Precisando de ajuda com FileZilla?** Veja [ESTRUTURA_FILES.txt](ESTRUTURA_FILES.txt)

**Quer verificar tudo de novo?** Use [CHECKLIST_DEPLOY.txt](CHECKLIST_DEPLOY.txt)
