import React from 'react'
import { Card, Divider, Grid, SvgIcon, Typography } from '@mui/material'
import './detailsView.css'
import {financialData} from '../../Lib/data/financialData'
import HoldingDetails from '../../Pages/HoldingDetails';
import LocalOfferOutlinedIcon from '@mui/icons-material/LocalOfferOutlined';
import TrendingUpOutlinedIcon from '@mui/icons-material/TrendingUpOutlined';
import SavingsOutlinedIcon from '@mui/icons-material/SavingsOutlined';
import { tooltipData } from '../../Lib/data/tooltipData';
import DetailsModal from './DetailsModal';
import {BounceLoader} from 'react-spinners';
import { css } from '@emotion/react'

const override = css`
  display: block;
  margin: 2rem auto;
  border-color: red
  `;

function Financial(props) {
    // const miniBar = (<div className='miniBar'></div>)

    return (
        <>
            <Divider className='details-dividers' style={{margin: '6rem auto 2rem auto'}}>FINANCIAL</Divider>
            { props.isLoaded ?
                <div align='center'>
                    <Card className='details-card'>
                        <Grid container spacing={10} alignItems='space-between' justifyContent='space-between'>
                            <Grid item xs={6} sm={4} md={3}>
                                <SvgIcon sx={{ fontSize: 60 }} component={LocalOfferOutlinedIcon} />
                                <Typography variant='subtitle2' fontSize='1rem'>Purchase Price</Typography>
                                <Typography variant='caption'>${props.featHolding.purchasePrice}</Typography>
                                <div style={{height: '0.5rem'}}></div>
                                <Divider width='30%' margin='auto' />
                            </Grid>

                            <Grid item xs={6} sm={4} md={3}>
                                <SvgIcon sx={{ fontSize: 60 }} component={TrendingUpOutlinedIcon} />
                                <Typography className='modal-placement' variant='subtitle2' fontSize='1rem'>IRR <DetailsModal tooltipData={tooltipData.irr}/></Typography>
                                {/* {console.log('financial irr', tooltipData.irr)} */}
                                <Typography variant='caption'>{props.featHolding.irr}% in {props.featHolding.irrYear}</Typography>
                                <div style={{height: '0.5rem'}}></div>
                                <Divider width='30%' margin='auto' />
                            </Grid>

                            <Grid item xs={6} sm={4} md={3}>
                                <SvgIcon sx={{ fontSize: 60 }} component={TrendingUpOutlinedIcon} />
                                <Typography className='modal-placement' variant='subtitle2' fontSize='1rem'>GRM<DetailsModal tooltipData={tooltipData.grm}/></Typography>
                                <Typography variant='caption'>{props.featHolding.grm*100}% in {props.featHolding.grmYear}</Typography>
                                <div style={{height: '0.5rem'}}></div>
                                <Divider width='30%' margin='auto' />
                            </Grid>

                            <Grid item xs={6} sm={4} md={3}>
                                <SvgIcon sx={{ fontSize: 60 }} component={SavingsOutlinedIcon} />
                                <Typography className='modal-placement' variant='subtitle2' fontSize='1rem'>Current NOI<DetailsModal tooltipData={tooltipData.currentNoi}/></Typography>
                                <Typography variant='caption'>${props.featHolding.cnoi} in {props.featHolding.cnoiYear}</Typography>
                                <div style={{height: '0.5rem'}}></div>
                                <Divider width='30%' margin='auto' />
                            </Grid>

                            <Grid item xs={6} sm={4} md={3}>
                                <SvgIcon sx={{ fontSize: 60 }} component={SavingsOutlinedIcon} />
                                <Typography className='modal-placement' variant='subtitle2' fontSize='1rem'>Pro Forma NOI<DetailsModal tooltipData={tooltipData.proFormaNoi}/></Typography>
                                <Typography variant='caption'>${props.featHolding.pfnoi}</Typography>
                                <div style={{height: '0.5rem'}}></div>
                                <Divider width='30%' margin='auto' />
                            </Grid>

                            <Grid item xs={6} sm={4} md={3}>
                                <SvgIcon sx={{ fontSize: 60 }} component={SavingsOutlinedIcon} />
                                <Typography className='modal-placement' variant='subtitle2' fontSize='1rem'>Pro Forma Cap Rate<DetailsModal tooltipData={tooltipData.proFormaCapRate}/></Typography>
                                <Typography variant='caption'>{props.featHolding.pfcr*100} in {props.featHolding.pfcrYear}</Typography>
                                <div style={{height: '0.5rem'}}></div>
                                <Divider width='30%' margin='auto' />
                            </Grid>
                            
                            <Grid item xs={6} sm={4} md={3}>
                                <SvgIcon sx={{ fontSize: 60 }} component={SavingsOutlinedIcon} />
                                <Typography className='modal-placement' variant='subtitle2' fontSize='1rem'>Cap Rate<DetailsModal tooltipData={tooltipData.capRate}/></Typography>
                                <Typography  variant='caption'>{props.featHolding.capRate}% in {props.featHolding.capRateYear}</Typography>
                                <div style={{height: '0.5rem'}}></div>
                                <Divider width='30%' margin='auto' />
                            </Grid>
                        </Grid>
                    </Card>
                </div>
                :
                <BounceLoader loading={!props.isLoaded} color={'#5ca8b2'} style={{margin: '2rem auto'}} css={override}/>
            }

        {/* Pushing the footer down   */}
        <div style={{marginBottom: '2rem'}}><span><p></p></span></div>
        </>
    )
}

export default Financial;