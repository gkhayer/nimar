import React from 'react';
import {routes} from '../../data';
import { Link } from 'react-router-dom';
import NavBar from '../NavBar';
import './Footer.css';

export default class Footer extends React.Component {

    render(){
        return (
          <div className="footer">
            <div className="footerwrapper">
              <a href="mailto:preetkaur9016@gmail.com">preetkaur9016@gmail.com</a>
              <span>408.714.8425</span>
              <nav className="footer-nav">
              {
                routes.map((value, ids) => {
                  return (
                    <span>
                      <Link to={value.path} className="selected">{value.name}</Link>
                    </span>
                  )
                })
              }
                <a href="https://www.linkedin.com/in/preet-kaur-5b0288122" target="_blank"><ion-icon size="large" name="logo-linkedin"></ion-icon></a>
              </nav>
            </div>
          </div>
        );
    }
}
