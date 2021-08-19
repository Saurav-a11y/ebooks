import { FETCH_BOOKS_FAILURE, FETCH_BOOKS_START, FETCH_BOOKS_SUCESS } from "./types"

const initialState = {
    books: [],
    isFetching: false,
    errorMsg: "",
    genres: []
    
}

const bookItemReducer = (state = initialState, action) => {
    switch(action.type) {
        case FETCH_BOOKS_START: 
        return {
            ...state,
            isFetching: true
        };
        case FETCH_BOOKS_SUCESS: 
        return {
            ...state,
            isFetching: false,
             ...action.payload
        }
        case FETCH_BOOKS_FAILURE: 
        return {
            ...state,
            isFetching: false,
            errorMsg: action.payload,
            books: []
        }
        default:
            return state
    }
}

export default bookItemReducer