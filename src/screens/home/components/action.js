import axios from 'axios'
import {
    REQUEST_BOOKS,
    RECEIVE_BOOKS
} from './actionTypes'

// This action will be called before request start
export const requestBooks = (query) => ({
    type: REQUEST_BOOKS,
    query
})
// This action will be called when request complete
export const receiveBooks = ({ status, payload }) => ({
    type: RECEIVE_BOOKS,
    status,
    payload
})

export const getBooks = (query) => {
    return function (dispatch) {
        dispatch(requestBooks(query));
        const url = `https://www.googleapis.com/books/v1/volumes?q=${query}`
        return axios.get(url)
            .then(response => {
                dispatch(receiveBooks({
                    status: 'success',
                    payload: response.data
                }))
            })
            .catch(error => {
                dispatch(receiveBooks({
                    status: 'error',
                    payload: error
                }))
            })
    };
}