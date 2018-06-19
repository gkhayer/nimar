import React from 'react';
import {home} from '../../data';
import './Home.css';

export default class Home extends React.Component {

  render() {
    return (
      <div className="home" id="home">
        <div className="wrapper">
          <div className="child picture">
            <div className="demo-card-wide mdl-card mdl-shadow--2dp">
              <div className="mdl-card__title mdl-card--expand"></div>
              <div className="mdl-card__actions">
                <span className="demo-card-image__filename">
                  <i style={{'color': '#ff00007a'}} className="material-icons">mood</i>
                  <i style={{'color': '#0080006e'}} className="material-icons">mood</i>
                  <i style={{'color': '#00b7ff'}} className="material-icons">mood</i>
                </span>
              </div>
            </div>
          </div>
          <div className="child textarea welcome-note">
            <p>Welcome</p>
            <p className="welcome-text">Hi, my name is Gagan K. Hayer.I design engaging websites.
            blah...blah....bhal....blah...blah....bhal....blah...blah....bhal....blah...
            you can learn more about me on <a href="/about">About</a> page.
          </p>
          </div>
        </div>

        <div className="notes-cards">
        {
          home.map((value, idx) => {
            return (
              <div key={`home${idx}`} className="flipcard">
                <div className="demo-card-square mdl-card mdl-shadow--2dp">
                  <div className="flip-container">
                    <div className="flipper">
                      <div className="front">
                        <img className="home-img" src={value.imagefront} alt={value.timeline}/>
                      </div>
                      <div className="back">
                        <button className="button myinfo"><a href={value.address}>{value.backbutton}</a></button>
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