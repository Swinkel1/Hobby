function Obstacle(x, y){
	this.x = x;
	this.y = y;
	this.height = 30;
	this.width = 60;
	this.damage = 0;

	this.show = function(){
		noStroke();
		fill(120, 0, 120);
		rectMode(CENTER);
		rect(this.x, this.y, this.width, this.height);
	}

	this.damage = function(){
		this.damage += 1;
	}
}