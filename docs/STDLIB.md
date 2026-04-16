# 📦 Biblioteca Padrão e I/O: Suplementação de Código

Este documento detalha os recursos integrados do interpretador para manipulação de coleções e comunicação com o usuário.

---

## 1. Manipulação de Listas (`VEM MONSTRO`)

O BIRL fornece um tipo de dado de lista dinâmica (Array) extremamente flexível.

### 1.1 Inicialização
```birl
MONSTRO MINHA_LISTA = VEM MONSTRO;
```

### 1.2 Métodos Disponíveis
| Método | Assinatura | Descrição |
| :--- | :--- | :--- |
| **BOTA_PRA_FUDER** | `.BOTA_PRA_FUDER(elemento)` | Adiciona o elemento ao final da lista. |
| **TAMANHO** | `.TAMANHO()` | Retorna a contagem total de elementos. |
| **PEGA** | `.PEGA(indice)` | Retorna o elemento na posição especificada (0-based). |

---

## 2. Formatação de Saída (`CE QUER VER ESSA PORRA?`)

O interpretador usa um motor de buffer inteligente. Ele só despeja o conteúdo na tela quando encontra um caractere de nova linha (`\n`) ou quando o programa termina.

### 2.1 Máscaras de Formatação
- **`%s`**: Representação de String. Limpa as aspas automaticamente.
- **`%d`**: Representação de Inteiro. Trunca o valor (Math.trunc).
- **`%f`**: Representação de Float. Exibe o valor numérico completo.

**Exemplo:**
```birl
CE QUER VER ESSA PORRA? ("Item: %s | Valor: R$ %f\n", NOME, VALOR);
```

---

## 3. Entrada de Dados (`QUE QUE CE QUER MONSTRAO?`)

A entrada de dados é síncrona e bloqueia o loop de eventos do Node.js até que o usuário pressione Enter.

### 3.1 Captura por Referência
Diferente de atribuições comuns, a entrada exige o operador `&` antes da variável de destino.

```birl
QUE QUE CE QUER MONSTRAO? ("%d", &IDADE);
```

---

## 4. Otimização de Memória e GC Manual

O interpretador BIRL V5.5 não possui um coletor de lixo agressivo em tempo de execução. Para garantir a performance em programas longos:
- **Sobrescrita de Listas**: Use `LISTA = VEM MONSTRO;` para zerar uma lista e liberar os objetos antigos para o Garbage Collector do Node.js.
- **Buffers de String**: Evite concatenações manuais gigantescas; prefira o uso de múltiplos comandos `CE QUER VER ESSA PORRA?`.

---

**"ALIMENTE SEU CÓDIGO COM DADOS DE QUALIDADE!"** 👊🏋️‍♂️
