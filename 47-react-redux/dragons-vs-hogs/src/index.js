import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { createStore } from 'redux'
import { Provider } from 'react-redux'

const initialState = {
    cherub: 5,
    rainbowDash: 5,
    galaxyNote: 5,
    toothless: 5,
    smaug: 5,
    bozar: 5,
}

const reducer = (currentState, action) => {
    switch(action.type){
        case 'ATTACK_GALAXY_NOTE':
            return { 
                ...currentState, 
                galaxyNote: currentState.galaxyNote - action.damage 
            }
        break;
        case 'HEAL_GALAXY_NOTE':
            return { 
                ...currentState, 
                galaxyNote: currentState.galaxyNote + 1 
            }
        break;
    }
    return currentState
}

const store = createStore(
    reducer, 
    initialState, 
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));