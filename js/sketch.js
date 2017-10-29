//Creating three variables here,one for the global snake object,one for
//the single food object,and one constant for the number of pixels in
//a single step.
let gsnake;
let gfood;
const step = 10;

function setup(){
	createCanvas(600,600);
	gsnake = new Snake();	//Initializing snake
	gfood = new Food;		//and food objects
	gfood.create();
	gsnake.queue.unshift([gsnake.x,gsnake.y]);	//Pushing the initial single block of snake in the array
}

function draw(){
	background(51);	//Love the color
	gfood.show();
	if(gsnake.checkCollision(gfood.x,gfood.y))	//Checking if snake has eaten a food
	{
		gfood.create();								//If yes we update the food location
		gsnake.queue.unshift([gsnake.x,gsnake.y]);	//and increase the snake length by one 
	}
	gsnake.move();
	gsnake.show();
	frameRate(20);
	if(gsnake.checkDefeat()){	//Lose function
		fill(255,0,0);
		textSize(100);
		textAlign(CENTER);
		text("You Lose!",300,300);	//Sucker
		frameRate(0);				//Useful way of permanently pausing games
	}
}

function keyPressed(){											//Reads the arrow keys pressed
		if((keyCode === UP_ARROW)&&(gsnake.d!=1)){				//The double checks are there to
			gsnake.d = 3;										//ensure you can't go backwards
		} else if((keyCode === LEFT_ARROW)&&(gsnake.d!=0)){
			gsnake.d = 2;
		} else if((keyCode === DOWN_ARROW)&&(gsnake.d!=3)){
			gsnake.d = 1;
		} else if((keyCode === RIGHT_ARROW)&&(gsnake.d!=2)){
			gsnake.d=0;
		}
}
