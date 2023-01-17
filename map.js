class map{
    constructor(link){
        this.player = link;
        this.position = [0,0];
        this.spriteSheet = ASSET_MANAGER.getAsset('./assets/TileTestMap.png')
        this.animations = [];
        this.loadAnimations();
    }

    loadAnimations(){
        for(var i = 0; i < 3; i++) {//3 columns
            this.animations.push([]);
            for(var j = 0; j < 3; j++){//3 rows
                this.animations[i].push([]);
            }
        }

        this.animations[0][0] = new animator(this.spriteSheet,0,0,192,160,1,1,1);
        this.animations[0][1] = new animator(this.spriteSheet,192,0,192,160,1,1,1);
        this.animations[0][2] = new animator(this.spriteSheet,384,0,192,160,1,1,1);

        this.animations[1][0] = new animator(this.spriteSheet,0,160,192,160,1,1,1);
        this.animations[1][1] = new animator(this.spriteSheet,192,0,192,160,1,1,1);
        this.animations[1][2] = new animator(this.spriteSheet,384,0,192,160,1,1,1);

        this.animations[2][0] = new animator(this.spriteSheet,0,320,192,160,1,1,1);
        this.animations[2][1] = new animator(this.spriteSheet,192,320,192,160,1,1,1);
        this.animations[2][2] = new animator(this.spriteSheet,384,320,192,160,1,1,1);
    }

    update(){
        if(this.player.x > 192){
            this.player.x = -63;
            this.position[0]++;
        }
        else if(this.player.x < -64){
            this.player.x = 191;
            this.position[0]--;
        }
        if(this.player.y > 160){
            this.player.y = -63;
            this.position[1]++;
        }
        else if(this.player.y < -64){
            this.player.y = 159;
            this.position[1]--;
        }
        if(this.position[0] > 2){
            this.position[0] = 0;
        }
        else if(this.position[0] < 0){
            this.position[0] = 2;
        }
        if(this.position[1] > 2){
            this.position[1] = 0;
        }
        else if(this.position[1] < 0){
            this.position[1] = 2;
        }
    }

    draw(ctx){
        this.animations[this.position[0]][this.position[1]].drawFrame(gameEngine.clockTick, ctx, 0,0)
    }
}