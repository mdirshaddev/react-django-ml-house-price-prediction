import React from 'react';
import ReactDOM from 'react-dom';
import App from './app';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import Store from './store/store';

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Provider store={Store}>
        <App/>
      </Provider>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);

if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('./service-worker.js').then(registration => {
      console.log('SW registered: ', registration);
    }).catch(registrationError => {
      console.log('SW registration failed: ', registrationError);
    });
  });
}
