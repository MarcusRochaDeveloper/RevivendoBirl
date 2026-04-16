# 🛑 Limitações e O que a BIRL não faz

> "Conhecer suas limitações é o primeiro passo para superá-las!"

<div align="right">

[🚀 Introdução](INTRODUCTION.md) · [⚙️ Internals](INTERNALS.md) · [📋 Exemplos](EXAMPLES.md) · [← Voltar ao README](../README.md)

</div>

---

Nenhum monstro é perfeito. Para manter a performance e a blindagem do shape, o interpretador BIRL V5.5 possui algumas limitações técnicas conscientes.

## 1. Sem Herança de Jaulas

Diferente de linguagens como Java ou C#, a BIRL não suporta herança. Cada `JAULA` é um ecossistema independente.
- **Dica**: Use o padrão de **Composição**. Em vez de herdar, coloque uma instância de outra jaula dentro do seu objeto.

## 2. Visibilidade de Atributos

Todos os atributos anexados ao `O_PAI` são públicos por padrão. Não existe a palavra-chave "private".
- **Dica**: Use a convenção de monstro iniciá-los com underline (ex: `O_PAI._peso`) para sinalizar que outros não devem mexer.

## 3. Concorrência Assíncrona

Apesar de rodar em Node.js, os scripts BIRL são executados de forma **estritamente síncrona**. Você não pode criar "Promises" ou rodar treinos em paralelo dentro da linguagem.

## 4. Biblioteca Padrão (StdLib) Focada

A BIRL não possui acesso nativo ao sistema de arquivos, rede ou bibliotecas gráficas. O foco é lógica de negócio, manipulação de dados e I/O de terminal.

## 5. Tratamento de Erros

O BIRL não possui `try/catch`. Se o programa catabolizar (gerar um erro), ele para imediatamente para evitar corrupção de dados. A segurança do monstro vem em primeiro lugar.

---

<div align="center">

**O que não nos mata, nos torna mais monstros.** 👊🏋️‍♂️

</div>
