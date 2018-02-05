import { createStore, applyMiddleware } from "redux";
import createSagaMiddleware from 'redux-saga';
import fetch from '../middleware/sagas/users/fetch';
import reducers from '../reducers';

const sagaMiddleware = createSagaMiddleware();

const store = createStore(
    reducers,
    applyMiddleware(sagaMiddleware)
);

sagaMiddleware.run(fetch);

export default store;