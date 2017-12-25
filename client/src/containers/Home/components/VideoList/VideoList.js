import React from 'react';
import { Link } from 'react-router-dom';
import Video  from '../Video';
 
const VideosList = ({ videos }) => (
  <div>
    <div className="row">
      {   
        videos
          // Videos are shown only when converted === true
          .filter(video => video.converted)
          .map((video, i) => <Video key={i} {...video} />)
      }
    </div>
    <hr />
  </div>
);
 
export default VideosList;