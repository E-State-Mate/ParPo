import React, { useEffect, useState } from 'react';
import PageTitle from './PageTitle';
import { default as HeaderImg } from '../../Lib/img/header.jpg';
import { useAuth } from '../../Context/AuthContext';
import { db } from '../../firebase';
import { doc, getDoc } from 'firebase/firestore'

const Header = () => {

  const { currentUser }: any = useAuth();

  const [loggedIn, setLoggedIn] = useState(false)

  useEffect(() => {
    const checkIfUserExists = async() => {
        const docRef = doc(db, "users", currentUser.uid);
        const docSnap = await getDoc(docRef);
        docSnap.exists() ? setLoggedIn(true) : setLoggedIn(false)
    }

    checkIfUserExists()
}, [currentUser])

  return (
    <div id='header'>
      <img src={HeaderImg} id={loggedIn ? 'header-bg' : 'header-bg-logged-out'} alt='Header background'/>
      <div className={loggedIn ? 'visible' : 'hidden'}>
        <PageTitle title={'The Wideman Company'} subtitle={'It is your dream we are building'} loggedIn={loggedIn}/>
      </div>
    </div>
  )
}

export default Header