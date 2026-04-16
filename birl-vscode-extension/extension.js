const vscode = require('vscode');
const { spawn, execSync } = require('child_process');
const path = require('path');

let outputChannel;

function isBirlAvailable() {
    try {
        execSync(process.platform === 'win32' ? 'where birl' : 'which birl', { stdio: 'ignore' });
        return true;
    } catch (_) {
        return false;
    }
}

function activate(context) {
    outputChannel = vscode.window.createOutputChannel('BIRL');

    // Comando de execução
    const runCmd = vscode.commands.registerCommand('birl.run', async () => {
        const editor = vscode.window.activeTextEditor;
        if (!editor) {
            vscode.window.showErrorMessage('Abre um arquivo .birl primeiro! 🦁');
            return;
        }

        const doc = editor.document;
        if (doc.languageId !== 'birl' && !doc.fileName.endsWith('.birl')) {
            vscode.window.showErrorMessage('Isso não é BIRL! 🐔');
            return;
        }

        if (!isBirlAvailable()) {
            const btn = 'Como instalar';
            const sel = await vscode.window.showErrorMessage(
                "CLI 'birl' não encontrado. Instale com: npm install -g birl-lang",
                btn
            );
            if (sel === btn) {
                vscode.env.openExternal(vscode.Uri.parse('https://www.npmjs.com/package/birl-lang'));
            }
            return;
        }

        await doc.save();
        outputChannel.clear();
        outputChannel.show(true);
        outputChannel.appendLine('💪 =======================================');
        outputChannel.appendLine(`   BIRL: ${path.basename(doc.fileName)}`);
        outputChannel.appendLine('💪 =======================================');

        const child = spawn('birl', [doc.fileName], {
            shell: true,
            cwd: path.dirname(doc.fileName)
        });

        child.stdout.on('data', d => outputChannel.append(d.toString()));
        child.stderr.on('data', d => outputChannel.append(`[ERR] ${d.toString()}`));
        child.on('close', code => {
            outputChannel.appendLine('');
            outputChannel.appendLine(`${code === 0 ? '✅' : '❌'} Exit: ${code}`);
        });
        child.on('error', e => outputChannel.appendLine(`[SYS] ${e.message}`));
    });

    // Status bar
    const bar = vscode.window.createStatusBarItem(vscode.StatusBarAlignment.Right, 100);
    bar.command = 'birl.run';
    bar.tooltip = 'Executar BIRL (Ctrl+Alt+B)';

    const refresh = () => {
        const ed = vscode.window.activeTextEditor;
        const isBirl = ed && (ed.document.languageId === 'birl' || ed.document.fileName.endsWith('.birl'));
        isBirl ? (bar.text = '$(play) BIRL', bar.show()) : bar.hide();
    };

    context.subscriptions.push(
        runCmd,
        bar,
        vscode.window.onDidChangeActiveTextEditor(refresh)
    );

    refresh();
}

function deactivate() {
    outputChannel?.dispose();
}

module.exports = { activate, deactivate };
