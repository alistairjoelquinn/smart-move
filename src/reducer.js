export default function reducer(state = {}, action) {
    if (action.type == 'GET_SQUARES') {
        return { 
            ...state, 
            squares: 
                action.squares.map(square => {
                    return  {
                        ...square,
                     selected: false 
                    }
                })
        }}
    return state;
};