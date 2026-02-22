# 🎯 SOLUÇÃO RÁPIDA - Erro "Unexpected token '<'"

## 📋 O Erro Que Você Recebeu

```
Uncaught SyntaxError: Unexpected token '<' (at 2f12edbe65313c69.js:1:1)
Unchecked runtime.lastError: Could not establish connection.
```

## ✅ Por Que Isso Acontece

O navegador tentou carregar JavaScript mas recebeu HTML (erro 404).

**Causa:** Seu `index.html` antigo estava carregando os arquivos incorretamente.

---

## 🚀 SOLUÇÃO EM 2 PASSOS

### **Passo 1: Copiar o novo index.html**

Arquivo criado:
```
/home/walquirio/projetos/iaapc/index.html
```

### **Passo 2: Fazer upload para o servidor**

Via FileZilla:
1. Conecte ao servidor via SFTP
2. Painel ESQUERDO: `/home/walquirio/projetos/iaapc/`
3. Encontre: `index.html` (novo, recém-criado)
4. Painel DIREITO: `/public_html/`
5. **Arraste** para sobrescrever o antigo
6. Aguarde terminar

Via SCP (terminal):
```bash
scp /home/walquirio/projetos/iaapc/index.html seu_usuario@seu_dominio.org.br:~/public_html/
```

---

## 🧪 Testar

1. Acesse seu site: `https://seu_dominio.org.br`
2. Abra DevTools: **F12**
3. Limpe cache: **Ctrl+Shift+Del** → Limpe tudo
4. Recarregue: **Ctrl+F5**

**Esperado:**
- ✅ Landing page do IAAPC carrega
- ✅ Cores rose/pink aparecem
- ✅ Botões "Fazer Doação" e "Ser Voluntário" aparecem
- ✅ Sem erros em vermelho no Console

---

## 🔍 Se Ainda Não Funcionar

### **Verificar Estrutura**

Abra FileZilla e verifique:

```
public_html/  (deve conter)
├── index.html              ← Arquivo que você uploadou
└── static/                 ← Pasta com arquivos compilados
    ├── chunks/
    │   ├── 2f12edbe65313c69.js
    │   ├── b1f78b15be511353.css
    │   └── ... (outros .js)
    ├── media/
    └── 4AtZuf2M_QNzauYt6ddUp/
```

**Se não estiver assim:**
- Você pode ter uploadado `static/` para o lugar errado
- Ou não uploadou a pasta completa
- Reorganize para ficar exatamente como acima

### **Verificar DevTools**

Abra **F12** → **Network** → Recarregue **F5**

Procure por:
- `2f12edbe65313c69.js` - deve estar com status **200** ✅
- `b1f78b15be511353.css` - deve estar com status **200** ✅
- Se estiver **404** em vermelho - arquivo não encontrado!

---

## 📁 Conteúdo do Novo index.html

O arquivo que criamos carrega:

1. **CSS** em: `/static/chunks/b1f78b15be511353.css`
2. **Manifests** em: `/static/4AtZuf2M_QNzauYt6ddUp/_buildManifest.js`
3. **App Principal** em: `/static/chunks/2f12edbe65313c69.js`

Tudo **na ordem certa** para funcionar!

---

## 💡 Checklist Rápido

- [ ] Baixei novo `index.html` de `/home/walquirio/projetos/iaapc/`
- [ ] Fiz upload para `/public_html/index.html`
- [ ] Sobrescrevi o arquivo antigo
- [ ] Limpei cache do navegador (Ctrl+Shift+Del)
- [ ] Recarreguei (Ctrl+F5)
- [ ] Site funciona sem erros

---

## ✨ Espera-se que agora funcione!

Se ainda tiver problema, abra [CORRECAO_ERRO_SYNTAX.md](CORRECAO_ERRO_SYNTAX.md) para instruções detalhadas.
