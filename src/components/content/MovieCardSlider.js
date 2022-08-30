import React, { useRef, useState } from "react";
import card from "../../image/card.jpg";
import Rating from "../Rating";
import { Link } from "react-router-dom";
import MovieCard from "./MovieCard";

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper";

function MovieCardSlider({ filmData, slectionInfo }) {
  return (
    <Swiper
      scrollbar={true}
      loop={true}
      slidesPerView={2.5}
      spaceBetween={15}
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
  );
}

export default MovieCardSlider;
