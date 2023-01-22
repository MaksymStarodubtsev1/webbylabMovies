import {combineReducers, configureStore} from "@reduxjs/toolkit";
import movieSlice from "../pages/movie/movieSlice";

const reducer = combineReducers({
  movies: movieSlice
})

export const store = configureStore({reducer})