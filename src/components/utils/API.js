import axios from "axios";

const url = "http://localhost:3030"

export default {
  // Gets all jobs
  getJobPostings: function () {
    return axios.get(`${url}/api/jobPostings`);
  },
  saveJobPosting: function (article) {
    return axios.post(`${url}/api/savearticle`, article)
  },
  logMeIn: function (user) {
    return axios.post(`${url}/login`, user, { withCredentials: true })
  },
  signUp: function (user) {
    return axios.post(`${url}/signup`, user, { withCredentials: true })
  },
  getYouTube: function () {
    return axios.get(`${url}/api/YoutubeVideos`);
  },
<<<<<<< HEAD
  getLoggedInUser: function () {
    return axios.get(`${url}/checkloggedinuser`, { withCredentials: true })
  },
  getSavedFavorites: function () {
    return axios.get(`${url}/savedfavorites`, { withCredentials: true })
  }
};
=======
  getLoggedInUser:function(){
    return axios.get(`${url}/checkloggedinuser`,{withCredentials:true})
  }
 
};

>>>>>>> 1e32bce4c55f7baad1f33e8605cc15d49bb14765
