import React, { useEffect, useState } from 'react'
import { Button, Divider, Grid } from '@mui/material'
import { useAuth } from '../Context/AuthContext'
import { db } from '../firebase'
import { doc, getDoc } from 'firebase/firestore'
import { useNavigate } from 'react-router-dom'
import { default as ParPoLogo } from '../Lib/img/parpo-logo.png'
import { default as PropTerraLogo } from '../Lib/img/propterra-logo.png'

const Footer = () => {

    const [userData, setUserData] = useState<any>({
        role: 'N/A'
      });

    const { currentUser, logout }: any = useAuth()
    const navigate = useNavigate()
    
    const getProfileData = async () => {
        if(currentUser.uid !== null){
          const docRef = doc(db, "users", currentUser.uid)
          const docSnap = await getDoc(docRef);
          if(docSnap.data() !== undefined){
            setUserData(docSnap.data());
          }
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
    <div id='footer-main-ctr'>
     <Grid container alignItems='center' id='footer'>
        <Grid item xs={12} sm={12} md={4}>
          <div className='footer-logo-container'>
            <h3><img src={ParPoLogo} className='footer-logo1' />ParPo</h3>
          </div>
          <div className='footer-logo-container'>
            <p id='powered-by-propterra'><img src={PropTerraLogo} className='footer-logo2' />Powered by <b>PropTerra</b></p>
          </div>
        </Grid>

        <Grid container item xs={6} md={3}>
          <Grid item xs />
          <Grid item xs={12} md={12}>
            <h5>About Us</h5>
          </Grid>
          <Grid item xs={12} md={12} justifyContent='center'>
            <ul id='footer-propterra-links'>
              <li><a href='https://www.propterra.io' target='_blank'>PropTerra</a></li>
              <li><a href='https://www.propterra.io/careers' target='_blank'>Careers</a></li>
              <li><a href='https://www.propterra.io/contact' target='_blank'>Contact</a></li>
            </ul>
          </Grid>
          <Grid item xs />
        </Grid>

        <Grid container item xs={6} md={3}>
          <Grid item xs />
          <Grid item xs={12} md={12}>
            <h5>User role</h5>
            <h6>{`${userData.role}`}</h6>
          </Grid>
          <Grid item xs={12} md={12} justifyContent='center'>
            <Button variant='contained' onClick={handleLogout} style={{margin: '1rem auto'}}>Logout</Button>
          </Grid>
          <Grid item xs />
        </Grid>

        <Grid container item xs={12} md={2}>
          <Grid item xs />
          <Grid item xs={6} md={12}>
            <p><b>Call us</b></p>
            <p>Phone number</p>
          </Grid>
          <Grid item xs={6} md={12}>
            <p><b>Email us</b></p>
            <p>Email address</p>
          </Grid>
          <Grid item xs />
        </Grid>

      </Grid>
      <Divider variant='middle' color='lightgray'/>
      <div id='footer-btm'>
        <p>©2022 PropTerra, a Real Estate Tech Company. Orlando, FL. All Rights Reserved. Built by <a href='https://www.propterra.io' target='_blank' style={{textDecoration: 'none'}}>PropTerra</a></p>
      </div>
    </div>
  )
}

export default Footer