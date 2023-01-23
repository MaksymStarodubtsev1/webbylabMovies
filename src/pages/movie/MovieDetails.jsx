import { useSelector} from "react-redux";
import {ListContainer} from "./styled";
import {Box, Card, Chip, Divider, Grid, Stack, Typography} from "@mui/material";
import {useMovieDetails} from "./hooks/useMovieDetails";

export const MovieDetails = () => {
  useMovieDetails()

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
        </Box>
      </Card>
    </ListContainer>
  )
}