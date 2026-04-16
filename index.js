const fs = require("fs");
const readline = require("readline/promises");

console.log("💪 CARREGANDO COMPILADOR BIRL V5.4 (O SHAPE INVISÍVEL REVELADO)...\n");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let codigoRaw = "";
try {
    codigoRaw = fs.readFileSync("programa.birl", "utf8");
} catch (e) {
    console.log("🔥 ERRO FATAL: Cadê o arquivo 'programa.birl', monstro?");
    process.exit(1);
}

// O Lexer mapeia a linha exata do arquivo original
const linhasGlobais = codigoRaw.split("\n").map((texto, index) => {
    return {
        text: texto.split("//")[0].trim(),
        line: index + 1
    };
}).filter(l => l.text.length > 0);

// Buffer Global para resolver o bug do PowerShell apagar perguntas sem \n
let stdoutBuffer = "";

function extrairBlocoGeral(startIndex, arrayDeLinhas) {
  const bloco = [];
  let j = startIndex + 1;
  let profundidade = 1;

  while (j < arrayDeLinhas.length) {
    let l_text = arrayDeLinhas[j].text;
    if (
      l_text.startsWith("ELE QUE A GENTE QUER?") ||
      l_text.startsWith("NEGATIVA BAMBAM") ||
      l_text.startsWith("MAIS QUERO MAIS") ||
      l_text.startsWith("OH O HOME AI PO") ||
      l_text.startsWith("JAULA")
    ) {
      profundidade++;
    } else if (l_text === "BIRL") {
      profundidade--;
    }

    if (profundidade === 0) break;
    bloco.push(arrayDeLinhas[j]);
    j++;
  }

  if (profundidade > 0) {
      console.log(`\n🔥 ERRO DE SINTAXE: O bloco não foi fechado! Faltou o 'BIRL'.`);
      console.log(`👉 Abertura na linha ${arrayDeLinhas[startIndex].line}: "${arrayDeLinhas[startIndex].text}"`);
      process.exit(1);
  }

  return { bloco, novoI: j };
}

async function executarBloco(linhas, ctx) {
  const variaveis = ctx.variaveis;
  ctx.funcoes = ctx.funcoes || {};
  ctx.classes = ctx.classes || {};

  const getValue = (expr, numLinha) => {
    if (expr === undefined || expr.trim() === "") return undefined;
    try {
      const keys = Object.keys(variaveis);
      const values = Object.values(variaveis);
      const evaluate = new Function(...keys, `return ${expr};`);
      return evaluate(...values);
    } catch (e) {
      console.log(`\n🔥 ERRO DE EXECUÇÃO: Expressão falha ou variável não declarada!`);
      console.log(`👉 Linha ${numLinha}: "${expr}"`);
      process.exit(1);
    }
  };

  const extrairBloco = (startIndex) => extrairBlocoGeral(startIndex, linhas);
  const ifStack = [];
  let skipDepth = 0; 

  for (let i = 0; i < linhas.length; i++) {
    let l_text = linhas[i].text;
    let l_num = linhas[i].line;

    if (!l_text) continue;
    if (/^(FRANGO|MONSTRINHO|MONSTRAO|TRAPEZIO|BICEPS)/.test(l_text)) continue;

    // =======================================================
    // MODO SKIP (PULANDO LINHAS)
    // =======================================================
    if (ifStack.length > 0 && !ifStack[ifStack.length - 1].executar) {
        if (
            l_text.startsWith("ELE QUE A GENTE QUER?") ||
            l_text.startsWith("NEGATIVA BAMBAM") ||
            l_text.startsWith("MAIS QUERO MAIS") ||
            l_text.startsWith("OH O HOME AI PO") ||
            l_text.startsWith("JAULA")
        ) {
            skipDepth++;
            continue;
        } else if (l_text === "BIRL") {
            if (skipDepth > 0) {
                skipDepth--;
            } else {
                ifStack.pop();
            }
            continue;
        }

        if (skipDepth === 0) {
            if (l_text.startsWith("QUE NAO VAI DAR O QUE?")) {
                const match = l_text.match(/\((.*)\)/);
                if (!match) { console.log(`🔥 ERRO SINTAXE (Linha ${l_num})`); process.exit(1); }
                const estadoIf = ifStack[ifStack.length - 1];
                if (!estadoIf.resolvido) {
                    const condOk = getValue(match[1], l_num);
                    if (condOk) { estadoIf.resolvido = true; estadoIf.executar = true; }
                }
                continue;
            } else if (l_text === "NAO VAI DAR NAO") {
                const estadoIf = ifStack[ifStack.length - 1];
                if (!estadoIf.resolvido) { estadoIf.resolvido = true; estadoIf.executar = true; }
                continue;
            }
        }
        continue;
    }

    // =======================================================
    // EXECUÇÃO NORMAL
    // =======================================================
    if (l_text === "BIRL") {
        if (ifStack.length > 0) ifStack.pop();
        continue;
    }

    if (l_text.startsWith("ELE QUE A GENTE QUER?")) {
        const match = l_text.match(/\((.*)\)/);
        if (!match) { console.log(`🔥 ERRO SINTAXE (Linha ${l_num})`); process.exit(1); }
        const condOk = getValue(match[1], l_num);
        ifStack.push({ resolvido: condOk, executar: condOk });
        continue;
    }

    if (l_text.startsWith("QUE NAO VAI DAR O QUE?")) {
        const estadoIf = ifStack[ifStack.length - 1];
        estadoIf.executar = false; 
        continue;
    }

    if (l_text === "NAO VAI DAR NAO") {
        const estadoIf = ifStack[ifStack.length - 1];
        estadoIf.executar = false; 
        continue;
    }

    // --- INPUT BLINDADO COM C-BUFFER ---
    if (l_text.startsWith("QUE QUE CE QUER MONSTRAO?")) {
        const match = l_text.match(/\(\s*"([^"]+)"\s*,\s*&([a-zA-Z_]\w*)\s*\);?/);
        if (!match) { console.log(`🔥 ERRO SINTAXE INPUT (Linha ${l_num})`); process.exit(1); }
        
        const format = match[1];
        const varName = match[2];
        
        // Pega o que estava invisível na memória e empurra como pergunta pro readline
        const promptString = stdoutBuffer;
        stdoutBuffer = "";
        const inputReal = (await rl.question(promptString)).trim(); 
        
        if (format === "%d") {
            variaveis[varName] = parseInt(inputReal) || 0; 
        } else if (format === "%f") {
            variaveis[varName] = parseFloat(inputReal) || 0.0;
        } else {
            variaveis[varName] = `"${inputReal}"`; 
        }
        continue;
    }

    const checkReturn = (res) => {
        if (res && typeof res === 'object' && res.__isReturn) return true;
        return false;
    };

    if (l_text.startsWith("NEGATIVA BAMBAM")) {
        const match = l_text.match(/\((.*)\)/);
        const { bloco, novoI } = extrairBloco(i);
        while (getValue(match[1], l_num)) {
          let res = await executarBloco(bloco, ctx);
          if (checkReturn(res)) return res; 
        }
        i = novoI;
        continue;
    }

    if (l_text.startsWith("MAIS QUERO MAIS")) {
        const match = l_text.match(/\((.*)\)/);
        const partes = match[1].split(";");
        if (partes.length === 3) {
          const [init, cond, inc] = partes;
          let initMatch = init.match(/([a-zA-Z_]\w*)\s*=\s*(.*)/);
          if(initMatch) variaveis[initMatch[1].trim()] = getValue(initMatch[2], l_num);
          
          const { bloco, novoI } = extrairBloco(i);
          while (getValue(cond, l_num)) {
            let res = await executarBloco(bloco, ctx);
            if (checkReturn(res)) return res; 

            let incStr = inc.trim();
            if (incStr.includes("++")) variaveis[incStr.replace("++", "")]++;
            else if (incStr.includes("--")) variaveis[incStr.replace("--", "")]--;
            else getValue(incStr, l_num);
          }
          i = novoI;
        }
        continue;
    }

    if (l_text.startsWith("JAULA")) {
      const match = l_text.match(/JAULA\s+(\w+)/);
      const nomeClasse = match[1];
      const { bloco, novoI } = extrairBloco(i);
      ctx.classes[nomeClasse] = {};
      
      for (let j = 0; j < bloco.length; j++) {
          let func_text = bloco[j].text;
          if (func_text.startsWith("OH O HOME AI PO")) {
              const funcMatch = func_text.match(/OH O HOME AI PO\s*\(\s*MONSTRO\s+(\w+)\((.*?)\)\s*\)/);
              if (funcMatch) {
                  const nomeFunc = funcMatch[1];
                  const params = funcMatch[2].split(",").map(p => p.trim().replace("MONSTRO ", "")).filter(p => p.length > 0);
                  const funcRes = extrairBlocoGeral(j, bloco);
                  ctx.classes[nomeClasse][nomeFunc] = { params, bloco: funcRes.bloco };
                  j = funcRes.novoI;
              }
          }
      }
      i = novoI;
      continue;
    }

    if (l_text.includes("SAINDO DA JAULA")) {
        let match = l_text.match(/MONSTRO\s+([a-zA-Z_]\w*)\s*=\s*SAINDO DA JAULA\s+([a-zA-Z_]\w*);?/);
        if (!match) match = l_text.match(/^([a-zA-Z_]\w*)\s*=\s*SAINDO DA JAULA\s+([a-zA-Z_]\w*);?/);

        if (match) {
            const [, objName, className] = match;
            if (ctx.classes[className]) {
                variaveis[objName] = { __class: className };
            } else {
                console.log(`🔥 ERRO (Linha ${l_num}): A jaula '${className}' não existe!`);
                process.exit(1);
            }
            continue;
        }
    }

    if (l_text.includes("VEM MONSTRO")) {
        let match = l_text.match(/MONSTRO\s+([a-zA-Z_]\w*)\s*=\s*VEM MONSTRO;?/);
        if (!match) match = l_text.match(/^([a-zA-Z_]\w*)\s*=\s*VEM MONSTRO;?/);

        if (match) {
            variaveis[match[1]] = []; 
            continue;
        }
    }

    if (l_text.startsWith("OH O HOME AI PO")) {
        const match = l_text.match(/OH O HOME AI PO\s*\(\s*MONSTRO\s+(\w+)\((.*?)\)\s*\)/);
        if (match) {
            const nomeFunc = match[1];
            const params = match[2].split(",").map(p => p.trim().replace("MONSTRO ", "")).filter(p => p.length > 0);
            const { bloco, novoI } = extrairBloco(i);
            ctx.funcoes[nomeFunc] = { params, bloco };
            i = novoI; 
            continue;
        }
    }

    if (l_text.startsWith("BORA CUMPADE")) {
        const expr = l_text.replace("BORA CUMPADE", "").replace(";", "").trim();
        const val = getValue(expr, l_num);
        return { __isReturn: true, value: val };
    }

    if (l_text.includes("AJUDA O MALUCO TA DOENTE")) {
        let match = l_text.match(/MONSTRO\s+([a-zA-Z_]\w*)\s*=\s*AJUDA O MALUCO TA DOENTE\s+([a-zA-Z_]\w*)(?:\.(\w+))?\((.*?)\);?/);
        if (!match) match = l_text.match(/^([a-zA-Z_]\w*)\s*=\s*AJUDA O MALUCO TA DOENTE\s+([a-zA-Z_]\w*)(?:\.(\w+))?\((.*?)\);?/);
        if (!match) {
            let m = l_text.match(/AJUDA O MALUCO TA DOENTE\s+([a-zA-Z_]\w*)(?:\.(\w+))?\((.*?)\);?/);
            if (m) match = [m[0], undefined, m[1], m[2], m[3]]; 
        }

        if (match) {
            const [, varTarget, nomeFuncOuObj, nomeMetodo, argsText] = match;
            const args = argsText ? argsText.split(",").map(a => getValue(a.trim(), l_num)) : [];
            let resultado = undefined;

            if (nomeMetodo) {
                const obj = variaveis[nomeFuncOuObj];
                if (!obj) {
                    console.log(`🔥 ERRO (Linha ${l_num}): Tentou acessar método '${nomeMetodo}' no objeto '${nomeFuncOuObj}' que não existe!`);
                    process.exit(1);
                }
                
                if (Array.isArray(obj)) {
                    if (nomeMetodo === "BOTA_PRA_FUDER") obj.push(args[0]);
                    else if (nomeMetodo === "TAMANHO") resultado = obj.length;
                    else if (nomeMetodo === "PEGA") resultado = obj[args[0]];
                } 
                else if (obj.__class && ctx.classes[obj.__class] && ctx.classes[obj.__class][nomeMetodo]) {
                    const methodDef = ctx.classes[obj.__class][nomeMetodo];
                    const methodCtx = { variaveis: { O_PAI: obj }, funcoes: ctx.funcoes, classes: ctx.classes };
                    methodDef.params.forEach((param, index) => { methodCtx.variaveis[param] = args[index]; });
                    
                    let callRes = await executarBloco(methodDef.bloco, methodCtx);
                    if (checkReturn(callRes)) resultado = callRes.value;
                } else {
                    console.log(`🔥 ERRO (Linha ${l_num}): Método '${nomeMetodo}' não achado!`);
                    process.exit(1);
                }
            } else {
                if (ctx.funcoes[nomeFuncOuObj]) {
                    const funcDef = ctx.funcoes[nomeFuncOuObj];
                    const funcCtx = { variaveis: {}, funcoes: ctx.funcoes, classes: ctx.classes };
                    funcDef.params.forEach((param, index) => { funcCtx.variaveis[param] = args[index]; });
                    let callRes = await executarBloco(funcDef.bloco, funcCtx);
                    if (checkReturn(callRes)) resultado = callRes.value;
                } else {
                    console.log(`🔥 ERRO (Linha ${l_num}): Função global '${nomeFuncOuObj}' não existe!`);
                    process.exit(1);
                }
            }
            if (varTarget) variaveis[varTarget] = resultado;
            continue;
        }
    }

    // --- PRINT COM BUFFER INTELIGENTE ---
    if (l_text.startsWith("CE QUER VER ESSA PORRA?")) {
      const match = l_text.match(/\((.*)\);?/);
      if (match) {
          const inside = match[1];
          let endQuote = -1;
          
          if (inside.startsWith('"')) {
              endQuote = inside.indexOf('"', 1);
              while (endQuote !== -1 && inside[endQuote - 1] === '\\') {
                  endQuote = inside.indexOf('"', endQuote + 1);
              }
          }
          
          if (endQuote !== -1) {
              let formatString = inside.substring(1, endQuote);
              let rest = inside.substring(endQuote + 1).trim();
              
              if (rest.startsWith(',')) {
                  let rawArgs = rest.substring(1).split(',').map(s => s.trim());
                  let argIndex = 0;
                  let finalString = formatString.replace(/%d|%s|%f/g, (tipo) => {
                      let val = getValue(rawArgs[argIndex++], l_num);
                      if (val === undefined) return "UNDEFINED";
                      if (tipo === "%d") return Math.trunc(val); 
                      if (tipo === "%f") return Number(val);     
                      return typeof val === 'string' ? val.replace(/"/g, "") : val;
                  });
                  stdoutBuffer += finalString.replace(/\\n/g, '\n');
              } else {
                  stdoutBuffer += formatString.replace(/\\n/g, '\n');
              }
          } else {
              let str = getValue(inside, l_num);
              let finalStr = typeof str === 'string' ? str.replace(/"/g, "").replace(/\\n/g, '\n') : String(str) + '\n';
              stdoutBuffer += finalStr;
          }

          // Se a frase tem \n (quebra de linha), ele imprime na tela imediatamente
          let lastNewline = stdoutBuffer.lastIndexOf('\n');
          if (lastNewline !== -1) {
              process.stdout.write(stdoutBuffer.substring(0, lastNewline + 1));
              stdoutBuffer = stdoutBuffer.substring(lastNewline + 1);
          }
      }
      continue;
    }

    if (l_text.startsWith("MONSTRO") && !l_text.includes("SAINDO DA JAULA") && !l_text.includes("VEM MONSTRO") && !l_text.includes("AJUDA O MALUCO")) {
      const match = l_text.match(/MONSTRO\s+([a-zA-Z_]\w*)\s*=\s*(.*);/);
      if (match) variaveis[match[1]] = getValue(match[2], l_num);
      else {
        const matchEmpty = l_text.match(/MONSTRO\s+([a-zA-Z_]\w*);/);
        if(matchEmpty) variaveis[matchEmpty[1]] = 0;
      }
      continue;
    }

    if (/^[a-zA-Z_]\w*\.[a-zA-Z_]\w*\s*=/.test(l_text)) {
        const match = l_text.match(/^([a-zA-Z_]\w*)\.([a-zA-Z_]\w*)\s*=\s*(.*);/);
        if (match) {
            const [, objName, propName, expr] = match;
            if (variaveis[objName] && typeof variaveis[objName] === 'object') {
                variaveis[objName][propName] = getValue(expr, l_num);
            }
        }
        continue;
    }

    if (/^[a-zA-Z_]\w*\s*=/.test(l_text) && !l_text.includes("SAINDO DA JAULA") && !l_text.includes("VEM MONSTRO") && !l_text.includes("AJUDA O MALUCO")) {
        const match = l_text.match(/^([a-zA-Z_]\w*)\s*=\s*(.*);/);
        if (match && variaveis[match[1]] !== undefined) {
            variaveis[match[1]] = getValue(match[2], l_num);
        }
        continue;
    }
  }
}

async function executarBIRL() {
  if (linhasGlobais.length === 0 || !linhasGlobais.some(l => l.text === "HORA DO SHOW")) {
      console.log("🔥 ERRO FATAL: Faltou 'HORA DO SHOW' no começo do treino!");
      process.exit(1);
  }
  
  const ctx = { variaveis: {}, funcoes: {}, classes: {} };
  const startIndex = linhasGlobais.findIndex(l => l.text === "HORA DO SHOW");
  const corpoPrograma = linhasGlobais.slice(startIndex + 1);

  try {
      await executarBloco(corpoPrograma, ctx);
  } catch (e) {
      console.log("\n🔥 ERRO CRÍTICO NO INTERPRETADOR!");
      console.log(e.message);
      process.exit(1);
  }
  
  // Limpa o que sobrou no buffer invisivel
  if (stdoutBuffer.length > 0) {
      process.stdout.write(stdoutBuffer);
  }
  
  console.log("\n💪 TREINO CONCLUÍDO!");
  rl.close(); 
  process.exit(0); 
}

executarBIRL();