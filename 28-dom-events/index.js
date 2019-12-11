const ASSET_ROOT = './assets/green-character'

function createCharacter() {
    const character = document.createElement('img')
    document.body.append(character)
    character.style.width = '75px'
    character.style.position = 'absolute'
    character.style.left = '0px'
    character.style.bottom = '0px'
    character.src = `${ASSET_ROOT}/static.gif`

    let direction = null;
    let left = 0;
    let bottom = 0;
    let speed = 0.5;

    function walkRight() {
        character.src = `${ASSET_ROOT}/walkright.gif`
        direction = 'right'
    }

    function walkLeft() {
        character.src = `${ASSET_ROOT}/walkleft.gif`
        direction = 'left'
    }

    function walkUp() {
        character.src = `${ASSET_ROOT}/walkup.gif`
        direction = 'up'
    }

    function walkDown() {
        character.src = `${ASSET_ROOT}/walkdown.gif`
        direction = 'down'
    }

    function stop() {
        character.src = `${ASSET_ROOT}/static.gif`
        direction = null
    }

    document.addEventListener('keyup', function (e) {
        stop()
    })

    document.addEventListener('keydown', function (e) {
        if (e.key == "ArrowRight" && e.repeat == false) {
            walkRight()
        }
        if (e.key == "ArrowUp" && e.repeat == false) {
            walkUp()
        }
        if (e.key == "ArrowDown" && e.repeat == false) {
            walkDown()
        }
        if (e.key == "ArrowLeft" && e.repeat == false) {
            walkLeft()
        }
    })


    const move = function () {
        if (direction == 'right') {
            left = left + speed;
            character.style.left = `${left}px`
        }
        if (direction == 'left') {
            left = left - speed;
            character.style.left = `${left}px`
        }
        if (direction == 'up') {
            bottom = bottom + speed;
            character.style.bottom = `${bottom}px`
        }
        if (direction == 'down') {
            bottom = bottom - speed;
            character.style.bottom = `${bottom}px`
        }
    }

    setInterval(move, 60 / 1000)
    const form = document.querySelector('.settings-form')
    form.addEventListener('submit', function (e) {
        e.preventDefault()
        const input = document.querySelector('.speed-input')
        speed = parseInt(input.value) // <-- User Input
    })
}
