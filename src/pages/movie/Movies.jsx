import {useDispatch, useSelector} from "react-redux";
import {ListContainer, StyledCard} from "./styled";
import {Box, Button, Typography} from "@mui/material";
import {useNavigate} from "react-router-dom";
import {deleteMovie} from "../../store/actions-creator/movies";
import {useMovieList} from "./hooks/useMovieList";

export const Movies = () => {
  const {moviesList} = useSelector(state => state.movies)
  const navigate = useNavigate();
  const dispatch = useDispatch()

  function handleShowMore(id) {
    navigate(`/movies/${id}`)
  }

  function handleDelete(id) {
    dispatch(deleteMovie(id))
  }

  useMovieList()

  return (
    <ListContainer>
      {
        moviesList.length > 0 && moviesList.map(movie => {
          return (
            <StyledCard key={movie.id} >
              <div>
                <Typography gutterBottom variant="h6" component="div">
                  {movie.title}
                </Typography>
              </div>
              <div>
                <Box>
                  <Typography gutterBottom  component="div">
                    {movie.format}
                  </Typography>
                </Box>
                <Box>
                  <Button onClick={() => handleDelete(movie.id)} size="small">
                    Delete
                  </Button>
                  <Button onClick={() => handleShowMore(movie.id)} size="small">
                    Show More
                  </Button>
                </Box>
              </div>
            </StyledCard>
          )
        })
      }
    </ListContainer>
  )
}