import React from 'react';
import {routes} from '../../data';
import {Link} from 'react-router-dom';
import './Navbar.css';

export default class NavBar extends React.Component {

  toggleLinks = () => {
    console.log("closed");
    this.setState = {
      getInitialState: true
    }
  }

  render() {
    return (
      <nav className="navbar">
        {
          routes.map((value, key) => {
            return (
              <span key={`routes${key}`}>
                <Link to={value.path} className="selected">{value.name}</Link>
              </span>
            )})
        }
      </nav>
    );
  }
}
