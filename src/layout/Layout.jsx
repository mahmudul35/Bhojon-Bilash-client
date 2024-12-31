import React from 'react'
import { Outlet } from 'react-router-dom'
import { Navbar } from '../pages/Shared/Navbar'
import { Footer } from '../pages/Shared/Footer'

export const Layout = () => {
  return (
    <div>
        <Navbar/>
        <div className='min-h-[calc(100vh-270px)]'>
          <Outlet/>
        </div>
        <Footer/>
    </div>
  )
}
