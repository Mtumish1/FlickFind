// components/MovieGrid.jsx

import React from 'react';
import MovieCard from './MovieCard';

// This component renders a grid of movies using MovieCard
const MovieGrid = ({ movies }) => {
  if (!movies?.length) {
    return <p className="text-center mt-10 text-gray-500">No movies found.</p>;
  }

  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 p-4">
      {movies.map((movie) => (
        <MovieCard key={movie.id} movie={movie} />
      ))}
    </div>
  );
};

export default MovieGrid;
