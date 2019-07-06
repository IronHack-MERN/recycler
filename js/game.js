class Game {
    constructor(options) {
        this.ctx = options.ctx;
        this.canvas = options.canvas;
        this.player = new Player();
        this.gameOver = undefined;
    }

    _assignControlsToKeys() {
        document.onkeydown = e => {
            switch (e.keyCode) {
                case 38: // arrow up
                    console.log('moviendo arriba', this.player.position.y);
                    this.player.goUp();
                    break;
                case 40: // arrow down
                    console.log('moviendo abajo', this.player.position.y);
                    this.player.goDown();
                    break;
                case 37: // arrow left
                    console.log('moviendo izquierda', this.player.position.x);
                    this.player.goLeft();
                    break;
                case 39: // arrow right
                    console.log('moviendo derecha', this.player.position.x);
                    this.player.goRight();
                    break;
                // case 80: // p pause
                //     this.intervalId ? this.player.stop() : this.player.move();
                //     break;
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

        if (this.intervalGame !== undefined) {
            window.requestAnimationFrame(this._update.bind(this));
        }
    }

    _start() {
        this.player._drawPlayer(this.ctx);
        this._assignControlsToKeys();
        this.intervalGame = window.requestAnimationFrame(this._update.bind(this));
    }

    clearCanvas() {
        this.canvas.width = 1000;
        this.canvas.heigth = 500;
    }
}