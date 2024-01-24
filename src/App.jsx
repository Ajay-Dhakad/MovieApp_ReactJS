import { useEffect, useState } from 'react'
import {Outlet,useLocation} from 'react-router-dom'
import Header from './Components/Header'
import Footer from './Components/Footer'
function App() {

  

  const {pathname} = useLocation()
  
 
  
  return (
    
    <main>
    <Header/>

    <Outlet/>

    <Footer/>
    </main>
  
  )
}

export default App
