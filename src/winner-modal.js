import React from 'react'

export default function WinnerModal() {
    const reload = () => {
        location.replace('/');
    }

    return (
        <div>
            <div className="winner-modal">
                <p id="play-again">You made it!</p>
                <p id="play-again2">Smart move!</p>
                <button onClick={reload} id="play-again-button">Play Again?</button>
            </div>
            <div className="white-out"></div>
        </div>
    )
}
