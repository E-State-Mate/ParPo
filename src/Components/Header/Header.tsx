import React, { useEffect, useState } from 'react';
import PageTitle from './PageTitle';
import { default as HeaderImg } from '../../Lib/img/header.jpg';
import { useAuth } from '../../Context/AuthContext';
import { useSelector } from 'react-redux';

const Header = () => {

  const isLoggedIn = useSelector((state: any) => state.profile.isLoggedIn)

  useEffect(() => {
    console.log(isLoggedIn)
  }, [isLoggedIn])

//   useEffect(() => {
//     const checkIfUserExists = async() => {
//         const docRef = doc(db, "users", currentUser.uid);
//         const docSnap = await getDoc(docRef);
//         docSnap.exists() ? setLoggedIn(true) : setLoggedIn(false)
//     }

//     checkIfUserExists()
// }, [currentUser])

  return (
    <div id={isLoggedIn ? 'header' : 'header-full'}>
      <img src={HeaderImg} id={isLoggedIn ? 'header-bg' : 'header-bg-logged-out'} alt='Header background'/>
      <div className={isLoggedIn ? 'visible' : 'hidden'}>
        <PageTitle title={'The Wideman Company'} subtitle={'It is your dream we are building'} loggedIn={isLoggedIn}/>
      </div>
    </div>
  )
}

export default Header