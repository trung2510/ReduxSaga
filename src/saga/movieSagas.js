import * as actionType from '../actions/actionTypes'
import { Api } from './Api'
import { put, takeLatest } from 'redux-saga/effects'

function* fetchMovies() {

    try {
        const receivedMovies = yield Api.getMoviesFromApi();
        yield put({ type: actionType.FETCH_SUCCEEDED, receivedMovies: receivedMovies })
    } catch (err) {
        yield put({ type: actionType.FETCH_FAILED,err})
    }
}

export function* watchFetchMovies(){
    yield takeLatest(actionType.FETCH_MOVIES, fetchMovies)
}