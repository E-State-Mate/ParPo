import { useState, useEffect } from 'react';
import { Box, Button, Card, CardActions, CardContent, CardHeader, Divider, Grid, TextField, Typography } from '@mui/material';
import { db } from '../../firebase';
import { doc, getDoc, setDoc } from 'firebase/firestore'
import { useAuth } from '../../Lib/utils/authContext';

const states = [
  {
    value: 'alabama',
    label: 'Alabama'
  },
  {
    value: 'alaska',
    label: 'Alaska'
  },
  {
    value: 'arizona',
    label: 'Arizona'
  },
  {
    value: 'florida',
    label: 'Florida'
  },
  {
    value: 'new-york',
    label: 'New York'
  },
  {
    value: 'california',
    label: 'California'
  }
];

const profileForm = [
  {
    label: 'First Name',
    name: 'firstName',
  },
  {
    label: 'Last Name',
    name: 'lastName',
  },
  {
    label: 'Phone',
    name: 'phone',
  },
  {
    label: 'Location',
    name: 'location',
  }
]

export const ProfileDetails = (props) => {
  const [editing, setEditing] = useState(false);
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

  const handleSaveChanges = async (e) => {
    e.preventDefault();
    const firstName = e.target[0].value;
    const lastName = e.target[2].value;
    const phone = e.target[4].value;
    const location = e.target[6].value;
    await setDoc(doc(db, "users", currentUser.uid), {
        firstName, lastName, phone, location
    })
    getProfileData();
    switchEditing();
  }

  const switchEditing = () => { 
    setEditing(!editing)
  }

  // useEffect(() => console.log(profileData), [profileData])

  return (
    <Card>
      <CardHeader title='Profile' subheader='Edit profile so X can contact you' />
      <Divider />
      <CardContent>
        <Grid container rowSpacing={3}>
          {editing ?
            <form style={{width: '100%'}} onSubmit={handleSaveChanges}>
              {profileForm.map(field => (
              <Grid item md={12} xs={12} sx={{mt: 3}}>
                  <TextField fullWidth label={field.label} name={field.name} defaultValue={profileData[field.name]} variant='outlined' />
              </Grid>
              ))}
              <Grid item md={12} xs={12} sx={{mt: 6}}>
                <Button variant='contained' type='submit'>Save Details</Button>
              </Grid>
            </form>
            :
            <>
            {profileForm.map(field => (
              <Grid item md={12} xs={12} sx={{mt: 3}}>
                  <Typography>{field.label}</Typography>
                  <Typography>{profileData[field.name]}</Typography>
              </Grid>
            ))}
              <Grid item md={12} xs={12} sx={{mt: 6}}>
                <Button variant='contained' type='submit' onClick={switchEditing}>Edit Profile</Button>
              </Grid>
            </> 
          }  
        </Grid>
      </CardContent>
    </Card>
    // <form>
    //   <Card>
    //     <CardHeader
    //       subheader="The information can be edited"
    //       title="Profile"
    //     />
    //     <Divider />
    //     <CardContent>
    //       <Grid
    //         container
    //         spacing={3}
    //       >
    //         <Grid
    //           item
    //           md={6}
    //           xs={12}
    //         >
    //           <TextField
    //             fullWidth
    //             helperText="Please specify the first name"
    //             label="First name"
    //             name="firstName"
    //             required
    //             value={currentUser.firstName || ''}
    //             variant="outlined"
    //           />
    //         </Grid>
    //         <Grid
    //           item
    //           md={6}
    //           xs={12}
    //         >
    //           <TextField
    //             fullWidth
    //             label="Last name"
    //             name="lastName"
    //             required
    //             value={currentUser.lastName || ''}
    //             variant="outlined"
    //           />
    //         </Grid>
    //         <Grid
    //           item
    //           md={6}
    //           xs={12}
    //         >
    //           <TextField
    //             fullWidth
    //             label="Email Address"
    //             name="email"
    //             required
    //             value={currentUser.email || ''}
    //             variant="outlined"
    //           />
    //         </Grid>
    //         <Grid
    //           item
    //           md={6}
    //           xs={12}
    //         >
    //           <TextField
    //             fullWidth
    //             label="Phone Number"
    //             name="phone"
    //             type="number"
    //             value={currentUser.phone || ''}
    //             variant="outlined"
    //           />
    //         </Grid>
    //         <Grid
    //           item
    //           md={12}
    //           xs={12}
    //         >
    //           <TextField
    //             fullWidth
    //             label="Country"
    //             name="country"
    //             required
    //             value={currentUser.country || ''}
    //             variant="outlined"
    //           />
    //         </Grid>
    //         <Grid
    //           item
    //           md={6}
    //           xs={12}
    //         >
    //           <TextField
    //             fullWidth
    //             label="Select State"
    //             name="state"
    //             required
    //             select
    //             SelectProps={{ native: true }}
    //             value={currentUser.state || ''}
    //             variant="outlined"
    //           >
    //             {states.map((option) => (
    //               <option
    //                 key={option.value}
    //                 value={option.value}
    //               >
    //                 {option.label}
    //               </option>
    //             ))}
    //           </TextField>
    //         </Grid>
    //       </Grid>
    //     </CardContent>
    //     <Divider />
    //     <Box
    //       sx={{
    //         display: 'flex',
    //         justifyContent: 'flex-end',
    //         p: 2
    //       }}
    //     >
    //     { props.editing ? 
    //       <Button
    //       color="primary"
    //       variant="contained"
    //       >
    //         Save details
    //       </Button>
    //       :
    //       <Button
    //       color="primary"
    //       variant="contained"
    //       >
    //         Edit Profile
    //       </Button>
    //     }  
    //     </Box>
    //   </Card>
    // </form>
  );
};