import { Card, Grid } from '@material-ui/core';
import { Divider, SvgIcon, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react'
import './detailsView.css'
import {overviewData} from '../../Lib/data/overviewData'
import { getHoldingById } from '../../Lib/utils/holdingsFetcher'


function Overview({id}) {
  const miniBar = (<div className='miniBar'></div>)

  // useEffect(() => {
  //   if(featHolding.length === 1 && isLoaded === false){
  //     setIsLoaded(true);
  //   }
  // })


  return (
    <>
      {/* Overview Section #1 */}
      <div>
        <Card id='overview-card'>
        {/* {overviewData.map(data => ( */}
          {/* <Grid item key={data}> */}
          
                {/* General Icon Format */}
                {/* <SvgIcon sx={{ fontSize: 60 }} component={data.holdingIcon} /> */}
                {/* <Typography variant='subtitle2' fontSize='1rem'>{data.holdingLabel}</Typography> */}
                {/* <Typography variant='caption'>{data.holdingData}</Typography> */}
                {/* <div style={{height: '0.5rem'}}></div> */}
                {/* <Typography className='mini-bar'>{miniBar}</Typography> */}
          {/* </Grid> */}
        {/* ))} */}
        </Card>
      </div>


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