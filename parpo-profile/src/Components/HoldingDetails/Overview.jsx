import { useEffect, useState } from 'react'
import { Card, CardContent, Grid } from '@material-ui/core';
import { Divider, SvgIcon, Typography } from '@mui/material';
import './detailsView.css'
import CottageOutlinedIcon from '@mui/icons-material/CottageOutlined';
import HomeWorkOutlinedIcon from '@mui/icons-material/HomeWorkOutlined';
import CurrencyExchangeIcon from '@mui/icons-material/CurrencyExchange';
import StarBorderOutlinedIcon from '@mui/icons-material/StarBorderOutlined';
import LayersOutlinedIcon from '@mui/icons-material/LayersOutlined';
import EmojiPeopleOutlinedIcon from '@mui/icons-material/EmojiPeopleOutlined';
import StickyNote2OutlinedIcon from '@mui/icons-material/StickyNote2Outlined';
import Layers from '@mui/icons-material/Layers';
import {BounceLoader} from 'react-spinners';
import { css } from '@emotion/react'

const override = css`
  display: block;
  margin: 2rem auto;
  border-color: red
  `;

const OverviewCard = ({stat, loaded}) => {
  // console.log(stat)
  return (
    <Card sx={{width: '80%', margin: '1rem auto'}} style={{margin: '1rem auto'}}>
      <SvgIcon component={stat.icon} inheritViewBox sx={{width: '100%', fontSize: 60, paddingTop: '1.5rem'}}/>
      <CardContent sx={{margin: 'auto', padding: '0'}} align='center'>
        { loaded ?
            <p style={{fontSize: '1.1rem', fontWeight: 'bold', margin: 0}}>{stat.value}</p>
            :
            <BounceLoader loading={!loaded} color={'#5ca8b2'} style={{margin: '2rem auto'}} css={override}/>
        }
        <p style={{fontSize: '0.8rem', padding: '0'}}>{stat.label}</p>
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
        label: 'Square Feet',
        value: `${props.featHolding.sqft !== undefined ? props.featHolding.sqft.toLocaleString() : 0}`
      },
      {
        icon: EmojiPeopleOutlinedIcon,
        label: 'Occupancy',
        value: `${props.featHolding.occupancyPercentage * 100}%`
      }
    ])
  }, [,props])

  // useEffect(() => { console.log(overviewContent) }, [overviewContent])

  return (
    <>
      <Divider className='details-dividers' style={{margin: '6rem auto 2rem auto'}}>OVERVIEW</Divider>
      
      <Grid container style={{width: '80%', margin: 'auto'}} justifyContent='space-between'>
          {overviewContent.map((stat, index) => (
            <Grid item xs={12} sm={2} md={2} lg={2} key={index}>
              <OverviewCard stat={stat} loaded={props.isLoaded}/>
            </Grid>
          ))} 
      </Grid>
        
      {/* Overview Section #2 */}
      <Card id='execSummary-details'>
        <div style={{margin: '8px'}}>
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
            
          </Grid>
          <Grid item xs={12} style={{minHeight: '200px'}}>
          { props.isLoaded ?
            <Typography align='justify' sx={{margin: '2rem auto', width: '80%'}} style={{}}>{props.featHolding.executiveSummary}</Typography>
            :
            <BounceLoader loading={!props.isLoaded} color={'#5ca8b2'} style={{margin: '2rem auto'}} css={override}/>
          }
          </Grid>
        </Grid> 
        </div>
        </Card>
    </>
  )
}

export default Overview;