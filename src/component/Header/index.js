import React, {Component} from 'react';
import './Header.css'; 

export default class Header extends React.Component {
    render(){
        return(
          <nav className="navbar navbar-default">
            <div className="container-fluid">
              <div className="navbar-header">
                <a className="active" href="/Home">Home</a>
                <a href="Memories">Memories</a>
                <a className="navbar-brand" href="About">About</a>
              </div>
            </div>
          </nav>
        );
    }
}
