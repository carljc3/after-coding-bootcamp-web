import React, { Component } from "react";
import API from "../utils/API";
import FavoriteButton from '../FavoriteButton'

class JobPostings extends Component {
  state = {
    JobPostings: []
  };

  componentDidMount() {
    this.loadJobPostings();
  }

  loadJobPostings = () => {
    API.getJobPostings()
      .then(res =>{
        console.log('getJobPostings res', res.data)
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
  favoriteThingHandler = (data,type)=>{
    if(type==='job'){
      //save to jobs array
    } else if(type==="video"){
      //save to video array
    }
      else if(type==="articles"){
      //save to articles array
      }
    console.log(data,type)
  }

  render() {
    return (
     <div>
         {
             this.state.JobPostings.map(posting =>{
                 return (
                <div className= "container">
                    <h3>Title: {posting.title}</h3>
                    <h1>How to Apply: {posting.apply_url} </h1>
                 <FavoriteButton data={posting} whereToSave="job" clickHandler={this.favoriteThingHandler}/>
                </div>)
             })
         }
     </div>
    );
  }
}

export default JobPostings;

// <i class="fa fa-star fa-2x"></i> <---filled

// <i class="fa fa-star-o fa-2x"></i> <---unfilled

// CDN <link rel="stylesheet" href="path/to/font-awesome/css/font-awesome.min.css"></link>