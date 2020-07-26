var state_gamescene = 0;
var pai_resource = [4,4,4,4,4,4,4,4,4,  4,4,4,4,4,4,4,4,4,   4,4,4,4,4,4,4,4,4,   4,4,4,4,4,4,4];
var pai_hand_player =[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
var pai_hand_enemy = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
var wait_timer = 0;

//gamesceneで今どの画面かを
function start()
{
	//ゲーム開始�
	wait_timer = 3;
	sentGameScene(1);
	drawCanvas();
}

function IntervalFunc()
{
	if(state_gamescene == 1)
	{
		if(wait_timer != 0)
		{
			wait_timer -= 1;
		}
		else
		{
			sentGameScene(11);
		}
	}
	if(state_gamescene == 10)
	{
		sentGameScene(11);
	}
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
		case 1:
			//Reset Scene
			//タイトル画面
			drawTitle(proc_ctx);
			break;
		case 2:
			//ゲーム画面表示
			drawGameBoard(proc_ctx);
			break;
		case 3:
			//文字入れてみるか
			break;
		case 4:
		case 5:
		case 6:
		case 7:
		case 8:
		case 9:
			//reserved
			break;
		case 10:
			//配牌
			getHaipai();
			drawGame(proc_ctx);
			break;
		case 11:
			//oya
			getTumo1();
			drawGame(proc_ctx);
			break;
		case 12:
		case 13:
		case 14:
		case 15:
		case 16:
		case 17:
		case 18:
		case 19:
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
	var img = new Image();
	img.src = 'title.jpg';
	ctx.drawImage(img,0,0);
}

function drawGameBoard(ctx)
{
	ctx.fillStyle="black";
	ctx.fillRect(10,10,10,10);
}

setInterval(IntervalFunc,1000);
