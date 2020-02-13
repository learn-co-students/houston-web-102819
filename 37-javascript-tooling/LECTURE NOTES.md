# JavaScript Tooling

##### Time Estimate: 1:30 + Recommended 10 minute break



## Learning Goals

- Define NPM, Babel, and JSX as tools for developing with JavaScript
- Use WebPack's Import Syntax to distribute code in multiple files
- Use public class fields to define instance properties without a constructor
- Use `create-react-app` to setup Babel, WebPack, and JSX for you



## Resources

- [Sample Video](<[Link to video](https://youtu.be/EiYPbYvsiT4)>)
- [Kahoot Quiz](https://create.kahoot.it/share/intro-to-rails-api/8af1070f-eb2d-481d-b30d-a862207f74f9)



### Activation

##### What sucks about JavaScript?

- File splitting (dependancy management)
- Imperitive syntax 
  - `document.createElement`
  - `constructor` fields

Common thread: **Lack of structure**



### Learning Goal 1: Define NPM, Babel, and JSX as tools for developing with JavaScript

#### Time Estimate: 20 min

#### Demonstrate:

- How NPM is used to manage project dependancies 
  - Installing from the terminal
  - Package.json
  - leftPad Anecdote
- How Babel is used to add cool new features to JavaScript
  - Babel REPL
- How JSX can be used to write HTML like syntax within our JavaScript
  - Babel REPL 
  - Exceptions to HTML syntax

#### Questions

#### Check for Understanding: 

- *Kahoot Quiz:* [1-3]



### Learning Goal 2: Use ES6 Import Syntax to distribute code in multiple files

#### Time Estimate: 20 min

#### Demonstrate:

- That WebPack can be used to manage our dependancies for us
- Named exports / imports
- Default exports / imports

#### Questions

#### Check for Understanding: 

- *Kahoot Quiz*: [4-6]



> Recommended Break



### Learning Goal 3: Use public class fields to define instance properties without a constructor

#### Time Estimate: 25 min

#### Demonstrate:

- Creating a property with a constructor 
- Creating a property without a constructor
- Static properties
- How we will still need to use a constructor when we want to accept arguments during instantiation

#### Questions

#### Check for Understanding: 

**Think-Pair-Share**: 

* *Think:* refactor a simple class using class fields:

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

Owl.all = []
Owl.numberOfSpecies = 200
```

* *Pair:* with one partner
* *Share:* your code, make note of any differences, and discuss the pros and cons of both approaches



### Learning Goal 4: Use `create-react-app` to setup Babel, WebPack, and JSX for you

#### Time Estimate: 15 min

#### Demonstrate:

- Using `npx create-react-app` 
- The resulting file **structure**

#### Questions

#### Check for Understanding: 

- *Self Assessment*: *
  - Use `create-react-app` to initialize a react application
  - Add your name in the content of the App.js file

\* [An aside on Self Assessments](./student-facing-notes)



## Recommended Prework

> None



## Recommended Postwork

> Under Mod 4:

- Create React App
- JSX
- Node Package Manager
- Node Package Manager Lab
- Babel and React
- Webpack and React
- React Modular Code