import { MOVIE_FETCHING, MOVIE_SUCCESS, MOVIE_FAILED } from '../actions/types';

const INITIAL_STATE = {
    movie: {},
    loading: false,
    error: '',
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
           
         default: return state;
    }

};
export default movieReducer;