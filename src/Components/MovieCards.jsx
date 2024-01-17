import React from 'react'

function movieCards({data}) {
  console.log(data)
  return (
   <>
   
   <div className="movieCard">
    <h1 key={data.imdbID}>{data.Title}</h1>
   </div>
  

   </>
  )
}

export default movieCards;
