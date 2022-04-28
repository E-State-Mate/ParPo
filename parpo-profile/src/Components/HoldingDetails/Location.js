import React, { useState } from 'react';
import { Card, Divider, Grid, SvgIcon, Typography } from '@mui/material';
import './detailsView.css';
import PlaceOutlinedIcon from '@mui/icons-material/PlaceOutlined';
import {
    GoogleMap, 
    useLoadScript, 
    Marker,
} from '@react-google-maps/api'


// Google Map
const libraries= ["places"]
const mapContainerStyle = {
    width: '60rem',
    height: '42rem',
}
const options = {
    disableDefaultUI: true,
    zoomControl: true,
}

function Location(props) {
    const miniBar = (<div className='miniBar'></div>)

    const {isLoaded, loadError} = useLoadScript({
        googleMapsApiKey: process.env.REACT_GOOGLE_MAPS_API_KEY,
        libraries
    })    

    const center = {
        lat: props.featHolding.lat,
        lng: props.featHolding.lng
    }

    if (loadError) return "Error loading map";
    if (!isLoaded) return "Loading map"
    
    return (
        <>
            {/* Overview Section #1 */}
            <div align='center'>
                <Card id='location-card' sx={{width: '90%'}}>
                    <Grid item>
                        {/* General Icon Format */}
                        <SvgIcon sx={{ fontSize: 60 }} component={PlaceOutlinedIcon} />
                        <Typography variant='subtitle2' fontSize='1rem'>Sub Market
                        </Typography>
                        <Typography variant='caption'>{props.featHolding.city}</Typography>
                        <div style={{height: '0.5rem'}}></div>
                        <Divider width='30%' margin='auto' />
                    </Grid>
                    <Grid item>
                        {/* General Icon Format */}
                        <SvgIcon sx={{ fontSize: 60 }} component={PlaceOutlinedIcon} />
                        <Typography variant='subtitle2' fontSize='1rem'>Full Address
                        </Typography>
                        <Typography variant='caption'>{props.featHolding.street},<br/> {props.featHolding.city}, {props.featHolding.state} {props.featHolding.zipCode}</Typography>
                        <div style={{height: '0.5rem'}}></div>
                        <Divider width='30%' margin='auto' />
                    </Grid>
                </Card>
            </div>

            <div align='center'>
                <Card id='google-map' sx={{width: '90%'}}>
                <div>
                    <GoogleMap 
                        mapContainerStyle={mapContainerStyle} 
                        zoom={13} 
                        center={center}
                        options={options}
                    >
                    <Marker position={{ lat: props.featHolding.lat, lng: props.featHolding.lng }} />
                    </GoogleMap>
                </div>

                </Card>
            </div>
        </>
    )
}

export default Location;