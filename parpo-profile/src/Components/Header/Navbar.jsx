import React, { useEffect, useRef, useState } from 'react'
import { Button, ClickAwayListener, Grid, Grow, Menu, MenuItem, MenuList, Paper, Popper } from '@mui/material'
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
        label: 'Details',
        route: '/details'
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
    const [mobOpen, setMobOpen] = useState(false);
    const [anchorEl, setAnchorEl] = useState(null);
    const anchorRef = useRef(null);

    let location = useLocation();

    useEffect(() => {console.log(location)}, [location])

  const handleToggle = () => {
    setOpen((prevOpen) => !prevOpen);
  };

  const toggleMenu = () => {
    setMobOpen(!mobOpen);
  }

  const handleClose = (event) => {
    if (anchorRef.current && anchorRef.current.contains(event.target)) {
      return;
    }
    setOpen(false);
  };

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget)
  }

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  function handleListKeyDown(event) {
    if (event.key === 'Tab') {
      event.preventDefault();
      setOpen(false);
    } else if (event.key === 'Escape') {
      setOpen(false);
    }
  }

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
        <Grid sm={1}/>
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
               <MenuItem key={link} component={Link} to={link.route}>
                 {link.label}</MenuItem>
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