# Redux Applications

### Resources

* https://create.kahoot.it/share/redux-applications/37500996-22a5-4016-8ae5-815345fbf440



### Learning Goals

* Integrate Redux with React Router using an external history object

* Use thunk to send fetch requests from within action creators

* Use pure functions to distribute the responsibility of reducers


### Activation

* Let's look at some common gotchas of writing react-redux applications



### Learning Goal 1: Integrate Redux with React Router using an external history object

##### Demonstrate

##### Questions

##### Guide 

##### Check for Understanding

- *Kahoot Quiz*

##### Cue



```
import createBrowserHistory from 'history/createBrowserHistory'

const history = createBrowserHistory()

export default history;
```



### Learning Goal 2: Use thunk to send fetch requests from within action creators

##### Demonstrate

* `compose`
* `applyMiddleware`

##### Questions

##### Guide 

##### Check for Understanding

- *Kahoot Quiz* 

##### Cue

```
const middleware = compose(
    applyMiddleware(ReduxThunk),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)
```





### Learning Goal 3: Use pure functions to distribute the responsibility of reducers

##### Demonstrate

##### Questions

##### Guide 

##### Check for Understanding

* *Kahoot Quiz*

##### Cue



### Conclusion 









```
switch(action.type){
        case 'RECEIVED_RESPONSES':
            return { 
                ...currentState, 
                responses: action.payload
            }
        break;
        case 'CHANGED_NEW_RESPONSE_FORM_VALUES':
            return { 
                ...currentState, 
                newResponseFormValues: {
                    ...currentState.newResponseFormValues,
                    ...action.payload
                }
            }
        break;
        case 'SAVE_NEW_RESPONSE':
        break;
    }
```

