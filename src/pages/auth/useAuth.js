import axios from "axios";
import {API_UR} from "../../config/env";

export const useAuth = () => {
  function signIn(form) {
    axios.post(`${API_UR}/api/v1/users`, form)
      .then(res => {
        if(res?.data?.token) {
          alert('success')
        } else alert('error')
      })
  }

  return {signIn}
}