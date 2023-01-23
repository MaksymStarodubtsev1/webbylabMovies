import {useSelector} from "react-redux";
import {ListContainer} from "./styled";
import {Box, Card, Chip, Divider, Grid, Stack, Typography} from "@mui/material";
import {useMovieList} from "./hooks/useMovieDetails";

export const MovieDetails = () => {
  useMovieList()

  const {movieInfo} = useSelector(state => state.movies)
  return (
    movieInfo && <ListContainer>
      <Card key={movieInfo.id} sx={{maxWidth: 360}}>
        <Box sx={{ my: 3, mx: 2 }}>
          <Grid container alignItems="center">
            <Grid item xs>
              <Typography gutterBottom variant="h4" component="div">
                {movieInfo.title}
              </Typography>
            </Grid>
          </Grid>
          <Divider variant="middle" />
          <Box sx={{ p: 2 }}>
            <Grid item>
              <Typography gutterBottom variant="h6" component="div">
                format - {movieInfo.format}
              </Typography>
            </Grid>
            <Grid item>
              <Typography gutterBottom variant="h6" component="div">
               year - {movieInfo.year}
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
            {movieInfo?.actors?.map(actor => (
              <Chip label={actor.name} variant="outlined" />
            ))}
          </Stack>
        </Box>
      </Card>
    </ListContainer>
  )
}