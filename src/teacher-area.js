import React from 'react'
import { Link } from 'react-router-dom'

export default function TeacherArea() {
    return (
        <React.Fragment>
            <Link id="game-link" to="/">🏁</Link> 
            <div className="main-logo-welcome">
                <p id="smart-move">smart move</p>
                <p>Welcome to the teacher area!</p>
            </div>
        </React.Fragment>
    )
}
