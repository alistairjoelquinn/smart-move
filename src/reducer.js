export default function reducer(state = {}, action) {
    if (action.type == 'GET_SQUARES') {
        return { 
            ...state, 
            squares: 
                action.squares.map((square, idx) => {
                    return  {
                        ...square,
                     selected: false,
                     correct: false,
                     index: idx + 1,
                    }
                }),
            words: [],
            modalIsVisible: false,
            gameWon: false
        }}

    if (action.type == 'SELECT_SQUARE') {
        return {
            ...state,
            squares: 
                state.squares.map((square, index) => {
                    if(action.id == index) {
                        return {
                            ...square,
                            selected: true
                        }
                    } else {
                        return square
                    }
                })
        }
    }

    if (action.type == 'SQUARE_CORRECT') {
        return {
            ...state,
            squares: 
                state.squares.map((square, index) => {
                    if(action.id == index) {
                        return {
                            ...square,
                            correct: true
                        }
                    } else {
                        return square
                    }
                })
        }
    }

    if (action.type == 'WORDS_UPDATE') {
        return {
            ...state,
            words: 
                action.words
        }
    }

    if (action.type == 'SHOW_MODAL') {
        return { 
            ...state, 
            modalIsVisible: true
        }}

    if (action.type == 'CLOSE_MODAL') {
        return { 
            ...state, 
            modalIsVisible: false
        }}

    if (action.type == 'GAME_WON') {
        return { 
            ...state, 
            gameWon: true
        }}

    return state;
};