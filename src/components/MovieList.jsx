// components/MovieList.jsx
import React from "react";
import MovieCard from "./MovieCard";
import { Container, Row, Col } from "react-bootstrap";

const MovieList = ({ movies }) => {
  return (
    <Container>
      <Row>
        {movies.map((movie) => (
          <Col key={movie.title} xs={12} sm={6} md={4} lg={3} className="mb-4">
            <MovieCard movie={movie} />
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default MovieList;
