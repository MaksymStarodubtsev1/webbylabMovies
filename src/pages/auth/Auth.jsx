import {useSelector} from "react-redux";
import {useAuth} from "./useAuth";
import {useState} from "react";

export const Auth = () => {
  const state = useSelector(state => state)
  const [form, setForm] = useState({
    email: "",
    name: "",
    password: "",
    confirmPassword: ""
  })
  console.log('state', state)
  const {signIn} = useAuth()
  return (
    <div>
      fewfew
      <button onClick={() => signIn()}>fffe</button>
    </div>
  )
}