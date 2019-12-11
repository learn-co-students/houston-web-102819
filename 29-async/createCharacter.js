const ASSET_ROOT = './assets/green-character'

function createCharacter() {
    const characterImage = document.createElement('img')
    document.body.append(characterImage)
    characterImage.style.width = '75px'
    characterImage.style.position = 'absolute'
    characterImage.style.left = '0px'
    characterImage.style.bottom = '0px'
    characterImage.src = `${ASSET_ROOT}/static.gif`

    let direction = null;
    let left = 0;
    let bottom = 0;
    let speed = 0.5;

    const move = function () {
        if (direction == 'right') {
            left = left + speed;
            characterImage.style.left = `${left}px`
        }
        if (direction == 'left') {
            left = left - speed;
            characterImage.style.left = `${left}px`
        }
        if (direction == 'up') {
            bottom = bottom + speed;
            characterImage.style.bottom = `${bottom}px`
        }
        if (direction == 'down') {
            bottom = bottom - speed;
            characterImage.style.bottom = `${bottom}px`
        }
    }

    setInterval(move, 60 / 1000)
    
    const character = {
        image: characterImage,
        walkRight: function () {
            characterImage.src = `${ASSET_ROOT}/walkright.gif`
            direction = 'right'
        },

        walkLeft: function () {
            characterImage.src = `${ASSET_ROOT}/walkleft.gif`
            direction = 'left'
        },

        walkUp: function () {
            characterImage.src = `${ASSET_ROOT}/walkup.gif`
            direction = 'up'
        },

        walkDown: function () {
            characterImage.src = `${ASSET_ROOT}/walkdown.gif`
            direction = 'down'
        },

        stop: function () {
            characterImage.src = `${ASSET_ROOT}/static.gif`
            direction = null
        }
    }

    return character
}
