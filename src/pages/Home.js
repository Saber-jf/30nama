import React, { useEffect, useState } from "react";
import ContentContainer from "../components/content/ContentContainer";
import Header from "../components/header/Header";
import Hiro from "../components/hiro/Hiro";
import { getPop } from "../redux/Slices/popSlice";
import { getTop } from "../redux/Slices/topSlice";
import { gettrend } from "../redux/Slices/trendfilm";
import { getAllGenres } from "../redux/Slices/genreSlice";
import { getTheGenre } from "../redux/Slices/genreSlice";
import { useDispatch, useSelector } from "react-redux";
import YouTube from "react-youtube";

import Poster from "../components/Poster";
import Video from "../components/Video";
import PaginatedItems from "../components/PaginatedItems";

function Home() {
  const opts = {
    height: "210",
    width: "373",
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 1,
    },
  };
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPop("movie"));
    dispatch(getTop());
    dispatch(gettrend());
    dispatch(getAllGenres());
  }, []);
  const popMovie = useSelector((state) => state.popMovie.popMovie);
  const topMovie = useSelector((state) => state.topMovie.topMovie);
  const trendMovie = useSelector((state) => state.trendMovie.trendMovie);
  const allGenres = useSelector((state) => state.genres.genres);
  const theGenre = useSelector((state) => state.genres.theGenre);
  const video = "https://www.youtube.com/watch?v=0JCq_hmNhJs";

  let inlet = "no";
  function popHandler(inlet) {
    dispatch(getPop(inlet));
    console.log(inlet);
  }
  function trendHandler(inlet) {
    dispatch(gettrend(inlet));
    console.log(inlet);
  }
  function genreHandler(inlet) {
    console.log(inlet);
    const index = allGenres.findIndex((genre) => genre.name == inlet);
    console.log(allGenres[index].id);

    dispatch(getTheGenre(allGenres[index].id));
  }

  const ggg = allGenres.map((genre) => genre.name);

  console.log(ggg);

  console.log(popMovie);
  return (
    <div className="relative">
      <Header />
      <Poster />
      <ContentContainer
        filmData={popMovie}
        func={popHandler}
        value={{
          title: "What's Popular",
          options: ["movie", "tv"],
        }}
      />

      <ContentContainer
        filmData={topMovie}
        value={{
          title: "Top Of History",
          options: ["hollywood", "ballywood", "250 best", "Iran"],
        }}
      />
      <ContentContainer
        func={trendHandler}
        filmData={trendMovie}
        value={{
          title: "What's trend",
          options: ["all", "tv", "movie"],
        }}
      />
      {/* <div className="flex items-center px-2 justify-center mb-[300px]">
        <YouTube videoId="sBEvEcpnG7k" opts={opts} />
      </div> */}
      <Video />
      {/* <div className=" absolute  top-0 bottom-0 w-full  bg-[#032541f2] z-50  ">
        <div className="flex items-center px-2 justify-center mb-[300px] sticky top-1/2  bottom-0">
          <YouTube videoId="sBEvEcpnG7k" opts={opts} />
        </div>
      </div> */}
    </div>
  );
}

export default Home;
