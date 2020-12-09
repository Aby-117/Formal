//Hidden Menu
var openMenu = document.getElementById("menu");
var menu = document.getElementById("hiddenMenu");
var close = document.getElementById("close");

openMenu.onclick = function() {
	menu.style.display = 'block';
	close.style.display = 'block';
}

close.onclick = function() {
	menu.style.display = 'none';
	close.style.display = 'none';
}

//Package Display

var bronze_svg = document.getElementById("svg-bronze"); 
var bronze_title = document.getElementById("bronze-title");
var silver_svg = document.getElementById("svg-silver");
var silver_title = document.getElementById("silver-title");
var gold_svg =document.getElementById("svg-gold");
var gold_title = document.getElementById("gold-title");
var bronzeTable = document.getElementById("bronze-table");
var goldTable = document.getElementById('gold-table');
var silverTable = document.getElementById('silver-table');

gold_title.onclick = function () {
	console.log("gold");
	bronzeTable.style.display = 'none';
	silverTable.style.display = "none";
	goldTable.style.display = 'block';
	goldTable.scrollIntoView({ block: 'end',  behavior: 'smooth' });

}

silver_title.onclick = function () {
	console.log("silver");
	goldTable.style.display = 'none';
	bronzeTable.style.display = 'none';
	silverTable.style.display = "block";
	silverTable.scrollIntoView({ block: 'end',  behavior: 'smooth' });
}

bronze_title.onclick = function () {
	console.log("bronze");
	goldTable.style.display = 'none';
	silverTable.style.display = 'none';
	bronzeTable.style.display = "block";
	bronzeTable.scrollIntoView({ block: 'end',  behavior: 'smooth' });
}






//Maybe after you launch the site, you could later connect the portfolio pictures from home to the portfolio 
//so the when you change the pics at home they also change in portfolio 