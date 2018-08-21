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
            </div>
          </div>
          <div className="child textarea welcome-note">
            <p>Welcome</p>
            <p className="welcome-text">Hi, my name is Gagan K. Hayer.I design engaging websites.You can learn more about me on <a href="/about">About</a> page.</p>
          </div>
        </div>

        <div className="notes-cards">
        {
          home.map((value, idx) => {
            return (
              <div key={`home${idx}`} className="flipcard">
                <div className="demo-card-square mdl-card mdl-shadow--2dp">
                  <img className="home-img" src={value.imagefront} alt={value.timeline}/>
                  <a href={value.address} className="home-address"><span className="myinfo">{value.backbutton}</span></a>
                </div>
              </div>
          )})
        }
      </div>
    </div>
    )
  }
}