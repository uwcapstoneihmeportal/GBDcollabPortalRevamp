import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.css';
import './styles/index.css';

import App from './App';
import * as serviceWorker from './serviceWorker';

import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import thunkMiddleware from 'redux-thunk'
import rootReducer from './reducers'

let createStoreWithMiddleware = applyMiddleware(thunkMiddleware)(createStore)
const store = createStoreWithMiddleware(rootReducer)

ReactDOM.render(
<Provider store={store} >
    <App />
</Provider>,
document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
