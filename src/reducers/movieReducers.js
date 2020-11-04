import * as actionTypes from '../actions/actionTypes'
const movieReducers = (movies = [], action) => {
    switch (action.type) {
        case actionTypes.FETCH_SUCCEEDED:
            return action.receivedMovies;

        case actionTypes.FETCH_FAILED:
            return [];

        case actionTypes.ADD_MOVIE:
            return [
                ...movies,
                action.newMovies
            ]

        default:
            return movies
    }
}

export default movieReducers

