#!/usr/bin/env node

const fs = require("fs");
const path = require("path");
const BirlInterpreter = require("./core/interpreter.js");

/**
 * CLI Entrypoint para a linguagem BIRL
 * Uso: birl <arquivo.birl>
 */
async function main() {
    const filePath = process.argv[2];

    if (!filePath) {
        console.error("\n🔥 ERRO: Você esqueceu do arquivo, monstro!");
        console.error("👉 Uso: birl <arquivo.birl>\n");
        process.exit(1);
    }

    const absolutePath = path.resolve(process.cwd(), filePath);

    if (!fs.existsSync(absolutePath)) {
        console.error(`\n🔥 ERRO: O arquivo '${filePath}' não foi encontrado na jaula!`);
        console.error("👉 Verifique o caminho e tente novamente.\n");
        process.exit(1);
    }

    const extensao = path.extname(absolutePath);
    if (extensao !== '.birl') {
        console.warn(`\n⚠️ AVISO: Esse arquivo não tem extensão .birl. O treino pode catabolizar!\n`);
    }

    try {
        const codigoRaw = fs.readFileSync(absolutePath, "utf8");
        const interpreter = new BirlInterpreter();
        
        console.log("💪 CARREGANDO COMPILADOR BIRL V1.0.0 (DISTRIBUIÇÃO OFICIAL)...");
        await interpreter.run(codigoRaw, absolutePath);
        
    } catch (e) {
        console.error("\n🔥 ERRO CRÍTICO NA EXECUÇÃO DO TREINO!");
        console.error(e.message);
        process.exit(1);
    }
}

main();
