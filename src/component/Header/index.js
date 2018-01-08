import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

export default class Header extends React.Component {

    render(){
        return (
          <div className="header">
            <nav className="navbar">
              <Link to='/' className="selected">Home</Link>
              <Link to='/memories' className="selected">Memories</Link>
              <Link to='/about' className="selected">About</Link>
            </nav>
          </div>
        );
    }
}
