import { Button, FormControl, InputLabel, MenuItem} from "@mui/material";
import {useForm} from "react-hook-form";
import {
  OptionsBox,
  SearchBox,
  SearchContainer,
  SelectBox,
  StyledSelect,
  StyledTextField
} from "./styled";
import '../../App.css';
import AddIcon from '@mui/icons-material/Add';
import {fetchMovies} from "../../store/actions-creator/movies";
import {useDispatch} from "react-redux";
import {useState} from "react";
import {NewMovieDialog} from "./NewMovieDialog";

export const Header = () => {
  const { register, handleSubmit } = useForm();
  const dispatch = useDispatch()
  const [open, setOpen] = useState(false)

  function onSubmit(data) {
    dispatch(fetchMovies({[data.option]: data.order}))
  };

  function handleSort() {
    dispatch(fetchMovies({sort: "title"}))
  }

  function handleAddMovie(){
    setOpen(true)
  }

  return (
    <header className="App-header">
      <SearchContainer
        component="form"
        onSubmit={handleSubmit(onSubmit, () => {})}
      >
        <NewMovieDialog open={open} dispatch={dispatch} onClose={() => setOpen(false)} />
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
        <OptionsBox>
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
          </SelectBox>
          <Button variant="outlined" onClick={handleSort}>Sort by name</Button>
          <Button variant="outlined" onClick={handleAddMovie}>
            <AddIcon/>
          </Button>
        </OptionsBox>
      </SearchContainer>
    </header>
  )
}