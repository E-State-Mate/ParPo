import React from 'react'
import Navbar from './Header/Navbar'
import Header from './Header/Header'
import Footer from './Footer'
import { Outlet } from 'react-router-dom'

const Layout = () => {
  return (
    <div id='app-container'>
        <Navbar />
        <Header />
        <Outlet />
        <Footer />
    </div>
  )
}

export default Layout