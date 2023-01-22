import {useSelector} from "react-redux";
import {ListContainer, StyledCard} from "./styled";
import {Button, CardActions, CardContent, Typography} from "@mui/material";
import {useMovies} from "./useMovies";

export const Movies = () => {
  const {movies: {moviesList}} = useSelector(state => state)
  useMovies()
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
                  <Button size="small">Show More</Button>
                </div>
              </div>
            </StyledCard>
          )
        })
      }
    </ListContainer>
  )
}