class Character extends GameObject{

    constructor(assetRoot, x, y) {
        super(assetRoot, x, y)
    
        this.direction = null;

        this.left = parseInt(x);
        this.bottom = parseInt(y);
        this.speed = 0.5;
    
        setInterval( () => this.move(), 60 / 1000)
    }


    move() {
        if (this.direction == 'right') {
            this.left = this.left + this.speed;
            if(this.left < window.innerWidth) this.image.style.left = `${this.left}px`
            else this.left = window.innerWidth
        }
        if (this.direction == 'left') {
            this.left = this.left - this.speed;
            if(this.left > 0) this.image.style.left = `${this.left}px`
            else this.left = 0
        }
        if (this.direction == 'up') {
            this.bottom = this.bottom + this.speed;
            if(this.bottom < window.innerHeight) this.image.style.bottom = `${this.bottom}px`
            else this.bottom = window.innerHeight
        }
        if (this.direction == 'down') {
            this.bottom = this.bottom - this.speed;
            if(this.bottom > 0) this.image.style.bottom = `${this.bottom}px`
            else this.bottom = 0
        }
    }


    walkRight() {
        this.image.src = `${this.assetRoot}/walkright.gif`
        this.direction = 'right'
    }

    walkLeft() {
        this.image.src = `${this.assetRoot}/walkleft.gif`
        this.direction = 'left'
    }

    walkUp() {
        this.image.src = `${this.assetRoot}/walkup.gif`
        this.direction = 'up'
    }

    walkDown() {
        this.image.src = `${this.assetRoot}/walkdown.gif`
        this.direction = 'down'
    }

    stop() {
        this.image.src = `${this.assetRoot}/static.gif`
        this.direction = null
    }

}