import React, { useRef, useState } from 'react'
import { Card, Form, Button, Alert } from 'react-bootstrap' 
import { useAuth } from '../../Context/AuthContext'
import { Link } from 'react-router-dom'


export default function ForgotPassword() {
    const emailRef = useRef<any>()
    const { resetPassword }: any = useAuth()
    const [error, setError] = useState("")
    const [loading, setLoading] = useState(false)
    const [message, setMessage] = useState('')

 
    async function handleSubmit(event: { preventDefault: () => void }) {
        event.preventDefault()

        try { 
            setMessage('')
            setError("") 
            setLoading(true)
            await resetPassword(emailRef.current.value)
            setMessage('An email has been sent to reset your password')
        }   catch {
            setError('Failed to send reset instructions. Please check for valid email.')

        }
        setLoading(false)
    }

  return (  
    <>
        <Card>  
            <Card.Body>
                <h2 className="text-center mb-4">Password Reset</h2>
                {error && <Alert variant="danger">{error}</Alert>} 
                {message && <Alert variant="success">{message}</Alert>} 
                <Form onSubmit={handleSubmit}>
                    <Form.Group id="email">
                        <Form.Label>Email</Form.Label>
                        <Form.Control type="email" ref={emailRef} required />
                    </Form.Group>
                    <Button disabled={loading} className="w-100" type="submit">Reset Password</Button>
                </Form>
                <div className= "w-100 text-center mt-3">
                    <Link to="/login">Log In</Link>
                </div>
            </Card.Body>
        </Card>
        <div className= "w-100 text-center mt-2">
            Don't have an account? <Link to="/signup">Sign Up</Link>
        </div>
    </>
  )
}
