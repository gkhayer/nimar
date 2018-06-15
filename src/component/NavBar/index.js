import React from 'react';
import {Link} from 'react-router-dom';
import './Navbar.css';


export default class NavBar extends React.Component {

  constructor() {
    super();
    this.toggleLinks = this.toggleLinks.bind(this);

    this.state = {
      getInitialState: false
    }
  }

  toggleLinks = () => {
    console.log("closed");
    this.setState = {
      getInitialState: true
    }
  }

  render(){
    return (
      <nav className="navbar" onClick={this.toggleLinks}>
        <Link to='/home' className="selected">Home</Link>
        <Link to='/memories' className="selected">Memories</Link>
        <Link to='/about' className="selected">About</Link>
        <Link to='/contact' className="selected">Contact</Link>
      </nav>
    );
  }
}
