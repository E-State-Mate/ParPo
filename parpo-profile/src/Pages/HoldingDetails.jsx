import React, { useEffect, useState } from 'react'
import {Button, Divider, Grid, Paper} from '@mui/material';
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
import { useNavigate, useParams, useHistory } from 'react-router-dom';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import EditIcon from '@mui/icons-material/Edit';


const HoldingDetails = ({data}) => {

  const [userData, setUserData] = useState({
    role: 'N/A'
  })
  const [featHolding, setFeatHolding] = useState({})
  const [editing, setEditing] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);
  const { currentUser } = useAuth()
  let slug = useParams();
  const navigate = useNavigate();

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

  const handleClose = async (data) => {
    setEditing(false);
    setFeatHolding(await getHoldingById(slug.slug))
  }

  useEffect(() => getProfileData(), [])

  useEffect(() => {
    if(Object.keys(featHolding).length !== 0 && isLoaded===false){
      setIsLoaded(true);
    }
  }, [featHolding])


  return (
    <div id='details-container'>
    <DetailsNav />
      {/* Edit Property Button (if user is an Admin) */}
      <Paper style={{width: '80%', margin: '4rem auto', padding: '0.5rem'}}>
        <Grid container spacing={8} style={{width: '80%', margin: 'auto'}}>
          <Grid item xs={12} md={6} sx={{margin: '1rem'}}>
            <Button 
              fullWidth variant='contained' size='large' 
              startIcon={<ArrowBackIosIcon />} 
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
                <Divider width='80%' variant='middle' />
              </Grid>
              <Grid item xs={12} md={6}>
                <Button 
                  fullWidth variant='contained' size='large' 
                  startIcon={<EditIcon />} 
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

    {editing && <EditPropertyModal handleCancel={handleCancel} handleClose={handleClose} propertyID={slug.slug} data={featHolding}/>}
  </div>
  )
}


export default HoldingDetails;