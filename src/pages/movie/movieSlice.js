import {createSlice} from "@reduxjs/toolkit";

const initialState = { moviesList: [], movieInfo: {} }

const movieSlice = createSlice({
  name: 'movies',
  initialState,
  reducers: {
    setMovies(state, {payload}) {
      return {
        ...state,
        moviesList: payload
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