# 🏛️ Manual de Orientação a Objetos: JAULAS e Monstros

A BIRL OOP V5.5 eleva a linguagem para o paradigma de classes, permitindo a criação de softwares modulares e "blindados".

---

## 1. O Conceito de `JAULA` (Classe)

Uma `JAULA` é o molde para um objeto. Dentro dela, definimos as características (atributos) e as ações (métodos) que o objeto pode realizar.

### 1.1 Definição de Jaula
```birl
JAULA NomeDaJaula
    // Definição de métodos
BIRL
```

---

## 2. Métodos e Comportamento

Os métodos são definidos usando a frase **`OH O HOME AI PO`**.

### 2.1 Método Especial: `INIT`
Embora o nome seja arbitrário, por padrão usamos o método `INIT` para inicializar os atributos do objeto assim que ele "sai da jaula".

```birl
OH O HOME AI PO (MONSTRO INIT(MONSTRO N, MONSTRO P))
    O_PAI.NOME = N;
    O_PAI.PRECO = P;
    BORA CUMPADE 1;
BIRL
```

---

## 3. A Palavra-Chave `O_PAI` (This Context)

Diferente de variáveis globais, o `O_PAI` é a referência ao **contexto da instância local**. Tudo o que você pendura no `O_PAI` (ex: `O_PAI.X = 10`) torna-se um atributo persistente daquela instância específica.

- **Escopo**: O `O_PAI` só é acessível dentro de métodos de uma `JAULA`.
- **Persistência**: Os valores em `O_PAI` duram enquanto o objeto existir na memória.

---

## 4. O Ciclo de Vida do Objeto

### 4.1 Instanciação (`SAINDO DA JAULA`)
Para transformar uma Jaula em um objeto funcional:
```birl
MONSTRO MEU_OBJ = SAINDO DA JAULA NomeDaJaula;
```

### 4.2 Inicialização
Após sair da jaula, o objeto precisa de "suplementação" (inicialização de dados):
```birl
AJUDA O MALUCO TA DOENTE MEU_OBJ.INIT("Whey", 150);
```

### 4.3 Chamada de Métodos
Métodos de objeto sempre exigem o prefixo `AJUDA O MALUCO TA DOENTE` seguido pelo `caminho.do.metodo()`.

---

## 5. Encapsulamento e Estado

Na BIRL, o encapsulamento é garantido pelo interpretador através do `ctx` (contexto).
- Atributos criados via `O_PAI` podem ser acessados externamente via `OBJETO.ATRIBUTO`, mas a boa prática monstra sugere o uso de métodos "Getter/Setter" para manter a blindagem.

---

**"CONSTRUA JAULAS FORTES E NENHUM BUG ESCAPARÁ!"** 👊🏋️‍♂️
