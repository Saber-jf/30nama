import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  trendMovie: [],
};

export const gettrend = createAsyncThunk(
  "trendSlice/fetchTrendMovie",
  async (type) => {
    const trendMovie = await axios.get(
      `https://api.themoviedb.org/3/trending/${type}/day?api_key=c1e25b52b5e93759ce5ae51a96f91f01`
    );
    return trendMovie.data.results;
  }
);

const trendSlice = createSlice({
  name: "trendSlice",
  initialState,
  reducer: {},
  extraReducers: {
    [gettrend.fulfilled]: (state, action) => {
      state.trendMovie = action.payload;
    },
  },
});

export default trendSlice.reducer;
