import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { getSquares } from './actions';

export default function Gameboard() {
    const dispatch = useDispatch();
    const squares = useSelector(state =>
        state.squares && state.squares
    );
    console.log(squares);
    

    const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
    let recognition = new SpeechRecognition();
    recognition.interimResults = false;
    recognition.addEventListener("result", e => {
        const transcript = Array.from(e.results)
            .map(results => results[0])
            .map(result => result.transcript)
            .join('');
        // if(e.results[0].isFinal) {
           
        // }
    });
    recognition.addEventListener('end', recognition.start);
    recognition.start();

    useEffect(() => {
        dispatch(
            getSquares()
        );

    }, []);

    if(!squares){
        return null;
    }

    return (
        <div id="game-grid">
            {squares.map((square, idx) => 
                <div className="box selected" key={square.id}>
                    <div className="yellow">{idx + 1}</div>
                    <div className="red">
                        <img src={square.url} />
                    </div>
                </div>
            )}
        </div>
    )
}
