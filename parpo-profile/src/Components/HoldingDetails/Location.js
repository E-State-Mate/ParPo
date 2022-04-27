import React from 'react';
import { Card, Grid, SvgIcon, Typography } from '@mui/material';
import './detailsView.css';
import {locationData} from '../../Lib/data/locationData';
import Tooltip from '@mui/material/Tooltip';
import HoldingDetails from '../../Pages/HoldingDetails';
import HouseIcon from '@mui/icons-material/House';


function Location(props) {
    const miniBar = (<div className='miniBar'></div>)
    
  
    return (
        <>
            {/* Overview Section #1 */}
            <div align='center'>
                <Card xs={4} id='location-card'>
                    <Grid item>
                        {/* General Icon Format */}
                        <SvgIcon sx={{ fontSize: 60 }} component={HouseIcon} />
                        <Typography variant='subtitle2' fontSize='1rem'>Sub Market
                        </Typography>
                        <Typography variant='caption'>{props.featHolding.city}</Typography>
                        <div style={{height: '0.5rem'}}></div>
                        {miniBar}
                    </Grid>
                    <Grid item>
                        {/* General Icon Format */}
                        <SvgIcon sx={{ fontSize: 60 }} component={HouseIcon} />
                        <Typography variant='subtitle2' fontSize='1rem'>Full Address
                        </Typography>
                        <Typography variant='caption'>{props.featHolding.street}, {props.featHolding.state} {props.featHolding.zipCode}</Typography>
                        <div style={{height: '0.5rem'}}></div>
                        {miniBar}
                    </Grid>
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