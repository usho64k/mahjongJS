var state_gamescene = 0;

//gamesceneで今どの画面かを判断する
function start()
{
	//ゲーム開始・描画
	sentGamescene(0);
	drawCanvas();
}

function sentGamescene(sceneNo)
{
	state_gamescene = sceneNo;
}

function drawCanvas()
{
	drawTarget = document.getElementById('gameboard');
	proc_ctx = drawTarget.getContext('2d');

	switch(state_gamescene)
	{
		case 0:
			//タイトル画面
			drawTitle(proc_ctx);
			break;
		case 1:
			//ゲーム画面表示
			drawGameBoard(proc_ctx);
			break;
		case 2:
			//文字入れてみるか
			break;
	}

}

function clPai(id)
{
	drawCanvas();
}
function pon()
{

}
function chi()
{

}
function kan()
{

}
function tsumo()
{

}
function ron()
{

}
function reach()
{

}

function drawTitle(ctx)
{
	ctx.fillStyle = 'green';
	ctx.fillRect(10,10,1180,880);
	var img = new Image();
	ctx.drawImage(img,0,0);
	img.src = 'title.jpg';
}

function drawGameBoard(ctx)
{
	ctx.fillStyle="black";
	ctx.fillRect(10,10,10,10);
	var img = new Image();
}