import React from 'react'
import { useSelector } from 'react-redux'

export default function Modal() {
    const currentSquare = useSelector(state => 
        state.currentSquare && state.currentSquare
    );

    console.log("modal log: ", currentSquare);
    
    return (
        <div>
            <div className="info-modal">
                <h1>{currentSquare.name}</h1>
                <div id="modal-images">
                    <img id="modal1" src={currentSquare.modal1} /><img id="modal2" src={currentSquare.modal2} />
                </div>
                <audio src={currentSquare.audio} controls></audio>
            </div>
            <div className="white-out"></div>
        </div>
    )
}
