import { createStore, combineReducers, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import rocketReducer from './rockets/rockets';

const rootReducer = combineReducers({ rockets: rocketReducer });

const store = createStore(rootReducer, applyMiddleware(logger, thunk));

export default store;
