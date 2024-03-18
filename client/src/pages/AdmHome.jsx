import { Box, Grid } from '@mui/material';
import Footer from '../components/Footer';
import AppBarUser from '../components/AppBarUser';
import UserDrawer from '../components/UserDrawer';

function AdmHome() {
    return (
        <>
            <Grid sx={{ overflow: 'scroll', height: '100vh' }}>
                <AppBarUser />

                <Box sx={{ display: 'flex', justifyContent: 'center', overflow: 'scroll', height: 'calc(100vh - 9.7rem)' }}>
                    <UserDrawer isAdmin={true}/>

                    <Grid container sx={{display: 'flex', flexDirection: 'column', backgroundColor: '#f1f1f1', alignItems: 'flex-start' }}>

                    </Grid>
                </Box>


                <Footer />
            </Grid>
        </>
    )
}

export default AdmHome;
