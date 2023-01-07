class animator{
    constructor(spriteSheet, xStart, yStart, width, height, FrameCount, frameDuration) {
        Object.assign(this, {spriteSheet, xStart, yStart, width, height, FrameCount, frameDuration});
        this.elapsedTime = 0;
        this.totalTime = FrameCount * frameDuration;
    }

    drawFrame(tick, ctx, x, y) {
        this.elapsedTime += tick;
        if(this.elapsedTime > this.totalTime) this.elapsedTime -= this.totalTime;
        
        const frame = this.currentFrame();

        ctx.drawImage(this.spriteSheet, 
            this.xStart + this.width * frame, this.yStart ,
            this.width, this.height,
            x, y,
            this.width*2, this.height*2);
    }

    currentFrame() {
        return Math.floor(this.elapsedTime / this.frameDuration)
    }

    isDone(){
        return (this.elapseTime >= this.totalTime)
    }
}