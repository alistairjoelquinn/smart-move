import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import DrawBox from './draw-box'

export default function Modal() {
    const currentSquare = useSelector(state => 
        state.currentSquare && state.currentSquare
    );
    const audio = new Audio(currentSquare.audio);

    useEffect(() => {
        audio.play();
    }, []);
    
    return (
        <div>
            <div className="info-modal">
                <h1>{currentSquare.name}</h1>
                <div id="modal-images">
                    <img id="modal1" src={currentSquare.modal1} /><img id="modal2" src={currentSquare.modal2} />
                </div>
                <DrawBox />
            </div>
            <div className="white-out"></div>
        </div>
    )
}
