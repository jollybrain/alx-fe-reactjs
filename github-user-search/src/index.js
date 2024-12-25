// src/index.js or src/index.jsx
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';  // Ensure the Tailwind styles are applied
import App from './App';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
