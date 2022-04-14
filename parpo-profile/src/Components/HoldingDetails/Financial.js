import React from 'react'
import { Card, Grid, SvgIcon, Typography } from '@mui/material'
import './detailsView.css'
import {financialData} from '../../Lib/financialData'

function Financial({data}) {
    const miniBar = (<div className='miniBar'></div>)

    return (
        <>
            {/* Overview Section #1 */}
            <div align='center'>
                <Card container className='financial-card'>
                {financialData.map(data => (
                    <Grid item key={data} className='financial-card-item'>
                        {/* General Icon Format */}
                        <SvgIcon sx={{ fontSize: 60 }} component={data.icon} />
                        <Typography variant='subtitle2' fontSize='1rem'>{data.label}</Typography>
                        <Typography variant='caption'>{data.data}</Typography>
                        <div style={{height: '0.5rem'}}></div>
                        <Typography className='mini-bar'>{miniBar}</Typography>
                    </Grid>
                ))}
                </Card>
            </div>

        {/* Pushing the footer down   */}
        <div style={{marginBottom: '2rem'}}><span><p></p></span></div>
        </>
    )
}

export default Financial;