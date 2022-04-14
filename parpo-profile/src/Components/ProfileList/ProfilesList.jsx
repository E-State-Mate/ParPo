import * as React from 'react';
import { DataGrid, GridSearchIcon } from '@mui/x-data-grid';
import { rows, columns} from '../../Lib/data/ProfileData'
import { db } from '../../firebase'
import { collection, getDocs } from 'firebase/firestore'
import { Button, Grid, FormControl, InputAdornment, Input } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import { useState } from 'react';
import { Box } from '@mui/system';
import AddUserModal from './AddUserModal';
import { useEffect } from 'react';

const ProfileList = () => {
    const [openAddUser, setOpenAddUser] = useState(false)
    const [users, setUsers] = useState({})
    const [gotUsers, setGotUsers] = useState(false)
    const [userAdded, setUserAdded] = useState(false)

    const handleOpen = () => setOpenAddUser(true)
    const handleClose = () => setOpenAddUser(false)

    const getUsers = async () => {
      // const response = await fetch(`https://us-central1-auth-development-92670.cloudfunctions.net/addDummyUsers`, {mode: 'cors'})
      const usersRef = collection(db, 'users2');
      const allUsers = await getDocs(usersRef);
      const usersData = []
      const allUserData = allUsers.forEach(doc => {
        //usersData.push(doc.data())
        usersData.push(doc.data());
      })
      setUsers(usersData)
      setGotUsers(true)
      console.log(usersData);
  }

  const isUserAdded = () => {
    setUserAdded(true)
    setTimeout(() => {
      setUserAdded(false)
    }, 2000)
  }

  useEffect(() => {
    getUsers();
  }, [])
  useEffect(() => { userAdded && getUsers() }, [userAdded])

  return (
    <div id='users-list'>
        <AddUserModal open={openAddUser} handleClose={handleClose} isUserAdded={isUserAdded}/>
        <Grid container mb={2}>
            <Grid item md={4} />
            <Grid item xs={0} md={2}>
                <Button variant='contained' onClick={() => handleOpen()}>Add User</Button>
            </Grid>
            <Grid item xs={0} md={2}>
                <Button variant='contained' color='secondary' disabled>Remove User(s)</Button>
            </Grid>
            <Grid item xs={0} md={4}>
            <FormControl variant="standard">
                <Input
                    id="input-with-icon-adornment"
                    placeholder='Search users'
                    startAdornment={
                        <InputAdornment position="start">
                            <SearchIcon />
                        </InputAdornment>
                    }
                />
            </FormControl>
            </Grid>
        </Grid>
        <>
          {gotUsers ? 
            <DataGrid
              rows={users}
              columns={columns}
              pageSize={5}
              rowsPerPageOptions={[5]}
              checkboxSelection
              disableSelectionOnClick	
              onRowClick={(e) => console.log(e)}
              autoHeight
            />
            :
            <p>Waiting for users...</p>
          }
        </>
        
    </div>
  )
}

export default ProfileList;