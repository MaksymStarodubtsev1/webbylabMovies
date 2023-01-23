import {Button, FormControl, InputLabel, MenuItem, OutlinedInput, Select, TextField} from "@mui/material";
import {useForm} from "react-hook-form";
import {SearchBox, SearchContainer, SelectBox, StyledSelect, StyledTextField} from "./styled";
import '../../App.css';
import {fetchMovies} from "../../store/actions-creator/movies";
import {useDispatch} from "react-redux";
import {useParams} from "react-router-dom";
import {useEffect} from "react";
import {useMovieDetails} from "../../pages/movie/hooks/useMovieDetails";

export const Header = () => {
  const { register, handleSubmit } = useForm();
  const dispatch = useDispatch()

  function onSubmit(data) {
    dispatch(fetchMovies({[data.option]: data.order}))
  };

  function handleSort() {
    dispatch(fetchMovies({sort: "title"}))
  }

  return (
    <header className="App-header">
      <SearchContainer
        component="form"
        onSubmit={handleSubmit(onSubmit, () => {})}
      >
        <SearchBox>
          <StyledTextField
            {...register("order")}
            fullWidth
            required
            focused
            placeholder="search phrase"
            fontcolor="#eee"
          />
          <Button type="submit" variant="contained">Search</Button>
        </SearchBox>
        <SelectBox>
          <FormControl focused fullWidth>
            <InputLabel>Find by</InputLabel>
            <StyledSelect
              defaultValue="title"
              {...register("option")}
              label="Find by"
            >
              <MenuItem value="title">Movie</MenuItem>
              <MenuItem value="actor">Actor</MenuItem>
            </StyledSelect>
          </FormControl>
          <Button variant="outlined" onClick={handleSort}>Sort by name</Button>
        </SelectBox>
      </SearchContainer>
    </header>
  )
}