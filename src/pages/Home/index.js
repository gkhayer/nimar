import React from 'react';
import {home} from '../../data';
import './Home.css';

export default class Home extends React.Component {
  render() {
    return (
      <div className="home" id="home">
        <div className="welcome-note">
          <span>Welcome to my Website</span>
          <p className="welcome-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Mauris sagittis pellentesque lacus eleifend lacinia...
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Mauris sagittis pellentesque lacus eleifend lacinia...
          </p>
        </div>
        <div className="wrapper">
          <div className="child picture">
            <div className="demo-card-wide mdl-card mdl-shadow--2dp">
              <div className="mdl-card__title mdl-card--expand"></div>
              <div className="mdl-card__actions">
                <span className="demo-card-image__filename">some text</span>
              </div>
            </div>
          </div>
          <div className="child textarea">
            <p>You're my Happy</p>
            <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Mauris sagittis pellentesque lacus eleifend lacinia...
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Mauris sagittis pellentesque lacus eleifend lacinia...
                Lorem ipsum dolor sit amet
            </p>
          </div>
        </div>

        <div className="notes-cards">
        {
          home.map((value, idx) => {
            return (
              <div key={`home${idx}`} className="flipcard">
                <div className="demo-card-square mdl-card mdl-shadow--2dp">
                  <div className="mdl-card__title mdl-card--expand card-title">
                    <i style={{'color': 'pink'}} className="material-icons heart">favorite</i>
                  </div>
                  <div className="flip-container">
                    <div className="flipper">
                      <div className="front">
                        <img className="home-img" src={value.imagefront} alt={value.timeline}/>
                      </div>
                      <div className="back">
                        <img className="home-img" src={value.imageback} alt={value.timeline}/>
                      </div>
                    </div>
                  </div>
                  <div className="mdl-card__supporting-text quote">{value.quote}</div>
                  <div className="mdl-card__actions mdl-card--border"></div>
                </div>
              </div>
          )})
        }
      </div>
    </div>
    )
  }
}