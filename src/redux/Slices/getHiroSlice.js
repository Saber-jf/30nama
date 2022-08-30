import { createSlice, createAsyncThunk, current } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  upcoming: [],
  hiro: [],
};
export const upcomingFilms = createAsyncThunk(
  "films/fetchupcoming",
  async () => {
    const upcoming = await axios.get(
      "https://api.themoviedb.org/3/movie/upcoming?api_key=c1e25b52b5e93759ce5ae51a96f91f01&language=en-US&page=1"
    );
    return upcoming.data;
  }
);

export const upcomingMovies = createSlice({
  name: "films",
  initialState,
  reducers: {},
  extraReducers: {
    [upcomingFilms.fulfilled]: (state, action) => {
      state.upcoming = action.payload.results;
      console.log(current(state));
    },
  },
});

// Action creators are generated for each case reducer function
export const {} = upcomingMovies.actions;

export default upcomingMovies.reducer;
