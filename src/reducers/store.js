import { applyMiddleware, createStore, combineReducers } from 'redux';
import { promiseMiddleware, localStorageMiddleware } from './middleware';
import article from './reducers/article';
import auth from './reducers/auth';
import common from './reducers/common';
import home from './reducers/home';
import settings from './reducers/settings';

const reducer = combineReducers({
  article,
  auth,
  common,
  home,
  settings
});
