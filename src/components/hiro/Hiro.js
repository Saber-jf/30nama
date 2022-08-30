import React, { useEffect, useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper";
import { useDispatch, useSelector } from "react-redux";
import test1 from "../../image/test1.jpg";
import { upcomingFilms } from "../../redux/Slices/getHiroSlice";
import { Link } from "react-router-dom";

function Hiro() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(upcomingFilms());
  }, []);

  const upcoming = useSelector((state) => state.upcomings.upcoming);
  console.log(upcoming);

  return (
    <>
      <Swiper
        loop={true}
        navigation={true}
        modules={[Navigation]}
        className="mySwiper"
      >
        {upcoming.map((film) => (
          <SwiperSlide>
            <div>
              <div
                className="w-full border-2  relative
        "
              >
                <div className="w-full h-[500px] lg:h-[800px]  ">
                  <img
                    src={`http://image.tmdb.org/t/p/w1280${film.backdrop_path}`}
                    className="w-full h-full object-cover  "
                  />
                  <div className="w-full h-full absolute top-0 overly-gradiant flex flex-col justify-end ">
                    <div className="mb-10 ml-10 text-white space-y-4  ">
                      <h1>{film.original_title}</h1>

                      <div>
                        <Link to={`/${film.id}`}>
                          <button className="bg-[#2996c2] h-[25px] w-[80px] rounded-xl mr-4">
                            Details
                          </button>
                        </Link>

                        <button className="  w-[80px] border-2 h-[25px] rounded-xl">
                          + my List
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}

export default Hiro;
