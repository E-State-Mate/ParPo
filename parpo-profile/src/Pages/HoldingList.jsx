import React from 'react'
import { Card, CardHeader, Grid } from '@mui/material'
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import ButtonBase from '@mui/material/ButtonBase';
import PropertyType from '../Components/HoldingList/PropertyType';
import HoldingCard from '../Components/HoldingList/HoldingCard.js'

// When you make components (Filter Type card, Holding card, etc), put them in Components/HoldingList to help keep things organized


const HoldingList = () => {

  return (
    <div style={{height: '100vh'}}>
      <Grid container width='80%' style={{margin: 'auto'}}>
        
        {/* Property Filter Boxes */}
        <Grid item width='300px' style={{backgroundColor: 'lightGray'}}>
          <p>Property Type</p>
          <PropertyType />
          {/* TODO: Want this to be clickable to toggle the check, but don't need to integrate that fully yet */}
        </Grid>
        
        <Grid item width='600px'>
        <p>NUM Properties</p> {/* <-- Also update NUM to count number of properties */}
          <HoldingCard />
        
        {/* Array.map of property data. Use the Figma to determine what each card will need passed in and create a dummy object (to be replaced later) to display everything */}
        </Grid>
        
      </Grid>
    </div>
  )
}

export default HoldingList