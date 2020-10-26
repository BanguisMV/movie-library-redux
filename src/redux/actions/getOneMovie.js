import { MOVIE_FETCHING, MOVIE_SUCCESS, MOVIE_FAILED, MOVIES_SIMILAR } from './types';

const LOADING = () => {
    return {
        type: MOVIE_FETCHING,
        payload: {
            loading: true
        }
    }
}

const SUCCESS = (data) => {
    return {
        type: MOVIE_SUCCESS,
        payload: {
            loading: false,
            movie: data,
        }
    }
}
const SUCCESS_SIMILAR = (data) => {
    return {
        type: MOVIES_SIMILAR,
        payload: {
            loading: false,
            similarMovies: data,
        }
    }
}
const FAILED = (error) => {
    return {
        type: MOVIE_FAILED,
        payload: {
            loading: true,
            error: error
        }
    }
}

export const getMovie = (MOVIE_ID) => {
    return dispatch => {
        const API_KEY = process.env.REACT_APP_API_KEY;
        dispatch(LOADING())
        fetch(`https://api.themoviedb.org/3/movie/${MOVIE_ID}?api_key=${API_KEY}&append_to_response=videos`)
        .then(res => res.json())
        .then(res => dispatch(SUCCESS(res)))
        .catch(err =>  dispatch(FAILED(err)))
    }
}

export const getSimilarMovie = (MOVIE_ID, page) => {
    return dispatch => {
        const API_KEY = process.env.REACT_APP_API_KEY;
        dispatch(LOADING())
        fetch(`https://api.themoviedb.org/3/movie/${MOVIE_ID}similar?api_key=${API_KEY}&page=${page}`)
        .then(res => res.json())
        .then(res => dispatch(SUCCESS_SIMILAR(res)))
        .catch(err =>  dispatch(FAILED(err)))
    }
}

