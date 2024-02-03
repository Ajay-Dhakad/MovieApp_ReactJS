import React from "react";
import { useParams } from "react-router-dom";
// import useMovieData from '../Hooks/useMovieData'
import SearchResults from "./SearchResults";

function Search() {
  const { movie } = useParams();
  const { currentpage } = useParams();
  // console.log(currentpage)

  return <SearchResults movie={movie} currentpage={currentpage} />;
}

export default Search;
