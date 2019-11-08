import axios from "axios";

const url = "http://localhost:3030"

export default {

  getJobPostings: function () {
    return axios.get(`${url}/api/savedJobs`);
  },
  saveJobPosting: function (article) {
    return axios.post(`${url}/api/savedJobs`, article)
  },
  getYouTubeVIDEOS: function () {
    return axios.get(`${url}/api/YouTubeVIDEOS`);
  },
  saveYouTubeVIDEOS: function (article) {
    return axios.post(`${url}/api/YouTubeVIDEOS`, article)
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
  getLoggedInUser: function () {
    return axios.get(`${url}/checkloggedinuser`, { withCredentials: true })
  },
  getSavedFavorites: function () {
    return axios.get(`${url}/savedfavorites`, { withCredentials: true })
  }
};