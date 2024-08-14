// components/UpcomingMoviesCarousel.jsx
import React from "react";
import Carousel from "react-bootstrap/Carousel";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css"; // Ensure Bootstrap is included
import "../UpcomingMoviesCarousel.css"; // Import your custom styles

const UpcomingMoviesCarousel = ({ movies }) => {
  return (
    <Carousel>
      {movies.map((movie) => (
        <Carousel.Item key={movie.title}>
          <img
            className="d-block w-100"
            src={movie.imageUrl}
            alt={movie.title}
          />
          <Carousel.Caption>
            <h3>{movie.title}</h3>
            <p>Release Date: {movie.releaseDate}</p>
            <Link to={`/booking/${movie.title}`}>
              <button className="btn btn-primary">Book Now</button>
            </Link>
          </Carousel.Caption>
        </Carousel.Item>
      ))}
    </Carousel>
  );
};

export default UpcomingMoviesCarousel;
