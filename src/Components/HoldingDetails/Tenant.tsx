import { 
        Card,
        Divider,
        Grid,
        SvgIcon,
        Typography
    } from '@mui/material'
import { 
        EmojiPeopleOutlined,
        FamilyRestroomOutlined,
        StickyNote2Outlined,
        ThumbsUpDownOutlined,
        ScheduleOutlined,
        InsertInvitationOutlined
    } from '@mui/icons-material'
    
import {BounceLoader} from 'react-spinners';
import { css } from '@emotion/react'
import React from 'react';

const override = css`
  display: block;
  margin: 2rem auto;
  border-color: red
  `;

type TenantProps = {
    featHolding: any;
    isLoaded: any;
}

const Tenant: React.FunctionComponent<TenantProps> = ({featHolding, isLoaded}) => {

    return (
        <>
            <Divider className='details-dividers' style={{margin: '6rem auto 2rem auto'}}>TENANT</Divider>

            { isLoaded ?
                <div>
                    <Card className='details-card'>
                        <Grid container spacing={10} alignItems='space-between' justifyContent='space-between'>
                            <Grid item xs={6} sm={4} md={3}>
                                {/* General Icon Format */}
                                <SvgIcon sx={{ fontSize: 60 }} component={EmojiPeopleOutlined} />
                                <Typography variant='subtitle2' fontSize='1rem'>Occupancy Percentage</Typography>
                                <Typography variant='caption'>{featHolding.occupancyPercentage*100}%</Typography>
                                <div style={{height: '0.5rem'}}></div>
                                <Divider />
                            </Grid>

                            <Grid item xs={6} sm={4} md={3}>
                                {/* General Icon Format */}
                                <SvgIcon sx={{ fontSize: 60 }} component={FamilyRestroomOutlined} />
                                <Typography variant='subtitle2' fontSize='1rem'>Unit Type</Typography>
                                <Typography variant='caption'>{featHolding.singleOrMultiTenant} </Typography>
                                <div style={{height: '0.5rem'}}></div>
                                <Divider />
                            </Grid>

                            <Grid item xs={6} sm={4} md={3}>
                                {/* General Icon Format */}
                                <SvgIcon sx={{ fontSize: 60 }} component={StickyNote2Outlined} />
                                <Typography variant='subtitle2' fontSize='1rem'>Lease Type</Typography>
                                <Typography variant='caption'>{featHolding.leaseType}</Typography>
                                <div style={{height: '0.5rem'}}></div>
                                <Divider />
                            </Grid>

                            <Grid item xs={6} sm={4} md={3}>
                                {/* General Icon Format */}
                                <SvgIcon sx={{ fontSize: 60 }} component={ThumbsUpDownOutlined} />
                                <Typography variant='subtitle2' fontSize='1rem'>Lease Renewal</Typography>
                                <Typography variant='caption'>{featHolding.leaseRenewal}</Typography>
                                <div style={{height: '0.5rem'}}></div>
                                <Divider />
                            </Grid>

                            <Grid item xs={6} sm={4} md={3}>
                                {/* General Icon Format */}
                                <SvgIcon sx={{ fontSize: 60 }} component={ScheduleOutlined} />
                                <Typography variant='subtitle2' fontSize='1rem'>Years Left on Lease</Typography>
                                <Typography variant='caption'>{featHolding.yearsLeftOnLease} years</Typography>
                                <div style={{height: '0.5rem'}}></div>
                                <Divider />
                            </Grid>
                            
                            <Grid item xs={6} sm={4} md={3}>
                                {/* General Icon Format */}
                                <SvgIcon sx={{ fontSize: 60 }} component={InsertInvitationOutlined} />
                                <Typography variant='subtitle2' fontSize='1rem'>Lease End Date</Typography>
                                <Typography variant='caption'>{featHolding.leaseEndDate}</Typography>
                                <div style={{height: '0.5rem'}}></div>
                                <Divider />
                            </Grid>
                        </Grid>
                    </Card>
                </div>
                :
                <BounceLoader loading={!isLoaded} color={'#5ca8b2'} css={override}/>
            }
        </>
    )
}

export default Tenant;