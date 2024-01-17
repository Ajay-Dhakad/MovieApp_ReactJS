import React from 'react'
import useMovieData from '../Hooks/useMovieData'
import MovieCards from './MovieCards.jsx'

function SearchResults({movie}) {


    const movieData = useMovieData({movie})

    console.log(movieData)

  return (
    <div className="movie-results">

    {movieData?.Response == 'True' && movieData.Search?.map((movie,index) =>
    <MovieCards key={movie.imdbID} data={movie}/> ) } 

    {movieData?.Response == 'False' && <>no movies found</>}

    {!movieData && <>loading...</>}


    </div>
  )
}

export default SearchResults
