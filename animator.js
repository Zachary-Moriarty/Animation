class animator{
    constructor(spriteSheet, xStart, yStart, width, height, FrameCount, frameDuration, scale) {
        Object.assign(this, {spriteSheet, xStart, yStart, width, height, FrameCount, frameDuration, scale});
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
            this.width * this.scale, this.height * this.scale);
    }

    currentFrame() {
        return Math.floor(this.elapsedTime / this.frameDuration)
    }

    isDone(){
        return (this.elapseTime >= this.totalTime)
    }
}
