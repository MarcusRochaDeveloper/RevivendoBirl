# Guia de Contribuição: BIRL Open Source

Bora cumpade! Ficamos felizes que você quer ajudar a deixar o shape do nosso interpretador ainda mais sinistro. Seguir estas diretrizes garante que o projeto continue subindo peso sem se lesionar.

## 🏋️‍♂️ Como Começar

1. **Fork o Repositório**: Faça uma cópia do projeto para sua jaula.
2. **Crie uma Branch de Treino**: 
   ```bash
   git checkout -b feature/novo-musculo
   ```
3. **Mantenha o Estilo**: Siga o padrão de escrita maromba nos comentários e documentações.

## 🏗️ O que Contribuir

- **Novos Exercícios**: Adicione novas atividades de lógica no arquivo `programa.birl`.
- **Melhorias no Motor**: Otimizações no `index.js` (Lexer, Parser ou I/O).
- **Tradução de Termos**: Novas palavras-chave que façam sentido no universo do fisiculturismo.

## 📏 Padrões de Código (Interpretador)

O interpretador é escrito em Node.js (JavaScript).
- Use `async/await` para operações de I/O.
- Evite o uso de `eval()` externo; use `new Function()` para contextos isolados conforme o padrão atual.
- Garanta que erros lancem mensagens claras com o número da linha no `.birl`.

## 🚑 Reportando Bugs

Se você encontrou um bug que está "catabolizando" a execução:
1. Abra uma **Issue** explicando o comportamento inesperado.
2. Forneça o trecho de código `.birl` que causou o crash.
3. Descreva o comportamento esperado (o shape que você queria).

## 🏆 Reconhecimento

Contribuidores que enviarem PRs aprovados serão citados na nossa lista de heróis da jaula!

**"O QUE NÃO TE MATA, TE DEIXA MAIS MONSTRO!"** 👊🏋️‍♂️
