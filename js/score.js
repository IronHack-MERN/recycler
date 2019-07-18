class Score {
    constructor() {
        this.coins = 0;
        this.points = 0;
        this.src = 'img/score.png';
        this.img = new Image();
        this.scrShowScore = 'img/showscore.png';
        this.imgShowScore = new Image();
        this.x = 700;
        this.y = 15;
        this.width = 86;
        this.heigth = 30;
    }

    addPoint() {
        this.points += 15;
        this.coins++;
    }

    drawScore(ctx) {
        this.img.src = this.src;
        ctx.drawImage(this.img, this.x, this.y, this.width, this.heigth);
        ctx.font = '25px Wendy One';
        ctx.fillStyle = '#FFFFFF';
        ctx.fillText(`Coins -> ${this.coins}`, this.x, 65);
        ctx.fillText(`Points -> ${this.points}`, this.x, 90);
    }

    showScore(ctx) {
        this.imgShowScore.src = this.scrShowScore;
        ctx.drawImage(this.imgShowScore, 380, 200, 220, 220);
        ctx.font = '35px Wendy One';
        ctx.fillStyle = '#FFFFFF';
        ctx.fillText(`${this.coins}`, 470, 355);
        ctx.fillText(`Pts -> ${this.points}`, 415, 300);
    }
}
