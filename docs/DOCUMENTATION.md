# BIRL — Documentação Oficial 💪

> *"Bambam's It's-show-time Recursive Language"*
> A linguagem de programação que transforma código em treino de academia.

---

## Sumário

1. [Visão Geral](#1-visão-geral)
2. [Instalação](#2-instalação)
3. [Hello World](#3-hello-world)
4. [Sintaxe Básica](#4-sintaxe-básica)
5. [Controle de Fluxo](#5-controle-de-fluxo)
6. [Funções](#6-funções)
7. [Estruturas de Dados](#7-estruturas-de-dados)
8. [Programação Avançada](#8-programação-avançada)
9. [Sistema da Linguagem](#9-sistema-da-linguagem)
10. [Extensões e Plugins](#10-extensões-e-plugins)
11. [Ferramentas e CLI](#11-ferramentas-e-cli)
12. [Debugging](#12-debugging)
13. [Boas Práticas](#13-boas-práticas)
14. [Exemplos Reais](#14-exemplos-reais)
15. [Contribuição](#15-contribuição)
16. [Roadmap](#16-roadmap)
17. [FAQ](#17-faq)
18. [Licença](#18-licença)

---

## 1. Visão Geral

### O que é BIRL?

**BIRL** é uma linguagem de programação interpretada, dinâmica e orientada a objetos, inspirada nos bordões do fisiculturista brasileiro **Bambam** (Kleber Bambam de Oliveira). Cada comando é um grito de guerra da academia, mas por trás do humor existe uma linguagem capaz de resolver problemas reais de programação.

O nome é um acrônimo recursivo: **B**ambam's **I**t's-show-time **R**ecursive **L**anguage.

### Filosofia

> "Todo programa começa com HORA DO SHOW e termina com BIRL. Assim como todo treino."

BIRL segue três princípios fundamentais:

1. **Expressividade Máxima** — O código deve ser gritado, não sussurrado. Variáveis em CAPS LOCK. Comandos que parecem ordens de um personal trainer. Se o vizinho não ouviu, o programa não está pronto.
2. **Acessibilidade Técnica** — Apesar da estética meme, a linguagem implementa conceitos reais de ciência da computação: OOP com herança conceitual, arrays dinâmicos, closures via contexto, e I/O formatada estilo C.
3. **Diversão como Feature** — Aprender programação não precisa ser chato. Se um aluno consegue lembrar `CE QUER VER ESSA PORRA?` mais fácil que `printf`, a missão foi cumprida.

### Problema que resolve

BIRL foi criada para ser a primeira linguagem de programação para quem nunca programou. É uma porta de entrada que usa humor brasileiro para desmistificar conceitos como classes, funções, loops e arrays — sem precisar de inglês ou de um background técnico.

### Público-alvo

- Estudantes de programação (especialmente iniciantes)
- Professores que querem usar memes como ferramenta pedagógica
- Desenvolvedores que colecionam linguagens esotéricas como figurinhas
- Qualquer pessoa que já viu um vídeo do Bambam e pensou "E se isso fosse código?"

### Diferenciais

| Feature | BIRL | Outras linguagens esotéricas |
|---------|------|------------------------------|
| Orientação a Objetos | ✅ Classes, métodos, atributos | ❌ Raramente |
| Arrays Dinâmicos | ✅ `VEM MONSTRO` | ❌ Quase nunca |
| I/O Formatada | ✅ `%d`, `%s`, `%f` | ❌ Básico/inexistente |
| Usabilidade real | ✅ Sistemas completos | ❌ Apenas provas de conceito |
| Tooling (VS Code) | ✅ Extensão oficial | ❌ Raro |
| Humor | 💪💪💪 | 🤷 |

---

## 2. Instalação

### Pré-requisitos

- **Node.js** v14 ou superior
- **npm** (vem com o Node.js)
- Um editor com suporte a BIRL (VS Code, Cursor ou Antigravity recomendados)

### Windows

```powershell
# 1. Instale o Node.js (https://nodejs.org)

# 2. Clone o repositório
git clone https://github.com/MarcusRochaDeveloper/RevivendoBirl.git
cd RevivendoBirl

# 3. Instale o CLI globalmente
cd birl-cli
npm install -g .

# 4. Verifique
birl --version
```

### Linux / macOS

```bash
# 1. Instale o Node.js
curl -fsSL https://deb.nodesource.com/setup_20.x | sudo -E bash -
sudo apt-get install -y nodejs

# 2. Clone e instale
git clone https://github.com/MarcusRochaDeveloper/RevivendoBirl.git
cd RevivendoBirl/birl-cli
sudo npm install -g .

# 3. Verifique
birl --version
```

### Verificando a instalação

```bash
$ birl --version
💪 BIRL CLI v1.0.0

$ birl meu_programa.birl
💪 CARREGANDO COMPILADOR BIRL V5.4 (O SHAPE INVISÍVEL REVELADO)...
```

### Extensão VS Code

```bash
cd birl-vscode-extension
npm install
npm run package
# VS Code → Extensions → "..." → Install from VSIX
```

---

## 3. Hello World

### Modo Monstro 🦁

```birl
HORA DO SHOW
    CE QUER VER ESSA PORRA? ("FALA MEU MONSTRO! BEM VINDO AO BIRL!\n");
BIRL
```

### Modo Profissional 🎓

```birl
HORA DO SHOW
    CE QUER VER ESSA PORRA? ("Hello, World!\n");
BIRL
```

### Explicação linha por linha

| Linha | Código | Significado |
|-------|--------|-------------|
| 1 | `HORA DO SHOW` | Ponto de entrada do programa. Equivale a `main()` em C ou `if __name__ == "__main__"` em Python. |
| 2 | `CE QUER VER ESSA PORRA? (...)` | Comando de saída (print). Exibe texto no console. |
| 3 | `BIRL` | Fecha o bloco aberto por `HORA DO SHOW`. Equivale a `}` em C/Java. |

### Executando

```bash
$ birl hello.birl
💪 CARREGANDO COMPILADOR BIRL V5.4 (O SHAPE INVISÍVEL REVELADO)...

Hello, World!

💪 TREINO CONCLUÍDO!
```

---

## 4. Sintaxe Básica

### 4.1 Variáveis

Toda variável em BIRL é declarada com a keyword `MONSTRO`. Variáveis são dinamicamente tipadas.

```birl
HORA DO SHOW
    // Declaração com atribuição
    MONSTRO NOME = "Bambam";
    MONSTRO IDADE = 45;
    MONSTRO PESO = 120.5;
    MONSTRO ATIVO = 1;

    // Declaração sem valor (recebe 0)
    MONSTRO CONTADOR;

    // Reatribuição
    CONTADOR = 42;
BIRL
```

> **Convenção:** Nomes de variáveis são em CAPS_LOCK com underscores. Não é obrigatório, mas é tradição.

### 4.2 Tipos de dados

BIRL é dinamicamente tipada. O tipo é inferido pelo valor atribuído.

| Tipo | Formato de declaração | Formato de input (`%`) | Exemplo |
|------|----------------------|------------------------|---------|
| Inteiro | `MONSTRO X = 42;` | `%d` | `42`, `-7`, `0` |
| Decimal (float) | `MONSTRO PI = 3.14;` | `%f` | `3.14`, `0.5` |
| String | `MONSTRO S = "texto";` | `%s` | `"Bambam"` |
| Array | `MONSTRO L = VEM MONSTRO;` | — | `[]` |
| Objeto | `OBJ = SAINDO DA JAULA ...;` | — | Instância de classe |

### 4.3 Operadores

BIRL suporta os operadores padrão do JavaScript:

| Categoria | Operadores |
|-----------|------------|
| Aritméticos | `+`, `-`, `*`, `/`, `%` |
| Comparação | `==`, `!=`, `<`, `>`, `<=`, `>=` |
| Lógicos | `&&`, `\|\|`, `!` |
| Incremento | `++`, `--` |

```birl
HORA DO SHOW
    MONSTRO A = 10;
    MONSTRO B = 3;

    CE QUER VER ESSA PORRA? ("Soma: %d\n", A + B);         // 13
    CE QUER VER ESSA PORRA? ("Resto: %d\n", A % B);        // 1
    CE QUER VER ESSA PORRA? ("Maior? %d\n", A > B);        // 1 (true)
BIRL
```

### 4.4 Comentários

```birl
// Isto é um comentário de uma linha.
// BIRL não suporta comentários de bloco (/* */).
// Use múltiplas linhas de "//" como um monstro.
```

### 4.5 Entrada de dados (Input)

```birl
HORA DO SHOW
    MONSTRO NOME;
    MONSTRO IDADE;

    // Prompt + leitura em uma linha
    CE QUER VER ESSA PORRA? ("Qual seu nome, monstro? ");
    QUE QUE CE QUER MONSTRAO? ("%s", &NOME);

    CE QUER VER ESSA PORRA? ("Idade: ");
    QUE QUE CE QUER MONSTRAO? ("%d", &IDADE);

    CE QUER VER ESSA PORRA? ("Fala, %s! Voce tem %d anos.\n", NOME, IDADE);
BIRL
```

**Formato do Input:**

| Especificador | Tipo lido |
|--------------|-----------|
| `%d` | Inteiro |
| `%f` | Float/Decimal |
| `%s` | String |

> **Nota técnica:** O `&` antes do nome da variável é obrigatório na leitura. Ele indica passagem por referência, seguindo a tradição do `scanf` do C.

### 4.6 Saída formatada (Print)

```birl
HORA DO SHOW
    MONSTRO NOME = "Marcus";
    MONSTRO NOTA = 9;
    MONSTRO MEDIA = 8.75;

    // String literal
    CE QUER VER ESSA PORRA? ("Texto puro\n");

    // Com interpolação (estilo printf)
    CE QUER VER ESSA PORRA? ("Aluno: %s | Nota: %d | Media: %f\n", NOME, NOTA, MEDIA);

    // Sem \n (não quebra linha — útil para prompts)
    CE QUER VER ESSA PORRA? ("Digite algo: ");
BIRL
```

---

## 5. Controle de Fluxo

### 5.1 Condicional (If / Else If / Else)

```birl
ELE QUE A GENTE QUER? (condição)
    // bloco if
BIRL

QUE NAO VAI DAR O QUE? (outra_condição)
    // bloco else if
BIRL

NAO VAI DAR NAO
    // bloco else
BIRL
```

**Tabela de equivalência:**

| BIRL | C / Java / JS |
|------|---------------|
| `ELE QUE A GENTE QUER? (x > 0)` | `if (x > 0)` |
| `QUE NAO VAI DAR O QUE? (x < 0)` | `else if (x < 0)` |
| `NAO VAI DAR NAO` | `else` |
| `BIRL` | `}` |

**Exemplo real: Sistema de aprovação**

```birl
HORA DO SHOW
    MONSTRO NOTA = 0;
    CE QUER VER ESSA PORRA? ("Nota do aluno (0 a 10): ");
    QUE QUE CE QUER MONSTRAO? ("%d", &NOTA);

    ELE QUE A GENTE QUER? (NOTA >= 7)
        CE QUER VER ESSA PORRA? ("APROVADO! Shape academico!\n");
    QUE NAO VAI DAR O QUE? (NOTA >= 5)
        CE QUER VER ESSA PORRA? ("RECUPERACAO. Precisa de mais suplemento.\n");
    NAO VAI DAR NAO
        CE QUER VER ESSA PORRA? ("REPROVADO. Catabolizou nos estudos.\n");
    BIRL
BIRL
```

### 5.2 Loop While

```birl
NEGATIVA BAMBAM (condição)
    // corpo do loop
BIRL
```

**Exemplo: Contagem regressiva**

```birl
HORA DO SHOW
    MONSTRO I = 5;
    NEGATIVA BAMBAM (I > 0)
        CE QUER VER ESSA PORRA? ("%d... ", I);
        I = I - 1;
    BIRL
    CE QUER VER ESSA PORRA? ("BIRL!\n");
BIRL
// Saída: 5... 4... 3... 2... 1... BIRL!
```

### 5.3 Loop For

```birl
MAIS QUERO MAIS (inicialização; condição; incremento)
    // corpo do loop
BIRL
```

**Exemplo: Tabuada**

```birl
HORA DO SHOW
    MONSTRO NUM = 7;
    MONSTRO I;
    CE QUER VER ESSA PORRA? ("--- Tabuada do %d ---\n", NUM);
    MAIS QUERO MAIS (I = 1; I <= 10; I++)
        CE QUER VER ESSA PORRA? ("%d x %d = %d\n", NUM, I, NUM * I);
    BIRL
BIRL
```

### 5.4 Loops aninhados

```birl
HORA DO SHOW
    MONSTRO I;
    MONSTRO J;
    MAIS QUERO MAIS (I = 1; I <= 3; I++)
        MAIS QUERO MAIS (J = 1; J <= 3; J++)
            CE QUER VER ESSA PORRA? ("(%d,%d) ", I, J);
        BIRL
        CE QUER VER ESSA PORRA? ("\n");
    BIRL
BIRL
```

---

## 6. Funções

### 6.1 Declaração

Funções em BIRL são declaradas com `OH O HOME AI PO`. Todos os parâmetros são tipados como `MONSTRO`.

```birl
OH O HOME AI PO (MONSTRO nomeDaFuncao(MONSTRO param1, MONSTRO param2))
    // corpo da função
    BORA CUMPADE resultado;
BIRL
```

### 6.2 Chamada de função

Para chamar (invocar) uma função, use `AJUDA O MALUCO TA DOENTE`:

```birl
AJUDA O MALUCO TA DOENTE nomeDaFuncao(arg1, arg2);
```

Com retorno:

```birl
MONSTRO resultado = AJUDA O MALUCO TA DOENTE nomeDaFuncao(arg1, arg2);
```

### 6.3 Retorno

Use `BORA CUMPADE` para retornar um valor de uma função.

```birl
OH O HOME AI PO (MONSTRO SOMAR(MONSTRO A, MONSTRO B))
    BORA CUMPADE A + B;
BIRL

OH O HOME AI PO (MONSTRO FATORIAL(MONSTRO N))
    ELE QUE A GENTE QUER? (N <= 1)
        BORA CUMPADE 1;
    BIRL
    MONSTRO R = AJUDA O MALUCO TA DOENTE FATORIAL(N - 1);
    BORA CUMPADE N * R;
BIRL
```

### 6.4 Exemplo completo

```birl
HORA DO SHOW
    // Definir funções ANTES de usar
    OH O HOME AI PO (MONSTRO MAIOR(MONSTRO A, MONSTRO B))
        ELE QUE A GENTE QUER? (A > B)
            BORA CUMPADE A;
        BIRL
        BORA CUMPADE B;
    BIRL

    MONSTRO X = 15;
    MONSTRO Y = 42;
    MONSTRO M = AJUDA O MALUCO TA DOENTE MAIOR(X, Y);
    CE QUER VER ESSA PORRA? ("O maior entre %d e %d e: %d\n", X, Y, M);
BIRL
```

### 6.5 Boas práticas

| ✅ Fazer | ❌ Evitar |
|----------|----------|
| Declarar funções antes do uso | Chamar antes de declarar |
| Nomes descritivos (`CALCULAR_MEDIA`) | Nomes vagos (`F1`, `FUNC`) |
| Retornar valores explícitos | Depender de efeitos colaterais |
| Funções pequenas e focadas | Funções com 100+ linhas |

---

## 7. Estruturas de Dados

### 7.1 Arrays (Listas dinâmicas)

Arrays em BIRL são criados com `VEM MONSTRO` e crescem dinamicamente.

```birl
HORA DO SHOW
    // Criação
    MONSTRO NOTAS = VEM MONSTRO;

    // Adicionando elementos
    AJUDA O MALUCO TA DOENTE NOTAS.BOTA_PRA_FUDER(10);
    AJUDA O MALUCO TA DOENTE NOTAS.BOTA_PRA_FUDER(8);
    AJUDA O MALUCO TA DOENTE NOTAS.BOTA_PRA_FUDER(9);

    // Tamanho
    MONSTRO TAM = AJUDA O MALUCO TA DOENTE NOTAS.TAMANHO();
    CE QUER VER ESSA PORRA? ("Total de notas: %d\n", TAM);

    // Acessando por índice (0-based)
    MONSTRO PRIMEIRA = AJUDA O MALUCO TA DOENTE NOTAS.PEGA(0);
    CE QUER VER ESSA PORRA? ("Primeira nota: %d\n", PRIMEIRA);

    // Iterando
    MONSTRO I;
    MAIS QUERO MAIS (I = 0; I < TAM; I++)
        MONSTRO N = AJUDA O MALUCO TA DOENTE NOTAS.PEGA(I);
        CE QUER VER ESSA PORRA? ("Nota[%d] = %d\n", I, N);
    BIRL
BIRL
```

**Métodos de Array:**

| Método | Descrição | Equivalente |
|--------|-----------|-------------|
| `BOTA_PRA_FUDER(valor)` | Adiciona ao final | `push()` |
| `TAMANHO()` | Retorna o tamanho | `length` |
| `PEGA(indice)` | Retorna elemento no índice | `[indice]` |

### 7.2 Classes (JAULA)

BIRL suporta Orientação a Objetos com a keyword `JAULA` (jaula = gaiola = onde o monstro fica).

```birl
HORA DO SHOW
    // Definição da classe
    JAULA Pessoa
        OH O HOME AI PO (MONSTRO INIT(MONSTRO NOME, MONSTRO IDADE))
            O_PAI.NOME = NOME;
            O_PAI.IDADE = IDADE;
            BORA CUMPADE 1;
        BIRL

        OH O HOME AI PO (MONSTRO APRESENTAR())
            CE QUER VER ESSA PORRA? ("Eu sou %s, %d anos.\n", O_PAI.NOME, O_PAI.IDADE);
            BORA CUMPADE 1;
        BIRL
    BIRL

    // Instanciação
    MONSTRO P = SAINDO DA JAULA Pessoa;
    AJUDA O MALUCO TA DOENTE P.INIT("Bambam", 45);

    // Chamada de método
    AJUDA O MALUCO TA DOENTE P.APRESENTAR();

    // Acesso direto a atributos
    CE QUER VER ESSA PORRA? ("Nome: %s\n", P.NOME);
BIRL
```

**Referência `O_PAI`:**

`O_PAI` é o `this`/`self` do BIRL. Dentro de um método, `O_PAI` referencia a instância atual do objeto.

```birl
// O_PAI é como 'self' do Python ou 'this' do Java
// Dentro de um método:
O_PAI.NOME = "valor";  // Atribui ao atributo do objeto
```

### 7.3 Objetos com arrays internos

Classes podem conter arrays como atributos (composição):

```birl
HORA DO SHOW
    JAULA Turma
        OH O HOME AI PO (MONSTRO INIT(MONSTRO NOME))
            O_PAI.NOME = NOME;
            O_PAI.ALUNOS = VEM MONSTRO;
            BORA CUMPADE 1;
        BIRL

        OH O HOME AI PO (MONSTRO ADICIONAR(MONSTRO ALUNO))
            AJUDA O MALUCO TA DOENTE O_PAI.ALUNOS.BOTA_PRA_FUDER(ALUNO);
            BORA CUMPADE 1;
        BIRL

        OH O HOME AI PO (MONSTRO TOTAL())
            BORA CUMPADE AJUDA O MALUCO TA DOENTE O_PAI.ALUNOS.TAMANHO();
        BIRL
    BIRL

    MONSTRO T = SAINDO DA JAULA Turma;
    AJUDA O MALUCO TA DOENTE T.INIT("3o Ano B");
    AJUDA O MALUCO TA DOENTE T.ADICIONAR("Marcus");
    AJUDA O MALUCO TA DOENTE T.ADICIONAR("Adam");

    MONSTRO N = AJUDA O MALUCO TA DOENTE T.TOTAL();
    CE QUER VER ESSA PORRA? ("Turma: %s | Alunos: %d\n", T.NOME, N);
BIRL
```

---

## 8. Programação Avançada

### 8.1 Orientação a Objetos

BIRL implementa OOP com:
- **Encapsulamento**: Atributos acessados via `O_PAI` dentro de métodos
- **Instanciação**: `SAINDO DA JAULA NomeClasse` cria novas instâncias
- **Métodos**: Funções declaradas dentro de `JAULA` acessam o contexto do objeto
- **Composição**: Objetos podem conter outros objetos e arrays

**Padrão de construtor (INIT):**

```birl
JAULA MinhaClasse
    OH O HOME AI PO (MONSTRO INIT(MONSTRO P1, MONSTRO P2))
        O_PAI.ATTR1 = P1;
        O_PAI.ATTR2 = P2;
        BORA CUMPADE 1;
    BIRL
BIRL

MONSTRO OBJ = SAINDO DA JAULA MinhaClasse;
AJUDA O MALUCO TA DOENTE OBJ.INIT("valor1", 42);
```

### 8.2 Soft Delete (Exclusão lógica)

BIRL permite implementar padrões de banco de dados como soft delete:

```birl
JAULA Registro
    OH O HOME AI PO (MONSTRO INIT(MONSTRO NOME))
        O_PAI.NOME = NOME;
        O_PAI.ATIVO = 1;
        BORA CUMPADE 1;
    BIRL

    OH O HOME AI PO (MONSTRO DELETAR())
        O_PAI.ATIVO = 0;
        BORA CUMPADE 1;
    BIRL
BIRL
```

### 8.3 Tratamento de erros

BIRL informa erros em tempo de execução com mensagens descritivas:

```
🔥 ERRO DE EXECUÇÃO: Expressão falha ou variável não declarada!
👉 Linha 15: "VARIAVEL_QUE_NAO_EXISTE"
```

**Estratégias de defesa:**

```birl
// Sempre valide antes de dividir
ELE QUE A GENTE QUER? (DIVISOR > 0)
    MONSTRO RESULTADO = DIVIDENDO / DIVISOR;
NAO VAI DAR NAO
    CE QUER VER ESSA PORRA? ("ERRO: Divisao por zero!\n");
BIRL
```

---

## 9. Sistema da Linguagem

### 9.1 Arquitetura do interpretador

```
                    ┌──────────────────────┐
    arquivo.birl ──>│    Lexer / Splitter   │
                    │  (divide em linhas,   │
                    │   remove comentários) │
                    └──────────┬───────────┘
                               │
                    ┌──────────▼───────────┐
                    │  Bloco Extractor      │
                    │  (identifica blocos   │
                    │   por profundidade)   │
                    └──────────┬───────────┘
                               │
                    ┌──────────▼───────────┐
                    │  executarBloco()      │
                    │  (pattern matching    │
                    │   sequencial)         │
                    └──────────┬───────────┘
                               │
                    ┌──────────▼───────────┐
                    │  getValue()           │
                    │  (avaliador de        │
                    │   expressões via      │
                    │   Function())         │
                    └──────────────────────┘
```

### 9.2 Ciclo de vida da execução

1. **Leitura** — O arquivo `.birl` é lido como UTF-8
2. **Tokenização** — O código é dividido em linhas. Cada linha é um "token"
3. **Filtragem** — Comentários (`//`) são removidos. Linhas vazias são ignoradas
4. **Ponto de entrada** — O interpretador busca `HORA DO SHOW`
5. **Execução sequencial** — Cada linha é processada por pattern matching (regex)
6. **Avaliação** — Expressões são avaliadas via `new Function()` (sandbox do JavaScript)
7. **Saída** — O output é bufferizado e flushed em quebras de linha

### 9.3 Palavras reservadas (Tokens)

| Token | Tipo | Descrição |
|-------|------|-----------|
| `HORA DO SHOW` | Entrypoint | Início do programa |
| `BIRL` | Delimiter | Fecha qualquer bloco |
| `MONSTRO` | Keyword | Declara variável |
| `CE QUER VER ESSA PORRA?` | I/O | Output (print) |
| `QUE QUE CE QUER MONSTRAO?` | I/O | Input (scanf) |
| `ELE QUE A GENTE QUER?` | Control | if |
| `QUE NAO VAI DAR O QUE?` | Control | else if |
| `NAO VAI DAR NAO` | Control | else |
| `NEGATIVA BAMBAM` | Loop | while |
| `MAIS QUERO MAIS` | Loop | for |
| `OH O HOME AI PO` | Function | Declaração de função |
| `AJUDA O MALUCO TA DOENTE` | Function | Chamada de função |
| `BORA CUMPADE` | Return | Retorna valor |
| `JAULA` | OOP | Define classe |
| `SAINDO DA JAULA` | OOP | Instancia classe |
| `O_PAI` | OOP | Referência self/this |
| `VEM MONSTRO` | Data | Cria array vazio |
| `BOTA_PRA_FUDER` | Method | Array.push() |
| `TAMANHO` | Method | Array.length |
| `PEGA` | Method | Array[index] |

---

## 10. Extensões e Plugins

### 10.1 VS Code / Cursor / Antigravity

A extensão oficial está em `birl-vscode-extension/`.

**O que ela oferece:**

- ✅ Syntax highlighting (cores para keywords, strings, números, comentários)
- ✅ Keybinding `Ctrl+Alt+B` para executar o arquivo
- ✅ Status bar com botão de execução
- ✅ Menu de contexto (clique direito → "BIRL: Executar")

### 10.2 Instalando a extensão

```bash
cd birl-vscode-extension
npm install
npm run package
# Abra seu editor → Extensions → "..." → Install from VSIX
```

### 10.3 Estrutura da extensão

```
birl-vscode-extension/
├── package.json               # Manifesto (define linguagem, gramática, comandos)
├── extension.js               # Lógica de ativação e comandos
├── language-configuration.json # Pares de fechamento e brackets
├── .vscodeignore              # Arquivos excluídos do VSIX
└── syntaxes/
    └── birl.tmLanguage.json   # Gramática TextMate (colorização)
```

---

## 11. Ferramentas e CLI

### 11.1 Executando um programa

```bash
birl programa.birl
```

### 11.2 Flags disponíveis

| Flag | Descrição |
|------|-----------|
| `<arquivo>` | Executa o arquivo .birl especificado |
| (sem argumento) | Tenta executar `programa.birl` no diretório atual |

### 11.3 Output do CLI

```bash
$ birl exemplo.birl
💪 CARREGANDO COMPILADOR BIRL V5.4 (O SHAPE INVISÍVEL REVELADO)...

[saída do programa aqui]

💪 TREINO CONCLUÍDO!
```

### 11.4 Executando via extensão

No editor, com um arquivo `.birl` aberto:
- Pressione `Ctrl+Alt+B`
- Ou clique com o botão direito → "BIRL: Executar Treino 💪"
- Ou clique no botão `$(play) BIRL` na status bar

---

## 12. Debugging

### 12.1 Mensagens de erro

BIRL fornece mensagens de erro descritivas com número de linha:

| Mensagem | Causa | Solução |
|----------|-------|---------|
| `🔥 ERRO FATAL: Cadê o arquivo?` | Arquivo não encontrado | Verifique o caminho |
| `🔥 ERRO FATAL: Faltou 'HORA DO SHOW'` | Sem ponto de entrada | Adicione `HORA DO SHOW` |
| `🔥 ERRO DE SINTAXE: O bloco não foi fechado!` | Faltou `BIRL` | Conte seus blocos |
| `🔥 ERRO DE EXECUÇÃO: Expressão falha` | Variável não existe | Declare com `MONSTRO` |
| `🔥 ERRO: Função 'X' não existe!` | Chamou antes de declarar | Mova a declaração para cima |
| `🔥 ERRO: A jaula 'X' não existe!` | Classe não definida | Defina a `JAULA` antes |
| `🔥 ERRO SINTAXE INPUT` | Formato errado no input | Use `("%d", &VAR)` |

### 12.2 Técnicas de debugging

**1. Print debugging (a arte milenar):**
```birl
CE QUER VER ESSA PORRA? ("[DEBUG] X = %d\n", X);
```

**2. Verificação de limites:**
```birl
ELE QUE A GENTE QUER? (INDICE < AJUDA O MALUCO TA DOENTE LISTA.TAMANHO())
    // seguro acessar
BIRL
```

**3. O "Developer: Inspect Editor Tokens"** no editor mostra se a gramática está carregada.

### 12.3 Erros comuns de iniciantes

| Erro | O que fizeram | O que deviam fazer |
|------|--------------|-------------------|
| Variável não declarada | `X = 10;` | `MONSTRO X = 10;` |
| Bloco não fechado | Esqueceu o `BIRL` | Adicionar `BIRL` |
| String sem `\n` | `CE QUER VER ESSA PORRA? ("texto");` | Adicionar `\n` se quiser quebra de linha |
| Input sem `&` | `QUE QUE CE QUER MONSTRAO? ("%d", X);` | Usar `&X` |
| Ponto e vírgula | Esqueceu o `;` nas atribuições | `MONSTRO X = 10;` (com `;`) |

---

## 13. Boas Práticas

### 13.1 Padrões recomendados

```birl
// ✅ BOM: Nomes descritivos em CAPS
MONSTRO NOTA_FINAL = 0;
MONSTRO TOTAL_ALUNOS = 30;

// ✅ BOM: Funções antes do uso
OH O HOME AI PO (MONSTRO CALCULAR(MONSTRO X))
    BORA CUMPADE X * 2;
BIRL

// ✅ BOM: Comentários explicativos
// Regra de Negócio: aprovado se nota >= 7
ELE QUE A GENTE QUER? (NOTA >= 7)
```

### 13.2 Anti-patterns

```birl
// ❌ RUIM: Variáveis de uma letra
MONSTRO X = 10;    // O que é X?

// ❌ RUIM: Blocos sem indentação
ELE QUE A GENTE QUER? (X > 0)
CE QUER VER ESSA PORRA? ("positivo\n");
BIRL

// ❌ RUIM: Função gigante sem decomposição
// (coloque sub-rotinas em funções separadas)
```

### 13.3 Performance

- Arrays grandes (1000+ elementos) podem ficar lentos em loops aninhados
- Evite recursão profunda (JavaScript tem limite de stack)
- Use variáveis "registradoras" para loops, como `T_NUM1`, `T_STR1`

---

## 14. Exemplos Reais

### 14.1 Calculadora de IMC

```birl
HORA DO SHOW
    MONSTRO PESO;
    MONSTRO ALTURA;

    CE QUER VER ESSA PORRA? ("=== CALCULADORA DE IMC ===\n");
    CE QUER VER ESSA PORRA? ("Peso (kg): ");
    QUE QUE CE QUER MONSTRAO? ("%f", &PESO);
    CE QUER VER ESSA PORRA? ("Altura (m, ex: 1.75): ");
    QUE QUE CE QUER MONSTRAO? ("%f", &ALTURA);

    MONSTRO IMC = PESO / (ALTURA * ALTURA);
    CE QUER VER ESSA PORRA? ("Seu IMC: %f\n", IMC);

    ELE QUE A GENTE QUER? (IMC < 18.5)
        CE QUER VER ESSA PORRA? ("Abaixo do peso. Come mais, frango!\n");
    QUE NAO VAI DAR O QUE? (IMC < 25)
        CE QUER VER ESSA PORRA? ("Peso ideal. Shape perfeito!\n");
    QUE NAO VAI DAR O QUE? (IMC < 30)
        CE QUER VER ESSA PORRA? ("Sobrepeso. Hora do cardio, monstro.\n");
    NAO VAI DAR NAO
        CE QUER VER ESSA PORRA? ("Obesidade. Muda a dieta JA!\n");
    BIRL
BIRL
```

### 14.2 Sistema de CRUD com Classes

```birl
HORA DO SHOW
    JAULA Contato
        OH O HOME AI PO (MONSTRO INIT(MONSTRO NOME, MONSTRO TEL))
            O_PAI.NOME = NOME;
            O_PAI.TEL = TEL;
            BORA CUMPADE 1;
        BIRL
        OH O HOME AI PO (MONSTRO MOSTRAR())
            CE QUER VER ESSA PORRA? ("[%s] Tel: %s\n", O_PAI.NOME, O_PAI.TEL);
            BORA CUMPADE 1;
        BIRL
    BIRL

    MONSTRO AGENDA = VEM MONSTRO;
    MONSTRO N;
    MONSTRO I;
    MONSTRO NOME;
    MONSTRO TEL;
    MONSTRO OBJ;

    CE QUER VER ESSA PORRA? ("Contatos para salvar: ");
    QUE QUE CE QUER MONSTRAO? ("%d", &N);

    MAIS QUERO MAIS (I = 0; I < N; I++)
        CE QUER VER ESSA PORRA? ("Nome: ");
        QUE QUE CE QUER MONSTRAO? ("%s", &NOME);
        CE QUER VER ESSA PORRA? ("Telefone: ");
        QUE QUE CE QUER MONSTRAO? ("%s", &TEL);
        OBJ = SAINDO DA JAULA Contato;
        AJUDA O MALUCO TA DOENTE OBJ.INIT(NOME, TEL);
        AJUDA O MALUCO TA DOENTE AGENDA.BOTA_PRA_FUDER(OBJ);
    BIRL

    CE QUER VER ESSA PORRA? ("\n--- AGENDA COMPLETA ---\n");
    MAIS QUERO MAIS (I = 0; I < N; I++)
        OBJ = AJUDA O MALUCO TA DOENTE AGENDA.PEGA(I);
        AJUDA O MALUCO TA DOENTE OBJ.MOSTRAR();
    BIRL
BIRL
```

### 14.3 Menu interativo com loop

```birl
HORA DO SHOW
    MONSTRO OPCAO = 0;
    NEGATIVA BAMBAM (OPCAO != 3)
        CE QUER VER ESSA PORRA? ("\n[1] Saudacao\n[2] Piada\n[3] Sair\nEscolha: ");
        QUE QUE CE QUER MONSTRAO? ("%d", &OPCAO);

        ELE QUE A GENTE QUER? (OPCAO == 1)
            CE QUER VER ESSA PORRA? ("FALA MEU MONSTRO! BIRL!\n");
        QUE NAO VAI DAR O QUE? (OPCAO == 2)
            CE QUER VER ESSA PORRA? ("Por que o haltere foi ao medico? Tava com dor muscular!\n");
        QUE NAO VAI DAR O QUE? (OPCAO == 3)
            CE QUER VER ESSA PORRA? ("Valeu monstro, ate o proximo treino!\n");
        NAO VAI DAR NAO
            CE QUER VER ESSA PORRA? ("Opcao invalida, frango!\n");
        BIRL
    BIRL
BIRL
```

---

## 15. Contribuição

### O projeto é open-source! 🎉

BIRL é mantido por **Marcus e Adam** e aceita contribuições de qualquer monstro que queira ajudar.

### Como contribuir

1. **Fork** o repositório no GitHub
2. **Clone** seu fork localmente
3. Crie uma **branch** para sua feature: `git checkout -b feat/minha-feature`
4. Faça suas alterações
5. **Commit** seguindo o padrão (veja abaixo)
6. **Push** para seu fork
7. Abra um **Pull Request**

### Padrão de commits

```
tipo(escopo): descrição curta

Tipos válidos:
- feat:     nova funcionalidade
- fix:      correção de bug
- docs:     documentação
- refactor: refatoração sem alterar comportamento
- test:     adição de testes
- chore:    manutenção geral
```

**Exemplos:**

```
feat(interpreter): adicionar suporte a switch/case
fix(oop): corrigir acesso a propriedades aninhadas
docs(readme): atualizar instruções de instalação
```

### Estrutura do repositório

```
RevivendoBirl/
├── birl-cli/                  # Interpretador (CLI)
│   ├── core/interpreter.js    # Motor da linguagem (modular)
│   ├── index.js               # Entrypoint CLI
│   └── package.json           # npm: birl-lang
│
├── birl-vscode-extension/     # Extensão VS Code
│   ├── syntaxes/              # Gramática TextMate
│   ├── extension.js           # Lógica
│   └── package.json           # Manifesto
│
├── docs/                      # Documentação
│   ├── DOCUMENTATION.md       # Este arquivo
│   ├── SYNTAX.md              # Referência rápida
│   └── EXAMPLES.md            # Exemplos
│
├── programa.birl              # Programa de demonstração
├── teste.birl                 # Testes manuais
├── index.js                   # Interpretador standalone
├── README.md                  # Página inicial
├── CONTRIBUTING.md            # Guia de contribuição
└── LICENSE                    # MIT
```

### Guia para iniciantes

1. Leia a documentação
2. Rode o `programa.birl` para entender como funciona
3. Tente criar um programa simples
4. Se encontrar um bug, abra uma **Issue**
5. Se quiser corrigir, mande um **PR**

---

## 16. Roadmap

### v2.0 — Próxima versão

- [ ] **Switch/Case** — `QUAL O SHAPE?` com múltiplos `CASE`
- [ ] **Herança de classes** — `JAULA Filho HERDA Pai`
- [ ] **Import de módulos** — `TRAGA O SUPLEMENTO "modulo.birl"`
- [ ] **Try/Catch** — Tratamento de exceções controlado
- [ ] **String interpolation** — Template literals

### v3.0 — Futuro

- [ ] **REPL interativo** — `birl` sem argumentos abre o modo interativo
- [ ] **Debugger integrado** — Breakpoints e step-by-step
- [ ] **Playground web** — Rodar BIRL no navegador
- [ ] **Language Server Protocol** — Autocomplete, hover docs, diagnósticos
- [ ] **npm publish** — `npm install -g birl-lang` direto do registry

### Melhorias contínuas

- [ ] Mais métodos de array (`REMOVE`, `ORDENA`, `INVERTE`)
- [ ] Operador ternário
- [ ] Literais de array: `VEM MONSTRO [1, 2, 3]`
- [ ] Tipos numéricos explícitos (`INTEIRO`, `FRALDA`, `FIBRA`)

---

## 17. FAQ

### Perguntas frequentes

**P: BIRL é uma linguagem real?**
R: Sim. Ela interpreta código, possui classes, arrays, funções e um sistema de I/O completo. É tão real quanto o treino do Bambam.

**P: Posso usar BIRL em produção?**
R: Você *pode*, mas seus colegas de trabalho vão ter dúvidas. Use para aprender, ensinar e se divertir.

**P: Por que tudo é em CAPS LOCK?**
R: Porque no treino a gente grita. Código sussurrado é código de frango.

**P: BIRL compila ou interpreta?**
R: Interpreta. O motor roda sobre Node.js e avalia expressões em tempo de execução.

**P: Funciona no Linux/Mac?**
R: Sim. Qualquer sistema com Node.js 14+ roda BIRL.

**P: A extensão funciona no VS Code normal?**
R: Sim. Funciona no VS Code, Cursor, Antigravity e qualquer fork do VS Code.

**P: Como reporto um bug?**
R: Abra uma Issue no GitHub com o código que causou o erro e a mensagem de erro completa.

**P: Tem limite de linhas?**
R: Não. O `programa.birl` de demonstração tem 748 linhas e roda perfeitamente.

**P: Posso usar BIRL num trabalho de faculdade?**
R: Se o professor tiver senso de humor, sim. Recomendamos levar um suplemento como desculpa.

---

## 18. Licença

```
MIT License

Copyright (c) 2025 Marcus e Adam

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
```

---

<div align="center">

**BIRL** — Feito com 💪 por Marcus e Adam

*"O código que você grita, não sussurra."*

</div>
