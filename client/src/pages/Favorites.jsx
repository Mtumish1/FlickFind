import React from 'react';
import { useAuth } from '../hooks/useAuth';
import MovieGrid from '../components/MovieGrid';

// For now, favorites are mocked – later you can connect to backend
const mockFavorites = [
  {
    id: '1234',
    title: 'Interstellar',
    poster_path: '/gEU2QniE6E77NI6lCU6MxlNBvIx.jpg',
  },
  {
    id: '5678',
    title: 'Inception',
    poster_path: '/9gk7adHYeDvHkCSEqAvQNLV5Uge.jpg',
  },
];

// Favorites page: shows movies the user has marked as favorite
const Favorites = () => {
  const { user } = useAuth();

  if (!user) {
    return (
      <div className="p-4 text-center">
        <p>Please log in to view your favorite movies.</p>
      </div>
    );
  }

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Your Favorites ❤️</h1>
      <MovieGrid movies={mockFavorites} />
    </div>
  );
};

export default Favorites;
