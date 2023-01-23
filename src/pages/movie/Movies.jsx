import { useSelector} from "react-redux";
import {ListContainer, StyledCard} from "./styled";
import {Button, Typography} from "@mui/material";
import {useNavigate} from "react-router-dom";

export const Movies = () => {
  const {movies: {moviesList}} = useSelector(state => state)
  const navigate = useNavigate();

  function handleShowMore(id) {
    navigate(`/movies/${id}`)
  }

  return (
    <ListContainer>
      {
        moviesList && moviesList.map(movie => {
          return (
            <StyledCard key={movie.id} >
              <div>
                <Typography gutterBottom variant="h6" component="div">
                  {movie.title}
                </Typography>
              </div>
              <div>
                <div>
                  <Typography gutterBottom  component="div">
                    {movie.format}
                  </Typography>
                </div>
                <div>
                  <Button size="small">Delete</Button>
                  <Button onClick={() => handleShowMore(movie.id)} size="small">
                    Show More
                  </Button>
                </div>
              </div>
            </StyledCard>
          )
        })
      }
    </ListContainer>
  )
}