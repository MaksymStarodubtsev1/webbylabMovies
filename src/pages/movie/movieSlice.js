import {createSlice} from "@reduxjs/toolkit";

const initialState = { moviesList: [] }

const movieSlice = createSlice({
  name: 'movies',
  initialState,
  reducers: {
    setMovies(state, {payload}) {
      return {
        ...state,
        moviesList: payload?.data
      }
    },
    setMovieInfo(state, {payload}){
      return {
        ...state,
        movieInfo: payload?.data,
      }
    }
  },
})


export const { setMovies, setMovieInfo } = movieSlice.actions
export default movieSlice.reducer