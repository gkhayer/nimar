import React from 'react';
//import { Link } from 'react-router-dom';
import './Footer.css';

export default class Footer extends React.Component {

    render(){
        return (
          <div className="footer">
            <div>This is a footer</div>
            <div className="default"></div>
            <div clasName="summer"></div>
            <div className="winter"></div>
            <div className="spring"></div>
            <div className="autumn"></div>
          </div>
        );
    }
}
