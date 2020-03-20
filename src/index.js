import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {createStore} from 'redux';
import allReducers from './reducers';
import {Provider} from 'react-redux';

const store = createStore(allReducers);


ReactDOM.render(
<Provider store={store}>
    <App />    
</Provider>
, document.getElementById('root'));

/* 
import {createStore} from 'redux';

//ACTIONS
const increment = ()=> ({type : "INCREMENT"});
const decrement = ()=> ({type : "DECREMENT"});

//REDUCERS
const counter = (state = 0, action) => {
    switch (action.type) {
        case 'INCREMENT':
            return state + 1;
        case 'DECREMENT':
            return state - 1;
        
    }
};
//STORE
let store = createStore(counter);

//display
store.subscribe(()=> console.log(store.getState()));

//DISPATCH
store.dispatch(increment()); //usando um exemplo de view --- store.dispatch({type : 'INCREMENT'})
*/