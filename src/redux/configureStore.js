import { createStore, combineReducers, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import rocketReducer from './rockets/rockets';
import missionsReducer from './missions/mission';

const rootReducer = combineReducers({ missions: missionsReducer, rockets: rocketReducer });

const store = createStore(rootReducer, applyMiddleware(logger, thunk));

export default store;
