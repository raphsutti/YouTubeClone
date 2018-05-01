// From video list, create list item for each videos
import React from 'react';

// test return of VideoListItem
// {video} is the same as
// const video = props.video
const VideoListItem = ({video}) => {
  // console.log(video)
  // save url from current video object
  const imageUrl = video.snippet.thumbnails.default.url
  return (
  <li className="list-group-item">
    <div className="video-list media">
      
      <div className="media-left">
        <img className="media-object" src={imageUrl}/>
      </div>

      <div className="media-body">
        <div className="media-heading">{video.snippet.title}</div>
      </div>

          
    </div>
  </li>
  );
}

export default VideoListItem;