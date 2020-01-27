import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { createStore } from 'redux'
import { Provider } from 'react-redux'

const initialState  = {
    userName: ''
}

const reducer = (state, action) => {
    switch(action.type){
        case 'LOGIN_USER': 
            return { 
                ...state,
                userName: action.name 
            }
        break;
        default:
            return state
        break; 
    }
}

const store = createStore(reducer, initialState, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())

ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));
