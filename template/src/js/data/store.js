const onServer = typeof window === "undefined";

import {createStore, applyMiddleware, compose} from "redux";
import {connect as reduxConnect} from "react-redux";
import thunk from "redux-thunk";

let composeEnhancers = compose;

if(!onServer){
  composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
  window.showEnvironment = () => console.log(env);
}

// A default no-op state connector
export const defaultConnector = function(state){
  return state;
};

export const connectComponent = function(component, connector = defaultConnector){
  return reduxConnect(connector)(component);
};

export const reducer = function(state, {type, payload}){
  let newState = state;

  switch(type){

  }

  return newState;
};

export const initialState = {

};

// The main store
export const store = createStore(reducer, initialState, composeEnhancers(applyMiddleware(thunk)));
