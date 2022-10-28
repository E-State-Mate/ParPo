import React, { useEffect, useRef, useState } from 'react'
import { Alert, Button, Card, Form } from 'react-bootstrap'
import { Link, useNavigate } from 'react-router-dom'
import { useAuth } from '../../Context/AuthContext'
import { googleAuthentication } from "../../firebase"
import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth'

const provider = new GoogleAuthProvider();

type LoginCardProps = {
    switchCardTo: any;
}

const LoginCard: React.FunctionComponent<LoginCardProps> = ({switchCardTo}) => {

    const emailRef = useRef<any>();
    const passwordRef = useRef<any>();        
    const { login, currentUser }: any = useAuth();
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

  return (
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
  )
}

export default LoginCard