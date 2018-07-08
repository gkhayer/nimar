import React from 'react';
import './memories.css';
import {memories} from '../../data';
import Pagination from '../../component/pagination';

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
        {
          this.state.pageOfItems.map((item, id) => {
            return (
              <div key ={`memories${id}`} className="image-container">
                <div className="memories-images" style={{backgroundImage: `url(${item.image})`}} alt={item.timeline}/>
              </div>
            )
          })
        }
        </div>
        <div className="pagination">
          <Pagination items={this.state.galleryItems} onChangePage={this.onChangePage} />
        </div>
      </div>
    )
  }
}