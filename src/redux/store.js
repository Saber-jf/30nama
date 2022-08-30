import { configureStore, combineReducers } from "@reduxjs/toolkit";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage"; // defaults to localStorage for web

import upcomingMovies from "./Slices/getHiroSlice";
import singleFilmSlice from "./Slices/singleFilmSlice";
import popSlice from "./Slices/popSlice";
import topSlice from "./Slices/topSlice";
import trendfilm from "./Slices/trendfilm";
import genreSlice from "./Slices/genreSlice";
import videoSlice from "./Slices/videoSlice";
import searchSlice from "./Slices/searchSlice";
import mylist from "./Slices/mylist";

const rootReducer = combineReducers({
  upcomings: upcomingMovies,
  thefilm: singleFilmSlice,
  popMovie: popSlice,
  topMovie: topSlice,
  trendMovie: trendfilm,
  genres: genreSlice,
  trailer: videoSlice,
  searchResults: searchSlice,
  mylist: mylist,
});

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["mylist"],
};

const persistedReducer = persistReducer(persistConfig, rootReducer);
const store = configureStore({
  reducer: persistedReducer,
});

const persistor = persistStore(store);

export { store, persistor };
