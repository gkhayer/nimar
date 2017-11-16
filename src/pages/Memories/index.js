import React from 'react';
import {memories} from '../../data';
import './memories.css';

export default class Memories extends React.Component {
  render() {
    return(
      <div className="memories" id="memories">
        <p>Memories</p>
        <div className="memories-container">
          <div className="mdl-grid">
          {
            memories.map((value, id) => {
              return (
                <div key ={`memories${id}`} className="mdl-cell mdl-cell--6-col">
                  <img className="memories-images" src={value.image}/>
                </div>
              )
            })
          }
          </div>
        </div>
      </div>
    )
  }
}