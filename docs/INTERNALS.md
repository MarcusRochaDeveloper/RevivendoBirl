# ⚙️ Engenharia do Motor: Como o BIRL Funciona

> "Conhecer o motor é o primeiro passo para turbinar o código!"

<div align="right">

[🚀 Introdução](INTRODUCTION.md) · [📦 Stdlib](STDLIB.md) · [🛑 Limitações](LIMITATIONS.md) · [← Voltar ao README](../README.md)

</div>

---

O BIRL não é apenas um script de substituição de texto. É um interpretador de **AST Linear** construído sobre o ecossistema Node.js.

## 1. O Pipeline de Execução

O processo de transformar texto em gritos de academia segue quatro etapas:

### 1.1 Lexer (Normalização)
O arquivo `.birl` é quebrado em linhas. O interpretador remove comentários (`//`), espaços inúteis e mapeia cada instrução à sua linha original para gerar erros precisos.

### 1.2 O Coração: `executarBloco`
Esta função é recursiva. Quando você chama um método ou inicia um loop, o interpretador cria um **novo contexto** (um escopo limpo) e chama a si mesmo. Isso garante que o que acontece na jaula, fique na jaula.

### 1.3 Avaliador de Expressões
Para matemática e lógica, o BIRL usa um sandbox baseado em `new Function()`. 
- **Segurança**: Apenas as variáveis do contexto local são injetadas.
- **Performance**: É significativamente mais rápido que `eval()` para processamento repetitivo.

---

## 2. Gerenciamento de Escopo

O escopo é gerenciado por um objeto chamado `ctx`.

- **`variaveis`**: Onde moram seus monstros.
- **`funcoes`**: Dicionário de rotinas globais.
- **`classes`**: Definições de jaulas prontas para serem instanciadas.

---

## 3. Fluxo de Controle e `skipDepth`

Como o BIRL não usa um parser de árvore tradicional, ele lida com condicionais (`IF`) de forma engenhosa:
1. Se o teste do `IF` é falso, o motor entra em **Modo de Salto**.
2. Ele ignora comandos, apenas contando inícios e fins de bloco (profundidade).
3. Quando a profundidade volta a zero, ele sai do modo de salto e volta a treinar pesado.

---

## 4. Return Bubbling (O Grito de Volta)

Quando o comando `BORA CUMPADE` é executado, o interpretador gera um sinalizador especial. Este sinalizador "borbulha" através de todos os loops e funções internas até chegar à chamada original, interrompendo a execução de forma limpa.

---

## 5. Arquitetura de I/O

O sistema usa um **Smart Buffer**. As saídas não vão direto para a tela uma por uma; elas ficam guardadas em um buffer invisível e só são "mostradas" quando o monstro respira (encontra um `\n`). Isso evita que o terminal fique lento durante treinos pesados.

---

<div align="center">

**O motor é forte, mas quem guia é o mestre.** 👊🏋️‍♂️

</div>
