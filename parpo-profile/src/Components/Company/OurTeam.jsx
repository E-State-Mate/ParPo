import React from 'react'
import TeamCard from './TeamCard'
import { Divider, Grid } from '@mui/material'

const team = [
  {name: 'Melissa Veras', job: 'Principal Realtor'},
  {name: 'Thomas Anders', job: 'Principal Realtor'},
  {name: 'Will Hunting', job: 'VP of Accounts'},
  {name: 'Denise Boston', job: 'Denise Boston'}
]

const OurTeam = () => {
  return (
    <div style={{margin: '4rem auto', padding: '2rem 0'}} id='team'>
      <p style={{textAlign: 'center'}}>Who Are We?</p>
      <h2 style={{textAlign: 'center'}}>Our Team</h2>
      <Divider variant='middle' width='20%' sx={{margin: '1rem auto', borderBottomWidth: 4, backgroundColor: '#5ca8b2' }} />
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