# BIRL Language Support — VS Code Extension

Syntax highlighting e execução para a linguagem BIRL 💪

## Instalação

### Via VSIX (recomendado para Antigravity/Cursor)
```bash
cd birl-vscode-extension
npm install
npm run package
# Instalar o .vsix gerado:
# VS Code:       Extensions → "..." → Install from VSIX
# Cursor:        Extensions → "..." → Install from VSIX
# Antigravity:   Extensions → "..." → Install from VSIX
```

### Para desenvolvedores
```bash
cd birl-vscode-extension
code .
# Pressione F5 para abrir o Extension Development Host
```

## CLI (interpretador)

```bash
cd birl-cli
npm install -g .
birl programa.birl
```

## Sintaxe BIRL

```birl
HORA DO SHOW
    MONSTRO INTEIRO x = 10
    CE QUER VER ESSA PORRA? (x)
BIRL
```

## Teclas

- `Ctrl+Alt+B` — Executar arquivo .birl atual
