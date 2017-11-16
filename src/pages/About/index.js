import React from 'react';

export default class About extends React.Component {
  render() {
    return(
      <div className="container" id="about">
      <p>About us</p>
      <ul className="demo-list-item mdl-list">
      <li className="mdl-list__item">
        <span className="mdl-list__item-primary-content">
          x
        </span>
      </li>
      <li className="mdl-list__item">
        <span className="mdl-list__item-primary-content">
          y
        </span>
      </li>
      <li className="mdl-list__item">
        <span className="mdl-list__item-primary-content">
          z
        </span>
      </li>
    </ul>
      </div>
    )
  }
}