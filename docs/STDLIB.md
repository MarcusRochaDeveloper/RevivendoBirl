# 📦 Biblioteca Padrão e I/O: Suplementação de Código

> "Alimente seu código com dados de qualidade, ou ele cataboliza!"

<div align="right">

[🚀 Introdução](INTRODUCTION.md) · [🏛️ OOP](OOP.md) · [⚙️ Internals](INTERNALS.md) · [← Voltar ao README](../README.md)

</div>

---

O BIRL fornece um conjunto de ferramentas nativas para comunicação, manipulação de dados e coleções dinâmicas.

## 1. Coleções Dinâmicas (`VEM MONSTRO`)

O BIRL não trabalha com arrays estáticos e pequenos. Trabalhamos com listas que crescem conforme a necessidade do seu treino.

### Inicialização
```birl
MONSTRO MINHA_LISTA = VEM MONSTRO;
```

### Métodos Integrados
| Método | Exemplo de Uso | Descrição |
| :--- | :--- | :--- |
| **BOTA_PRA_FUDER** | `AJUDA O MALUCO... LISTA.BOTA_PRA_FUDER(X);` | Adiciona um elemento ao final da lista. |
| **TAMANHO** | `MONSTRO T = AJUDA... LISTA.TAMANHO();` | Retorna o número de elementos na lista. |
| **PEGA** | `MONSTRO E = AJUDA... LISTA.PEGA(0);` | Retorna o elemento no índice (começa em 0). |

---

## 2. Saída de Dados (`CE QUER VER ESSA PORRA?`)

O comando de saída é bufferizado e inteligente. Ele suporta formatação estilo C (printf) para facilitar a vida do monstro sênior.

### Marcadores de Formato
- **`%s`**: Strings (textos).
- **`%d`**: Inteiros (números sem vírgula).
- **`%f`**: Floats (números decimais).

### Exemplo de Formatação
```birl
MONSTRO NOME = "Whey Isolate";
MONSTRO PRECO = 189.90;
CE QUER VER ESSA PORRA? ("Produto: %s | Valor: R$ %f\n", NOME, PRECO);
```

> 💡 **Dica**: O sufixo `\n` é essencial para pular de linha. Sem ele, os textos ficarão todos grudados, o que é coisa de frango.

---

## 3. Entrada de Dados (`QUE QUE CE QUER MONSTRAO?`)

Capturar o que o usuário quer é um processo síncrono e direto.

### O Operador de Referência `&`
Diferente da atribuição comum, a entrada de dados exige o `&` antes da variável.

```birl
MONSTRO IDADE;
CE QUER VER ESSA PORRA? ("Qual sua idade, monstro? ");
QUE QUE CE QUER MONSTRAO? ("%d", &IDADE);
```

---

## 4. Otimização e Performance

1. **Buffer de Saída**: O interpretador BIRL só despeja o texto no terminal quando encontra um `\n`. Isso evita milhares de chamadas de sistema e mantém a performance alta.
2. **Garbage Collection**: Para limpar uma lista gigante e liberar memória, basta reatribuí-la:
   ```birl
   LISTA = VEM MONSTRO; // A lista antiga será destruída pelo GC do Node.js
   ```

---

<div align="center">

**Código suplementado é código que não falha!** 👊🏋️‍♂️

</div>
