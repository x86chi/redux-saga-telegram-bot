import { applyMiddleware, createStore } from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';

import reducer from './reducer';
import echoWatcher from './sagas';

const sagaMiddleware = createSagaMiddleware();
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
const store = createStore(reducer, applyMiddleware(sagaMiddleware));

sagaMiddleware.run(echoWatcher);
export default store;
