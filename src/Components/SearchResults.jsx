import React from 'react'
import useMovieData from '../Hooks/useMovieData'
import MovieCards from './MovieCards.jsx'

function SearchResults({movie}) {


    const movieData = useMovieData({movie})

    console.log(movieData)

  return (
    <div className="movie-results">

    {movieData?.Search ? <MovieCards data={movieData.Search}/> : <>loading...</>} 


    </div>
  )
}

export default SearchResults
