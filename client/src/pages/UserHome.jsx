import { AppBar, Box, Grid, Toolbar } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import Footer from '../components/Footer';
import UserDrawer from '../components/UserDrawer';
import logo from '../assets/logo.png';
import UserData from './UserData';
import { useEffect, useState } from 'react';
import UserPedidos from './UserPedidos';
import AdmUsuarios from './AdmUsuarios';

function UserHome() {
    const navigate = useNavigate();
    const [currentPage, setCurrentPage] = useState('NONE');
    const [user, setUser] = useState({ isAdmin: false});

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
                return <UserPedidos />;
            case 'USUARIOS':
                return <AdmUsuarios />;
            default:
                return <Grid container sx={{ display: 'flex', justifyContent: 'center', backgroundColor: '#f1f1f1', alignItems: 'center' }} />;
        }
    }

    return (
        <>
            <Grid sx={{ overflow: 'scroll', height: '100vh' }}>
                <AppBar sx={{ backgroundColor: '#559bbc', position: 'relative', height: '4.2rem' }} >
                    <Toolbar>
                        <img src={logo} alt="Logo" style={{ maxHeight: '50px' }} onClick={() => navigate('/')} />
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
