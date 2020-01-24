# Intro to Redux

### Resources

- Lecture Exercises: <https://github.com/Joshua-Miles/intro-to-redux-lecture-excersises>



### Learning Goals

- Explain the two problems Redux attempts to solve
    - Needlessly passing props
    - Difficulty predicting state
- Create a store to manage your app's state
- Change state by `dispatch`ing  `actions` to your store
- Explain why we **must** declaratively update state


### Pain Points In React
* Passing down props
* Passing up props (inverse dataflow)
* So many states
    * Losing track of what goes where
    * Multiple sources of truth
* Deciding where to put state


### Vocabulary



### Assessments


#### Think Pair Share

1. First Attempt

   - Agree on 1 person to be the "first" of your group

   - The "first" person should take a white board and write a number on the front of it. 
   - **Later**, each person in the group will add and subtract **anything** to that number. 
   - Before passing the white board, the "first" person should guess what the number on the front will be after passing it around the group. Write that number on the back. **No one else in the group should know what this guess is!**
   - Pass the white board around the group, with each person adding and subtracting to the number on the front of the board
   - Compare the result with the guess the "first" group member made

2. Second Attempt

   - Agree on 1 person to be the "first" of your group

   - The "first" person should should take a white board and write a number on the front of it. 
   - The "first" person should also write a number in the corner of the board
   - This time, we will add a **new rule**. Each member of the group **must** add **the number in the corner** to the number on the front of the board.
   - Before passing the white board, the "first" person should guess what the number on the front will be after passing it around the group. Write that number on the back.
   - Pass the white board around the group, with each person adding the number in the corner to the number on the front of the board
   - Compare the result with the guess the "first" group member made

3. Retrospective 

   - What does the number on the front of the whiteboard represent?
   - What do you think the "new rule" represents?



#### Writing Assessment 1

- Open `parts-1-and-2`
- run `npm start`
- Open `index.html`
- Create a reducer
  - a simple function which accepts a `state` and an `action`
  - and returns `state`
- Use `createStore` to create a store with the reducer, and the initial state
- Install Redux Devtools: https://github.com/zalmoxisus/redux-devtools-extension
  - In your browser, **and**
  - Where you create the store
- Open Redux Devtools and use it to see your app's state



#### Writing Assessment 2

- In `parts-1-and-2`...
- Add a case to your reducer which responds to the event 'INCREMENT_COUNTER' by incremeting the `counter` property in state
- Use store.dispatch to dispatch the INCREMENT_COUNTER action
- Use Redux Devtools to see the action and the change in state