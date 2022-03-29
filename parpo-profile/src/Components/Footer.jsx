import React, { useState } from 'react'
import { Button, Divider, Grid, TextField } from '@mui/material'
import { useAuth } from '../Lib/authContext'
import { db } from '../firebase'
import { doc, getDoc } from 'firebase/firestore'
import {useNavigate} from 'react-router-dom'

const Footer = () => {

    const [error, setError] = useState("")
    const [userData, setUserData] = useState({
        role: 'N/A'
      });

    const { currentUser, logout } = useAuth()
    const navigate = useNavigate()
    

    const getProfileData = async () => {
        if(currentUser.uid !== null){
          const docRef = doc(db, "users", currentUser.uid)
          const docSnap = await getDoc(docRef);
          setUserData(docSnap.data());
        }
      }

      async function handleLogout() {
        setError('')
  
        try {
            await logout()
            await navigate('/login')
        }   catch {
            setError('Could not Log Out')
        }
      }
  
  return (
    <div style={{position: 'absolute', bottom: 0, width: '100%'}}>
     <Grid container alignItems='center' id='footer-main-ctr'>
        <Grid item sm={10} md={4} className='footer-txt'>
          <h3>ParPo</h3>
          <p></p>
        </Grid>
        <Grid item sm={10} md={6} className='footer-txt'>
          {/* <p>Enter your email to stay up to date on any Longwood Trade Center news.</p>
          <div id='email-ctr'>
            <TextField label="Enter email" variant="filled" sx={{width: '70%'}} InputLabelProps={{style: {color: 'white'}}}/>
            <Button alignItems='center'>Subscribe</Button>
          </div> */}
          <h3 style={{}}>{`You are signed in as a: ${userData.role}`}</h3>
          <Button variant='contained' onClick={handleLogout} label='Logout' style={{margin: '1rem auto'}}>Logout</Button>
        </Grid>
        <Grid item xs={12} md={2}>
          <Grid container>
            <Grid xs />
            <Grid item xs={5} md={12} className='footer-txt'>
              <p><b>Call us</b></p>
              <p>Phone number</p>
            </Grid>
            <Grid item xs={5} md={12} className='footer-txt'>
              <p><b>Email us</b></p>
              <p>Email address</p>
            </Grid>
            <Grid xs />
          </Grid>
        </Grid>
      </Grid>
      <div id='footer-btm'>
        <Divider variant='middle' color='lightgray'/>
        <Grid container id='footer-btm-txt'>
          <Grid item sm={12} md={6} lg={6}>
            <p>©2022 E-State Mate Services, a Real Estate Tech Company. Orlando, FL. All Rights Reserved.</p>
          </Grid>
          <Grid item sm={12} md={6} lg={6}>
            <p>Designed by E-State Mate Services</p>
          </Grid>
      </Grid>
      </div>
    </div>
  )
}

export default Footer