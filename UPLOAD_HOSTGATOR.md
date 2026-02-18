# 📤 Guia de Upload para Hostgator

## ✅ ARQUIVOS PRONTOS PARA UPLOAD

Todos os arquivos estão em: `/home/walquirio/projetos/iaapc/out/`

**Estrutura:**
```
out/
├── index.html          ← ARQUIVO PRINCIPAL
├── 404.html            ← Página de erro
├── favicon.ico         ← Ícone do site
├── _next/              ← PASTA COMPLETA (CSS, JS, etc)
│   └── static/
│       ├── chunks/
│       ├── media/
│       └── [build files]
└── [outros arquivos SVG]
```

---

## 🚀 OPÇÃO 1: Upload via FileZilla (Recomendado)

### Passo 1: Conectar no Hostgator
1. Abra **FileZilla**
2. Clique em **Arquivo > Gerenciador de Configurações de Sites**
3. Crie novo site com dados do Hostgator:
   - **Nome:** IAAPC
   - **Protocolo:** SFTP
   - **Host:** ftp.seudominio.com.br (ou IP do servidor)
   - **Porta:** 22
   - **Usuário:** seu_cpanel_user
   - **Senha:** sua_senha

### Passo 2: Navegar até `/public_html/`
1. Após conectar, procure a pasta `public_html`
2. Se existirem arquivos antigos, **crie um backup** (renomear pasta)

### Passo 3: Upload dos Arquivos
1. No painel esquerdo (seu computador), navegue até:
   ```
   /home/walquirio/projetos/iaapc/out/
   ```

2. **Selecione TUDO** (Ctrl+A) exceto:
   - `.git` (se existir)
   - `node_modules` (não terá aqui)

3. **Arraste para o painel direito** (servidor no `public_html/`)

4. **Aguarde o upload completar**

### Passo 4: Testar
```
Acesse: https://seudominio.com.br
```

**Deve aparecer:**
- ✅ Logo IAAPC rosa
- ✅ Título "Acolhimento e Esperança"
- ✅ Cores rosa/vermelhas
- ✅ Botões "Fazer Doação" e "Ser Voluntário"

---

## 🚀 OPÇÃO 2: Upload via SCP (Terminal)

Se preferir linha de comando:

```bash
cd /home/walquirio/projetos/iaapc/out

# Compacta
tar -czf iaapc.tar.gz .

# Envia para servidor
scp iaapc.tar.gz seu_usuario@ftp.seudominio.com.br:~/public_html/

# Conecta via SSH e descompacta
ssh seu_usuario@ftp.seudominio.com.br
cd ~/public_html
tar -xzf iaapc.tar.gz
rm iaapc.tar.gz
```

---

## 🚀 OPÇÃO 3: Upload via cPanel

1. Acesse: `https://seudominio.com.br:2083` (cPanel)
2. Faça login
3. Procure **File Manager**
4. Navegue até `public_html`
5. Clique **Upload** e selecione os arquivos

---

## ⚠️ PONTOS IMPORTANTES

### Estrutura Final Esperada no Hostgator:
```
/public_html/
├── index.html
├── 404.html
├── favicon.ico
├── _next/
│   └── static/
│       ├── chunks/
│       ├── media/
│       └── [build files]
└── [svgs e outros]
```

### ✅ Checklist Pós-Upload

1. **Cache do Navegador:**
   - Abra o site com `Ctrl+Shift+Del` para limpar cache
   - Ou `Ctrl+F5` para reload com cache limpo

2. **Verificar Console:**
   - F12 → Console
   - Não deve ter erros em VERMELHO

3. **Verificar Network:**
   - F12 → Network
   - Todos os arquivos com status **200** (verde)
   - Nenhum **404** (vermelho)

4. **Responsividade:**
   - F12 → Modo dispositivo mobile
   - Deve funcionar em celular também

---

## 🆘 Problemas Comuns

### Problema: Página em branco ou preta
**Solução:**
1. Verifique se `_next/` está no `public_html/`
2. Limpe cache: `Ctrl+Shift+Del`
3. Recarregue: `Ctrl+F5`

### Problema: 404 - File not found
**Solução:**
- Certifique-se que os arquivos estão em `public_html/`, não em subpasta
- Exemplo ERRADO: `/public_html/out/index.html`
- Exemplo CERTO: `/public_html/index.html`

### Problema: Estilos não carregam
**Solução:**
1. F12 → Network
2. Procure por: `chunks/` (deve ter arquivo CSS)
3. Se status 404, a pasta `_next/` não foi enviada

---

## 📧 Suporte

Se precisar de ajuda, verifique:
1. Credenciais de acesso ao Hostgator
2. Se FTP/SFTP está habilitado
3. Espaço em disco disponível

---

**✅ Pronto para upload! Boa sorte!** 🚀
