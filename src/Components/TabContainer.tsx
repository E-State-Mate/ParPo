import React, { useEffect, useState } from 'react';
import { Box, Tab, Tabs, Typography } from '@mui/material'
import PropTypes from 'prop-types';
import ProfileList from './ProfileList/ProfileList'
import ProfileContainer from './Profile/ProfileContainer'
import { useNavigate } from 'react-router-dom'
import { useAuth } from "../Context/AuthContext"
import { db } from '../firebase'
import { doc, getDoc } from 'firebase/firestore'


function TabPanel(props: any) {
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

const a11yProps = (index: number) => {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

export default function TabContainer() {
  const [value, setValue] = useState<number>(0);
  const [userData, setUserData] = useState<any>({
    role: ''
  });
  
  const { currentUser, logout }: any = useAuth() 

  const handleChange = (event: any, newValue: React.SetStateAction<number>) => {
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

  return (
    <Box sx={{ width: '100%' }}>
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
          <Tab label="Profile List" {...a11yProps(0)} />
          <Tab label="Profile" {...a11yProps(1)} />
        </Tabs>
      </Box>
      <TabPanel value={value} index={0}>
        <ProfileList />
      </TabPanel>
      <TabPanel value={value} index={1}>
        <ProfileContainer />
      </TabPanel>
      
    </Box>
  );
}