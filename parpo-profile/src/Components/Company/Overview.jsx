import React from 'react'
import ApartmentIcon from '@mui/icons-material/Apartment';
import SavingsIcon from '@mui/icons-material/Savings';
import CurrencyExchangeIcon from '@mui/icons-material/CurrencyExchange';
import LayersIcon from '@mui/icons-material/Layers';
import { Box, Card, CardContent, SvgIcon } from '@mui/material';
import { Dialog } from '@mui/material';
import { Divider } from '@mui/material';

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
    <Card sx={{width: '25%', margin: '1rem'}}>
      <SvgIcon component={stat.icon} inheritViewBox sx={{width: '100%', fontSize: 50, marginTop: '1rem'}}/>
      <CardContent sx={{margin: 'auto'}} align='center'>
        <p>{stat.value}</p>
        <p>{stat.label}</p>
      </CardContent>
    </Card>
  )
}

const Overview = () => {
  return (
    <div>
      <p style={{textAlign: 'center'}}>Who Are We?</p>
      <h2 style={{textAlign: 'center'}}>Overview</h2>
      <Divider variant='middle' width='20%' sx={{margin: '1rem auto', borderBottomWidth: 4, backgroundColor: '#5ca8b2' }} />
      <Box sx={{ display: 'flex', justifyContent: 'space-around', width: '90%', margin: 'auto' }}>
        {stats.map(stat => (
          <OverviewCard stat={stat} />
        ))}
      </Box>
    </div>
  )
}

export default Overview