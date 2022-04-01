import { Card, CardContent, CardHeader, CardMedia, Paper, Typography } from '@mui/material'
import React from 'react'
import holdingData from './holdingData.json'
import { makeStyles } from '@material-ui/core'

const useStyles = makeStyles({
  image: {
    position: "relative left"
  }
})

export default function HoldingCard() {
  const classes = useStyles()

  return (
    <div>
      {/* 
        {holdingData.map(holding => (
              <Card key={holding}>
              {holding.buildingName}
            </Card>
        ))}    */}

        {/* <CardMedia
              component="img"
              sx={{ width: 151 }}
              image={holding.image}
              alt="Live from space album cover"
              /> */}
        
        
          
          {holdingData.map(holding => (
            <>
              <Card>
                <CardMedia
                      className= {classes.image}
                      display= "flex !important"
                      component="img"
                      sx={{ width: 151 }}
                      image={holding.image}
                      alt="Live from space album cover"
                    />

                
                  <Typography variant= "body2">
                      {holding.buildingName}<br/>
                      {holding.propertyType.toUpperCase()}<br/><br/>
                      {holding.address}<br/>
                      {holding.city}, {holding.state} {holding.zipCode}
                  </Typography>
                
                  <Typography variant= "body2" align= "right">
                    {holding.occupancy}% occupancy<br/>
                    {holding.sqft} sqft <br/>
                    {holding.revenue} revenue <br/>
                    {holding.rating} rating

                  </Typography>
              </Card>
            </>
          ))}

        
      
    </div>
  )
}