import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import { Box, Container, Grid, Typography } from '@mui/material';
import Profile from './Profile';
import ProfileDetails from './ProfileDetails';

const Account = () => {

  const {
    firstName,
    lastName,
    email,
    phone,
    location,
    profilePic,
    editing
  } = useSelector((state: any) => state.profile)

    return(
<>
    <Box
      component="main"
      sx={{
        flexGrow: 1,
        py: 8
      }}
    >
      <Container maxWidth="lg">
        <Typography
          sx={{ mb: 3 }}
          variant="h4"
        >
          Account
        </Typography>
        <Grid
          container
          spacing={3}
        >
          <Grid item xs={12}>
            <Profile profilePic={profilePic}/>
          </Grid>
          <Grid item xs={12}>
            <ProfileDetails />
          </Grid>
        </Grid>
      </Container>
    </Box>
  </>
    )
}

export default Account;