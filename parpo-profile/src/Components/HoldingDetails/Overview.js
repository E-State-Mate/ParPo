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
    <Card sx={{width: '80%', margin: '1rem auto'}}>
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
        // value: props.featHolding.roiRevenue
        value: '$20,000'
      },
      {
        icon: StarBorderOutlinedIcon,
        label: 'Class Rating',
        value: props.featHolding.rating
      },
      {
        icon: LayersOutlinedIcon,
        label: 'Square Footage',
        value: `${props.featHolding.sqft !== undefined ? props.featHolding.sqft.toLocaleString() : 0} sq. ft.`
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
      <Divider className='dividers' style={{marginTop: '6rem', marginBottom: '2rem'}}>OVERVIEW</Divider>
      <Grid container style={{width: '90%', margin: 'auto'}} spacing={2} justifyContent='center'>
        <Grid item lg={1} sx={{display: {xs: 'none', md: 'flex'}}} />
          {overviewContent.map((stat, index) => (
            <Grid item xs={12} sm={12} md={6} lg={2} key={index}>
              <OverviewCard stat={stat} />
            </Grid>
          ))}
        <Grid item lg={1} sx={{display: {xs: 'none', md: 'flex'}}} />   
      </Grid>
        
      {/* Overview Section #2 */}
        <Card id='overview-card2' style={{margin: '2rem auto', width: '90%'}}>
          <Grid container style={{margin: '2rem auto'}}>
            <Grid item xs={4}>
              <SvgIcon sx={{ fontSize: 60 }} style={{display: 'block', margin: 'auto'}} component={StickyNote2OutlinedIcon} />
            </Grid>
            <Grid item xs={8}>
              <Typography
                align='center'
                sx={{
                  fontWeight:'bold',
                  fontSize: '1.2rem',
                  padding: '1rem'
                }}>
                  Executive Summary
                </Typography>
            </Grid>
            <Grid item xs={12}>
              <Divider width='90%' sx={{m: '1rem auto'}}/>
            </Grid>
            <Grid item xs={12} style={{minHeight: '200px'}}>
              <Typography align='center' sx={{marginTop: '2rem'}}>{props.featHolding.executiveSummary}</Typography>
            </Grid>
          </Grid> 
        </Card>
    </>
  )
}

export default Overview;