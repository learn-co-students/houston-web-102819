const secondCharacter = createCharacter(0, 0)

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
    .then(function (character) {
        createPlayableCharacter(character)
    })


const createPlayableCharacter = function (character) {
    const link = createCharacter(character.x, character.y)
    character.items.forEach(function(item){
        let itemImage = document.createElement('img')
        itemImage.src = item.image_url
        document.body.append(itemImage)
    })
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