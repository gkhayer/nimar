import React from 'react';
//import { Link } from 'react-router-dom';
import './Footer.css';

export default class Footer extends React.Component {

    render(){
        return (
          <div className="footer">
            <div><button>preetkaur9016@gmail.com</button></div>
            <div className="default">408-7148425</div>
            <div className="summer"></div>
            <div className="winter"></div>
            <div className="spring"></div>
            <div className="autumn"></div>
          </div>
        );
    }
}
