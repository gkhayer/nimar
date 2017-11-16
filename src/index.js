import React from 'react';
import {render} from 'react-dom';
import { BrowserRouter, Route } from 'react-router-dom'
import App from './App';
import registerServiceWorker from './registerServiceWorker';

render(
  <BrowserRouter>
    <div>
      <Route path='/' component={App}></Route>
    </div>
  </BrowserRouter>,
  document.getElementById('root'));
registerServiceWorker();
