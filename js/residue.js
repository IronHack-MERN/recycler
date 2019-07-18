class Residue {
    constructor() {
        this.x = 0;
        this.y = 0;
        this.width = 50;
        this.heigth = 50;
        this.right = true;
        this.src = 'img/res_apple.png';
        this.img = new Image();
    }

    _getRandom(min, max) {
        return Math.floor(Math.random() * (max - min)) + min;
    }

    _generateRandomPosition() {
        this.x = this._getRandom(0, 1000);
        this.y = this._getRandom(0, 500);
    }

    _drawResidue(ctx) {
        this.img.src = this.src;
        ctx.drawImage(this.img, this.x, this.y, this.width, this.heigth);

    }

    moveResidue(speed) {
        if (this.right === true) {
            if (this.x < 1000-this.width) {
                this.x += speed;
            }
            else {
                this.right = false;
            }
        }
        else {
            if (this.x > 0) {
                this.x -= speed;
            }
            else {
                this.right = true;
            }
        }
    }
    
}