import React from 'react'
import { Card, Divider, Grid, SvgIcon, Typography } from '@mui/material'
import './detailsView.css'
import EmojiPeopleOutlinedIcon from '@mui/icons-material/EmojiPeopleOutlined';
import FamilyRestroomOutlinedIcon from '@mui/icons-material/FamilyRestroomOutlined';
import StickyNote2OutlinedIcon from '@mui/icons-material/StickyNote2Outlined';
import ThumbsUpDownOutlinedIcon from '@mui/icons-material/ThumbsUpDownOutlined';
import ScheduleOutlinedIcon from '@mui/icons-material/ScheduleOutlined';
import InsertInvitationOutlinedIcon from '@mui/icons-material/InsertInvitationOutlined';
import {BounceLoader} from 'react-spinners';
import { css } from '@emotion/react'

const override = css`
  display: block;
  margin: 2rem auto;
  border-color: red
  `;


function Tenant (props) {
    const miniBar = (<div className='miniBar'></div>)

    return (
        <>
            <Divider className='details-dividers' style={{margin: '6rem auto 2rem auto'}}>TENANT</Divider>

            { props.isLoaded ?
                <div align='center'>
                    <Card className='details-card'>
                        <Grid container spacing={10} alignItems='space-between' justifyContent='space-between'>
                            <Grid item xs={6} sm={4} md={3}>
                                {/* General Icon Format */}
                                <SvgIcon sx={{ fontSize: 60 }} component={EmojiPeopleOutlinedIcon} />
                                <Typography variant='subtitle2' fontSize='1rem'>Occupancy Percentage</Typography>
                                <Typography variant='caption'>{props.featHolding.occupancyPercentage*100}%</Typography>
                                <div style={{height: '0.5rem'}}></div>
                                <Divider width='30%' margin='auto' />
                            </Grid>

                            <Grid item xs={6} sm={4} md={3}>
                                {/* General Icon Format */}
                                <SvgIcon sx={{ fontSize: 60 }} component={FamilyRestroomOutlinedIcon} />
                                <Typography variant='subtitle2' fontSize='1rem'>Unit Type</Typography>
                                <Typography variant='caption'>{props.featHolding.singleOrMultiTenant} </Typography>
                                <div style={{height: '0.5rem'}}></div>
                                <Divider width='30%' margin='auto' />
                            </Grid>

                            <Grid item xs={6} sm={4} md={3}>
                                {/* General Icon Format */}
                                <SvgIcon sx={{ fontSize: 60 }} component={StickyNote2OutlinedIcon} />
                                <Typography variant='subtitle2' fontSize='1rem'>Lease Type</Typography>
                                <Typography variant='caption'>{props.featHolding.leaseType}</Typography>
                                <div style={{height: '0.5rem'}}></div>
                                <Divider width='30%' margin='auto' />
                            </Grid>

                            <Grid item xs={6} sm={4} md={3}>
                                {/* General Icon Format */}
                                <SvgIcon sx={{ fontSize: 60 }} component={ThumbsUpDownOutlinedIcon} />
                                <Typography variant='subtitle2' fontSize='1rem'>Lease Renewal</Typography>
                                <Typography variant='caption'>{props.featHolding.leaseRenewal}</Typography>
                                <div style={{height: '0.5rem'}}></div>
                                <Divider width='30%' margin='auto' />
                            </Grid>

                            <Grid item xs={6} sm={4} md={3}>
                                {/* General Icon Format */}
                                <SvgIcon sx={{ fontSize: 60 }} component={ScheduleOutlinedIcon} />
                                <Typography variant='subtitle2' fontSize='1rem'>Years Left on Lease</Typography>
                                <Typography variant='caption'>{props.featHolding.yearsLeftOnLease} years</Typography>
                                <div style={{height: '0.5rem'}}></div>
                                <Divider width='30%' margin='auto' />
                            </Grid>
                            
                            <Grid item xs={6} sm={4} md={3}>
                                {/* General Icon Format */}
                                <SvgIcon sx={{ fontSize: 60 }} component={InsertInvitationOutlinedIcon} />
                                <Typography variant='subtitle2' fontSize='1rem'>Lease End Date</Typography>
                                <Typography variant='caption'>{Date(props.featHolding.leaseEndDate)}</Typography>
                                <div style={{height: '0.5rem'}}></div>
                                <Divider width='30%' margin='auto' />
                            </Grid>
                        </Grid>
                    </Card>
                </div>
                :
                <BounceLoader loading={!props.isLoaded} color={'#5ca8b2'} style={{margin: '2rem auto'}} css={override}/>
            }
        </>
    )
}

export default Tenant;