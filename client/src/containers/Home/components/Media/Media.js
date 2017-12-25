import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux'
import { Player, ControlBar, ReplayControl, ForwardControl, CurrentTimeDisplay, TimeDivider, PlaybackRateMenuButton, VolumeMenuButton } from 'video-react';
import * as actions from '../../../../actions';
import { fetchVideo } from '../../../../actions/videos'
import "../../../../../node_modules/video-react/dist/video-react.css"
import './Media.less';

class Media extends Component {
  constructor(props) {
    super(props);
  }
  
  render() {
    return (
      <div>
        <Player playsInline poster="/assets/poster.png">
          <source src="" />
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

function mapDispatchToProps(dispatch) {

  return bindActionCreators({ fetchVideo }, dispatch);
}

export default connect(null, mapDispatchToProps)(Media);