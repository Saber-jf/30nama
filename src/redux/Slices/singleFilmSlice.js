import { createSlice, createAsyncThunk, current } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  theFilm: [],
  theFilmCast: [],
};

export const getTheFilm = createAsyncThunk(
  "SingleFilm/fetchSingleFilm",
  async ({ id }) => {
    const theFilm = await axios.get(
      `https://api.themoviedb.org/3/movie/${id}?api_key=c1e25b52b5e93759ce5ae51a96f91f01&language=en-US`
    );
    return theFilm.data;
  }
);
export const getCast = createAsyncThunk(
  "SingleFilm/fetchcast",
  async ({ id }) => {
    const cast = await axios.get(
      `https://api.themoviedb.org/3/movie/${id}/credits?api_key=c1e25b52b5e93759ce5ae51a96f91f01&language=en-US`
    );
    return cast.data;
  }
);

const singleFilmSlice = createSlice({
  name: "SingleFilm",
  initialState,
  reducer: {},
  extraReducers: {
    [getTheFilm.fulfilled]: (state, action) => {
      console.log(JSON.parse(JSON.stringify(action.payload)));
      state.theFilm = action.payload;

      console.log(current(state));
    },
    [getCast.fulfilled]: (state, action) => {
      console.log(JSON.parse(JSON.stringify(action.payload)));
      state.theFilmCast = action.payload;

      console.log(current(state));
    },
  },
});

export default singleFilmSlice.reducer;
