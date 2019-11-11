import axios from 'axios'

export async function getSquares() {
    try {
        const { data } = await axios.get(`/init`);
        return {
            type: "GET_SQUARES",
            squares: data
        };
    } catch (err) {
        console.log("gathering 30 squares: ", err);
    }
}

export async function squareSelected(id) {
    return {
        type: "SELECT_SQUARE",
        id: id
    };
}

export async function wordsUpdate(words) {
    return {
        type: "WORDS_UPDATE",
        words: words
    };
}