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
import {fetchMovies, importMovies} from "../../store/actions-creator/movies";
import {useDispatch} from "react-redux";
import {createRef, useRef, useState} from "react";
import {NewMovieDialog} from "./NewMovieDialog";
import CachedIcon from '@mui/icons-material/Cached';
import DownloadIcon from '@mui/icons-material/Download';

export const Header = () => {
  const { register, handleSubmit } = useForm();
  const dispatch = useDispatch()
  const [open, setOpen] = useState(false)

  const fileRef = createRef()

  function onSubmit(data) {
    console.log('daaata', data)
    dispatch(fetchMovies({[data.option]: data.order}))
  };

  function handleSort() {
    dispatch(fetchMovies({sort: "title"}))
  }

  function handleAddMovie(){
    setOpen(true)
  }

  function handleUploadData(){
    console.log('helllllo', fileRef)
    dispatch(importMovies(fileRef.current.files[0]))
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
          <Button variant="outlined" onClick={handleUploadData} >
            <CachedIcon/>
          </Button>
          <Button variant="outlined" component="label">
            <input hidden multiple type="file" ref={fileRef} />
            <DownloadIcon/>
          </Button>
          <Button variant="outlined" onClick={handleAddMovie}>
            <AddIcon/>
          </Button>
        </OptionsBox>
      </SearchContainer>
    </header>
  )
}