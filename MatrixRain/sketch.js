var symbolSize = 30;
var streams = [];

function setup() {
	createCanvas(
		window.innerWidth, 
		window.innerHeight
		);
	var x = 0;
	for (var i = 0; i <= width / symbolSize; i++) {
		stream = new Stream();
		stream.fill(x, random(-800, 0));
		streams.push(stream);
		x += symbolSize;
	}
	textSize(symbolSize);
	console.log();

}

function draw() {
  	background(0, 125);
  	streams.forEach(function(stream){
  		stream.render();
  	});
}

function Symbol(x, y, speed, first){
	this.x = x;
	this.y = y;
	this.value;
	this.speed = speed;
	this.switchInterval = round(random(2,20));
	this.first = first;

	this.setToRandomSymbol = function(){
		if (frameCount % this.switchInterval == 0){
		this.value = String.fromCharCode(
			0x30A0 + round(random(0,96))
			);
		}
	}

	this.rain = function(){
		this.y += this.speed;
		if(this.y > canvas.height){
			this.y = 0;
		}
	}
}

function Stream(){
	this.symbols = [];
	this.totalSymbols = round(random(5,30));
	this.speed = random(5,10);

	this.fill = function(x, y){
		var first = round(random(0, 4)) == 1;
		for (var i = 0; i <= this.totalSymbols; i ++){
			symbol = new Symbol(x, y, this.speed, first);
			symbol.setToRandomSymbol();
			this.symbols.push(symbol);
			y -= symbolSize;
			first = false;
		}
	}

	this.render = function(){
		this.symbols.forEach(function(symbol){
			//original
			if(symbol.first) {
				fill(150, 255, 150);
			}
			else {
				fill(0, 255, 70);
			}
			text(symbol.value, symbol.x, symbol.y);
			symbol.rain();
			symbol.setToRandomSymbol();

			//blue
			// if(symbol.first) {
			// 	fill(150, 150, 255);
			// }
			// else {
			// 	fill(0, 70, 255);
			// }
			// text(symbol.value, symbol.x, symbol.y);
			// symbol.rain();
			// symbol.setToRandomSymbol();


			//shitty rainbow
			// fill( (round(Math.random() * 1)) * 255, (round(Math.random() * 1)) * 255, (round(Math.random() * 1)) * 255);
			// text(symbol.value, symbol.x, symbol.y);
			// symbol.rain();
			// symbol.setToRandomSymbol();	
			


			});
	}
}