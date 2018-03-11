import {createStore, applyMiddleware, compose, combineReducers} from 'redux';
import createHistory from 'history/createBrowserHistory';
import {routerReducer, routerMiddleware} from 'react-router-redux';
import thunk from 'redux-thunk';
import * as firebase from 'firebase';

import {reducer} from './reducers';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
window.showEnvironment = () => console.log(env);

export function createRouteMapStateToPropsfunction(mapper){ // eslint-disable-line func-style
  return function(state, ownProps){
    return mapper(state, ownProps);
  };
}

// The main store
export const history = createHistory();
export const store = createStore(
  combineReducers({application: reducer, router: routerReducer}),
  composeEnhancers(applyMiddleware(routerMiddleware(history), thunk))
);

// Initialize Firebase
firebase.initializeApp(env.firebase);
