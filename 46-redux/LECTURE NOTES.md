# Intro to Redux



### Resources

* Kahoot Quiz: https://create.kahoot.it/share/intro-to-redux/e475ec51-31bf-4bf7-9b9d-e5a2b88f3008

* Lecture Exercises: <https://github.com/Joshua-Miles/intro-to-redux-lecture-excersises>



### Learning Goals

* Explain the two problems Redux attempts to solve

* Create a store to manage your app's state

* Change state by `dispatch`ing  `actions` to your store

* Explain why we **must** declaratively update state



### Activation [5]

* What were some pain points in React?
* As our applications grow in complexity the flow of data can become **unmanageable** 
* Redux helps us by solving two problems related to dataflow



### Learning Goal 1: Explain the two problems Redux attempts to solve [25]

##### Demonstrate 

* The problem of passing props needlessly
  * Needlessly Passing Props makes Refactoring a Pain
  * https://res.cloudinary.com/jmiles/image/upload/v1557408386/lecture-assets/master/appendix/redux/without-redux.png
  * https://res.cloudinary.com/jmiles/image/upload/v1557408386/lecture-assets/master/appendix/redux/redux.png
* The problem of predicting state

  * If state can change anywhere, it becomes difficult to predict what's in state
  * State change exercise attempt 1

  * https://res.cloudinary.com/jmiles/image/upload/v1557408386/lecture-assets/master/appendix/redux/reducer.png
  * State change exercise attempt 2


##### Vocabulary

- state
  - The variable data of our app
- Redux
  - A library to help us manage state 

##### Check for Understanding

* Kahoot [1-3] 
* Think Pair Share



### Learning Goal 2: Create a store to manage your app's state [30]

##### Demonstrate 

* Creating a store in index.js using createStore
* The reducer
* Looking at it with dev tools
* Looking at it with `getState`

##### Vocabulary

- store
  - Protector of the state
- `createStore`
  - a function which creates a store
- reducer
  - A function which takes in state and an action and returns a new state

##### Check for Understanding

* Kahoot [4-7]
* Lecture Exercise 1



### Learning Goal 3: Change state by `dispatch`ing  `actions` to your store 

##### Demonstrate

* dispatching actions to change the store
* store changing from redux devtools

##### Vocabulary

* action
  - A plain JavaScript object which represents a users interaction with our app

##### Check for Understanding

- Kahoot [8-10]
- Lecture Exercise 2



### Learning Goal 4: Explain why we **must** declaratively update state

##### Demonstrate

- subscribing to the store

- shallow state diff check

  ```javascript
  let lastState;
  store.subscribe( () => {
      let state = store.getState()
      if(state !== lastState){
          lastState = state
          console.log('New State: ', state)
      }
  })
  ```

   

##### Check for Understanding

- Think Pair Share
  - 



### Conclusion