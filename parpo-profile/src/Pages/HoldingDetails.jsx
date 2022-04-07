import { Grid } from '@mui/material';
import * as React from 'react'
import DetailsOverview from '../Components/HoldingList/DetailsOverview';
import Divider from '@mui/material/Divider';



const HoldingDetails = () => {

  return (
    <div>
      <Grid container justifyContent= 'center' backgroundColor='lightgray'>
        <Grid item width='75%' >
            <Divider className='dividers' style={{marginTop: '4rem'}}>OVERVIEW</Divider>
          <DetailsOverview />
        </Grid>
      </Grid> 
    </div>
  )
}



export default HoldingDetails;