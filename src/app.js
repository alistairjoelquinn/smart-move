import React from 'react'
import { BrowserRouter, Route } from 'react-router-dom';
import GameApp from './game-app'
import TeacherArea from './teacher-area'

export default function App() {
    return (
        <React.Fragment>
            <BrowserRouter>
                <div>
                    <Route exact path="/teacher-area" component={TeacherArea} />
                    <Route exact path="/game" component={GameApp} />
                </div>
            </BrowserRouter>
       </React.Fragment>
    )
}
