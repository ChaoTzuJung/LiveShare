import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types';
import './Block.less';

export default class Block extends Component {
  static propTypes = {
    history: PropTypes.object,
    name: PropTypes.string,
    description: PropTypes.string,
    img: PropTypes.string,
    demoUrl: PropTypes.string,
    repoUrl: PropTypes.string,
  }

  goVideo = (name) => {
    this.props.history.push(`/course/${name}`);
  }

  render() {
    const {
      key,
      name,
      description,
      img,
      demoUrl,
      videoUrl,
      repoUrl
    } = this.props;

    const bgStyle = { backgroundImage: `URL("${img}")`};
    
    return (
      <div className="col s12 m6 l3">
        <div className="card">
          <div className="card-image waves-effect waves-block waves-light">
            <Link to={`/course/${videoUrl}`}>
              <img src={img} alt="#" />
            </Link>
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
