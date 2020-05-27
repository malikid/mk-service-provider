import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

import {Provider} from 'mobx-react';
import store from 'Stores';

import {GA_CONTAINER_ID, HOTJAR_ID, HOTJAR_VERSION} from 'Config';

import ReactGA from 'react-ga';
if (GA_CONTAINER_ID) {
  ReactGA.initialize(GA_CONTAINER_ID);
  ReactGA.pageview(window.location.pathname + window.location.search);
}

import {hotjar} from 'react-hotjar';
if (HOTJAR_ID && HOTJAR_VERSION) {
  hotjar.initialize(HOTJAR_ID, HOTJAR_VERSION);
}

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
