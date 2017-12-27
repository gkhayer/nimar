import React from 'react';
//import { NavLink } from 'react-router-dom';
import './Header.css'; 

export default class Header extends React.Component {

    render(){
        return(
          <nav className="navbar navbar-default">
            <div className="container-fluid">
              <div className="navbar-header">
                <a href="#home" activeClassName="selected">Home</a>
                <a href="#memories" activeClassName="selected">Memories</a>
                <a href="#about" activeClassName="selected">About</a>
              </div>
            </div>
          </nav>
        );
    }
}
