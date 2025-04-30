import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getMovieDetails } from '../services/tmdb';
import ReviewForm from '../components/ReviewForm';

// MovieDetails page: show full info for selected movie
const MovieDetails = () => {
  const { id } = useParams(); // Movie ID from URL
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    const fetchDetails = async () => {
      try {
        const data = await getMovieDetails(id);
        setMovie(data);
      } catch (error) {
        console.error('Failed to fetch movie details:', error);
      }
    };

    fetchDetails();
  }, [id]);

  if (!movie) return <p className="p-4">Loading movie details...</p>;

  return (
    <div className="p-4 max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-2">{movie.title}</h1>
      <p className="mb-4 text-gray-600">{movie.overview}</p>
      <img
        src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
        alt={movie.title}
        className="mb-4 rounded"
      />
      <p><strong>Release Date:</strong> {movie.release_date}</p>
      <p><strong>Rating:</strong> {movie.vote_average} / 10</p>

      {/* Review Form Component */}
      <div className="mt-6">
        <ReviewForm movieId={id} />
      </div>
    </div>
  );
};

export default MovieDetails;
