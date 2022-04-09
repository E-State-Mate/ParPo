import React from 'react'
import { Card } from '@mui/material'

const FeaturedCard = ({data}) => {
  return (
    <Card className='featured-card' style={{backgroundImage: `url(https://via.placeholder.com/3000/0000FF/808080?Text=Digital.com)`}}> 
        <div className='feat-card-top'>
            <p>{data.holdingPropertyType} Building</p>
            <p>{data.holdingSqft} Sq Ft.</p>
            <p>{data.CreditRating}</p>
        </div>
        <div className='feat-card-banner'>
            <div>
                <p>{data.holdingStreet}</p>
                <p>Managed by: {data.holdingManager[0]}</p>
            </div>
            <>
                <p>{data.holdingEstimatedValue}</p>
            </>
        </div>
    </Card>
  )
}

export default FeaturedCard