import {useSelector} from "react-redux";
import {InfoCard, ListContainer, StyledCard} from "./styled";
import {Button, Typography} from "@mui/material";

export const MovieDetails = () => {
  const {movieInfo} = useSelector(state => state.movies)
  console.log(movieInfo);
  return (
    movieInfo && <ListContainer>
      <InfoCard key={movieInfo.id}  >
        <div>
          <Typography gutterBottom variant="h6" component="div">
            {movieInfo.title}
          </Typography>
        </div>
        <div>
        <Typography component="div">
          format - {movieInfo.format}
        </Typography>
        <Typography component="div">
          year - {movieInfo.year}
        </Typography>
        </div>
        <div>
          actors - {movieInfo.actors.map(actor => actor.name)}
        </div>
      </InfoCard>
    </ListContainer>
  )
}