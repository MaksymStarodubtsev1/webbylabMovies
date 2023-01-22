import {useParams} from "react-router-dom";

export const MovieDetails = () => {
  const params = useParams()
  const movieId = params.movieId

  console.log('info', info)
  return (
    <div>
      {movieId}
    </div>
  )
}