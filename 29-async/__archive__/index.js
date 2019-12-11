function createCharacter(color){

    const ASSET_ROOT = `./assets/${color}-character`

    const character = document.createElement('img')
    character.style.width = '75px'
    character.style.position = 'absolute'
    character.style.left = '0px'
    character.style.top = '100px'
    character.src = `${ASSET_ROOT}/static.gif`
    document.body.append(character)

    let direction = null
    let speed = 0.5

    setInterval(function(){
        const left = parseFloat(character.style.left)
        const top = parseFloat(character.style.top)

        if(direction == 'right'){
            character.style.left = `${left+speed}px`
        }

        if(direction == 'left'){
            character.style.left = `${left-speed}px`
        }

        if(direction == 'up'){
            character.style.top = `${top-speed}px`
        }

        if(direction == 'down'){
            character.style.top = `${top+speed}px`
        }

    }, 60 / 1000)

    return {
        stop: function(){
            character.src = `${ASSET_ROOT}/static.gif`
            direction = null
        },

        walkDown: function(duration){
            character.src = `${ASSET_ROOT}/walkdown.gif`
            direction = 'down'
            return new Promise(function(resolve){
                setTimeout(resolve, duration)
            })
        },

        walkUp: function(duration){
            character.src = `${ASSET_ROOT}/walkup.gif`
            direction = 'up'
            return new Promise(function(resolve){
                setTimeout(resolve, duration)
            })
        },

        walkLeft: function(duration){
            character.src = `${ASSET_ROOT}/walkleft.gif`
            direction = 'left'
            return new Promise(function(resolve){
                setTimeout(resolve, duration)
            })
        },

        walkRight: function(duration){
            character.src = `${ASSET_ROOT}/walkright.gif`
            direction = 'right'
            return new Promise(function(resolve){
                setTimeout(resolve, duration)
            })
        }
    }

}


let playableCharacter = createCharacter('green')

let redCharacter = createCharacter('red')

document.addEventListener('keydown', function(e){
    if(e.repeat == false){
        if(e.key == "ArrowLeft"){
            playableCharacter.walkLeft()
        }
        if(e.key == "ArrowRight"){
            playableCharacter.walkRight()
        }
        if(e.key == "ArrowUp"){
            playableCharacter.walkUp()
        }
        if(e.key == "ArrowDown"){
            playableCharacter.walkDown()
        }
    }
})

document.addEventListener('keyup', function(){
    playableCharacter.stop()
})

let form = document.querySelector('.settings-form')
form.addEventListener('submit', function(e){
    e.preventDefault()
    let speedInput = document.querySelector('.speed-input')
    speed = parseFloat(speedInput.value)
})