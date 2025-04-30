// services/tmdb.js

import axios from 'axios';

const API_KEY = import.meta.env.VITE_TMDB_API_KEY;
const BASE_URL = 'https://api.themoviedb.org/3';

// Get trending movies
export const getTrendingMovies = async () => {
  const response = await axios.get(`${BASE_URL}/trending/movie/week`, {
    params: {
      api_key: API_KEY,
    },
  });

  return response.data;
};
