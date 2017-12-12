import React, { Component } from 'react';
import PropTypes from 'prop-types';
import FlipCard from './components/FlipCard';
import Header2 from './components/Header/Header2';
import Footer from './components/Footer/Footer';
import Collapsible from './components/Collapsible/';
import member from './member.json';
import './Aboutus.less';

export default class Home extends Component {

  componentDidMount() {
    window.$(document).ready(() => {
      window.$("#owl-example").on('initialized.owl.carousel changed.owl.carousel refreshed.owl.carousel', (event) => {
      const carousel = event.relatedTarget;
      const element = event.target;
      const current = carousel.current();
        window.$('.owl-next', element).toggleClass('disabled', current === carousel.maximum());
        window.$('.owl-prev', element).toggleClass('disabled', current === carousel.minimum());
      }).owlCarousel({
          slideBy: 3,
          dots: false,
          nav: true,
          navText: [],
          margin: 10,
          responsiveClass: true,
          responsive: {
            0: {
              items: 1,
              nav: true
            },
            432: {
              items: 2,
              nav: false
            },
            769: {
              items: 3,
              nav: true,
              loop: false
            }
          }
      });
      window.$('#insert').on('click', (e) => {
        const owl = window.$("#owl-example").data('owlCarousel');
          owl.replace('<div class="item">NEW ONE</div><div class="item">NEW ONE</div><div class="item">NEW ONE</div><div class="item">NEW ONE</div><div class="item">NEW ONE</div><div class="item">NEW ONE</div><div class="item">NEW ONE</div>');
          owl.refresh();
      });
    });
  }

  render() {
    return (
      <div id="pageHome">
        <Header2 />
        <div className="profile owl-carousel owl-theme" id="owl-example">
          {
            member.map(memberData => <FlipCard className="item" {...memberData} />)
          }
        </div>
        <Collapsible />
        <Footer />
      </div>
    );
  }
}
