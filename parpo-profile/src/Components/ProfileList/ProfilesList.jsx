import * as React from 'react';
import { DataGrid, GridSearchIcon } from '@mui/x-data-grid';
import { rows, columns} from '../../Lib/ProfileData'
import { Button, Grid, FormControl, InputAdornment, Input } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import { useState } from 'react';
import { Box } from '@mui/system';
import AddUserModal from './AddUserModal';

const ProfileList = () => {
    const [openAddUser, setOpenAddUser] = useState(false)

    const handleOpen = () => setOpenAddUser(true)
    const handleClose = () => setOpenAddUser(false)

  return (
    <div style={{ height: 400, width: '100%' }}>
        <AddUserModal open={openAddUser} handleClose={handleClose}/>
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
      <DataGrid
        rows={rows}
        columns={columns}
        pageSize={5}
        rowsPerPageOptions={[5]}
        checkboxSelection
        disableSelectionOnClick	
        onRowClick={(e) => console.log(e)}
      />
    </div>
  )
}

export default ProfileList;