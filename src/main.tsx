import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import HomeLayout from './layout/Home.layout'
import Matricula from './pages/Matricula.page'

const router = createBrowserRouter([
  {
    path: '/',
    element: <HomeLayout/>,
    children: [
      {
        path: '/matricula',
        element: <Matricula/>
      }
    ]
  }
])


ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
