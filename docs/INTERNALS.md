# ⚙️ Engenharia do Motor: Como o BIRL Funciona

Este documento é destinado a engenheiros que desejam entender as entranhas do interpretador BIRL V5.5 desenvolvido em Node.js.

---

## 1. O Pipeline de Execução

Ao contrário de compiladores que geram bytecode, o BIRL é um **Interpretador de AST Linear Baseado em RegExp**.

### 1.1 Lexer (Normalização)
O arquivo `.birl` é carregado e processado pela primeira vez:
1.  **Split**: O arquivo é quebrado em linhas.
2.  **Strip**: Comentários (`//`) são removidos via regex.
3.  **Map**: Cada linha é associada ao seu número original para gerar erros precisos.
4.  **Filter**: Linhas vazias são descartadas.

---

## 2. Gerenciamento de Escopo e Memória

O interpretador usa um objeto `ctx` (Contexto) que carrega:
- `variaveis`: Um dicionário chave-valor simples.
- `funcoes`: Definições globais.
- `classes`: Definições de Jaulas.

### 2.1 O Coração: `executarBloco`
Esta função é recursiva. Quando uma função ou método é chamado, o interpretador cria um **novo contexto** e chama a si mesmo. Isso garante que variáveis locais não vazem para o escopo global.

### 2.2 O Pulo do Gato: `skipDepth`
Para lidar com blocos condicionais (`IF`) ou loops sem um parser completo de árvore, o interpretador usa um contador de profundidade:
- Se uma condição é **Falsa**, o interpretador entra em modo de salto.
- Ele continua lendo as linhas, mas ignora comandos, apenas incrementando o `skipDepth` se encontrar inícios de bloco e decrementando no comando `BIRL`.
- Quando `skipDepth` chega a zero, ele sabe que o bloco falso foi totalmente saltado.

---

## 3. Retorno de Escopo (Return Bubbling)

Como o interpretador é recursivo e trabalha com laços `while`, um comando `BORA CUMPADE` (return) precisa interromper todos os loops internos imediatamente.
- O motor utiliza um objeto sinalizador `{ __isReturn: true, value: X }`.
- Ao receber este objeto, cada camada do interpretador verifica o sinalizador e "borbulha" o resultado para cima até chegar à chamada original.

---

## 4. O Sistema de Buffer de I/O

Para resolver instabilidades em terminais modernos (como o PowerShell do VS Code), o interpretador implementa um **Smart Buffer**:
1.  Comandos de saída alimentam um `stdoutBuffer` global.
2.  O buffer só é impresso via `process.stdout.write` quando um `\n` é detectado.
3.  Comandos de entrada (`QUE QUE CE QUER MONSTRAO?`) forçam um "flush" do buffer antes de exibir a pergunta do usuário.

---

## 5. Segurança do Core

A avaliação de expressões matemáticas e lógicas utiliza:
`new Function(...keys, "return " + expr)`.
- **Blindagem**: Apenas as variáveis presentes no contexto local são passadas como parâmetros para esta função.
- **Performance**: O uso de `new Function` é significativamente mais rápido que `eval()` em Node.js para avaliações repetitivas.

---

**"CONHECER O MOTOR É O PRIMEIRO PASSO PARA TURBINAR O CÓDIGO!"** 👊🏋️‍♂️
