import React from 'react';
import ReactDOM from 'react-dom';
import App from './splash';
import './assets/css/style.css';

const root = ReactDOM.createRoot(
  document.getElementById('root')
);

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
