// Import React core library
import React from "react";
import Navbar from "./components/Navbar";
// Import components from react-router-dom for routing
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Import pages 
import Home from "./pages/Home";
import Search from "./pages/Search";
import MovieDetails from "./pages/MovieDetails";
import Login from "./pages/Login";
import Favorites from "./pages/Favorites";

function App() {
  return (
    // Router wraps the whole app to enable routing
    <Router>
      {/* Main app container */}
      <div className="min-h-screen bg-gray-100">
        
        {/* Include Navbar at the top of the page */}
        <Navbar />

        {/* Define routes for different pages */}
        <Routes>
          {/* Home page */}
          <Route path="/" element={<Home />} />

          {/* Search page */}
          <Route path="/search" element={<Search />} />

          {/* Movie details page with dynamic id */}
          <Route path="/movie/:id" element={<MovieDetails />} />

          {/* Login page */}
          <Route path="/login" element={<Login />} />

          {/* Favorites page (for logged-in users) */}
          <Route path="/favorites" element={<Favorites />} />
        </Routes>

      </div>
    </Router>
  );
}

// Export the App component to be used in main.jsx
export default App;
