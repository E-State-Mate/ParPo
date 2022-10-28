import React, { useEffect, useState } from 'react'
import { Button, Card, Col, Container, Form, Row } from 'react-bootstrap'
import { Divider } from '@mui/material'
import { doc, setDoc } from 'firebase/firestore';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../Context/AuthContext';
import { db } from '../../firebase';

type RegisterCardProps = {
    switchCardTo: any;
}

const RegisterCard: React.FunctionComponent<RegisterCardProps> = ({switchCardTo}) => {
  const navigate = useNavigate();
  const { currentUser }: any = useAuth();
  const [name, setName] = useState(['','']);
  const [nextPage, setNextPage] = useState(false);

  // useEffect(() => {
  //   console.log(currentUser)
  //   currentUser.displayName !== null && setName(currentUser.displayName.split(' '))
  // }, [currentUser])

  useEffect(() => {
      // setTimeout(() => { navigate("/onboarding")}, 2000)
  }, [nextPage])


  // useEffect(() => console.log(name), [name])
  
  // Needs to write data to all_users collection in Firebase (using Firestore)
  // const handleSubmit = async (e: any) => {
  //     e.preventDefault();
  //     console.log(e.target[1].value)
  //     const firstName = e.target[0].value;
  //     const lastName = e.target[1].value;
  //     const phone = e.target[2].value;
  //     await setDoc(doc(db, "users", currentUser.uid), {
  //         firstName, lastName, phone
  //     }, {merge: true})
  //     navigate('/holdings')
  // }

  const handleSubmit = () => {

  }

  // const handleSkip = () => {
  //     navigate('/holdings')
  // }

  return (
    <Container className={'slide-in-left d-flex align-items-center justify-content-center ' + (nextPage ? ' slide-out-right' : undefined)} style={{ minHeight: "100vh" }}>
        <div className="w-100"  style={{ maxWidth: "400px"}}>
          <Card>
            <Card.Body>
              <h2 className="text-center mb-4">One more thing...</h2>
              <p style={{textAlign: 'center'}}>We want to know a little more about you!</p>
              <Form onSubmit={handleSubmit} >
                  <p>Profile Pic</p>
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
                        <Button className='w-100' href='/holdings' variant='outline-secondary'>Skip</Button>
                    </Col>
                    <Col>
                    </Col>
                    <Col>
                        <Button className="w-100" variant='outline-primary' type="submit">Next</Button>
                    </Col>
                  </Row>
              </Form>
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
        </div>
    </Container>
  )
}

export default RegisterCard