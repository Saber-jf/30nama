import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
const initialState = {
  videoUrl: "",
};
export const getTrailerKey = createAsyncThunk(
  "getTrailer/fetchVideoUrl",
  async (MovieId) => {
    const videoUrl = await axios.get(
      `https://api.themoviedb.org/3/movie/${MovieId}/videos?api_key=c1e25b52b5e93759ce5ae51a96f91f01&language=en-US`
    );
    return videoUrl.data.results;
  }
);

const getTrailer = createSlice({
  name: "getTrailer",
  initialState,
  reducer: {},
  extraReducers: {
    [getTrailerKey.pending]: (state, action) => {
      state.videoUrl = "";
    },
    [getTrailerKey.fulfilled]: (state, action) => {
      const findTrailer = action.payload.find(
        (video) => video.name == "Official Trailer"
      );
      state.videoUrl = findTrailer.key;
    },
  },
});
export default getTrailer.reducer;
