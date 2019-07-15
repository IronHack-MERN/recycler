// document.onload = (function() {
//     const canvas = document.getElementById('canvas');
//     const ctx = canvas.getContext('2d');
    
//     let game = new Game({
//         ctx: ctx,
//         canvas: canvas
//     });

//     game._start();

// })();
let game;

function start(){
    const canvas = document.getElementById('canvas');
    const ctx = canvas.getContext('2d');
    const container = document.querySelector("#container");
    const btnStart = document.querySelector("#btnStart");

    game = new Game({
        ctx: ctx,
        canvas: canvas
    });

    container.setAttribute("id","clearLanding")
    game._start();

    btnStart.setAttribute("id", "btnStop");
    btnStart.setAttribute("onClick", "stop()");
}

function stop(){
    console.log("volvemos al stop");
    game._quit();
    btnStop.setAttribute("id", "btnStart");
    btnStart.setAttribute("onClick", "start()");

}


