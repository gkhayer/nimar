import React from 'react';
import './memories.css';
import {memories} from '../../data';
import Pagination from '../../component/Pagination';

export default class Memories extends React.Component {
  constructor() {
    super();
    this.onChangePage = this.onChangePage.bind(this);

    this.state = {
      galleryItems: memories,
      pageOfItems: []
    };
  }

  onChangePage(pageOfItems) {
    this.setState({ pageOfItems: pageOfItems });
  }

  render() {
    return(
      <div className="memories" id="memories">
        <div className="headings">Memories</div>
        <div className="memories-container">
          <div className="mdl-grid">
          {
            this.state.pageOfItems.map((item, id) => {
              return (
                <div key ={`memories${id}`} className="mdl-cell mdl-cell--3-col mdl-cell--2-col-phone">
                  <div className="memories-images" style={{backgroundImage: `url(${item.image})`}} alt={item.timeline}/>
                </div>
              )
            })
          }
          </div>
        </div>
        <div className="pagination">
          <Pagination items={this.state.galleryItems} onChangePage={this.onChangePage} />
        </div>
      </div>
    )
  }
}