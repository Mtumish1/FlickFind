import axios from 'axios';

// Create a reusable axios instance with default TMDB base URL
const api = axios.create({
  baseURL: 'https://api.themoviedb.org/3',
});

export default api;
