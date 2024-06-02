import { AppBar, Box, Grid, Toolbar, Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import Footer from '../components/Footer';
import UserDrawer from '../components/UserDrawer';
import logo from '../assets/logo.png';
import UserData from './UserData';
import { useEffect, useState } from 'react';
import UserPedidos from './UserPedidos';
import AdmUsuarios from './AdmUsuarios';
import AdmPedidosTroca from './AdmPedidosTroca';
import Dashboard from './Dashboard';

function UserHome() {
    const navigate = useNavigate();
    const [currentPage, setCurrentPage] = useState('NONE');
    const [user, setUser] = useState({ isAdmin: false });

    useEffect(() => {
        const storedUser = localStorage.getItem('user');
        if (storedUser) {
            setUser(JSON.parse(storedUser));
        }
    }, []);

    const renderPage = () => {
        switch (currentPage) {
            case 'MINHACONTA':
                return <UserData />;
            case 'PEDIDOS':
                return <UserPedidos isAdmin={user?.isAdmin} />;
            case 'USUARIOS':
                return <AdmUsuarios />;
            case 'TROCAS':
                return <AdmPedidosTroca isAdmin={user?.isAdmin} />;
            case 'DASHBOARDS':
                return <Dashboard />;
            default:
                return <Grid container sx={{ display: 'flex', justifyContent: 'center', backgroundColor: '#f1f1f1', alignItems: 'center' }} />;
        }
    }

    return (
        <>
            <Grid sx={{ overflow: 'scroll', height: '100vh' }}>
                <AppBar sx={{ backgroundColor: '#559bbc', position: 'relative', height: '4.2rem' }} >
                    <Toolbar sx={{ display: 'flex', justifyContent: 'space-between' }}>
                        <img id='cypress-user-home' src={logo} alt="Logo" style={{ maxHeight: '50px' }} onClick={() => navigate('/')} />
                        <Button id='cypress-logout' color="inherit" onClick={() => {
                            localStorage.clear();
                            navigate('/');
                        }}>
                            Logout
                        </Button>
                    </Toolbar>
                </AppBar>

                <Box sx={{ display: 'flex', justifyContent: 'center', overflow: 'scroll', height: 'calc(100vh - 9.7rem)' }}>
                    <UserDrawer isAdmin={user.isAdmin} setPage={setCurrentPage} />
                    {renderPage()}
                </Box>
                <Footer />
            </Grid>
        </>
    )
}

export default UserHome;
