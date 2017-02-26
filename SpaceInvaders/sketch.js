var ship;
var enemies = [];

function setup() {
	createCanvas(800,600);
	ship = new Ship();
	for(var i = 0; i < 5; i++)
	enemies[i] = new Enemy();
}

function draw() {
	background(51);
	ship.show();


function keyPressed(){
	if (keyCode === RIGHT_ARROW){
		ship.move(1);
	}
	else if (keyCode === LEFT_ARROW){
		ship.move(-1)
	}
}

