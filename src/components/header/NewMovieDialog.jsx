import {Button, Dialog, MenuItem, Select, TextField} from "@mui/material";
import {ModalContainer} from "./styled";
import {StyledBox} from "../../pages/auth/styled";
import {useForm} from "react-hook-form";

import {addNewMovie} from "../../store/actions-creator/movies";

export const NewMovieDialog = ({open, onClose, dispatch}) => {
  const { register, handleSubmit } = useForm('2014-08-18T21:11:54');

  function onSubmit(data) {
    dispatch(addNewMovie(data))
  }

  return (
    <Dialog
      fullWidth
      maxWidth={"xs"}
      open={open}
      onClose={onClose}
    >
      <ModalContainer>
        <StyledBox
          component="form"
          onSubmit={handleSubmit(onSubmit)}
        >
          <TextField {...register("title")} required type="title"label="title" variant="outlined" />
          <TextField
            fullWidth
            {...register("year")}
            required
            format="yyyy"
            defaultValue="2019-05-24"
            inputProps={{ min: "1900-01-01", max: "2020-01-31" }}
            type="date"
            variant="outlined"
          />
          <Select
            fullWidth
            defaultValue="VHS"
            {...register("format")}
          >
            <MenuItem value="VHS">VHS</MenuItem>
            <MenuItem value="DVD">DVD</MenuItem>
            <MenuItem value="Blu-ray">Blu-ray</MenuItem>
          </Select>
          <TextField {...register("actors")} required type="actors" label="actors" variant="outlined" />
          <Button type="submit" variant="outlined">Add new movie</Button>
        </StyledBox>
      </ModalContainer>
    </Dialog>
  )
}