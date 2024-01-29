import React, { useEffect, useState } from 'react'
import Searchbar from './Searchbar'
import {useLocation,useNavigate} from 'react-router-dom'

function Header() {
  const {pathname} = useLocation()
  const navigate = useNavigate()
  const [menu,setmenu] = useState(false)

  useEffect(() => {

    if (menu) setmenu(false);

  },[pathname])

  return (<>
  
    <header>
        <div className="logo">
            <img src="https://cdn1.iconfinder.com/data/icons/music-media-2/512/614731-cinema-512.png" alt="" />
            <h1>CineScore</h1>
        </div>

        { pathname !== '/' &&
       <div className="searchbar">
      
          <Searchbar placeholder={'Search a movie...'} styles={'searchbar'} btn={true}/>
        
          </div>

          
}

<i  onClick={() => (menu ? setmenu(false) : setmenu(true))} class={!menu ? 'ri-menu-line' : 'ri-close-fill'}></i>

    </header>
 <div style={{display:menu ? 'flex':'none'}} className="phonenav">
        <Searchbar styles={'searchbarphone'} placeholder={'Search a movie...'} btn={true}/>
        <button onClick={() => navigate('/')} className='backtohome'>Back To Home</button>
      </div>
    
    </>
  )
}

export default Header
