import React, { useEffect, useState } from "react";
import useMovieData from "../Hooks/useMovieData";
import MovieCards from "./MovieCards.jsx";
import { useNavigate } from "react-router-dom";

function SearchResults({ movie, currentpage = 1 }) {
  const navigate = useNavigate();

  const [page, setpage] = useState(1);
  console.log(page);
  const [totalPages, settotalPages] = useState(1);
  const movieData = useMovieData({ movie, currentpage });

  console.log(movieData);

  useEffect(() => {
    if (movieData) {
      settotalPages(Math.floor(movieData.totalResults / 10));
    }
  }, [movieData]);

  const NextPage = () => {
    if (page <= totalPages) {
      setpage(page + 1);
      navigate(`/search/${movie}/page/${String(page + 1)}`);

    }
  };


  useEffect(() => {
    const top = document.getElementById('top')
    if (top) {
    top.scrollIntoView({behavior:'smooth'})
    }

  },[page,movie])

  return (
    <>
     

      <div className="movie-results">
        
      <h1 id='top'></h1>

        {movieData?.Response == "True" &&
        
          movieData.Search?.map((movie, index) => (
            <MovieCards key={movie.imdbID} data={movie} />
          ))}

        {movieData?.Response == "False" && <>no movies found</>}

        {!movieData && <><div className="loader-container"><div className="loader"></div></div></>}

        {movieData?.Response != 'False' && movieData?.totalResults > 10 && <div className="pagesnavigation">
          <button
            disabled={page == 1 && true}
            onClick={() => {
              page > 1 && setpage(page - 1);
              navigate(`/search/${movie}/page/${String(page - 1)}`);
            }}
          >
            PrevPage
          </button>
            <p>{page}/{totalPages+1}</p>
          <button disabled={page >= totalPages + 1 && true} onClick={NextPage}>
            Nextpage
          </button>
          {/* <button onClick={() => scrollX({top:'1000px'})}></button> */}
        </div>}
      </div>
    </>
  );
}

export default SearchResults;
