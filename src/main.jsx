import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter,RouterProvider } from 'react-router-dom'
import Homepage from './Homepage.jsx'
import Search from './Components/Search.jsx'
import MoviePage from './Components/MoviePage.jsx'
// import SeriesPage from './Components/SeriesPage.jsx'
import EpisodePage from './Components/EpisodePage.jsx'
import UrlNotFound from './Components/UrlNotFound.jsx'

const router = createBrowserRouter([

      {
        path:'/',
        element: <App/>,
        children:[


          {
            path:'/',
            element:<Homepage/>
          },
          {
            path:'/search/:movie/page/:currentpage',
            element:<Search/>
          },
          {
            path:'/movie/:movieid/season?/:season?',
            element:<MoviePage/>
          },  
          { 
            path:'/series/:seriesname/:movieid/season/:season/episode/:episode/total/:totalepisodes',
            element: <EpisodePage/>
          },
          {
            path:'*',
            element:<UrlNotFound/>
          }

        ]
      },

])

ReactDOM.createRoot(document.getElementById('root')).render(
    <RouterProvider router={router}>
    <App />
    </RouterProvider>
)
