import React, { useEffect, useRef, useState } from 'react'
import { Card, Container, Form, Button, Alert } from 'react-bootstrap' 
import { useAuth } from '../../Context/AuthContext'
import { Link, useNavigate } from 'react-router-dom'

export default function Signup() {
    const emailRef = useRef<any>()
    const passwordRef = useRef<any>()
    const passwordConfirmRef = useRef<any>()
    const { signup }: any = useAuth()
    const [error, setError] = useState("")
    const [loading, setLoading] = useState(false)
    const [nextPage, setNextPage] = useState(false);
    const navigate = useNavigate();
 
    async function handleSubmit(event: any) {
        event.preventDefault()  

        if (passwordRef.current.value !== passwordConfirmRef.current.value) {
            return setError('Passwords do not match')
        }
        try { 
            setError("") 
            setLoading(true)
            console.log("error: ", error)
            console.log("loading: ", loading)
            await signup(emailRef.current.value, passwordRef.current.value) 
            console.log(emailRef.current.value, passwordRef.current.value)
            setNextPage(true)
        }   catch {
            setError('Failed to create an account')
        }

        setLoading(false)
        console.log("second loading: ", loading)
    }

    useEffect(() => {
        setTimeout(() => { navigate("/onboarding") }, 2000)
    }, [nextPage])

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
