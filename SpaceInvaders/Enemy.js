function Enemy(x, y) {
	this.x = x;
	this.y = y;
	this.r = 30;
	this.toDestroy = false;

	this.xdir = 0.5;


	this.show = function (){
		fill(255, 255, 255);
		ellipse(this.x, this.y, this.r*2, this.r*2);
	}

	this.destroy = function(){
		this.toDestroy = true;
	}

	this.move = function(){
		this.x = this.x + this.xdir;
	}

	this.shiftDown = function(){
		this.xdir *= -1;
		this.y += this.r;
	}

}