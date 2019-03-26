import reducer from './reducers/reducers'
import {createStore, applyMiddleware} from 'redux'
import createSagaMiddleware from "redux-saga";
import {sagas} from "./sagas/index";

let middlewares = [];

const sagaMiddleware = createSagaMiddleware();
middlewares.push(sagaMiddleware)

let middleware = applyMiddleware(...middlewares);

export const store = createStore(reducer, middleware);
sagaMiddleware.run(sagas)