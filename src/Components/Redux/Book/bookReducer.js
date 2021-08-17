import { FETCH_BOOKS_FAILURE, FETCH_BOOKS_START, FETCH_BOOKS_SUCESS } from "./types"

const initialState = {
    book: [],
    isFetching: false,
    errorMsg: "",
    
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
            book: action.payload
        }
        case FETCH_BOOKS_FAILURE: 
        return {
            ...state,
            isFetching: false,
            errorMsg: action.payload,
            book: []
        }
        default:
            return state
    }
}

export default bookItemReducer