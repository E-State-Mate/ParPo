import React from 'react'
import ApartmentIcon from '@mui/icons-material/Apartment';
import SavingsIcon from '@mui/icons-material/Savings';
import CurrencyExchangeIcon from '@mui/icons-material/CurrencyExchange';
import LayersIcon from '@mui/icons-material/Layers';
import { Box, Card, CardContent, Divider, Grid, SvgIcon } from '@mui/material';

const stats = [
  {
    icon: ApartmentIcon,
    label: 'Properties Under Management',
    value: 25
  },
  { 
    icon: SavingsIcon,
    label: 'Total in Assets',
    value: '$45M'
  },
  { 
    icon: CurrencyExchangeIcon,
    label: 'Yearly Revenue',
    value: '$15.2M'
  },
  { 
    icon: LayersIcon,
    label: 'Sq Ft of Property',
    value: '350M'
  }
]

const OverviewCard = ({stat}) => {
  console.log(stat)
  return (
    <Card sx={{width: '80%', margin: '1rem auto', paddingTop: '8px'}}>
      <SvgIcon component={stat.icon} inheritViewBox sx={{width: '100%', fontSize: 50, paddingTop: '1rem'}}/>
      <CardContent sx={{margin: 'auto', padding: '0'}} align='center'>
        <p style={{fontSize: '1.5rem', fontWeight: 'bold', margin: 0}}>{stat.value}</p>
        <p>{stat.label}</p>
      </CardContent>
    </Card>
  )
}

const Overview = () => {
  return (
    <div style={{margin: '2rem auto'}} id='overview'>
      <p style={{textAlign: 'center'}}>Who Are We?</p>
      <h2 style={{textAlign: 'center'}}>Overview</h2>
      <Divider variant='middle' width='20%' sx={{margin: '1rem auto', borderBottomWidth: 4, backgroundColor: '#5ca8b2' }} />
      <Grid container>
          {stats.map(stat => (
            <Grid item xs={12} md={6} lg={3}>
              <OverviewCard stat={stat} />
            </Grid>
          ))}   
      </Grid>
    </div>
  )
}

export default Overview