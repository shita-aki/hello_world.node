/*eslint-env node */

var myHttp = require('http');					// http関連のモジュールを読み込む

var myServer = myHttp.createServer();			// webサーバオブジェクトを作る
myServer.on('request', httpPrint);				// requestが来たらhttpPrintを実行するように設定
myServer.listen(1024);							// 指定ポートで待ち受け
console.log('Server running at MY_SERVER.');	// "MY_SERVERで待ってるぜ"とコンソールに表示

function httpPrint (request, response) {
  response.writeHead(200, {'Content-Type': 'text/plain'});
										// "コンテントタイプはテキストだ"と送信
										// 200はhttpのstatus codeで、「要求を正常に終了した」を表すもののようだ
  response.end('Hello World !\n');		// "Hello world !"を送信
  console.log(request.url);				// リクエストURLをコンソールに表示
}
