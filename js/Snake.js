//TODO: rewrite using prototypes
function Snake(x = 0,y = 0, d = 0){
		this.x = x;
		this.y = y;
		this.d = d;//0->right,1->down,2->left,3->up
		this.queue = [];
		
		this.show = function(){
			fill(255);
			stroke(0);
			//rect(this.x,this.y,step,step)
			this.queue.forEach(function([currx,curry]){	//display a rectangle for every entry in 
				rect(currx,curry,step,step);			//queue array
			});
		}
		this.move = function(){
			if(this.d === 0){
				this.x += step;
			} else if(this.d === 1){
				this.y += step;
			} else if(this.d === 2){
				this.x -= step;
			} else if(this.d === 3){
				this.y -= step;
			}
			if(this.x<0){
				this.x = 590;
			} 
			if(this.x>590){
				this.x = 0;
			}
			if(this.y<0){
				this.y = 590;
			}
			if(this.y>590){
				this.y = 0;
			}
			this.queue.unshift([this.x,this.y]);	//in every frame we add the curren snake
			this.queue.pop();						//location to the array and we remove the
		}											//last element
		this.checkCollision = function(foodx,foody) {
			if((this.x===foodx)&&(this.y===foody)){
				return true;
			}else {
				return false;
			}
		}
		this.checkDefeat = function() {	//checks if the first block of the snake collides with 
				var i = 0;				//any other block in the array other than itself
				if(this.queue.length>1){
					for(i=1;i<this.queue.length;i++){
						if((this.x===this.queue[i][0])&&(this.y===this.queue[i][1])){
							return true;
						}
					}
				}
		}
}
