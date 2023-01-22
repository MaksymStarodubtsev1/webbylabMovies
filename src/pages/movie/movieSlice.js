import {createSlice} from "@reduxjs/toolkit";

const initialState = { movies: [''] }

const movieSlice = createSlice({
  name: 'movies',
  initialState,
  reducers: {
    fetchMovies(state, payload) {
      return payload
    }
  },
})


export const { fetchMovies } = movieSlice.actions
export default movieSlice.reducer