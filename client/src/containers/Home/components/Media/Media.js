import React, { Component } from 'react';
import PropTypes from 'prop-types';

import './Media.less';

export default class Media extends Component {
  static propTypes = {
    youtubeUrl: PropTypes.string
  }

  render() {
    const {
      youtubeUrl
    } = this.props;
    return (
      <div className="video-container">
        <iframe width="853" height="480" src={`${youtubeUrl}`}/>
      </div>
    );
  }
}

