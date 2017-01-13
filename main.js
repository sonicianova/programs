//SoniciaNova website programming by Andrew Alban, 2016.
//This code is property of SoniciaNova. Piracy of this code is illegal.

//Define variables:

//Initial function:

function init() {
	replace('<div id="header"><a href="https://sonicianova.github.io/home"><img src="website_title.png" id="website_title" /></a></div><div id="navBar"><a href="https://sonicianova.github.io/games"><div class="navButton" type="button" id="gamesButton">GAMES</div></a><a href="https://sonicianova.github.io/home"><div class="navButton" type="button" id="homeButton">HOME</div></a><a href="https://sonicianova.github.io/programs"><div class="navButton" type="button" id="programsButton">PROGRAMS</div></a></div><br><br><h2>Personal Assistant</h2><p>This program can do several different tasks, including searching things online, quickly launching a website, or telling a joke! It makes a great homepage for your browser.</p><a href="https://sonicianova.github.io/pa"><div class="playButton" id="paButton">PLAY</div></a>'); //This code creates the basic elements of the website.
}

//Tools:

function replace(object) { //This replaces what is currently inside of the mainContainer.
	document.getElementById("mainContainer").innerHTML = object;
}