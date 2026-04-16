# 🏛️ Manual de Orientação a Objetos: JAULAS e Monstros

> "O que acontece na jaula, fica na jaula."

<div align="right">

[🚀 Introdução](INTRODUCTION.md) · [📖 Documentação](DOCUMENTATION.md) · [📦 Stdlib](STDLIB.md) · [← Voltar ao README](../README.md)

</div>

---

A **BIRL OOP V5.5** eleva a linguagem para o paradigma de classes, permitindo a criação de softwares modulares, reutilizáveis e, acima de tudo, blindados.

## 1. O Conceito de `JAULA` (Classe)

Uma `JAULA` é o blueprint (molde) para um objeto. Dentro dela, definimos os atributos e os métodos que o monstro terá quando sair para o mundo.

### Definição de Jaula

```birl
JAULA NomeDaJaula
    // Definição de métodos aqui
BIRL
```

---

## 2. A Palavra-Chave `O_PAI` (Contexto `this`)

O `O_PAI` é a referência ao **contexto da instância local**. Tudo o que você pendura no `O_PAI` torna-se um atributo persistente daquela instância específica.

- **Persistência**: Os valores em `O_PAI` duram enquanto o objeto estiver vivo.
- **Isolamento**: O que você faz no `O_PAI` de um objeto não afeta o `O_PAI` de outro.

---

## 3. Métodos e Comportamento

Os métodos são declarados dentro da `JAULA` usando `OH O HOME AI PO`.

### 3.1 O Construtor: `INIT`

Por convenção, usamos o método `INIT` para inicializar os atributos do objeto.

```birl
JAULA Produto
    OH O HOME AI PO (MONSTRO INIT(MONSTRO N, MONSTRO P))
        O_PAI.NOME = N;
        O_PAI.PRECO = P;
        BORA CUMPADE 1;
    BIRL
BIRL
```

---

## 4. Ciclo de Vida: Saindo da Jaula

### 1. Instanciação
Para criar um novo monstro a partir do molde:
```birl
MONSTRO MEU_PRODUTO = SAINDO DA JAULA Produto;
```

### 2. Inicialização
Chame o seu método de inicialização:
```birl
AJUDA O MALUCO TA DOENTE MEU_PRODUTO.INIT("Whey Protein", 150.0);
```

### 3. Uso
Acesse métodos e atributos:
```birl
CE QUER VER ESSA PORRA? ("Produto: %s\n", MEU_PRODUTO.NOME);
```

---

## 5. Exemplo Completo: O Sistema de Notas

```birl
JAULA Aluno
    OH O HOME AI PO (MONSTRO INIT(MONSTRO NOME, MONSTRO NOTA))
        O_PAI.NOME = NOME;
        O_PAI.NOTA = NOTA;
        BORA CUMPADE 1;
    BIRL

    OH O HOME AI PO (MONSTRO MOSTRAR())
        CE QUER VER ESSA PORRA? ("Aluno: %s | Nota: %d\n", O_PAI.NOME, O_PAI.NOTA);
        BORA CUMPADE 1;
    BIRL
BIRL

HORA DO SHOW
    MONSTRO A1 = SAINDO DA JAULA Aluno;
    AJUDA O MALUCO TA DOENTE A1.INIT("Marcus", 10);
    
    MONSTRO A2 = SAINDO DA JAULA Aluno;
    AJUDA O MALUCO TA DOENTE A2.INIT("Adam", 9);

    AJUDA O MALUCO TA DOENTE A1.MOSTRAR();
    AJUDA O MALUCO TA DOENTE A2.MOSTRAR();
BIRL
```

---

## 💡 Dicas de Mestre

1. **Getters e Setters**: Embora o acesso direto `OBJ.ATTR` funcione, criar métodos para alterar o estado (ex: `SUBIR_PESO`) mantém o código mais blindado.
2. **Nomes de Classes**: Use **PascalCase** para `JAULAS` (ex: `FuncionarioPublico`) para diferenciar de variáveis comuns.
3. **Composição**: Você pode ter objetos dentro de objetos! Pendure uma `JAULA` em um atributo do `O_PAI`.

---

<div align="center">

**Construe jaulas fortes e nenhum bug escapará!** 👊🏋️‍♂️

</div>
