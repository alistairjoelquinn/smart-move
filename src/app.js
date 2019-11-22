import React from 'react'
import { BrowserRouter, Route, Link } from 'react-router-dom';
import TeacherArea from './teacher-area'
import GameApp from './game-app'
import MathsApp from './maths-app'

export default function App() {
    return (
        <React.Fragment>
            <BrowserRouter>
                <div className="top-banner">
                    <Link id="teacher-link" to="/teacher-area">📝</Link> 
                    <Link id="game-link" to="/game">🏁</Link> 
                    <Link id="maths-link" to="/maths">🔢</Link> 
                </div>
                <Route exact path="/teacher-area" component={TeacherArea} />
                <Route exact path="/game" component={GameApp} />
                <Route exact path="/maths" component={MathsApp} />
            </BrowserRouter>
       </React.Fragment>
    )
}
