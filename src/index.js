import React from 'react';
import {render} from 'react-dom';
import { BrowserRouter } from 'react-router-dom'
import App from './App';
import './index.css';

render(
  <BrowserRouter basename='/nimar/'>
    <App />
  </BrowserRouter>,
  document.getElementById('root'));