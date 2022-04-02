import React from 'react'
import { Card, CardHeader, Grid } from '@mui/material'
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import ButtonBase from '@mui/material/ButtonBase';
import PropertyType from '../Components/HoldingList/PropertyType';
import HoldingCard from '../Components/HoldingList/HoldingCard.js'
import holdingData from '../Lib/holdingData.json'
import {propertyTypes} from '../Lib/propertyTypeData'

// When you make components (Filter Type card, Holding card, etc), put them in Components/HoldingList to help keep things organized


const HoldingList = () => {

  return (
    <div id='holding-list-container'>
      <Grid container width='90%' style={{margin: 'auto'}}>
        {/* Property Filter Boxes */}
        <Grid item lg />
        <Grid item md={4} lg={2}>
          <p style={{margin: '1rem'}}>Property Type</p>
          {propertyTypes.map(property => ( <PropertyType property={property}/> ))}
        </Grid>
        <Grid item md={8} lg={5}>
          <p style={{margin: '1rem'}}>{holdingData.length} Properties</p>
          {holdingData.map(holding => ( <HoldingCard holding={holding} /> ))}
        </Grid>
        <Grid item lg />
      </Grid>
    </div>
  )
}

export default HoldingList