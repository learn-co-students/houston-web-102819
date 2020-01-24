const { createStore } = Redux;

const reducer = (currentState, action) => {
    switch(action.type){
        case 'ADD_FAVORITE_NUMBER':
            // Doesn't tell the computer what changed in state:
            // currentState.favoriteNumbers.push(action.number)
            // return currentState
            return { 
                ...currentState,
                favoriteNumbers: [ 
                    ...currentState.favoriteNumbers,
                    action.number 
                ]
            } 
        break
        case 'REMOVE_FAVORITE_NUMBER':
            return { 
                favoriteNumbers: [] 
            } 
        break
    }
    return currentState
}

const initialState = {
    favoriteNumbers: [],
    leastFavoriteNumbers: []
}

const store = createStore(
    reducer, 
    initialState,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

store.dispatch({ type: 'ADD_FAVORITE_NUMBER', number: 13 })
