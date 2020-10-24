import { MOVIES_FETCHING, MOVIES_SUCCESS, MOVIES_FAILED } from '../actions/types';

const API_KEY = process.env.REACT_APP_API_KEY;

const LOADING = () => {
   return {
       type: MOVIES_FETCHING,
       payload: {
           loading: true
       }
   }
}

const SUCCESS = (data) => {
   return {
       type: MOVIES_SUCCESS,
       payload: {
           loading: false,
           movies: data,
       }
   }
}

const FAILED = (error) => {
   return {
       type: MOVIES_FAILED,
       payload: {
           loading: true,
           error: error
       }
   }
}

export const getMoviesByDiscover = (discover, page) => {
    return dispatch => {
     dispatch(LOADING())
        fetch(`https://api.themoviedb.org/3/movie/${discover}?api_key=${API_KEY}&page=${page}`)
        .then(res => res.json())
        .then(res => dispatch(SUCCESS(res.results)))
        .catch(err =>  dispatch(FAILED(err)))
    }
}
 
export const getMoviesByGenre = (genre,sort,page) => {
   return dispatch => {
    dispatch(LOADING())
       fetch(`https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&with_genres=${genre}&sort_by=${sort}.desc&page=${page}`)
       .then(res => res.json())
       .then(res => dispatch(SUCCESS(res.results)))
       .catch(err =>  dispatch(FAILED(err)))
   }
}
