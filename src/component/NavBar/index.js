import React from 'react';
import {Link} from 'react-router-dom';
import './Navbar.css';


export default class NavBar extends React.Component {
  render(){
    return (
      <nav className="navbar">
        <Link to='/home' className="selected">Home</Link>
        <Link to='/memories' className="selected">Memories</Link>
        <Link to='/about' className="selected">About</Link>
        <Link to='/contact' className="selected">Contact</Link>
      </nav>
    );
  }
}
