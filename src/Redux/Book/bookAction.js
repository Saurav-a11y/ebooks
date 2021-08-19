import axios from "axios"
import { FETCH_BOOKS_FAILURE, FETCH_BOOKS_START, FETCH_BOOKS_SUCESS } from "./types"

//fetch books item from api
export const fetchBook = () => dispatch => {
    dispatch({
        type: FETCH_BOOKS_START
    })
    axios.get(`https://book-set-task.herokuapp.com/api/list_books`)
    .then((response) => {
        const genres = response.data.reduce((init, res) => {
            let genres = [];
            if (res.genre && res.genre !== "(no genres listed)") {
              genres = res.genre.split('|').filter(g => !init.includes(g));
            }
            init = [...init, ...genres];
            return init;
          }, [])

        const resData = {books: response.data, genres: genres}
        dispatch({
            type: FETCH_BOOKS_SUCESS,
            payload: resData
        })
    })
    .catch((error) => {
        dispatch({
            type: FETCH_BOOKS_FAILURE,
            payload: "error occured"

        })
    })

}