const fs = require("fs");
const readline = require("readline/promises");

/**
 * Motor Central da Linguagem BIRL
 * Responsável pelo Lexer, Parser e Execução Síncrona/Assíncrona
 */
class BirlInterpreter {
    constructor() {
        this.stdoutBuffer = "";
        this.rl = readline.createInterface({
            input: process.stdin,
            output: process.stdout
        });
    }

    async run(codigoRaw, filePath = "script.birl") {
        const linhasGlobais = codigoRaw.split("\n").map((texto, index) => {
            return {
                text: texto.split("//")[0].trim(),
                line: index + 1
            };
        }).filter(l => l.text.length > 0);

        if (linhasGlobais.length === 0 || !linhasGlobais.some(l => l.text === "HORA DO SHOW")) {
            throw new Error("🔥 ERRO FATAL: Faltou 'HORA DO SHOW' no começo do treino!");
        }

        const ctx = { variaveis: {}, funcoes: {}, classes: {} };
        const startIndex = linhasGlobais.findIndex(l => l.text === "HORA DO SHOW");
        const corpoPrograma = linhasGlobais.slice(startIndex + 1);

        await this.executarBloco(corpoPrograma, ctx);

        if (this.stdoutBuffer.length > 0) {
            process.stdout.write(this.stdoutBuffer);
        }

        console.log("\n💪 TREINO CONCLUÍDO!");
        this.rl.close();
    }

    async executarBloco(linhas, ctx) {
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
                console.error(`\n🔥 ERRO DE EXECUÇÃO: Expressão falha ou variável não declarada!`);
                console.error(`👉 Linha ${numLinha}: "${expr}"`);
                process.exit(1);
            }
        };

        const extrairBloco = (startIndex) => this.extrairBlocoGeral(startIndex, linhas);

        const checkReturn = (res) => {
            return (res && typeof res === 'object' && res.__isReturn);
        };

        const ifStack = [];
        let skipDepth = 0;

        for (let i = 0; i < linhas.length; i++) {
            let l_text = linhas[i].text;
            let l_num = linhas[i].line;

            if (!l_text) continue;

            // Suporte a comentários e tokens vazios (já limpos no run)
            if (/^(FRANGO|MONSTRINHO|MONSTRAO|TRAPEZIO|BICEPS)/.test(l_text)) continue;

            // MODO SALTO (Pular blocos se a condição for falsa)
            if (ifStack.length > 0 && !ifStack[ifStack.length - 1].executar) {
                if (/^(ELE QUE A GENTE QUER\?|NEGATIVA BAMBAM|MAIS QUERO MAIS|OH O HOME AI PO|JAULA)/.test(l_text)) {
                    skipDepth++;
                    continue;
                } else if (l_text === "BIRL") {
                    if (skipDepth > 0) skipDepth--;
                    else ifStack.pop();
                    continue;
                }
                
                // Lógica de ELSE IF / ELSE mesmo em modo skip
                if (skipDepth === 0) {
                    if (l_text.startsWith("QUE NAO VAI DAR O QUE?")) {
                        const match = l_text.match(/\((.*)\)/);
                        if (!match) process.exit(1);
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

            // EXECUÇÃO NORMAL
            if (l_text === "BIRL") {
                if (ifStack.length > 0) ifStack.pop();
                continue;
            }

            if (l_text.startsWith("ELE QUE A GENTE QUER?")) {
                const match = l_text.match(/\((.*)\)/);
                if (!match) process.exit(1);
                const condOk = getValue(match[1], l_num);
                ifStack.push({ resolvido: condOk, executar: condOk });
                continue;
            }

            if (l_text.startsWith("QUE NAO VAI DAR O QUE?")) {
                ifStack[ifStack.length - 1].executar = false;
                continue;
            }

            if (l_text === "NAO VAI DAR NAO") {
                ifStack[ifStack.length - 1].executar = false;
                continue;
            }

            // INPUT
            if (l_text.startsWith("QUE QUE CE QUER MONSTRAO?")) {
                const match = l_text.match(/\(\s*"([^"]+)"\s*,\s*&([a-zA-Z_]\w*)\s*\);?/);
                if (!match) process.exit(1);
                const format = match[1];
                const varName = match[2];
                const promptString = this.stdoutBuffer;
                this.stdoutBuffer = "";
                const inputReal = (await this.rl.question(promptString)).trim();
                if (format === "%d") variaveis[varName] = parseInt(inputReal) || 0;
                else if (format === "%f") variaveis[varName] = parseFloat(inputReal) || 0.0;
                else variaveis[varName] = `"${inputReal}"`;
                continue;
            }

            // LOOPS
            if (l_text.startsWith("NEGATIVA BAMBAM")) {
                const match = l_text.match(/\((.*)\)/);
                const { bloco, novoI } = extrairBloco(i);
                while (getValue(match[1], l_num)) {
                    let res = await this.executarBloco(bloco, ctx);
                    if (checkReturn(res)) return res;
                }
                i = novoI; continue;
            }

            if (l_text.startsWith("MAIS QUERO MAIS")) {
                const match = l_text.match(/\((.*)\)/);
                const partes = match[1].split(";");
                if (partes.length === 3) {
                    const [init, cond, inc] = partes;
                    let initMatch = init.match(/([a-zA-Z_]\w*)\s*=\s*(.*)/);
                    if (initMatch) variaveis[initMatch[1].trim()] = getValue(initMatch[2], l_num);
                    const { bloco, novoI } = extrairBloco(i);
                    while (getValue(cond, l_num)) {
                        let res = await this.executarBloco(bloco, ctx);
                        if (checkReturn(res)) return res;
                        let incStr = inc.trim();
                        if (incStr.includes("++")) variaveis[incStr.replace("++", "").trim()]++;
                        else if (incStr.includes("--")) variaveis[incStr.replace("--", "").trim()]--;
                        else getValue(incStr, l_num);
                    }
                    i = novoI;
                }
                continue;
            }

            // OOP: JAULAS
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
                            const funcRes = this.extrairBlocoGeral(j, bloco);
                            ctx.classes[nomeClasse][nomeFunc] = { params, bloco: funcRes.bloco };
                            j = funcRes.novoI;
                        }
                    }
                }
                i = novoI; continue;
            }

            if (l_text.includes("SAINDO DA JAULA")) {
                let match = l_text.match(/(?:MONSTRO\s+)?([a-zA-Z_]\w*)\s*=\s*SAINDO DA JAULA\s+([a-zA-Z_]\w*);?/);
                if (match) {
                    const [, objName, className] = match;
                    if (ctx.classes[className]) variaveis[objName] = { __class: className };
                    else throw new Error(`🔥 JAULA '${className}' NÃO ENCONTRADA!`);
                    continue;
                }
            }

            // COLEÇÕES
            if (l_text.includes("VEM MONSTRO")) {
                let match = l_text.match(/(?:MONSTRO\s+)?([a-zA-Z_]\w*)\s*=\s*VEM MONSTRO;?/);
                if (match) { variaveis[match[1]] = []; continue; }
                match = l_text.match(/^([a-zA-Z_]\w*)\.([a-zA-Z_]\w*)\s*=\s*VEM MONSTRO;?/);
                if (match) {
                    const obj = variaveis[match[1]];
                    if (obj) obj[match[2]] = [];
                    continue;
                }
            }

            // FUNÇÕES GLOBAIS
            if (l_text.startsWith("OH O HOME AI PO")) {
                const match = l_text.match(/OH O HOME AI PO\s*\(\s*MONSTRO\s+(\w+)\((.*?)\)\s*\)/);
                if (match) {
                    const nomeFunc = match[1];
                    const params = match[2].split(",").map(p => p.trim().replace("MONSTRO ", "")).filter(p => p.length > 0);
                    const { bloco, novoI } = extrairBloco(i);
                    ctx.funcoes[nomeFunc] = { params, bloco };
                    i = novoI; continue;
                }
            }

            if (l_text.startsWith("BORA CUMPADE")) {
                const expr = l_text.replace("BORA CUMPADE", "").replace(";", "").trim();
                const val = getValue(expr, l_num);
                return { __isReturn: true, value: val };
            }

            // CHAMADAS (AJUDA O MALUCO TA DOENTE)
            if (l_text.includes("AJUDA O MALUCO TA DOENTE")) {
                const ajudaRE = /AJUDA O MALUCO TA DOENTE\s+([\w.]+)\((.*?)\)/;
                const matchAjuda = l_text.match(ajudaRE);
                if (matchAjuda) {
                    const resultado = await this.executarChamadaPorPath(matchAjuda[1], matchAjuda[2], l_num, ctx);
                    variaveis['__ajuda_temp__'] = resultado;
                    const novaLinha = l_text.replace(matchAjuda[0], '__ajuda_temp__');
                    let mExpr = novaLinha.match(/(?:MONSTRO\s+)?([a-zA-Z_]\w*)\s*=\s*(.*?);?$/);
                    if (mExpr) variaveis[mExpr[1]] = getValue(mExpr[2], l_num);
                    continue;
                }
            }

            // PRINT
            if (l_text.startsWith("CE QUER VER ESSA PORRA?")) {
                const match = l_text.match(/\((.*)\);?/);
                if (match) {
                    const inside = match[1];
                    let endQuote = inside.indexOf('"', 1);
                    while (endQuote !== -1 && inside[endQuote - 1] === '\\') endQuote = inside.indexOf('"', endQuote + 1);
                    
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
                            this.stdoutBuffer += finalString.replace(/\\n/g, '\n');
                        } else {
                            this.stdoutBuffer += formatString.replace(/\\n/g, '\n');
                        }
                    } else {
                        let str = getValue(inside, l_num);
                        this.stdoutBuffer += typeof str === 'string' ? str.replace(/"/g, "").replace(/\\n/g, '\n') : String(str) + '\n';
                    }
                    let lastNewline = this.stdoutBuffer.lastIndexOf('\n');
                    if (lastNewline !== -1) {
                        process.stdout.write(this.stdoutBuffer.substring(0, lastNewline + 1));
                        this.stdoutBuffer = this.stdoutBuffer.substring(lastNewline + 1);
                    }
                }
                continue;
            }

            // DECLARAÇÕES / ATRIBUIÇÕES
            if (l_text.startsWith("MONSTRO") && !/SAINDO DA JAULA|VEM MONSTRO|AJUDA O MALUCO/.test(l_text)) {
                const match = l_text.match(/MONSTRO\s+([a-zA-Z_]\w*)\s*=\s*(.*);/);
                if (match) variaveis[match[1]] = getValue(match[2], l_num);
                else {
                    const matchEmpty = l_text.match(/MONSTRO\s+([a-zA-Z_]\w*);/);
                    if (matchEmpty) variaveis[matchEmpty[1]] = 0;
                }
                continue;
            }

            if (/^[a-zA-Z_]\w*\.[a-zA-Z_]\w*\s*=/.test(l_text)) {
                const match = l_text.match(/^([a-zA-Z_]\w*)\.([a-zA-Z_]\w*)\s*=\s*(.*);/);
                if (match && variaveis[match[1]]) variaveis[match[1]][match[2]] = getValue(match[3], l_num);
                continue;
            }

            if (/^[a-zA-Z_]\w*\s*=/.test(l_text) && !/SAINDO DA JAULA|VEM MONSTRO|AJUDA O MALUCO/.test(l_text)) {
                const match = l_text.match(/^([a-zA-Z_]\w*)\s*=\s*(.*);/);
                if (match && variaveis[match[1]] !== undefined) variaveis[match[1]] = getValue(match[2], l_num);
                continue;
            }
        }
    }

    extrairBlocoGeral(startIndex, arrayDeLinhas) {
        const bloco = [];
        let j = startIndex + 1;
        let profundidade = 1;
        while (j < arrayDeLinhas.length) {
            let l_text = arrayDeLinhas[j].text;
            if (/^(ELE QUE A GENTE QUER\?|NEGATIVA BAMBAM|MAIS QUERO MAIS|OH O HOME AI PO|JAULA)/.test(l_text)) profundidade++;
            else if (l_text === "BIRL") profundidade--;
            if (profundidade === 0) break;
            bloco.push(arrayDeLinhas[j]);
            j++;
        }
        return { bloco, novoI: j };
    }

    async executarChamadaPorPath(fullPath, argsText, l_num, ctx) {
        const variaveis = ctx.variaveis;
        const args = argsText ? argsText.split(",").map(a => a.trim()).filter(a => a.length > 0).map(a => {
            if (a.startsWith('"') && a.endsWith('"')) return a;
            try { return new Function(...Object.keys(variaveis), `return ${a};`)(...Object.values(variaveis)); } catch(e) { return a; }
        }) : [];
        const partes = fullPath.split('.');
        
        if (partes.length === 1) {
            const funcName = partes[0];
            if (ctx.funcoes[funcName]) {
                const funcDef = ctx.funcoes[funcName];
                const funcCtx = { variaveis: {}, funcoes: ctx.funcoes, classes: ctx.classes };
                funcDef.params.forEach((p, i) => { funcCtx.variaveis[p] = args[i]; });
                const res = await this.executarBloco(funcDef.bloco, funcCtx);
                if (res && res.__isReturn) return res.value;
                return undefined;
            }
        } else if (partes.length >= 2) {
            let obj = variaveis[partes[0]];
            let metodo = partes[partes.length-1];
            if (partes.length === 3) obj = obj[partes[1]];
            
            if (Array.isArray(obj)) {
                if (metodo === "BOTA_PRA_FUDER") { obj.push(args[0]); return undefined; }
                if (metodo === "TAMANHO") return obj.length;
                if (metodo === "PEGA") return obj[args[0]];
            }

            if (obj && obj.__class && ctx.classes[obj.__class] && ctx.classes[obj.__class][metodo]) {
                const methodDef = ctx.classes[obj.__class][metodo];
                const methodCtx = { variaveis: { O_PAI: obj }, funcoes: ctx.funcoes, classes: ctx.classes };
                methodDef.params.forEach((p, i) => { methodCtx.variaveis[p] = args[i]; });
                const res = await this.executarBloco(methodDef.bloco, methodCtx);
                if (res && res.__isReturn) return res.value;
                return undefined;
            }
        }
        throw new Error(`🔥 CHAMADA FALHOU: '${fullPath}' não encontrado!`);
    }
}

module.exports = BirlInterpreter;
