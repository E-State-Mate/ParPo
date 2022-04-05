import React from 'react'
import { Card } from '@mui/material'

const FeaturedCard = ({data}) => {
  return (
    <Card className='featured-card' style={{backgroundImage: `url(https://via.placeholder.com/3000/0000FF/808080?Text=Digital.com)`}}> 
        <div className='feat-card-top'>
            <p>{data.description}</p>
            <p>{data.sqft} Sq Ft.</p>
            <p>{data.rating}</p>
        </div>
        <div className='feat-card-banner'>
            <div>
                <p>{data.building}</p>
                <p>{data.address}</p>
            </div>
            <>
                <p>{data.price}</p>
            </>
        </div>
    </Card>
  )
}

export default FeaturedCard