import React, { useEffect, useState } from 'react'
import {useParams,useNavigate} from 'react-router-dom'
import useMovieData from '../Hooks/useMovieData'
// import MoviePage from './MoviePage'


function SeriesPage() {
    const {movieid,season,episode} = useParams()
    const [seriesdata,setseriesdata] = useState()

    const data = useMovieData({movieid,season})

    useEffect(() => {

        if (data) {
            setseriesdata(data)
            console.log(seriesdata)
        }
    },[data,movieid,season])

  return  (
    <div className='movie-results'>

<div className="seriespage">

        { seriesdata && 

        <>
        
        <h1>{seriesdata.Title}</h1>
        <p>Season : {seriesdata.Season}</p>
        <p>Total episodes : {seriesdata.Episodes.length}</p>
        
        {seriesdata.Episodes.map((episode, index) => (
            <div className="episode" key={index}>{episode.Title}</div>)) }
        
        </>
}

</div>
   
    </div>
  )
}

export default SeriesPage
