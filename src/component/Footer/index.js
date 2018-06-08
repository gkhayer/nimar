import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

export default class Footer extends React.Component {

    render(){
        return (
          <div className="footer">
            <div>
              <button className="button">preetkaur9016@gmail.com</button>
              <span>408.714.8425</span>
              <nav className="">
                <Link to='/home' className="selected">Home</Link>
                <Link to='/memories' className="selected">Memories</Link>
                <Link to='/about' className="selected">About</Link>
                <Link to='/contact' className="selected">Contact</Link>
              </nav>
            </div>
          </div>
        );
    }
}
