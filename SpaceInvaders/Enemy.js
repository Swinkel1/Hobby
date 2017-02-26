function Enemy() {
	this.x = 100;
	this.y = 100;

	this.show = function (){
		fill(255, 0 ,255);
		ellipse(this.x, this.y, 60, 60);
	}

}