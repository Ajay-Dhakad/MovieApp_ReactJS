import React,{useEffect, useState} from 'react'
import {useParams,useNavigate} from 'react-router-dom'
import useMovieData from '../Hooks/useMovieData'

function EpisodePage() {

    const {movieid,season,episode,seriesname,totalepisodes} = useParams()
    const [movieData,setmovieData] = useState(null)
    const [loading,setloading] = useState(false)
   
    const navigate = useNavigate()
    
    const data = useMovieData({movieid,season,episode})


return (
    <div  style={{backgroundImage:`url(${data?.Poster})`}} className="movie-results">
        <div id="top"></div>
        <div className="moviepage">
{data == null &&
    <div className="loading">
        <h1>loading...</h1>
    </div>
}


{data?.Response == 'True' &&
 
    <div className="episode-card">

     <h1>{seriesname+` S0${season}-E0${episode}`}</h1>
    <img src={data.Poster} alt="" /> 
    <div className="episode-detail">
        <h1>{data.Title}</h1>
        {Object.keys(data).map(( key, i) => data[key] !== 'N/A'&& key !== 'Ratings' && key !=='Response' && key !== 'Poster' && key !== 'imdbID' && key !== 'Title' && key !== 'Title' && key !== 'seriesID' &&  (
   
   <p  key={key}>
     <b>{key} : </b>
     {`${data[key]}`}{key == 'imdbRating' && '⭐'}
   </p>      

))}
    </div>

  
    
         



    </div>


}

  {data?.Response == 'False' &&
    <div className="notfound">
      <h1>Movie not found</h1>
    </div>}
    
    
    {data?.Response == 'True' &&    <div className="pagesnavigation">
            <button
                disabled={episode == 1 && true}
                onClick={() => {
            
                navigate(`/series/${seriesname}/${movieid}/season/${season}/episode/${Number(episode)-1}/total/${totalepisodes}`);
                }}
            >
                PrevEpisode
            </button>
                <p>{episode}/{totalepisodes}</p>
            <button disabled={episode == totalepisodes} onClick={() => {
                navigate(`/series/${seriesname}/${movieid}/season/${season}/episode/${Number(episode)+1}/total/${totalepisodes}`)
            }}>
                NextEpisode
            </button>
            {/* <button onClick={() => scrollX({top:'1000px'})}></button> */}
            </div>}


    </div>
    </div>
)

 
}

export default EpisodePage
