# JavaScript Tooling
### 

## Learning Goals
- Define NPM, Babel, and JSX as tools for developing with JavaScript
- Use WebPack's Import Syntax to distribute code in multiple files
- Use public class fields to define instance properties without a constructor
- Use `create-react-app` to setup Babel, WebPack, and JSX for you


#### Pain Points in JavaScript
- **Line after line of appending**
- **Imperitive rendering is dumb (would rather be declarative)**
- Curly braces
- **Errors in JavaScript aren't super helpful**
- **Compile time error checking (makes it hard to test)**
- We miss byebug
- **Keeping track of scope on our own is difficult**
- **Splitting code into multiple files or (modules)**  
#### Think Pair Share:
```
class Owl {

	constructor(){
     	    this.flys = true
            this.activeAtNight = true
            this.hunts = [
                'insects', 'small mammals', 'other birds'
            ]
            Owl.all.push(this)
	}

}

Owl.numberOfSpecies = 200
Owl.all = []
```

**Refactored:**
```
class Owl {

	static all = []
	static numberOfSpecies = 200
	
	flys = true
        activeAtNight = true
        hunts = [
            'insects', 'small mammals', 'other birds'
        ]

	constructor(){
     	    Owl.all.push(this)
	}

}
```

#### Self Assessment: Create React App
* Run `npx create-react-app <app name>` in your terminal
* Open the resulting project folder
* Run `npm start` in your terminal
* Change one thing in `App.js`
* Mark your name off in the lecture notes when you see your change reflected on the screen