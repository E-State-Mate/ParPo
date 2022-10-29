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

    switchCardTo('landing-card');
  }

  // const handleSkip = () => {
  //     navigate('/holdings')
  // }

  return (
    <Card id='register-card'>
      <Card.Body>
        <h2 className="text-center mb-4">ParPo Registration</h2>
        <p style={{textAlign: 'center'}}>We want to know a little more about you!</p>
        <Form onSubmit={handleSubmit} >
            <Form.Group id="firstName">
              <Form.Label>Name</Form.Label>
              <Form.Control type="firstName" required defaultValue={name[0]}/>
            </Form.Group>
            <Form.Group id="lastName">
              <Form.Label>Email</Form.Label>
              <Form.Control type="lastName" required defaultValue={name[1]}/>
            </Form.Group>
            <Form.Group id="company">
              <Form.Label>Company</Form.Label>
              <Form.Control type="text"/>
            </Form.Group>
            <Form.Group id="role">
              <Form.Label>Role</Form.Label>
              <Form.Control type="text"/>
            </Form.Group>
            <br/>
            <Row>
              <Col>
                  <Button className='w-100' onClick={() => {switchCardTo('landing-card')}} variant='outline-secondary'>Back</Button>
              </Col>
              <Col>
              </Col>
              <Col>
                  <Button className="w-100" onClick={() => {handleSubmit()}} variant='outline-primary' type="submit">Submit</Button>
              </Col>
            </Row>
        </Form>
      </Card.Body>
    </Card>
  )
}

export default RegisterCard