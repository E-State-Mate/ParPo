import React, { useEffect, useRef, useState } from 'react'
import { Card, Container, Form, Button, Alert } from 'react-bootstrap' 
import { useAuth } from '../../Lib/authContext'
import { Link, useNavigate } from 'react-router-dom'
import { EmailAuthProvider, linkWithCredential } from 'firebase/auth'
import '../../animations.css'

export default function Signup() {
    const emailRef = useRef()
    const passwordRef = useRef()
    const passwordConfirmRef = useRef()
    const { signup, currentUser } = useAuth()
    const [error, setError] = useState("")
    const [loading, setLoading] = useState(false)
    const [nextPage, setNextPage] = useState(false);
    const navigate = useNavigate();
 
    async function handleSubmit(event) {
        event.preventDefault()  

        if (passwordRef.current.value !== passwordConfirmRef.current.value) {
            return setError('Passwords do not match')
        }
        try { 
            setError("") 
            setLoading(true)
            console.log("error: ", error)
            console.log("loading: ", loading)
            const credential = EmailAuthProvider.credential(emailRef.current.value, passwordRef.current.value);
            linkWithCredential(currentUser, credential)
            .then((usercred) => {
                const user = usercred.user
                console.log("Account linking success: ", user)
            }).catch((error) => {
                console.log("Account linking error: ", error)
            })
            // await signup(emailRef.current.value, passwordRef.current.value) 
            console.log(emailRef.current.value, passwordRef.current.value)
            setNextPage(true)
        }   catch {
            setError('Failed to create an account')
        }

        setLoading(false)
        console.log("second loading: ", loading)
    }

    useEffect(() => {
        if(nextPage){
            setTimeout( navigate("/onboarding"), 2000)
        }
    }, [nextPage])

    useEffect(() => {
        console.log(currentUser);
    }, [currentUser])

  return (  
    <Container className={'scale-in-center d-flex align-items-center justify-content-center ' + (nextPage ? ' slide-out-right' : undefined)} style={{ minHeight: "100vh" }}>
        <div className="w-100"  style={{ maxWidth: "400px"}}>
            <Card>
                <Card.Body>
                    <h2 className="text-center mb-4">Welcome to ParPo!</h2>
                    <p>Please enter your information below to register.</p>
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
                        <Form.Group id="password-confirm">
                            <Form.Label>Password Confirmation</Form.Label>
                            <Form.Control type="password" ref={passwordConfirmRef} required />
                        </Form.Group>
                        <br/>
                        <Button disabled={loading} className="w-100" type="submit">Sign Up</Button>
                    </Form>
                </Card.Body>
            </Card>
            <div className= "w-100 text-center mt-2">
                Already have an account? <Link to="/login">Log In</Link>
            </div>
        </div>
    </Container>
  )
}
