# 📋 Estudos de Caso: Os 12 Treinos do Programa

> "Cada exercício é mais um tijolo na sua parede de músculos técnicos!"

<div align="right">

[🚀 Introdução](INTRODUCTION.md) · [⚡ Sintaxe](SYNTAX.md) · [🏛️ OOP](OOP.md) · [← Voltar ao README](../README.md)

</div>

---

Este documento serve como um guia didático dos exercícios implementados no arquivo [`programa.birl`](../programa.birl). Ele demonstra como aplicar a linguagem em cenários reais de software.

## 🏋️‍♂️ Lista de Treinos

### 1. Gestão de Alunos (Fundamental)
- **Foco**: Entrada de dados e filtragem.
- **Destaque**: Uso de acumuladores para cálculo de média e algoritmos de busca de maior valor.

### 📦 2. Gestão de Produtos (Exclusão Lógica)
- **Foco**: Persistência em memória e **Soft Delete**.
- **Destaque**: Uso do atributo `ATIVO` para desabilitar itens sem removê-los do array, mantendo a integridade do histórico.

### 📚 3. Biblioteca e Acervo
- **Foco**: Filtros de metadados.
- **Destaque**: Comparação de datas (campos numéricos) para filtragem de inventário.

### 🎓 4. Estudantes e Notas (Arrays Complexos)
- **Foco**: Composição (Objetos contendo Arrays).
- **Destaque**: O objeto `Estudante` possui um atributo `NOTAS` (tipo `VEM MONSTRO`). O método `MEDIA()` itera internamente sobre essa lista dinâmica.

### 📇 5. CRM de Contatos
- **Foco**: Busca por Strings (Querying).
- **Destaque**: Implementação de busca linear exata em listas de objetos.

### 🛒 6. Carrinho de Compras
- **Foco**: Lógica de checkout.
- **Destaque**: Chamadas de método encadeadas: `TOTAL = TOTAL + AJUDA O MALUCO... OBJ.SUBTOTAL()`.

### 💼 7. Módulo RH
- **Foco**: Processamento de Floats.
- **Destaque**: Uso da máscara `%f` para precisão decimal em calculos salariais.

### 🎬 8. Ranking de Filmes
- **Foco**: Algoritmos de ordenação conceitual.
- **Destaque**: Identificação dinâmica do recordista (maior nota) entre N entradas.

### 🚗 9. Gestão de Frota
- **Foco**: Inicialização complexa.
- **Destaque**: Jaulas com múltiplos parâmetros no construtor `INIT`.

### 🧾 10. ERP de Faturamento
- **Foco**: Processamento de pedidos.
- **Destaque**: IDs numéricos e Razão Social (strings longas).

### ✅ 11. Kanban Sprint Task
- **Foco**: Máquina de Estados.
- **Destaque**: Transição de status (`Pendente` para `Concluído`) e renderização condicional de strings baseada em booleanos (`CONCLUIDA == 1`).

### ⚽ 12. Scout de Atletas
- **Foco**: Agregação de dados esportivos.
- **Destaque**: Demonstração final integrando Jaulas, Listas, Loops e I/O formatado.

---

## 🚀 Como testar esses treinos?

1. Certifique-se de que o CLI está instalado: `npm install -g ./birl-cli`
2. Execute o roteador mestre:
   ```bash
   birl programa.birl
   ```
3. Escolha uma opção de **01 a 12** no menu interativo.

---

<div align="center">

**O sucesso é a soma de pequenos esforços repetidos dia após dia!** 👊🏋️‍♂️

</div>
