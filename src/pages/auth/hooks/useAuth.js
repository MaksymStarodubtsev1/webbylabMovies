import {useNavigate} from "react-router-dom";
import {fetchMovies} from "../../../store/actions-creator/movies";
import {useDispatch} from "react-redux";
import {Client} from "../../../api/axios";

export const useAuth = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch()

  function signIn(form) {
    Client.post(`/users`, form)
      .then(res => {
        if(res?.data?.token) {
          alert('success')
          navigate("/login")
        } else alert('error')
      })
  }

  function logIn(form) {
    Client.post(`/sessions`, form)
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