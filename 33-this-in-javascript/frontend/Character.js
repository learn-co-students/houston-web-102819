const ASSET_ROOT = './assets/green-character'


class Character {

    static all = []

    static destroyAll() {
        Character.all.forEach(function (character) {
            character.destroy()
        })
    }

    destroy() {
        this.image.remove()
        Character.all = Character.all.filter(character => character != this)
    }

    constructor(x, y) {
        this.image = document.createElement('img')
        document.body.append(this.image)
        this.image.style.width = '75px'
        this.image.style.position = 'absolute'
        this.image.style.left = `${x}px`
        this.image.style.bottom = `${y}px`
        this.image.src = `${ASSET_ROOT}/static.gif`

        this.direction = null;

        this.left = parseInt(x);
        this.bottom = parseInt(y);
        this.speed = 0.5;
    
        setInterval( () => this.move(), 60 / 1000)

        Character.all.push(this)
    }


    move() {
        if (this.direction == 'right') {
            this.left = this.left + this.speed;
            this.image.style.left = `${this.left}px`
        }
        if (this.direction == 'left') {
            this.left = this.left - this.speed;
            this.image.style.left = `${this.left}px`
        }
        if (this.direction == 'up') {
            this.bottom = this.bottom + this.speed;
            this.image.style.bottom = `${this.bottom}px`
        }
        if (this.direction == 'down') {
            this.bottom = this.bottom - this.speed;
            this.image.style.bottom = `${this.bottom}px`
        }
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