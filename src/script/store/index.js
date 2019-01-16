import reducer from '../reducers';
import thunk from 'redux-thunk';
import promiseMiddleware from 'redux-promise';
import logger from 'redux-logger';
import { createStore, applyMiddleware } from 'redux';

const middleware = [thunk, promiseMiddleware, logger];

const store = createStore(reducer, applyMiddleware(...middleware));

export default store;
