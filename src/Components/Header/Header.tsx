import React from 'react';
import PageTitle from './PageTitle';
import { default as HeaderImg } from '../../Lib/img/header.jpg';
import { useSelector } from 'react-redux';

const Header = () => {

  const isLoggedIn = useSelector((state: any) => state.profile.isLoggedIn)

  return (
    <div id={isLoggedIn ? 'header' : 'header-full'}>
      <img src={HeaderImg} id={isLoggedIn ? 'header-bg' : 'header-bg-logged-out'} alt='Header background'/>
      <div className={isLoggedIn ? 'visible' : 'hidden'}>
        <PageTitle title={'The Lion Company'} subtitle={'It is your dream we are building'} loggedIn={isLoggedIn}/>
      </div>
    </div>
  )
}

export default Header