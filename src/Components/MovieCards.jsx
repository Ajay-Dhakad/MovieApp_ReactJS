import React from 'react'

function movieCards({data }) {
  console.log(data)
  return (
   <>
   
   <div className="movieCard">
    
    <div className="movieimage">
      <img src={data.Poster != 'N/A' ? data.Poster : 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/No-Image-Placeholder.svg/832px-No-Image-Placeholder.svg.png'} alt="" />
      </div>
      <div className="cardcontent">
      <h1>{data.Title}</h1>
      <p>Release Year : {data.Year}</p>
      </div>
   
   </div>
  

   </>
  )
}

export default movieCards;
