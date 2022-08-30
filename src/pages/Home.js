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
import Footer from "../components/Footer";

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
    // dispatch(getPop(inlet));
    console.log(inlet);
  }
  function trendHandler(movie) {
    dispatch(gettrend(movie));
    console.log(inlet);
  }
  useEffect(() => {
    dispatch(gettrend("movie"));
  }, []);
  function genreHandler(inlet) {
    console.log(inlet);
    const index = allGenres.findIndex((genre) => genre.name == inlet);
    console.log(allGenres[index].id);

    dispatch(getTheGenre(allGenres[index].id));
  }

  const ggg = allGenres.map((genre) => genre.name);

  console.log(popMovie);
  return (
    <div className="relative w-full ">
      <div className=" w-full fixed z-20">
        <Header />
      </div>

      <main className="max-w-[1500px] mx-auto ">
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
            options: ["movie", "tv", "all"],
          }}
        />

        <Video />
      </main>

      <Footer />
    </div>
  );
}

export default Home;
