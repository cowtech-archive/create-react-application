const onServer = typeof window === 'undefined';

import * as React from 'react';
import {createStore, applyMiddleware, compose, combineReducers, Store} from 'redux';
import {History} from 'history';
import createHistory from 'history/createBrowserHistory';
import {RouteComponentProps} from 'react-router';
import {routerReducer, routerMiddleware, RouterAction} from 'react-router-redux';
import thunk from 'redux-thunk';
import * as firebase from 'firebase';

import {Environment} from '../models/environment';
import {GlobalState} from '../data/state';
import {reducer} from './reducers';

let composeEnhancers = compose;

if(!onServer){
  composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
  window.showEnvironment = () => console.log(env);
}

export function createRouteMapStateToPropsfunction(mapper){
  return function(state, ownProps){
    return mapper(state, ownProps);
  };
}

// The main store
export const history = !onServer ? createHistory() : null;
export const store = createStore(
  combineReducers({application: reducer, router: routerReducer}),
  composeEnhancers(applyMiddleware(routerMiddleware(history), thunk))
);

// Initialize Firebase
if(!onServer)
  firebase.initializeApp(env.firebase);
