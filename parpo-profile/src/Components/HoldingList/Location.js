import React from 'react';
import { Card, Grid, SvgIcon, Typography } from '@mui/material';
import './detailsView.css';
import {locationData} from './locationData';
import Tooltip from '@mui/material/Tooltip';



function Location({data}) {
    const miniBar = (<div className='miniBar'></div>)
    
  
    return (
        <>
            {/* Overview Section #1 */}
            <div align='center'>
                <Card container xs={4} id='location-card'>
                {locationData.map(data => (
                    <Grid item key={data}>
                        {/* General Icon Format */}
                        <SvgIcon sx={{ fontSize: 60 }} component={data.icon} />
                        <Typography variant='subtitle2' fontSize='1rem'>{data.label}
                        {data.tooltip ? (<Tooltip title={data.tooltipData} placement='right'>{data.tooltip}</Tooltip>) : null}
                        </Typography>
                        <Typography variant='caption'>{data.data}</Typography>
                        <div style={{height: '0.5rem'}}></div>
                        <Typography className='mini-bar'>{miniBar}</Typography>
                    </Grid>
                ))}
                </Card>
            </div>

            <div align='center'>
                <Card container id='location-card2'>

                </Card>
            </div>
        {/* Pushing the footer down   */}
        <div style={{marginBottom: '2rem'}}><span><p></p></span></div>
        </>
    )
}

export default Location;