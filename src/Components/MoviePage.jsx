import React from 'react'
import {useParams} from 'react-router-dom'

function MoviePage() {

    const {movieid} = useParams()

  return (
    <div className='movie-results'>
      {movieid}

    </div>
  )
}

export default MoviePage
