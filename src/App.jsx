import { useState } from 'react'
import {Outlet} from 'react-router-dom'
import Header from './Components/Header'
import Footer from './Components/Footer'
function App() {
  
  return (
   
    <main>
    <Header/>

    <Outlet/>

    <Footer/>
    </main>
  
  )
}

export default App
