const wait = time =>  new Promise(resolve => setTimeout(resolve, time))

class Enemy extends Character {

    constructor(x, y){
        super('./assets/red-character', x, y)
        this.name = name
        this.image.style.zIndex = -1
        this.type = 'enemy'
        this.wander()
    }

    async wander(){
        let directions = [ 'left', 'right', 'up', 'down' ]
        // Get a random direction from the array
        let direction = directions[Math.floor(Math.random()*directions.length)]

        if(direction === 'left') this.walkLeft()
        if(direction === 'right') this.walkRight()
        if(direction === 'up') this.walkUp()
        if(direction === 'down') this.walkDown()

        await wait(1000)
        this.wander()
    }


}

const enemyPositions = [
    { x: 500, y: 500 },
    { x: 300, y: 300 },
    { x: 600, y: 100 },
]