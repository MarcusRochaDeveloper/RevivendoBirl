# 🏋️‍♂️ Documentação Oficial: BIRL OOP (V5 - O MISTER OLYMPIA)

Bem-vindo à jaula! A **BIRL** é uma linguagem de programação esotérica (esolang) com tipagem dinâmica inspirada no fisiculturismo e no humor brasileiro. Esta versão (V5) foi reescrita do zero sobre o Node.js para suportar **Programação Orientada a Objetos (POO)**, laços assíncronos, listas dinâmicas e tratamento de erros blindado.

Se você quer calcular a média da turma ou apenas codar por esporte, essa documentação tem tudo o que você precisa para sair do zero.

---

## 🏗️ 1. Estrutura Básica do Treino
Todo programa em BIRL precisa de um aquecimento e de um alongamento final.

- **`HORA DO SHOW`**: Abre o programa principal.
- **`BIRL`**: Fecha blocos de código (`If`, `Loops`, `Funções`, `Classes` e o fim do programa).

---

## 🧬 2. Variáveis (O Shape)
As variáveis armazenam o estado do seu programa. Por padrão, elas assumem o valor dinamicamente, mas a declaração exige a palavra-chave.

- **Declaração:** `MONSTRO`

> **Nota:** Tipos clássicos do C como `FRANGO`, `TRAPEZIO` ou `BICEPS` são aceitos pelo compilador para manter a compatibilidade, mas o motor JavaScript por trás trata tudo dinamicamente.

---

## 🗣️ 3. Entrada e Saída (I/O)
Como o programa se comunica com o mundo exterior.

### Saída (Print)
- **`CE QUER VER ESSA PORRA?`**: Imprime no terminal. Suporta formatação no estilo da linguagem C.
    - `%d`: Força um número Inteiro (arranca casas decimais).
    - `%f`: Formata como Float (ponto flutuante).
    - `%s`: Formata como String.

### Entrada (Scanf Síncrono)
- **`QUE QUE CE QUER MONSTRAO?`**: Pausa a execução e aguarda o usuário digitar no teclado.

---

## 🔀 4. Controle de Fluxo (Condicionais)
Avalia expressões lógicas. **Atenção:** Uma cadeia inteira de `IF`/`ELSE IF`/`ELSE` só exige um único `BIRL` no final de toda a estrutura.

- **If:** `ELE QUE A GENTE QUER? (condição)`
- **Else If:** `QUE NAO VAI DAR O QUE? (condição)`
- **Else:** `NAO VAI DAR NAO`

---

## 🔄 5. Laços de Repetição (Loops)
Para treinar até a falha.

### While
- **`NEGATIVA BAMBAM`**: Executa enquanto a condição for verdadeira.

### For
- **`MAIS QUERO MAIS`**: Loop com inicialização, condição e incremento.

---

## 📦 6. Listas (Arrays Dinâmicos)
O BIRL V5 introduziu manipulação de memória em lote.

- **Criar lista vazia:** `VEM MONSTRO`
- **Adicionar item (Push):** `.BOTA_PRA_FUDER(valor)`
- **Pegar tamanho (Length):** `.TAMANHO()`
- **Acessar índice:** `.PEGA(index)`

---

## 🛠️ 7. Funções Globais
Crie receitas de treino customizadas e chame de qualquer lugar.

- **Definir Função:** `OH O HOME AI PO (MONSTRO NOME_FUNC(MONSTRO ARG1))`
- **Retornar Valor:** `BORA CUMPADE`
- **Chamar Função:** `AJUDA O MALUCO TA DOENTE`

---

## 🏛️ 8. Orientação a Objetos (POO)
O poder máximo da linguagem. Suporta encapsulamento, atributos locais e métodos.

- **Criar Classe:** `JAULA NomeDaClasse`
- **Instanciar Objeto:** `SAINDO DA JAULA NomeDaClasse`
- **Referência Interna (This):** `O_PAI`

---

## ⚙️ 9. Como o Interpretador Funciona (Under the Hood)
Para quem quiser entender o código `index.js` (O Motor do Compilador V5).

- **Lexer e Mapeamento de Linhas:** O interpretador não usa `eval()` em strings cruas da forma insegura antiga. Ele lê o arquivo, arranca os comentários (`//`), ignora linhas vazias e cria um array de objetos `{ text: "comando", line: 15 }`. Isso garante que, se houver um erro, o Stack Trace aponte a linha exata do erro no `.birl`, igual aos compiladores profissionais.

- **Lógica Blindada de Escopo (`skipDepth`):** O maior desafio de interpretadores baseados em linha é aninhar blocos. Se um `IF` der falso, o motor precisa pular o código. O `skipDepth` conta quantas vezes blocos internos (como um `FOR` dentro de um `IF` ignorado) são abertos e fechados. Ele só destrói o contexto do `IF` principal quando o `skipDepth` volta a zero.

- **Return Bubbling (`__isReturn`):** No JavaScript assíncrono, um comando de retorno (`BORA CUMPADE`) precisa furar a bolha de possíveis loops e condicionais aninhados para devolver o valor à função original. O motor encapsula o retorno em um objeto especial `{ __isReturn: true, value: val }` e passa ele "para cima" de forma recursiva.

- **Avaliação Segura (`new Function`):** As matemáticas e lógicas (`X > 2`, `A + B`) são executadas gerando contextos isolados via `new Function(...keys, return expr)`. Isso injeta apenas as variáveis globais ou do objeto (`O_PAI`) sem permitir que o código vaze para a memória do Node.js hospedeiro.


# 🏋️‍♂️ Dicionário de Sintaxe: BIRL OOP V5 (Cheat Sheet)

Um guia rápido e direto com todas as palavras-chave, comandos e sintaxes da linguagem BIRL. Guarde isso na sua ficha de treino!

---

## 🏗️ Estrutura do Programa
Comandos usados para delimitar onde o código começa e termina.

| Comando / Sintaxe | Equivalente (C/JS) | Descrição |
| :--- | :--- | :--- |
| `HORA DO SHOW` | `main() {` | A primeira linha obrigatória do arquivo. Inicia o programa. |
| `BIRL` | `}` | Fecha qualquer bloco de código (If, For, While, Função, Classe e o próprio programa). |
| `//` | `//` | Comentário de uma linha. Tudo após ele é ignorado pelo compilador. |

---

## 🧬 Variáveis e Tipos de Dados
Palavras usadas para declarar espaços na memória.

| Comando / Sintaxe | Equivalente (C/JS) | Descrição |
| :--- | :--- | :--- |
| `MONSTRO` | `let` / `int` | Declaração padrão de variável dinâmica. |
| `FRANGO` | `char` | Aceito pelo Lexer, mas tratado como dinâmico. |
| `MONSTRINHO` | `short` | Aceito pelo Lexer, mas tratado como dinâmico. |
| `MONSTRAO` | `long` | Aceito pelo Lexer, mas tratado como dinâmico. |
| `TRAPEZIO` | `float` | Aceito pelo Lexer, mas tratado como dinâmico. |
| `BICEPS` | `unsigned` | Aceito pelo Lexer, mas tratado como dinâmico. |

---

## 🗣️ Entrada e Saída (I/O)
Comandos para interagir com o usuário via terminal.

| Comando / Sintaxe | Equivalente (C/JS) | Descrição |
| :--- | :--- | :--- |
| `CE QUER VER ESSA PORRA? (...)` | `printf()` / `console.log()` | Imprime dados na tela. Suporta concatenação e formatação (ex: `%d`). |
| `QUE QUE CE QUER MONSTRAO? (...)`| `scanf()` / `prompt()` | Pausa o programa e aguarda o usuário digitar um valor no teclado. |
| `"%d"` | `%d` | Máscara de formatação: Força o valor a ser um número **Inteiro**. |
| `"%f"` | `%f` | Máscara de formatação: Força o valor a ser um número **Float** (Decimal). |
| `"%s"` | `%s` | Máscara de formatação: Força o valor a ser uma **String** (Texto). |

---

## 🔀 Controle de Fluxo (Condicionais)
Estruturas de decisão. *Lembre-se: uma cadeia inteira de ifs só exige um `BIRL` no final.*

| Comando / Sintaxe | Equivalente (C/JS) | Descrição |
| :--- | :--- | :--- |
| `ELE QUE A GENTE QUER? (...)` | `if (...)` | Executa o bloco se a condição for verdadeira. |
| `QUE NAO VAI DAR O QUE? (...)` | `else if (...)` | Testado caso o `IF` anterior seja falso. |
| `NAO VAI DAR NAO` | `else` | Executado se todas as condições anteriores falharem. |

---

## 🔄 Laços de Repetição (Loops)
Estruturas para repetição de código.

| Comando / Sintaxe | Equivalente (C/JS) | Descrição |
| :--- | :--- | :--- |
| `NEGATIVA BAMBAM (...)` | `while (...)` | Loop contínuo enquanto a condição for verdadeira. |
| `MAIS QUERO MAIS (...)` | `for (...)` | Loop estruturado com (inicialização; condição; incremento). |

---

## 📦 Listas (Arrays Dinâmicos)
Sintaxe para manipular coleções de dados.

| Comando / Sintaxe | Equivalente (C/JS) | Descrição |
| :--- | :--- | :--- |
| `VEM MONSTRO` | `[]` | Inicializa um array dinâmico vazio na memória. |
| `.BOTA_PRA_FUDER(valor)` | `.push(valor)` | Adiciona um novo elemento ao final da lista. |
| `.TAMANHO()` | `.length` | Retorna o número de elementos contidos na lista. |
| `.PEGA(index)` | `array[index]` | Retorna o valor contido na posição especificada pelo índice. |

---

## 🛠️ Funções Globais
Blocos de código reutilizáveis.

| Comando / Sintaxe | Equivalente (C/JS) | Descrição |
| :--- | :--- | :--- |
| `OH O HOME AI PO (...)` | `function nome(...)` | Declara a assinatura de uma função ou método. |
| `BORA CUMPADE` | `return` | Retorna um valor da função e encerra sua execução atual. |
| `AJUDA O MALUCO TA DOENTE`| `func()` / `obj.metodo()` | Comando obrigatório para **chamar** (executar) qualquer função ou método. |

---

## 🏛️ Orientação a Objetos (POO)
Sintaxe para criar classes e instanciar objetos.

| Comando / Sintaxe | Equivalente (C/JS) | Descrição |
| :--- | :--- | :--- |
| `JAULA` | `class` | Declara o escopo de uma Classe. |
| `SAINDO DA JAULA` | `new` | Instancia um novo Objeto a partir de uma Jaula (Classe) existente. |
| `O_PAI` | `this` | Referência à própria instância do objeto (usado dentro dos métodos para acessar os próprios atributos). |