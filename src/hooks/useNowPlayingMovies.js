import { useDispatch } from "react-redux";
import { addNowPlayingMovies } from "../utils/moviesSlice";
import { api_options } from "../utils/constants";
import { useEffect } from "react";

const useNowPlayingMovies = () => {
    const dispatch=useDispatch();

  const getNowPlayingMovies = async () => {
    const data = await fetch('https://api.themoviedb.org/3/movie/now_playing?page=1', api_options)
    const json=await data.json();
    console.log(json.results);
    dispatch(addNowPlayingMovies(json.results));

  }

  useEffect(()=>{
    getNowPlayingMovies();
  },[])
}

export default useNowPlayingMovies;