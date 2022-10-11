import { useState } from 'react';
import {Box, Button, Divider, Drawer, IconButton, List, ListItem, ListItemIcon, ListItemText, Typography } from '@mui/material';
import InfoIcon from '@mui/icons-material/Info';
import BusinessIcon from '@mui/icons-material/Business';
import GroupIcon from '@mui/icons-material/Group';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { Link } from 'react-router-dom'
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
    <Typography variant='h3' align='center' sx={{m: 2}}>ParPo</Typography>
    <Divider />
      <List>
        {links.map((link, index) => (
          <ListItem button key={link.route} component={Link} to={link.route} style={{textDecoration: 'none'}}>
            <ListItemIcon>
              {index === 0 ? <InfoIcon /> : index === 1 ? <BusinessIcon /> : index === 2 ? <GroupIcon/> : index === 3 && <AccountCircleIcon />}
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
    <div>
        <IconButton aria-label='open side menu' onClick={toggleDrawer('right', true)} id='mob-menu-btn' style={{color: 'white'}}><MenuIcon/></IconButton>
        <Drawer
            anchor={'right'}
            open={state['right']}
            onClose={toggleDrawer('right', false)}
        >
            {list('right')}
        </Drawer>
    </div>
  );
}