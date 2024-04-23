import { useNavigate, useParams } from "react-router-dom";
import { Box, Button, Grid, Typography } from "@mui/material";
import AppBarSearch from "../components/AppBarSearch";
import Footer from "../components/Footer";

function FinalizacaoCompra() {
    const navigate = useNavigate();
    const { pedidoCodigo } = useParams();

    return (
        <>
            <Grid container sx={{ overflow: 'hidden' }}>
                <AppBarSearch />

                <Grid container item sx={{ overflow: 'scroll', display: 'flex', flexDirection: 'column', minHeight: 'calc(100vh - 4.2rem)', backgroundColor: '#f1f1f1', alignItems: 'center' }}>

                    <Box item sx={{ height: '10rem', width: '91vw', marginTop: '1.5rem', display: 'flex', justifyContent: 'center', flexDirection: 'column', alignItems: 'center' }}>
                        <Typography color="black" variant="h3" sx={{ mt: 30, fontWeight: 'bold' }}>
                            Obrigado pela compra!
                        </Typography>
                        <Typography color="black" variant="h4" sx={{ mt: 5 }}>
                            {'Seu pedido de número ' + pedidoCodigo + ' foi feito com sucesso!'}
                        </Typography>
                        <Button variant="outlined" onClick={() => navigate('/')} sx={{ mt: 5, height: '5rem' }}>Voltar à tela inicial</Button>
                    </Box>

                </Grid>

                <Footer />
            </Grid>
        </>
    )
}

export default FinalizacaoCompra;