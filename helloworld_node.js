/*eslint-env node */

var myHttp = require('http');	// http関連のモジュールを読み込む
var myHttpF = require('fs');	// ファイル関連モジュールを読み込む

var myServer = myHttp.createServer();			// webサーバオブジェクトを作る
myServer.on('request', httpPrint);				// requestが来たらhttpPrintを実行するように設定
myServer.listen(1024);							// 指定ポートで待ち受け
console.log('Server running at MY_SERVER.');	// "MY_SERVERで待ってるぜ"とコンソールに表示

function httpPrint (request, response) {
// リクエストに対してファイルを読み込んで送信する。

	console.log(request.url);				// リクエストURLをコンソールに表示

	// とりあえず、jsとcssはファイル名狙い撃ちで読み込んで送信。
	// それ以外リクエストにはhelloworld.htmlを送信。
	if (request.url === "/helloworld.js") {
		responseHttp(response, request.url, "text/plane");
	} else if (request.url === "/helloworld.css"){
		responseHttp(response, request.url, "text/css");
	} else {
		responseHttp(response, "/helloworld.html", "text/html");
	}
}

function responseHttp (response, url, contentType) {
// ファイルを送信する。
//	response   :レスポンスオブジェクト
//	url        :ファイルのドキュメントルートからのURL
//	contentType:送信するデータのコンテントタイプ

	// ファイルを読み込んで、status code と content type 設定して送信。
	myHttpF.readFile("." + url, 'UTF-8',
		function(err, data){
		// ファイル読み込めた場合のコールバック関数。
			response.writeHead(200, {'Content-Type': contentType});
			response.write(data);
			response.end();
		});
}
