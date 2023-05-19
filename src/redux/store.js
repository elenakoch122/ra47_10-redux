import { combineReducers, compose, legacy_createStore } from 'redux';
import { serviceReducer } from './serviceReducer';
import { listReducer } from './listReducer';
import { filterReducer } from './filterReducer';

const ReactReduxDevTools = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();

export default function configureStore() {
  return legacy_createStore(
    combineReducers({
      service: serviceReducer,
      list: listReducer,
      filter: filterReducer,
    }),
    compose(ReactReduxDevTools)
  );
}