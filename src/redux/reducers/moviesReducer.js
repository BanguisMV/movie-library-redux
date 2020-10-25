import { MOVIES_FETCHING, MOVIES_SUCCESS, MOVIES_FAILED, MOVIES_SEARCH} from '../actions/types';

const INITIAL_STATE = {
    movies: [],
    loading: false,
    error: '',
    controller: new AbortController(),
    search:''
 };


 const moviesReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case MOVIES_FETCHING:
           return {
             ...state, 
                loading: action.payload.loading,
                controller: action.payload.controller
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
            case MOVIES_SEARCH:
               return {
                 ...state, 
                 search: action.payload.search,
            };
         default: return state;
    }
};
export default moviesReducer;