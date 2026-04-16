const vscode = require('vscode');
const { spawn } = require('child_process');
const path = require('path');

/**
 * @param {vscode.ExtensionContext} context
 */
function activate(context) {
    let outputChannel = vscode.window.createOutputChannel("BIRL");

    let disposable = vscode.commands.registerCommand('birl.run', async function () {
        const editor = vscode.window.activeTextEditor;
        if (!editor) {
            vscode.window.showErrorMessage("Abra um arquivo .birl primeiro, monstro!");
            return;
        }

        const document = editor.document;
        if (document.languageId !== 'birl' && !document.fileName.endsWith('.birl')) {
            vscode.window.showErrorMessage("Isso não é BIRL, é coisa de frango!");
            return;
        }

        // Salva o arquivo antes de rodar
        await document.save();

        outputChannel.clear();
        outputChannel.show(true);
        outputChannel.appendLine(`💪 INICIANDO TREINO: ${path.basename(document.fileName)}...`);
        outputChannel.appendLine(`------------------------------------------------------`);

        // Caminho do interpretador (index.js na raiz do projeto)
        // Assumimos que o interpretador está na pasta pai do projeto da extensão ou na raiz do workspace
        const workspaceFolder = vscode.workspace.getWorkspaceFolder(document.uri);
        const interpreterPath = workspaceFolder 
            ? path.join(workspaceFolder.uri.fsPath, 'index.js')
            : path.join(path.dirname(document.fileName), 'index.js');

        const child = spawn('node', [interpreterPath, document.fileName]);

        child.stdout.on('data', (data) => {
            outputChannel.append(data.toString());
        });

        child.stderr.on('data', (data) => {
            outputChannel.append(`[ERRO]: ${data.toString()}`);
        });

        child.on('close', (code) => {
            outputChannel.appendLine(`\n------------------------------------------------------`);
            outputChannel.appendLine(`💪 TREINO CONCLUÍDO (Exit Code: ${code})`);
        });
    });

    context.subscriptions.push(disposable);
}

function deactivate() {}

module.exports = {
    activate,
    deactivate
}
