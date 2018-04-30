// show multiple video_list_item
import React from 'react';
import VideoListItem from './video_list_item';

// create video list using Array.map through videos array passed from index.js
const VideoList = (props) => {
  // Cycle through videos array and store into videoItems
  const videoItems = props.videos.map((video) => {
    return <VideoListItem video={video} />
  })

  // display videoItems in a list
  return (
    <ul className="col-md-4 list-group">
      { videoItems }
    </ul>
  );
}

export default VideoList