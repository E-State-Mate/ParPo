import React, { useState, useEffect } from 'react'
import { Box, Container, Grid, Typography } from '@mui/material';
import { Profile } from './Profile';
import { ProfileDetails } from './ProfileDetails';

const Account = () => {
  const [fName, setFName] = useState('Jon')
  const [lName, setLName] = useState('Snow')
  const [email, setEmail] = useState('jon@snow.com')
  const [phone, setPhone] = useState('(407) 885-1232')
  const [location, setLocation] = useState('Westeros')
  const [profilePic, setProfPic] = useState()
  const [editing, setEditing] = useState(false);

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
            <ProfileDetails fName={fName} lName={lName} email={email} phone={phone} editing={editing} />
          </Grid>
        </Grid>
      </Container>
    </Box>
  </>
    )
}

export default Account;