import { useEffect, useRef, useState } from 'react'
import { Button, Grid } from '@mui/material'
import { Link, useLocation } from 'react-router-dom'
import NavDrawer from '../NavDrawer'

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
        <Grid item sm={6} md={4} component={Link} to={'/holdings'} style={{textDecoration: 'none'}} sx={{m: 3}}>
            <h1 style={{color: 'white', textDecoration: 'none'}}>ParPo</h1>
        </Grid>
        <Grid item sm={4} sx={{ display: {md: 'none'}}}>
          <NavDrawer links={links}/>
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