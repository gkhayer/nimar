import React from 'react';
import { NavLink } from 'react-router-dom';
import './Header.css'; 

export default class Header extends React.Component {

    render(){
        return(
          <nav className="navbar navbar-default">
            <div className="container-fluid">
              <div className="navbar-header">
                <NavLink to="/Home" activeClassName="selected">Home</NavLink>
                <NavLink to="/Memories" activeClassName="selected">Memories</NavLink>
                <NavLink to="/About" activeClassName="selected">About</NavLink>
              </div>
            </div>
          </nav>
        );
    }
}
