class Player{
    constructor(){
        this.position = {
            x: 0,
            y: 0
        }
        this.width = 25;
        this.heigth = 25;
        this.color = "red"
    }

    _drawPlayer(ctx){
        ctx.fillStyle = this.color;
        ctx.fillRect(this.position.x, this.position.y, this.width, this.heigth);
    }

}