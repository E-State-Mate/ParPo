import React from 'react'
import { Card, Grid, SvgIcon, Typography } from '@mui/material'
import './detailsView.css'
import {tenantData} from './tenantData'
import HouseIcon from '@mui/icons-material/House'

function Tenant ({data}) {
    const miniBar = (<div className='miniBar'></div>)

    return (
        <>
            {/* Property Section #1 */}
            <div align='center'>
                <Card container className='tenant-card'>
                {tenantData.map(data => (
                    <Grid item key={data} style={{width: '33%'}} id='tenant-card-item'>
                        {/* General Icon Format */}
                        <SvgIcon sx={{ fontSize: 60 }} component={HouseIcon} />
                        <Typography variant='subtitle2' fontSize='1rem'>{data.label}</Typography>
                        <Typography variant='caption'>{data.data}</Typography>
                        <div style={{height: '0.5rem'}}></div>
                        <Typography className='mini-bar'>{miniBar}</Typography>
                    </Grid>
                ))}
                </Card>
            </div>
            
        {/* Pushing the footer down   */}
        <div style={{marginBottom: '20rem'}}><span><p></p></span></div>
        </>
    )
}

export default Tenant;