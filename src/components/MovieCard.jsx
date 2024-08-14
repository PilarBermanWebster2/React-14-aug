// components/MovieCard.jsx
import React from "react";
import { Card, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

const MovieCard = ({ movie }) => {
  return (
    <Card style={{ width: "18rem" }}>
      <Card.Img variant="top" src={movie.imageUrl} />
      <Card.Body>
        <Card.Title>{movie.title}</Card.Title>
        <Card.Text>Release Date: {movie.releaseDate}</Card.Text>
        <Card.Text>{movie.bookingInfo}</Card.Text>
        <Link to={`/booking/${movie.title}`}>
          <Button variant="primary">Book Now</Button>
        </Link>
      </Card.Body>
    </Card>
  );
};

export default MovieCard;
