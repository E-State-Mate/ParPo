import { Box, Button, Divider, Grid, FormControl, InputLabel, Select, MenuItem, Card, CardContent, CardHeader, TextField } from '@mui/material'
import React, {useEffect, useState } from 'react'
import '../App.css'
import {rows} from '../Lib/ProfileData'

const AddUser = ({closeModal, id}) => {
    const [profile, setProfile] = useState(rows[id]);

  return (
    <div className='modal-container'>
        <div id='profile-modal'>
            <div className='close-btn' onClick={() => closeModal()}>X</div>
        <Card>
        <CardHeader
          subheader="Input new user information below"
          title="Add new user"
        />
        <Divider />
        <CardContent>
          <Grid
            container
            spacing={3}
          >
            <Grid
              item
              md={12}
              xs={12}
            >
              <TextField
                fullWidth
                label="Email Address"
                name="email"
                required
                variant="outlined"
              />
            </Grid>
            <Grid
              item
              md={12}
              xs={12}
            >
              <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label">User role</InputLabel>
                <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    label="Role"
                >
                    <MenuItem value={10}>User</MenuItem>
                    <MenuItem value={20}>Org. Member</MenuItem>
                    <MenuItem value={30} disabled>Admin</MenuItem>
                </Select>
                </FormControl>
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
         <Button
          color="primary"
          variant="contained"
          >
            Add User
          </Button>
        </Box>
      </Card>
        </div>
    </div>
  )
}

export default AddUser