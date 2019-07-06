document.onload = (function() {
    const canvas = document.getElementById('canvas');
    const ctx = canvas.getContext('2d');
    
    let game = new Game({
        ctx: ctx,
        canvas: canvas
    });

    game._start();

})();
