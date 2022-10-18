import { useState } from 'react'
import { Box, Button, FormHelperText, MenuItem, Modal, TextField, Typography } from '@mui/material'
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
const AddUserModal = ({open, handleClose, isUserAdded}) => {
    const [email, setEmail] = useState('')
    const [role, setRole] = useState('')
    const [msg, setMsg] = useState(false)

    const handleSubmit = (e) => {
        console.log(e.target[0].value)
        e.preventDefault(); 
        setEmail(e.target[0].value)
        setRole(e.target[2].value)
        sendAddUser()
        try{
            sendSignInLinkToEmail(auth, e.target[0].value, {
                url: 'https://parpo-authentication.netlify.app/signup',
                handleCodeInApp: true
            })
        } catch (error){
            console.log(error)
        }
    }

    const sendAddUser = async () => {
        const response = await fetch(`https://us-central1-auth-development-92670.cloudfunctions.net/addUser/?email=${email}&role=${role}`, {mode: 'cors'})
        .then(() => {
            setMsg('Invite sent to user\'s email')
            setTimeout(() => {
                setMsg('')  
            }, 5000)
            isUserAdded()
        })
        .catch((e) => {
            setMsg('Issue adding user. Try again later.')
            setTimeout(() => {
                setMsg('')
            }, 5000)
            console.log(e);
        })
    }

  return (
    <div>
        <Modal open={open} onClose={handleClose}>
            <Box sx={style}>
                <Typography variant='h4' gutterBottom style={{textAlign: 'center'}}>Add user</Typography>
                {/* NEED TO ADD CONFIRMATION OF REQUEST HANDLER */}
                {msg!==false && <p style={{fontSize: '0.6rem', fontWeight: 'bold', textAlign: 'center'}}>{msg}</p>}
                <form onSubmit={(e) => handleSubmit(e)}>
                    <TextField fullWidth label='Email'/>
                    <FormHelperText sx={{mb: 2, mt: 1, pl: 1}}>Enter user email</FormHelperText>
                    <TextField select label='Role' fullWidth>
                    {roles.map((role,index) => (
                        <MenuItem key={role.value} value={role.value} style={{padding: '1rem 1rem', display: 'block'}} divider={index<roles.length-1 ? true : false}>
                                <Typography gutterBottom><b>{role.label}</b></Typography>
                                <Typography variant='caption'>{role.desc}</Typography>
                        </MenuItem>
                    ))}
                    </TextField>
                    <FormHelperText sx={{mb: 2, mt: 1, pl: 1}}>Select user's role</FormHelperText>
                    <Button variant='contained' type='submit'>Submit</Button>
                </form>
            </Box>
        </Modal>
    </div>
  )
}

export default AddUserModal