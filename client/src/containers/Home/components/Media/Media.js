import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Player, ControlBar, ReplayControl, ForwardControl, CurrentTimeDisplay, TimeDivider, PlaybackRateMenuButton, VolumeMenuButton } from 'video-react';

import "../../../../../node_modules/video-react/dist/video-react.css"
import './Media.less';

export default class Media extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <Player playsInline poster="/assets/poster.png">
          <source src="http://127.0.0.1/123/Liveshare/Animation/%E6%88%91%E7%9A%84%E6%BB%91%E6%9D%BF%E9%9E%8B.mp4" />
          <ControlBar>
            <ReplayControl seconds={10} order={1.1} />
            <ForwardControl seconds={30} order={1.2} />
            <CurrentTimeDisplay order={4.1} />
            <TimeDivider order={4.2} />
            <PlaybackRateMenuButton
              rates={[5, 2, 1, 0.5, 0.1]}
              order={7.1}
            />
            <VolumeMenuButton />
          </ControlBar>
        </Player>
      </div>
    );
  }
}

