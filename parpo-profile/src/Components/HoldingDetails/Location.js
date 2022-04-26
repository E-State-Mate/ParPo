import React from 'react';
import { Card, Grid, SvgIcon, Typography } from '@mui/material';
import './detailsView.css';
import {locationData} from '../../Lib/data/locationData';
import Tooltip from '@mui/material/Tooltip';
import HoldingDetails from '../../Pages/HoldingDetails';


function Location({data}) {
    const miniBar = (<div className='miniBar'></div>)
    
  
    return (
        <>
            {/* Overview Section #1 */}
            <div align='center'>
                <Card xs={4} id='location-card'>
                {locationData.map((data, index) => (
                    <Grid item key={`location-${index}`}>
                        {/* General Icon Format */}
                        <SvgIcon sx={{ fontSize: 60 }} component={data.icon} />
                        <Typography variant='subtitle2' fontSize='1rem'>{data.label}
                        {data.tooltip ? (<Tooltip title={data.tooltipData} placement='right'>{data.tooltip}</Tooltip>) : null}
                        </Typography>
                        <Typography variant='caption'>{data.data}</Typography>
                        <div style={{height: '0.5rem'}}></div>
                        {miniBar}
                    </Grid>
                ))}
                </Card>
            </div>

            <div align='center'>
                <Card id='location-card2'>

                </Card>
            </div>
        {/* Pushing the footer down   */}
        <div style={{marginBottom: '2rem'}}><span><p></p></span></div>
        </>
    )
}

export default Location;