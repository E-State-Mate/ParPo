import React from 'react'
import Divider from '@mui/material/Divider'

const AboutUs = () => {
  return (
    <div id='about'>
      <h2>About Us</h2>
      <Divider variant='middle' sx={{margin: '1rem auto', borderBottomWidth: 4, backgroundColor: '#5ca8b2' }} />
      <p>Great properties and great investments should go hand in hand. The Lion Company provides investors with the freshest, recognizable commercial assets in your region. Our team of brokers have over 100 years of combined real estate investment knowledge in house.
        <br/><br/>Check out some of our amazing properties below or reach out to one of our team to discuss investment options that work for you.
      </p>
    </div>
  )
}

export default AboutUs