    import React, { useEffect, useRef, useState } from 'react'
    import { Card, Form, Button, Alert } from 'react-bootstrap' 
    import { Divider } from '@mui/material'
    import { useAuth } from '../../Context/AuthContext'
    import { Link, useNavigate } from 'react-router-dom'
    import { GoogleAuthProvider, signInWithPopup } from "firebase/auth"
    import { googleAuthentication } from "../../firebase"
    import { Container } from 'react-bootstrap'
    import { db } from '../../firebase'
    import { doc, getDoc } from 'firebase/firestore'
    import {default as PropTerraLogo } from '../../Lib/img/propterra-logo.png'
    
    const provider = new GoogleAuthProvider();

    export default function Login() {
        const emailRef = useRef<any>();
        const passwordRef = useRef<any>();        
        const { login } = useAuth();
        const { currentUser } = useAuth();
        const [error, setError] = useState("");
        const [loading, setLoading] = useState(false);
        const navigate = useNavigate();
   
    
        async function handleSubmit(event: any) {
            event.preventDefault()
            try { 
                setError("") 
                setLoading(true)
                await login(emailRef.current.value, passwordRef.current.value)
            }   catch (error){
                console.log(error)
                setError('Failed to Log In')
            }
            setLoading(false)
        }

        // Google Login
        // CHANGES NEEDED: THIS OVERWRITES THE EMAIL/PASS LOGIN -- NEED TO FIGURE OUT HOW TO MERGE.
        function googleLogin() {
            return signInWithPopup(googleAuthentication, provider)
            .then((result) => {
                setError("")
                setLoading(true)
            })
            .then(() => {
                setLoading(false)
            })
            .catch((error) => {
                console.log(error)
            }) 
        }

        // Handles routing if login is correct
        useEffect(() => {
            const checkIfUserExists = async() => {
                const docRef = doc(db, "users", currentUser.uid);
                const docSnap = await getDoc(docRef);
                docSnap.exists() ? navigate('/holdings') : navigate('/onboarding')
            }
    
            checkIfUserExists()
        }, [currentUser])

    return (        
        <Container id='onboarding-container'>
            <div className="card-container">
            <Card id='landing-card'>  
                <Card.Body>
                    <h2 className="text-center mb-4">Welcome to ParPo!</h2>
                    <p>ParPo is an edible portfolio manager and viewer for use in the commercial real estate brokerage market.</p>
                    <p>Request access to the latest build below, or see an earlier demo at the link provided.</p>
                    <Divider />
                    <div className='onboarding-button-container'>
                        <Button className='test'>See Pre-Alpha Demo</Button>
                        <Button className='test'>Request Access</Button>
                        <Button className='test' >Log In to Latest</Button>
                    </div>
                    <Divider />
                    <p id='onboarding-card-footer-txt'><img src={PropTerraLogo} className='onboarding-card-img'/>
                        Developed by <b>PropTerra</b>
                    </p>
                </Card.Body>
            </Card>
            <Card id='register-card'>  
                <Card.Body>
                    <h2 className="text-center mb-4">Registration Card</h2>
                    <p>Form to capture user data.</p>
                    <Divider />
                    <Button>Sign in with Google buttons</Button>
                </Card.Body>
            </Card>
            <Card id='login-card'>  
                <Card.Body>
                    <h2 className="text-center mb-4">Log In</h2>
                    {error && <Alert variant="danger">{error}</Alert>} 
                    <Form onSubmit={handleSubmit}>
                        <Form.Group id="email">
                            <Form.Label>Email</Form.Label>
                            <Form.Control type="email" ref={emailRef} required />
                        </Form.Group>
                        <Form.Group id="password">
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" ref={passwordRef} required />
                        </Form.Group>
                        <br/>
                        <Button disabled={loading} className="w-100" type="submit">Log In</Button>
                        <br/><br/>
                        <Button disabled={loading} onClick={googleLogin} variant='light'>
                        <img style={{
                            width:20}} 
                            src="https://drraymondasemente.com/wp-content/uploads/2017/08/google_logo1600.png" 
                            alt="sign in with google" /> 
                            Log In with Google
                        </Button>
                    </Form>
                    <div className= "w-100 text-center mt-3">
                        <Link to="/forgot-password">Forgot Password?</Link>
                    </div>
                </Card.Body>
            </Card>
            {/* <div className= "w-100 text-center mt-2">
                Don't have an account? <Link to="/signup">Sign Up</Link>
            </div> */}
            </div>
        </Container>
        )
    }
