import React, { useEffect, useRef, useState } from 'react'
import { Button, Grid, Menu, MenuItem } from '@mui/material'
import { Link, useLocation } from 'react-router-dom'

const links = [
    {
        label: 'Company',
        route: '/company'
    },
    {
        label: 'Properties',
        route: '/holdings'
    },
    {
        label: 'Users',
        route: '/profiles'
    },    
    {
        label: 'My Profile',
        route: '/profile'
    }   
]

const Navbar = () => {
    const [open, setOpen] = useState(false);
    const [anchorEl, setAnchorEl] = useState(null);
    const anchorRef = useRef(null);

    let location = useLocation();

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget)
  }

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  // return focus to the button when we transitioned from !open -> open
  const prevOpen = useRef(open);
  useEffect(() => {
    if (prevOpen.current === true && open === false) {
      anchorRef.current.focus();
    }

    prevOpen.current = open;
  }, [open]);


  return (
    <Grid container id='navbar' direction='row' alignItems='center'>
        <Grid item sm={1}/>
        <Grid item sm={6} md={4}>
            <h1 style={{color: 'white'}}>ParPo</h1>
        </Grid>
        <Grid item sm={4} sx={{ display: {md: 'none'}}}>
          <Button 
            id='nav-menu-btn'
            aria-label="mobile menu button"
            aria-controls="menu-appbar"
            aria-haspopup="true"
            onClick={handleMenu}>
            Menu
          </Button>
          <Menu
            id="menu-appbar"
            anchorEl={anchorEl}
            anchorOrigin={{
              vertical: 'top',
              horizontal: 'right',
            }}
            keepMounted
            transformOrigin={{
              vertical: 'top',
              horizontal: 'right',
            }}
            open={Boolean(anchorEl)}
            onClose={handleMenuClose}
          >
             {links.map(link => (
                <MenuItem key={link.label} component={Link} to={link.route}>
                 {link.label}
                </MenuItem>
             ))}
          </Menu>
        </Grid>
        {links.map(link => (
            <Grid key={link.label} item md sx={{display: {xs: 'none', md: 'flex'}}} justifyContent='center' >
              <Button component={Link} to={link.route} style={{
                color: (link.route === location.pathname ? '#5CA8B2' : 'white'),
                borderBottom: (link.route === location.pathname ? '2px solid #5CA8B2' : 'white')}}>{link.label}</Button>
            </Grid>
        ))}
    </Grid>
  )
}

export default Navbar