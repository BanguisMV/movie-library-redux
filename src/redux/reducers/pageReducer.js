import { PAGE_DOWN, PAGE_UP } from '../actions/types';

const INITIAL_STATE = {
    page:1
 };


 const pageReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case PAGE_UP:
           return {
             ...state, 
                page: state.page + 1 ,
           };
           case PAGE_DOWN:
            return {
                ...state, 
                page: state.page - 1,
            };
           
         default: return state;
    }

};
export default pageReducer;