import React from 'react';
import './Contact.css';

export default class Contact extends React.Component {
  render() {
    return (
      <div className="contact">
        <div className="headings">Contact Information</div>
        <div className="information">
          <div className="row">
            <div className="col col1">First Name</div>
            <div className="col col2">Gagan K. Hayer</div>
          </div>
          <div className="row">
            <div className="col col1">Email</div>
            <div className="col col2">ghayer@itemnm.com</div>
          </div>
        </div>
      </div>
    )
  }
}