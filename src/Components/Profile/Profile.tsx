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
  
  const Profile = (props: any) => {

    const [fName, setFName] = useState<string>('')
    const [lName, setLName] = useState<string>('')
    const [phone, setPhone] = useState<string>('')
    const [location, setLocation] = useState<string>('')
    
    const { currentUser }: any = useAuth();
  
    const getProfileData = async () => {
      if(currentUser.uid !== null){
        const docRef = doc(db, "users", currentUser.uid)
        const docSnap = await getDoc(docRef);
        const user = docSnap.data();
        if(user !== undefined){
          setFName(user.firstName);
          setLName(user.lastName);
          setPhone(user.phone);
          setLocation(user.location);
        }
        
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
            {`${fName} ${lName}`}
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

export default Profile;