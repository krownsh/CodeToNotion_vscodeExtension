const vscode = require('vscode');
const { Client } = require('@notionhq/client');
const {v4 : uuid } = require('uuid')
const emoji=require('node-emoji')

/**
 * @param {vscode.ExtensionContext} context
 */
function activate(context) {
	const NotionSupportedLanguages = [
		'abap', 'arduino', 'bash', 'basic', 'c', 'clojure', 'coffeescript', 'c++', 'c#',
		'css', 'dart', 'diff', 'docker', 'elixir', 'elm', 'erlang', 'flow', 'fortran', 'f#',
		'gherkin', 'glsl', 'go', 'graphql', 'groovy', 'haskell', 'html', 'java', 'javascript',
		'json', 'julia', 'kotlin', 'latex', 'less', 'lisp', 'livescript', 'lua', 'makefile',
		'jsonc', 'markdown', 'markup', 'matlab', 'mermaid', 'nix', 'objective-c', 'ocaml',
		'pascal', 'perl', 'php', 'plain text', 'plaintext', 'powershell', 'prolog', 'protobuf',
		'python', 'r', 'reason', 'ruby', 'rust', 'sass', 'scala', 'scheme', 'scss', 'shell',
		'solidity', 'sql', 'swift', 'typescript', 'vb.net', 'verilog', 'vhdl', 'visual basic',
		'webassembly', 'xml', 'yaml', 'java/c/c++/c#', 'c#', 'c++', 'c', 'java'
	];
	let disposable = vscode.commands.registerCommand('CodeToNotion.helloWorld', async ()=>{
		const input = await vscode.window.showInputBox();
		console.log("inputinputinputinput",input)
		//第二個是確認或關閉按鈕
		vscode.window.showInformationMessage('Hello World from try1118!',input);
	});
	let getToken = vscode.commands.registerCommand('CodeToNotion.getNotionToken', async () => {
		const workspaceSettings = vscode.workspace.getConfiguration('CodeToNotion');
		console.log("workspaceSettingsworkspaceSettingsworkspaceSettings",workspaceSettings);
		vscode.window.showInformationMessage(workspaceSettings.databaseId);
	});
	let codeToNotion = vscode.commands.registerCommand('CodeToNotion.sendCodeToNotion', async() => {
		const token = vscode.workspace.getConfiguration('CodeToNotion').token
		const notion_token = new Client({ auth: token});
		const databaseId = vscode.workspace.getConfiguration('CodeToNotion').databaseId;
		const notion_userId = vscode.workspace.getConfiguration('CodeToNotion').userId;
		const notion_pageId = vscode.workspace.getConfiguration('CodeToNotion').pageId;
		const textEditor = vscode.window.activeTextEditor;
		const selectionCode = textEditor.document.getText(textEditor.selection);
		console.log("asdfasdfasd",token,notion_token,notion_pageId,selectionCode);
		const notion_page_title = await vscode.window.showInputBox({ placeHolder: '創建Notion頁面標題' })
		const language = await vscode.window.showQuickPick(NotionSupportedLanguages,{ placeHolder: '請選擇你要創建的程式語言' })
		console.log("languagelanguagelanguagelanguage",language)
		const _emoji =await emoji.random().emoji
		if(!notion_token || !notion_userId ||!notion_pageId){
			vscode.window.showWarningMessage("請先到設定中設定Notion相關api參數")
		}else{
			try {
				notion_token.pages.create({
					"object": "page",
					"id": uuid(),
					"created_time": new Date(),
					"created_by": {
						"object": "user",
						"id": notion_userId
					},
					"cover": null,
					"icon": {
						"type": "emoji",
						"emoji": _emoji
					},
					"parent": {
						"type": "page_id",
						"page_id": notion_pageId
					},
					"archived": true,
					"properties": {
							"title": [
								{
									"type": "text",
									"text": {
										"content": notion_page_title==="" ?"新增內容"+new Date():notion_page_title,
										"link": null
									},
									"annotations": {
										"bold": false,
										"italic": false,
										"strikethrough": false,
										"underline": false,
										"code": false,
										"color": "default"
									},
									"plain_text": notion_page_title,
									"href": null
								}
							]
					},
					children:[
						{
							'object': 'block',
							'type': 'code',
							'code': {
								'rich_text': [{
								'type': 'text',
								'text': {
									'content': selectionCode
								}
								}],
								'language': language
							//   'language': purifyLanguageType(codeLanguage)
							}
						}
					]
				});
				vscode.window.showInformationMessage('Notion筆記創建成功 : '+notion_page_title,);
			} catch (error) {
				console.error(error.body);
				vscode.window.showErrorMessage('Notion筆記創建失敗 : '+notion_page_title,);
			}
		}
	});


	context.subscriptions.push(disposable,getToken,codeToNotion);
}
function deactivate() {}

module.exports = {
	activate,
	deactivate
}
