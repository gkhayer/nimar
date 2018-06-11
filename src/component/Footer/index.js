import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

export default class Footer extends React.Component {

    render(){
        return (
          <div className="footer">
            <div className="footerwrapper">
              <a href="mailto:preetkaur9016@gmail.com">preetkaur9016@gmail.com</a>
              <span>408.714.8425</span>
              <nav className="footerNav">
                <Link to='/home' className="selected">Home</Link>
                <Link to='/memories' className="selected">Memories</Link>
                <Link to='/about' className="selected">About</Link>
                <Link to='/contact' className="selected">Contact</Link>
                <a href="https://www.linkedin.com/in/preet-kaur-5b0288122" target="_blank"><ion-icon size="large" name="logo-linkedin"></ion-icon></a>
              </nav>
            </div>
          </div>
        );
    }
}
