import React, { useEffect, useState } from "react";
import useMovieData from "../Hooks/useMovieData";
import MovieCards from "./MovieCards.jsx";
import { useNavigate } from "react-router-dom";

function SearchResults({ movie, currentpage = 1 }) {
  const navigate = useNavigate();

  const [page, setpage] = useState(0);
  console.log(page);
  const [totalPages, settotalPages] = useState(0);
  // const element = document.getElementById('head')
  // console.log(element)

  const movieData = useMovieData({ movie, currentpage });

  console.log(movieData);

  useEffect(() => {
    if (movieData) {
      settotalPages(Math.floor(movieData.totalResults / 10));
    }
  }, [movieData]);

  useEffect(() => {
    setpage(Number(currentpage));
    document.getElementById('head').scrollIntoView({ behavior: "smooth" });

  }, [currentpage]);

  const NextPage = () => {
    if (page <= totalPages) {
      setpage(page + 1);
      navigate(`/search/${movie}/page/${String(page + 1)}`);

    }
  };

  return (
    <>
      <div id="head"></div>
      <div className="movie-results">
        {movieData?.Response == "True" &&
          movieData.Search?.map((movie, index) => (
            <MovieCards key={movie.imdbID} data={movie} />
          ))}

        {movieData?.Response == "False" && <>no movies found</>}

        {!movieData && <>loading...</>}

        <div className="pagesnavigation">
          <button
            disabled={page == 1 && true}
            onClick={() => {
              page > 1 && setpage(page - 1);
              navigate(`/search/${movie}/page/${String(page - 1)}`);
            }}
          >
            PrevPage
          </button>

          <button disabled={page >= totalPages + 1 && true} onClick={NextPage}>
            Nextpage
          </button>
          {/* <button onClick={() => scrollX({top:'1000px'})}></button> */}
        </div>
      </div>
    </>
  );
}

export default SearchResults;
