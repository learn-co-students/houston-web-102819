# Intro to Redux

## Resources
* https://github.com/Joshua-Miles/intro-to-redux-lecture-excersises
> Please clone, install, and start this repo immediately

## Learning Goals
- Explain the two problems Redux attempts to solve
- Create store to better manage state
- Avoid relentlessly passing props by connecting a component to the store


## Vocabulary
* state
    * Any data you want to change
* Redux
    * Solves
        * Where we put our state
        * Make state change predictable
* store
    * Protector of the state
* reducer
    * A function which takes in state and an action and returns a new state
* action
* Provider
    * A component which wraps `<App/>` and provides the store to our other components
* connect
    * a function which will accept a function and an object, and will  return a function
    * The function it returns is going to accept a component as an argument and return a "connected" component
* mapDispatchToProps
    * An object of functions which return actions
* mapStateToProps
    * A function which accepts state as an argument and returns the props for a component 


## Two Problems
- Needlessly Passing Props makes Refactoring a Pain
- If state can change anywhere, it becomes difficult to predict what's in state

![]()



## Self Assessments

## Assessment 1 
Create a reducer which responds to the event 'INCREMENT_COUNTER' by incremeting the counter property in state
Use createStore to create a store.
Use store.dispatch to dispatch the INCREMENT_COUNTER action
Install Redux Devtools: https://github.com/zalmoxisus/redux-devtools-extension
Open Redux Devtools and use it to visualize the change in state