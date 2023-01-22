import axios from "axios";
import {API_UR} from "../../config/env";
import {setMovieInfo, setMovies} from "../../pages/movie/movieSlice";

export const fetchMovies = () => {
  return async (dispatch) => {
    try {
      const token = JSON.parse(localStorage.getItem('token'))

      axios(`${API_UR}/movies`, {
        headers: {
          'Authorization': token
        }
      })
        .then((res) => {
          dispatch(setMovies(res?.data))
        })
    } catch(err) {
      console.log(err)
    }
  }
}

export const fetchMovieInfo = (id) => {
  return async (dispatch) => {
    try {
      const token = await JSON.parse(localStorage.getItem('token'))
      axios.get(`${API_UR}/movies/${id}`, {
          headers: {
            'Authorization': token
          }
        }).then(res => {
        dispatch(setMovieInfo(res?.data))
      })

    } catch(err) {
      console.log(err);
    }

  }
}