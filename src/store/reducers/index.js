import {applyMiddleware, combineReducers, createStore} from 'redux';
import createSagaMiddleware from 'redux-saga';
import storiesList from './storiesList';
import loader from './loader';
import {rootWatcher} from '../sagas';

const sagaMiddleware = createSagaMiddleware();

const reducers = combineReducers({
  storiesList: storiesList,
  loader: loader,
});

const store = createStore(reducers, applyMiddleware(sagaMiddleware));

sagaMiddleware.run(rootWatcher);

export default store;
