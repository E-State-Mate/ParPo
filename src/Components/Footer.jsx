import { useEffect, useState } from 'react'
import { Button, Divider, Grid } from '@mui/material'
import { useAuth } from '../Context/AuthContext'
import { db } from '../firebase'
import { doc, getDoc } from 'firebase/firestore'
import {useNavigate} from 'react-router-dom'
import { default as ParPoLogo } from '../Lib/img/parpo-logo.png'
import { default as PropTerraLogo } from '../Lib/img/propterra-logo.png'

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
     <Grid container alignItems='center' id='footer-main-ctr'>
        <Grid item xs={12} sm={12} md={4} className='footer-txt'>
          <div className='footer-logo-container'>
            <h3><img src={ParPoLogo} className='footer-logo1' />ParPo</h3>
          </div>
          <div className='footer-logo-container'>
            <p id='powered-by-propterra'><img src={PropTerraLogo} className='footer-logo2' />Powered by PropTerra</p>
          </div>
        </Grid>

        <Grid container item xs={12} md={3}>
            <Grid item xs />
            <Grid item xs={7} md={12} className='footer-txt'>
              <h5>About Us</h5>
            </Grid>
            <Grid item xs={3} md={12} className='footer-txt' justifyContent='center'>
              <ul id='footer-propterra-links'>
                <li><a href='https://www.propterra.io' target='_blank'>PropTerra</a></li>
                <li><a href='https://www.propterra.io/careers' target='_blank'>Careers</a></li>
                <li><a href='https://www.propterra.io/contact' target='_blank'>Contact</a></li>
              </ul>
            </Grid>
            <Grid item xs />
        </Grid>

        <Grid container item xs={12} md={3}>
            <Grid item xs />
            <Grid item xs={7} md={12} className='footer-txt'>
              <h5>User role</h5>
              <h6>{`${userData.role}`}</h6>
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
            <p>©2022 PropTerra, a Real Estate Tech Company. Orlando, FL. All Rights Reserved.</p>
          </Grid>
          <Grid item xs={1} md={3}/>
          <Grid item xs={1} md={3}/>
          <Grid item xs={10} md={6} lg={6}>
            <p>Built by <a href='https://www.propterra.io' target='_blank' style={{textDecoration: 'none'}}>PropTerra</a></p>
          </Grid>
          <Grid item xs={1} md={3}/>
      </Grid>
      </div>
    </div>
  )
}

export default Footer