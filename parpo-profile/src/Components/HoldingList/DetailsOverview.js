import { Card, Grid } from '@material-ui/core';
import { SvgIcon, Typography } from '@mui/material';
import React from 'react'
import './holdingDetailsView.css'
import {overviewData} from './detailsOverviewData'
import { shadows } from '@mui/system';


function DetailsOverview({data}) {
  const miniBar = (<div className='miniBar'></div>)

  return (
    <>
      {/* Overview Section #1 */}
      <div align='center'>
        <Grid container className='overview-card'>
        {overviewData.map(data => (
          <Grid item key={data} className='overview-mini-card'>
            <Card className='overview-mini-card' style={{borderRadius:'1% !important'}}>
              <div className='overview-mini-card'>
                {/* General Icon Format */}
                <SvgIcon sx={{ fontSize: 60 }} component={data.holdingIcon} />
                <Typography variant='subtitle2' fontSize='1rem'>{data.holdingData}</Typography>
                <Typography variant='caption'>{data.holdingLabel}</Typography>
                <Typography className='mini-bar'>{miniBar}</Typography>
                </div>
                {/* <div>
                <Typography className='mini-bar'>{miniBar}</Typography>
                </div> */}

            </Card>

          </Grid>
        ))}
        </Grid>
      </div>

      {/* Overview Section #2 */}
      <div>
        <Card className='overview-card2'>
          <Grid item align='center'>
            <Typography variant='subtitle2' 
            style={{
              marginBottom: '1rem',
              fontWeight:'bold',
              fontSize: '1.2rem'}}>
              Executive Summary
            </Typography>
            <Typography className='mini-bar'>{miniBar}</Typography>
            <Typography style={{marginTop: '1rem'}}y>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
            </Typography>
            <Typography style={{marginTop: '1rem'}}y>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
            </Typography>
          </Grid>  
        </Card>
      </div> 

    {/* Pushing the footer down   */}
    <div style={{marginBottom: '50rem'}}><span><p></p></span></div>
    </>
  )
}

export default DetailsOverview;