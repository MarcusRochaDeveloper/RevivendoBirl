# BIRL — Referência Rápida de Sintaxe 💪

Guia compacto com todos os comandos da linguagem BIRL.

---

## Estrutura mínima

```birl
HORA DO SHOW
    // seu código aqui
BIRL
```

---

## Variáveis

```birl
MONSTRO X = 10;          // declaração com valor
MONSTRO Y;               // declaração sem valor (= 0)
X = 42;                  // reatribuição
```

## I/O

```birl
// Output
CE QUER VER ESSA PORRA? ("texto\n");
CE QUER VER ESSA PORRA? ("Nome: %s, Idade: %d\n", NOME, IDADE);

// Input
QUE QUE CE QUER MONSTRAO? ("%d", &VARIAVEL);   // inteiro
QUE QUE CE QUER MONSTRAO? ("%f", &VARIAVEL);   // float
QUE QUE CE QUER MONSTRAO? ("%s", &VARIAVEL);   // string
```

## Controle de fluxo

```birl
// If / Else If / Else
ELE QUE A GENTE QUER? (condição)
    // ...
QUE NAO VAI DAR O QUE? (outra_condição)
    // ...
NAO VAI DAR NAO
    // ...
BIRL

// While
NEGATIVA BAMBAM (condição)
    // ...
BIRL

// For
MAIS QUERO MAIS (I = 0; I < 10; I++)
    // ...
BIRL
```

## Funções

```birl
// Declarar
OH O HOME AI PO (MONSTRO NOME_FUNC(MONSTRO P1, MONSTRO P2))
    BORA CUMPADE P1 + P2;
BIRL

// Chamar
AJUDA O MALUCO TA DOENTE NOME_FUNC(1, 2);

// Com retorno
MONSTRO R = AJUDA O MALUCO TA DOENTE NOME_FUNC(1, 2);
```

## Arrays

```birl
MONSTRO LISTA = VEM MONSTRO;                               // criar
AJUDA O MALUCO TA DOENTE LISTA.BOTA_PRA_FUDER(valor);      // push
MONSTRO T = AJUDA O MALUCO TA DOENTE LISTA.TAMANHO();      // length
MONSTRO V = AJUDA O MALUCO TA DOENTE LISTA.PEGA(0);        // get [0]
```

## Classes (OOP)

```birl
JAULA NomeClasse
    OH O HOME AI PO (MONSTRO INIT(MONSTRO PARAM))
        O_PAI.ATTR = PARAM;
        BORA CUMPADE 1;
    BIRL
    OH O HOME AI PO (MONSTRO METODO())
        // O_PAI = this/self
        BORA CUMPADE O_PAI.ATTR;
    BIRL
BIRL

MONSTRO OBJ = SAINDO DA JAULA NomeClasse;
AJUDA O MALUCO TA DOENTE OBJ.INIT("valor");
AJUDA O MALUCO TA DOENTE OBJ.METODO();
```

## Comentários

```birl
// Comentário de uma linha (único tipo suportado)
```

---

## Tabela de equivalência

| BIRL | C / Java / Python |
|------|-------------------|
| `HORA DO SHOW` | `main()` |
| `BIRL` | `}` |
| `MONSTRO X = 10;` | `int x = 10;` |
| `CE QUER VER ESSA PORRA?` | `printf()` / `print()` |
| `QUE QUE CE QUER MONSTRAO?` | `scanf()` / `input()` |
| `ELE QUE A GENTE QUER?` | `if` |
| `QUE NAO VAI DAR O QUE?` | `else if` |
| `NAO VAI DAR NAO` | `else` |
| `NEGATIVA BAMBAM` | `while` |
| `MAIS QUERO MAIS` | `for` |
| `OH O HOME AI PO` | `function` / `def` |
| `AJUDA O MALUCO TA DOENTE` | chamada de função |
| `BORA CUMPADE` | `return` |
| `JAULA` | `class` |
| `SAINDO DA JAULA` | `new` |
| `O_PAI` | `this` / `self` |
| `VEM MONSTRO` | `[]` / `new Array()` |
| `BOTA_PRA_FUDER` | `push()` |
| `TAMANHO` | `length` |
| `PEGA` | `[index]` |
