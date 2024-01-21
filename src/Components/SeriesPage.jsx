import React, { useState } from 'react'
import {useParams,useNavigate} from 'react-router-dom'
import useMovieData from '../Hooks/useMovieData'


function SeriesPage() {
    const {movieid,season,episode} = useParams()
    const [seriesdata,setseriesdata] = useState(null)

    const data = useMovieData({movieid,season})

    useState(() => {

        if (data?.Response=='True') {
            setseriesdata(data)
            console.log(seriesdata)
        }
    },[data,movieid,season,episode])

  return (
    <div className='movie-results'>
      
    </div>
  )
}

export default SeriesPage
