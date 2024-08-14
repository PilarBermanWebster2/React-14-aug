// src/components/LandingPage.jsx
import React from "react";
import { Link } from "react-router-dom";
import "../LandingPage.css"; // Pastikan file ini ada di direktori yang benar

const LandingPage = () => {
  return (
    <div className="landing-page">
      <header className="landing-header">
        <h1>Welcome to MovieApp</h1>
        <p>Your ultimate movie discovery platform</p>
        <Link to="/register" className="landing-button">
          Get Started
        </Link>
      </header>
      <section className="landing-info">
        <h2>Why Choose MovieApp?</h2>
        <div className="info-cards">
          <div className="info-card">
            <h3>Discover Movies</h3>
            <p>
              Explore a wide range of movies from various genres and release
              dates.
            </p>
          </div>
          <div className="info-card">
            <h3>Filter by Month</h3>
            <p>
              Find movies released in any month of the year using our intuitive
              filters.
            </p>
          </div>
          <div className="info-card">
            <h3>Join the Community</h3>
            <p>
              Register now to keep track of your favorite movies and get
              personalized recommendations.
            </p>
          </div>
        </div>
      </section>
      <footer className="landing-footer">
        <p>&copy; 2024 MovieApp. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default LandingPage;
