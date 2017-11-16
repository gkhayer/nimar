import React from 'react';
import {render} from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import App from './App';
import Home from './pages/Home';
import About from './pages/About';
import Memories from './pages/Memories';
import registerServiceWorker from './registerServiceWorker';

render(
  <Router>
    <div>
      <Route path='/' component={App}></Route>
    </div>
  </Router>,
  document.getElementById('root'));
registerServiceWorker();
