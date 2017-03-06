var ship;
var enemies = [];
var bullets = [];
var obstacles = [];
var cols = 9;
var rows = 3;

function setup() {
	createCanvas(800,600);
	ship = new Ship();
	
	for(var i = 0; i < cols; i++){
		for(var j = 0; j < rows; j++){
		var e = new Enemy(i*80+80 ,j*60+60);
		enemies.push(e);
		}
	}

	for(var i = 0; i < 4; i ++){
		obstacles[i] = new Obstacle(i * 210 + 80, 400);
	}

}

function draw() {
	background(51);
	ship.show();

	// Show and move every bullet
	for(var i = 0; i < bullets.length; i++){	
		bullets[i].show();
		bullets[i].move();
		// Check if any of the bullets hit an enemy
		for(var j = 0; j < enemies.length; j++){
			if (bullets[i].hitsEnemy(enemies[j])) {
				enemies[j].destroy();
				bullets[i].delete();
			} 		
		}
		//Check if any of the bullets hit an obstacle
		for(var k = 0; k < obstacles.length; k++){
			if (bullets[i].hitsObstacle(obstacles[k])) {				
				obstacles[k].damage();	
				bullets[i].delete();		
			} 		
		}
	}

	var edge = false;
	
	// Showing and moving every enemy
	for(var i = 0; i < enemies.length; i++) {
		enemies[i].show();
		enemies[i].move();

		// checking if an enemy has hit an edge
		if (enemies[i].x + enemies[i].r > width) {
			edge = true;
		} else if (enemies[i].x - enemies[i].r < 0) {
			edge = true;
		}
	}

	// Show every obstacle
	for(var i = 0; i < obstacles.length; i++){
		obstacles[i].show();
	}	

	// if an enemy has hit an edge, move it down
	for(var i = 0; i < rows; i++){
		if (edge){
			for(var i = 0; i < enemies.length; i++){
				enemies[i].shiftDown();
			}
		}
	}	

	// Removing bullets
	for(var i = bullets.length - 1; i >= 0; i--){	
		if (bullets[i].toDelete){
			bullets.splice(i, 1);
		}
	}

	// Removing enemies
	for(var i = enemies.length - 1; i >= 0; i--){
		if (enemies[i].toDestroy){
			enemies.splice(i, 1);
		}
	}

	if (keyIsDown(RIGHT_ARROW)){
		ship.x +=5;
	}
	if (keyIsDown(LEFT_ARROW)){
		ship.x -=5;
	}
}

function keyPressed(){
	
	if (keyCode === 32 ){
		bullets.push(new Bullet(ship.x, height - 40));
	}
}
