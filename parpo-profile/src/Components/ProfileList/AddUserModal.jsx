import React, { useState, useEffect } from 'react'
import { Box, Button, Divider, MenuItem, Modal, TextField, Typography } from '@mui/material'
import { sendSignInLinkToEmail } from "firebase/auth";
import { auth } from '../../firebase'

const actionCodeSettings = {
    url: 'www.estatemateservices.com',
    handleCodeInApp: true,
  };

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '1px solid #000',

    boxShadow: 24,
    p: 4,
  };

  const roles = [
    {
        value: 'viewer',
        label: 'Viewer',
        desc: 'Viewers can only view organization holdings'
    },
    {
        value: 'manager',
        label: 'Manager',
        desc: 'Managers can only add viewers.'
    },
    {
        value: 'admin',
        label: 'Admin',
        desc: 'Admins can add/modify both holdings and viewers.'
    }
  ]
const AddUserModal = ({open, handleClose}) => {
    const [email, setEmail] = useState('')
    const [role, setRole] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault(); 
        setEmail(e.target[0].value)
        setRole(e.target[2].value)
        try{
            sendSignInLinkToEmail(auth, e.target[0].value, {
                url: 'https://parpo-authentication.netlify.app',
                handleCodeInApp: true
            })
        } catch (error){
            console.log(error)
        }
    }

    // const signUpWithEmail = async () => {
    //     await sendSignInLinkToEmail(auth, email, actionCodeSettings)
    //         .then(() => {
    //             console.log('toots')
    //             window.localStorage.setItem('emailForSignIn', email);
    //         })
    //         .catch((error) => {
    //             const errorCode = error.code;
    //             const errorMessage = error.message;
    //         });
    // }

  return (
    <div>
        <Modal open={open} onClose={handleClose}>
            <Box sx={style}>
                <form onSubmit={(e) => handleSubmit(e)}>
                    <TextField fullWidth label='Email'
                        helperText='Enter user email'
                        sx={{mb: 2}}/>
                    <TextField fullWidth label='Role'
                        helperText='Select user role'
                        select
                        sx={{mb: 2}}
                    >
                        {roles.map((role,index) => (
                            <div key={role.value} value={role.value} style={{padding: '1rem 1rem'}}>
                                    <Typography gutterBottom><b>{role.label}</b></Typography>
                                    <Typography variant='caption'>{role.desc}</Typography>
                                    {index !==roles.length-1 && <Divider sx={{mt:2}} /> }
                            </div>
                        ))}   
                    </TextField>
                    <Button variant='contained' type='submit'>Submit</Button>
                </form>
            </Box>
        </Modal>
    </div>
  )
}

export default AddUserModal