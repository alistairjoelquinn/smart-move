import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import DrawBox from './draw-box'
import { closeModal, drawingComplete, drawingReset } from './actions'

export default function Modal() {
    const dispatch = useDispatch();
    const currentSquare = useSelector(state => 
        state.currentSquare && state.currentSquare
    );
    const drawingDone = useSelector(state => 
        state.drawingComplete && state.drawingComplete
    );
    const audio_correct = new Audio('https://smartmovetuition.s3.amazonaws.com/audio/correct.aac');
    const audio_intro = new Audio('https://smartmovetuition.s3.amazonaws.com/audio/bridge.aac');
    const audio_1 = new Audio(currentSquare.audio1);
    const audio_bridge = new Audio('https://smartmovetuition.s3.amazonaws.com/audio/intro.aac');
    const audio_2 = new Audio(currentSquare.audio2);

    useEffect(() => {
        audio_correct.play();
        setTimeout(() => audio_intro.play(), 2000);
        setTimeout(() => audio_1.play(), 5500);
        setTimeout(() => audio_bridge.play(), 6500);
        setTimeout(() => audio_2.play(), 8500);
    }, []);

    const drawn = () => {
        dispatch(drawingComplete());
        setTimeout(() => audio_1.play(), 500);
        setTimeout(() => audio_2.play(), 2500);
    };
    
    const closeBox = () => {
        dispatch(closeModal());
        dispatch(drawingReset());
    };
    
    return (
        <div>
            <div className="info-modal">
                {drawingDone ? 
                    <div id="modal-part-2">
                        <div id="modal-images">
                            <img id="modal1" src={currentSquare.modal1} /><img id="modal2" src={currentSquare.modal2} />
                        </div>
                        <div id="done-container">
                            <div id="next" onClick={closeBox}>Next up...</div>
                        </div>
                    </div>
                :
                    <div>
                        <h1>Try it yourself in the box below..</h1>
                        <DrawBox />
                        <div id="done-container">
                            <div id="done" onClick={drawn}>Done!</div>
                        </div>
                    </div>
                }
            </div>
            <div className="white-out"></div>
        </div>
    )
}
