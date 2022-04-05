import React from 'react'
import FeaturedCard from './FeaturedCard'
import { Box, Card, CardMedia, Divider, Grid } from '@mui/material'

const featuredProperties = [
  {
    image: 'https://www.shutterstock.com/image-photo/modern-glass-building-reflected-evening-city-1661545042',
    building: 'Vintage Villa',
    address: '2715 Ash Dr. San Jose, Dubai',
    price: '$1,350,000',
    description: 'Commercial Office Building',
    sqft: '10,000',
    rating: '4 Star Flex R&D'
  },
  {
    image: 'https://www.shutterstock.com/image-photo/modern-glass-building-reflected-evening-city-1661545042',
    building: 'Vintage Villa',
    address: '2715 Ash Dr. San Jose, Dubai',
    price: '$1,350,000',
    description: 'Commercial Office Building',
    sqft: '10,000',
    rating: '4 Star Flex R&D'
  },
  {
    image: 'https://www.shutterstock.com/image-photo/modern-glass-building-reflected-evening-city-1661545042',
    building: 'Vintage Villa',
    address: '2715 Ash Dr. San Jose, Dubai',
    price: '$1,350,000',
    description: 'Commercial Office Building',
    sqft: '10,000',
    rating: '4 Star Flex R&D'
  },
  {
    image: 'https://www.shutterstock.com/image-photo/modern-glass-building-reflected-evening-city-1661545042',
    building: 'Vintage Villa',
    address: '2715 Ash Dr. San Jose, Dubai',
    price: '$1,350,000',
    description: 'Commercial Office Building',
    sqft: '10,000',
    rating: '4 Star Flex R&D'
  },
  {
    image: 'https://www.shutterstock.com/image-photo/modern-glass-building-reflected-evening-city-1661545042',
    building: 'Vintage Villa',
    address: '2715 Ash Dr. San Jose, Dubai',
    price: '$1,350,000',
    description: 'Commercial Office Building',
    sqft: '10,000',
    rating: '4 Star Flex R&D'
  },
  {
    image: 'https://www.shutterstock.com/image-photo/modern-glass-building-reflected-evening-city-1661545042',
    building: 'Vintage Villa',
    address: '2715 Ash Dr. San Jose, Dubai',
    price: '$1,350,000',
    description: 'Commercial Office Building',
    sqft: '10,000',
    rating: '4 Star Flex R&D'
  }
]

const FeaturedHoldings = () => {
  return (
    <div style={{margin: '4rem auto', backgroundColor: 'white', padding: '2rem 0'}}>
      <p style={{textAlign: 'center'}}>Who Are We?</p>
      <h2 style={{textAlign: 'center'}}>Featured</h2>
      <Divider variant='middle' width='20%' sx={{margin: '1rem auto', borderBottomWidth: 4, backgroundColor: '#5ca8b2' }} />
      <Grid container>
        {featuredProperties.map(featured => (
          <Grid item xs={12} md={6} lg={4}>
            <FeaturedCard data={featured} />
          </Grid>
        ))}
      </Grid>
    </div>
  )
}

export default FeaturedHoldings