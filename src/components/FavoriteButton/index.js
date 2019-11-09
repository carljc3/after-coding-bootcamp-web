import React from 'react'
import Axios from "axios";

export default class FavoriteButton extends React.Component {

  state = {
    black: false,
  }

  handleAnotherClick = () => {
    let postBody = {
      title: this.props.title,
      link: this.props.link,
      user: this.props.user
    }
    Axios.post("http://localhost:3030/api/savedJobs", postBody)
    this.setState({
      black: !this.state.black
    })
    Axios.post("http://localhost:3030/api/favoriteVideos", postBody)
    this.setState({
      black: !this.state.black
    })
  }

  favoriteThingHandler = (data, type) => {
    if (type === 'job') {
      //save to jobs array
      this.setState({ black: !this.state.black })
    } else if (type === "video") {
      //save to video array
      this.setState({ black: !this.state.black })
      console.log(data, type)
    }
  }




  render() {
    return (
      <button className={this.state.black ? "blackButton" : "whiteButton"} onClick={this.handleAnotherClick}>
        {this.state.black ? <i className="fa fa-star fa-2x"> Save</i> : <i className="fa fa-star-o fa-2x"> Save</i>}
      </button>
    )
  }
}


// <i class="fa fa-star fa-2x"></i> <---filled

// <i class="fa fa-star-o fa-2x"></i> <---unfilled

