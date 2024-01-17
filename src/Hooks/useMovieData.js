import React, { useEffect, useState } from "react";
const useMovieData = ({movie,page,movieid}) => {

    const [moviedata,setmoviedata] = useState(null)



    console.log(moviedata)

useEffect(() => {

    fetch(`https://www.omdbapi.com/?apikey=e3da1d7b${movie ? '&s='+movie : ''}${page ? '&page='+page : ''}${movieid ? '&i='+movieid : ''}`)
    .then((data) => data.ok &&  data.json())
    .then((data) => setmoviedata(data))

},[movie,page,movieid])

return moviedata;


}



export default useMovieData;