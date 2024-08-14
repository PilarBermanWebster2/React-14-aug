import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "../UpcomingMoviesSlider.css"; // Pastikan path ini sesuai

const UpcomingMoviesSlider = ({ movies }) => {
  return (
    <div className="swiper-container">
      <Swiper
        spaceBetween={10} // Jarak antar slide
        slidesPerView={4} // Jumlah slide yang ditampilkan dalam satu layar
        navigation // Menambahkan navigasi
        pagination={{ clickable: true }} // Menambahkan pagination
        breakpoints={{
          640: {
            slidesPerView: 1, // 1 slide pada layar kecil
          },
          768: {
            slidesPerView: 2, // 2 slide pada layar medium
          },
          1024: {
            slidesPerView: 4, // 4 slide pada layar besar
          },
        }}
      >
        {movies.map((movie) => (
          <SwiperSlide key={movie.title}>
            <div className="movie-card">
              <img
                src={movie.imageUrl}
                alt={movie.title}
                className="movie-image"
              />
              <div className="movie-info">
                <h3>{movie.title}</h3>
                <p>Release Date: {movie.releaseDate}</p>
                <p>{movie.bookingInfo}</p>
                <a href={`/booking/${movie.title}`} className="book-now-button">
                  Book Now
                </a>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default UpcomingMoviesSlider;
