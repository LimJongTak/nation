import React from 'react';
import ReactDOM from 'react-dom';
import './main.scss';
import App from './app';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root') // 여기서 'root'는 index.html 파일의 div id와 일치해야 함
);

reportWebVitals();