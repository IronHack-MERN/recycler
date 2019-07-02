document.onload = (function() {
    // for control the Canvas
    const canvas = document.getElementById('canvas');
    const ctx = canvas.getContext('2d');
    
    let game = new Game({
        ctx: ctx,
    });

    game._start();

})();
