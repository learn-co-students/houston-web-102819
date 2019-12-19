# JavaScript: Object Orientation

### Learning Goals

- Implement a class with the `class` and `constructor` keywords, and instantiate it with the  `new` keyword
- Explain when and why to use class methods
- Implement a class which inherits from another using the `extends` keyword 


### Activation

##### We want multiple characters on screen



### Learning Goal 1: Implement a class with the `class` and `constructor` keywords, and instantiate it with the  `new` keyword

#### Demonstrate:

* Classes are similar to the syntax we saw in ruby
* Basic refactor of our character logic into a class
* Using `new` to instantiate mutliple characters 
* Passing arguments with `new` to the constructor to change the position

#### Reinforce:

* Driver / Navigator: Add an option for image

#### Check for Understanding: 

* Kahoot



### Learning Goal 2: Explain when and why to use class methods

#### Demonstrate:

* We can use `static` (class) methods for a variable to track **all** characters

#### Check for Understanding: 

* *Think-Pair-Share*
  * *Think:* Classify the following methods below as instance method or as a class method. Then replace the arrow in the leftmost column with either a "." for class methods or a "#" for instance methods.
  * *Pair:* With one partner
  * *Share:* Your answers to the questions, and discuss any differences of opinion

| Name                  | Desc.                                                  |
| --------------------- | ------------------------------------------------------ |
| `Square -> area`      | Returns the area of a square                           |
| `Square -> overlap `  | Returns the area of the overlap of two or more squares |
| `Square -> width`     | Returns the width of a square                          |
| `Square -> totalArea` | Returns the total area of all squares                  |
| `Square -> largest`   | Returns the largest instance of a square               |
| `Square -> height`    | Returns the height of a square                         |







```

let character;
Character.all = []

class Character {


    constructor(playerData, color){
        this.direction = null
        this.color = color
        this.element = document.createElement('img')
        this.element.style.width = '75px'
        this.element.style.position = 'absolute'
        this.element.src = `${ASSET_ROOT}/${color}-character/static.gif`
        this.element.style.left = `${playerData.x}px`
        this.element.style.bottom = `${playerData.y}px`
        if(Character.all == undefined) Character.all = []
        Character.all.push(this)
        this.element.addEventListener('click', () => {
            this.element.remove()
        })

        document.body.append(this.element)

        setInterval( () => {
            const left = parseInt(this.element.style.left)
            const bottom = parseInt(this.element.style.bottom)
        
            if(this.direction == 'right'){
                this.element.style.left = `${left+speed}px`
            }
        
            if(this.direction == 'left'){
                this.element.style.left = `${left-speed}px`
            }
        
            if(this.direction == 'up'){
                this.element.style.bottom = `${bottom+speed}px`
            }
        
            if(this.direction == 'down'){
                this.element.style.bottom = `${bottom-speed}px`
            }
        
        }, 20)
    }

    static closest(){
        // this === Character
        let closestCharacter = this.all[0]
        this.all.forEach(function(character){
            let closestY = parseInt(closestCharacter.element.style.bottom)
            let characterY = parseInt(character.element.style.bottom)
            if(characterY < closestY){
                closestCharacter = character
            }
        })
        return closestCharacter
    }

    walkRight(){
        this.element.src = `${ASSET_ROOT}/${this.color}-character/walkright.gif`
        this.direction = 'right'
    }
    
    walkLeft(){
        this.element.src = `${ASSET_ROOT}/${this.color}-character/walkleft.gif`
        this.direction = 'left'
    }
    
    walkUp(){
        this.element.src = `${ASSET_ROOT}/${this.color}-character/walkup.gif`
        this.direction = 'up'
    }
    
    walkDown(){
        this.element.src = `${ASSET_ROOT}/${this.color}-character/walkdown.gif`
        this.direction = 'down'
    }
    
    stop(){
        this.element.src = `${ASSET_ROOT}/${this.color}-character/static.gif`
        this.direction = null
    }

}


```

