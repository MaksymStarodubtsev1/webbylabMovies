import axios from "axios";
import {API_URl} from "../../../config/env";
import {useNavigate} from "react-router-dom";
import {fetchMovies} from "../../../store/actions-creator/movies";
import {useDispatch} from "react-redux";

export const useAuth = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch()

  function signIn(form) {
    axios.post(`${API_URl}/users`, form)
      .then(res => {
        if(res?.data?.token) {
          alert('success')
          navigate("/login")
        } else alert('error')
      })
  }

  function logIn(form) {
    axios.post(`${API_URl}/sessions`, form)
      .then(res => {
        if(res?.data?.token) {
          alert('success')
          localStorage.setItem('token', JSON.stringify(res?.data?.token))
          dispatch(fetchMovies())
          navigate("/movies")
        } else alert('error')
      })
  }

  function signOut() {
    localStorage.removeItem('token')
  }

  return {signIn, logIn, signOut}
}