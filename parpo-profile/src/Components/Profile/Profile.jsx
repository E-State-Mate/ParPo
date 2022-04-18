import React, { useEffect, useState } from 'react'
import { Avatar, Box, Button, Card, CardActions, CardContent, Divider, Typography } from '@mui/material';
import { db } from '../../firebase'
import { doc, getDoc } from 'firebase/firestore'
import { useAuth } from '../../Context/AuthContext';
  
  const user = {
    avatar: '/static/images/avatars/avatar_6.png',
    city: 'Los Angeles',
    country: 'USA',
    jobTitle: 'Senior Developer',
    name: 'Katarina Smith',
    timezone: 'GTM-7'
  };
  
  export const Profile = (props) => {

    const [profileData, setProfileData] = useState({
      firstName: '',
      lastName: '',
      phone: '',
      location: ''
    });
    
    const { currentUser } = useAuth();
  
    const getProfileData = async () => {
      if(currentUser.uid !== null){
        const docRef = doc(db, "users", currentUser.uid)
        const docSnap = await getDoc(docRef);
        setProfileData(docSnap.data());
      }
    }
  
    useEffect(() => { 
      getProfileData() 
    }, [currentUser])
    return(
      <Card {...props}>
      <CardContent>
        <Box
          sx={{
            alignItems: 'center',
            display: 'flex',
            flexDirection: 'column'
          }}
        >
          <Avatar
            src={user.avatar}
            sx={{
              height: 64,
              mb: 2,
              width: 64
            }}
          />
          <Typography
            color="textPrimary"
            gutterBottom
            variant="h5"
          >
            {`${profileData.firstName} ${profileData.lastName}`}
          </Typography>
          <Typography
            color="textSecondary"
            variant="body2"
          >
            {`${user.city} ${user.country}`}
          </Typography>
          <Typography
            color="textSecondary"
            variant="body2"
          >
            {user.timezone}
          </Typography>
        </Box>
      </CardContent>
      <Divider />
      <CardActions>
        <Button
          color="primary"
          fullWidth
          variant="text"
        >
          Upload picture
        </Button>
      </CardActions>
    </Card>

    )
};