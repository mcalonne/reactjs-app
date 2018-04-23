import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux';

import App from './components/App';

const articlesReducer = (state = [], action) => {
    console.log('Reducer | state: ', state);
    switch(action.type){
        case 'ADD_ARTICLE' : {
            console.log('Reducer | ADD_ARTICLE | Payload: ', action.payload)
            action.payload.id = Date.now();
            var newState = [...state, action.payload];
            return newState;
        }
        case 'REMOVE_ARTICLE' : {
            console.log('Reducer | REMOVE_ARTICLE | Payload: ', action.payload);
            return state.filter((article) => article.id !== action.payload);
        }
        default:
            return state;
    }
};

const articlesStore = createStore(combineReducers({articles: articlesReducer}), 
                                    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

ReactDOM.render(<Provider store={articlesStore}><App /></Provider>, document.getElementById('root'));