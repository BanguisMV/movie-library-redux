import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk'
import { composeWithDevTools } from "redux-devtools-extension";

import rootReducer from './reducers/index';

const middlewares = [
    thunk,
];

const devTools =
  process.env.NODE_ENV === "production" ? applyMiddleware(...middlewares)
    : composeWithDevTools(applyMiddleware(...middlewares));


const store = createStore(rootReducer, devTools);


export default store;