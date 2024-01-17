import React from 'react'

function Homepage() {
  return (
    <div className='homepage'>

        <div className="homepage-content">
        <h1>CineScore</h1>
        <p>Your ultimate movie watching guide...</p>
        <form className="homepage-searchbar">
        <input placeholder='Enter movie name to search...' type="text" />
        <input value={'Search'} type="submit" />
        </form>
        </div>
    
    </div>
  )
}

export default Homepage
