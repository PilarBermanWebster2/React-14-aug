import React from "react";
import { useParams } from "react-router-dom";

const MovieBooking = ({ movies }) => {
  const { title } = useParams();
  const movie = movies.find(
    (movie) => movie.title === decodeURIComponent(title),
  );

  if (!movie) {
    return <div>Movie not found</div>;
  }

  return (
    <div className="movie-booking">
      <h2>{movie.title}</h2>
      <img
        src={movie.imageUrl}
        alt={movie.title}
        style={{ width: "300px", borderRadius: "10px" }}
      />
      <p>Release Date: {movie.releaseDate}</p>
      <p>{movie.bookingInfo}</p>
      <button>Book Now</button>
    </div>
  );
};

export default MovieBooking;
