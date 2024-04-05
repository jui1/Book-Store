import React from 'react'
import ReactDOM from 'react-dom/client'
import AuthProvider from './Context/Authprovider.jsx'



import './index.css'
import { RouterProvider } from 'react-router-dom'
import router from './router/router.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
    <RouterProvider router={router} />
    </AuthProvider>
  
  </React.StrictMode>,
)
