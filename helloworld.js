/*eslint-env browser */

// 読み込み完了したらinitial()呼ぶ
window.addEventListener("load", initial);

// canvasに文字書くだけの関数
function initial() {
	var Canvas = document.querySelector("#canvas");
	var cnvsCntxt = Canvas.getContext("2d");

	cnvsCntxt.font = "bold 48pt 'arial'";
	cnvsCntxt.strokeStyle = "black";
	cnvsCntxt.strokeText("ファイルが送れてるかテスト", 40, 240);
}
