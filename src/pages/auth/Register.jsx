import {useAuth} from "./useAuth";
import {Button, TextField} from "@mui/material";
import {FormContainer, StyledBox} from "./styled";
import {useForm} from "react-hook-form";

export const Register = () => {
  const { register, handleSubmit } = useForm();
  const {signIn} = useAuth()

  const onSubmit = (data) => {
    signIn(data)
  };
  const onError = (errors, e) => console.log(errors, e);

  return (
    <FormContainer>
      <StyledBox
        component="form"
        onSubmit={handleSubmit(onSubmit, onError)}
      >
        <TextField {...register("email")} required type="email"label="Email" variant="outlined" />
        <TextField {...register("name")} required label="Name" variant="outlined" />
        <TextField {...register("password")} required type="password" label="Password" variant="outlined" />
        <TextField {...register("confirmPassword")} required type="password" label="Confirm password" variant="outlined" />
        <Button type="submit" variant="outlined">Confirm</Button>
      </StyledBox>
    </FormContainer>
  )
}