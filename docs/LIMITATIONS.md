# 🛑 Limitações e O que a BIRL não faz

Nenhum monstro é perfeito. Para manter a performance e a blindagem do shape, o interpretador BIRL V5.5 possui algumas limitações técnicas conscientes que todo desenvolvedor deve conhecer.

---

## 1. Paradigma OOP Simplificado

### 1.1 Sem Herança
Diferente de linguagens como Java ou C#, a BIRL não suporta herança entre `JAULAS`. Não existe `extends` ou `super()`. Cada Jaula é um ecossistema independente.
*   **Solução**: Use Composição em vez de Herança.

### 1.2 Sem Modificadores de Acesso (Private/Public)
Todos os atributos em `O_PAI` são públicos e acessíveis de fora da Jaula. Não existe proteção de memória nativa para evitar que um "frango" mexa no seu atributo privado.
*   **Melhor Prática**: Use convenções de nomenclatura (ex: `O_PAI._VALOR_INTERNO`).

---

## 2. Concorrência e Assincronicidade

### 2.1 Execução Monolítica Síncrona
Apesar do interpretador rodar em Node.js (que é assíncrono), os scripts `.birl` são executados de forma **estritamente síncrona**. Você não pode criar "Promessas" ou rodar treinos em paralelo dentro da linguagem.
*   **Impacto**: Operações de I/O pesadas bloqueiam a execução do script até serem concluídas.

---

## 3. Ecossistema e Biblioteca Padrão

### 3.1 Biblioteca Padrão (StdLib) Minimalista
A BIRL não possui acesso nativo ao sistema de arquivos (FileSystem), à rede (HTTP) ou a bibliotecas matemáticas avançadas.
*   **Disponível**: Apenas manipulação de Listas/Arrays e I/O de console básico.

---

## 4. Gerenciamento de Erros

### 4.1 Falta de `try/catch`
Se o seu código catabolizar (gerar um erro de sintaxe ou execução), o interpretador irá encerrar o processo (`process.exit(1)`) imediatamente. Não há como capturar exceções em tempo de execução para manter o programa de pé.

---

## 5. Performance de Execução

### 5.1 Sobrecarga de Interpretação
Como o motor utiliza Expressões Regulares (RegExp) e `new Function()` para avaliar **cada linha** em tempo real, a BIRL não é indicada para aplicações de alta performance computacional ou cálculos científicos complexos.

---

## 6. Sistema de Tipos

### 6.1 Tipagem Dinâmica e Fraca
Não existe verificação de tipos em tempo de compilação. O interpretador só descobre que você tentou somar uma String com um Objeto no momento da execução.

---

**"CONHECER SUAS LIMITAÇÕES É O PRIMEIRO PASSO PARA SUPERÁ-LAS!"** 👊🏋️‍♂️
