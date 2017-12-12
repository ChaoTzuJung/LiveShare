import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './FlipCard.less';

export default class FildCard extends Component {

  static propTypes = {
    name: PropTypes.String,
    title: PropTypes.String,
    photo: PropTypes.String,
    Introduction: PropTypes.String
  }

  componentDidMount() {
    this.carousel.addEventListener('mouseenter', () => {
      console.log('enter');
    });
    this.carousel.addEventListener('mouseleave', () => {
      console.log('leave');
    });
  }

  render() {
    return (
      <div className="container flipCard" ref={carousel => (this.carousel = carousel)}>
        <div className="front" style={{ backgroundImage: `url(${this.props.photo})` }}>
          <div className="inner">
            <p>{this.props.name}</p>
            <span>{this.props.title}</span>
          </div>
        </div>
        <div className="back">
          <div className="inner">
            <p>{this.props.Introduction}</p>
          </div>
        </div>
      </div>
    );
  }
}
