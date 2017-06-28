import "babel-polyfill";

// Import assets
import "../css/main.scss";

// Imports
import * as React from "react";
import ReactDOM from "react-dom";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import {Provider} from "react-redux";

// Local imports
import {store} from "./data/store";

const syncServiceWorker = async function(registration){
  // Fetch the manifest to see if version matches
  try{
    const response = await fetch("/manifest.json");
    const latestVersion = await response.json();

    if(latestVersion !== version)
      registration.update().catch(console.error);
  }catch(e){
    // No-op
  }
};

document.addEventListener("DOMContentLoaded", () => {
  ReactDOM.render(
    <Provider store={store}>
      <Router>
        <div id="main" className="main">

        </div>
      </Router>
    </Provider>,
    document.getElementById("root")
  );

  // Service workers
  if(navigator.serviceWorker){
    if(env.serviceWorkerEnabled && env.environment === "production")
      navigator.serviceWorker.register("/sw.js").then(syncServiceWorker).catch(console.error);
    else
      navigator.serviceWorker.getRegistrations().then(registrations => registrations.map(r => r.unregister()));
  }
});
