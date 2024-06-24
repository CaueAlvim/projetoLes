import { useNavigate, useParams } from "react-router-dom";
import { AppBar, Button, Grid, Toolbar, Typography } from "@mui/material";
import Footer from "../components/Footer";
import logo from '../assets/logo.png';

function FinalizacaoCompra() {
    const navigate = useNavigate();
    const { pedidoCodigo } = useParams();

    return (
        <>
            <Grid container sx={{ overflow: 'hidden' }}>
                <AppBar sx={{ backgroundColor: '#559bbc', position: 'relative', height: '4.2rem' }} >
                    <Toolbar sx={{ display: 'flex', justifyContent: 'space-between' }}>
                        <img src={logo} alt="Logo" style={{ maxHeight: '50px' }} onClick={() => navigate('/')} />
                        
                    </Toolbar>
                </AppBar>

                <Grid container item sx={{ overflow: 'scroll', display: 'flex', flexDirection: 'column', minHeight: 'calc(100vh - 4.2rem)', backgroundColor: '#f1f1f1', alignItems: 'center' }}>

                    <Grid sx={{ height: '10rem', width: '91vw', marginTop: '1.5rem', display: 'flex', justifyContent: 'center', flexDirection: 'column', alignItems: 'center' }}>
                        <Typography color="black" variant="h3" sx={{ mt: 30, fontWeight: 'bold' }}>
                            Obrigado pela compra!
                        </Typography>
                        <Typography color="black" variant="h4" sx={{ mt: 5 }}>
                            {'Seu pedido de número ' + pedidoCodigo + ' foi feito com sucesso!'}
                        </Typography>
                        <Button id="cypress-go-back-index" variant="outlined" onClick={() => navigate('/')} sx={{ mt: 5, height: '5rem' }}>Voltar à tela inicial</Button>
                    </Grid>

                </Grid>

                <Footer />
            </Grid>
        </>
    )
}

export default FinalizacaoCompra;