import React from 'react'
import { Card, Grid, SvgIcon, Typography } from '@mui/material'
import './detailsView.css'
import {propertyData} from '../../Lib/data/propertyData'
import {amenitiesData} from '../../Lib/data/amenitiesData'
import HouseIcon from '@mui/icons-material/House'

function Property({data}) {
    const miniBar = (<div className='miniBar'></div>)

    return (
        <>
            {/* Property Section #1 */}
            <div align='center'>
                <Card container className='property-card'>
                {propertyData.map(data => (
                    <Grid item key={data} style={{width: '33%'}}>
                        {/* General Icon Format */}
                        <SvgIcon sx={{ fontSize: 60 }} component={data.icon} />
                        <Typography variant='subtitle2' fontSize='1rem'>{data.label}</Typography>
                        <Typography variant='caption'>{data.data}</Typography>
                        <div style={{height: '0.5rem'}}></div>
                        <Typography className='mini-bar'>{miniBar}</Typography>
                    </Grid>
                ))}
                </Card>
            </div><br/> 

            <div>
                <Card container align='center' className='property-card2'>
                    <div>
                    <SvgIcon sx={{ fontSize: 60 }} component={HouseIcon} />
                    <Typography variant='subtitle2' fontSize='1rem'>Amenities</Typography>
                    <div style={{height: '0.5rem'}}></div>
                    <Typography className='mini-bar'>{miniBar}</Typography>
                    </div><br/><br/>

                    <div style={{columns: 3}}>
                    {amenitiesData.map(data => (
                        <Grid item key={data} >
                            {/* General Icon Format */}
                            <Typography variant='caption'>{data}</Typography>
                        <div style={{height: '0.5rem'}}></div>
                        </Grid>
                
                    ))}
                    </div>
                </Card>
            </div>
            

        {/* Pushing the footer down   */}
        <div style={{marginBottom: '2rem'}}><span><p></p></span></div>
        </>
    )
}

export default Property;