import React, { useRef, useState } from "react";
import card from "../../image/card.jpg";
import Rating from "../Rating";
import { Link } from "react-router-dom";
import MovieCard from "./MovieCard";
import { Scrollbar } from "swiper";

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { Pagination } from "swiper";

function MovieCardSlider({ filmData, slectionInfo }) {
  return (
    <div>
      <Swiper
        breakpoints={{
          300: {
            // width: 576,
            slidesPerView: 3.2,
          },
          768: {
            // width: 768,
            slidesPerView: 5.5,
          },
        }}
        scrollbar={true}
        loop={true}
        spaceBetween={10}
        scrollbar={{
          hide: false,
        }}
        modules={[Scrollbar]}
        pagination={{
          clickable: true,
        }}
        className="mySwiper"
      >
        {filmData?.map((film) => (
          <SwiperSlide>
            <MovieCard film={film} slectionInfo={slectionInfo} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default MovieCardSlider;
