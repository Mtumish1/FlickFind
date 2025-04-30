// components/MovieCard.jsx

import React from 'react';
import { Link } from 'react-router-dom';

// This component displays a single movie's poster and title
const MovieCard = ({ movie }) => {
  return (
    <div className="bg-white shadow rounded overflow-hidden hover:scale-105 transition transform duration-200">
      {/* Link to the Movie Details page using the movie ID */}
      <Link to={`/movie/${movie.id}`}>
        <img
          src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
          alt={movie.title}
          className="w-full h-72 object-cover"
        />
        <div className="p-2">
          <h2 className="text-sm font-semibold truncate">{movie.title}</h2>
        </div>
      </Link>
    </div>
  );
};

export default MovieCard;
