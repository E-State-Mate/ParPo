import React from 'react'
import {AboutUs, AppNav, FeaturedHoldings, OurTeam, Overview} from '../Components/components'

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