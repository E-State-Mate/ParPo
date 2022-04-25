import React, { useState, useEffect } from 'react';
import { Button, Grid, Menu, MenuItem, Stack, Typography } from '@mui/material'
import ScrollspyNav from '../../Lib/utils/scrollSpy'
import { Link } from 'react-router-dom';

const detailLinks = [
    {id: 1, idnm: 'overview', navHeading: 'Overview'},
    {id: 2, idnm: 'location', navHeading: 'Location'},
    {id: 3, idnm: 'financial', navHeading: 'Financial'},
    {id: 4, idnm: 'property', navHeading: 'Property'},
    {id: 5, idnm: 'tenant', navHeading: 'Tenant'}

]
 
const DetailsNav = () => {
    const [anchorEl, setAnchorEl] = useState(null);

    let targetId = detailLinks.map(item => {return (item.idnm)})

    const handleMenu = (event) => {
        setAnchorEl(event.currentTarget)
      }    

    const handleMenuClose = () => {
        setAnchorEl(null);
      };

  return (
    <Grid container style={{backgroundColor: 'white', boxShadow: 'darkgray 0px 3px'}} alignItems='center' p={1}>
        <Grid item xs={8} md={4} alignItems='center'>
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
            <ScrollspyNav scrollTargetIds={targetId} scrollDuration='800' activeNavClass='active'>
                {detailLinks.map((link, index) => (
                    <MenuItem href={`#${link.idnm}`} key={index}>{link.navHeading}</MenuItem>
                ))}
            </ScrollspyNav>
          </Menu>
        </Grid>
        <Grid item md={8} sx={{ display: {xs: 'none', md: 'block'}}}>
            <Grid container direction='row' justifyContent='flex-end' alignItems='center'>
                <ScrollspyNav scrollTargetIds={targetId} scrollDuration='800' activeNavClass='active'>
                    {detailLinks.map((link, index) => (
                        <Button href={`#${link.idnm}`} style={{textDecoration: 'none', color: 'black'}} key={index}>{link.navHeading}</Button>
                    ))}
                </ScrollspyNav>
            </Grid>
        </Grid>
    </Grid>
  )
}

export default DetailsNav