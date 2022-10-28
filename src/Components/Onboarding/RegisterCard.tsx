import React from 'react'
import { Button, Card } from 'react-bootstrap'
import { Divider } from '@mui/material'

type RegisterCardProps = {
    switchCardTo: any;
}

const RegisterCard: React.FunctionComponent<RegisterCardProps> = ({switchCardTo}) => {
  return (
    <Card id='register-card'>  
        <Card.Body>
            <h2 className="text-center mb-4">Registration Card</h2>
            <p>Form to capture user data.</p>
            <Divider />
            <Button>Sign in with Google buttons</Button>
        </Card.Body>
    </Card>
  )
}

export default RegisterCard