import React from 'react'
import { Divider } from '@mui/material'

const AboutUs = () => {
  return (
    <div style={{width: '80%', margin: '2rem auto'}} id='about'>
      <h2 style={{textAlign: 'center'}}>About Us</h2>
      <Divider variant='middle' width='20%' sx={{margin: '1rem auto', borderBottomWidth: 4, backgroundColor: '#5ca8b2' }} />
      <p style={{textAlign: 'justify', margin: '4rem 0'}}>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Enim, quia voluptatem! Maiores quasi blanditiis aliquid minus possimus officiis necessitatibus, mollitia illo. Ipsum, necessitatibus amet! Quibusdam accusamus praesentium nihil possimus voluptatibus. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Enim, quia voluptatem! Maiores quasi blanditiis aliquid minus possimus officiis necessitatibus, mollitia illo. Ipsum, necessitatibus amet! Quibusdam accusamus praesentium nihil possimus voluptatibus. <br/><br/> Lorem, ipsum dolor sit amet consectetur adipisicing elit.  Enim, quia voluptatem! Maiores quasi blanditiis aliquid minus possimus officiis necessitatibus, mollitia illo. Ipsum, necessitatibus amet! Quibusdam accusamus praesentium nihil possimus voluptatibus.</p>
    </div>
  )
}

export default AboutUs