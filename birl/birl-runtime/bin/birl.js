#!/usr/bin/env node

const fs = require("fs");
const path = require("path");
const BirlInterpreter = require("../core/interpreter.js");

async function main() {
    const filePath = process.argv[2];

    if (!filePath) {
        console.log("💪 BIRL CLI - USO: birl <arquivo.birl>");
        process.exit(1);
    }

    const absolutePath = path.resolve(filePath);
    if (!fs.existsSync(absolutePath)) {
        console.log(`🔥 ERRO: Arquivo '${filePath}' não encontrado!`);
        process.exit(1);
    }

    console.log("💪 CARREGANDO COMPILADOR BIRL V5.5 (O MONOREPO)...");

    const codigoRaw = fs.readFileSync(absolutePath, "utf8");
    const interpreter = new BirlInterpreter();
    await interpreter.run(codigoRaw, absolutePath);
}

main();
