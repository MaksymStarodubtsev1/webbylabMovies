import {useAuth} from "./hooks/useAuth";
import {Button, TextField} from "@mui/material";
import {FormContainer, StyledBox} from "./styled";
import {useForm} from "react-hook-form";

export const Login = () => {
  const { register, handleSubmit } = useForm();
  const {logIn} = useAuth()

  function onSubmit(data) {
    logIn(data)
  };
  const onError = (errors, e) => console.log(errors, e);

  return (
    <FormContainer>
      <StyledBox
        component="form"
        onSubmit={handleSubmit(onSubmit, onError)}
      >
        <TextField {...register("email")} type="email" required label="Email" variant="outlined" />
        <TextField {...register("password")} type="password" required label="Password" variant="outlined" />
        <Button type="submit" variant="outlined">Confirm</Button>
      </StyledBox>
    </FormContainer>
  )
}