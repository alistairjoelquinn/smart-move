import React from 'react'
import { Link } from 'react-router-dom'
import Uploader from './uploader-modal'

export default function TeacherArea() {
    return (
        <React.Fragment>
            <Link id="game-link" to="/game-app">🏁</Link>
            <a id="logout-button" href="/logout">Log out</a>
            <div className="main-logo-welcome">
                <p id="smart-move">smart move</p>
                <p>Welcome to the teacher area!</p>
            </div>
        </React.Fragment>
    )
}
