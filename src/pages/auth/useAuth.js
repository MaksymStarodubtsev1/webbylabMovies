import axios from "axios";
import {API_UR} from "../../config/env";

export const useAuth = () => {
  function signIn(form) {
    axios.post(`${API_UR}/users`, form)
      .then(res => {
        if(res?.data?.token) {
          alert('success')
        } else alert('error')
      })
  }

  function logIn(form) {
    axios.post(`${API_UR}/sessions`, form)
      .then(res => {
        if(res?.data?.token) {
          alert('success')
          localStorage.setItem('token', JSON.stringify(res?.data?.token))
        } else alert('error')
      })
  }

  return {signIn, logIn}
}