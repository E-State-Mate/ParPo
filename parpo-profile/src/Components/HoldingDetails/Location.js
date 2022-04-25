import React, { useEffect, useRef } from 'react';
import { Card, Grid, SvgIcon, Typography } from '@mui/material';
import './detailsView.css';
import {locationData} from '../../Lib/data/locationData';
import Tooltip from '@mui/material/Tooltip';
import { GoogleMap, useLoadScript, Marker, InfoWindow } from '@react-google-maps/api'

// Google Map Geocoder
const libraries = ['places'];
const mapContainerStyle = {
    width: '42rem',
    height: '42rem'
}

const center = {
    lat: 7,
    lng: 12
};



function Location({data}) {
    const miniBar = (<div className='miniBar'></div>)

    const {isLoaded, loadError} = useLoadScript({
        googleMapsApiKey: process.env.REACT_GOOGLE_MAPS_API_KEY,
        libraries,
    });

    if (loadError) return "Error loading maps";
    if (!isLoaded) return "Loading Maps";



    


    
  
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
                <div>
                    <GoogleMap mapContainerStyle={mapContainerStyle} zoom={8} center={center}></GoogleMap>
                </div>
                
                </Card>
            </div>
        {/* Pushing the footer down   */}
        <div style={{marginBottom: '2rem'}}><span><p></p></span></div>
        </>
    )
}

export default Location;