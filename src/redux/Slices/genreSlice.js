import { createSlice, createAsyncThunk, current } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  genres: [],
  theGenre: [],
  page: "",
};

export const getAllGenres = createAsyncThunk(
  "getGenres/fethGenres",
  async () => {
    const generes = await axios.get(
      "https://api.themoviedb.org/3/genre/movie/list?api_key=c1e25b52b5e93759ce5ae51a96f91f01&language=en-US"
    );

    return generes.data;
  }
);
export const getTheGenre = createAsyncThunk(
  "gettheGenre/fethGenres",
  async ({ page, id }) => {
    const theGenre = await axios.get(
      `https://api.themoviedb.org/3/discover/movie?api_key=c1e25b52b5e93759ce5ae51a96f91f01&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=${page}&with_genres=${id}&with_watch_monetization_types=flatrate
          `
    );

    return theGenre.data;
  }
);

const getGenres = createSlice({
  name: "getGenres",
  initialState,
  reducer: {},
  extraReducers: {
    [getAllGenres.fulfilled]: (state, action) => {
      // console.log(JSON.parse(JSON.stringify(action.payload)));

      state.genres = action.payload.genres;
      // console.log(current(state));
    },
    [getTheGenre.pending]: (state, action) => {
      state.theGenre = [];
    },
    [getTheGenre.fulfilled]: (state, action) => {
      // console.log(JSON.parse(JSON.stringify(action.payload)));

      state.theGenre = action.payload;
      // console.log(current(state));
    },
  },
});

export default getGenres.reducer;
