import { useState } from 'react'
import { AppBar, IconButton, Toolbar, Box, Drawer, ListItemIcon, ListItemButton, ListItem, List, Divider, ListItemText } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import logo from '../assets/logo.png';
import { useNavigate } from 'react-router-dom';
import MailIcon from '@mui/icons-material/Mail';
import InboxIcon from '@mui/icons-material/Inbox';

function AppBarUser() {
    const navigate = useNavigate();

    return (
        <AppBar sx={{ backgroundColor: '#559bbc', position: 'relative', height: '4.2rem' }} >
            <Toolbar>
                <img src={logo} alt="Logo" style={{ maxHeight: '50px' }} onClick={() => navigate('/')} />
            </Toolbar>
        </AppBar>
    )
}

export default AppBarUser