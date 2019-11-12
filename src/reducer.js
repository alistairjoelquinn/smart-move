export default function reducer(state = {}, action) {
    if (action.type == 'GET_SQUARES') {
        return { 
            ...state, 
            squares: 
                action.squares.map((square, idx) => {
                    return  {
                        ...square,
                     selected: false,
                     index: idx + 1
                    }
                }),
            words: []
        }}

    if (action.type == 'SELECT_SQUARE') {
        console.log("reducer action id: ", action.id);
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

    if (action.type == 'WORDS_UPDATE') {
        return {
            ...state,
            words: 
                action.words

        }
        
    }

    return state;
};