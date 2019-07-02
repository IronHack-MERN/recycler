class Game{
    constructor(options){
        this.ctx = options.ctx;
        this.player = new Player();
    }

    _start(){
        alert("Start game ...");
        this.player._drawPlayer(this.ctx);
    }
}