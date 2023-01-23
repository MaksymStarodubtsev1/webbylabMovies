import {useEffect} from "react";
import {fetchMovieInfo} from "../../../store/actions-creator/movies";
import {useParams} from "react-router-dom";
import {useDispatch} from "react-redux";

export const useMovieDetails = () => {
  const dispatch = useDispatch()
  const {movieId} = useParams()

  useEffect(() => {
    dispatch(fetchMovieInfo(movieId))
  }, [dispatch, movieId])
}