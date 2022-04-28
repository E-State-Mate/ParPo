import { Card, CardContent, Grid } from '@material-ui/core';
import { Divider, SvgIcon, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react'
import './detailsView.css'
import CottageOutlinedIcon from '@mui/icons-material/CottageOutlined';
import HomeWorkOutlinedIcon from '@mui/icons-material/HomeWorkOutlined';
import CurrencyExchangeIcon from '@mui/icons-material/CurrencyExchange';
import StarBorderOutlinedIcon from '@mui/icons-material/StarBorderOutlined';
import LayersOutlinedIcon from '@mui/icons-material/LayersOutlined';
import EmojiPeopleOutlinedIcon from '@mui/icons-material/EmojiPeopleOutlined';
import StickyNote2OutlinedIcon from '@mui/icons-material/StickyNote2Outlined';
import Layers from '@mui/icons-material/Layers';

const OverviewCard = ({stat}) => {
  // console.log(stat)
  return (
    <Card sx={{width: '80%', margin: '1rem'}}>
      <SvgIcon component={stat.icon} inheritViewBox sx={{width: '100%', fontSize: 60, paddingTop: '1rem'}}/>
      <CardContent sx={{margin: 'auto', padding: '0'}} align='center'>
        <p style={{fontSize: '1.25rem', fontWeight: 'bold', margin: 0}}>{stat.value}</p>
        <p>{stat.label}</p>
      </CardContent>
    </Card>
  )
}

function Overview(props) {
  // const miniBar = (<div className='miniBar'></div>)

  const [ overviewContent, setOverviewContent ] = useState ([])

  useEffect(() => {
    setOverviewContent([
      {
        icon: CottageOutlinedIcon,
        label: 'Building',
        value: props.featHolding.propertyType
      },
      {
        icon: CurrencyExchangeIcon,
        label: 'ROI Revenue',
        value: props.featHolding.roiRevenue
      },
      {
        icon: StarBorderOutlinedIcon,
        label: 'Class Rating',
        value: props.featHolding.rating
      },
      {
        icon: LayersOutlinedIcon,
        label: 'Square Footage',
        value: `${props.featHolding.sqft.toLocaleString()} sq. ft.`
      },
      {
        icon: EmojiPeopleOutlinedIcon,
        label: 'Occupancy',
        value: `${props.featHolding.occupancyPercentage * 100}%`
      }
    ])
  }, [,props])

  useEffect(() => { console.log(overviewContent) }, [overviewContent])

  return (
    <>
      <Divider className='dividers' style={{marginTop: '6rem'}}>OVERVIEW</Divider>
      <Grid container spacing={2} justifyContent='center'>
          {overviewContent.map((stat, index) => (
            <Grid item xs={8} md={6} lg={3} key={index}>
              <OverviewCard stat={stat} />
            </Grid>
          ))}   
      </Grid>
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