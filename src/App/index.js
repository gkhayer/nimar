import React, { Component } from 'react';
import logo from '../images/gems.jpg';
import Header from '../component/Header';
import './App.css';

export default class App extends React.Component {
  render() {
    return (
      <div className="app">
        <div className="app-header">
          <div className="splash">
            <img src={logo} className="app-logo" alt="logo" />
          </div>
        </div>
        <Header></Header>
      </div>
    );
  }
}

