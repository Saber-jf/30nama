import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper";

function SmallSlider({ value }) {
  return (
    <div className="w-full h-[100px] mb-56">
      <h1 className="my-5 mx-5 text-[18px] font-bold">Top Billed Cast</h1>
      <Swiper
        slidesPerView={3}
        spaceBetween={10}
        pagination={{
          clickable: true,
        }}
        className="mySwiper"
      >
        {value.cast?.map(
          (cast) =>
            cast.profile_path && (
              <SwiperSlide>
                <div className="border-2 shadow-xl rounded-2xl overflow-hidden h-[350px] ">
                  <img
                    src={`http://image.tmdb.org/t/p/w1280${cast.profile_path}`}
                  />
                  <div className="px-2">
                    <h1 className="font-bold">{cast.original_name}</h1>
                    <h1 className="text-[18px]">{cast.character}</h1>
                  </div>
                </div>
              </SwiperSlide>
            )
        )}
      </Swiper>
    </div>
  );
}

export default SmallSlider;
