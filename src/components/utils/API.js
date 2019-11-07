import axios from "axios";

const url = "http://localhost:3030"

export default {
  // Gets all jobs
  getJobPostings: function() {
    return axios.get(`${url}/api/jobPostings`);

  },
  logMeIn: function(user) {
    return axios.post(`${url}/login`,user,{withCredentials:true})
  },
  signUp: function(user) {
    return axios.post(`${url}/signup`,user,{withCredentials:true})  
  },
   getYouTube: function() {
    return axios.get(url+`/api/YoutubeVideos`);
  },
  getLoggedInUser:function(){
    return axios.get(`${url}/checkloggedinuser`,{withCredentials:true})
  }
};

};