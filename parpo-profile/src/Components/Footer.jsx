import React, { useEffect, useState } from 'react'
import { Button, Divider, Grid } from '@mui/material'
import { useAuth } from '../Context/AuthContext'
import { db } from '../firebase'
import { doc, getDoc } from 'firebase/firestore'
import {useNavigate} from 'react-router-dom'

const Footer = () => {

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
        try {
            await logout()
            await navigate('/login')
        }   catch {
            console.error('Couldn\'t log out.')
        }
      }

      useEffect(() => {getProfileData()}, [])
  
  return (
    <div id='footer'>
     <Grid container alignItems='center' id='footer-main-ctr' mt={2}>

        <Grid item xs={12} sm={12} md={4} className='footer-txt'>
          <h3 style={{textAlign: 'center'}}>ParPo</h3>
          <p style={{textAlign: 'center'}}>It is your dream we are building.</p>
        </Grid>

        <Grid container item xs={12} md={6}>
            <Grid item xs />
            <Grid item xs={7} md={12} className='footer-txt'>
              <h5>{`You are signed in as a: ${userData.role}`}</h5>
            </Grid>
            <Grid item xs={3} md={12} className='footer-txt' justifyContent='center'>
              <Button variant='contained' onClick={handleLogout} label='Logout' style={{margin: '1rem auto'}}>Logout</Button>
            </Grid>
            <Grid item xs />
        </Grid>

        <Grid container item xs={12} md={2}>
            <Grid item xs />
            <Grid item xs={5} md={12} className='footer-txt'>
              <p><b>Call us</b></p>
              <p>Phone number</p>
            </Grid>
            <Grid item xs={5} md={12} className='footer-txt'>
              <p><b>Email us</b></p>
              <p>Email address</p>
            </Grid>
            <Grid item xs />
        </Grid>

      </Grid>
      <div id='footer-btm'>
        <Divider variant='middle' color='lightgray'/>
        <Grid container id='footer-btm-txt' mt={2}>
          <Grid item xs={1} md={3}/>
          <Grid item xs={10} md={6} lg={6}>
            <p>©2022 E-State Mate Services, a Real Estate Tech Company. Orlando, FL. All Rights Reserved.</p>
          </Grid>
          <Grid item xs={1} md={3}/>
          <Grid item xs={1} md={3}/>
          <Grid item xs={10} md={6} lg={6}>
            <p>Designed by E-State Mate Services</p>
          </Grid>
          <Grid item xs={1} md={3}/>
      </Grid>
      </div>
    </div>
  )
}

export default Footer