import { Card, Grid } from '@material-ui/core';
import { Divider, SvgIcon, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react'
import './detailsView.css'
import HoldingDetails from '../../Pages/HoldingDetails';
import Cottage from '@mui/icons-material/House';


function Overview(props) {
  const miniBar = (<div className='miniBar'></div>)

  // useEffect(() => {
  //   if(featHolding.length === 1 && isLoaded === false){
  //     setIsLoaded(true);
  //   }
  // })


  return (
    <>
      {/* Overview Section #1 */}
      {/* <div> */}
          <Grid container id='overview-card' >
            <Card>
              {/* General Icon Format */}
              <SvgIcon sx={{ fontSize: 60 }} component={Cottage} />
              <Typography variant='subtitle2' fontSize='1rem'>{props.propertyType}</Typography>
              <Typography variant='caption'>Building</Typography>
              {/* <Typography className='mini-bar'>{miniBar}</Typography> */}

            </Card>
            <Card >
              <SvgIcon sx={{ fontSize: 60 }} component={Cottage} />
              <Typography variant='subtitle2' fontSize='1rem'>{props.propertyType}</Typography>
              <Typography variant='caption'>ROI Revenue</Typography>
              {/* <Typography className='mini-bar'>{miniBar}</Typography> */}
            </Card>
            <Card >
              <SvgIcon sx={{ fontSize: 60 }} component={Cottage} />
              <Typography variant='subtitle2' fontSize='1rem'>{props.propertyType}</Typography>
              <Typography variant='caption'>Class Rating</Typography>
              {/* <Typography className='mini-bar'>{miniBar}</Typography> */}
            </Card>
            <Card >
              <SvgIcon sx={{ fontSize: 60 }} component={Cottage} />
              <Typography variant='subtitle2' fontSize='1rem'>{props.propertyType}</Typography>
              <Typography variant='caption'>Sqft</Typography>
              {/* <Typography className='mini-bar'>{miniBar}</Typography> */}
            </Card>
            <Card >
              <SvgIcon sx={{ fontSize: 60 }} component={Cottage} />
              <Typography variant='subtitle2' fontSize='1rem'>{props.propertyType}</Typography>
              <Typography variant='caption'>Occupancy</Typography>
              {/* <Typography className='mini-bar'>{miniBar}</Typography> */}
            </Card>
          </Grid>
        
      {/* </div> */}


      {/* Overview Section #2 */}
      <div>
        <Card id='overview-card2'>
          <Grid item align='center'>
            <Typography variant='subtitle2' 
            sx={{
              marginBottom: '1rem',
              fontWeight:'bold',
              fontSize: '1.2rem'}}>
              Executive Summary</Typography>
              <Divider width='30%' margin='auto' />
            <Typography sx={{marginTop: '1rem'}}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</Typography>
          </Grid>  
        </Card>
      </div> 
    </>
  )
}

export default Overview;