import React, { Component } from 'react';

import './Slider.less';
import Banner01 from '../../../../static/images/banner01.png';
import Banner02 from '../../../../static/images/banner02.png';
import Banner03 from '../../../../static/images/banner03.png';
import Banner04 from '../../../../static/images/banner04.png';

export default class Slider extends Component {

  componentDidMount() {
    window.$(document).ready(() => {
      window.$('.owl-carousel').owlCarousel({
        loop: true,
        nav: true,
        items: 1,
        navText: [],
        autoplay: true,
        autoplaySpeed: 1000,
        smartSpaeed: 500
      });
    });
  }

  render() {
    return (
      <div className="wrapper">
        <div className="jumbotron owl-carousel owl-theme">
          <div className="jumbotron__item">
            <div className="image" style={{backgroundImage: `url(${Banner01})`}} />
          </div>
          <div className="jumbotron__item">
            <div className="image" style={{backgroundImage: `url(${Banner02})`}} />
          </div>
          <div className="jumbotron__item">
            <div className="image" style={{backgroundImage: `url(${Banner03})`}} />
          </div>
          <div className="jumbotron__item">
            <div className="image" style={{backgroundImage: `url(${Banner04})`}} />
          </div>
        </div>
      </div>
    );
  }
}

