function Bullet(x, y, r){
	this.x = x;
	this.y = y;
	this.r = 8;
	this.toDelete = false;

	this.show = function (){
		noStroke();
		fill(255, 255, 255);
		ellipse(this.x, this.y, this.r*2, this.r*2);
	}

	this.delete = function(){
		this.toDelete = true;
	}

	this.move = function(){
		this.y = this.y - 4;
	}

	this.hitsEnemy = function(Enemy){
		var d = dist(this.x, this.y, Enemy.x, Enemy.y)
		if (d < this.r + Enemy.r) {
			return true;
		} else {
			return false;
		}
	}

	this.hitsObstacle = function(Obstacle){
		var d = dist(this.x, this.y, Obstacle.x, Obstacle.y)
		if (d < this.r + Obstacle.height / 2) {
			return true;
		} else if (d < this.r + Obstacle.width / 2){
			return true;
		} else {
			return false;
		}

	}
}