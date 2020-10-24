
    import { combineReducers } from 'redux';
    import movie from './movieReducer';
    import movies from './moviesReducer';
    import page from './pageReducer';
    import genre from './genreReducer';
    const rootReducer = combineReducers({
        page,
        movie,
        movies,
        genre
    });

    export default rootReducer;