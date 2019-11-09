import React, { Component } from "react";
import API from "../utils/API";
import FavoriteButton from '../FavoriteButton'
import "./style.css";
import Axios from "axios";

class JobPostings extends Component {
  state = {
    JobPostings: [],
    black: true,
  };

  componentDidMount() {
    this.loadJobPostings();
  }

  loadJobPostings = () => {
    API.getJobPostings()
      .then(res => {
        console.log('getJobPostings res', res.data)
        this.setState({
          JobPostings: res.data.listings.listing

        })
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
    this.props.clickHandler(this.props.data, this.props.whereToSave);
    event.preventDefault();
    Axios.post("/api/savearticle")
  };

  postINFORMATION = (info) => {


  }

  render() {
    let btn_class = this.state.black ? "blackButton" : "whiteButton";
    return (
      <div className="JobPosting">
        {
          this.state.JobPostings.map(posting => {

            return (
              <div>
                <h3 className="JobTitle">{posting.title}</h3>
                <a className="Link" href={posting.apply_url}>Apply Here!</a>
                <FavoriteButton title={posting.title} link={posting.apply_url} user={this.state.user} />
              </div>

            )
          })
        }
      </div>
    );
  }
}

export default JobPostings;