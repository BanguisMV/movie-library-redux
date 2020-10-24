import { SET_GENRE, SET_DISCOVER } from '../actions/types';

const INITIAL_STATE = {
  genre: null,
  discover: '',
 };


 const movieReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case SET_GENRE:
           return {
             ...state, 
                genre: action.payload.genre,
           };
        case SET_DISCOVER :
            return {
              ...state, 
                 movie: action.payload.movie,
                 discover: action.payload.discover,
            };
         default: return state;
    }

};
export default movieReducer;