import React, { useEffect, useState } from "react";
import useMovieData from "../Hooks/useMovieData";
import MovieCards from "./MovieCards.jsx";
import { useNavigate } from "react-router-dom";

function SearchResults({ movie,currentpage }) {
  const navigate = useNavigate();

  // const [page, setpage] = useState();
  // console.log(page);
  const [totalPages, settotalPages] = useState(1);
  const movieData = useMovieData({ movie, currentpage });

  console.log(movieData);

  useEffect(() => {
    if (movieData) {
      settotalPages(Math.floor(movieData.totalResults / 10));
    }
  }, [movieData]);

  const NextPage = () => {
    if (currentpage <= totalPages) {
      // setpage(page + 1);
      navigate(`/search/${movie}/page/${Number(currentpage) + 1}`);

    }
  };


  useEffect(() => {
    // setpage(currentpage)
    const top = document.getElementById('top')
    
    if (top) {
    top.scrollIntoView({behavior:'smooth'})
    }

  },[movie,currentpage])

  return (
    <>
     

      <div className="movie-results">
        
      <h1 id='top'></h1>

        {movieData?.Response == "True" &&

          <>
         { currentpage == 1 && <div className="searchresultcount"><p>Results found for <b>{movie}</b></p></div>}
          {
          movieData.Search?.map((movie, index) => (
            <MovieCards key={movie.imdbID} data={movie} />
            
          ))
        }

          </>
          
          }
            
        {movieData?.Response == "False" && <div className="loader-container">No Movies Found For {movie}</div>}

        {!movieData && <div className="loader-container"><div className="loader"></div></div> }

        {movieData?.Response != 'False' && movieData?.totalResults > 10 && <div className="pagesnavigation">
          <button
            disabled={currentpage == 1 && true}
            onClick={() => {
              // page > 1 && setpage(page - 1);
              if (currentpage >= 1) navigate(`/search/${movie}/page/${String(currentpage - 1)}`);
            
            }}
          >
            PrevPage
          </button>
            <p>{currentpage}/{totalPages+1}</p>
          <button disabled={currentpage >= totalPages + 1 && true} onClick={NextPage}>
            Nextpage
          </button>
          {/* <button onClick={() => scrollX({top:'1000px'})}></button> */}
        </div>}
      </div>
    </>
  );
}

export default SearchResults;
