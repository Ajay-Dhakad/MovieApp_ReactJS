import React from 'react'
import {motion} from 'framer-motion'
import { Link } from 'react-router-dom'

function movieCards({data }) {
  console.log(data)
  return (
   <>
   
   <motion.div className="movieCard"
   
   initial={{opacity:0}}
   whileInView={{opacity:1,threshold: 0.9}}
   transition={{duration:1,delay:.1}}
   viewport={{once:true}}
   
   >
    <Link to={`/movie/${data.imdbID}`} >
    

    <div className="movieimage">
      <img  
      
      src={data.Poster != 'N/A' ? data.Poster : 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/No-Image-Placeholder.svg/832px-No-Image-Placeholder.svg.png'} alt="" />
      </div>
      <div className="cardcontent">
      <h1>{data.Title}</h1>
      <p>Release Year : {data.Year}</p>
      </div>
      </Link>
   
   </motion.div>
  

   </>
  )
}

export default movieCards;
