import React, { useEffect, useState } from 'react'
import {useParams,useNavigate} from 'react-router-dom'
import useMovieData from '../Hooks/useMovieData'
import SeriesPage from './SeriesPage'

function MoviePage() {

  
    const {movieid,season} = useParams()
    const [movieData,setmovieData] = useState(null)
    const [loading,setloading] = useState(false)
   
    const navigate = useNavigate()
    
    
    const data = useMovieData({movieid}) 

  


    useEffect(() => {
        if (data ) {

            setmovieData(data)
            
            
        }
        


    },[data,movieid])


    useEffect(() => {
      const top = document.getElementById('top')
      if (top) {
      top.scrollIntoView({behavior:'smooth'})
      console.log(top)
      }
  
    },[season])

    // useEffect(() => {
     
     
      
    // }, [movieid]);


  return  (
    <div className='movie-results' style={{backgroundImage:`url(${movieData?.Poster})`}}>

        <div className="moviepage">



        {

!movieData &&
  <div className="notfound">
    <h1>loading...</h1>
  </div>
}


        { movieData?.Response == 'True' &&
        <>    
           <img id='moviepageposter'  src={movieData?.Poster == 'N/A' ? 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/No-Image-Placeholder.svg/832px-No-Image-Placeholder.svg.png' : movieData.Poster} alt="" />
           <div className="moviedetails">
            <h1>{movieData.Title}</h1>

                {Object.keys(movieData).map(( key, i) => movieData[key] !== 'N/A'&& key !== 'Ratings' && key !=='Response' && key !== 'Poster' && key !== 'imdbID' && key !== 'Title' && (
   
    <p key={key}>
      <b>{key} : </b>
      {`${movieData[key]}`}{key == 'imdbRating' && '⭐'}
    </p>      
 
))}


            </div>

           { movieData.Type == 'series' && <div className="totalSeasons">
            <h2>Seasons</h2>
            <div className='seasons'>
            {Array.from({length : movieData?.totalSeasons}).map(( _ ,index) => (
                <div className="season" key={index}>
                    <button value={index+1} onClick={(e) =>navigate(`/movie/${movieid}/season/${e.target.value}`) } >{index+1} </button>
                </div> 
            ))}
            </div>

            {
              season && 
              <div  className="episodes">
                <div id="top"></div>

                  {/* <h2>Episodes of season {season}</h2> */}

                  <SeriesPage/>

              </div>

              
            }
          </div>}
          

       

           </>

        
        }

{
  movieData?.Response == 'False' &&
  <div className="notfound">
    <h1>Movie not found</h1>
  </div>
}



        </div>





        

    </div>
  )
}

export default MoviePage
