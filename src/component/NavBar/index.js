import React from 'react';
import {routes} from '../../data';
import {Link} from 'react-router-dom';
import './Navbar.css';

export default class NavBar extends React.Component {

  render() {
    return (
      <nav className="navbar">
        {
          routes.map((value, key) => {
            return (
              <span className="nav-span" key={`routes${key}`}>
                <Link to={value.path} className="selected">{value.name}</Link>
              </span>
            )})
        }
      </nav>
    );
  }
}
