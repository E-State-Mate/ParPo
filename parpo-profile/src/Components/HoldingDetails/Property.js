import React from 'react'
import { Card, Divider, Grid, SvgIcon, Typography } from '@mui/material'
import './detailsView.css'
import {amenitiesData} from '../../Lib/data/amenitiesData'
import HouseIcon from '@mui/icons-material/House'

function Property(props) {
    // const miniBar = (<div className='miniBar'></div>)

    return (
        <>
            {/* Property Section #1 */}
            <div align='center'>
                <Card className='property-card'>                
                    <Grid item style={{width: '33%'}}>
                        <SvgIcon sx={{ fontSize: 60 }} component={HouseIcon} />
                        <Typography variant='subtitle2' fontSize='1rem'>Property Type</Typography>
                        <Typography variant='caption'>{props.featHolding.propertyType}</Typography>
                        <div style={{height: '0.5rem'}}></div>
                        <Divider width='30%' margin='auto' />
                    </Grid>
                    <Grid item style={{width: '33%'}}>
                        <SvgIcon sx={{ fontSize: 60 }} component={HouseIcon} />
                        <Typography variant='subtitle2' fontSize='1rem'>Rating</Typography>
                        <Typography variant='caption'>Class {props.featHolding.rating}</Typography>
                        <div style={{height: '0.5rem'}}></div>
                        <Divider width='30%' margin='auto' />
                    </Grid>
                    <Grid item style={{width: '33%'}}>
                        <SvgIcon sx={{ fontSize: 60 }} component={HouseIcon} />
                        <Typography variant='subtitle2' fontSize='1rem'>Zone</Typography>
                        <Typography variant='caption'>{props.featHolding.zone}</Typography>
                        <div style={{height: '0.5rem'}}></div>
                        <Divider width='30%' margin='auto' />
                    </Grid>
                    <Grid item style={{width: '33%'}}>
                        <SvgIcon sx={{ fontSize: 60 }} component={HouseIcon} />
                        <Typography variant='subtitle2' fontSize='1rem'>Year Built</Typography>
                        <Typography variant='caption'>{props.featHolding.yearBuilt}</Typography>
                        <div style={{height: '0.5rem'}}></div>
                        <Divider width='30%' margin='auto' />
                    </Grid>
                    <Grid item style={{width: '33%'}}>
                        <SvgIcon sx={{ fontSize: 60 }} component={HouseIcon} />
                        <Typography variant='subtitle2' fontSize='1rem'>Plot Size</Typography>
                        <Typography variant='caption'>{props.featHolding.plotSize} Sqft</Typography>
                        <div style={{height: '0.5rem'}}></div>
                        <Divider width='30%' margin='auto' />
                    </Grid>
                    <Grid item style={{width: '33%'}}>
                        <SvgIcon sx={{ fontSize: 60 }} component={HouseIcon} />
                        <Typography variant='subtitle2' fontSize='1rem'>Number of Floors</Typography>
                        <Typography variant='caption'>{props.featHolding.numberOfFloors}</Typography>
                        <div style={{height: '0.5rem'}}></div>
                        <Divider width='30%' margin='auto' />
                    </Grid>
                    <Grid item style={{width: '33%'}}>
                        <SvgIcon sx={{ fontSize: 60 }} component={HouseIcon} />
                        <Typography variant='subtitle2' fontSize='1rem'>Floor Plate</Typography>
                        <Typography variant='caption'>{props.featHolding.floorPlate} Sqft</Typography>
                        <div style={{height: '0.5rem'}}></div>
                        <Divider width='30%' margin='auto' />
                    </Grid>
                    <Grid item style={{width: '33%'}}>
                        <SvgIcon sx={{ fontSize: 60 }} component={HouseIcon} />
                        <Typography variant='subtitle2' fontSize='1rem'>Opportunity Zone</Typography>
                        <Typography variant='caption'>// ADD //</Typography>
                        <div style={{height: '0.5rem'}}></div>
                        <Divider width='30%' margin='auto' />
                    </Grid>
                    <Grid item style={{width: '33%'}}>
                        <SvgIcon sx={{ fontSize: 60 }} component={HouseIcon} />
                        <Typography variant='subtitle2' fontSize='1rem'>Parking Info</Typography>
                        <Typography variant='caption'>{props.featHolding.parkingInfo}</Typography>
                        <div style={{height: '0.5rem'}}></div>
                        <Divider width='30%' margin='auto' />
                    </Grid>
                    <Grid item style={{width: '33%'}}>
                        <SvgIcon sx={{ fontSize: 60 }} component={HouseIcon} />
                        <Typography variant='subtitle2' fontSize='1rem'>Parking Ratio</Typography>
                        <Typography variant='caption'>{props.featHolding.parkingRatio}:1</Typography>
                        <div style={{height: '0.5rem'}}></div>
                        <Divider width='30%' margin='auto' />
                    </Grid>
                    <Grid item style={{width: '33%'}}>
                        <SvgIcon sx={{ fontSize: 60 }} component={HouseIcon} />
                        <Typography variant='subtitle2' fontSize='1rem'>Property Ratio</Typography>
                        <Typography variant='caption'>{props.featHolding.propertyRatio}:1</Typography>
                        <div style={{height: '0.5rem'}}></div>
                        <Divider width='30%' margin='auto' />
                    </Grid>
                </Card>
            </div><br/> 

            <div>
                <Card align='center' className='property-card2'>
                    <div>
                    <SvgIcon sx={{ fontSize: 60 }} component={HouseIcon} />
                    <Typography variant='subtitle2' fontSize='1rem'>Amenities</Typography>
                    <div style={{height: '0.5rem'}}></div>
                    <Divider width='30%' margin='auto' />
                    </div><br/><br/>

                    <div style={{columns: 3}}>
                    {amenitiesData.map((data, index) => (
                        <Grid item key={`amenities-${index}`} >
                            <Typography variant='caption'>{data}</Typography>
                        <div style={{height: '0.5rem'}}></div>
                        </Grid>
                
                    ))}
                    </div>
                </Card>
            </div> 
        </>
    )
}

export default Property;