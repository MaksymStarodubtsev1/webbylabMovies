import axios from "axios";
import {API_UR} from "../../../config/env";
import {useNavigate} from "react-router-dom";

export const useAuth = () => {
  const navigate = useNavigate();

  function signIn(form) {
    axios.post(`${API_UR}/users`, form)
      .then(res => {
        if(res?.data?.token) {
          alert('success')
          navigate("/login")
        } else alert('error')
      })
  }

  function logIn(form) {
    axios.post(`${API_UR}/sessions`, form)
      .then(res => {
        if(res?.data?.token) {
          alert('success')
          localStorage.setItem('token', JSON.stringify(res?.data?.token))
          navigate("/movies")
        } else alert('error')
      })
  }

  function signOut() {
    localStorage.removeItem('token')
  }

  return {signIn, logIn, signOut}
}