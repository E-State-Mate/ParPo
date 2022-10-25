import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { Button, Divider, Grid, Paper } from '@mui/material';
import { ArrowBackIos, Edit } from '@mui/icons-material';
import { DetailsNav, EditPropertyModal, Financial, Location, Overview, Property, Tenant } from '../Components/HoldingDetails/holdingDetails'
import { fetchHolding } from '../_features/holdingDetailsSlice';
import { useAuth } from '../Context/AuthContext'
import { db } from '../firebase'
import { doc, getDoc } from 'firebase/firestore'
import type { AppDispatch } from '../_app/store'

const HoldingDetails = () => {

  let slug = useParams();
  const dispatch = useDispatch<AppDispatch>();
  const navigate = useNavigate();
  const { currentUser }: any = useAuth()

  const { featHolding } = useSelector((state: any) => state.holdingDetails)

  const [userData, setUserData] = useState<any | null>()

  const [editing, setEditing] = useState<boolean>(false);
  const [isLoaded, setIsLoaded] = useState<boolean>(false);

  useEffect(() => {
    const fetchHoldingByID = async () => {
      await dispatch(fetchHolding(slug.slug))
    }

    fetchHoldingByID()
  }, [slug]) //only called when component mounts



  const getProfileData = async () => {
    if(currentUser.uid !== null){
      const docRef = doc(db, "users", currentUser.uid)
      const docSnap = await getDoc(docRef);
      setUserData(docSnap.data());
    }
  }

  // const handleCancel = () => {
  //   setEditing(false);
  // }

  // const handleClose = async (data: any) => {
  //   setEditing(false);
  //   dispatch(await fetchHolding(slug.slug))
  // }

  useEffect(() => { getProfileData() }, [])

  useEffect(() => {
    if(Object.keys(featHolding).length !== 0 && isLoaded===false){
      setIsLoaded(true);
    }
  }, [featHolding])


  return (
    <div className='outlet-container'>
      <DetailsNav />
      {/* Edit Property Button (if user is an Admin) */}
      <Paper style={{width: '80%', margin: '4rem auto', padding: '0.5rem'}}>
        <Grid container spacing={8} style={{width: '80%', margin: 'auto'}}>
          <Grid item xs={12} md={6} sx={{margin: '1rem'}}>
            <Button 
              fullWidth variant='contained' size='large' 
              startIcon={<ArrowBackIos />} 
              onClick={() => navigate('/holdings')}
              style={{
                backgroundColor: '#5ca8b2',
                borderRadius: 50
                }}>
                Go Back
              </Button>
          </Grid>
            {(userData.role === 'Admin' && editing === false) && 
            <>
              <Grid item xs={12} sx={{display: {md: 'none !important'}}}>
                <Divider variant='middle' />
              </Grid>
              <Grid item xs={12} md={6}>
                <Button 
                  fullWidth variant='contained' size='large' 
                  startIcon={<Edit />} 
                  onClick={() => setEditing(true)}
                  style={{
                    backgroundColor: '#5ca8b2',
                    borderRadius: 50
                  }}
                >
                  Edit Property
                </Button>
              </Grid>
            </>
            }
        </Grid>
      </Paper>
      <Overview featHolding={featHolding} isLoaded={isLoaded}/>
      <Location featHolding={featHolding} isLoaded={isLoaded}/>
      <Financial featHolding={featHolding} isLoaded={isLoaded}/>
      <Property featHolding={featHolding} isLoaded={isLoaded}/>
      <Tenant featHolding={featHolding} isLoaded={isLoaded}/>

    {/* {editing && <EditPropertyModal handleCancel={handleCancel} handleClose={handleClose} propertyID={slug.slug} data={featHolding}/>} */}
  </div>
  )
}


export default HoldingDetails;