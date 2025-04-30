// components/SearchBar.jsx

import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

// This component provides a search input and navigates to the search results page
const SearchBar = () => {
  const [query, setQuery] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    // Navigate to search results only if the input is not empty
    if (query.trim()) {
      navigate(`/search?q=${encodeURIComponent(query.trim())}`);
      setQuery('');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex items-center justify-center p-4">
      <input
        type="text"
        placeholder="Search movies..."
        className="w-full max-w-lg px-4 py-2 border border-gray-300 rounded-l focus:outline-none"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <button
        type="submit"
        className="bg-blue-600 text-white px-4 py-2 rounded-r hover:bg-blue-500"
      >
        Search
      </button>
    </form>
  );
};

export default SearchBar;
