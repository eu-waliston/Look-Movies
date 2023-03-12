import React from "react";
import "./MoviesSwiper.css";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination } from "swiper";

const MoviesSwiper = () => {
  return (
    <>
      <Swiper
        slidesPerView={3}
        spaceBetween={10}
        pagination={{
          clickable: true,
        }}
        breakpoints={{
          375: {
            slidesPerView: 1,
            spaceBetween: 20,
          },
          360: {
            slidesPerView: 1,
            spaceBetween: 20,
          },
          640: {
            slidesPerView: 3,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 3,
            spaceBetween: 40,
          },
          991: {
            slidesPerView: 1,
            spaceBetween: 50,
          },
          1024: {
            slidesPerView: 1,
            spaceBetween: 50,
          },
          1200: {
            slidesPerView: 3,
            spaceBetween: 50,
          },
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img
            src={require("../img/poster-1.jpg")}
            alt="poster"
            className="poster__image"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src={require("../img/poster-2.jpg")}
            alt="poster"
            className="poster__image"
          />
        </SwiperSlide>
        <SwiperSlide>
          {" "}
          <img
            src={require("../img/poster-3.jpg")}
            alt="poster"
            className="poster__image"
          />
        </SwiperSlide>
        <SwiperSlide>
          {" "}
          <img
            src={require("../img/poster-4.jpg")}
            alt="poster"
            className="poster__image"
          />
        </SwiperSlide>
        <SwiperSlide>
          {" "}
          <img
            src={require("../img/poster-5.jpg")}
            alt="poster"
            className="poster__image"
          />
        </SwiperSlide>
        <SwiperSlide>
          {" "}
          <img
            src={require("../img/poster-6.jpg")}
            alt="poster"
            className="poster__image"
          />
        </SwiperSlide>
        <SwiperSlide>
          {" "}
          <img
            src={require("../img/poster-7.jpg")}
            alt="poster"
            className="poster__image"
          />
        </SwiperSlide>
        <SwiperSlide>
          {" "}
          <img
            src={require("../img/poster-8.jpg")}
            alt="poster"
            className="poster__image"
          />
        </SwiperSlide>
        <SwiperSlide>
          {" "}
          <img
            src={require("../img/poster-9.jpg")}
            alt="poster"
            className="poster__image"
          />
        </SwiperSlide>
        <SwiperSlide>
          {" "}
          <img
            src={require("../img/poster-10.jpg")}
            alt="poster"
            className="poster__image"
          />
        </SwiperSlide>
      </Swiper>
    </>
  );
};

export default MoviesSwiper;
