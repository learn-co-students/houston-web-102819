# Asynchronous React

### Resources

* <http://formative.education/projects/41/edit>

### Learning Goals
- Recognize common React Lifecycle methods and when they will be invoked
- Use `componentDidMount` to run make a fetch after the first render
- Use fetch to save data back to the server after an event

### Activation 
* When we are working with classes or objects, a term that's going to come up every once in awhile is this idea of "Lifecycle Methods".
* A lifecycle method is a function on an object that gets called automatically
* What lifecycle methods have we already worked with?
    * constructor
    * render
* Today we're going do look at a new lifecycle method in React that's instrumental in getting information from a server


### Learning Goal 1: Recognize common React Lifecycle methods and when they will be invoked

##### Demonstrate
* Write a componentDidMount method
* Put console.log's inside it, inside of render, and inside of the constructor to see the order of events.
* Emphasize that componentDidMount only runs once.


##### Questions

##### Check for Understanding
* _Identifying Lifecycle Methods_
* _componentDidMount and setState_

##### Cue

* Now we can set state in a parent component using a callback, our next goal is to change state inside of our two arrays



### Learning Goal 2: Use `componentDidMount` to run make a fetch after the first render

##### Demonstrate
* Right now, we can move dragons from home, to war, and back again
* But when I refresh the page, they all reset
* We need to fetch data from the server
* Where should we do it?
    * If someone says componentDidMount, ask why? Encourage them to suggest other places
    * Make this an active discussion
    * They will _probably_ go for the render method.
        * Demonstrate how this would create an infinite number of fetch requests using the network tab
    * If someone suggests the constructor, show how that actually will probably work okay
        * This is generally frowned upon, because in very large apps the fetch might come back *before* the first render of our application, and then calling setState would throw an error
* To make sure that the fetch runs **once**, and that the page renders **first**, componentDidMount is the best tool for fetch
* Use fetch to put data from the json server in state
    * We're not changing the page directly
    * We're changing state, and the page is *re*-rendered automatically

##### Questions

##### Check for Understanding
* _componentDidMount and fetch_
* _componentDidMount and fetch II_
* _Writing componentDidMount_


### Learning Goal 3: Use fetch to save data back to the server after an event

##### Demonstrate
* Simple fetch request inside of your function which toggles whether or not the dragon is at war.
* Have them talk you through the fetch request. No real need to for CFU's or an indepth conversation here.

##### Questions


### Conclusion 
* Now we've seen all of the basic tools React provides, tomorrow we'll zoom out and see how we can use these tools to build a full React Application.