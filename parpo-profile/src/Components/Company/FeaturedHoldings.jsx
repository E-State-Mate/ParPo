import React, {useEffect, useState} from 'react'
import FeaturedCard from './FeaturedCard'
import { css } from '@emotion/react'
import { Box, Card, CardMedia, Divider, Grid } from '@mui/material'
import { getHoldings } from '../../Lib/utils/holdingsFetcher';
import {BounceLoader} from 'react-spinners';

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

const override = css`
  display: block;
  margin: 2rem auto;
  border-color: red
  `;

const FeaturedHoldings = () => {
  const [featHoldings, setFeatHoldings] = useState([])
  const [isLoaded, setIsLoaded] = useState(false)

  const fetchHoldings = async () => {
    setFeatHoldings(await getHoldings());
  }

  useEffect(() => {
    fetchHoldings();
  }, [])

  useEffect(() => {
    if(featHoldings.length!==0 && isLoaded===false){
      setIsLoaded(true);
      // console.log(featHoldings)
    }
  }, [featHoldings])

  // useEffect(() => {console.log(isLoaded)}, [isLoaded])

  return (
    <div style={{margin: '4rem auto', backgroundColor: 'white', padding: '2rem 0'}} id='featured'>
      <p style={{textAlign: 'center'}}>Who Are We?</p>
      <h2 style={{textAlign: 'center'}}>Featured</h2>
      <Divider variant='middle' width='20%' sx={{margin: '1rem auto', borderBottomWidth: 4, backgroundColor: '#5ca8b2' }} />
      <Grid container>
        {
          isLoaded ?
          <>
            {featHoldings.map((featured, index) => (
              <Grid item xs={12} md={6} lg={4} key={index}>
                <FeaturedCard data={featured} />
              </Grid>
            ))}
          </>
          :
          <Grid item xs={12}>
            <BounceLoader loading={!isLoaded} color={'#5ca8b2'} style={{margin: '2rem auto'}} css={override}/>
          </Grid>
        }
      </Grid>
    </div>
  )
}

export default FeaturedHoldings