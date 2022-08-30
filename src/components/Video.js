import React, { useState } from "react";
import YouTube from "react-youtube";
import got from "../image/got.jpg";
import Select from "./content/Select";
import { BsFillPlayFill } from "react-icons/bs";
import { Swiper, SwiperSlide } from "swiper/react";
import { getTrailerKey } from "../redux/Slices/videoSlice";

import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper";
import { useDispatch, useSelector } from "react-redux";

function Video() {
  const [isShown, setIsShown] = useState(false);
  const [filmName, setFilmName] = useState("");
  const popMovie = useSelector((state) => state.popMovie.popMovie);
  const opts = {
    height: "210",
    width: "370",
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 1,
    },
  };
  const dispatch = useDispatch();

  function setvideo(MovieId) {
    console.log(MovieId);
    dispatch(getTrailerKey(MovieId));
  }

  const videoUrl = useSelector((state) => state.trailer.videoUrl);
  console.log(videoUrl);
  return (
    <div className="">
      <div className="w-full h-[380px] mb-[400px] relative  ">
        <div className="w-full h-full ">
          <div className="w-full h-full ">
            <img className="w-full h-full object-cover " src={got} />
          </div>
          <div className="w-full h-full absolute top-0 left-0 poster">
            <div className="ml-8">
              <div className=" relative z-10 mt-6  ">
                <Select
                  slectionInfo={{
                    title: "Latest Trailers",
                    options: ["movie", "tv"],
                  }}
                />
              </div>
              <div className="mt-8">
                <Swiper
                  scrollbar={true}
                  loop={true}
                  slidesPerView={1.5}
                  spaceBetween={15}
                  pagination={{
                    clickable: true,
                  }}
                  className="mySwiper"
                >
                  {popMovie.map((film) => (
                    <SwiperSlide>
                      <div className="w-full h-full relative ">
                        <img
                          className="w-full h-full object-cover rounded-xl "
                          src={`http://image.tmdb.org/t/p/w1280${film.backdrop_path}`}
                        />
                        <div className="absolute top-0 bottom-0 right-0 left-0 flex items-center justify-center ">
                          <BsFillPlayFill
                            onClick={() => {
                              setIsShown(!isShown);
                              setFilmName(film.id);
                              setvideo(film.id);
                            }}
                            style={{
                              width: "80px",
                              height: "80px",
                              color: "white",
                            }}
                          />
                        </div>
                      </div>
                      <div className="flex justify-center mt-4 text-white text-[16px] font-bold  ">
                        <h1>{film.original_title}</h1>
                      </div>
                    </SwiperSlide>
                  ))}
                </Swiper>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        onClick={() => setIsShown(!isShown)}
        className={` ${
          isShown ? "block" : "hidden"
        } fixed overflow-hidden top-0 bottom-0 right-0 left-0   bg-[#032541f2] z-50 `}
      >
        <div className="flex flex-col items-center px-2 justify-center mb-[300px] fixed top-1/2 left-[calc(0.5_*(100vw_-_370px))]  bottom-0">
          <YouTube videoId={isShown ? videoUrl : ""} opts={opts} />
        </div>
      </div>
    </div>
  );
}

export default Video;
