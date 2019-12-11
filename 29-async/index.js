const link = createCharacter()

const secondCharacter = createCharacter()


setTimeout(function () {
    secondCharacter.walkUp()
    setTimeout(function () {
        secondCharacter.walkRight()
        setTimeout(function () {
            secondCharacter.walkDown()
        }, 1000)
    }, 1000)
}, 1000)

function wait(time){
    return new Promise( function(resolve){
        setTimeout(resolve, time)
    })
}
console.log('Before the async function call')
let secondCharacterTrack = async function(){
    secondCharacter.walkUp()
    await wait(1000)
    secondCharacter.walkRight()
    await wait(1000)
    secondCharacter.walkDown()
    await wait(1000)
    secondCharacter.walkLeft()
    await wait(1000)
    secondCharacterTrack()
}

secondCharacterTrack()
console.log('After async function call')


document.addEventListener('keyup', function (e) {
    link.stop()
})

document.addEventListener('keydown', function (e) {
    if (e.key == "ArrowRight" && e.repeat == false) {
        link.walkRight()
    }
    if (e.key == "ArrowUp" && e.repeat == false) {
        link.walkUp()
    }
    if (e.key == "ArrowDown" && e.repeat == false) {
        link.walkDown()
    }
    if (e.key == "ArrowLeft" && e.repeat == false) {
        link.walkLeft()
    }
})


const form = document.querySelector('.settings-form')
form.addEventListener('submit', function (e) {
    e.preventDefault()
    const input = document.querySelector('.speed-input')
    speed = parseInt(input.value) // <-- User Input
})