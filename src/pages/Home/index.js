import React from 'react';
import {home} from '../../data';
import './Home.css';

export default class Home extends React.Component {
  render() {
    return (
      <div className="container" id="home">
        <div className="mdl-grid">
          <div className="mdl-cell mdl-cell--4-col">
            <div className="demo-card-wide mdl-card mdl-shadow--2dp">
              <div className="mdl-card__title mdl-card--expand"></div>
              <div className="mdl-card__actions">
                <span className="demo-card-image__filename">some text</span>
              </div>
            </div>
          </div>
          <div className="mdl-cell mdl-cell--8-col textarea">
            <p>You're my Happy</p>
            <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Mauris sagittis pellentesque lacus eleifend lacinia...
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Mauris sagittis pellentesque lacus eleifend lacinia...
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
          </div>
          </div>

          <div className="mdl-grid">
          {
            home.map((value, idx) => {
              return (
                <div key={`home${idx}`} className="mdl-cell mdl-cell--4-col">
                  <div className="demo-card-square mdl-card mdl-shadow--2dp">
                    <div className="mdl-card__title mdl-card--expand">
                      <i style={{'color': 'pink'}} className="material-icons heart">favorite</i>
                    </div>
                    <div className="flip-container" ontouchstart="this.classList.toggle('hover');">
                      <div className="flipper">
                        <div className="front">
                          <img className="home-img" src={value.imagefront} alt={value.timeline}/>
                        </div>
                        <div className="back">
                          <img className="home-img" src={value.imageback} alt={value.timeline}/>
                        </div>
                      </div>
                    </div>
                    <div className="mdl-card__supporting-text">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Aenan convallis.
                    </div>
                    <div className="mdl-card__actions mdl-card--border">
                    </div>
                  </div>
                </div>
            )})
          }
        </div>
      </div>
    )
  }
}