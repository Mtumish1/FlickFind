// pages/Home.


import React, { useEffect, useState } from 'react';
import MovieGrid from '../components/MovieGrid';
import SearchBar from '../components/SearchBar';
import  getTrendingMovies  from '../services/tmdb';

// Home page shows trending movies from TMDB and includes the search bar
const Home = () => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);

  // Fetch trending movies from TMDB API on component mount
  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getTrendingMovies(); // Call TMDB fetch function
        setMovies(data.results); // Store results
      } catch (error) {
        console.error('Failed to fetch movies:', error);
      } finally {
        setLoading(false); // Stop loading state
      }
    };

    fetchData();
  }, []);

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Search input bar */}
      <SearchBar />

      <div className="p-4">
        <h1 className="text-2xl font-semibold mb-4">Trending Movies</h1>

        {/* Show loading spinner or movie grid */}
        {loading ? (
          <p className="text-center text-gray-500">Loading...</p>
        ) : (
          <MovieGrid movies={movies} />
        )}
      </div>
    </div>
  );
};

export default Home;
