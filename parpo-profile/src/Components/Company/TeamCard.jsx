import React from 'react'
import { Card } from '@mui/material'

const TeamCard = ({data}) => {
  return (
    <Card className='team-card' style={{backgroundImage: `url(https://via.placeholder.com/3000/0000FF/808080?Text=Digital.com)`}}> 
        <div className='team-card-center'>
            <p>{data.name}</p>
            <p>{data.job}</p>
        </div>
    </Card>
  )
}

export default TeamCard