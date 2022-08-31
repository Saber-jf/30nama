import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/scrollbar";

import "swiper/css/pagination";
import { Pagination } from "swiper";
import { Scrollbar } from "swiper";

function SmallSlider({ value }) {
  return (
    <div className="w-full">
      <h1 className="my-5 mx-5 text-[18px] font-bold">Top Billed Cast</h1>
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
        spaceBetween={10}
        pagination={{
          clickable: true,
        }}
        scrollbar={{
          hide: false,
        }}
        modules={[Scrollbar]}
        className="mySwiper"
      >
        {value.cast?.map(
          (cast) =>
            cast.profile_path && (
              <SwiperSlide>
                <div className=" rounded-2xl overflow-hidden ">
                  <img
                    className="rounded-2xl"
                    src={`http://image.tmdb.org/t/p/w1280${cast.profile_path}`}
                  />
                  <div className="px-4 py-6 text-[14px] md:text-[18px] ">
                    <h1 className="font-bold">{cast.original_name}</h1>
                    <h1 className="">{cast.character}</h1>
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
