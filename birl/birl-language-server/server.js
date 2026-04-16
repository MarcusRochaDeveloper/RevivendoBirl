const {
    createConnection,
    TextDocuments,
    Diagnostic,
    DiagnosticSeverity,
    ProposedFeatures,
    InitializeParams,
    DidChangeConfigurationNotification,
    CompletionItem,
    CompletionItemKind,
    TextDocumentPositionParams,
    TextDocumentSyncKind,
    InitializeResult
} = require('vscode-languageserver/node');

const { TextDocument } = require('vscode-languageserver-textdocument');

const connection = createConnection(ProposedFeatures.all);
const documents = new TextDocuments(TextDocument);

let hasConfigurationCapability = false;
let hasWorkspaceFolderCapability = false;
let hasDiagnosticRelatedInformationCapability = false;

connection.onInitialize((params) => {
    const capabilities = params.capabilities;

    hasConfigurationCapability = !!(
        capabilities.workspace && !!capabilities.workspace.configuration
    );
    hasWorkspaceFolderCapability = !!(
        capabilities.workspace && !!capabilities.workspace.workspaceFolders
    );
    hasDiagnosticRelatedInformationCapability = !!(
        capabilities.textDocument &&
        capabilities.textDocument.publishDiagnostics &&
        capabilities.textDocument.publishDiagnostics.relatedInformation
    );

    const result = {
        capabilities: {
            textDocumentSync: TextDocumentSyncKind.Incremental,
            completionProvider: {
                resolveProvider: true
            }
        }
    };
    if (hasWorkspaceFolderCapability) {
        result.capabilities.workspace = {
            workspaceFolders: {
                supported: true
            }
        };
    }
    return result;
});

connection.onInitialized(() => {
    if (hasConfigurationCapability) {
        connection.client.register(DidChangeConfigurationNotification.type, undefined);
    }
    if (hasWorkspaceFolderCapability) {
        connection.workspace.onDidChangeWorkspaceFolders((_event) => {
            connection.console.log('Workspace folder change event received.');
        });
    }
});

// Validação Básica (Diagnostics)
documents.onDidChangeContent(change => {
    validateTextDocument(change.document);
});

async function validateTextDocument(textDocument) {
    const text = textDocument.getText();
    const lines = text.split(/\r?\n/);
    const diagnostics = [];

    let openBlocks = 0;
    
    for (let i = 0; i < lines.length; i++) {
        const line = lines[i];
        if (/(ELE QUE A GENTE QUER\?|NEGATIVA BAMBAM|MAIS QUERO MAIS|OH O HOME AI PO|JAULA)/.test(line)) {
            openBlocks++;
        } else if (line.trim() === "BIRL") {
            if (openBlocks > 0) openBlocks--;
        }
    }

    if (openBlocks > 0) {
        const lastLine = lines.length - 1;
        diagnostics.push({
            severity: DiagnosticSeverity.Warning,
            range: {
                start: { line: lastLine, character: 0 },
                end: { line: lastLine, character: lines[lastLine].length }
            },
            message: `⚠️ MONSTRO, você deixou ${openBlocks} bloco(s) aberto(s)! Faltou o 'BIRL' para fechar.`,
            source: 'BIRL LSP'
        });
    }

    connection.sendDiagnostics({ uri: textDocument.uri, diagnostics });
}

// Autocomplete (Completions)
connection.onCompletion((_textDocumentPosition) => {
    return [
        { label: 'HORA DO SHOW', kind: CompletionItemKind.Keyword, detail: 'Início do treino' },
        { label: 'BIRL', kind: CompletionItemKind.Keyword, detail: 'Fim do bloco/treino' },
        { label: 'MONSTRO', kind: CompletionItemKind.TypeParameter, detail: 'Declaração de variável' },
        { label: 'ELE QUE A GENTE QUER?', kind: CompletionItemKind.Keyword, detail: 'Condicional IF' },
        { label: 'QUE NAO VAI DAR O QUE?', kind: CompletionItemKind.Keyword, detail: 'Condicional ELSE IF' },
        { label: 'NAO VAI DAR NAO', kind: CompletionItemKind.Keyword, detail: 'Condicional ELSE' },
        { label: 'NEGATIVA BAMBAM', kind: CompletionItemKind.Keyword, detail: 'Loop WHILE' },
        { label: 'MAIS QUERO MAIS', kind: CompletionItemKind.Keyword, detail: 'Loop FOR' },
        { label: 'JAULA', kind: CompletionItemKind.Class, detail: 'Definição de classe' },
        { label: 'OH O HOME AI PO', kind: CompletionItemKind.Function, detail: 'Definição de função' },
        { label: 'AJUDA O MALUCO TA DOENTE', kind: CompletionItemKind.Method, detail: 'Chamada de função' },
        { label: 'CE QUER VER ESSA PORRA?', kind: CompletionItemKind.Function, detail: 'Saída de dados' },
        { label: 'QUE QUE CE QUER MONSTRAO?', kind: CompletionItemKind.Function, detail: 'Entrada de dados' },
        { label: 'SAINDO DA JAULA', kind: CompletionItemKind.Keyword, detail: 'Instanciação de classe' },
        { label: 'VEM MONSTRO', kind: CompletionItemKind.Keyword, detail: 'Criação de lista/array' },
        { label: 'O_PAI', kind: CompletionItemKind.Variable, detail: 'Contexto local (this)' },
        { label: 'BORA CUMPADE', kind: CompletionItemKind.Keyword, detail: 'Retorno de função' }
    ];
});

connection.onCompletionResolve((item) => {
    return item;
});

documents.listen(connection);
connection.listen();
