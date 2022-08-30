import { createSlice, createAsyncThunk, current } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  popMovie: [],
};
export const getPop = createAsyncThunk("popSlice/fetchPop", async (type) => {
  const popMovie = await axios.get(
    `https://api.themoviedb.org/3/discover/${type}?api_key=c1e25b52b5e93759ce5ae51a96f91f01`
  );
  return popMovie.data;
});
const popSlice = createSlice({
  name: "popSlice",
  initialState,
  reducer: {},
  extraReducers: {
    [getPop.fulfilled]: (state, action) => {
      console.log(JSON.parse(JSON.stringify(action.payload)));
      state.popMovie = action.payload.results;
      console.log(current(state));
    },
  },
});

export default popSlice.reducer;
