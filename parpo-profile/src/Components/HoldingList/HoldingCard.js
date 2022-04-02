import { Card, CardContent, CardHeader, CardMedia, Grid, Paper, Typography } from '@mui/material'
import PeopleIcon from '@mui/icons-material/People';
import LayersIcon from '@mui/icons-material/Layers';
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';
import StarOutlineIcon from '@mui/icons-material/StarOutline';
import React from 'react'
import { makeStyles } from '@material-ui/core'

const useStyles = makeStyles({
  image: {
    position: "relative left"
  }
})

const rightCol = ['occupancy', 'sqft', 'revenue', 'rating']

const HoldingCard = ({holding}) => {
  const classes = useStyles()

  return (
    <Card className='prop-list-card'>
      <Grid container align='left' style={{height: '100%'}}>
        <Grid item xs={12} sm={4}>
          <CardMedia
            className= {classes.image}
            display= "flex !important"
            component="img"
            sx={{ width: '100%' }}
            image={holding.image}
            alt="Live from space album cover"
          />
        </Grid>

        {/* Center column -- includes building name, type, address and price */}
        <Grid item xs={12} sm={4} mt={2}>
          <div className='prop-list-card-title'>
            <Typography variant='h6'>{holding.buildingName}</Typography>
            <Typography variant='body1'>{holding.propertyType.toUpperCase()}</Typography>
          </div>
          <div className='prop-list-card-address'>
            <Typography variant='body2'>{holding.address}</Typography>
            <Typography variant='body2'>{holding.city}, {holding.state} {holding.zipCode}</Typography>
          </div>
          <div className='prop-list-card-list'>
            <Typography variant='body2'>{holding.price}</Typography>
          </div>
        </Grid>

        {/* Right column -- features specific building data */}
        <Grid item xs={12} sm={4} className='prop-list-card-right' mt={2}>
          <div className='prop-list-card-right-info'>
            <PeopleIcon sx={{marginRight: '1rem'}}/>
            <Typography variant='body2'>{holding.occupancy}% occupancy</Typography>
          </div>
          <div className='prop-list-card-right-info'>
            <LayersIcon sx={{marginRight: '1rem'}}/>
            <Typography variant='body2'>{holding.sqft} Sq Ft</Typography>
          </div>
          <div className='prop-list-card-right-info'>
            <AccountBalanceIcon sx={{marginRight: '1rem'}}/>
            <Typography variant='body2'>{holding.revenue} in 2021 Revenue</Typography>
          </div>
          <div className='prop-list-card-right-info'>
            <StarOutlineIcon sx={{marginRight: '1rem'}}/>
            <Typography variant='body2'>{holding.rating} Rating</Typography>
          </div>
        </Grid>
      </Grid>
      <Typography align='center' m={1} sx={{fontSize: '0.625rem'}}>View More</Typography>
    </Card>
  )
}

export default HoldingCard