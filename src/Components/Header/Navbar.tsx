import React, { useEffect, useRef, useState } from 'react'
import { Button, Grid } from '@mui/material'
import { Link, useLocation } from 'react-router-dom'
import { default as ParPoLogo } from '../../Lib/img/parpo-logo.png';
import NavDrawer from '../NavDrawer'
import { useSelector } from 'react-redux';

const links = [
    {
        label: 'Company',
        route: '/company',
        icon: 'info'
    },
    {
        label: 'Properties',
        route: '/holdings',
        icon: 'business'
    },
    {
        label: 'Users',
        route: '/profiles',
        icon: 'group'
    },    
    {
        label: 'My Profile',
        route: '/profile',
        icon: 'account_circle'
    }   
]

const Navbar = () => {

  let location = useLocation();

  const isLoggedIn = useSelector((state: any) => state.profile.isLoggedIn)

  return (
    <div id='navbar-container'>
      <Grid container id='navbar' direction='row' alignItems='space-between'>
        <Grid item xs={10} sm={8} lg={4} md={4} component={Link} to={'/holdings'} style={{textDecoration: 'none'}}>
            <h1 id='navbar-title'><img src={ParPoLogo} id='navbar-logo' />ParPo</h1>
        </Grid>
        <Grid item xs={2} sm={4} sx={{ display: {md: 'none'}}} alignItems="center">
          {isLoggedIn && <NavDrawer links={links}/>}
        </Grid>
        <Grid item lg={2} md={1} sx={{ display: {sm: 'none', md: 'flex'}}}></Grid>
        {links.map(link => (
          <Grid key={link.label} item md sx={{display: {xs: 'none', md: 'flex'}}}  justifyContent='center' >
            {isLoggedIn && <Button component={Link} to={link.route} className={'nav-link ' + ((link.route === location.pathname) ? ' active ' : ' inactive ')}>
            {link.label}
            </Button> }
          </Grid>
        ))}
      </Grid>
    </div>
  )
}

export default Navbar