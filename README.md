<div align="center">

# 💪 BIRL

### Bambam's It's-show-time Recursive Language

A linguagem de programação que transforma código em treino de academia.

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![Node.js](https://img.shields.io/badge/Node.js-14%2B-339933?logo=node.js&logoColor=white)](https://nodejs.org)
[![VS Code](https://img.shields.io/badge/VS%20Code-Extension-007ACC?logo=visual-studio-code&logoColor=white)](#-extensão-vs-code)
[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg)](CONTRIBUTING.md)

<br/>

```birl
HORA DO SHOW
    CE QUER VER ESSA PORRA? ("Hello, World!\n");
BIRL
```

**[Documentação Completa](docs/DOCUMENTATION.md)** · **[Referência Rápida](docs/SYNTAX.md)** · **[Exemplos](docs/EXAMPLES.md)** · **[Como Contribuir](CONTRIBUTING.md)**

</div>

---

## 📖 Sumário

- [O que é BIRL?](#-o-que-é-birl)
- [Início Rápido](#-início-rápido)
- [Sintaxe em 60 segundos](#-sintaxe-em-60-segundos)
- [Extensão VS Code](#-extensão-vs-code)
- [Referência de Keywords](#-referência-de-keywords)
- [Exemplos completos](#-exemplos-completos)
- [Documentação](#-documentação)
- [Estrutura do Projeto](#-estrutura-do-projeto)
- [Contribuindo](#-contribuindo)
- [Roadmap](#-roadmap)
- [Autores](#-autores)
- [Licença](#-licença)

---

## 🦁 O que é BIRL?

**BIRL** é uma linguagem de programação interpretada, dinâmica e orientada a objetos, cujos comandos são bordões do fisiculturista **Bambam**.

Apesar do humor, ela implementa conceitos reais:

| Feature | Status |
|---------|--------|
| Variáveis e tipos dinâmicos | ✅ |
| If / Else If / Else | ✅ |
| While e For loops | ✅ |
| Funções com retorno | ✅ |
| Arrays dinâmicos | ✅ |
| Classes (OOP) com métodos | ✅ |
| I/O formatada (estilo printf/scanf) | ✅ |
| Extensão VS Code com syntax highlighting | ✅ |
| CLI global via npm | ✅ |

---

## 🚀 Início Rápido

### Pré-requisitos

- [Node.js](https://nodejs.org) v14+

### Instalação

```bash
# Clone o repositório
git clone https://github.com/MarcusRochaDeveloper/RevivendoBirl.git
cd RevivendoBirl

# Instale o CLI globalmente
cd birl-cli
npm install -g .
```

### Primeiro programa

Crie um arquivo `ola.birl`:

```birl
HORA DO SHOW
    MONSTRO NOME = "Monstro";
    CE QUER VER ESSA PORRA? ("Fala, %s! BIRL!\n", NOME);
BIRL
```

Execute:

```bash
$ birl ola.birl
💪 CARREGANDO COMPILADOR BIRL V5.4 (O SHAPE INVISÍVEL REVELADO)...

Fala, Monstro! BIRL!

💪 TREINO CONCLUÍDO!
```

---

## ⚡ Sintaxe em 60 segundos

### Variáveis
```birl
MONSTRO X = 42;           // inteiro
MONSTRO PI = 3.14;        // float
MONSTRO NOME = "Bambam";  // string
MONSTRO LISTA = VEM MONSTRO;  // array vazio
```

### Condicionais
```birl
ELE QUE A GENTE QUER? (NOTA >= 7)
    CE QUER VER ESSA PORRA? ("Aprovado!\n");
QUE NAO VAI DAR O QUE? (NOTA >= 5)
    CE QUER VER ESSA PORRA? ("Recuperacao.\n");
NAO VAI DAR NAO
    CE QUER VER ESSA PORRA? ("Reprovado.\n");
BIRL
```

### Loops
```birl
// For
MAIS QUERO MAIS (I = 0; I < 10; I++)
    CE QUER VER ESSA PORRA? ("%d ", I);
BIRL

// While
NEGATIVA BAMBAM (X > 0)
    X = X - 1;
BIRL
```

### Funções
```birl
OH O HOME AI PO (MONSTRO SOMAR(MONSTRO A, MONSTRO B))
    BORA CUMPADE A + B;
BIRL

MONSTRO R = AJUDA O MALUCO TA DOENTE SOMAR(10, 20);
```

### Classes (OOP)
```birl
JAULA Pessoa
    OH O HOME AI PO (MONSTRO INIT(MONSTRO NOME))
        O_PAI.NOME = NOME;
        BORA CUMPADE 1;
    BIRL
BIRL

MONSTRO P = SAINDO DA JAULA Pessoa;
AJUDA O MALUCO TA DOENTE P.INIT("Bambam");
```

> 📄 **Referência completa:** [docs/SYNTAX.md](docs/SYNTAX.md)

---

## 🎨 Extensão VS Code

Syntax highlighting oficial para **VS Code**, **Cursor** e **Antigravity**.

### Instalação

```bash
cd birl-vscode-extension
npm install
npm run package
```

Depois: `Extensions → "..." → Install from VSIX → birl-vscode-extension-1.0.0.vsix`

### Features

- ✅ Syntax highlighting (keywords, strings, números, comentários)
- ✅ Execução via `Ctrl+Alt+B`
- ✅ Botão na status bar
- ✅ Menu de contexto (clique direito)

---

## 📋 Referência de Keywords

<table>
<tr><th>BIRL</th><th>Equivalente</th><th>Descrição</th></tr>
<tr><td><code>HORA DO SHOW</code></td><td><code>main()</code></td><td>Ponto de entrada do programa</td></tr>
<tr><td><code>BIRL</code></td><td><code>}</code></td><td>Fecha qualquer bloco</td></tr>
<tr><td><code>MONSTRO</code></td><td><code>var</code></td><td>Declara variável</td></tr>
<tr><td><code>CE QUER VER ESSA PORRA?</code></td><td><code>printf()</code></td><td>Saída formatada</td></tr>
<tr><td><code>QUE QUE CE QUER MONSTRAO?</code></td><td><code>scanf()</code></td><td>Entrada formatada</td></tr>
<tr><td><code>ELE QUE A GENTE QUER?</code></td><td><code>if</code></td><td>Condicional</td></tr>
<tr><td><code>QUE NAO VAI DAR O QUE?</code></td><td><code>else if</code></td><td>Condicional alternativa</td></tr>
<tr><td><code>NAO VAI DAR NAO</code></td><td><code>else</code></td><td>Bloco padrão</td></tr>
<tr><td><code>NEGATIVA BAMBAM</code></td><td><code>while</code></td><td>Loop condicional</td></tr>
<tr><td><code>MAIS QUERO MAIS</code></td><td><code>for</code></td><td>Loop com contador</td></tr>
<tr><td><code>OH O HOME AI PO</code></td><td><code>function</code></td><td>Declara função</td></tr>
<tr><td><code>AJUDA O MALUCO TA DOENTE</code></td><td><code>call()</code></td><td>Chama função/método</td></tr>
<tr><td><code>BORA CUMPADE</code></td><td><code>return</code></td><td>Retorna valor</td></tr>
<tr><td><code>JAULA</code></td><td><code>class</code></td><td>Define classe</td></tr>
<tr><td><code>SAINDO DA JAULA</code></td><td><code>new</code></td><td>Instancia objeto</td></tr>
<tr><td><code>O_PAI</code></td><td><code>this</code></td><td>Referência ao objeto atual</td></tr>
<tr><td><code>VEM MONSTRO</code></td><td><code>[]</code></td><td>Cria array vazio</td></tr>
<tr><td><code>BOTA_PRA_FUDER</code></td><td><code>push()</code></td><td>Adiciona ao array</td></tr>
<tr><td><code>TAMANHO</code></td><td><code>length</code></td><td>Tamanho do array</td></tr>
<tr><td><code>PEGA</code></td><td><code>[i]</code></td><td>Acessa por índice</td></tr>
</table>

---

## 💡 Exemplos completos

### Calculadora de IMC

```birl
HORA DO SHOW
    MONSTRO PESO;
    MONSTRO ALTURA;

    CE QUER VER ESSA PORRA? ("Peso (kg): ");
    QUE QUE CE QUER MONSTRAO? ("%f", &PESO);
    CE QUER VER ESSA PORRA? ("Altura (m): ");
    QUE QUE CE QUER MONSTRAO? ("%f", &ALTURA);

    MONSTRO IMC = PESO / (ALTURA * ALTURA);
    CE QUER VER ESSA PORRA? ("IMC: %f\n", IMC);

    ELE QUE A GENTE QUER? (IMC < 25)
        CE QUER VER ESSA PORRA? ("Shape perfeito!\n");
    NAO VAI DAR NAO
        CE QUER VER ESSA PORRA? ("Hora do cardio!\n");
    BIRL
BIRL
```

### CRUD com Classes

```birl
HORA DO SHOW
    JAULA Contato
        OH O HOME AI PO (MONSTRO INIT(MONSTRO NOME, MONSTRO TEL))
            O_PAI.NOME = NOME;
            O_PAI.TEL = TEL;
            BORA CUMPADE 1;
        BIRL
        OH O HOME AI PO (MONSTRO MOSTRAR())
            CE QUER VER ESSA PORRA? ("[%s] %s\n", O_PAI.NOME, O_PAI.TEL);
            BORA CUMPADE 1;
        BIRL
    BIRL

    MONSTRO AGENDA = VEM MONSTRO;
    MONSTRO OBJ = SAINDO DA JAULA Contato;
    AJUDA O MALUCO TA DOENTE OBJ.INIT("Bambam", "11999999999");
    AJUDA O MALUCO TA DOENTE AGENDA.BOTA_PRA_FUDER(OBJ);

    MONSTRO C = AJUDA O MALUCO TA DOENTE AGENDA.PEGA(0);
    AJUDA O MALUCO TA DOENTE C.MOSTRAR();
BIRL
```

> 📄 **Mais exemplos:** [docs/EXAMPLES.md](docs/EXAMPLES.md) — 12 exercícios completos com CRUD, Kanban, E-commerce e mais.

---

## 📚 Documentação

| Documento | Conteúdo |
|-----------|----------|
| [📖 Documentação Completa](docs/DOCUMENTATION.md) | Guia de 18 capítulos cobrindo toda a linguagem |
| [⚡ Referência Rápida](docs/SYNTAX.md) | Cheat sheet com todos os comandos |
| [💡 Exemplos](docs/EXAMPLES.md) | 12 exercícios explicados |
| [🏗️ OOP](docs/OOP.md) | Orientação a objetos em BIRL |
| [📚 Stdlib](docs/STDLIB.md) | Funções e métodos built-in |
| [⚙️ Internals](docs/INTERNALS.md) | Como o interpretador funciona |
| [🛑 Limitações](docs/LIMITATIONS.md) | O que BIRL não faz (ainda) |
| [🚀 Introdução](docs/INTRODUCTION.md) | Primeiros passos para iniciantes |

---

## 📁 Estrutura do Projeto

```
RevivendoBirl/
│
├── birl-cli/                      # 🖥️ Interpretador CLI
│   ├── core/
│   │   └── interpreter.js         # Motor da linguagem (modular)
│   ├── index.js                   # Entrypoint: #!/usr/bin/env node
│   └── package.json               # npm: birl-lang
│
├── birl-vscode-extension/         # 🎨 Extensão VS Code
│   ├── syntaxes/
│   │   └── birl.tmLanguage.json   # Gramática TextMate
│   ├── extension.js               # Comandos e status bar
│   ├── language-configuration.json
│   └── package.json               # Manifesto da extensão
│
├── docs/                          # 📚 Documentação
│   ├── DOCUMENTATION.md           # Guia completo (18 capítulos)
│   ├── SYNTAX.md                  # Referência rápida
│   ├── EXAMPLES.md                # 12 exercícios
│   ├── OOP.md                     # Orientação a objetos
│   ├── STDLIB.md                  # Biblioteca padrão
│   ├── INTERNALS.md               # Motor interno
│   ├── LIMITATIONS.md             # Limitações conhecidas
│   └── INTRODUCTION.md            # Para iniciantes
│
├── index.js                       # Interpretador standalone
├── programa.birl                  # Demo: 748 linhas, 12 módulos
├── teste.birl                     # Testes manuais
├── README.md                      # ← Você está aqui
├── CONTRIBUTING.md                # Guia de contribuição
├── LICENSE                        # MIT
└── .gitignore
```

---

## 🤝 Contribuindo

BIRL é open-source e aceita contribuições! Veja o [CONTRIBUTING.md](CONTRIBUTING.md) para detalhes.

```bash
# Fork → Clone → Branch → Code → Commit → Push → PR
git clone https://github.com/SEU_USER/RevivendoBirl.git
git checkout -b feat/minha-feature
# faça suas alterações
git commit -m "feat: descrição"
git push origin feat/minha-feature
# abra o Pull Request no GitHub
```

### Padrão de commits

| Prefixo | Uso |
|---------|-----|
| `feat:` | Nova funcionalidade |
| `fix:` | Correção de bug |
| `docs:` | Documentação |
| `refactor:` | Refatoração |
| `test:` | Testes |

---

## 🗺️ Roadmap

### v2.0
- [ ] Switch/Case (`QUAL O SHAPE?`)
- [ ] Herança de classes
- [ ] Import de módulos (`TRAGA O SUPLEMENTO`)
- [ ] Try/Catch

### v3.0
- [ ] REPL interativo
- [ ] Playground web
- [ ] Language Server Protocol (autocomplete, hover, diagnósticos)
- [ ] Publicação no npm registry

---

## 👨‍💻 Autores

<table>
<tr>
<td align="center"><strong>Marcus</strong><br/>Co-criador & Engenheiro<br/><a href="https://github.com/MarcusRochaDeveloper">@MarcusRochaDeveloper</a></td>
<td align="center"><strong>Adam</strong><br/>Co-criador & Arquiteto</td>
</tr>
</table>

---

## 📄 Licença

Distribuído sob a licença **MIT**. Veja [LICENSE](LICENSE) para mais informações.

---

<div align="center">

**BIRL** — Feito com 💪 no Brasil

*"O código que você grita, não sussurra."*

<br/>

⭐ Se curtiu, dá uma estrela no repo! ⭐

</div>
