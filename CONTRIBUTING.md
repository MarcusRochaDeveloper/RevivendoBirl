# Guia de Contribuição — BIRL 💪

Obrigado por querer contribuir com a linguagem mais musculosa do mundo!

## Como começar

1. **Fork** este repositório
2. **Clone** seu fork: `git clone https://github.com/SEU_USER/RevivendoBirl.git`
3. Crie uma branch: `git checkout -b feat/minha-feature`
4. Faça suas alterações
5. Commit: `git commit -m "feat: descrição curta"`
6. Push: `git push origin feat/minha-feature`
7. Abra um **Pull Request**

## Padrão de commits

```
feat(escopo): descrição       → nova funcionalidade
fix(escopo): descrição        → correção de bug
docs: descrição               → documentação
refactor: descrição           → refatoração
test: descrição               → testes
chore: descrição              → manutenção
```

## Estrutura do projeto

```
birl-cli/               → Interpretador (npm: birl-lang)
birl-vscode-extension/   → Extensão VS Code
docs/                    → Documentação completa
programa.birl            → Demo de referência
```

## Regras

- Não quebre o `programa.birl` (é o teste de integração)
- Mantenha compatibilidade retroativa com programas existentes
- Use nomes em CAPS_LOCK para variáveis nos exemplos
- Documente novas keywords no `docs/DOCUMENTATION.md`

## Reportando bugs

Abra uma **Issue** com:
1. O código `.birl` que causou o erro
2. A mensagem de erro completa
3. Sua versão do Node.js (`node --version`)

**BORA CUMPADE contribuir!** 💪
