import {createSlice} from "@reduxjs/toolkit";

const initialState = { moviesList: [] }

const movieSlice = createSlice({
  name: 'movies',
  initialState,
  reducers: {
    setMovies(state, {payload}) {
      return {
        moviesList: payload?.data
      }
    }
  },
})


export const { setMovies } = movieSlice.actions
export default movieSlice.reducer