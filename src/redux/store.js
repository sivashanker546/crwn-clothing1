import {createStore, applyMiddleware} from 'redux';
import logger from 'redux-logger';
import rootReducer from './root-reducer';
//we can pass array of middlewares
const middlewares = [logger];

const store = createStore(rootReducer, applyMiddleware(...middlewares));

export default store;