import {Route, Routes} from "react-router-dom";
import {Register} from "../../pages/auth/Register";
import {Login} from "../../pages/auth/Login";
import RequireAuth from "../auth/RequireAuth";
import {Movies} from "../../pages/movie/Movies";
import {MovieDetails} from "../../pages/movie/MovieDetails";

export const Main = () => {
  return (
    <main>
      <Routes>
        <Route path="/" element={<Register />} />
        <Route path="login" element={<Login />} />
        <Route element={<RequireAuth />}>
          <Route path="movies" element={<Movies />} />
          <Route exact path="movies/:movieId" element={<MovieDetails />}/>
        </Route>
      </Routes>
    </main>
  )
}
