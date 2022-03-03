import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import ProfileList from './ProfilesList'
import ProfileContainer from './ProfileContainer'
import ProfileModal from './ProfileModal';
import AddUser from './AddUser';

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

  useEffect(() => {
    console.log(profileSelect)
  }, [profileSelect])


  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: '100%' }}>
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
          <Tab label="Profile List" {...a11yProps(0)} />
          <Tab label="Profile" {...a11yProps(1)} />
        </Tabs>
      </Box>
      <TabPanel value={value} index={0}>
        { profileSelect && <ProfileModal id={userSelected} closeModal={closeModal}/>}
        { addingUser && <AddUser closeModal={closeModal}/>}
        <ProfileList isProfileSelected={isProfileSelected} openAddUserModal={openAddUserModal}/>
      </TabPanel>
      <TabPanel value={value} index={1}>
        <ProfileContainer />
      </TabPanel>
    </Box>
  );
}