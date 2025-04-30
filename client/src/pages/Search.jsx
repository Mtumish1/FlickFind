// pages/Search.jsx

import React, { useState } from 'react';
import MovieGrid from '../components/MovieGrid';
import { searchMovies } from '../services/tmdb';

// The Search page allows users to search for movies using TMDB API
const Search = () => {
  const [query, setQuery] = useState('');
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);

  // Handles form submission to perform the search
  const handleSearch = async (e) => {
    e.preventDefault();
    if (!query.trim()) return;

    setLoading(true);
    try {
      const data = await searchMovies(query); // Call search API
      setMovies(data.results); // Update movie results
    } catch (error) {
      console.error('Search failed:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 p-4">
      <h1 className="text-2xl font-semibold mb-4">Search Movies</h1>

      {/* Search input form */}
      <form onSubmit={handleSearch} className="mb-6 flex gap-2">
        <input
          type="text"
          placeholder="Enter movie title..."
          className="w-full px-4 py-2 border border-gray-300 rounded-lg"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <button
          type="submit"
          className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700"
        >
          Search
        </button>
      </form>

      {/* Display results or loading message */}
      {loading ? (
        <p className="text-center text-gray-500">Searching...</p>
      ) : (
        <MovieGrid movies={movies} />
      )}
    </div>
  );
};

export default Search;
