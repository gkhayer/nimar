import React from 'react';
import './memories.css';

export default class Memories extends React.Component {
  render() {
    return(
      <div className="memories" id="memories">
        <p>Memories</p>
        <div className="mdl-grid">
          <div className="mdl-cell mdl-cell--6-col">2</div>
          <div className="mdl-cell mdl-cell--4-col">2</div>
          <div className="mdl-cell mdl-cell--2-col">2</div>
          <div className="mdl-cell mdl-cell--6-col">2</div>
          <div className="mdl-cell mdl-cell--4-col">2</div>
          <div className="mdl-cell mdl-cell--2-col">2</div>
        </div>
      </div>
    )
  }
}