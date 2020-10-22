
    import { combineReducers } from 'redux';
    import movie from './movieReducer';
    import movies from './moviesReducer';
    import page from './pageReducer';

    const rootReducer = combineReducers({
        page,
        movie,
        movies
    });

    export default rootReducer;