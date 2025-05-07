// src/index.tsx
import React from 'react';
import ReactDOM from 'react-dom/client'; // react-dom/client에서 가져오기
import './assets/styles/global.scss';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
