import { MOVIES_FETCHING, MOVIES_SUCCESS, MOVIES_FAILED } from '../actions/types';

const API_KEY = process.env.REACT_APP_API_KEY;

const LOADING = (newController) => {
   return {
       type: MOVIES_FETCHING,
       payload: {
           loading: true,
           controller: newController
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
    return (dispatch, getState) => {
        const { controller } = getState().movies;
        controller.abort();
        const newController = new AbortController();
        const signal = newController.signal;

     dispatch(LOADING(newController))
        fetch(`https://api.themoviedb.org/3/movie/${discover}?api_key=${API_KEY}&page=${page}&include_adult=true`, {signal})
        .then(res => res.json())
        .then(res => dispatch(SUCCESS(res.results)))
        .catch(err =>  dispatch(FAILED(err.toString())))
    }
}

export const getMoviesBySearch = (keyword,page) => {
    return (dispatch, getState)  => {
     const { controller } = getState().movies;
     controller.abort();
     const newController = new AbortController();
     const signal = newController.signal;
     dispatch(LOADING(newController))
        fetch(`https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=${keyword}&page=${page}`, {signal})
        .then(res => res.json())
        .then(res => dispatch(SUCCESS(res.results)))
        .catch(err =>  dispatch(FAILED(err)))
    }
}
 
export const getMoviesByGenre = (genre,page) => {
   return (dispatch, getState)  => {
    const { controller,sort } = getState().movies;
    controller.abort();
    const newController = new AbortController();
    const signal = newController.signal;
    dispatch(LOADING(newController))
       fetch(`https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&include_adult=true&with_genres=${genre}&sort_by=${sort}.desc&page=${page}`, {signal})
       .then(res => res.json())
       .then(res => dispatch(SUCCESS(res.results)))
       .catch(err =>  dispatch(FAILED(err)))
   }
}
