import React, { Component } from "react";
import API from "../utils/API";
import YouTube from 'react-youtube';
// //--------------------------------------------------------

// export default class YouTubeVIDEOS extends React.Component {
//   state = {
//     loading: true
//   };
  
//   async componentDidMount() {
//     const url = "https://www.googleapis.com/youtube/v3";
//     const response = await fetch(url);
//     const data = await response.json();
//     this.setState({ video: data.results[0], loading: false })
//     console.log(data.results[0]);
//   }

//   render() {
//     if (this.state.loading) {
//     return (
//     <div>this video is loading... </div>
//     )

//     if (!this.state.video) {
//       return <div>video not found...</div>
//     }
      
//   }
// }

// //------------------------------------------------------

class YouTubeVIDEOS extends Component {
  state = {
    YouTubeVIDEOS: []
  };

  componentDidMount() {
    this.loadYouTubeVIDEOS();
  }

  loadYouTubeVIDEOS = () => {
    API.getYouTubeVIDEOS()
      .then(res => {
        console.log('getYouTubeVIDEOS res', res)
        this.setState({ YouTubeVIDEOS: res.data.items})
      })
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
    console.log('YouTubeVIDEOS', this.state.YouTubeVIDEOS)
    const opts = {
      height: '390',
      width: '640',
      playerVars: { // https://developers.google.com/youtube/player_parameters
        autoplay: -1
      }
    };
    return (
     <div>
         {
             this.state.YouTubeVIDEOS.map(posting =>{
                 return (
                <div className= "container">
                 <YouTube
                    videoId={posting.id.videoId}
                    opts={opts} />
                    <h3> Title: {posting.snippet.title}</h3>
                    <h1> Discription: {posting.snippet.description} </h1>
                </div>)
             })
         }
     </div>
    );
  }
}
export default YouTubeVIDEOS;
