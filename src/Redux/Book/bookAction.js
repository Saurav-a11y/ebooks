import axios from "axios"
import { FETCH_BOOKS_FAILURE, FETCH_BOOKS_START, FETCH_BOOKS_SUCESS } from "./types"

//fetch books item from api
export const fetchBook = () => dispatch => {
    dispatch({
        type: FETCH_BOOKS_START
    })
    axios.get(`https://book-set-task.herokuapp.com/api/list_books`)
    .then((response) => {
        dispatch({
            type: FETCH_BOOKS_SUCESS,
            payload: response.data
        })
    })
    .catch((error) => {
        dispatch({
            type: FETCH_BOOKS_FAILURE,
            payload: "error occured"

        })
    })

}