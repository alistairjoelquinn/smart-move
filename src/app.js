import React from "react";
import Gameboard from './game-board'

export default function App() {
    return (
        <div>
            <div className="main-layout">
                <div className="main-logo">
                    <p id="smart-move">smart move</p>
                    <p id="can-you">Can you find a path from a to b?</p>
                </div>
                <div className="sidebar-left">a</div>
                <Gameboard />
                <div className="sidebar-right">b</div>
            </div>
        </div>
    )
}
