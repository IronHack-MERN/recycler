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
        this.sprite = new Image();
    }

    _drawPlayer(ctx) {
        // ctx.fillStyle = this.color;
        // ctx.fillRect(this.position.x, this.position.y, this.width, this.heigth);

        // dibujo el sprite
        this.sprite.src = 'img/dora-sprite-2.png';
        ctx.drawImage(this.sprite, 0, 105, 80, 100, this.position.x, this.position.y, 100, 100);
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
        console.log('entro en stop');
        if (this.intervalId) {
            clearInterval(this.intervalId);
            this.intervalId = undefined;
        }
    }

}