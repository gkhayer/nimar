import React from 'react';
import logo from '../images/image11.jpg';
import Header from '../component/Header';
import Home from '../pages/Home';
import About from '../pages/About';
import Memories from '../pages/Memories';
import './App.css';

export default class App extends React.Component {

  render() {
    return (
      <div className="app">
        <div className="app-header">
          <div className="splash">
            <div style={{backgroundImage: `url(${logo})`}} className="app-logo" />
            <p className="background-text"></p>
          </div>
        </div>
        <Header></Header>
        <Home></Home>
        <Memories></Memories>
        <About></About>
      </div>
    );
  }
}

