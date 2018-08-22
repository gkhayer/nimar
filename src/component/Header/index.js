import React from 'react';
import MobileHeader from '../MobileHeader';
import NavBar from '../NavBar';
import './Header.css';

export default class Header extends React.Component {

  constructor(){
    super();
    this.state = {
      width: window.innerWidth,
    };
  }

  componentWillMount() {
    window.addEventListener('resize', this.handleWindowSizeChange);
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.handleWindowSizeChange);
  }

  handleWindowSizeChange = ()  => {
    this.setState({ width: window.innerWidth });
  };

  render(){
    const {width} = this.state;
    const isMobile =  width <= 500;
      if (isMobile) {
        return (
          <nav className="navbar">
            <MobileHeader />
          </nav>
        );
      } else {
      return (
        <NavBar />
      );
    }
  }
}
