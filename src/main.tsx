import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import HomeLayout from './layout/Home.layout'
import Matricula from './pages/Matricula.page'
import  { InputWithLabel } from './layout/Login.layout'
import RecoverPassword from './pages/RecoverPassword.page'


const router = createBrowserRouter([
  {
    path: '/',
    element: <InputWithLabel/>,
  }
  ,
  {
    path: '/recover-password',
    element: <RecoverPassword/>
  },
  {
    path: '/crayon',
    element: <HomeLayout/>,
    children: [
      {
        path: '/crayon/matricula',
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
