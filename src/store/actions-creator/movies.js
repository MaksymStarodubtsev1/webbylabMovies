import {setMovieInfo, setMovies} from "../../pages/movie/movieSlice";
import {Client} from "../../api/axios";

export const fetchMovies = (data = {}) => {
  return async (dispatch) => {
    try {
      Client.get(`/movies`, {params: data })
        .then(({data: res}) => {
          if(res?.data?.length > 0) dispatch(setMovies(res?.data))
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

export const updateMovieInfo = (id, data) => {
  return async (dispatch) => {
    try {
      Client.patch(`/movies/${id}`, data).then(res => {
        dispatch(fetchMovies())
      })

    } catch(err) {
      console.log(err);
    }

  }
}

export const deleteMovie = (id) => {
  return async (dispatch) => {
    try {
      Client.delete(`/movies/${id}`).then(res => {
        dispatch(fetchMovies())
      })
    } catch(err) {
      console.log(err);
    }

  }
}

export const addNewMovie = (data) => {
  return async (dispatch) => {
    try {
      const newMovie = {
        ...data,
        year: data.year.slice(0, 4),
        actors: data.actors.split(',')
      }
      Client.post(`/movies`, newMovie).then(res => {
        dispatch(fetchMovies())
      })
    } catch(err) {
      console.log(err);
    }
  }
}