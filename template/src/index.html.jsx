import * as React from "react";
import ReactDOMServer from "react-dom/server";
import {Provider} from "react-redux";
import {StaticRouter as Router} from "react-router";

import {store} from "./js/data/store";

const index = ReactDOMServer.renderToStaticMarkup(
  <html lang="en">
    <head>
      <title></title>
      <meta httpEquiv="X-UA-Compatible" content="IE=edge"/>
      <meta charSet="utf8"/>
      <meta name="description" content={env.description}/>
      <meta name="keywords" content={env.keywords}/>
      <meta name="author" content={env.author}/>
      <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
      <meta name="apple-mobile-web-app-capable" content="yes"/>
      <meta name="theme-color" content="#8b0000"/>
      <link rel="icon" href="/images/favicon.png" sizes="32x32"/>
      <link rel="shortcut icon" href="images/favicon.png" sizes="196x196"/>
      <link rel="manifest" href="/manifest.json"/>

      {env.environment === "production" && <style>{require("./css/main.scss").toString()}</style>}
      <script defer={true} type="text/javascript" src="/js/app.js"></script>
    </head>
    <body>
      <Provider store={store}>
        <Router location={"/"} context={{}}>
          <div id="root" className="root">
            <div id="main" className="main">

            </div>
          </div>
        </Router>
      </Provider>
    </body>
  </html>
);

export default index;