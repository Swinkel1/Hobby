function Ship(){
	this.x = width / 2;

	this.show = function () {
		fill(0, 255, 0);
		rectMode(CENTER);
		rect(this.x, height - 20, 20, 40);
	}

	this.move = function(direction){
		this.x += direction*5;
	}
}
