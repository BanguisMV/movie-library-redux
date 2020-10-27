import { MOVIE_FETCHING, MOVIE_SUCCESS, MOVIE_FAILED, MOVIES_SIMILAR,MOVIE_CAST, MOVIE_IMAGES } from '../actions/types';

const INITIAL_STATE = {
    movie: {},
    loading: false,
    error: '',
    similarMovies:[],
    cast:[],
    images: [],
    all:[]
 };


 const movieReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case MOVIE_FETCHING:
           return {
             ...state, 
                loading: action.payload.loading,
           };
           case MOVIE_SUCCESS:
            return {
              ...state, 
                 movie: action.payload.movie,
                 loading: action.payload.loading,
            };
            case MOVIE_FAILED :
               return {
                 ...state, 
                loading: action.payload.loading,
                error: action.payload.error,
            };
            case MOVIES_SIMILAR :
               return {
                 ...state, 
                loading: action.payload.loading,
                similarMovies: action.payload.similarMovies,
            };
            case MOVIE_CAST:
               return {
                 ...state, 
                loading: action.payload.loading,
                cast: action.payload.cast,
            };
            case MOVIE_IMAGES:
               return {
                 ...state, 
                loading: action.payload.loading,
                images: action.payload.images,
            };
         default: return state;
    }

};
export default movieReducer;