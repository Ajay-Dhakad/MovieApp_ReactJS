import React from 'react'
import Searchbar from './Components/Searchbar'

function Homepage() {
  return (
    <div className='homepage'>

        <div className="homepage-content">
        <h1>CineScore</h1>
        <p>Your ultimate movie watching guide...</p>
       <Searchbar styles={"homepage-searchbar"} placeholder={'Enter movie name to search...'} btn   />
        </div>
        

    
    </div>
  )
}

export default Homepage
