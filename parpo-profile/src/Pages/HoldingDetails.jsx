import { Grid } from '@mui/material';
import * as React from 'react';
import Divider from '@mui/material/Divider';
import Overview from '../Components/HoldingDetails/Overview';
import Location from '../Components/HoldingDetails/Location';
import Financial from '../Components/HoldingDetails/Financial'
import Property from '../Components/HoldingDetails/Property';
import Tenant from '../Components/HoldingDetails/Tenant';



const HoldingDetails = () => {

  return (
    <>
    {/* Overview Section */}
    <div>
      <Grid container justifyContent= 'center' backgroundColor='lightgray'>
        <Grid item width='67%' >
          <Divider className='dividers' style={{marginTop: '4rem'}}>OVERVIEW</Divider>
          <Overview />
        </Grid>
      </Grid> 
    </div>

    {/* Location Section */}
    <div>
      <Grid container justifyContent= 'center' backgroundColor='lightgray'>
        <Grid item width='67%' >
          <Divider className='dividers' style={{marginTop: '4rem'}}>LOCATION</Divider>
          <Location />
        </Grid>
      </Grid> 
    </div>

    {/* Financial Section */}
    <div >
      <Grid container justifyContent= 'center' backgroundColor='lightgray'>
        <Grid item width='67%' >
          <Divider className='dividers' style={{marginTop: '4rem'}}>FINANCIAL</Divider><br/><br/>
          <Financial />
        </Grid>
      </Grid> 
    </div>

    {/* Property Section */}
    <div>
      <Grid container justifyContent= 'center' backgroundColor='lightgray'>
        <Grid item width='67%' >
          <Divider className='dividers' style={{marginTop: '4rem'}}>PROPERTY</Divider><br/><br/>
          <Property />
        </Grid>
      </Grid> 
    </div>

    {/* Tenant */}
    <div>
      <Grid container justifyContent= 'center' backgroundColor='lightgray'>
        <Grid item width='67%' >
          <Divider className='dividers' style={{marginTop: '4rem'}}>TENANT</Divider>
          <Tenant />
        </Grid>
      </Grid> 
    </div>
    </>
  )
}



export default HoldingDetails;