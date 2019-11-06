import axios from "axios";

const url = "http://localhost:3030"

export default {
  // Gets all jobs
  getJobPostings: function() {
    return axios.get(`${url}/api/jobPostings`);
  },
  getYouTubeVIDEOS: function() {
    return axios.get(`${url}/api/YouTubeVIDEOS`);
  }

};