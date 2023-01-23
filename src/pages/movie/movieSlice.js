import {createSlice} from "@reduxjs/toolkit";

const initialState = { moviesList: [], movieInfo: {} }

const movieSlice = createSlice({
  name: 'movies',
  initialState,
  reducers: {
    setMovies(state, {payload}) {
      console.log('state', state)
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