import 'babel-polyfill';

// Import assets
import '../css/main.scss';

// Imports
import * as React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router} from 'react-router-dom';
import {Provider} from 'react-redux';

import {store} from './data/store';

// Routes

document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(
    <Provider store={store}>
      <Router>
        <div id="main" className="main"/>
      </Router>
    </Provider>,
    document.getElementById('root')
  );

  // Service workers
  if(navigator.serviceWorker){
    if(env.serviceWorkerEnabled && env.environment === 'production')
      navigator.serviceWorker.register('/sw.js').catch(console.error);
    else{
      navigator.serviceWorker.getRegistrations()
        .then(rs => rs.map(r => r.unregister()))
        .catch(console.error);
    }
  }

  if(navigator.serviceWorker){
    if(env.serviceWorkerEnabled && env.environment === 'production')
      navigator.serviceWorker.register('/sw.js').catch(console.error);
    else
      navigator.serviceWorker.getRegistrations().then(registrations => registrations.map(r => r.unregister()));
  }
});
