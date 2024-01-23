import React, { useEffect, useState } from 'react'
import {useParams,useNavigate} from 'react-router-dom'
import useMovieData from '../Hooks/useMovieData'
import SeriesPage from './SeriesPage'

function MoviePage() {

  
    const {movieid,season,episode} = useParams()
    const [movieData,setmovieData] = useState()
    // const [season,setSeason] = useState(null)
    // const [episode,setEpisode] = useState(null)
    // const [episodeData,setEpisodeData] = useState(null)
    const navigate = useNavigate()
    
    // Fetch the movie data on component mount and save it in state.
    
    const data = useMovieData({movieid}) 

  


    useEffect(() => {

        if (data) {

            setmovieData(data)
            console.log(movieData)
            // window.alert('changed')
        }

    },[data])


    function scrollToElement(elementId) {
      const element = document.getElementById(elementId);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }

    useEffect(() => {
     
      scrollToElement('contain')
      
    }, [movieid]);


  return  (
    <div className='movie-results' style={{backgroundImage:`url(${movieData?.Poster})`}}>

        <div className="moviepage">
        { movieData ?
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
              <div className="episodes">

                  {/* <h2>Episodes of season {season}</h2> */}

                  <SeriesPage/>

              </div>

              
            }
          </div>}
          

       

           </>

           :
           <h1>loading...</h1>
        }


        </div>





        

    </div>
  )
}

export default MoviePage
