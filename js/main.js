let game;
let container = undefined;

function start() {
    const canvas = document.getElementById('canvas');
    const ctx = canvas.getContext('2d');
    container = document.querySelector("#container");
    const btnStart = document.querySelector("#btnStart");

    game = new Game({
        ctx: ctx,
        canvas: canvas
    });

    container.setAttribute("id", "clearLanding");
    game._start();

    //callback function
    game.gameOver = stop;

    btnStart.setAttribute("id", "btnStop");
    btnStart.addEventListener('click', stop);
}

function stop() {
    location.reload(true);
}


