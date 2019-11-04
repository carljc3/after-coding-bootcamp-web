import React from 'react';
import logo from './logo.svg';
import './App.css';
import JobPostings from './components/jobPostings';
import YouTubeVIDEOS from './components/youtubeVideos';

function App() {
  return (
    <div className="App">
      <JobPostings></JobPostings>
      <YouTubeVIDEOS></YouTubeVIDEOS>
    </div>
  );
}

export default App;
