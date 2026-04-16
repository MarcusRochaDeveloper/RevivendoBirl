const vscode = require('vscode');
const path = require('path');
const { spawn, execSync } = require('child_process');
const { LanguageClient, TransportKind } = require('vscode-languageclient/node');

let client;

/**
 * Função para verificar se um comando existe no sistema (Windows/Unix)
 */
function isCommandAvailable(command) {
    try {
        const cmd = process.platform === 'win32' ? `where ${command}` : `which ${command}`;
        execSync(cmd, { stdio: 'ignore' });
        return true;
    } catch (e) {
        return false;
    }
}

function activate(context) {
    // -------------------------------------------------------------------------
    // 1. CONFIGURAÇÃO DO LANGUAGE SERVER (LSP)
    // -------------------------------------------------------------------------
    const serverModule = context.asAbsolutePath(
        path.join('..', 'birl-language-server', 'server.js')
    );

    const serverOptions = {
        run: { module: serverModule, transport: TransportKind.ipc },
        debug: { module: serverModule, transport: TransportKind.ipc }
    };

    const clientOptions = {
        documentSelector: [{ scheme: 'file', language: 'birl' }],
        synchronize: {
            fileEvents: vscode.workspace.createFileSystemWatcher('**/.birl')
        }
    };

    client = new LanguageClient(
        'birlLanguageServer',
        'BIRL Language Server',
        serverOptions,
        clientOptions
    );

    client.start();

    // -------------------------------------------------------------------------
    // 2. COMANDO DE EXECUÇÃO (birl.run)
    // -------------------------------------------------------------------------
    let outputChannel = vscode.window.createOutputChannel("BIRL");

    let disposable = vscode.commands.registerCommand('birl.run', async function () {
        const editor = vscode.window.activeTextEditor;
        if (!editor) return;

        const document = editor.document;
        if (document.languageId !== 'birl') return;

        // VERIFICAÇÃO DO CLI GLOBAL
        if (!isCommandAvailable('birl')) {
            const btn = "Instalar BIRL";
            const msg = "⚠️ MONSTRO! O comando 'birl' não foi encontrado no seu sistema. Instale o runtime globalmente para rodar o treino.";
            vscode.window.showErrorMessage(msg, btn).then(selection => {
                if (selection === btn) {
                    vscode.env.openExternal(vscode.Uri.parse('https://www.npmjs.com/package/birl-lang'));
                }
            });
            return;
        }

        await document.save();

        outputChannel.clear();
        outputChannel.show(true);
        outputChannel.appendLine(`💪 INICIANDO TREINO (MODO GLOBAL CLI)...`);
        outputChannel.appendLine(`------------------------------------------------------`);

        // Agora usamos o comando 'birl' global em vez do caminho absoluto
        const child = spawn('birl', [document.fileName], { shell: true });

        child.stdout.on('data', (data) => {
            outputChannel.append(data.toString());
        });

        child.stderr.on('data', (data) => {
            outputChannel.append(`[ERRO]: ${data.toString()}`);
        });

        child.on('close', (code) => {
            outputChannel.appendLine(`\n------------------------------------------------------`);
            outputChannel.appendLine(`💪 TREINO FINALIZADO (Code: ${code})`);
        });
    });

    context.subscriptions.push(disposable);
}

function deactivate() {
    if (!client) {
        return undefined;
    }
    return client.stop();
}

module.exports = {
    activate,
    deactivate
};
