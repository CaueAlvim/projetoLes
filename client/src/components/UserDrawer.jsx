import { Box, Divider, Grid, List, ListItem, ListItemButton, ListItemIcon, ListItemText } from '@mui/material';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import ReceiptLongIcon from '@mui/icons-material/ReceiptLong';
import SupervisorAccountIcon from '@mui/icons-material/SupervisorAccount';

function UserDrawer({ isAdmin, setPage }) {

    return (
        <Box sx={{ bgcolor: 'white', width: '20rem' }}>
            <Grid item xs={12}>
                <List>
                    <ListItem disablePadding>
                        <ListItemButton onClick={() => setPage('MINHACONTA')}>
                            <ListItemIcon>
                                <AccountCircleIcon />
                            </ListItemIcon>
                            <ListItemText primary={'Minha conta'} />
                        </ListItemButton>
                    </ListItem>
                    {isAdmin && (
                        <ListItem disablePadding>
                            <ListItemButton onClick={() => setPage('PEDIDOS')}>
                                <ListItemIcon>
                                    <ReceiptLongIcon />
                                </ListItemIcon>
                                <ListItemText primary={isAdmin ? 'Detalhes dos pedidos' : 'Meus pedidos'} />
                            </ListItemButton>
                        </ListItem>
                    )}
                    {isAdmin && (
                        <ListItem disablePadding>
                            <ListItemButton onClick={() => setPage('USUARIOS')}>
                                <ListItemIcon>
                                    <SupervisorAccountIcon />
                                </ListItemIcon>
                                <ListItemText primary={'Usuários cadastrados'} />
                            </ListItemButton>
                        </ListItem>
                    )}
                </List>
            </Grid>
            <Grid item xs={12}>
                <Divider />
            </Grid>
        </Box>
    )
}

export default UserDrawer;