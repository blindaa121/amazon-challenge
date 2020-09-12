import axios from 'axios';

const instance = axios.create({
  baseURL: "https://us-central1-challenge-b2d7f.cloudfunctions.net/api", // API (cloud function) URL
});

export default instance

// http://localhost:5001/challenge-b2d7f/us-central1/api