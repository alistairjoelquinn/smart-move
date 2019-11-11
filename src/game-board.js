import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { getSquares } from './actions';

export default function Gameboard() {
    const dispatch = useDispatch();
    const squares = useSelector(state =>
        state.squares && state.squares
    );
    console.log(squares);
    let numbers = [{1: 'one'}]
   
    

    const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
    let recognition = new SpeechRecognition();
    recognition.interimResults = false;
    recognition.addEventListener("result", e => {
        const transcript = Array.from(e.results)
            .map(results => results[0])
            .map(result => result.transcript)
            .join('');

        if(e.results[0].isFinal) {
            console.log("if statement opened");
            console.log(numbers[square.id]);
           if(transcript.includes(`square ${square.id}` || `square ${numbers[square.id]}`)) {
               document.querySelector('#square-1').classList.add('selected');
           }
        }
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
            {squares.map((square, index) => 
                <div className={square.selected ? "box selected" : "box"} key={square.id} id={`square-${square.id}`}>
                    <span className="yellow">{index + 1}</span>
                    <span className="red">
                        <img src={square.url} />
                    </span>
                </div>
            )}
        </div>
    )
}
