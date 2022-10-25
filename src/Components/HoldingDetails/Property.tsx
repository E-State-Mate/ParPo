import React from 'react';
import { Card, Divider, Grid, SvgIcon, Typography } from '@mui/material'
import {amenitiesData} from '../../Lib/data/amenitiesData'
import { 
    CorporateFareOutlined,
    CottageOutlined,
    DirectionsCarFilledOutlined,
    HolidayVillageOutlined,
    InsertInvitationOutlined,
    IronOutlined,
    LayersOutlined,
    PlaceOutlined,
    RadarOutlined,
    StarBorderOutlined
} from '@mui/icons-material';
import { tooltipData } from '../../Lib/data/tooltipData';
import DetailsModal from './DetailsModal';
import {BounceLoader} from 'react-spinners';
import { css } from '@emotion/react'

const override = css`
  display: block;
  margin: 2rem auto;
  border-color: red
  `;


function Property(props: any) {
    // const miniBar = (<div className='miniBar'></div>)

    return (
        <>
            <Divider className='details-dividers' style={{margin: '6rem auto 2rem auto'}}>PROPERTY</Divider>
            {
                props.isLoaded ? 
                <>
                <div>
                    <Card className='details-card'>    
                        <Grid container spacing={10} alignItems='space-between' justifyContent='space-between'>
                            <Grid item xs={6} sm={4} md={3}>
                                <SvgIcon sx={{ fontSize: 60 }} component={CottageOutlined} />
                                <Typography className='modal-placement' variant='subtitle2' fontSize='1rem'>
                                Property Type
                                <DetailsModal tooltipData={tooltipData.propertyType}/>
                                </Typography>
                                <Typography variant='caption'>{props.featHolding.propertyType}</Typography>
                                <div style={{height: '0.5rem'}}></div>
                                <Divider />
                            </Grid>

                            <Grid item xs={6} sm={4} md={3}>
                                <SvgIcon sx={{ fontSize: 60 }} component={StarBorderOutlined} />
                                <Typography className='modal-placement' variant='subtitle2' fontSize='1rem'>
                                Rating
                                <DetailsModal tooltipData={tooltipData.rating}/>
                                </Typography>
                                <Typography variant='caption'>Class {props.featHolding.rating}</Typography>
                                <div style={{height: '0.5rem'}}></div>
                                <Divider />
                            </Grid>

                            <Grid item xs={6} sm={4} md={3}>
                                <SvgIcon sx={{ fontSize: 60 }} component={PlaceOutlined} />
                                <Typography className='modal-placement' variant='subtitle2' fontSize='1rem'>
                                Zone
                                <DetailsModal tooltipData={tooltipData.market}/>
                                </Typography>
                                <Typography variant='caption'>{props.featHolding.zone}</Typography>
                                <div style={{height: '0.5rem'}}></div>
                                <Divider />
                            </Grid>

                            <Grid item xs={6} sm={4} md={3}>
                                <SvgIcon sx={{ fontSize: 60 }} component={InsertInvitationOutlined} />
                                <Typography variant='subtitle2' fontSize='1rem'>
                                Year Built
                                </Typography>
                                <Typography variant='caption'>{props.featHolding.yearBuilt}</Typography>
                                <div style={{height: '0.5rem'}}></div>
                                <Divider />
                            </Grid>

                            <Grid item xs={6} sm={4} md={3}>
                                <SvgIcon sx={{ fontSize: 60 }} component={LayersOutlined} />
                                <Typography variant='subtitle2' fontSize='1rem'>Plot Size</Typography>
                                <Typography variant='caption'>{props.featHolding.plotSize} Sqft</Typography>
                                <div style={{height: '0.5rem'}}></div>
                                <Divider />
                            </Grid>

                            <Grid item xs={6} sm={4} md={3}>
                                <SvgIcon sx={{ fontSize: 60 }} component={CorporateFareOutlined} />
                                <Typography variant='subtitle2' fontSize='1rem'>Number of Floors</Typography>
                                <Typography variant='caption'>{props.featHolding.numberOfFloors}</Typography>
                                <div style={{height: '0.5rem'}}></div>
                                <Divider />
                            </Grid>

                            <Grid item xs={6} sm={4} md={3}>
                                <SvgIcon sx={{ fontSize: 60 }} component={LayersOutlined} />
                                <Typography className='modal-placement' variant='subtitle2' fontSize='1rem'>
                                Floor Plate
                                <DetailsModal tooltipData={tooltipData.floorPlate}/>
                                </Typography>
                                <Typography variant='caption'>{props.featHolding.floorPlate} Sqft</Typography>
                                <div style={{height: '0.5rem'}}></div>
                                <Divider />
                            </Grid>

                            <Grid item xs={6} sm={4} md={3}>
                                <SvgIcon sx={{ fontSize: 60 }} component={RadarOutlined} />
                                <Typography className='modal-placement' variant='subtitle2' fontSize='1rem'>
                                Opportunity Market
                                <DetailsModal tooltipData={tooltipData.opportunityZone}/>
                                </Typography>
                                <Typography variant='caption'>{props.featHolding.opportunityZone}</Typography>
                                <div style={{height: '0.5rem'}}></div>
                                <Divider />
                            </Grid>
                            
                            <Grid item xs={6} sm={4} md={3}>
                                <SvgIcon sx={{ fontSize: 60 }} component={DirectionsCarFilledOutlined} />
                                <Typography variant='subtitle2' fontSize='1rem'>
                                Parking Info
                                </Typography>
                                <Typography variant='caption'>{props.featHolding.parkingInfo}</Typography>
                                <div style={{height: '0.5rem'}}></div>
                                <Divider />
                            </Grid>

                            <Grid item xs={6} sm={4} md={3}>
                                <SvgIcon sx={{ fontSize: 60 }} component={DirectionsCarFilledOutlined} />
                                <Typography variant='subtitle2' fontSize='1rem'>
                                Parking Ratio
                                </Typography>
                                <Typography variant='caption'>{props.featHolding.parkingRatio}:1</Typography>
                                <div style={{height: '0.5rem'}}></div>
                                <Divider />
                            </Grid>

                            <Grid item xs={6} sm={4} md={3}>
                                <SvgIcon sx={{ fontSize: 60 }} component={HolidayVillageOutlined} />
                                <Typography className='modal-placement' variant='subtitle2' fontSize='1rem'>
                                Building Ratio
                                <DetailsModal tooltipData={tooltipData.buildingRatio}/>
                                </Typography>
                                <Typography variant='caption'>{props.featHolding.propertyRatio}:1</Typography>
                                <div style={{height: '0.5rem'}}></div>
                                <Divider />
                            </Grid>
                        </Grid>
                    </Card>
                </div><br/> 

                <div>
                    <Card className='details-card'>
                        <div>
                        <SvgIcon sx={{ fontSize: 60 }} component={IronOutlined} />
                        <Typography variant='subtitle2' fontSize='1rem'>Amenities</Typography>
                        <div style={{height: '0.5rem'}}></div>
                        <Divider />
                        </div><br/><br/>

                        <div style={{columns: 3}}>
                        {amenitiesData.map((data: any, index: number) => (
                            <Grid item key={`amenities-${index}`} >
                                <Typography variant='caption'>{data}</Typography>
                            <div style={{height: '0.5rem'}}></div>
                            </Grid>
                    
                        ))}
                        </div>
                    </Card>
                </div> 
                </>
                :
                <BounceLoader loading={!props.isLoaded} color={'#5ca8b2'} css={override}/>
            }
        </>
    )
}

export default Property;