class link{
    constructor(){
        this.animator = new animator(ASSET_MANAGER.getAsset('./assets/LinkSprite.png'), 0, 33, 24, 32, 24, 0.035);

        this.facing = 2;//0 = up, 1 = right, 2 = down, 3 = left
        this.state = 0;//0 = idle. 1 = walking 2 = sprinting

        this.x = 30;
        this.y = 30;
        

        this.animations = [];
        this.loadAnimations();
    }

    loadAnimations(){
        for(var i = 0; i < 4; i++) {//4 directions
            this.animations.push([]);
            for(var j = 0; j < 3; j++){//2 states
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

        this.animations[0][2] = new animator(ASSET_MANAGER.getAsset('./assets/LinkSprite.png'),0,0,24,32,24,.035)
        this.animations[1][2] = new animator(ASSET_MANAGER.getAsset('./assets/LinkSprite.png'),0,33,24,32,24,.035)
        this.animations[2][2] = new animator(ASSET_MANAGER.getAsset('./assets/LinkSprite.png'),0,66,24,32,24,.035)
        this.animations[3][2] = new animator(ASSET_MANAGER.getAsset('./assets/LinkSprite.png'),0,99,24,32,24,.035)
    }
    
    update(){
        this.velocity = [0,0];
        this.state = 0;

        //determine vertical
        if(gameEngine.keys['w'] && !gameEngine.keys['s'] && !gameEngine.keys['Shift']){
            this.facing = 0;
            this.state = 1;
            this.y -= 1;
        }
        else if(gameEngine.keys['s'] && !gameEngine.keys['w'] && !gameEngine.keys['Shift']){
            this.facing = 2;
            this.state = 1;
            this.y += 1;
        }
        else if(gameEngine.keys['w'] && !gameEngine.keys['s'] && gameEngine.keys['Shift']){
            this.facing = 0;
            this.state = 1;
            this.y -= 2;
        }
        else if(gameEngine.keys['s'] && !gameEngine.keys['d'] && gameEngine.keys['Shift']){
            this.facing = 2;
            this.state = 1;
            this.y += 2;
        }
        //determine horizontal
        if(gameEngine.keys['a'] && !gameEngine.keys['d'] && !gameEngine.keys['Shift']){
            this.facing = 3;
            this.state = 1;
            this.x -= 1;
        }
        else if(gameEngine.keys['d'] && !gameEngine.keys['a'] && !gameEngine.keys['Shift']){
            this.facing = 1;
            this.state = 1;
            this.x += 1;
        }
        else if(gameEngine.keys['a'] && !gameEngine.keys['d'] && gameEngine.keys['Shift']){
            this.facing = 3;
            this.state = 1;
            this.x -= 2;
        }
        else if(gameEngine.keys['d'] && !gameEngine.keys['a'] && gameEngine.keys['Shift']){
            this.facing = 1;
            this.state = 1;
            this.x += 2;
        }
        //screen wraping
        if(this.x > 1024){
            this.x = -64;
        }
        else if(this.x < -64){
            this.x = 1024;
        }
        if(this.y > 768){
            this.y = -64;
        }
        else if(this.y < -64){
            this.y = 768;
        }
    }

    draw(ctx){
        this.animations[this.facing][this.state].drawFrame(gameEngine.clockTick, ctx, this.x, this.y)
    }
}
