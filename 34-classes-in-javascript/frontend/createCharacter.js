const ASSET_ROOT = './assets/green-character'


class Character {

    static all = []

    static destroyAll(){
        Character.all.forEach(function(character){
            character.destroy()
        })
    }

    destroy(){
        this.image.remove()
        Character.all = Character.all.filter( character => character  != this)
    }

    constructor(x, y){
        this.image = document.createElement('img')
        document.body.append(this.image)
        this.image.style.width = '75px'
        this.image.style.position = 'absolute'
        this.image.style.left = `${x}px`
        this.image.style.bottom = `${y}px`
        this.image.src = `${ASSET_ROOT}/static.gif`
    
        this.direction = null;

        Character.all.push(this)
    }


    walkRight() {
        this.image.src = `${ASSET_ROOT}/walkright.gif`
        this.direction = 'right'
    }

    walkLeft() {
        this.image.src = `${ASSET_ROOT}/walkleft.gif`
        this.direction = 'left'
    }

    walkUp() {
        this.image.src = `${ASSET_ROOT}/walkup.gif`
        this.direction = 'up'
    }

    walkDown() {
        this.image.src = `${ASSET_ROOT}/walkdown.gif`
        this.direction = 'down'
    }

    stop() {
        this.image.src = `${ASSET_ROOT}/static.gif`
        this.direction = null
    }

}



class PlayableCharacter extends Character {

    constructor(x, y){
        super(x, y)
        console.log('outside the event listener', this)
        document.addEventListener('keydown', function (e) {
            console.log('Inside the event listener', this)
            if (e.key == "ArrowRight" && e.repeat == false) {
                this.walkRight()
            }
            if (e.key == "ArrowUp" && e.repeat == false) {
                this.walkUp()
            }
            if (e.key == "ArrowDown" && e.repeat == false) {
                this.walkDown()
            }
            if (e.key == "ArrowLeft" && e.repeat == false) {
                this.walkLeft()
            }
        })
    
    
        document.addEventListener('keyup', function (e) {
            this.stop()
            fetch('http://localhost:3000/characterData', {
                method: 'POST',
                body: JSON.stringify({
                    x: parseInt(this.image.style.left),
                    y: parseInt(this.image.style.bottom)
                }),
                headers: {
                    'Content-Type': 'application/json'
                }
            })
        })
    }

}