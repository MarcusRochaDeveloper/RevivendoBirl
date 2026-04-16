# 🚀 Guia de Publicação: Linguagem BIRL

Siga estes passos para distribuir o ecossistema para o mundo!

## 1. Publicar o Runtime (NPM)

O runtime é o coração técnico. Ele permite rodar o comando `birl` no terminal.

1.  Acesse a pasta: `cd birl-runtime`
2.  Faça login no NPM (se necessário): `npm login`
3.  **Publique**: 
    ```bash
    npm publish --access public
    ```
    *Nota: O pacote será registrado como `birl-lang`.*

---

## 2. Empacotar a Extensão (VS Code)

Para gerar o arquivo `.vsix` que os usuários podem instalar.

1.  Instale o empacotador oficial:
    ```bash
    npm install -g @vscode/vsce
    ```
2.  Acesse a pasta: `cd birl-vscode-extension`
3.  **Gere o pacote**:
    ```bash
    vsce package
    ```
    *Isso gerará um arquivo chamado `birl-lang-1.0.0.vsix`.*

---

## 3. Publicar no VS Code Marketplace (Opcional)

Se quiser que apareça na busca interna do VS Code:
1.  Crie uma conta no [Azure DevOps](https://dev.azure.com/) e obtenha um Personal Access Token.
2.  Use o comando: `vsce publish`

**BORA CUMPADE! O MUNDO VAI FICAR TRINCADO!** 👊💪🏁
