import {useEffect} from "react";
import { fetchMovies} from "../../../store/actions-creator/movies";
import {useDispatch} from "react-redux";

export const useMovieList = () => {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchMovies())
  }, [dispatch])

}