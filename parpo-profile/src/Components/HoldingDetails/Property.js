import React from 'react'
import { Card, Divider, Grid, SvgIcon, Typography } from '@mui/material'
import './detailsView.css'
import {propertyData} from '../../Lib/data/propertyData'
import {amenitiesData} from '../../Lib/data/amenitiesData'
import HouseIcon from '@mui/icons-material/House'
import HoldingDetails from '../../Pages/HoldingDetails';


function Property({data}) {
    const miniBar = (<div className='miniBar'></div>)

    return (
        <>
            {/* Property Section #1 */}
            <div align='center'>
                <Card className='property-card'>
                {propertyData.map((data, index) => (
                    <Grid item key={`property-${index}`} style={{width: '33%'}}>
                        {/* General Icon Format */}
                        <SvgIcon sx={{ fontSize: 60 }} component={data.icon} />
                        <Typography variant='subtitle2' fontSize='1rem'>{data.label}</Typography>
                        <Typography variant='caption'>{data.data}</Typography>
                        <div style={{height: '0.5rem'}}></div>
                        <Divider width='30%' margin='auto' />
                    </Grid>
                ))}
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
                            {/* General Icon Format */}
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