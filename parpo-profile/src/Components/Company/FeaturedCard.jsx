import React from 'react'
import { Card } from '@mui/material'
import { Link } from 'react-router-dom'
import { useEffect } from 'react'
import { CardActionArea } from '@mui/material'

const FeaturedCard = ({data}) => {

  return (
    <Card className='featured-card' style={{backgroundImage: `url(https://via.placeholder.com/3000/0000FF/808080?Text=Digital.com)`}}>
        <CardActionArea component={Link} to={`property/${data._id}`} className='relative'>
            <div className='feat-card-top'>
                <p>{data.propertyType} Building</p>
                <p>{data.sqft} Sq Ft.</p>
                <p>{data.creditRating}</p>
            </div>
            <div className='feat-card-banner'>
                <div>
                    <p>{data.street}</p>
                    <p>Managed by: {data.manager[0]}</p>
                </div>
                <>
                    <p>{data.estimatedValue}</p>
                </>
            </div>
        </CardActionArea>
    </Card>
  )
}

export default FeaturedCard