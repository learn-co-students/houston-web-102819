// Functional Programming Languages
//  - JavaScript

// Object Oriented Programming Languages
//  - Ruby

let coinCounter = document.querySelector('.coin-counter')
let link = new PlayableCharacter(100, 100)


let coins = coinPositions.map((position) => new Coin(position.x, position.y))
let enemies = enemyPositions.map((position) => new Enemy(position.x, position.y))


setInterval(function () {
    coins
        .filter(isOverlapping(link))
        .forEach( (coin) => {
            coinCounter.innerText++
            coin.destroy()
        })

    enemies
        .filter(isOverlapping(link))
        .forEach( enemy => {
            link.destroy()
            alert('You lose. Next time, be more careful...')
        }) 
        
    enemies
        .forEach( enemy => {
            coins
                .filter(isOverlapping(enemy))
                .forEach( coin => coin.destroy() )

        })

}, 60 / 1000)


let isOverlapping = function (object1) { // enemy
    return function(object2){ // <-- Takes in a second arg here
        return (object1.leftSide() < object2.rightSide() &&
        object1.rightSide() > object2.leftSide() &&
        object1.topSide() < object2.bottomSide() &&
        object1.bottomSide() > object2.topSide())
    }
}








// enemyPositions.forEach(function(position){
//     new Enemy(position.name, position.x, position.y)
// })
