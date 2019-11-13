import React from "react";
import Gameboard from './game-board'
import { createStore, applyMiddleware } from 'redux'
import reduxPromise from 'redux-promise'
import reducer from './reducer'
import { Provider } from 'react-redux'
import { composeWithDevTools } from 'redux-devtools-extension'

const store = createStore(reducer, composeWithDevTools(applyMiddleware(reduxPromise)));

export default function App() {
    return (
        <div>
            <Provider store={store}>
                <div className="main-layout">
                    <div className="main-logo">
                        <p id="smart-move">smart move</p>
                        <p id="can-you">Can you find a path from a to b?</p>
                    </div>
                    <div className="sidebar-left">a</div>
                    <Gameboard />
                    <div className="sidebar-right">b</div>
                </div>
            </Provider>
        </div>
    )
}
