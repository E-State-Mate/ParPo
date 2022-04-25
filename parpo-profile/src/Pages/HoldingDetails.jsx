import React, { useEffect, useState } from 'react'
import {Button, Divider, Grid} from '@mui/material';
import Overview from '../Components/HoldingDetails/Overview';
import Location from '../Components/HoldingDetails/Location';
import Financial from '../Components/HoldingDetails/Financial'
import Property from '../Components/HoldingDetails/Property';
import Tenant from '../Components/HoldingDetails/Tenant';
import EditPropertyModal from '../Components/HoldingDetails/EditPropertyModal';
import { useAuth } from '../Context/AuthContext'
import { db } from '../firebase'
import { doc, getDoc } from 'firebase/firestore'

const HoldingDetails = () => {

  const [userData, setUserData] = useState({
    role: 'N/A'
  })

  const [editing, setEditing] = useState(false);

  const { currentUser } = useAuth()

  const getProfileData = async () => {
    if(currentUser.uid !== null){
      const docRef = doc(db, "users", currentUser.uid)
      const docSnap = await getDoc(docRef);
      setUserData(docSnap.data());
    }
  }

  const handleCancel = () => {
    setEditing(false);
  }

  const handleClose = (data) => {
    console.log(data);
    setEditing(false);
  }

  useEffect(() => getProfileData(), [])

  useEffect(() => {console.log(userData)}, [userData])

  useEffect(() => console.log(editing), [editing])

  return (
    <div id='details-container'>
      <Grid container justifyContent= 'center'>
      
      {/* Edit Property Button (if user is an Admin) */}
        {(userData.role === 'Admin' && editing === false) && 
          <Grid item md={8}>
            <Button variant='contained' size='large' onClick={() => setEditing(true)}>Edit Property</Button>
          </Grid>
        }
      
      {/* Overview Section */}
        <Grid item md={8}>
          <Divider className='dividers' style={{marginTop: '4rem'}}>OVERVIEW</Divider>
          <Overview />
        </Grid>

    {/* Location Section */}
        <Grid item md={8}>
          <Divider className='dividers' style={{marginTop: '4rem'}}>LOCATION</Divider>
          <Location />
        </Grid>

    {/* Financial Section */}
        <Grid item md={8}>
          <Divider className='dividers' style={{marginTop: '4rem'}}>FINANCIAL</Divider><br/><br/>
          <Financial />
        </Grid>

    {/* Property Section */}
        <Grid item md={8}>
          <Divider className='dividers' style={{marginTop: '4rem'}}>PROPERTY</Divider><br/><br/>
          <Property />
        </Grid>
      </Grid> 

    {/* Tenant */}
    <div>
      <Grid container justifyContent= 'center'>
        <Grid item width='67%' >
          <Divider className='dividers' style={{marginTop: '4rem'}}>TENANT</Divider>
          <Tenant />
        </Grid>
      </Grid> 
    </div>
    {editing && <EditPropertyModal handleCancel={handleCancel} handleClose={handleClose}/>}
  </div>
  )
}



export default HoldingDetails;