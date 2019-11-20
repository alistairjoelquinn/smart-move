import React from 'react'
import ReactDOM from 'react-dom'
import Welcome from './welcome';
import App from './app'
import { createStore, applyMiddleware } from 'redux'
import reduxPromise from 'redux-promise'
import reducer from './reducer'
import { Provider } from 'react-redux'
import { composeWithDevTools } from 'redux-devtools-extension'

const store = createStore(reducer, composeWithDevTools(applyMiddleware(reduxPromise)));

let elem;
const userIsLoggedIn = (
    location.pathname != "/welcome"
);

if (!userIsLoggedIn) {
    elem = <Welcome />;
} else {
    elem = (
        <Provider store={store}>
            <App />
        </Provider>
    );
}

ReactDOM.render(
    elem, 
    document.querySelector('main')
);