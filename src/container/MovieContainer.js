
import * as allAction from '../actions/index'
import MovieComponent from '../components/MovieComponent'

import {fetchMoviesAction} from '../actions/index'

import { connect } from 'react-redux'

 const mapStateToProps = (state) =>  {
  return {
    movies: state.movieReducers
  }
};

 const mapDispatchToProps = (dispatch) =>  {
  return {
    onFetchMovies: () => {
      dispatch(fetchMoviesAction());
    },

    onAddMovie: (newMovie) => {
      dispatch(allAction.addMovieAction(newMovie))
    }
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(MovieComponent)
