

//All programming by Andrew Alban, founder of SoniciaNova, 2016

//Define variables:

pageWidth = getWidth();

//Initial function run when page loads:

function init() {
	replace("header",'<a href="https://sonicianova.github.io/home"><img src="https://images.cooltext.com/4699727.png" id="main_logo" alt="SoniciaNova" /></a>');
	replace("navbar",'<a class="nav_link" href="https://sonicianova.github.io/games"><div class="nav_button">GAMES</div></a><a class="nav_link" href="https://sonicianova.github.io/home"><div class="nav_button">HOME</div></a><a class="nav_link" href="https://sonicianova.github.io/programs"><div class="nav_button">PROGRAMS</div></a>');
	replace("container",'<h1 class="title">Programs</h1><div class="divider"></div><p class="subtitle">Personal Assistant (BETA)</p><p class="text">This is a sleek personal assistant that is great to use as your home tab. It can launch websites and google anything, it can load apps like the Google calculator and your email, and it can tell you a joke if you are feeling down! Keep in mind, this is in beta version, so more cool things will be coming soon!</p><a href="https://sonicianova.github.io/pa" target="_blank"><div class="use_button">TRY ME!</div></a>');
}

//Main functions page uses:



//Tools:

function replace(x,y) {
	document.getElementById(x).innerHTML = y;
}