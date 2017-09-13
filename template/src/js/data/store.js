const onServer = typeof window === 'undefined';

import {createStore, applyMiddleware, compose, combineReducers} from 'redux';
import createHistory from 'history/createBrowserHistory';
import {routerReducer, routerMiddleware} from 'react-router-redux';
import thunk from 'redux-thunk';

import {reducer} from './reducers';

let composeEnhancers = compose;

if(!onServer){
  composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
  window.showEnvironment = () => console.log(env);
}

// The main store
export const history = !onServer ? createHistory() : null;
export const store = createStore(
  combineReducers({application: reducer, router: routerReducer}),
  composeEnhancers(applyMiddleware(routerMiddleware(history), thunk))
);

if(!onServer)
  store.dispatch({type: 'INITIALIZE'});
