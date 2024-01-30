import React from 'react'
import { Link } from 'react-router-dom'

function UrlNotFound() {
  return (
    <div className='movie-results'>

<div className="page404">
    <h1>404</h1>
    <p>Page Not Found</p>
    <br />
    <Link to={'/'}>Go Home</Link>
    
</div>
        
      
    </div>
  )
}

export default UrlNotFound
