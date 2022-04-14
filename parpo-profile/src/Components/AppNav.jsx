import React, { useState, useEffect } from 'react';
import { Button, Grid, Menu, MenuItem, Stack, Typography } from '@mui/material'
import ScrollspyNav from '../Lib/scrollSpy';
import { Link } from 'react-router-dom';

const navLinks = [
    {id: 1, idnm: 'overview', navHeading: 'Overview'},
    {id: 2, idnm: 'featured', navHeading: 'Featured Properties'},
    {id: 3, idnm: 'team', navHeading: 'Meet our Team'},
    {id: 4, idnm: 'contact', navHeading: 'Contact'}
]
 
const AppNav = () => {
    const [anchorEl, setAnchorEl] = useState(null);

    let targetId = navLinks.map(item => {return (item.idnm)})

    const handleMenu = (event) => {
        setAnchorEl(event.currentTarget)
      }    

    const handleMenuClose = () => {
        setAnchorEl(null);
      };

  return (
    <Grid container style={{backgroundColor: 'white', boxShadow: 'darkgray 0px 3px'}} alignItems='center' p={1}>
        <Grid item xs={8} md={4} alignItems='center'>
            <Typography variant='caption'>Breadcrumbs/Breadcrumbs/Breadcrumbs</Typography>
        </Grid>
        <Grid item xs />
        <Grid item sm={4} sx={{ display: {md: 'none'}}} textAlign='right'>
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
             {navLinks.map(link => (
                <ScrollspyNav scrollTargetIds={targetId} scrollDuration='800' activeNavClass='active'>
                    {navLinks.map((link, index) => (
                        <MenuItem component={Link} to={`#${link.idnm}`} key={index}>{link.navHeading}</MenuItem>
                    ))}
                </ScrollspyNav>
             ))}
          </Menu>
        </Grid>
        <Grid item md={8} sx={{ display: {xs: 'none', md: 'block'}}}>
            <Grid container direction='row' justifyContent='flex-end' alignItems='center'>
                <ScrollspyNav scrollTargetIds={targetId} scrollDuration='800' activeNavClass='active'>
                    {navLinks.map((link, index) => (
                        <Button href={`#${link.idnm}`} style={{textDecoration: 'none', color: 'black'}} key={index}>{link.navHeading}</Button>
                    ))}
                </ScrollspyNav>
            </Grid>
        </Grid>
    </Grid>
  )
}

export default AppNav