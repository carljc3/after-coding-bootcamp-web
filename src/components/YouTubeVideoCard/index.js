import React from 'react'
import YouTube from 'react-youtube';
import './style.css'

export default function YouTubeCard(props) {
  const opts = {
    height: '200',
    width: '200'
  };
  return (

    <div className="YouTubeVideoCard" id="video">

      <YouTube videoId={props.videoId}opts={opts}/>
    </div>
  );
}
