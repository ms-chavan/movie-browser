import { applyMiddleware, createStore } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { composeWithDevTools } from 'redux-devtools-extension';
import rootSaga from './rootSaga';
import rootReducer from './rootReducer';

const sagaMiddleware = createSagaMiddleware();

const middlewares = [sagaMiddleware];

const storeEnhancer = composeWithDevTools(applyMiddleware(...middlewares));

const store = createStore(rootReducer, storeEnhancer);

sagaMiddleware.run(rootSaga);

export default store;
