import React from 'react';
import { Link } from 'react-router-dom';
import MobileHeader from '../MobileHeader';
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
        <nav className="navbar">
          <Link to='/' className="selected">Home</Link>
          <Link to='/memories' className="selected">Memories</Link>
          <Link to='/about' className="selected">About</Link>
          <Link to='/contact' className="selected">Contact</Link>
        </nav>
      );
    }
  }
}
