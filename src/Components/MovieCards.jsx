import React from 'react'

function movieCards({data }) {
  console.log(data)
  return (
   <>
   
   <div className="movieCard">
    
    <div className="movieimage">
      <img src={data.Poster} alt="" />
      </div>
   
   </div>
  

   </>
  )
}

export default movieCards;
