// App.jsx or another component
import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import MovieList from "./components/MovieList";
import MovieBooking from "./components/MovieBooking";
import Navbar from "./components/Navbar";
import Login from "./components/Login";
import Register from "./components/Register";
import UpcomingMoviesCarousel from "./components/UpcomingMoviesCarousel"; // Import the carousel component

const movies2024 = [
  {
    title: "Avatar 3",
    releaseDate: "December 20, 2024",
    imageUrl: "https://picsum.photos/200/300",
    bookingInfo: "Tickets available soon. Check back later!",
  },
  // Add other movie objects
];

const App = () => {
  const [category, setCategory] = useState("All");
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const filteredMovies = movies2024.filter((movie) => {
    if (category === "All") return true;
    const month = movie.releaseDate.split(" ")[0];
    return month === category;
  });

  return (
    <Router>
      <Navbar
        setCategory={setCategory}
        isAuthenticated={isAuthenticated}
        setIsAuthenticated={setIsAuthenticated}
      />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <UpcomingMoviesCarousel movies={filteredMovies} />
              {!isAuthenticated ? (
                <Login setIsAuthenticated={setIsAuthenticated} />
              ) : (
                <MovieList movies={filteredMovies} />
              )}
            </>
          }
        />
        <Route
          path="/register"
          element={<Register setIsAuthenticated={setIsAuthenticated} />}
        />
        <Route
          path="/booking/:title"
          element={
            isAuthenticated ? (
              <MovieBooking movies={movies2024} />
            ) : (
              <Login setIsAuthenticated={setIsAuthenticated} />
            )
          }
        />
      </Routes>
    </Router>
  );
};

export default App;
