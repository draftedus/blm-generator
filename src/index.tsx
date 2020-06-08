import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

// inject css until Zach adds this
const link = document.createElement('link');
link.setAttribute('rel', 'stylesheet');
link.setAttribute('href', 'https://blmtech.s3.amazonaws.com/blm-webflow-form.css');
document.head.appendChild(link);

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
