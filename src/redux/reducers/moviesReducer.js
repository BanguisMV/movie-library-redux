import { MOVIES_FETCHING, MOVIES_SUCCESS, MOVIES_FAILED } from '../actions/types';

const INITIAL_STATE = {
    movies: [],
    loading: false,
    error: '',
    genre:'',
 };


 const moviesReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case MOVIES_FETCHING:
           return {
             ...state, 
                loading: action.payload.loading,
           };
           case MOVIES_SUCCESS:
            return {
              ...state, 
                 movies: action.payload.movies,
                 loading: action.payload.loading,
            };
          case MOVIES_FAILED :
               return {
                 ...state, 
                    error: action.payload.error,
               };
           
         default: return state;
    }
};
export default moviesReducer;