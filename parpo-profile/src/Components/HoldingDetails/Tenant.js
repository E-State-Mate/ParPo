import React from 'react'
import { Card, Divider, Grid, SvgIcon, Typography } from '@mui/material'
import './detailsView.css'
import {tenantData} from '../../Lib/data/tenantData'
import HouseIcon from '@mui/icons-material/House'

function Tenant ({data}) {
    const miniBar = (<div className='miniBar'></div>)

    return (
        <>
            {/* Property Section #1 */}
            <div align='center'>
                <Card className='tenant-card'>
                {tenantData.map((data, index) => (
                    <Grid item key={`tenant-${index}`} style={{width: '33%'}} id='tenant-card-item'>
                        {/* General Icon Format */}
                        <SvgIcon sx={{ fontSize: 60 }} component={HouseIcon} />
                        <Typography variant='subtitle2' fontSize='1rem'>{data.label}</Typography>
                        <Typography variant='caption'>{data.data}</Typography>
                        <div style={{height: '0.5rem'}}></div>
                        <Divider width='30%' margin='auto' />
                    </Grid>
                ))}
                </Card>
            </div>
        </>
    )
}

export default Tenant;