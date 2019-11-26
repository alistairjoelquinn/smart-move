import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import DrawBox from './draw-box'
import { closeModal } from './actions'

export default function Modal() {
    const dispatch = useDispatch();
    const currentSquare = useSelector(state => 
        state.currentSquare && state.currentSquare
    );
    const audio = new Audio(currentSquare.audio);

    useEffect(() => {
        audio.play();
    }, []);

    const closeBox = () => {
        dispatch(closeModal());
    };
    
    return (
        <div>
            <div className="info-modal">
                <h1>{currentSquare.name}</h1>
                <div id="modal-images">
                    <img id="modal1" src={currentSquare.modal1} /><img id="modal2" src={currentSquare.modal2} />
                </div>
                <h1>Try it yourself in the box below..</h1>
                <DrawBox />
                <div id="done-container">
                    <div id="done" onClick={closeBox}>Done!</div>
                </div>
            </div>
            <div className="white-out"></div>
        </div>
    )
}
