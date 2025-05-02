import React from 'react';
import ReactDOM from 'react-dom';
import './styles/main.scss';  // SCSS 파일 import
import App from './app';  // App 컴포넌트 import
import { BrowserRouter as Router } from 'react-router-dom';  // React Router

ReactDOM.render(
  <Router>
    <App />
  </Router>,
  document.getElementById('root')
);