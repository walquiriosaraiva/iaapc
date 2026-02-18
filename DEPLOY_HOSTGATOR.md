# 📤 Guia de Deploy na Hostgator

## ✅ Build Concluído!

Sua landing page foi compilada com sucesso. Os arquivos estão prontos em:
```
/home/walquirio/projetos/iaapc/.next/
```

## 🚀 Opções de Deploy na Hostgator

### **OPÇÃO 1: Exportar como Site Estático (Recomendado para Hostgator)**

Se você deseja apenas servir HTML/CSS/JavaScript estáticos (sem Node.js):

```bash
# 1. Modificar next.config.ts para exportar estático
# Abra: next.config.ts

# 2. Executar export
npm run build
npm run export

# 3. Os arquivos estáticos estarão em ./out/
```

### **OPÇÃO 2: Deploy com Node.js (Se Hostgator suporta)**

Se sua conta Hostgator tem suporte a Node.js:

```bash
# 1. Fazer upload de todos os arquivos para servidor
# 2. Instalar dependências no servidor
cd /seu/diretorio && npm install

# 3. Fazer build no servidor
npm run build

# 4. Iniciar o servidor
npm run start
# ou com PM2
pm2 start npm --name "iaapc" -- start
```

---

## 📋 PASSO A PASSO - Upload via SFTP/FTP

### **Passo 1: Preparar os Arquivos**

```bash
# Na sua máquina local, compacte tudo
cd /home/walquirio/projetos/iaapc

# Opção A: Se for estático
tar -czf iaapc-build.tar.gz .next/

# Opção B: Se for com Node.js
tar -czf iaapc-full.tar.gz --exclude=node_modules --exclude=.git .
```

### **Passo 2: Conectar via SFTP**

Você pode usar:

#### **Opção A: FileZilla (Interface Gráfica)**
1. Abra FileZilla
2. **File → Site Manager**
3. Clique em **New Site**
4. Preencha com os dados da Hostgator:
   - **Host**: ftp.seudominio.com.br
   - **Protocol**: SFTP
   - **User**: seu_usuario_ftp
   - **Password**: sua_senha_ftp
5. Clique **Connect**
6. Navegue até a pasta **public_html** ou **www**
7. Arraste os arquivos

#### **Opção B: Terminal (SFTP Command Line)**
```bash
# Conectar ao servidor
sftp seu_usuario@seu_dominio.com.br

# Navegar para o diretório
cd public_html

# Fazer upload dos arquivos
put iaapc-build.tar.gz

# Descompactar no servidor
tar -xzf iaapc-build.tar.gz

# Sair
exit
```

#### **Opção C: Terminal (SCP - Copy Seguro)**
```bash
# Copiar arquivo completo para o servidor
scp -r /home/walquirio/projetos/iaapc seu_usuario@seu_dominio.com.br:~/public_html/

# Ou apenas a build
scp -r /home/walquirio/projetos/iaapc/.next seu_usuario@seu_dominio.com.br:~/public_html/
```

### **Passo 3: Configurar na Hostgator**

1. **Acessar cPanel da Hostgator**
2. **File Manager** → Navegue até **public_html**
3. **Fazer upload dos arquivos** (drag & drop ou upload direto)
4. **Descompactar** se tiver enviado .tar.gz

---

## 🔧 Configurações Importantes

### **Se for usar HTML/CSS/JS estático:**

Edite `next.config.ts`:
```ts
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  // Outras configurações...
};

export default nextConfig;
```

Depois:
```bash
npm run build
# Arquivos em ./out/ prontos para upload
```

### **Se for usar Node.js (verificar com Hostgator):**

1. **Ssh para o servidor**:
```bash
ssh seu_usuario@seu_dominio.com.br
```

2. **No servidor, instalar dependências**:
```bash
cd ~/public_html/iaapc
npm install --production
```

3. **Iniciar o app** (com PM2 para manter rodando):
```bash
npm install -g pm2
pm2 start npm --name "iaapc" -- start
pm2 startup
pm2 save
```

---

## 🌐 Apontando o Domínio

1. No cPanel → **Domains**
2. Aponte o domínio para **public_html/caminho_dos_arquivos**
3. Aguarde propagação DNS (até 24h)

---

## 📱 Testar a Landing Page

Após o upload, acesse:
```
https://seu_dominio.com.br
```

---

## ❌ Troubleshooting

### **"Erro 404 - Página não encontrada"**
- Verifique se os arquivos estão em `public_html`
- Confirme se o `index.html` existe

### **"Erro 500 - Erro Interno do Servidor"**
- Verifique logs da Hostgator (cPanel → Error Logs)
- Confirme se Node.js está instalado (se necessário)

### **Página em branco**
- Abra DevTools (F12)
- Verifique erros no Console
- Confira se os caminhos CSS/JS estão corretos

---

## 💡 Dica Final

**Recomendação**: Para Hostgator, a forma mais simples é exportar como estático:

```bash
cd /home/walquirio/projetos/iaapc

# 1. Editar next.config.ts para adicionar: output: "export"
# 2. Fazer build
npm run build

# 3. Os arquivos estáticos estão em .next/static e public/
# 4. Fazer upload de todo o conteúdo de .next/static e public/ para public_html

# 5. Criar um arquivo index.html na raiz que aponta para a página
```

---

**Dúvidas?** Entre em contato com o suporte da Hostgator. Eles podem ajudar com:
- Credenciais FTP/SFTP
- Suporte a Node.js
- Configuração de DNS
