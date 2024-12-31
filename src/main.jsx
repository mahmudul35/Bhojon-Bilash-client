import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import router from './router/router.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
    <RouterProvider router={router}></RouterProvider>
    </div>
  </StrictMode>,
)
