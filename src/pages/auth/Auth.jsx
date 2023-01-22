import {useAuth} from "./useAuth";
import {Button, TextField} from "@mui/material";
import {StyledBox} from "./styled";
import {useForm} from "react-hook-form";

export const Auth = () => {
  const { register, handleSubmit } = useForm();
  const {signIn} = useAuth()

  const onSubmit = (data, e) => {
    signIn(data)
  };
  const onError = (errors, e) => console.log(errors, e);

  return (
    <StyledBox
      component="form"
      onSubmit={handleSubmit(onSubmit, onError)}
    >
      <TextField {...register("email")} required label="Email" variant="outlined" />
      <TextField {...register("name")} required label="Name" variant="outlined" />
      <TextField {...register("password")} required label="Password" variant="outlined" />
      <TextField {...register("confirmPassword")} required label="ConfirmPassword" variant="outlined" />
      <Button type="submit">few</Button>
    </StyledBox>
  )
}