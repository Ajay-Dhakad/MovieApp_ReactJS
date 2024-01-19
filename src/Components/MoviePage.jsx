import React, { useEffect, useState } from 'react'
import {useParams} from 'react-router-dom'
import useMovieData from '../Hooks/useMovieData'

function MoviePage() {

    const {movieid} = useParams()
    const [movieData,setmovieData] = useState()

    const data = useMovieData({movieid}) 

    useEffect(() => {

        if (data) {
            setmovieData(data)
            console.log(data)
        }

    },[data])
    

  return  (
    <div className='movie-results' style={{backgroundImage:`url(${movieData?.Poster})`}}>

        <div className="moviepage">
        { movieData &&
        <>  
           <img id='moviepageposter'  src={movieData?.Poster == 'N/A' ? 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/No-Image-Placeholder.svg/832px-No-Image-Placeholder.svg.png' : movieData.Poster} alt="" />
           <div className="moviedetails">
            <h1>{movieData.Title}</h1>

                <p><b>Type :</b> {movieData.Type}</p>
                {movieData?.Type == 'series' &&                 <p><b>Total Seasons :</b> {movieData.totalSeasons}</p>
}
                <p><b>Released On :</b> {movieData.Released}</p>
                <p><b>RunTime :</b> {movieData.Runtime}</p>
                <p><b>Rating :</b> {movieData.imdbRating}⭐</p>
                <p><b>Votes : </b>{movieData.imdbVotes}</p>
                <p><b>Genre : </b>{movieData.Genre}</p>
                <p><b>Director :</b> {movieData.Director}</p>
                <p><b>Writer : </b>{movieData.Writer}</p>
                <p><b>Actors : </b>{movieData.Actors}</p>
                <p><b>Language :</b> {movieData.Language}</p>
                <p><b>Awards : </b>{movieData.Awards}</p>
                <p><b>Country :</b> {movieData.Country}</p>
                <p id='plot'><b>Plot :</b> {movieData.Plot}</p>
            </div>

           </>
        }

        </div>


        

    </div>
  )
}

export default MoviePage
