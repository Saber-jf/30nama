import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  topMovie: [],
};
export const getTop = createAsyncThunk("getTop/fetchTopMovie", async () => {
  const topMovie = await axios.get(
    "https://api.themoviedb.org/3/movie/top_rated?api_key=c1e25b52b5e93759ce5ae51a96f91f01&language=en-US&page=1"
  );
  return topMovie.data;
});

const topSlice = createSlice({
  name: "topSlice",
  initialState,
  reducer: {},
  extraReducers: {
    [getTop.fulfilled]: (state, action) => {
      state.topMovie = action.payload.results;
    },
  },
});

export default topSlice.reducer;
