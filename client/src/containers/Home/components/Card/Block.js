import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './Block.less';

export default class Block extends Component {
  static propTypes = {
    name: PropTypes.string,
    description: PropTypes.string,
    img: PropTypes.string,
    demoUrl: PropTypes.string,
    repoUrl: PropTypes.string,
  }
  render() {
    const {
      name,
      description,
      img,
      demoUrl,
      repoUrl,
      goVideo,
      VideoId
    } = this.props;
    const bgStyle = {
      backgroundImage: `URL("${img}")`
    };
    return (
      <div className="col s12 m6 l3">
        <div className="card">
          <div className="card-image waves-effect waves-block waves-light">
            <a data-fancybox href="https://www.youtube.com/watch?v=_sI_Ps7JSEk">
              <img src={img} alt="#" />
            </a>
          </div>
          <div className="card-content">
            <span className="card-title activator grey-text text-darken-4">{name}<i className="material-icons right">more_vert</i></span>
          </div>
          <div className="card-reveal">
            <span className="card-title grey-text text-darken-4">{name}<i className="material-icons right">close</i></span>
            <p>{description}</p>
          </div>
        </div>
      </div>
    );
  }
}
