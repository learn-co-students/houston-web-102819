const secondCharacter = createCharacter('0px', '0px')

function wait(time) {
    return new Promise(function (resolve) {
        setTimeout(resolve, time)
    })
}
let secondCharacterTrack = async function () {
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


fetch('http://localhost:3000/characterData')
    .then(function (response) {
        return response.json()
    })
    .then(function (result) {
        createPlayableCharacter(result)
    })


const createPlayableCharacter = function (result) {
    const link = createCharacter(result.x, result.y)
    document.addEventListener('keyup', function (e) {
        link.stop()
        fetch('http://localhost:3000/characterData', {
            method: 'POST',
            body: JSON.stringify({
                x: parseInt(link.image.style.left),
                y: parseInt(link.image.style.bottom)
            }),
            headers: {
                'Content-Type': 'application/json'
            }
        })
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
}


const form = document.querySelector('.settings-form')
form.addEventListener('submit', function (e) {
    e.preventDefault()
    const input = document.querySelector('.speed-input')
    speed = parseInt(input.value) // <-- User Input
})