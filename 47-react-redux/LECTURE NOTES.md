# Intro to Redux



### Resources

* Kahoot Quiz: https://create.kahoot.it/share/intro-to-redux/e475ec51-31bf-4bf7-9b9d-e5a2b88f3008

* Lecture Exercises: <https://github.com/Joshua-Miles/intro-to-redux-lecture-excersises>



### Learning Goals

* Explain the two problems Redux attempts to solve
* Create store to better manage state
* Avoid relentlessly passing props by connecting a component to the store



### Activation (5 min)

* Introduction to hogs vs dragons
* What if a hog defected?
* As our applications grow in complexity the flow of data can become **unmanageable** 
* Redux helps us by solving two problems related to dataflow



### Learning Goal 1: Explain the two problems Redux attempts to solve (5 mark)

##### Demonstrate (20 min)

* The problem of passing props needlessly

  * Needlessly Passing Props makes Refactoring a Pain
  * https://res.cloudinary.com/jmiles/image/upload/v1557408386/lecture-assets/master/appendix/redux/without-redux.png
  * https://res.cloudinary.com/jmiles/image/upload/v1557408386/lecture-assets/master/appendix/redux/redux.png

* The problem of predicting state

  * If state can change anywhere, it becomes difficult to predict what's in state
  * State change exercise attempt 1

  * https://res.cloudinary.com/jmiles/image/upload/v1557408386/lecture-assets/master/appendix/redux/reducer.png
  * State change exercise attempt 2

* Putting it all together

  * https://res.cloudinary.com/jmiles/image/upload/v1557408386/lecture-assets/master/appendix/redux/data-flow.png

##### Vocabulary

- state
  - The variable data of our app
- Redux
  - A library to help us manage state

##### Questions 

##### Check for Understanding

* Kahoot [1-3] .(5 min)

##### Cue

* Now we understand the two problems redux is trying to solve for us, let's see how it can solve the latter by creating a store


### Learning Goal 2: Create store to better manage state (30 mark)

##### Demonstrate (10 min)

* Creating a store in index.js using createStore

  * Using an initial state with a prop for each animal:

    ```
    {
        cherub: 5,
        rainbowDash: 5,
        galaxyNote: 5,
        toothless: 5,
        smaug: 5,
        bozar: 5,
    }
    ```

  * Using a reducer which responds to 'HIT_GALAXY_NOTE' and 'HEAL_GALAXY_NOTE'

* Dispatching actions

##### Vocabulary

- store
  - Protector of the state
- reducer
  - A function which takes in state and an action and returns a new state
- action
  - A plain JavaScript object which represents a users interaction with our app

##### Questions

##### Check for Understanding

* Lecture Exercise 1 [20 min]

##### Cue



> Break (60 mark) (10 min)



### Learning Goal 3: Avoid relentlessly passing props by connecting a component to the store (70 mark)

##### Demonstrate (20 min)

* THREE MONTHS AGO...
* ... In Fox
* ... (if that matters)
* The Woes of React
* That Provider is a component
* Wrapping App in Provider and giving it the store
* The purpose of connect is to connect a component to the store
* That connect is a function which will accept a function and an object, and will  return a function
* The function it returns is going to accept a component as an argument and return a "connected" component
* Connecting GalaxyNote to the store
  - with `connectStateToProps`
  - with `connectDispatchToProps`

##### Vocabulary

* Provider
  * A component which wraps `<App/>` and provides the store to our other components

* connect
  * a function which will accept a function and an object, and will  return a function
  * The function it returns is going to accept a component as an argument and return a "connected" component
* mapDispatchToProps
  * An object of functions which return actions
* mapStateToProps
  * A function which accepts state as an argument and returns the props for a component 

##### Questions 

##### Check for Understanding

- Kahoot [4-6] .(5 min)

* Lecture Exercise 2 (20 min)

##### Cue



### Conclusion (120ish mark)

* https://res.cloudinary.com/jmiles/image/upload/v1557408386/lecture-assets/master/appendix/redux/Learning_Curve.png