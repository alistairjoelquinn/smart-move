import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getSquares, squareSelected, wordsUpdate } from './actions'
import { numbers } from './numberArray'

export default function Gameboard() {
    const dispatch = useDispatch();
    const squares = useSelector(state =>
        state.squares && state.squares
    );
    const words = useSelector(state => 
        state.words && state.words
    );
    
   
    const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
    let recognition = new SpeechRecognition();

    useEffect(() => {
        (async () => {
            await dispatch(
                getSquares()
            );
            recognition.interimResults = false;
            recognition.addEventListener("result", e => {
                let p = document.createElement('p');
                const transcript = Array.from(e.results)
                    .map(results => results[0])
                    .map(result => result.transcript)
                    .join('');
                p.textContent = transcript;
                if(e.results[0].isFinal) {
                    
                    dispatch(wordsUpdate(p.innerText));
                    
                    // console.log("if statement opened");
                    // console.log(transcript);
                    // numbers.map((number, index) => {
                    //     if(transcript.includes(`square ${number}` || 
                    //                             `square ${index + 1}` || 
                    //                             `Square ${number}` || 
                    //                             `Square ${index + 1}` || 
                    //                             `sq${number}` || 
                    //                             `sq${index + 1}` || 
                    //                             `Sq${number}` || 
                    //                             `Sq${index + 1}` ||
                    //                             `SQ${number}` || 
                    //                             `SQ${index + 1}`)) {
                    //         console.log(number);
                    //         console.log(index + 1);
                    //         dispatch(squareSelected(index));
                    //     }
                    // })
                }
            });
            recognition.addEventListener('end', recognition.start);
            recognition.start();
        })();
    }, []);

    useEffect(() => {
        if(words) {
            console.log(words);
            if(words.includes('Square', 0)) {
                console.log("words anf things");
                console.log(words[words.length - 1]);
            }
        }

    }, [words]);

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
