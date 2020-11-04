import * as actionType from './actionTypes';

import { FETCH_MOVIES } from '../actions/actionTypes'


export const fetchMoviesAction = () => {

    return {
        type: FETCH_MOVIES
    }
}

export const addMovieAction = (newMovie) => {

    return {
        type: actionType.ADD_MOVIE,
        newMovie
    }
}

//action sent by redux-saga

export const fetchSuccessAction = (receivedMovies) => {
    return {
        type: actionType.FETCH_SUCCEEDED,
        receivedMovies
    }
}

export const fetchFailedAction = (err) => {
    return {
        type: actionType.FETCH_MOVIES,
        err
    }
}