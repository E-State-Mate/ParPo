import React from 'react'
import Navbar from './Navbar'
import PageTitle from './PageTitle'
import HeaderImg from '../../Lib/img/header-skyline.jpg'

const Header = () => {
  return (
    <div id='header'>
        <img src={HeaderImg} id='header-bg'/>
        <Navbar/>
        <PageTitle title={'The Wideman Company'} subtitle={'It is your dream we are building'}/>
    </div>
  )
}

export default Header