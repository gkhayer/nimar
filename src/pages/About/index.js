import React from 'react';
import './About.css';

export default class About extends React.Component {
  render() {
    return(
      <div className="about mdl-grid" id="about">
        <div className="mdl-cell mdl-cell--12-col mdl-cell--4-col-phone">
          <div className="headings">About Me</div>
          <div className="about-text">
            <div>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Mauris sagittis pellentesque lacus eleifend lacinia...
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Mauris sagittis pellentesque lacus eleifend lacinia...
                Lorem ipsum dolor sit ametLorem ipsum dolor sit amet, consectetur adipiscing elit.
                Mauris sagittis pellentesque lacus eleifend lacinia...
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Mauris sagittis pellentesque lacus eleifend lacinia...
                Lorem ipsum dolor sit amet
            </div>
            <div style={{textAlign: 'center'}}>
              <span>Education</span>
            </div>
          </div>
        </div>
      </div>
    )
  }
}