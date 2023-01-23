import {useEffect} from "react";
import {fetchMovieInfo, fetchMovies} from "../../../store/actions-creator/movies";
import {useDispatch} from "react-redux";
import {useParams} from "react-router-dom";

export const useMovieList = () => {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchMovies())
  }, [dispatch])

}