import React, { Component } from "react";
import API from "../utils/API";
import YouTubeVideoCard from '../YouTubeVideoCard'
import './style.css'
class YoutubePostings extends Component {
  state = {
    YoutubePosting: []
  };

  componentDidMount() {
    this.loadYoutube();
  }

  loadYoutube = () => {
    API.getYouTube()

      .then(res =>
        this.setState({ YoutubePosting: res.data.items })

      )
      .catch(err => console.log(err));
  };


  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  handleFormSubmit = event => {
    event.preventDefault();

  };

  render() {
    return (
      <div className="youTubeFlex">
        {
          this.state.YoutubePosting.map(video => {
            //  return (
            // <div className= "container">
            //     <h3>Kind: {video.kind}</h3>
            //     <h1>E tag: {video.snippet.channelId} </h1>
            // </div>)
            return <YouTubeVideoCard videoId={video.id.videoId} />
          })

        }
      </div>
    );
  }
}

export default YoutubePostings;