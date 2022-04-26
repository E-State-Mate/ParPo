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

  // const fetchHolding = async (id, e) => {
  //   if(featHolding.length === 0){
  //   setFeatHolding(await getHoldingById(id));
  //   // console.log(id)
  //   // console.log(featHolding)
  // }  else {
  //   console.log(e)
  // }}


  // if(!featHolding.sqft){
  //   setFeatHolding(await getDetailsByCategory(id));
  //   // console.log(id)
  //   // console.log(featHolding)
  // }  else {
  //   console.log(e)
  // }}


  useEffect(() => {
     const fetchHolding = async () => {
       setFeatHolding(await getDetailsByCategory(slug.slug));
    }
    fetchHolding()
    // console.log(slug.slug)
  }, [slug]) //only called when component mounts


  useEffect(() => {
    getHoldings(slug.slug);
    // console.log(slug.slug)
  }, [slug])
  
  // useEffect(() => {
  //   getDetailsByCategory()
  // })

  useEffect(() => {
    console.log(featHolding)
  }, [featHolding])



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
    {console.log('featHolding ==>', featHolding)}
      <Grid container justifyContent= 'center'>
      
      {/* Edit Property Button (if user is an Admin) */}
        {(userData.role === 'Admin' && editing === false) && 
          <Grid item md={8}>
            <Button variant='contained' size='large' onClick={() => setEditing(true)}>Edit Property</Button>
          </Grid>
        }
      
      {/* Overview Section */}
      {/* {featHolding.map(({sqft}) =>{


        console.log("SQFT", sqft)
       return(  */}
        <Grid item md={8}>
          <Divider className='dividers' style={{marginTop: '4rem'}}>OVERVIEW</Divider>
          <Overview sqft={featHolding.sqft} propertyType={featHolding.propertyType} />
        </Grid>
        {/* )})} */}

    {/* Location Section */}
        {/* <Grid item md={8}>
          <Divider className='dividers' style={{marginTop: '4rem'}}>LOCATION</Divider>
          <Location />
        </Grid> */}

    {/* Financial Section */}
        {/* <Grid item md={8}>
          <Divider className='dividers' style={{marginTop: '4rem'}}>FINANCIAL</Divider><br/><br/>
          <Financial />
        </Grid> */}

    {/* Property Section */}
        {/* <Grid item md={8}>
          <Divider className='dividers' style={{marginTop: '4rem'}}>PROPERTY</Divider><br/><br/>
          <Property />
        </Grid> */}

    {/* Tenant */}
      {/* <Grid item md={8}>
        <Divider className='dividers' style={{marginTop: '4rem'}}>TENANT</Divider>
        <Tenant />
      </Grid> */}
    </Grid>

    {editing && <EditPropertyModal handleCancel={handleCancel} handleClose={handleClose}/>}
  </div>
  )
}


export default HoldingDetails;