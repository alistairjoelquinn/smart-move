import React from 'react'
import { HashRouter, Route } from 'react-router-dom';
import TeacherArea from './teacher-area'
import GameApp from './game-app'

export default function App() {
    return (
        <React.Fragment>
            <HashRouter>
                <Route exact path="/" component={GameApp} />
                <Route exact path="/teacher-area" component={TeacherArea} />
            </HashRouter>
       </React.Fragment>
    )
}
