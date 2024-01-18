import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter,RouterProvider } from 'react-router-dom'
import Homepage from './Homepage.jsx'
import Search from './Components/Search.jsx'

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
          }

        ]
      },

])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}>
    <App />
    </RouterProvider>
  </React.StrictMode>,
)
