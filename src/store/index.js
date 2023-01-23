import {combineReducers, configureStore} from "@reduxjs/toolkit";
import movieSlice from "../pages/movie/movieSlice";
import logger from 'redux-logger'

const reducer = combineReducers({
  movies: movieSlice
})

const preloadedState = { movies: { moviesList: [], movieInfo: {} }}

export const store = configureStore({
  reducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
  devTools: process.env.NODE_ENV !== 'production',
  preloadedState,
})