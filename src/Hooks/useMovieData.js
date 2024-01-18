import React, { useEffect, useState } from "react";
const useMovieData = ({movie,currentpage,movieid}) => {

    const [moviedata,setmoviedata] = useState(null)



    console.log(moviedata)

useEffect(() => {

    fetch(`https://www.omdbapi.com/?apikey=e3da1d7b${movie ? '&s='+movie : ''}${currentpage ? '&page='+currentpage : ''}${movieid ? '&i='+movieid : ''}`)
    .then((data) => data.ok &&  data.json())
    .then((data) => setmoviedata(data))

},[movie,currentpage,movieid])

return moviedata;


}



export default useMovieData;