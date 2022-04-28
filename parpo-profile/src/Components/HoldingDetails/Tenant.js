import React from 'react'
import { Card, Divider, Grid, SvgIcon, Typography } from '@mui/material'
import './detailsView.css'
import EmojiPeopleOutlinedIcon from '@mui/icons-material/EmojiPeopleOutlined';
import FamilyRestroomOutlinedIcon from '@mui/icons-material/FamilyRestroomOutlined';
import StickyNote2OutlinedIcon from '@mui/icons-material/StickyNote2Outlined';
import ThumbsUpDownOutlinedIcon from '@mui/icons-material/ThumbsUpDownOutlined';
import ScheduleOutlinedIcon from '@mui/icons-material/ScheduleOutlined';
import InsertInvitationOutlinedIcon from '@mui/icons-material/InsertInvitationOutlined';


function Tenant (props) {
    const miniBar = (<div className='miniBar'></div>)

    return (
        <>
            {/* Property Section #1 */}
            <div align='center'>
                <Card className='tenant-card'>

                    <Grid item style={{width: '33%'}} id='tenant-card-item'>
                        {/* General Icon Format */}
                        <SvgIcon sx={{ fontSize: 60 }} component={EmojiPeopleOutlinedIcon} />
                        <Typography variant='subtitle2' fontSize='1rem'>Occupancy Percentage</Typography>
                        <Typography variant='caption'>{props.featHolding.occupancyPercentage*100}%</Typography>
                        <div style={{height: '0.5rem'}}></div>
                        <Divider width='30%' margin='auto' />
                    </Grid>

                    <Grid item style={{width: '33%'}} id='tenant-card-item'>
                        {/* General Icon Format */}
                        <SvgIcon sx={{ fontSize: 60 }} component={FamilyRestroomOutlinedIcon} />
                        <Typography variant='subtitle2' fontSize='1rem'>Unit Type</Typography>
                        <Typography variant='caption'>{props.featHolding.singleOrMultiTenant} </Typography>
                        <div style={{height: '0.5rem'}}></div>
                        <Divider width='30%' margin='auto' />
                    </Grid>

                    <Grid item style={{width: '33%'}} id='tenant-card-item'>
                        {/* General Icon Format */}
                        <SvgIcon sx={{ fontSize: 60 }} component={StickyNote2OutlinedIcon} />
                        <Typography variant='subtitle2' fontSize='1rem'>Lease Type</Typography>
                        <Typography variant='caption'>{props.featHolding.leaseType}</Typography>
                        <div style={{height: '0.5rem'}}></div>
                        <Divider width='30%' margin='auto' />
                    </Grid>

                    <Grid item style={{width: '33%'}} id='tenant-card-item'>
                        {/* General Icon Format */}
                        <SvgIcon sx={{ fontSize: 60 }} component={ThumbsUpDownOutlinedIcon} />
                        <Typography variant='subtitle2' fontSize='1rem'>Lease Renewal</Typography>
                        <Typography variant='caption'>{props.featHolding.leaseRenewal}</Typography>
                        <div style={{height: '0.5rem'}}></div>
                        <Divider width='30%' margin='auto' />
                    </Grid>

                    <Grid item style={{width: '33%'}} id='tenant-card-item'>
                        {/* General Icon Format */}
                        <SvgIcon sx={{ fontSize: 60 }} component={ScheduleOutlinedIcon} />
                        <Typography variant='subtitle2' fontSize='1rem'>Years Left on Lease</Typography>
                        <Typography variant='caption'>{props.featHolding.yearsLeftOnLease} years</Typography>
                        <div style={{height: '0.5rem'}}></div>
                        <Divider width='30%' margin='auto' />
                    </Grid>
                    
                    <Grid item style={{width: '33%'}} id='tenant-card-item'>
                        {/* General Icon Format */}
                        <SvgIcon sx={{ fontSize: 60 }} component={InsertInvitationOutlinedIcon} />
                        <Typography variant='subtitle2' fontSize='1rem'>Lease End Date</Typography>
                        <Typography variant='caption'>{Date(props.featHolding.leaseEndDate)}</Typography>
                        <div style={{height: '0.5rem'}}></div>
                        <Divider width='30%' margin='auto' />
                    </Grid>

                </Card>
            </div>
        </>
    )
}

export default Tenant;