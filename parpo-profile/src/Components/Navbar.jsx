import React, { useEffect, useRef, useState } from 'react'
import { Button, ClickAwayListener, Grid, Grow, Menu, MenuItem, MenuList, Paper, Popper } from '@mui/material'
import { Link } from 'react-router-dom'

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
        label: 'Details (temporary)',
        route: '/details'
    },
    {
        label: 'Users',
        route: '/profile'
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
    <Grid container id='navbar' direction='row' alignItems='center' style={{backgroundColor: '#5CA8B2'}}>
        <Grid sm={2}/>
        <Grid item sm={6} md={4}>
            <h1>ParPo</h1>
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
            <Grid key={link} item md sx={{display: {xs: 'none', md: 'flex'}}} justifyContent='center'> 
                {/* {link.route === '/warehouse' ? 
                    <>
                        <Button component={Link} to={link.route} style={{textDecoration: 'none', color: 'white'}} ref={anchorRef}
                            id="composition-button"
                            aria-controls={open ? 'composition-menu' : undefined}
                            aria-expanded={open ? 'true' : undefined}
                            aria-haspopup="true"
                            onMouseOver={handleToggle}>{link.label}
                        </Button>
                        <Popper
                            open={open}
                            anchorEl={anchorRef.current}
                            role={undefined}
                            placement="bottom-start"
                            transition
                            disablePortal
                        >
                        {({ TransitionProps, placement }) => (
                            <Grow
                            {...TransitionProps}
                            style={{
                                transformOrigin:
                                placement === 'bottom-start' ? 'left top' : 'left bottom',
                            }}
                            >
                            <Paper>
                                <ClickAwayListener onClickAway={handleClose}>
                                <MenuList
                                    autoFocusItem={open}
                                    id="composition-menu"
                                    aria-labelledby="composition-button"
                                    onKeyDown={handleListKeyDown}
                                >
                                    <MenuItem onClick={handleClose}>Tenant Info</MenuItem>
                                    <MenuItem onClick={handleClose}>Warehouse Info</MenuItem>
                                </MenuList>
                                </ClickAwayListener>
                            </Paper>
                            </Grow>
                        )}
                        </Popper>
                    </>
                    :  */}
                    <Button component={Link} to={link.route} style={{textDecoration: 'none', color: 'white'}}>{link.label}</Button>
                {/* } */}
            </Grid>
        ))}
    </Grid>
  )
}

export default Navbar