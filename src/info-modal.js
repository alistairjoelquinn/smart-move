import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import DrawBox from './draw-box'
import { closeModal } from './actions'

export default function Modal() {
    const dispatch = useDispatch();
    const currentSquare = useSelector(state => 
        state.currentSquare && state.currentSquare
    );
    const audio_intro = new Audio('https://smartmovetuition.s3.amazonaws.com/audio/bridge.aac');
    const audio_1 = new Audio(currentSquare.audio1);
    const audio_bridge = new Audio('https://smartmovetuition.s3.amazonaws.com/audio/intro.aac');
    const audio_2 = new Audio(currentSquare.audio2);

    useEffect(() => {
        audio_intro.play();
        setTimeout(() => audio_1.play(), 3000);
        setTimeout(() => audio_bridge.play(), 4000);
        setTimeout(() => audio_2.play(), 6000);
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
