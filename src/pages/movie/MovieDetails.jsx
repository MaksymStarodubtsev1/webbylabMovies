import {useDispatch, useSelector} from "react-redux";
import {ListContainer} from "./styled";
import {Box, Button, Card, Chip, Divider, Grid, Stack, Typography} from "@mui/material";
import {useMovieDetails, useMovieList} from "./hooks/useMovieDetails";
import {updateMovieInfo} from "../../store/actions-creator/movies";

export const MovieDetails = () => {
  useMovieDetails()
  const dispatch = useDispatch()

  const {movieInfo: info} = useSelector(state => state.movies)
  return (
    info && <ListContainer>
      <Card key={info.id} sx={{maxWidth: 360}}>
        <Box sx={{ my: 3, mx: 2 }}>
          <Grid container alignItems="center">
            <Grid item xs>
              <Typography gutterBottom variant="h4" component="div">
                {info.title}
              </Typography>
            </Grid>
          </Grid>
          <Divider variant="middle" />
          <Box sx={{ p: 2 }}>
            <Grid item>
              <Typography gutterBottom variant="h6" component="div">
                format - {info.format}
              </Typography>
            </Grid>
            <Grid item>
              <Typography gutterBottom variant="h6" component="div">
               year - {info.year}
              </Typography>
            </Grid>
          </Box>
          <Typography gutterBottom variant="body1">
            Actors
          </Typography>
          <Stack
            direction="row"
            justifyContent="center"
            sx={{
              maxWidth: '360px',
              gap: '8px',
              flexWrap: 'wrap'
          }}
          >
            {info?.actors?.map(actor => (
              <Chip key={actor.id} label={actor.name} variant="outlined" />
            ))}
          </Stack>
          <Button onClick={() => dispatch(updateMovieInfo(info.id,{
              title: "Caaasablanca",
              year: 1951,
              format: "DVD",
              actors: [
                "Humphrey Bogart",
                "Ingrid Bergman",
                "Claude Rains",
                "Peter Lorre"
              ]
            }))} size="small">
            Show More
          </Button>
        </Box>
      </Card>
    </ListContainer>
  )
}