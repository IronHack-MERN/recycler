// document.onload = (function() {
//     const canvas = document.getElementById('canvas');
//     const ctx = canvas.getContext('2d');
    
//     let game = new Game({
//         ctx: ctx,
//         canvas: canvas
//     });

//     game._start();

// })();

function start(){

    const canvas = document.getElementById('canvas');
    const ctx = canvas.getContext('2d');

    const container = document.querySelector("#container");
    const btnStart = document.querySelector("#btnStart");

    let game = new Game({
        ctx: ctx,
        canvas: canvas
    });

    game._start();


    console.log("empezando");
}



