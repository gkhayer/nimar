import React from 'react';
import './About.css';
import Resume from '../../component/Resume';

export default class About extends React.Component {
  render() {
    return(
      <div className="about" id="about">
        <div className="headings">About Me</div>
        <div className="about-text">
          <div></div>
          <div style={{textAlign: 'center'}}>
            <h4>Education</h4>
          </div>
          <div className="resume-wrapper">
            <Resume />
          </div>
        </div>
      </div>
    )
  }
}