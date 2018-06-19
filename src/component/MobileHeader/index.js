import React from 'react';
import {routes} from '../../data';
import { Link } from 'react-router-dom';
import './MobileHeader.css';

export default class MobileHeader extends React.Component {
  constructor(props) {
    super(props);
    this.state = {show: false};
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick = () => {
    const {show} = this.state;
    this.setState({show : !show})
  }

    render(){
      return (
        <div className="mobileheader">
          <i className="material-icons menu" onClick={this.handleClick}>reorder</i>
          {this.state.show && <ListItems />}
        </div>
      );
    }
}

class ListItems extends React.Component{
  render(){
      return(
        <div className="vertical-menu">
          <ul>
          {
            routes.map((value, idy) => {
              return (
                <li key={`mobileroute${idy}`}>
                  <Link to={value.path} className="selected">{value.name}</Link>
                </li>
              )
            })
          }
          </ul>
        </div>
      )
  }
}
