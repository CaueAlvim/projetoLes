import { Box, Divider, Grid, List, ListItem, ListItemButton, ListItemIcon, ListItemText } from '@mui/material';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import ReceiptLongIcon from '@mui/icons-material/ReceiptLong';
import SupervisorAccountIcon from '@mui/icons-material/SupervisorAccount';

function UserDrawer({ isAdmin }) {

    return (
        <Box sx={{ bgcolor: 'white', width: '20rem' }}>
            <Grid item xs={12}>
                <List>

                    <ListItem disablePadding>
                        <ListItemButton>
                            <ListItemIcon>
                                <AccountCircleIcon />
                            </ListItemIcon>
                            <ListItemText primary={'Minha conta'} />
                        </ListItemButton>
                    </ListItem>

                    <ListItem disablePadding>
                        <ListItemButton>
                            <ListItemIcon>
                                <ReceiptLongIcon />
                            </ListItemIcon>
                            {isAdmin ? (<ListItemText primary={'Detalhes dos pedidos'} />) : (<ListItemText primary={'Meus pedidos'} />)}
                        </ListItemButton>
                    </ListItem>

                    {isAdmin && (
                        <ListItem disablePadding>
                            <ListItemButton>
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