import * as TYPES from '../actions/types';

const INITIAL_STATE = {
    movies: [],
    loading: false,
    controller: new AbortController(),
    search:'',
    error: '',
    sort:'popularity',
 };


 const moviesReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case TYPES.MOVIES_FETCHING:
           return {
             ...state, 
                loading: action.payload.loading,
                controller: action.payload.controller
           };
           case TYPES.MOVIES_SUCCESS:
            return {
              ...state, 
                 movies: action.payload.movies,
                 loading: action.payload.loading,
            };
          case TYPES.MOVIES_FAILED :
               return {
                 ...state, 
                    error: action.payload.error,
            };
            case TYPES.MOVIES_SEARCH:
               return {
                 ...state, 
                 search: action.payload.search,

            };
            case TYPES.MOVIES_SORT:
               return {
                 ...state, 
                 sort: action.payload.sort,
            };
         default: return state;
    }
};
export default moviesReducer;