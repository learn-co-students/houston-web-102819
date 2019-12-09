const ASSET_ROOT = './assets/green-character'

const character = document.createElement('img')
document.body.append(character)

character.src = `${ASSET_ROOT}/static.gif`
character.style.position = 'absolute'
character.style.left = '100px'
character.style.bottom = '100px'
character.style.width = '100px'

let left = 0;
let bottom = 0;
let direction = null;
const walkRight = function(){
    direction = 'right'
    character.src = `${ASSET_ROOT}/walkright.gif`
}
const walkLeft = function(){
    direction = 'left'
    character.src = `${ASSET_ROOT}/walkleft.gif`
}
const walkUp = function(){
    direction = 'up'
    character.src = `${ASSET_ROOT}/walkup.gif`
}
const walkDown = function(){
    direction = 'down'
    character.src = `${ASSET_ROOT}/walkdown.gif`
}

const stop = function(){
    direction = null
    character.src = `${ASSET_ROOT}/static.gif`
}

const move = function(){
    if(direction == 'right'){
        left = left + 1;
        character.style.left = `${left}px`
    }
    if(direction == 'left'){
        left = left - 1;
        character.style.left = `${left}px`
    }
    if(direction == 'up'){
        bottom = bottom + 1;
        character.style.bottom = `${bottom}px`
    }
    if(direction == 'down'){
        bottom = bottom - 1;
        character.style.bottom = `${bottom}px`
    }
}

setInterval(move, 60/1000)