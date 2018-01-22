// ==UserScript==
// @name         Codeimcomplete Breakout Cheat
// @namespace    https://github.com/johnnyawesome
// @version      0.1
// @description  Breakout God Mode for https://codeincomplete.com/games/breakout/
// @author       JohnnyAwesome
// @match        https://codeincomplete.com/games/breakout/*
// @grant        none
// @icon         https://cdn0.iconfinder.com/data/icons/pixelo/32/skull.png
// ==/UserScript==

(function() {
	'use strict';


	addHackButton();

	console.log("Snake Cheat Script by Johnny Awesome");

	function addHackButton() {

		var hackButton = document.createElement('button');
		var buttonText = document.createTextNode('HACK!!');
		hackButton.setAttribute('id', 'hack');
		hackButton.addEventListener("click", addCheatTweaks);
		hackButton.appendChild(buttonText);

		document.getElementsByTagName('body') [0].appendChild(hackButton);
	}

	function addCheatTweaks(){

		alert("The default Values are now overwritten. Start a game and loose it. Then, the game reloads with the cheat values inserted. Start it again and enjoy!");

		Breakout.Defaults.ball.labels = {
			3: { text: '👾HACK...👾', fill: '#D82800', stroke: 'black', font: 'bold 28pt arial' },
			2: { text: 'THAT..',    fill: '#80D010', stroke: 'black', font: 'bold 28pt arial' },
			1: { text: '💩SHIT!💩',      fill: '#D82800', stroke: 'black', font: 'bold 28pt arial' }
		};

		Breakout.Defaults.paddle.width = 30;
		Breakout.Defaults.paddle.height = 5;
		Breakout.Defaults.ball.speed = 5000;
		Breakout.Defaults.ball.radius = 0.8;
		Breakout.Defaults.color.paddle = "rgb(200,0,0)";
		Breakout.Defaults.color.background = "rgb(0,0,0)";

	}

})();