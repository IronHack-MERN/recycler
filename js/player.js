class Player {
    constructor() {
        this.position = {
            x: 0,
            y: 0
        }
        this.width = 25;
        this.heigth = 25;
        this.color = "red";
        this.speed = 20;
        this.intervalId = undefined;
    }

    _drawPlayer(ctx) {
        ctx.fillStyle = this.color;
        ctx.fillRect(this.position.x, this.position.y, this.width, this.heigth);
    }

    goUp() {
        this.position.y -= this.speed;
    }

    goDown() {
        this.position.y += this.speed;
    }

    goLeft() {
        this.position.x -= this.speed;
    }

    goRight() {
        this.position.x += this.speed;
    }

    move() {
        this.intervalId = setInterval(this._assignControlsToKeys.bind(this), 100);
    }

    stop() {
        if (this.intervalId) {
            clearInterval(this.intervalId);
            this.intervalId = undefined;
        }
    }

}