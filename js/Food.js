//TODO:rewrite using prototypes
function Food() {
	this.create = function() {
		this.x = Math.floor(Math.random()*60)*step; //generating a random number from 0 to 59,
		this.y = Math.floor(Math.random()*60)*step;	//using the integer value of it and multiplying
	}												//the result by step to achieve positioning in the grid
	this.show = function() {
		fill(255,0,0);
		stroke(0);
		rect(this.x,this.y,step,step);
	}
}
