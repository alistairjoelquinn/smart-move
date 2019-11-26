import React, { useEffect } from 'react'
import Modal from './info-modal'
import WinnerModal from './winner-modal'
import WelcomeModal from './welcome-modal'
import { useDispatch, useSelector } from 'react-redux'
import { getSquares, wordsUpdate, squareSelected, showModal, showWelcome, hideWelcome, squareCorrect, setCurrentSquare, gameWasWon } from './actions'
import { valid } from './valid'

export default function Gameboard() {
    const dispatch = useDispatch();
    const squares = useSelector(state =>
        state.squares && state.squares
    );
    const words = useSelector(state => 
        state.words && state.words
    );
    const modalIsVisible = useSelector(state => 
        state.modalIsVisible && state.modalIsVisible
    );
    const gameWon = useSelector(state => 
        state.gameWon && state.gameWon
    );
    const currentSquare = useSelector(state => 
        state.currentSquare && state.currentSquare
    );
    const welcomeVisible = useSelector(state => 
        state.welcomeVisible && state.welcomeVisible
    );

    const winnerCheck = () => {
        if(squares[0].correct && squares[1].correct && squares[2].correct && squares[3].correct && squares[4].correct && squares[5].correct == true ||
            squares[6].correct && squares[7].correct && squares[8].correct && squares[9].correct && squares[10].correct && squares[11].correct == true ||
            squares[12].correct && squares[13].correct && squares[14].correct && squares[15].correct && squares[16].correct && squares[17].correct == true ||
            squares[18].correct && squares[19].correct && squares[20].correct && squares[21].correct && squares[22].correct && squares[23].correct == true ||
            squares[24].correct && squares[25].correct && squares[26].correct && squares[27].correct && squares[28].correct && squares[29].correct) {
            dispatch(gameWasWon());
        }
    };

   
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
        setTimeout(() => {
            if(gameWon) {
                var end = Date.now() + (15 * 1000);
                var interval = setInterval(function() {
                    if (Date.now() > end) {
                        return clearInterval(interval);
                    }
                    confetti({
                        startVelocity: 30,
                        spread: 360,
                        ticks: 60,
                        shapes: ['square'],
                        origin: {
                            x: Math.random(),
                            y: Math.random() - 0.2
                        }
                    });
                }, 500);
            }
        }, 6000)
        
    }, [gameWon]);

    useEffect(() => {
        if(!squares){
            return;
        }
        winnerCheck();
    }, [squares]);

    useEffect(() => {
        if(!words) {
            return;
        }
        if(!currentSquare) {
            return;
        }
        
        for(let key in valid) {
            if (words.includes(key)) {
                dispatch(squareSelected(valid[key]-1));
                dispatch(setCurrentSquare(squares[valid[key]-1]));
                break;
            } 
        }

        if(words.includes(currentSquare.name)) {
            dispatch(squareCorrect(currentSquare.index-1));
            dispatch(showModal());
        }

        if(words.includes('instructions')) {
            dispatch(showWelcome());
            setTimeout(() => {
                dispatch(hideWelcome());
            }, 5000)
        }
    }, [words]);

    if(!squares){
        return null;
    }

    return (
        <div id="game-grid">
            {squares.map((square, index) => 
                <div className={square.selected ? "box selected " : "box"} key={square.id} id={`square-${square.id}`}>
                    <span className="yellow">{index + 1}</span>
                    <span className={square.correct ? "red correct" : "red"}>
                        <img src={square.url} />
                    </span>
                </div>
            )}
            {welcomeVisible &&
                <WelcomeModal />
            }
            {gameWon && 
                <WinnerModal />
            }
            {modalIsVisible && 
                <Modal 
                    currentSquare = {currentSquare}
                />
            }
        </div>
    )
}
