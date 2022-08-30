import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  searchContents: [],
};

export const getSearch = createAsyncThunk(
  "getSearch/fetchSearch",
  async (key) => {
    const searchData = await axios.get(
      `https://api.themoviedb.org/3/search/movie?api_key=c1e25b52b5e93759ce5ae51a96f91f01&language=en-US&query=${key}&page=1&include_adult=false`
    );

    return searchData.data.results;
  }
);

const searchSlice = createSlice({
  name: "getSearch",
  initialState,
  reducer: {},
  extraReducers: {
    [getSearch.fulfilled]: (state, action) => {
      state.searchContents = action.payload;
    },
  },
});

export default searchSlice.reducer;
