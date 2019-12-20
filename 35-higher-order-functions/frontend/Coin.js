class Coin extends GameObject {

    constructor(x, y){
        super('./assets/coin', x, y, 25)
        this.image.style.zIndex = -1
        this.type = 'coin'
    }

}

const coinPositions = [
    { x: 300, y: 300 },
    { x: 300, y: 400 },
    { x: 600, y: 300 },
    { x: 200, y: 500 },
    { x: 500, y: 50 },
    { x: 400, y: 500 }
]