import React from 'react'
import {useParams} from 'react-router-dom'
import useMovieData from '../Hooks/useMovieData'
import SearchResults from './SearchResults'

function Search() {
    const {movie} = useParams()
    

    

  return (  
   <SearchResults movie={movie}/>
  )
}

export default Search
