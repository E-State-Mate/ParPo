import React from 'react';
import { Card, Divider, Grid, SvgIcon, Typography } from '@mui/material';
import PlaceOutlinedIcon from '@mui/icons-material/PlaceOutlined';
import {
    GoogleMap, 
    Marker,
    LoadScript
} from '@react-google-maps/api'
import {BounceLoader} from 'react-spinners';
import { css } from '@emotion/react'

const override = css`
  display: block;
  margin: 2rem auto;
  border-color: red
  `;


// Google Map
// const libraries= ["places"]
const mapContainerStyle = {
    width: '100%',
    height: '300px',
}
const options = {
    disableDefaultUI: true,
    zoomControl: true,
}
const googleMapsKey: string = (process.env.REACT_APP_GOOGLE_MAPS_API_KEY as string);

const Location = (props: any) => {

    const center = {
        lat: props.featHolding.lat,
        lng: props.featHolding.lng
    }
    
    return (
        <>
            <Divider className='details-dividers' style={{margin: '6rem auto 2rem auto'}}>LOCATION</Divider>

            <div>
                <Card id='location-card' sx={{width: '80%', margin: 'auto'}}>
                    <Grid item>
                        {/* General Icon Format */}
                        <SvgIcon sx={{ fontSize: 60 }} component={PlaceOutlinedIcon} />
                        <Typography variant='subtitle2' fontSize='1rem'>Sub Market</Typography>
                        { props.isLoaded ?
                            <Typography variant='caption'>{props.featHolding.city}<br/><br/></Typography>
                            :
                            <BounceLoader loading={!props.isLoaded} color={'#5ca8b2'} css={override}/>
                        }
                        <div style={{height: '0.5rem'}}></div>
                        <Divider />
                    </Grid>
                    <Grid item>
                        {/* General Icon Format */}
                        <SvgIcon sx={{ fontSize: 60 }} component={PlaceOutlinedIcon} />
                        <Typography variant='subtitle2' fontSize='1rem'>Full Address</Typography>
                        { props.isLoaded ?
                            <Typography variant='caption'>{props.featHolding.street},<br/> {props.featHolding.city}, {props.featHolding.state} {props.featHolding.zipCode}</Typography>
                            :
                            <BounceLoader loading={!props.isLoaded} color={'#5ca8b2'} css={override}/>
                        }
                        <div style={{height: '0.5rem'}}></div>
                        <Divider />
                    </Grid>
                </Card>
            </div>

            <Card id='google-map' sx={{width: '80%', margin: 'auto'}}>
                { props.isLoaded ?
                    <LoadScript googleMapsApiKey={googleMapsKey}>
                        <GoogleMap 
                            mapContainerStyle={mapContainerStyle} 
                            zoom={13} 
                            center={center}
                            options={options}
                        >
                            <Marker position={{ lat: props.featHolding.lat, lng: props.featHolding.lng }} />
                        </GoogleMap>
                    </LoadScript>
                    :
                    <BounceLoader loading={!props.isLoaded} color={'#5ca8b2'} css={override}/>
                }
            </Card>
        </>
    )
}

export default Location;