import React, { useEffect, useState } from 'react';
import { Box, Button, Tab, Tabs, Typography } from '@mui/material'
import PropTypes from 'prop-types';
import ProfileList from './ProfileList/ProfileList'
import ProfileContainer from './Profile/ProfileContainer'
import { useNavigate } from 'react-router-dom'
import { useAuth } from "../Context/AuthContext"
import { db } from '../firebase'
import { doc, getDoc } from 'firebase/firestore'


function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

export default function TabContainer() {
  const [value, setValue] = React.useState(0);
  const [profileSelect, setProfileSelect] = useState(false);
  const [userSelected, setUserSelected] = useState('')
  const [addingUser, setAddingUser] = useState(false)
  const [error, setError] = useState("")
  const [userData, setUserData] = useState({
    role: ''
  });
  

  const { currentUser, logout } = useAuth()
  const navigate = useNavigate()

 

  const isProfileSelected = (e) => {
    setProfileSelect(true);
    setUserSelected(e.id)
  }

  const openAddUserModal = (e) => {
    setAddingUser(true);
  }

  const closeModal = () => {
    setProfileSelect(false)
    setAddingUser(false)
  }

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const getProfileData = async () => {
    if(currentUser.uid !== null){
      const docRef = doc(db, "users", currentUser.uid)
      const docSnap = await getDoc(docRef);
      setUserData(docSnap.data());
    }
  }

  useEffect(() => {
    getProfileData();
  }, [currentUser])

  useEffect(() => {
    console.log(userData.role)
  }, [userData])

  return (
    <Box sx={{ width: '100%' }}>
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
          <Tab label="Profile List" {...a11yProps(0)} />
          <Tab label="Profile" {...a11yProps(1)} />
        </Tabs>
      </Box>
      <TabPanel value={value} index={0}>
        <ProfileList isProfileSelected={isProfileSelected} openAddUserModal={openAddUserModal}/>
      </TabPanel>
      <TabPanel value={value} index={1}>
        <ProfileContainer />
      </TabPanel>
      
    </Box>
  );
}