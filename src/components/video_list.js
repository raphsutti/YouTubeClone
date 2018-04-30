import React from 'react';
import VideoListItem from './video_list_item';

// create video list using Array.map through videos array
const VideoList = (props) => {
  const videoItems = props.videos.map((video) => {
    return <VideoListItem video={video} />
  })

  return (
    <ul className="col-md-4 list-group">
      {props.videos.length}
      { videoItems }
    </ul>
  );
}

export default VideoList