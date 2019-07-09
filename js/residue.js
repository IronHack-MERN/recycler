class Residue {
    constructor() {
        this.x = 0;
        this.y = 0;
        this.width = 5;
        this.heigth = 5;
        this.right = true;
        this.src = 'img/manzana_mordida.png';
        this.img = new Image();
    }

    _getRandom(min,max){
        return Math.floor(Math.random() * (max-min)) + min;
    }
    
    _generateRandomPosition(){
        this.x = this._getRandom(0,1000);
        this.y = this._getRandom(0,500);
    }

    _drawResidue(ctx) {
        
        this.img.src = this.src;
        ctx.drawImage(this.img, this.x, this.y);
        
    }

    moveResidue(speed) {
        if (this.right === true) {
            console.log('if del move')
            if (this.x < 1000) {
                console.log(`Estoy en el if if this.x es: ${this.x} and speed es: ${speed}`);
                this.x += speed;
                console.log(`ahora this.x vale ${this.x}`);
            }
            else {
                console.log(`this.x es: ${this.x}`);
                this.right = false;
            }
        }
        else {
            console.log('else del move')
            if (this.x > 50) {
                this.x -= speed;
            }
            else {
                this.right = true;
            }

        }
    }



    
}