import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getSquares, wordsUpdate, squareSelected } from './actions'
import { valid } from './valid'

export default function Gameboard() {
    const dispatch = useDispatch();
    const squares = useSelector(state =>
        state.squares && state.squares
    );
    const words = useSelector(state => 
        state.words && state.words
    );
    
   
    const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
    const SpeechGrammarList = SpeechGrammarList || webkitSpeechGrammarList
    let recognition = new SpeechRecognition();
    let speechRecognitionList = new SpeechGrammarList();
    const numbers = [ 'one' , 'two' , 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 
    'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen', 'twenty', 
    'twenty one', 'twenty two', 'twenty three', 'twenty four', 'twenty five', 'twenty six', 'twenty seven', 
    'twenty eight', 'twenty nine', 'thirty'];
    const grammar = '#JSGF V1.0; grammar numbers; public <number> = ' + numbers.join(' | ') + ' ;'
    speechRecognitionList.addFromString(grammar, 5);

    useEffect(() => {
        (async () => {
            await dispatch(
                getSquares()
            );
            recognition.interimResults = false;
            recognition.grammars = speechRecognitionList;
            recognition.addEventListener("result", e => {
                const transcript = Array.from(e.results)
                    .map(results => results[0])
                    .map(result => result.transcript)
                    .join('');
                if(e.results[0].isFinal) {
                    console.log(transcript);
                    dispatch(wordsUpdate(transcript));
                }
            });
            recognition.addEventListener('end', recognition.start);
            recognition.start();
        })();
    }, []);

    useEffect(() => {
        if(!words) {
            return;
        }
        for(let key in valid) {
            if (words.includes(key)) {
                dispatch(squareSelected(valid[key]-1));
                break;
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
