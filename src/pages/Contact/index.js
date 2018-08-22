import React from 'react';
import './Contact.css';
import Maps from '../../component/Map';
import Divider from '@material-ui/core/Divider';

export default class Contact extends React.Component {
  render() {
    return (
      <div className="contact">
        <div className="headings">Contact</div>
        <div className="information">
          <div className="row">
            <span>First Name</span>
            <span>Gagan K. Hayer</span>
          </div>
          <div className="row">
            <span>Email</span>
            <span>preetkaur9016@gmail.com</span>
          </div>
          <div className="row">
            <span>Location</span>
            <span>Roseville, California, 95747</span>
          </div>
        </div>
        <Divider />
        <div className="mapStyle" style={{ width: '100%', height: '500px', alignItems: 'center' }}>
          <Maps/>
        </div>
      </div>
    )
  }
}