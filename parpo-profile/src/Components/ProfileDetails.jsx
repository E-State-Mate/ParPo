import { useState, useEffect } from 'react';
import {
  Box,
  Button,
  Card,
  CardContent,
  CardHeader,
  Divider,
  Grid,
  TextField
} from '@mui/material';
import { db } from '../firebase';
import { collection, getDocs } from 'firebase/firestore'

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

export const ProfileDetails = (props) => {
  const [values, setValues] = useState({
    firstName: 'Katarina',
    lastName: 'Smith',
    email: 'demo@devias.io',
    phone: '',
    state: 'Alabama',
    country: 'USA'
  });

  const [users, setUsers] = useState('')
  const [userData, setUserData] = useState('')

  useEffect(async () => {
      // const getData = async () => {
      //     console.log(db)
      //     const data = await db.collection('users')
      //     console.log(data)
      //     setUsers(data)
      // }
      const getData = async () => {
          const querySnapshot = await getDocs(collection(db, "users"));
          querySnapshot.forEach((doc) => {
            const data = doc.data()
            setUserData(data);
          });
      }
      getData()
  }, [])

  useEffect(() => {
    console.log(userData)
  }, [userData])

  const handleChange = (event) => {
    setValues({
      ...values,
      [event.target.name]: event.target.value
    });
  };

  return (
    <form
      autoComplete="off"
      noValidate
      {...props}
    >
      <Card>
        <CardHeader
          subheader="The information can be edited"
          title="Profile"
        />
        <Divider />
        <CardContent>
          <Grid
            container
            spacing={3}
          >
            <Grid
              item
              md={6}
              xs={12}
            >
              <TextField
                fullWidth
                helperText="Please specify the first name"
                label="First name"
                name="firstName"
                onChange={handleChange}
                required
                value={userData.firstName || ''}
                variant="outlined"
              />
            </Grid>
            <Grid
              item
              md={6}
              xs={12}
            >
              <TextField
                fullWidth
                label="Last name"
                name="lastName"
                onChange={handleChange}
                required
                value={userData.lastName || ''}
                variant="outlined"
              />
            </Grid>
            <Grid
              item
              md={6}
              xs={12}
            >
              <TextField
                fullWidth
                label="Email Address"
                name="email"
                onChange={handleChange}
                required
                value={userData.email || ''}
                variant="outlined"
              />
            </Grid>
            <Grid
              item
              md={6}
              xs={12}
            >
              <TextField
                fullWidth
                label="Phone Number"
                name="phone"
                onChange={handleChange}
                type="number"
                value={userData.phone || ''}
                variant="outlined"
              />
            </Grid>
            <Grid
              item
              md={12}
              xs={12}
            >
              <TextField
                fullWidth
                label="Country"
                name="country"
                onChange={handleChange}
                required
                value={userData.country || ''}
                variant="outlined"
              />
            </Grid>
            <Grid
              item
              md={6}
              xs={12}
            >
              <TextField
                fullWidth
                label="Select State"
                name="state"
                onChange={handleChange}
                required
                select
                SelectProps={{ native: true }}
                value={userData.state || ''}
                variant="outlined"
              >
                {states.map((option) => (
                  <option
                    key={option.value}
                    value={option.value}
                  >
                    {option.label}
                  </option>
                ))}
              </TextField>
            </Grid>
          </Grid>
        </CardContent>
        <Divider />
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'flex-end',
            p: 2
          }}
        >
        { props.editing ? 
          <Button
          color="primary"
          variant="contained"
          >
            Save details
          </Button>
          :
          <Button
          color="primary"
          variant="contained"
          >
            Edit Profile
          </Button>
        }  
        </Box>
      </Card>
    </form>
  );
};