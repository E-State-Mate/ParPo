import { useState } from 'react';
import {Box, Button, Divider, Drawer, IconButton, List, ListItem, ListItemIcon, ListItemText, Typography } from '@mui/material';
import { Info, Business, Group, AccountCircle } from '@mui/icons-material'
import { Link } from 'react-router-dom'
import { default as ParPoLogo } from '../Lib/img/parpo-logo.png';
import MenuIcon from '@mui/icons-material/Menu';

export default function NavDrawer({links}) {
  const [state, setState] = useState({
    right: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <Box
      sx={{ width: 200 }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <h3 id='drawer-navbar-title'><img src={ParPoLogo} id='navbar-logo' />ParPo</h3>
      <Divider />
      <List>
        {links.map((link, index) => (
          <ListItem button key={link.route} component={Link} to={link.route} style={{textDecoration: 'none'}}>
            <ListItemIcon>
              {index === 0 ? <Info /> : index === 1 ? <Business /> : index === 2 ? <Group /> : index === 3 && <AccountCircle />}
            </ListItemIcon>
            <ListItemText primary={link.label} sx={{ml: 2}}/>
          </ListItem>
        ))}
      </List>
      <Divider />
      <div id='mob-menu-bottom'>
        <Button variant='contained' id='mob-menu-logout'>Logout</Button>
        <p id='mob-menu-btm-txt'>Powered by <b style={{color: '#555'}}>PropTerra</b></p>
      </div>
    </Box>
  );

  return (
    <>
      <div style={{position: 'relative', width: '100%', height: '100%'}} onClick={toggleDrawer('right', true)}>
        <IconButton aria-label='open side menu' id='mob-menu-btn'><MenuIcon/></IconButton>
      </div>
        <Drawer
            anchor={'right'}
            open={state['right']}
            onClose={toggleDrawer('right', false)}
        >
            {list('right')}
        </Drawer>
    </>
  );
}