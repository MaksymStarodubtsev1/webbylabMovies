import {createSlice} from "@reduxjs/toolkit";

const initialState = { movies: [] }

const movieSlice = createSlice({
  name: 'movie',
  initialState,
  reducers: {
    fetchMovies(state, payload) {
      return payload
    }
  },
})


export const { fetchMovies } = movieSlice.actions
export default movieSlice.reducer