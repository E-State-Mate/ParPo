import React, { useEffect, useState } from 'react'
import {Button, Divider, Grid} from '@mui/material';
import Overview from '../Components/HoldingDetails/Overview';
import Location from '../Components/HoldingDetails/Location';
import Financial from '../Components/HoldingDetails/Financial'
import Property from '../Components/HoldingDetails/Property';
import Tenant from '../Components/HoldingDetails/Tenant';
import DetailsNav from '../Components/HoldingDetails/DetailsNav';
import { getDetailsByCategory, getHoldingById, getHoldings } from '../Lib/utils/holdingsFetcher';
import EditPropertyModal from '../Components/HoldingDetails/EditPropertyModal';
import { useAuth } from '../Context/AuthContext'
import { db } from '../firebase'
import { doc, getDoc } from 'firebase/firestore'
import { useParams } from 'react-router-dom';


const HoldingDetails = ({data}) => {

  const [userData, setUserData] = useState({
    role: 'N/A'
  })
  const [featHolding, setFeatHolding] = useState({})
  const [editing, setEditing] = useState(false);
  const { currentUser } = useAuth()
  let slug = useParams();

  useEffect(() => {
    const id = slug.slug
     const fetchHolding = async () => {
       setFeatHolding(await getHoldingById(id));
    }
    fetchHolding()
    console.log(featHolding)
  }, [slug]) //only called when component mounts

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
    <DetailsNav />
    {/* {console.log('featHolding ==>', featHolding)} */}
      <Grid container justifyContent= 'center'>
      
      {/* Edit Property Button (if user is an Admin) */}
        {(userData.role === 'Admin' && editing === false) && 
          <Grid item md={8}>
            <Button variant='contained' size='large' onClick={() => setEditing(true)}>Edit Property</Button>
          </Grid>
        }
      
      {/* Overview Section */}
        <Grid item md={8} id='overview'>
          <Divider className='dividers' style={{marginTop: '4rem'}}>OVERVIEW</Divider>
          <Overview featHolding={featHolding} />
        </Grid>

    {/* Location Section */}
        <Grid item md={8} id='location'>
          <Divider className='dividers' style={{marginTop: '4rem'}}>LOCATION</Divider>
          <Location featHolding={featHolding}/>
        </Grid>

    {/* Financial Section */}
        <Grid item md={8} id='financial'>
          <Divider className='dividers' style={{marginTop: '4rem'}}>FINANCIAL</Divider><br/><br/>
          <Financial featHolding={featHolding}/>
        </Grid>

    {/* Property Section */}
        <Grid item md={8} id='property'>
          <Divider className='dividers' style={{marginTop: '4rem'}}>PROPERTY</Divider><br/><br/>
          <Property featHolding={featHolding}/>
        </Grid>

    {/* Tenant */}
      <Grid item md={8} id='tenant'>
        <Divider className='dividers' style={{marginTop: '4rem'}}>TENANT</Divider>
        <Tenant featHolding={featHolding}/>
      </Grid>
    </Grid>

    {editing && <EditPropertyModal handleCancel={handleCancel} handleClose={handleClose} propertyID={slug.slug} data={featHolding}/>}
  </div>
  )
}


export default HoldingDetails;