import { useSelector} from "react-redux";

export const Movies = () => {
  const state = useSelector(state => state)
  console.log('state///', state)
  return (
    <div>
      {/*<button onClick={() => dispatch(fetchMovies())}>deewde</button>*/}
      <div>Movies</div>
    </div>
  )
}