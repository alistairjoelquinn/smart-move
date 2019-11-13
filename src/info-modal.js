import React from 'react'

export default function Modal({ currentSquare }) {
    return (
        <div>
            <div className="info-modal">
                <h1>{currentSquare.name}</h1>
                <div id="modal-images">
                    <img id="modal1" src={currentSquare.modal1} /><img id="modal2" src={currentSquare.modal2} />
                </div>
                <audio src={currentSquare.audio} autoPlay="true"></audio>
            </div>
            <div className="white-out"></div>
        </div>
    )
}
