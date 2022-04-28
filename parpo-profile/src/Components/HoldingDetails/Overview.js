import { Card, Grid } from '@material-ui/core';
import { Divider, SvgIcon, Typography } from '@mui/material';
import React from 'react'
import './detailsView.css'
import CottageOutlinedIcon from '@mui/icons-material/CottageOutlined';
import HomeWorkOutlinedIcon from '@mui/icons-material/HomeWorkOutlined';
import StarBorderOutlinedIcon from '@mui/icons-material/StarBorderOutlined';
import LayersOutlinedIcon from '@mui/icons-material/LayersOutlined';
import EmojiPeopleOutlinedIcon from '@mui/icons-material/EmojiPeopleOutlined';
import StickyNote2OutlinedIcon from '@mui/icons-material/StickyNote2Outlined';




function Overview(props) {
  // const miniBar = (<div className='miniBar'></div>)

  return (
    <>
      {/* Overview Section #1 */}
          <Grid container id='overview-card' >
            <Card className='mini-card'>
              {/* General Icon Format */}
              <SvgIcon sx={{ fontSize: 60 }} component={CottageOutlinedIcon} />
              <Typography variant='subtitle2' fontSize='1rem'>{props.featHolding.propertyType}</Typography>
              <Typography variant='caption'>Building</Typography>
              {/* <Typography className='mini-bar'>{miniBar}</Typography> */}
              <div style={{height: '0.5rem'}}></div>
              <Divider width='30%' margin='auto' />
            </Card>

            <Card className='mini-card'>
              <SvgIcon sx={{ fontSize: 60 }} component={HomeWorkOutlinedIcon} />
              <Typography variant='subtitle2' fontSize='1rem'>{props.featHolding.roiRevenue}</Typography>
              <Typography variant='caption'>ROI Revenue</Typography>
              {/* <Typography className='mini-bar'>{miniBar}</Typography> */}
              <div style={{height: '0.5rem'}}></div>
              <Divider width='30%' margin='auto' />
            </Card>

            <Card className='mini-card'>
              <SvgIcon sx={{ fontSize: 60 }} component={StarBorderOutlinedIcon} />
              <Typography variant='subtitle2' fontSize='1rem'>{props.featHolding.rating}</Typography>
              <Typography variant='caption'>Class Rating</Typography>
              {/* <Typography className='mini-bar'>{miniBar}</Typography> */}
              <div style={{height: '0.5rem'}}></div>
              <Divider width='30%' margin='auto' />
            </Card>

            <Card className='mini-card'>
              <SvgIcon sx={{ fontSize: 60 }} component={LayersOutlinedIcon} />
              <Typography variant='subtitle2' fontSize='1rem'>{props.featHolding.sqft}</Typography>
              <Typography variant='caption'>Sqft</Typography>
              {/* <Typography className='mini-bar'>{miniBar}</Typography> */}
              <div style={{height: '0.5rem'}}></div>
              <Divider width='30%' margin='auto' />
            </Card>

            <Card className='mini-card'>
              <SvgIcon sx={{ fontSize: 60 }} component={EmojiPeopleOutlinedIcon} />
              <Typography variant='subtitle2' fontSize='1rem'>{props.featHolding.occupancyPercentage*100}%</Typography>
              <Typography variant='caption'>Occupancy</Typography>
              {/* <Typography className='mini-bar'>{miniBar}</Typography> */}
              <div style={{height: '0.5rem'}}></div>
              <Divider width='30%' margin='auto' />
            </Card>
          </Grid>
        
      {/* Overview Section #2 */}
      <div>
        <Card id='overview-card2'>
          <Grid item align='center'>
          <SvgIcon sx={{ fontSize: 60 }} component={StickyNote2OutlinedIcon} />
            <Typography variant='subtitle2' 
            sx={{
              marginBottom: '1rem',
              fontWeight:'bold',
              fontSize: '1.2rem'}}>
              Executive Summary</Typography>
              <Divider width='30%' margin='auto' />
            <Typography sx={{marginTop: '1rem'}}>
            {props.featHolding.executiveSummary}
            </Typography>
          </Grid>  
        </Card>
      </div> 
    </>
  )
}

export default Overview;