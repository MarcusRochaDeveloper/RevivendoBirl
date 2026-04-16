# 📜 Especificação de Sintaxe: BIRL V5.5

Este documento fornece a definição formal da gramática e dos tokens da linguagem BIRL.

---

## 1. Léxico e Tokens

### 1.1 Identificadores
Os identificadores no BIRL seguem a regra padrão de linguagens procedurais:
- Deve começar com uma letra (`a-z`, `A-Z`) ou underscore (`_`).
- Pode conter dígitos (`0-9`).
- **Case Sensitivity**: `MONSTRO X` é diferente de `MONSTRO x`.

### 1.2 Palavras-Chave Reservadas
| Categoria | Keywords |
| :--- | :--- |
| **Estrutura** | `HORA DO SHOW`, `BIRL` |
| **Tipos** | `MONSTRO` |
| **Controle** | `ELE QUE A GENTE QUER?`, `QUE NAO VAI DAR O QUE?`, `NAO VAI DAR NAO` |
| **Loops** | `NEGATIVA BAMBAM`, `MAIS QUERO MAIS` |
| **OOP** | `JAULA`, `SAINDO DA JAULA`, `O_PAI`, `OH O HOME AI PO` |
| **I/O** | `CE QUER VER ESSA PORRA?`, `QUE QUE CE QUER MONSTRAO?` |
| **Funções** | `AJUDA O MALUCO TA DOENTE`, `BORA CUMPADE` |

### 1.3 Literais
- **Strings**: Delimitadas por aspas duplas: `"Sou Monstro"`. Suporta escape de nova linha `\n`.
- **Inteiros**: Sequência de dígitos: `37`, `45`.
- **Pontos Flutuantes**: Dígitos com ponto decimal: `100.5`, `0.75`.

---

## 2. Gramática de Declarações

### 2.1 Declaração de Variáveis
A sintaxe obrigatória utiliza o prefixo `MONSTRO`.
```birl
MONSTRO <nome> [= <expressão>];
```
*Nota: Se não for inicializada, o valor padrão é `0`.*

### 2.2 Expressões e Operadores
O BIRL utiliza o motor JavaScript para avaliação de expressões, suportando:
- **Aritméticos**: `+`, `-`, `*`, `/`, `%`
- **Comparação**: `==`, `!=`, `<`, `>`, `<=`, `>=`
- **Lógicos**: `&&`, `||`, `!`
- **Parentetização**: `(a + b) * c`

---

## 3. Estruturas de Controle

### 3.1 Condicional (If-Else)
A estrutura de decisão no BIRL V5.5 é unificada.
```birl
ELE QUE A GENTE QUER? (condicao)
    // Bligo IF
QUE NAO VAI DAR O QUE? (condicao)
    // Bloco ELSE IF
NAO VAI DAR NAO
    // Bloco ELSE
BIRL // Encerramento Único
```

### 3.2 Laço `MAIS QUERO MAIS` (For)
```birl
MAIS QUERO MAIS (inicializacao; condicao; incremento)
    // Instruções
BIRL
```
*Suporta operadores simplificados: `i++` e `i--`.*

---

## 4. Entrada e Saída (I/O)

### 4.1 Saída (`CE QUER VER ESSA PORRA?`)
Assinatura: `CE QUER VER ESSA PORRA? (formato [, argumentos]);`
Mascaras suportadas:
- `%d`: Inteiro.
- `%f`: Float.
- `%s`: String.

### 4.2 Entrada (`QUE QUE CE QUER MONSTRAO?`)
Assinatura: `QUE QUE CE QUER MONSTRAO? (formato, &variavel);`
*O caractere `&` é obrigatório para indicar a passagem por referência.*

---

## 5. Funções Globais

Definição de uma função:
```birl
OH O HOME AI PO (MONSTRO <nome>(MONSTRO p1, MONSTRO p2))
    // Instruções
    BORA CUMPADE <valor>;
BIRL
```

Chamada de uma função:
```birl
MONSTRO X = AJUDA O MALUCO TA DOENTE <nome>(args);
```

---

**"O CÓDIGO É SÓ O REFLEXO DO SEU TREINO!"** 👊🏋️‍♂️
