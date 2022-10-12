import { useState } from 'react';
import { Button, Grid } from '@mui/material'
import ScrollspyNav from '../Lib/utils/scrollSpy';

const navLinks = [
    {id: 1, idnm: 'overview', navHeading: 'Overview'},
    {id: 2, idnm: 'about', navHeading: 'About Us'},
    {id: 3, idnm: 'featured', navHeading: 'Featured Properties'},
    {id: 4, idnm: 'team', navHeading: 'Meet our Team'},
    {id: 5, idnm: 'contact', navHeading: 'Contact'}
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
    <Grid container style={{backgroundColor: 'white', boxShadow: 'darkgray 0px 3px'}} alignItems='center' p={1} sx={{ display: {xs: 'none', md: 'block'}}}>
        <Grid item md={12} sx={{ display: {xs: 'none', md: 'block'}}}>
            <Grid container direction='row' justifyContent='flex-end' alignItems='center'>
                <ScrollspyNav scrollTargetIds={targetId} scrollDuration='800' activeNavClass='active'>
                    {navLinks.map((link, index) => (
                        <Button component='a' href={`#${link.idnm}`} style={{textDecoration: 'none', color: 'black'}} key={index}>{link.navHeading}</Button>
                    ))}
                </ScrollspyNav>
            </Grid>
        </Grid>
    </Grid>
  )
}

export default AppNav