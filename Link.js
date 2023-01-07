class link{
    constructor(){
        this.animator = new animator(ASSET_MANAGER.getAsset('./assets/LinkSprite.png'), 0, 33, 24, 32, 24, 0.035);

        this.facing = 2;//0 = up, 1 = right, 2 = down, 3 = left
        this.state = 0;//0 = idle. 1 = walking

        this.x = 30;
        this.y = 30;
        this.speed = 0;

        this.animations = [];
        this.loadAnimations();
    }

    loadAnimations(){
        for(var i = 0; i < 4; i++) {//4 directions
            this.animations.push([]);
            for(var j = 0; j < 2; j++){//2 states
                this.animations[i].push([]);
            }
        }

        this.animations[0][0] = new animator(ASSET_MANAGER.getAsset('./assets/LinkSprite.png'),0,0,24,32,1,.035)
        this.animations[1][0] = new animator(ASSET_MANAGER.getAsset('./assets/LinkSprite.png'),0,33,24,32,1,.035)
        this.animations[2][0] = new animator(ASSET_MANAGER.getAsset('./assets/LinkSprite.png'),0,66,24,32,1,.035)
        this.animations[3][0] = new animator(ASSET_MANAGER.getAsset('./assets/LinkSprite.png'),0,99,24,32,1,.035)

        this.animations[0][1] = new animator(ASSET_MANAGER.getAsset('./assets/LinkSprite.png'),0,0,24,32,24,.035)
        this.animations[1][1] = new animator(ASSET_MANAGER.getAsset('./assets/LinkSprite.png'),0,33,24,32,24,.035)
        this.animations[2][1] = new animator(ASSET_MANAGER.getAsset('./assets/LinkSprite.png'),0,66,24,32,24,.035)
        this.animations[3][1] = new animator(ASSET_MANAGER.getAsset('./assets/LinkSprite.png'),0,99,24,32,24,.035)
    }
    
    update(){
        
    }

    draw(ctx){
        this.animations[this.facing][this.state].drawFrame(gameEngine.clockTick, ctx, this.x, this.y)
    }
}