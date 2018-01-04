import React from 'react';
//import { NavLink } from 'react-router-dom';
import './Header.css';

export default class Header extends React.Component {

    render(){
        return (
          <div className="header">
            <nav className="navbar">
              <a href="#home" className="selected">Home</a>
              <a href="#memories" className="selected">Memories</a>
              <a href="#about" className="selected">About</a>
            </nav>
          </div>
        );
    }
}
