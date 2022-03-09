import { Divider, Grid, Typography } from '@mui/material'
import React, {useEffect, useState } from 'react'
import '../App.css'
import {rows} from '../Lib/ProfileData'

const ProfileModal = ({closeModal, id}) => {
    const [profile, setProfile] = useState(rows[id]);

  return (
    <div className='modal-container'>
        <div id='profile-modal'>
            <div className='close-btn' onClick={() => closeModal()}>X</div>
            <Grid container >
                <Grid item xs={12}>
                    <img src={'https://picsum.photos/200'} />
                </Grid>
                <Grid item xs={12}>
                    <Divider variant='middle' sx={{m: 'auto', mb: 2, mt: 1, width: '30%'}} />
                    <Typography variant='body2'><b>Name</b></Typography>
                    <Typography >{`${profile.fName} ${profile.lName}`}</Typography>
                </Grid>
                <Divider variant='middle' />
                <Grid item xs={12} sx={{mt: 1}}>
                    <Typography variant='body2'><b>Email</b></Typography>
                    <Typography >{profile.email}</Typography>
                </Grid>
                <Grid item xs={12} sx={{mt: 1}}>
                    <Typography variant='body2'><b>Phone</b></Typography>
                    <Typography >{profile.phone}</Typography>
                </Grid>
                <Grid item xs={12} sx={{mt: 1}}>
                    <Typography variant='body2'><b>Location</b></Typography>
                    <Typography >{profile.location}</Typography>
                </Grid>
            </Grid>
        </div>
    </div>
  )
}

export default ProfileModal