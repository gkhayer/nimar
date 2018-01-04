import React from 'react';
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
          <Home></Home>
          <Memories></Memories>
          <About></About>
          <div className="back-top">
            <div className="back-top-content" onClick={ () => { this.scrollToTop(); }}>
              <i id="tt2" className="material-icons arrow-upward">arrow_upward</i>
              <div className="mdl-tooltip mdl-tooltip--large" htmlFor="tt2">Scroll Up</div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
