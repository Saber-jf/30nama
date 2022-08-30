import { createSlice, createAsyncThunk, current } from "@reduxjs/toolkit";
import axios from "axios";

export const addToMyList = createAsyncThunk("fetchMyFilm", async (id) => {
  const myFilm = await axios.get(
    `https://api.themoviedb.org/3/movie/${id}?api_key=c1e25b52b5e93759ce5ae51a96f91f01&language=en-US`
  );
  return { thefilm: myFilm.data, id: id };
});

const mylistSlice = createSlice({
  name: "mylist",
  initialState: {
    mylist: [],
  },
  reducers: {},
  extraReducers: {
    [addToMyList.fulfilled]: (state, action) => {
      console.log(JSON.parse(JSON.stringify(action.payload)));
      const find = state.mylist.findIndex(
        (film) => film.id == action.payload.id
      );
      console.log(find);

      if (find < 0) {
        state.mylist.push(action.payload.thefilm);
      }
      console.log(JSON.parse(JSON.stringify(state.mylist)));
    },
  },
});

export default mylistSlice.reducer;
