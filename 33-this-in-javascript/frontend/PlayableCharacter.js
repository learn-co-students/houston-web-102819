// Hello, who is *this*?


class PlayableCharacter extends Character {

    constructor(x, y){
        super(x, y)
        document.addEventListener('keydown',  (e) => {
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
    
    
        document.addEventListener('keyup', (e) => {
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