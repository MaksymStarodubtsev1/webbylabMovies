import {setMovieInfo, setMovies} from "../../pages/movie/movieSlice";
import {Client} from "../../api/axios";

export const fetchMovies = () => {
  return async (dispatch) => {
    try {
      Client(`/movies`)
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
      Client.get(`/movies/${id}`).then(res => {
        dispatch(setMovieInfo(res?.data))
      })

    } catch(err) {
      console.log(err);
    }

  }
}

export const updateMovieInfo = ({id, data}) => {
  return async (dispatch) => {
    try {
      Client.patch(`/movies/${id}`, data).then(res => {
        dispatch(setMovieInfo(res?.data))
      })

    } catch(err) {
      console.log(err);
    }

  }
}