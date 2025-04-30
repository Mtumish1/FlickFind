
import React from "react";
import Navbar from "./components/Navbar";
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
      <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/search" element={<Search />} />
        <Route path="/movie/:id" element={<MovieDetails />} />
        <Route path="/login" element={<Login />} />
        <Route path="/favorites" element={<Favorites />} />
      </Routes>
    </>
    </Router>
  );
}

// Export the App component to be used in main.jsx
export default App;
