import React, { useEffect, useState } from 'react'
import {useParams,useNavigate,Link} from 'react-router-dom'
import useMovieData from '../Hooks/useMovieData'
import MoviePage from './MoviePage'
import {motion} from 'framer-motion'


function SeriesPage() {
    const [seriesdata,setseriesdata] = useState(null)
    // const [movieId,setMovieId] = useState(nu)
    // const [Season,setSeason] = useState()
    const {movieid,season} = useParams()
    // const episode = '1'

    const data = useMovieData({movieid,season})

    useEffect(() => {

      
            
            setseriesdata(data)
            // console.log(seriesdata)
        
    },[data,movieid,season])
  
  if  ( seriesdata?.Response == 'True' &&  seriesdata?.Type != 'Episode') return(
  

<div className="seriespage">

    {/* <h1>season = {season}</h1> */}

     

        <>

        {console.log(seriesdata)}
        
        <h2>{seriesdata.Title+` Season ${season}`}</h2>
        {/* <p>Season : {seriesdata.Season}</p> */}
        <p>Total episodes : {seriesdata?.Episodes?.length}</p>

        <div className="episodes">
        
        {seriesdata?.Episodes?.map((episode, index) => (
            <motion.div initial={{opacity:0}} animate={{opacity:1}} transition={{delay:index*.1}} className="episode" key={index}><Link to={`/series/${seriesdata.Title}/${movieid}/season/${season}/episode/${index+1}/total/${seriesdata.Episodes.length}`} >{episode.Title}</Link></motion.div>)) }

</div>
        
        </>


</div>  
   
  )

  if (!seriesdata) return <p>loading...</p>




}

export default SeriesPage
