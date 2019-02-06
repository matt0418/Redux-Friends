import axios from 'axios'

export const FETCHING_FRIENDS_START = 'FETCHING_FRIENDS_START'
export const FETCHING_FRIENDS_SUCCESS = "FETCHING_FRIENDS_SUCCESS"
export const FETCHING_FRIENDS_ERROR = "FETCHING_FRIENDS_ERROR"
export const ADDING_FRIENDS_START = "ADDING_FRIENDS_START"
export const ADDING_FRIENDS_SUCCESS = "ADDING_FRIENDS_SUCCESS"
export const ADDING_FRIENDS_ERROR = "ADDING_FRIENDS_ERROR"

export const getFriends = () => dispatch => {
    dispatch({ type: FETCHING_FRIENDS_START });
    axios
        .get(`http://localhost:5000/api/friends`)
        .then(res => {
            dispatch({ type: FETCHING_FRIENDS_SUCCESS, payload: res.data })
        })
        .then(err => {
            dispatch({ type: FETCHING_FRIENDS_ERROR, payload: err })
        })
}

export const addFriend = e => dispatch => {
    dispatch({ type: ADDING_FRIENDS_START });
    e.preventDefault()
    axios
        .post(`http://localhost:5000/api/friends`)
        .then(res => {
            dispatch({ type: ADDING_FRIENDS_SUCCESS, payload: res.data })
        })
        .then(err => {
            dispatch({ type: ADDING_FRIENDS_ERROR, payload: err })
        })
}