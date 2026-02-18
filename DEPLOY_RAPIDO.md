# 🚀 GUIA RÁPIDO - Deploy na Hostgator

## ⚡ 3 Passos Simples:

### **PASSO 1: Gerar Arquivos Estáticos**
```bash
cd /home/walquirio/projetos/iaapc
npm run build
```
✅ Arquivos gerados em `.next/`

---

### **PASSO 2: Fazer Upload**

#### **Opção A: FileZilla (Interface Gráfica - Fácil)**
1. Baixe e abra **FileZilla**: https://filezilla-project.org/
2. **File** → **Site Manager** → **New Site**
3. Preencha os dados da Hostgator:
   ```
   Host: ftp.seudominio.com.br (ou IP do servidor)
   Protocol: SFTP (ou FTP)
   User: seu_usuario_ftp
   Password: sua_senha_ftp
   ```
4. **Connect**
5. Na esquerda (local), navegue para: `/home/walquirio/projetos/iaapc/.next/static`
6. Na direita (servidor), navegue para: `/public_html`
7. **Arraste todos os arquivos** da esquerda para a direita

#### **Opção B: Terminal (Linha de Comando)**
```bash
# Conectar via SCP
scp -r /home/walquirio/projetos/iaapc/.next/static seu_usuario@seu_dominio.com.br:~/public_html/

# Ou usar SFTP
sftp seu_usuario@seu_dominio.com.br
cd public_html
put -r .next/static
exit
```

---

### **PASSO 3: Criar Arquivo Principal**

Na Hostgator, crie um arquivo chamado **`index.html`** em `public_html`:

```html
<!DOCTYPE html>
<html lang="pt-BR">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>IAAPC - Instituto Abraçar de Apoio aos Portadores de Câncer</title>
    <script src="static/_next/static/chunks/main.js" defer></script>
</head>
<body>
    <div id="__next"></div>
</body>
</html>
```

---

## ✅ Testando

Acesse seu domínio:
```
https://seu_dominio.com.br
```

Se aparecer em branco:
- Abra **F12** (DevTools) → **Console**
- Procure por erros de arquivo não encontrado
- Verifique se os arquivos `.css` e `.js` estão em `static/`

---

## 📞 Dados Necessários da Hostgator

Você precisa de:
- **Host FTP/SFTP**: ftp.seu_dominio.com.br ou IP
- **Usuário**: seu_usuario_ftp
- **Senha**: sua_senha_ftp
- **Caminho**: public_html/ ou www/

Esses dados estão no **cPanel** → **FTP Accounts** da Hostgator.

---

## 💡 Alternativa Mais Fácil (Recomendado)

**Use o script de deploy incluído:**

```bash
cd /home/walquirio/projetos/iaapc
./deploy.sh
```

Isso criará uma pasta `hostgator-deploy/` com todos os arquivos prontos para upload.

---

## 🆘 Problemas Comuns

| Problema | Solução |
|----------|---------|
| **Página em branco** | Verifique o console (F12) para erros; confira caminhos dos arquivos |
| **Erro 404** | Certifique-se que `index.html` está em `public_html` |
| **Não conecta FTP** | Verifique usuário/senha no cPanel → FTP Accounts |
| **Página com CSS quebrado** | Confira se `static/` está na mesma pasta que `index.html` |

---

## 🎯 Resumo de Arquivos

Você precisa fazer upload de:
```
public_html/
├── index.html              (arquivo principal)
├── static/                 (pasta com CSS e JavaScript)
│   ├── _next/
│   │   ├── static/
│   │   │   └── chunks/    (JavaScript compilado)
│   │   └── image/
│   └── ...outros arquivos
└── ...outras pastas
```

---

**Dúvidas? Contate o suporte da Hostgator. Eles têm expertise em deploy!** 🚀
