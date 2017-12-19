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
      <video id="videoPlayer" controls>
        <source src="/video" type="video/mp4" />
      </video>
    );
  }
}

