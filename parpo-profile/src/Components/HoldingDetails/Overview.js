import { Card, Grid } from '@material-ui/core';
import { SvgIcon, Typography } from '@mui/material';
import React from 'react'
import './detailsView.css'
import {overviewData} from '../../Lib/overviewData'


function Overview({data}) {
  const miniBar = (<div className='miniBar'></div>)

  return (
    <>
      {/* Overview Section #1 */}
      <div align='center'>
        <Card container id='overview-card'>
        {overviewData.map(data => (
          <Grid item key={data}>
          
                {/* General Icon Format */}
                <SvgIcon sx={{ fontSize: 60 }} component={data.holdingIcon} />
                <Typography variant='subtitle2' fontSize='1rem'>{data.holdingLabel}</Typography>
                <Typography variant='caption'>{data.holdingData}</Typography>
                <div style={{height: '0.5rem'}}></div>
                <Typography className='mini-bar'>{miniBar}</Typography>
          </Grid>
        ))}
        </Card>
      </div>

      {/* Overview Section #2 */}
      <div>
        <Card id='overview-card2'>
          <Grid item align='center'>
            <Typography variant='subtitle2' 
            style={{
              marginBottom: '1rem',
              fontWeight:'bold',
              fontSize: '1.2rem'}}>
              Executive Summary
            </Typography>
            <Typography className='mini-bar'>{miniBar}</Typography>
            <Typography style={{marginTop: '1rem'}}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
            </Typography>
            <Typography style={{marginTop: '1rem'}}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
            </Typography>
          </Grid>  
        </Card>
      </div> 

    {/* Pushing the footer down   */}
    <div style={{marginBottom: '2rem'}}><span><p></p></span></div>
    </>
  )
}

export default Overview;