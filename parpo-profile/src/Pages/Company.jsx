import React from 'react'
import AboutUs from '../Components/Company/AboutUs'
import Overview from '../Components/Company/Overview'
import FeaturedHoldings from '../Components/Company/FeaturedHoldings'
import OurTeam from '../Components/Company/OurTeam'
import Contact from '../Components/Company/Contact'
import AppNav from '../Components/AppNav'

const Company = () => {
  return (
    <div className='outlet-container'>
        <AppNav />
        <Overview />
        <AboutUs />
        <FeaturedHoldings />
        <OurTeam />
        {/* <Contact /> */}
    </div>
  )
}

export default Company