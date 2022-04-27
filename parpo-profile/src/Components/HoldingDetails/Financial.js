import React from 'react'
import { Card, Divider, Grid, SvgIcon, Typography } from '@mui/material'
import './detailsView.css'
import {financialData} from '../../Lib/data/financialData'
import HoldingDetails from '../../Pages/HoldingDetails';
import HouseIcon from '@mui/icons-material/House';


function Financial(props) {
    const miniBar = (<div className='miniBar'></div>)

    return (
        <>
            {/* Overview Section #1 */}
            <div align='center'>
                <Card className='financial-card'>
                    <Grid item className='financial-card-item'>
                        <SvgIcon sx={{ fontSize: 60 }} component={HouseIcon} />
                        <Typography variant='subtitle2' fontSize='1rem'>Purchase Price</Typography>
                        <Typography variant='caption'>${props.featHolding.purchasePrice}</Typography>
                        <div style={{height: '0.5rem'}}></div>
                        <Divider width='30%' margin='auto' />
                    </Grid>
                    <Grid item className='financial-card-item'>
                        <SvgIcon sx={{ fontSize: 60 }} component={HouseIcon} />
                        <Typography variant='subtitle2' fontSize='1rem'>IRR</Typography>
                        <Typography variant='caption'>{props.featHolding.irr}% in //YEAR//</Typography>
                        <div style={{height: '0.5rem'}}></div>
                        <Divider width='30%' margin='auto' />
                    </Grid>
                    <Grid item className='financial-card-item'>
                        <SvgIcon sx={{ fontSize: 60 }} component={HouseIcon} />
                        <Typography variant='subtitle2' fontSize='1rem'>GRM</Typography>
                        <Typography variant='caption'>{props.featHolding.grm*100}% in //YEAR//</Typography>
                        <div style={{height: '0.5rem'}}></div>
                        <Divider width='30%' margin='auto' />
                    </Grid>
                    <Grid item className='financial-card-item'>
                        <SvgIcon sx={{ fontSize: 60 }} component={HouseIcon} />
                        <Typography variant='subtitle2' fontSize='1rem'>Current NOI</Typography>
                        <Typography variant='caption'>${props.featHolding.cnoi} in //YEAR//</Typography>
                        <div style={{height: '0.5rem'}}></div>
                        <Divider width='30%' margin='auto' />
                    </Grid>
                    <Grid item className='financial-card-item'>
                        <SvgIcon sx={{ fontSize: 60 }} component={HouseIcon} />
                        <Typography variant='subtitle2' fontSize='1rem'>Pro Forma NOI</Typography>
                        <Typography variant='caption'>${props.featHolding.pfnoi}</Typography>
                        <div style={{height: '0.5rem'}}></div>
                        <Divider width='30%' margin='auto' />
                    </Grid>
                    <Grid item className='financial-card-item'>
                        <SvgIcon sx={{ fontSize: 60 }} component={HouseIcon} />
                        <Typography variant='subtitle2' fontSize='1rem'>Pro Forma Cap Rate</Typography>
                        <Typography variant='caption'>{props.featHolding.pfcr*100} in //YEAR//</Typography>
                        <div style={{height: '0.5rem'}}></div>
                        <Divider width='30%' margin='auto' />
                    </Grid>
                    <Grid item className='financial-card-item'>
                        <SvgIcon sx={{ fontSize: 60 }} component={HouseIcon} />
                        <Typography variant='subtitle2' fontSize='1rem'>Cap Rate</Typography>
                        <Typography variant='caption'>{props.featHolding.capRate}% in //YEAR//</Typography>
                        <div style={{height: '0.5rem'}}></div>
                        <Divider width='30%' margin='auto' />
                    </Grid>
                </Card>
            </div>

        {/* Pushing the footer down   */}
        <div style={{marginBottom: '2rem'}}><span><p></p></span></div>
        </>
    )
}

export default Financial;