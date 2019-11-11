import React, { Component } from "react";
import Gameboard from './game-board'
import { createStore, applyMiddleware } from 'redux'
import PropTypes from "prop-types";
import SpeechRecognition from "react-speech-recognition";
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
                    <p className="main-logo">smart move</p>
                    <div className="sidebar-left"></div>
                    <Gameboard />
                    <div className="sidebar-right"></div>
                </div>
            </Provider>
        </div>
    )
}
