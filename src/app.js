import React from 'react'
import { HashRouter, Route } from 'react-router-dom';
import TeacherArea from './teacher-area'
import GameApp from './game-app'

export default function App() {
    return (
        <React.Fragment>
            <HashRouter>
                <Route exact path="/" component={TeacherArea} />
                <Route exact path="/game-app" component={GameApp} />
            </HashRouter>
       </React.Fragment>
    )
}
