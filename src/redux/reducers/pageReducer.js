import { PAGE_DOWN, PAGE_UP, PAGE_RESET,PAGE_SET } from '../actions/types';

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
            case PAGE_RESET:
                return {
                  ...state, 
                     page: 1,
            };
            case PAGE_SET:
                return {
                  ...state, 
                     page: action.payload.page,
            };
         default: return state;
    }

};
export default pageReducer;