import React, { useEffect, useState } from 'react'
import { Card, Container, Form, Button, Row, Col } from 'react-bootstrap' 
import { Link, useNavigate } from 'react-router-dom'
import { useAuth } from '../Lib/authContext'


const Onboarding = () => {
    const navigate = useNavigate();
    const { currentUser } = useAuth();
    const [name, setName] = useState(['','']);

    useEffect(() => {
    //   console.log(currentUser)
      setName(currentUser.displayName.split(' '))
    }, [currentUser])

    // useEffect(() => console.log(name), [name])
    
    // Needs to write data to all_users collection in Firebase (using Firestore)
    const handleSubmit = (e) => {
        console.log(e)
        navigate('/')
    }

  return (
    <Container className='d-flex align-items-center justify-content-center' style={{ minHeight: "100vh" }}>
        <div className="w-100"  style={{ maxWidth: "400px"}}>
            <Card>  
                <Card.Body>
                    <h2 className="text-center mb-4">New Profile</h2>
                    <Form onSubmit={handleSubmit}>
                        <p>Profile Pic</p>
                        <Form.Group id="email">
                            <Form.Label>Email</Form.Label>
                            <Form.Control type="email" required defaultValue={currentUser.email}/>
                        </Form.Group>
                        <Form.Group id="firstName">
                            <Form.Label>First Name</Form.Label>
                            <Form.Control type="firstName" required defaultValue={name[0]}/>
                        </Form.Group>
                        <Form.Group id="lastName">
                            <Form.Label>Last Name</Form.Label>
                            <Form.Control type="lastName" required defaultValue={name[1]}/>
                        </Form.Group>
                        <Form.Group id="phone">
                            <Form.Label>Phone Number</Form.Label>
                            <Form.Control type="phone"/>
                        </Form.Group>
                        <br/>
                        <Row>
                            <Col>
                                <Button className='w-100' type='submit'>Skip</Button>
                            </Col>
                            <Col>
                                
                            </Col>
                            <Col>
                                <Button className="w-100" type="submit">Next</Button>
                            </Col>
                        </Row>
                    </Form>
                </Card.Body>
            </Card>
        </div>
    </Container>
  )
}

export default Onboarding;