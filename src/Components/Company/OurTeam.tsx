import React from 'react'
import TeamCard from './TeamCard'
import { Divider, Grid } from '@mui/material'

const team = [
  {name: 'Melissa Veras', job: 'Principal Realtor', pic: 'alex.jpg', linkedin: 'https://www.linkedin.com/in/zachtippit/'},
  {name: 'Thomas Anders', job: 'Principal Realtor', pic: 'nate.jpg', linkedin: 'https://www.linkedin.com/in/zachtippit/'},
  {name: 'Will Hunting', job: 'VP of Accounts', pic: 'zach.jpg', linkedin: 'https://www.linkedin.com/in/zachtippit/'},
  {name: 'Denise Boston', job: 'Denise Boston', pic: 'eddie.jpg', linkedin: 'https://www.linkedin.com/in/zachtippit/'}
]

const OurTeam = () => {
  return (
    <div style={{padding: '2rem 0'}} id='team'>
      <div style={{padding: '2rem 0'}}>
        <p style={{textAlign: 'center'}}>Who Are We?</p>
        <h2 style={{textAlign: 'center'}}>Our Team</h2>
        <Divider variant='middle' sx={{margin: '1rem auto', borderBottomWidth: 4, backgroundColor: '#5ca8b2' }} />
      </div>
      <Grid container>
        {team.map((member, index) => (
          <Grid item xs={12} md={6} lg={3} key={index}>
            <TeamCard data={member} />
          </Grid>
        ))}
      </Grid>
    </div>
  )
}

export default OurTeam