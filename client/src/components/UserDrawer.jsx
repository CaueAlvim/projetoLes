import { Divider, Grid, List, ListItem, ListItemButton, ListItemIcon, ListItemText } from '@mui/material';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import ReceiptLongIcon from '@mui/icons-material/ReceiptLong';
import SupervisorAccountIcon from '@mui/icons-material/SupervisorAccount';
import KeyboardReturnIcon from '@mui/icons-material/KeyboardReturn';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';

function UserDrawer({ isAdmin, setPage }) {

    return (
        <Grid sx={{ bgcolor: 'white', width: '20rem' }}>
            <Grid item xs={12}>
                <List>
                    <ListItem disablePadding>
                        <ListItemButton onClick={() => setPage('MINHACONTA')}>
                            <ListItemIcon>
                                <AccountCircleIcon />
                            </ListItemIcon>
                            <ListItemText id='cypress-minhacontaedit' primary={'Minha conta'} />
                        </ListItemButton>
                    </ListItem>
                    <ListItem disablePadding>
                        <ListItemButton onClick={() => setPage('PEDIDOS')}>
                            <ListItemIcon>
                                <ReceiptLongIcon />
                            </ListItemIcon>
                            <ListItemText id='cypress-usuaripedidos' primary={isAdmin ? 'Detalhes dos pedidos' : 'Meus pedidos'} />
                        </ListItemButton>
                    </ListItem>
                    <ListItem disablePadding>
                        <ListItemButton onClick={() => setPage('TROCAS')}>
                            <ListItemIcon>
                                <KeyboardReturnIcon />
                            </ListItemIcon>
                            <ListItemText id='cypress-usuariopedidos-troca' primary={'Pedidos de troca'} />
                        </ListItemButton>
                    </ListItem>
                    {isAdmin && (
                        <ListItem disablePadding>
                            <ListItemButton onClick={() => setPage('USUARIOS')}>
                                <ListItemIcon>
                                    <SupervisorAccountIcon />
                                </ListItemIcon>
                                <ListItemText id='cypress-usuarioscadastrados' primary={'Usuários cadastrados'} />
                            </ListItemButton>
                        </ListItem>
                    )}
                    {isAdmin && (
                        <ListItem disablePadding>
                            <ListItemButton onClick={() => setPage('DASHBOARDS')}>
                                <ListItemIcon>
                                    <TrendingUpIcon />
                                </ListItemIcon>
                                <ListItemText id='cypress-dashboards' primary={'Dashboards'} />
                            </ListItemButton>
                        </ListItem>
                    )}
                </List>
            </Grid>
            <Grid item xs={12}>
                <Divider />
            </Grid>
        </Grid>
    )
}

export default UserDrawer;