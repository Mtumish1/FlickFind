// components/ReviewForm.jsx

import React, { useState } from 'react';

// This component allows users to submit a review for a movie
const ReviewForm = ({ onSubmit }) => {
  const [review, setReview] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (review.trim()) {
      onSubmit(review); // Call the parent function
      setReview(''); // Clear input after submit
    }
  };

  return (
    <form onSubmit={handleSubmit} className="mt-4">
      <textarea
        placeholder="Write your review..."
        className="w-full border border-gray-300 p-2 rounded"
        value={review}
        onChange={(e) => setReview(e.target.value)}
        rows={3}
      />
      <button
        type="submit"
        className="mt-2 bg-green-600 text-white px-4 py-2 rounded hover:bg-green-500"
      >
        Submit Review
      </button>
    </form>
  );
};

export default ReviewForm;
