import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import Header from "../components/header/Header";
import { getTheFilm } from "../redux/Slices/singleFilmSlice";
import "react-circular-progressbar/dist/styles.css";
import Rating from "../components/Rating";
import { BsFillPlayFill } from "react-icons/bs";
import { getCast } from "../redux/Slices/singleFilmSlice";
import SmallSlider from "../components/SmallSlider";
import Footer from "../components/Footer";

function SingleFilm() {
  const { id } = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getTheFilm({ id }));
    dispatch(getCast({ id }));
  }, []);
  const theFilm = useSelector((state) => state.thefilm.theFilm);
  const casts = useSelector((state) => state.thefilm.theFilmCast);
  console.log(casts);
  console.log(theFilm);

  return (
    <>
      <Header />
      <div className="max-w-[1500px] mx-auto ">
        <div className="w-full relative ">
          <div className=" w-full ">
            <img
              className="w-full h-full object-cover "
              src={`http://image.tmdb.org/t/p/w1280${theFilm.backdrop_path}`}
            />
          </div>
          <div className="absolute top-0 h-full left-0 w-1/2  overly-gradiant-2 flex items-center">
            <img
              className="w-[50%] ml-4 rounded-2xl "
              src={`http://image.tmdb.org/t/p/w1280${theFilm.poster_path}`}
            />
          </div>
        </div>

        <div className="flex flex-col items-center justify-center w-full bg-[#C8DDDD]">
          <div className="my-6 flex items-center   ">
            <h1 className="name">{theFilm.original_title}</h1>
          </div>
          <div className="flex justify-between items-center w-3/4 divide-x-2 mb-5  ">
            <div className="flex items-center flex-1">
              <div>
                <Rating rate={theFilm.vote_average} />
              </div>
              <h1 className="ml-2 font-bold  ">User Score</h1>
            </div>
            <div className="flex-1 flex items-center justify-center space-x-2  ">
              {" "}
              <BsFillPlayFill />{" "}
              <span className="font-normal">Play Trailer</span>
            </div>
          </div>
          <div className="w-full bg-[#B4C6D9] flex flex-col items-center justify-center py-2  ">
            <div className="space-x-4">
              <span>{theFilm.status}</span>
              <span>{theFilm.release_date}</span>
              <span>{theFilm.runtime} min</span>
            </div>

            <div>
              {theFilm.genres?.map((genre) => (
                <span>{genre.name},</span>
              ))}
            </div>
          </div>
          <div className="mx-5">
            <div className="w-full text-start  my-4 text-[1.1rem] font-normal text-[#4a5058]  ">
              <span>{theFilm.tagline}</span>
            </div>
            <div className="w-full text-start pb-10 md:text-[20px]">
              <h1 className="mb-4 text-[1.3rem] font-semibold  ">Overview</h1>
              <p>{theFilm.overview}</p>
            </div>
          </div>
        </div>
        <SmallSlider value={casts} />
      </div>
      <Footer />
    </>
  );
}

export default SingleFilm;
