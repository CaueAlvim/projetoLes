import { AppBar, Box, Grid, Toolbar } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import Footer from '../components/Footer';
import UserDrawer from '../components/UserDrawer';
import logo from '../assets/logo.png';
import UserData from '../components/UserData';
import { useState } from 'react';
import AdmPedidos from '../components/AdmPedidos';
import AdmUsuarios from '../components/AdmUsuarios';

function UserHome() {
    const navigate = useNavigate();
    const [currentPage, setCurrentPage] = useState('NONE');

    const renderPage = () => {
        switch (currentPage) {
            case 'MINHACONTA':
                return <UserData />;
            case 'PEDIDOS':
                return <AdmPedidos />;
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
                    <UserDrawer isAdmin={true} setPage={setCurrentPage} />

                    {renderPage()}

                </Box>
                <Footer />
            </Grid>
        </>
    )
}

export default UserHome;
