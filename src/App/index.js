import React from 'react';
import logo from '../images/image11.jpg';
import Header from '../component/Header';
import Home from '../pages/Home';
import About from '../pages/About';
import Memories from '../pages/Memories';
import './App.css';

export default class App extends React.Component {


  constructor() {
    super();

    this.state = {
        intervalId: 0
    };
  }

  scrollStep() {
    if (window.pageYOffset === 0) {
        clearInterval(this.state.intervalId);
    }
    window.scroll(0, window.pageYOffset - this.props.scrollStepInPx);
  }

  scrollToTop() {
    let intervalId = setInterval(this.scrollStep.bind(this), this.props.delayInMs);
    this.setState({ intervalId: intervalId });
  }

  render() {
    
    return (
      <div className="app">
        <Header></Header>
        <div className="container">
          <div className="app-header">
            <div className="splash">
              <div style={{backgroundImage: `url(${logo})`}} className="app-logo" />
              <p className="background-text"></p>
            </div>
          </div>
          <Home></Home>
          <Memories></Memories>
          <About></About>
          <div className="back-top">
            <div className="back-top-content" onClick={ () => { this.scrollToTop(); }}>
              <i id="tt2" className="material-icons arrow-upward">arrow_upward</i>
              <div className="mdl-tooltip mdl-tooltip--large" for="tt2">Scroll Up</div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
