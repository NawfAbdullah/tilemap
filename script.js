const GAME_WIDTH = 160;
const GAME_HEIGHT = 160;
const GAME_TILE = 32;
const ROWS = GAME_HEIGHT/GAME_TILE
const COLUMNS = GAME_WIDTH/GAME_TILE

const LEVEL1 = [
    9,9,9,9,9,
    1,2,2,2,3,
    7,7,18,7,8,
    7,7,7,7,8,
    11,12,12,12,13,
]

function getTile(map,col,row) {
    return map[row*COLUMNS+col]
}

window.addEventListener('load',function() {
    const canvas = document.getElementById('canvas1')
    const ctx = canvas.getContext('2d');
    canvas.width = GAME_WIDTH;
    canvas.height = GAME_HEIGHT;
    ctx.imageSmoothingEnabled = false;
    const TILE_IMAGE = document.getElementById('titlemap');
    const IMAGE_TILE = 32;

    let debug = false;
    function drawLevel() {
        for (let row = 0; row < ROWS; row++) {
            for (let column = 0; column < COLUMNS; column++) {
                const tile = getTile(LEVEL1,column,row)
                ctx.drawImage(
                    TILE_IMAGE,
                    ((tile-1) * IMAGE_TILE) % TILE_IMAGE.width,
                    Math.floor((tile-1)/COLUMNS) * IMAGE_TILE,
                    IMAGE_TILE,
                    IMAGE_TILE,
                    column*GAME_TILE,
                    row*GAME_TILE,
                    GAME_TILE,
                    GAME_TILE
                );
                if(debug){
                    ctx.strokeRect(
                        column*GAME_TILE,
                        row*GAME_TILE,
                        GAME_TILE,
                        GAME_TILE
                    )
                }
                
    
            }
        }
    }
    drawLevel();
    const debugBtn = document.getElementById('debugbutton')
    debugBtn.addEventListener('click',function () {
        debug=!debug
        drawLevel();
    })
})