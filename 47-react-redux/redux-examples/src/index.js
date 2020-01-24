import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { Provider } from 'react-redux'
import { createStore } from 'redux'

const reducer = (currentState, action) => {

    switch(action.type){
        case 'INCREASE_COUNT':
            return {
                ...currentState,
                count: currentState.count + 1
            }
        break;
        case 'ADD_FAVORITE_NUMBER':
            return { 
                ...currentState,
                favoriteNumbers: [ 
                    ...currentState.favoriteNumbers,
                    action.number 
                ]
            } 
        break
    }

    return currentState
}

const initialState = {
    count: 0,
    favoriteNumbers: []
}

const store = createStore(
    reducer,
    initialState,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

window.store = store

ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));

