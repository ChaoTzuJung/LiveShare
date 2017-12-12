import React, { Component } from 'react';
import PropTypes from 'prop-types';
import FontAwesome from 'react-fontawesome';
import * as Scroll from 'react-scroll';
import Card from '../../components/Card/Card';
import webJson from '../../webData.json';

import './DetailPage.less';

const scroll = Scroll.animateScroll;

export default class DetailPage extends Component {
  static propTypes = {
    match: PropTypes.object,
  }

  componentDidMount() {
    this.page.addEventListener('scroll', (e) => {
      const menuDom = document.getElementsByClassName('menu')[0];

      if (this.page.scrollTop > 0) {
        menuDom.classList.add('bg-nav-more');
      } else {
        menuDom.classList.remove('bg-nav-more');
      }
    });
  }
  handleScrollUp = () => {
    scroll.scrollToTop(this.page);
  }

  render() {
    const { type } = this.props.match.params;
    const matchObject = webJson.find(item => item.key === type);

    return (
      <div ref={page => (this.page = page)} className="detailPage">
        <p>數量: {matchObject.dataList.length}</p>
        <div className="detailContainer">
          {
            matchObject.dataList.map(
              data =>
                <Card
                  {...data}
                />
            )
          }
          <div onClick={this.handleScrollUp} className="scrollDown bounce">
            <FontAwesome name="chevron-up" />
          </div>
        </div>
      </div>
    );
  }
}
