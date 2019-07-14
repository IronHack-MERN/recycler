class Game {
    constructor(options) {
        this.ctx = options.ctx;
        this.canvas = options.canvas;
        this.player = new Player();
        this.gameOver = undefined;
        this.residue = new Residue();
    }

    _assignControlsToKeys() {
        document.onkeydown = e => {
            switch (e.keyCode) {
                case 38: // arrow up
                    this.player.goUp();
                    break;
                case 40: // arrow down
                    this.player.goDown();
                    break;
                case 37: // arrow left
                    this.player.goLeft();
                    break;
                case 39: // arrow right
                    this.player.goRight();
                    break;
                case 80: // p pause
                    console.log('pause activated', this.player.position.x);
                    this.player.intervalId ? this.player.stop() : this.player.move();
                    break;
            }
        };
    }

    pause() {
        if (this.intervalGame) {
            window.cancelAnimationFrame(this.intervalGame);
            this.intervalGame = undefined;
        }
    }

    _update() {
        this.clearCanvas();
        this.player._drawPlayer(this.ctx);
        this.residue._drawResidue(this.ctx);
        this.residue.moveResidue(3);
        this.collisionDetection();

        if (this.intervalGame !== undefined) {
            window.requestAnimationFrame(this._update.bind(this));
        }
    }

    _start() {
        this.player._drawPlayer(this.ctx);
        this._assignControlsToKeys();
        this.intervalGame = window.requestAnimationFrame(this._update.bind(this));

        this.residue._generateRandomPosition();
        this.residue._drawResidue(this.ctx);
        this.residue.moveResidue(8);
        this.collisionDetection();
    }

    _quit(){
        location.reload(true);
    }

    clearCanvas() {
        this.canvas.width = 1000;
        this.canvas.heigth = 500;
    }

    /**
     * return true  if detects collision
     */
    collisionDetection() {
        let p = {
            x1: this.player.position.x,
            x2: this.player.position.x + this.player.width,
            y1: this.player.position.y,
            y2: this.player.position.y + this.player.heigth
        }

        let r = {
            x1: this.residue.x,
            x2: this.residue.x + this.residue.width,
            y1: this.residue.y,
            y2: this.residue.y + this.residue.heigth
        }

        if (
            (p.y1 >= r.y1 || p.y2 >= r.y1) &&
            (p.y1 <= r.y2 || p.y2 <= r.y2) &&
            (p.x1 >= r.x1 || p.x2 >= r.x1) &&
            (p.x1 <= r.x2 || p.x2 <= r.x2)
        ) {
            return true;
        }
    }
}