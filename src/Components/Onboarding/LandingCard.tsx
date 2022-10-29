import React from 'react'
import { Button, Card } from 'react-bootstrap'
import { Divider } from '@mui/material'
import { useAuth } from '../../Context/AuthContext'
import {default as PropTerraLogo } from '../../Lib/img/propterra-logo.png'


type LandingCardProps = {
    switchCardTo: any;
}

const LandingCard: React.FunctionComponent<LandingCardProps> = ({switchCardTo}) => {

    const { login }: any = useAuth();

    return (
        <Card id='landing-card' >  
            <Card.Body>
                <h2 className="text-center mb-4">Welcome to ParPo!</h2>
                <p>ParPo is an edible portfolio manager and viewer for use in the commercial real estate brokerage market.</p>
                <p>Check out the pre-alpha prototype below, request access to the latest build, or log in if you are a current user.</p>
                <Divider />
                <div className='onboarding-button-container'>
                    <Button className='test' onClick={() => login('admin@gmail.com', 'password')}>See Pre-Alpha Prototype</Button>
                    <Button className='test' onClick={() => switchCardTo('register-card')}>Request Access</Button>
                    <Button className='test' onClick={() => switchCardTo('login-card')}>Log In to Latest</Button>
                </div>
                <Divider />
                <p id='onboarding-card-footer-txt'><img src={PropTerraLogo} className='onboarding-card-img'/>
                    Developed by <b>PropTerra</b>
                </p>
            </Card.Body>
        </Card>
  )
}

export default LandingCard