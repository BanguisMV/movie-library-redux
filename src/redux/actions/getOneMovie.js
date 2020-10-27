import { 
    MOVIE_FETCHING, 
    MOVIE_SUCCESS, 
    MOVIE_FAILED, 
    MOVIES_SIMILAR,
    MOVIE_CAST,
    MOVIE_IMAGES,
 } from './types';

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
const SUCCESS_CAST = (data) => {
    return {
        type: MOVIE_CAST,
        payload: {
            loading: false,
            cast: data,
        }
    }
}
const SUCCESS_IMAGES = (data) => {
    return {
        type: MOVIE_IMAGES,
        payload: {
            loading: false,
            images: data,
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
const API_KEY = process.env.REACT_APP_API_KEY;

export const getMovie = (MOVIE_ID) => {
    return dispatch => {
        dispatch(LOADING())
        fetch(`https://api.themoviedb.org/3/movie/${MOVIE_ID}?api_key=${API_KEY}&append_to_response=videos`)
        .then(res => res.json())
        .then(res => dispatch(SUCCESS(res)))
        .catch(err =>  dispatch(FAILED(err)))
    }
}

export const getSimilarMovie = (MOVIE_ID, page) => {
    return dispatch => {
        dispatch(LOADING())
        fetch(`https://api.themoviedb.org/3/movie/${MOVIE_ID}/similar?api_key=${API_KEY}&page=${page ? page : 1}`)
        .then(res => res.json())
        .then(res => dispatch(SUCCESS_SIMILAR(res)))
        .catch(err =>  dispatch(FAILED(err)))
    }
}

export const getCast = (MOVIE_ID, page) => {
    return dispatch => {
        dispatch(LOADING())
        fetch(`https://api.themoviedb.org/3/movie/${MOVIE_ID}/credits?api_key=${API_KEY}&page=${page ? page : 1}`)
        .then(res => res.json())
        .then(res => dispatch(SUCCESS_CAST(res)))
        .catch(err =>  dispatch(FAILED(err)))
    }
}

export const getImages = (MOVIE_ID) => {
    return dispatch => {
        dispatch(LOADING())
        fetch(`https://api.themoviedb.org/3/movie/${MOVIE_ID}/images?api_key=${API_KEY}`)
        .then(res => res.json())
        .then(res => dispatch(SUCCESS_IMAGES(res)))
        .catch(err =>  dispatch(FAILED(err)))
    }
}


