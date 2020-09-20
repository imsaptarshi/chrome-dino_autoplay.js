function autoPlay(){
	this.Obstacle.types[0]['minGap']=150;
	this.Obstacle.types[1]['minGap']=150;
	setTimeout(()=>{
		instance=this.Runner.instance_;
		obstacles=instance.horizon.obstacles;
		instance.setSpeed(9);
		if(instance.tRex.ducking){
			instance.tRex.setDuck(true);
		}
		if(obstacles.length>0){
			action='JUMP';
			obs_type=obstacles[0]['typeConfig']['type'];
			if(obs_type=='CACTUS_SMALL' || obs_type=='CACTUS_LARGE'){
				action='JUMP'
			}
			else if(obs_type=='PTERODACTYL'){
				if(obstacles[0]['yPos']==50 || obstacles[0]['yPos']==75){
					action='DUCK'
				}
			}
			if(obstacles[0].xPos<=100){
				if(action=='JUMP'){
					curr_speed=instance.currentSpeed;
					instance.tRex.startJump(curr_speed);
				}
				else if(action=='DUCK'){
					instance.tRex.setDuck(true);
				}
			}
		}
		autoPlay();
	},50);
}
autoPlay();