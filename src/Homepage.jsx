import React from "react";
import Searchbar from "./Components/Searchbar";
import { Link } from "react-router-dom";

function Homepage() {
  return (
    <div className="homepage">
      <div className="homepage-content">
        <h1>CineScore</h1>
        <p>Your ultimate movie watching guide...</p>
        <Searchbar
          styles={"homepage-searchbar"}
          placeholder={"Enter movie name to search..."}
          btn
        />
        <p style={{marginTop:'10px'}}>Popular Picks</p>
        <div className="popularpicks">
          
        <Link to={'/search/John wick/page/1'}><button>John wick</button></Link>
        <Link to={'/search/Avengers/page/1'}><button>Avengers</button></Link>
        <Link to={'/search/Game of Thrones/page/1'}><button>Game of Thrones</button></Link>
        <Link to={'/search/Star Wars/page/1'}><button>Star Wars</button></Link>
        <Link to={'/search/Naruto/page/1'}><button>Naruto</button></Link>
        </div>
      </div>    
    </div>
  );
}

export default Homepage;
