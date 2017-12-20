import React, { Component } from 'react';
import PropTypes from 'prop-types';

import './Media.less';

export default class Media extends Component {
  render() {
    return (
      <video id="videoPlayer" controls>
        <source src="/auth/signin" type="video/mp4" />
      </video>
    );
  }
}

