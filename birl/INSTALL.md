# 🏋️‍♂️ Guia de Instalação: Linguagem BIRL

Seja bem-vindo ao ecossistema de desenvolvimento que vai deixar o seu computador trincado! Siga os passos abaixo para começar a programar em BIRL.

## 1. Instalar o Runtime (Interpretador)

O runtime é necessário para que o seu computador entenda os gritos marombas. Instalaremos via NPM de forma global:

```bash
npm install -g birl-lang
```

**Verificação**: Abra o seu terminal e digite `birl`. Se você ver a mensagem de ajuda, o shape está carregado!

---

## 2. Instalar a Extensão no VS Code

A extensão fornece autocompletar, cores e diagnósticos de erro.

1.  Abra o VS Code.
2.  Pressione `Ctrl + P`, cole o comando abaixo e dê Enter (ou arraste o arquivo `.vsix` para a aba de extensões):
    ```bash
    code --install-extension birl-lang-1.0.0.vsix
    ```

---

## 3. Criar e Rodar seu Primeiro Treino

1.  Crie um arquivo chamado `meu_treino.birl`.
2.  Cole o código básico:
    ```birl
    HORA DO SHOW
        CE QUER VER ESSA PORRA?("BORA CUMPADE!\n");
    BIRL
    ```
3.  **Para rodar**:
    - **Pelo Terminal**: `birl meu_treino.birl`
    - **Pelo VS Code**: Pressione `Ctrl + Alt + B`.

**BORA CUMPADE! O SHAPE DO CÓDIGO É AGORA!** 👊💪🏁
