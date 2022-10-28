    import React, { useEffect, useState } from 'react'
    import { Container } from 'react-bootstrap'
    import { useNavigate } from 'react-router-dom'
    import { useSelector } from 'react-redux'
    import LandingCard from '../Onboarding/LandingCard'
    import LoginCard from '../Onboarding/LoginCard'
    import RegisterCard from '../Onboarding/RegisterCard'
   
    export default function Login() {

        const [ onboardingCard, setOnboardingCard ] = useState<string>('landing-card')
        const navigate = useNavigate();
        const { isLoggedIn } = useSelector((state: any) => state.profile)
    
        useEffect(() => {
            if(isLoggedIn){
                navigate('/company')
            }
        }, [isLoggedIn])

        // Handles routing if login is correct
        // useEffect(() => {
        //     const checkIfUserExists = async() => {
        //         const docRef = doc(db, "users", currentUser.uid);
        //         const docSnap = await getDoc(docRef);
        //         docSnap.exists() ? navigate('/holdings') : navigate('/onboarding')
        //     }
    
        //     checkIfUserExists()
        // }, [currentUser])

    const handleCardChange = (cardName: string) => {
        setOnboardingCard(cardName)
    }

    const switchOnboardingCardTo = (cardName: string) => {
        switch(cardName){
            case 'landing-card':
                return <LandingCard switchCardTo={handleCardChange}/>
            case 'register-card':
                return <RegisterCard switchCardTo={handleCardChange}/>
            case 'login-card':
                return <LoginCard switchCardTo={handleCardChange}/>
        }
    }        

    return (        
        <Container id='onboarding-container'>
            {switchOnboardingCardTo(onboardingCard)}
        </Container>
        )
    }
