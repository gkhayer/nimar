import React, {component} from 'react';
import {render} from 'react-dom';
import { BrowserRouter, Route, Link } from 'react-router-dom'
import App from './App';
import Home from './pages/Home';
import About from './pages/About';
import Memories from './pages/Memories';
import registerServiceWorker from './registerServiceWorker';

render(
  <BrowserRouter>
    <div>
      <Route path='/' component={App} />
      <Route path='/Home' component={Home}/>
      <Route path='/About' component={About}/>
      <Route path='/Memories' component={Memories}/>
    </div>
  </BrowserRouter>,
   document.getElementById('root'));
registerServiceWorker();
